import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Heart, Grid, List, X } from "lucide-react";
import { useState } from "react";

import hamper1 from "@/assets/hamper-1.jpg";
import hamper2 from "@/assets/hamper-2.jpg";
import hamper3 from "@/assets/hamper-3.jpg";
import hamper4 from "@/assets/hamper-4.jpg";
import hamper5 from "@/assets/hamper-5.jpg";
import hamper6 from "@/assets/hamper-6.jpg";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
});

const allCategories = ["Birthday", "Wedding", "Farewell", "Return Gift", "Pet", "Festival"];

const hampers = [
  { id: 1, name: "Birthday Bliss Basket", price: 199, img: hamper1, tag: "Bestseller", categories: ["Birthday", "Return Gift", "Pet", "Festival"] },
  { id: 2, name: "Wedding Romance", price: 499, img: hamper2, tag: "Popular", categories: ["Wedding", "Farewell"] },
  { id: 3, name: "Farewell Dreams", price: 499, img: hamper3, tag: "Premium", categories: ["Farewell", "Festival"] },
  { id: 4, name: "Return Gift Surprise", price: 199, img: hamper4, tag: null, categories: ["Return Gift", "Birthday", "Pet"] },
  { id: 5, name: "Pet Lovers Delight", price: 199, img: hamper5, tag: "Bestseller", categories: ["Pet", "Birthday"] },
  { id: 6, name: "Festival Special", price: 499, img: hamper6, tag: "New", categories: ["Festival", "Wedding"] },
  { id: 7, name: "Birthday Premium", price: 999, img: hamper1, tag: null, categories: ["Birthday", "Return Gift"] },
  { id: 8, name: "Wedding Supreme", price: 1499, img: hamper2, tag: "Premium", categories: ["Wedding", "Farewell"] },
  { id: 9, name: "Celebration Mega", price: 1999, img: hamper3, tag: "Luxury", categories: ["Birthday", "Wedding", "Farewell", "Festival"] },
  { id: 10, name: "Pet Party Pack", price: 499, img: hamper4, tag: null, categories: ["Pet", "Festival"] },
  { id: 11, name: "Signature Collection", price: 999, img: hamper5, tag: "Popular", categories: ["Birthday", "Wedding", "Farewell", "Return Gift", "Pet", "Festival"] },
  { id: 12, name: "Luxury Wedding", price: 1999, img: hamper6, tag: "Luxury", categories: ["Wedding", "Festival"] },
];

function ShopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const search = Route.useSearch();
  const selectedCategory = search.category || null;

  const filteredHampers = selectedCategory
    ? hampers.filter((h) => h.categories.includes(selectedCategory))
    : hampers;

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
            <span className="mt-1 text-[0.6rem] tracking-[0.4em] uppercase text-muted-foreground">Just For You</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/wishlist" aria-label="Wishlist" className="hover:text-burgundy transition-colors"><Heart className="size-[18px]" /></Link>
            <Link to="/cart" aria-label="Cart" className="relative hover:text-burgundy transition-colors">
              <ShoppingBag className="size-[18px]" />
              <span className="absolute -top-1.5 -right-2 bg-burgundy text-white text-[9px] rounded-full size-4 grid place-items-center">2</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-burgundy text-white py-16 md:py-20">
        <div className="container-evermaze text-center">
          <h1 className="font-serif text-4xl md:text-6xl">
            {selectedCategory ? `${selectedCategory} Hampers` : "Shop Gift Hampers"}
          </h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            {selectedCategory
              ? `Discover our curated collection of ${selectedCategory.toLowerCase()} gift hampers`
              : "Discover our beautifully curated collection of personalized gift hampers"}
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="border-b border-border py-4 bg-card">
        <div className="container-evermaze">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/shop"
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                !selectedCategory
                  ? "bg-burgundy text-white"
                  : "bg-muted text-muted-foreground hover:text-burgundy"
              }`}
            >
              All
            </Link>
            {allCategories.map((cat) => (
              <Link
                key={cat}
                to={`/shop?category=${encodeURIComponent(cat)}`}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === cat
                    ? "bg-burgundy text-white"
                    : "bg-muted text-muted-foreground hover:text-burgundy"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container-evermaze">
          {selectedCategory && (
            <div className="mb-6 flex items-center gap-2">
              <span className="text-muted-foreground">Filtered by:</span>
              <span className="bg-burgundy/10 text-burgundy px-3 py-1 rounded-full text-sm flex items-center gap-2">
                {selectedCategory}
                <Link to="/shop" className="hover:text-burgundy/70">
                  <X className="size-4" />
                </Link>
              </span>
            </div>
          )}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Showing {filteredHampers.length} of {hampers.length} hampers</p>
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
          <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
            {filteredHampers.map((hamper) => (
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
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{hamper.categories.join(" · ")}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-serif text-2xl">₹{hamper.price}</span>
                    <Link to="/build-your-box" className="btn-primary text-sm">Customize</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredHampers.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No hampers found for this category.</p>
              <Link to="/shop" className="btn-primary mt-4 inline-block">View All Hampers</Link>
            </div>
          )}
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
