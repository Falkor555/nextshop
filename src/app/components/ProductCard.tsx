"use client";

import useStore from "@/lib/store";

interface Props {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  stock,
}: Props) {
  const { add } = useStore();

  function handleClick() {
    add({ productId: id, name, price, quantity: 1 });
  }

  return (
    <div className="flex flex-col p-6 bg-white w-72 justify-between">
      <div>
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-orange-600 text-xl font-bold">{price} €</span>
        <span className="text-sm text-gray-600">Stock: {stock}</span>
      </div>
      <button
        className="mt-4 bg-orange-600 text-white py-2 rounded"
        disabled={stock === 0}
        onClick={handleClick}
      >
        {stock > 0 ? "Ajouter au panier" : "Rupture de stock"}
      </button>
    </div>
  );
}
