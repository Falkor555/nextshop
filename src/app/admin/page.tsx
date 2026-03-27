"use client";

import { Product } from "@/generated/prisma/client";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState({ name: "", description: "", price: "", stock: "" });
  const [updateProduct, setUpdateProduct] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      const request = await fetch("/api/products");
      const data = await request.json();
      setProducts(data);
    }
    fetchProducts();
  }, [updateProduct]);

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    await fetch("api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ name: "", description: "", price: "", stock: "" });
    setUpdateProduct(updateProduct + 1);
  }

  async function handleDelete(id: number) {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    setUpdateProduct(updateProduct + 1);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Administration</h1>
      <form className="flex flex-col gap-4 bg-white p-6" onSubmit={handleSubmit}>
        <h2>Ajouter un produit</h2>
        <input type="text" placeholder="Nom"
          onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input type="text" placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })} required />
        <input type="text" placeholder="Prix"
          onChange={(e) => setForm({ ...form, price: e.target.value })} required />
        <input type="text" placeholder="Stock"
          onChange={(e) => setForm({ ...form, stock: e.target.value })} required />
        <button className="bg-orange-600 text-white py-2 px-6 rounded">Ajouter</button>
      </form>

      <table>
        <thead><tr><th>Nom</th><th>Prix</th><th>Stock</th><th></th></tr></thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
              <td><button onClick={() => handleDelete(p.id)}>Supprimer</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}