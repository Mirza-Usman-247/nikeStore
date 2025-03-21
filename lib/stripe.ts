import Stripe from "stripe";

if (!process.env.NEXT_PUBLIC_STRIPE_SECURITY_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECURITY_KEY, {
  apiVersion: "2025-02-24.acacia",
});
export default stripe;
