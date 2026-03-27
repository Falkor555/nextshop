"use client";

import ProductCard from "@/components/ProductCard";
import { Product } from "@/generated/prisma/client";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const request = await fetch("/api/products");
      const data = await request.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Notre Catalogue</h1>
      <div className="flex flex-wrap gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}