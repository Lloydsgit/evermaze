import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Heart, ArrowRight, Check } from "lucide-react";

import hamper1 from "@/assets/hamper-1.jpg";
import hamper2 from "@/assets/hamper-2.jpg";
import hamper3 from "@/assets/hamper-3.jpg";
import hamper4 from "@/assets/hamper-4.jpg";
import hamper5 from "@/assets/hamper-5.jpg";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
});

const hamperTypes = [
  { 
    price: 199, 
    name: "Mini Hamper", 
    description: "Perfect for small gestures and intimate moments",
    items: ["Handwritten Letter", "Personalized Keychain", "Chocolates Box", "Mini Vase"],
    img: hamper1
  },
  { 
    price: 499, 
    name: "Classic Hamper", 
    description: "Thoughtful gift for any celebration",
    items: ["Handwritten Letter", "Personalized Keychain", "Photo Frame", "Scented Candle", "Chocolates Box", "Mini Vase"],
    img: hamper2
  },
  { 
    price: 999, 
    name: "Signature Hamper", 
    description: "Premium selection for special occasions",
    items: ["Handwritten Letter", "Personalized Keychain", "Photo Frame", "Scented Candle", "Teddy Bear", "Custom Bookmark", "Chocolates Box", "Scented Potpourri", "Mini Vase"],
    img: hamper3
  },
  { 
    price: 1499, 
    name: "Supreme Hamper", 
    description: "Luxurious experience with premium items",
    items: ["Handwritten Letter", "Personalized Keychain", "Photo Frame", "Scented Candle", "Teddy Bear", "Flower Bouquet", "Photo Album", "Custom Bookmark", "Engraved Token", "Personalized Mug", "Chocolates Box", "Succulent Plant"],
    img: hamper4
  },
  { 
    price: 1999, 
    name: "Luxury Hamper", 
    description: "Ultimate indulgence with exclusive items",
    items: ["Handwritten Letter", "Personalized Keychain", "Photo Frame", "Scented Candle", "Teddy Bear", "Flower Bouquet", "Photo Album", "Custom Bookmark", "Engraved Token", "Personalized Mug", "Chocolates Box", "Succulent Plant", "Scented Potpourri", "Memory Card", "Mini Vase"],
    img: hamper5
  },
];

const occasions = ["Birthday", "Wedding", "Farewell", "Return Gift", "Pet", "Festival"];

function ShopPage() {
  const search = Route.useSearch();
  const selectedOccasion = search.occasion || null;

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
            {selectedOccasion ? `${selectedOccasion} Hampers` : "Choose Your Hamper"}
          </h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            {selectedOccasion 
              ? `Find the perfect ${selectedOccasion.toLowerCase()} hamper for your loved one`
              : "Select your package and customize it with your personal touch"}
          </p>
        </div>
      </section>

      {/* Occasion Filter */}
      <section className="border-b border-border py-4 bg-card">
        <div className="container-evermaze">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/shop"
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                !selectedOccasion
                  ? "bg-burgundy text-white"
                  : "bg-muted text-muted-foreground hover:text-burgundy"
              }`}
            >
              All Hampers
            </Link>
            {occasions.map((occasion) => (
              <Link
                key={occasion}
                to={`/shop?occasion=${encodeURIComponent(occasion)}`}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedOccasion === occasion
                    ? "bg-burgundy text-white"
                    : "bg-muted text-muted-foreground hover:text-burgundy"
                }`}
              >
                {occasion}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hamper Types Grid */}
      <section className="py-12 md:py-16">
        <div className="container-evermaze">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hamperTypes.map((hamper) => (
              <div key={hamper.price} className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-burgundy transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={hamper.img} alt={hamper.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="block font-serif text-4xl text-white">₹{hamper.price}</span>
                    <span className="block font-serif text-xl text-white/90">{hamper.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm">{hamper.description}</p>
                  <div className="mt-4 space-y-2">
                    {hamper.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="size-4 text-burgundy" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {hamper.items.length} items included
                    </span>
                    <Link 
                      to={`/build-your-box?package=${hamper.price}`}
                      className="btn-primary text-sm flex items-center gap-2"
                    >
                      Customize <ArrowRight className="size-4" />
                    </Link>
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
