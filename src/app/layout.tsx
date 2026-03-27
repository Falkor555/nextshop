import type { Metadata } from "next";
import "./globals.css";
import BasketHeader from "@/components/BasketHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NextShop",
  description: "Boutique en ligne",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full bg-gray-100">
        <nav className="bg-orange-600 text-white p-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">NextShop</Link>
          <div className="flex gap-4">
            <BasketHeader />
            <Link href="/admin" className="hover:underline">Admin</Link>
          </div>
        </nav>
        <main className="p-6 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}