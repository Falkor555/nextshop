"use client";

import useStore from "@/lib/store";

export default function SuccessPage() {
  const { clear } = useStore();
  clear();
  return <h1>Félicitation paiement réussi</h1>;
}