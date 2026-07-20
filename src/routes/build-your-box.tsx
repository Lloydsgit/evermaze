import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Heart, Sparkles, Plus, Minus, Check } from "lucide-react";
import { useState } from "react";

import heroHamper from "@/assets/hero-hamper.jpg";

export const Route = createFileRoute("/build-your-box")({
  head: () => ({
    meta: [
      { title: "Build Your Box | Evermaze" },
      { name: "description", content: "Create your own personalized gift hamper with exactly what your loved one deserves." },
    ],
  }),
  component: BuildYourBoxPage,
});

const categories = [
  {
    name: "Sweets & Treats",
    items: [
      { name: "Artisan Chocolates", price: 299 },
      { name: "Handmade Cookies", price: 199 },
      { name: "Premium Dry Fruits", price: 449 },
      { name: "Gourmet Candies", price: 149 },
    ],
  },
  {
    name: "Self-Care & Wellness",
    items: [
      { name: "Scented Candle", price: 399 },
      { name: "Bath Bombs Set", price: 299 },
      { name: "Face Mask Pack", price: 249 },
      { name: "Essential Oil Roller", price: 199 },
    ],
  },
  {
    name: "Sentimental Touches",
    items: [
      { name: "Handwritten Note", price: 99 },
      { name: "Photo Frame", price: 249 },
      { name: "Personalized Keychain", price: 199 },
      { name: "Custom Bookmark", price: 149 },
    ],
  },
];

function BuildYourBoxPage() {
  const [selected, setSelected] = useState<Record<string, string[]>>({});
  const [boxSize, setBoxSize] = useState<"small" | "medium" | "large">("medium");

  const toggleItem = (category: string, item: string) => {
    setSelected((prev) => {
      const current = prev[category] || [];
      if (current.includes(item)) {
        return { ...prev, [category]: current.filter((i) => i !== item) };
      }
      return { ...prev, [category]: [...current, item] };
    });
  };

  const totalItems = Object.values(selected).flat().length;
  const basePrice = boxSize === "small" ? 499 : boxSize === "medium" ? 799 : 1099;
  const itemPrice = totalItems * 150;
  const total = basePrice + itemPrice;

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
            <button aria-label="Wishlist" className="hover:text-burgundy transition-colors"><Heart className="size-[18px]" /></button>
            <button aria-label="Cart" className="relative hover:text-burgundy transition-colors">
              <ShoppingBag className="size-[18px]" />
              <span className="absolute -top-1.5 -right-2 bg-burgundy text-white text-[9px] rounded-full size-4 grid place-items-center">2</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-burgundy text-white py-12 md:py-16">
        <div className="container-evermaze text-center">
          <span className="text-[0.7rem] tracking-[0.32em] uppercase text-champagne">Make it personal</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl">Build Your Own Box</h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">Create a custom hamper with exactly what your loved one deserves.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-evermaze">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Builder */}
            <div>
              {/* Box Size */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl mb-4">Choose Your Box Size</h2>
                <div className="flex gap-4">
                  {(["small", "medium", "large"] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setBoxSize(size)}
                      className={`flex-1 py-4 rounded-2xl border transition-all ${
                        boxSize === size
                          ? "border-burgundy bg-burgundy/5 text-burgundy"
                          : "border-border hover:border-burgundy"
                      }`}
                    >
                      <span className="capitalize text-sm font-medium">{size}</span>
                      <span className="block mt-1 font-serif text-lg">
                        ₹{size === "small" ? 499 : size === "medium" ? 799 : 1099}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              {categories.map((category) => (
                <div key={category.name} className="mb-8">
                  <h3 className="font-serif text-xl mb-4">{category.name}</h3>
                  <div className="space-y-2">
                    {category.items.map((item) => {
                      const isSelected = selected[category.name]?.includes(item.name);
                      return (
                        <button
                          key={item.name}
                          onClick={() => toggleItem(category.name, item.name)}
                          className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                            isSelected
                              ? "border-burgundy bg-burgundy/5"
                              : "border-border hover:border-burgundy"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            {isSelected ? (
                              <Check className="size-4 text-burgundy" />
                            ) : (
                              <span className="size-4 border border-border rounded" />
                            )}
                            {item.name}
                          </span>
                          <span className="text-muted-foreground">+₹{item.price}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Preview */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-card border border-border rounded-3xl p-6">
                <h3 className="font-serif text-2xl mb-6">Your Box Preview</h3>
                
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-champagne-soft mb-6">
                  <img src={heroHamper} alt="Your custom hamper" className="size-full object-cover" />
                  {totalItems > 0 && (
                    <div className="absolute top-4 right-4 bg-burgundy text-white size-10 rounded-full grid place-items-center font-serif">
                      {totalItems}
                    </div>
                  )}
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Box ({boxSize})</span>
                    <span>₹{basePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Items ({totalItems})</span>
                    <span>₹{itemPrice}</span>
                  </div>
                  <div className="border-t border-border pt-3 mt-3">
                    <div className="flex justify-between font-serif text-xl">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                </div>

                <button className="btn-primary w-full mt-6">
                  Add to Cart
                </button>

                {totalItems === 0 && (
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    <Sparkles className="size-4 inline mr-1" />
                    Select items to customize your box
                  </p>
                )}
              </div>
            </div>
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
