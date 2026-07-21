import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Heart, X, Plus, Minus, Truck, Sparkles, Shield } from "lucide-react";
import { useState } from "react";

import heroHamper from "@/assets/hero-hamper.jpg";
import hamper5 from "@/assets/hamper-5.jpg";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Shopping Cart | Evermaze" },
      { name: "description", content: "Review your cart and checkout your personalized gift hampers." },
    ],
  }),
  component: CartPage,
});

const cartItems = [
  { id: 1, name: "The Sabrina Bloom", price: 1899, img: heroHamper, qty: 1 },
  { id: 2, name: "Rose Ritual Box", price: 1499, img: hamper5, qty: 1 },
];

function CartPage() {
  const [items, setItems] = useState(cartItems);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 1499 ? 0 : 99;
  const total = subtotal + shipping;

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    );
  };

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
            <Link to="/wishlist" aria-label="Wishlist" className="hover:text-dark-lavender transition-colors"><Heart className="size-[18px]" /></Link>
            <button aria-label="Cart" className="relative hover:text-dark-lavender transition-colors">
              <ShoppingBag className="size-[18px]" />
              <span className="absolute -top-1.5 -right-2 bg-dark-lavender text-white text-[9px] rounded-full size-4 grid place-items-center">{items.length}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-dark-lavender text-white py-8 md:py-12">
        <div className="container-evermaze">
          <h1 className="font-serif text-3xl md:text-4xl">Shopping Cart</h1>
          <p className="mt-2 text-white/70">{items.length} {items.length === 1 ? "item" : "items"} in your cart</p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-8 md:py-12">
        <div className="container-evermaze">
          <div className="grid lg:grid-cols-[1fr_400px] gap-8">
            {/* Cart Items */}
            <div>
              {items.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl border border-border-color">
                  <ShoppingBag className="size-16 mx-auto text-secondary-text mb-4" />
                  <h2 className="font-serif text-2xl">Your cart is empty</h2>
                  <p className="mt-2 text-secondary-text">Add some beautiful gift hampers to get started</p>
                  <Link to="/shop" className="btn-primary mt-6 inline-block">Shop Now</Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="bg-white border border-border-color rounded-2xl p-4 md:p-6">
                      <div className="flex gap-4 md:gap-6">
                        <div className="w-24 md:w-32 h-24 md:h-32 rounded-xl overflow-hidden bg-secondary-bg shrink-0">
                          <img src={item.img} alt={item.name} className="size-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="font-serif text-lg md:text-xl">{item.name}</h3>
                              <p className="mt-1 text-sm text-secondary-text">Personalized Gift Hamper</p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-2 text-secondary-text hover:text-red-500 transition-colors"
                              aria-label="Remove item"
                            >
                              <X className="size-5" />
                            </button>
                          </div>
                          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => updateQty(item.id, -1)}
                                className="size-8 rounded-full border border-border-color grid place-items-center hover:border-dark-lavender transition-colors"
                              >
                                <Minus className="size-4" />
                              </button>
                              <span className="w-8 text-center font-medium">{item.qty}</span>
                              <button
                                onClick={() => updateQty(item.id, 1)}
                                className="size-8 rounded-full border border-border-color grid place-items-center hover:border-dark-lavender transition-colors"
                              >
                                <Plus className="size-4" />
                              </button>
                            </div>
                            <p className="font-serif text-xl">₹{item.price * item.qty}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Order Summary */}
            {items.length > 0 && (
              <div className="lg:sticky lg:top-24 h-fit">
                <div className="bg-white border border-border-color rounded-2xl p-6">
                  <h2 className="font-serif text-2xl mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-secondary-text">Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-text">Shipping</span>
                      <span>{shipping === 0 ? <span className="text-green-600">Free</span> : `₹${shipping}`}</span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-xs text-secondary-text bg-champagne-soft p-2 rounded-lg">
                        Add ₹{1499 - subtotal} more for free shipping!
                      </p>
                    )}
                    <div className="border-t border-border-color pt-4">
                      <div className="flex justify-between font-serif text-xl">
                        <span>Total</span>
                        <span>₹{total}</span>
                      </div>
                    </div>
                  </div>

                  <button className="btn-primary w-full mt-6">
                    Proceed to Checkout
                  </button>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-secondary-text">
                      <Truck className="size-4" />
                      <span>Free shipping on orders above ₹1499</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-secondary-text">
                      <Sparkles className="size-4" />
                      <span>Handpacked with love</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-secondary-text">
                      <Shield className="size-4" />
                      <span>Secure checkout</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Link to="/shop" className="text-sm text-dark-lavender hover:underline">
                    ← Continue Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
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
