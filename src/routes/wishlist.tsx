import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Heart, X, Star, ShoppingBag } from "lucide-react";
import { useState } from "react";

import heroHamper from "@/assets/hero-hamper.jpg";
import hamper1 from "@/assets/hamper-1.jpg";
import hamper4 from "@/assets/hamper-4.jpg";
import hamper5 from "@/assets/hamper-5.jpg";

import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";

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
      <LuxuryHeader />

      {/* Hero */}
      <section 
        className="py-10 lg:py-14"
        style={{ backgroundColor: '#8C7A95' }}
      >
        <div className="container-evermaze flex items-center gap-5">
          <Heart className="size-8 lg:size-10" style={{ color: 'white' }} />
          <div>
            <h1 className="font-serif text-2xl lg:text-3xl text-white">My Wishlist</h1>
            <p className="mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {items.length} {items.length === 1 ? "item" : "items"} saved
            </p>
          </div>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="py-8 lg:py-12" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="container-evermaze">
          {items.length === 0 ? (
            <div 
              className="text-center py-16 rounded-3xl"
              style={{ 
                backgroundColor: 'white',
                boxShadow: '0 4px 24px rgba(90, 75, 84, 0.06)'
              }}
            >
              <Heart className="size-14 mx-auto mb-4" style={{ color: '#5A4B54', opacity: 0.3 }} />
              <h2 className="font-serif text-2xl mb-2" style={{ color: '#5A4B54' }}>Your wishlist is empty</h2>
              <p className="mb-6" style={{ color: '#5A4B54', opacity: 0.6 }}>Save items you love by clicking the heart icon</p>
              <Link to="/shop" className="btn-primary inline-block">Start Shopping</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="group rounded-2xl overflow-hidden transition-all duration-300"
                  style={{ 
                    backgroundColor: 'white',
                    boxShadow: '0 2px 12px rgba(90, 75, 84, 0.04)'
                  }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-3 right-3 size-9 rounded-full grid place-items-center transition-all duration-300"
                      style={{ backgroundColor: 'rgba(250, 247, 242, 0.95)' }}
                      aria-label="Remove from wishlist"
                    >
                      <X className="size-4" style={{ color: '#5A4B54' }} />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="size-3" 
                          style={{ 
                            color: '#DCC9AE',
                            fill: i < Math.floor(item.rating) ? '#DCC9AE' : 'transparent'
                          }} 
                        />
                      ))}
                      <span className="ml-1 text-xs" style={{ color: '#5A4B54', opacity: 0.6 }}>{item.rating}</span>
                    </div>
                    <h3 className="font-serif text-lg mb-3" style={{ color: '#5A4B54' }}>{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xl" style={{ color: '#8C7A95' }}>₹{item.price.toLocaleString()}</span>
                      <Link
                        to="/cart"
                        className="text-xs px-4 py-2 rounded-full font-medium transition-all duration-300"
                        style={{ 
                          backgroundColor: '#8C7A95',
                          color: 'white'
                        }}
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

      <LuxuryFooter />
    </div>
  );
}
