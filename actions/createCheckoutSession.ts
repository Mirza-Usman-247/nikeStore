import { CartItem } from "@/cartStore";
import stripe from "@/lib/stripe";
import { urlFor } from "@/sanity/lib/image";
import Stripe from "stripe";

export interface orderData {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
}
export interface CartItems {
  products: CartItem["product"];
  qauntity: number;
}
export async function createCheckoutSession(
  items: CartItem[],
  orderData: orderData
) {
  try {
    const customers = await stripe.customers.list({
      email: orderData?.customerEmail,
      limit: 1,
    });
    const customerID = customers.data.length > 0 ? customers.data[0].id : "";
    const sessionPayload: Stripe.Checkout.SessionCreateParams = {
      metadata: {
        orderNumber: orderData.orderNumber,
        customerName: orderData.customerName,
        customerEmail: orderData.customerEmail,
        clerkUserId: orderData.clerkUserId,
      },
      mode: "payment",
      allow_promotion_codes: true,
      payment_method_types: ["card"],
      invoice_creation: {
        enabled: true,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${orderData.orderNumber}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
      line_items: items.map((items) => ({
        price_data: {
          currency: "USD",
          unit_amount: Math.round(items.product.price! * 100),
          product_data: {
            name: items.product.productName || "Unnamed Product",
            description: items.product.description,
            metadata: { id: items.product._id },
            images:
              items.product.image && items.product.image.asset
                ? [urlFor(items.product.image).url()]
                : undefined,
          },
        },
        quantity: items.quantity,
      })),
    };
    console.log(sessionPayload.customer);
    if (customerID) {
      sessionPayload.customer = customerID;
    } else {
      sessionPayload.customer_email = orderData.customerEmail;
    }
    const session = await stripe.checkout.sessions.create(sessionPayload);
    return session.url;
  } catch (error) {
    console.error("Error creating checkout session:", error)
    throw error
  }
}
