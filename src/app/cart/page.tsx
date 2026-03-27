"use client";

import useStore from "@/lib/store";

export default function CartPage() {
  const { cart } = useStore();

  if (cart.length === 0) {
    return <h1>Panier vide</h1>;
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  async function handleCheckout() {
    const request = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ total }),
    });
    const response = await request.json();
    if (response.url) {
      window.location.href = response.url;
    }
  }

  return (
    <div>
      <table>
        <thead><tr><th>Nom</th><th>Prix</th><th>Quantité</th></tr></thead>
        <tbody>
          {cart.map((p) => (
            <tr key={p.productId}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Total : {total.toFixed(2)}</div>
      <button onClick={handleCheckout}>Commander</button>
    </div>
  );
}