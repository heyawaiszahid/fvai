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
