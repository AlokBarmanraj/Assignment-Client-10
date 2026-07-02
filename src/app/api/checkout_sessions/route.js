import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "../../../lib/stripe";
import { PLANS_PRICE_ID } from "@/lib/stripe";
import { auth } from "@/lib/auth";

export async function POST(request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    const user = session?.user;
    const headersList = await headers();
    const origin = headersList.get("origin");

    const formData = await request.formData();
    const planId = formData.get("plan_id");
    const priceId = PLANS_PRICE_ID[planId];

    // Create Checkout Sessions from body params.
    const checkSession = await stripe.checkout.sessions.create({
        customer_email:user?.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/plans/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(checkSession.url, 303);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
