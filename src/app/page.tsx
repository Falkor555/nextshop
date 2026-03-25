import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black py-12">
      <h1 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-8">
        Nos Produits
      </h1>
      <ProductCard />
    </main>
  );
}