import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const allowedDomains = process.env.ALLOWED_DOMAINS?.split(",") || [];

export async function POST(request) {
  if (process.env.NODE_ENV === "development") {
    return createPaymentIntent();
  }

  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  const isValidDomain = allowedDomains.some((domain) => origin?.includes(domain) || referer?.includes(domain));

  if (!isValidDomain) {
    return new Response(JSON.stringify({ error: "Forbidden" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  return createPaymentIntent();
}

async function createPaymentIntent() {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 50000,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret, transactionId: paymentIntent.id }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
