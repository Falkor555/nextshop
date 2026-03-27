import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { total } = await request.json();

  if (!total) {
    return NextResponse.json({ error: "Panier vide" }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`,
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "eur",
        product_data: { name: "nextshop" },
        unit_amount: Math.round(total * 100),
      },
      quantity: 1,
    }],
  });

  return NextResponse.json({ url: session.url });
}