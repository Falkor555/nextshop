"use client";

import { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
};

export default function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-zinc-500">Chargement...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-5 gap-3 border border-zinc-100 dark:border-zinc-800"
        >
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {product.name}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 flex-1">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xl font-bold text-zinc-900 dark:text-white">
              {product.price.toFixed(2)} €
            </span>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                product.stock > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.stock > 0 ? `${product.stock} en stock` : "Rupture"}
            </span>
          </div>
          <button className="mt-2 w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl py-2 text-sm font-medium hover:opacity-80 transition">
            Ajouter au panier
          </button>
        </div>
      ))}
    </div>
  );
}