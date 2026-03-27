"use client";

import useStore from "@/lib/store";

export default function BasketHeader() {
  const { cart } = useStore();
  return (
    <a href="/cart" className="hover:underline">
      Panier - {cart.length ? cart.length : ""}
    </a>
  );
}