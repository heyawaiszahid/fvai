import Valuation from "@/models/valuation.model";
import mongoose from "mongoose";

const connectToDatabase = async () =>
  mongoose.connection.readyState >= 1 ||
  (await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
  }));

export async function POST(req) {
  try {
    await connectToDatabase();
    const { id, initialQuestions, detailedQuestionnaire, billing } = await req.json();

    const valuation = await Valuation.findOneAndUpdate(
      { id },
      { $set: { initialQuestions, detailedQuestionnaire, billing } },
      { upsert: true, new: true }
    );

    return new Response(JSON.stringify({ success: true, id: valuation.id }));
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: "Operation failed" }), { status: 500 });
  }
}

const allowedDomains = process.env.ALLOWED_DOMAINS?.split(",") || [];

export async function GET(request) {
  if (process.env.NODE_ENV !== "development") {
    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");

    const isValidDomain = allowedDomains.some((domain) => origin?.includes(domain) || referer?.includes(domain));

    if (!isValidDomain) {
      return new Response(JSON.stringify({ success: false, error: "Forbidden" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  try {
    await connectToDatabase();
    const valuations = await Valuation.find({}).sort({ _id: -1 });
    return new Response(JSON.stringify(valuations));
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: "Failed to fetch data" }), { status: 500 });
  }
}
