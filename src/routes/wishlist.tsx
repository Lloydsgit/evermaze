import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Heart, X, Star } from "lucide-react";
import { useState } from "react";

import heroHamper from "@/assets/hero-hamper.jpg";
import hamper1 from "@/assets/hamper-1.jpg";
import hamper4 from "@/assets/hamper-4.jpg";
import hamper5 from "@/assets/hamper-5.jpg";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "My Wishlist | Evermaze" },
      { name: "description", content: "Your saved gift hampers and wishlisted items." },
    ],
  }),
  component: WishlistPage,
});

const wishlistItems = [
  { id: 1, name: "The Sabrina Bloom", price: 1899, rating: 4.9, img: heroHamper },
  { id: 2, name: "Little Wonder", price: 1299, rating: 4.9, img: hamper4 },
  { id: 3, name: "Rose Ritual Box", price: 1499, rating: 4.8, img: hamper5 },
  { id: 4, name: "Sweet Nothings", price: 1199, rating: 4.8, img: hamper1 },
];

function WishlistPage() {
  const [items, setItems] = useState(wishlistItems);

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-border-color py-4">
        <div className="container-evermaze flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-secondary-text hover:text-dark-lavender transition-colors">
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
          <Link to="/" className="flex flex-col items-center leading-none">
            <span className="font-serif text-2xl tracking-[0.35em] text-dark-lavender">EVERMAZE</span>
            <span className="mt-1 text-[0.6rem] tracking-[0.4em] uppercase text-secondary-text">Just For You</span>
          </Link>
          <div className="flex items-center gap-4">
            <button aria-label="Wishlist" className="hover:text-dark-lavender transition-colors">
              <Heart className="size-[18px] fill-dark-lavender text-dark-lavender" />
            </button>
            <Link to="/cart" aria-label="Cart" className="relative hover:text-dark-lavender transition-colors">
              <ShoppingBag className="size-[18px]" />
              <span className="absolute -top-1.5 -right-2 bg-dark-lavender text-white text-[9px] rounded-full size-4 grid place-items-center">2</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-dark-lavender text-white py-8 md:py-12">
        <div className="container-evermaze flex items-center gap-6">
          <Heart className="size-10 md:size-12" />
          <div>
            <h1 className="font-serif text-3xl md:text-4xl">My Wishlist</h1>
            <p className="mt-1 text-white/70">{items.length} {items.length === 1 ? "item" : "items"} saved</p>
          </div>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="py-8 md:py-12">
        <div className="container-evermaze">
          {items.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-border-color">
              <Heart className="size-16 mx-auto text-secondary-text mb-4" />
              <h2 className="font-serif text-2xl">Your wishlist is empty</h2>
              <p className="mt-2 text-secondary-text">Save items you love by clicking the heart icon</p>
              <Link to="/shop" className="btn-primary mt-6 inline-block">Start Shopping</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((item) => (
                <div key={item.id} className="group bg-white border border-border-color rounded-2xl overflow-hidden">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-3 right-3 size-9 bg-white/90 rounded-full grid place-items-center hover:bg-red-500 hover:text-white transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 text-dark-lavender mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`size-3 ${i < Math.floor(item.rating) ? "fill-current" : ""}`} />
                      ))}
                      <span className="ml-1 text-[10px] text-secondary-text">{item.rating}</span>
                    </div>
                    <h3 className="font-serif text-lg">{item.name}</h3>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-serif text-xl">₹{item.price}</span>
                      <Link
                        to="/cart"
                        className="text-xs bg-dark-lavender text-white px-4 py-2 rounded-full hover:bg-dark-lavender/90 transition-colors"
                      >
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {items.length > 0 && (
            <div className="mt-8 text-center">
              <Link to="/shop" className="btn-outline">
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ivory border-t border-border-color pt-12 pb-6 mt-12">
        <div className="container-evermaze text-center">
          <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-dark-lavender">EVERMAZE</Link>
          <p className="mt-4 text-sm text-secondary-text">Beautifully personalized gift hampers for every celebration.</p>
        </div>
      </footer>
    </div>
  );
}
