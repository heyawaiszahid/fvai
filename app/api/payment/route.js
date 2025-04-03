import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  // const origin = request.headers.get("origin");
  // const referer = request.headers.get("referer");

  // if (!origin?.includes("yourdomain.com") && !referer?.includes("yourdomain.com")) {
  //   return new Response(JSON.stringify({ error: "Forbidden" }), {
  //     status: 403,
  //     headers: { "Content-Type": "application/json" },
  //   });
  // }

  const paymentIntentPromise = stripe.paymentIntents.create({
    amount: 50000,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return paymentIntentPromise
    .then((paymentIntent) => {
      return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    })
    .catch((err) => {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    });
}
