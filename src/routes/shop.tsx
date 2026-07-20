import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Heart, Filter, Grid, List } from "lucide-react";
import { useState } from "react";

import hamper1 from "@/assets/hamper-1.jpg";
import hamper2 from "@/assets/hamper-2.jpg";
import hamper3 from "@/assets/hamper-3.jpg";
import hamper4 from "@/assets/hamper-4.jpg";
import hamper5 from "@/assets/hamper-5.jpg";
import hamper6 from "@/assets/hamper-6.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Gift Hampers | Evermaze" },
      { name: "description", content: "Browse our curated collection of personalized gift hampers for every occasion." },
    ],
  }),
  component: ShopPage,
});

const hampers = [
  { id: 1, name: "The Birthday Bliss", price: 1499, img: hamper1, tag: "Bestseller" },
  { id: 2, name: "Anniversary Dreams", price: 1999, img: hamper2, tag: "Popular" },
  { id: 3, name: "Wedding Wishes", price: 2499, img: hamper3, tag: "Premium" },
  { id: 4, name: "Celebration Joy", price: 1299, img: hamper4, tag: null },
  { id: 5, name: "Romance Rose", price: 1799, img: hamper5, tag: "Bestseller" },
  { id: 6, name: "Festive Delight", price: 1599, img: hamper6, tag: "New" },
];

function ShopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-card border-b border-border py-4">
        <div className="container-evermaze flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-burgundy transition-colors">
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
          <Link to="/" className="flex flex-col items-center leading-none">
            <span className="font-serif text-2xl tracking-[0.35em] text-burgundy">EVERMAZE</span>
            <span className="mt-1 text-[0.6rem] tracking-[0.4em] uppercase text-muted-foreground">Special Just For You</span>
          </Link>
          <div className="flex items-center gap-4">
            <button aria-label="Wishlist" className="hover:text-burgundy transition-colors"><Heart className="size-[18px]" /></button>
            <button aria-label="Cart" className="relative hover:text-burgundy transition-colors">
              <ShoppingBag className="size-[18px]" />
              <span className="absolute -top-1.5 -right-2 bg-burgundy text-white text-[9px] rounded-full size-4 grid place-items-center">2</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-burgundy text-white py-16 md:py-20">
        <div className="container-evermaze text-center">
          <h1 className="font-serif text-4xl md:text-6xl">Shop Gift Hampers</h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">Discover our beautifully curated collection of personalized gift hampers, thoughtfully packed for every celebration.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border py-4">
        <div className="container-evermaze flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm hover:text-burgundy transition-colors">
              <Filter className="size-4" />
              Filters
            </button>
            <span className="text-sm text-muted-foreground">Showing 6 of 24 hampers</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${viewMode === "grid" ? "text-burgundy" : "text-muted-foreground"}`}
            >
              <Grid className="size-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${viewMode === "list" ? "text-burgundy" : "text-muted-foreground"}`}
            >
              <List className="size-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container-evermaze">
          <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {hampers.map((hamper) => (
              <div key={hamper.id} className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-burgundy transition-all">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={hamper.img} alt={hamper.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {hamper.tag && (
                    <span className="absolute top-4 left-4 bg-burgundy text-white text-xs px-3 py-1 rounded-full">
                      {hamper.tag}
                    </span>
                  )}
                  <button className="absolute top-4 right-4 size-10 bg-white/90 rounded-full grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-burgundy hover:text-white">
                    <Heart className="size-4" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl">{hamper.name}</h3>
                  <p className="mt-1 text-muted-foreground">Personalized gift hamper</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-serif text-2xl">₹{hamper.price}</span>
                    <Link to="/build-your-box" className="btn-primary text-sm">Customize</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ivory border-t border-border pt-12 pb-6">
        <div className="container-evermaze text-center">
          <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-burgundy">EVERMAZE</Link>
          <p className="mt-4 text-sm text-muted-foreground">Beautifully personalized gift hampers for every celebration.</p>
        </div>
      </footer>
    </div>
  );
}
