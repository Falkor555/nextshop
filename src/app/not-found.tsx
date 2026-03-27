import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h2>Page non trouvée</h2>
      <Link href="/" className="underline text-orange-600 mt-4">
        Retourner à la boutique
      </Link>
    </div>
  );
}