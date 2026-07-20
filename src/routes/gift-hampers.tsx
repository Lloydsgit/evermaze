import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Heart, Gift } from "lucide-react";

import hamper1 from "@/assets/hamper-1.jpg";
import hamper2 from "@/assets/hamper-2.jpg";
import hamper3 from "@/assets/hamper-3.jpg";
import hamper5 from "@/assets/hamper-5.jpg";

export const Route = createFileRoute("/gift-hampers")({
  head: () => ({
    meta: [
      { title: "Gift Hampers | Evermaze" },
      { name: "description", content: "Explore our range of beautifully personalized gift hampers for birthdays, anniversaries, weddings, and more." },
    ],
  }),
  component: GiftHampersPage,
});

const occasions = [
  { name: "Birthday", img: hamper3, count: 8 },
  { name: "Anniversary", img: hamper5, count: 6 },
  { name: "Wedding", img: hamper2, count: 4 },
  { name: "Baby Shower", img: hamper1, count: 5 },
];

function GiftHampersPage() {
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
            <span className="mt-1 text-[0.6rem] tracking-[0.4em] uppercase text-muted-foreground">Love in a Box</span>
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
          <span className="text-[0.7rem] tracking-[0.32em] uppercase text-champagne">Curated with love</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl">Gift Hampers</h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">From intimate celebrations to grand gestures, find the perfect hamper to convey your feelings.</p>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-12 md:py-16">
        <div className="container-evermaze">
          <h2 className="font-serif text-3xl mb-8">Shop by Occasion</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {occasions.map((occasion) => (
              <Link
                key={occasion.name}
                to="/shop"
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl"
              >
                <img src={occasion.img} alt={occasion.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-serif text-2xl">{occasion.name}</h3>
                  <p className="text-sm text-white/70">{occasion.count} hampers</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-evermaze text-center">
          <Gift className="size-12 mx-auto text-burgundy mb-4" />
          <h2 className="font-serif text-3xl">Can't find the perfect hamper?</h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">Build your own custom hamper with exactly what your loved one deserves.</p>
          <Link to="/build-your-box" className="btn-primary mt-6 inline-flex items-center gap-2">
            Build Your Own Box <ArrowLeft className="size-4 rotate-180" />
          </Link>
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
