import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Heart, ArrowRight } from "lucide-react";

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
    img: hamper1
  },
  { 
    price: 499, 
    name: "Classic Hamper", 
    description: "Thoughtful gift for any celebration",
    img: hamper2
  },
  { 
    price: 999, 
    name: "Signature Hamper", 
    description: "Premium selection for special occasions",
    img: hamper3
  },
  { 
    price: 1499, 
    name: "Supreme Hamper", 
    description: "Luxurious experience with premium items",
    img: hamper4
  },
  { 
    price: 1999, 
    name: "Luxury Hamper", 
    description: "Ultimate indulgence with exclusive items",
    img: hamper5
  },
];

function ShopPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header 
        className="py-4 border-b sticky top-0 z-50"
        style={{ 
          backgroundColor: 'rgba(248, 243, 236, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderColor: 'rgba(232, 226, 220, 0.5)',
        }}
      >
        <div className="container-evermaze flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity min-h-[44px]" style={{ color: '#5A4B54' }}>
            <ArrowLeft className="size-4" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
          <Link to="/" className="flex flex-col items-center leading-none">
            <span className="font-serif text-2xl tracking-[0.35em]" style={{ color: '#5A4B54' }}>EVERMAZE</span>
            <span className="mt-1 text-[0.6rem] tracking-[0.4em] uppercase" style={{ color: '#5A4B54', opacity: 0.7 }}>Just For You</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/wishlist" aria-label="Wishlist" className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:opacity-70 transition-opacity" style={{ color: '#5A4B54' }}>
              <Heart className="size-[20px]" />
            </Link>
            <Link to="/cart" aria-label="Cart" className="relative p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:opacity-70 transition-opacity" style={{ color: '#5A4B54' }}>
              <ShoppingBag className="size-[20px]" />
              <span className="absolute -top-1 -right-1 text-white text-[9px] rounded-full size-4 grid place-items-center" style={{ backgroundColor: '#957DAD' }}>2</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="text-white py-16 md:py-20" style={{ backgroundColor: '#957DAD' }}>
        <div className="container-evermaze text-center">
          <h1 className="font-serif text-4xl md:text-6xl">Choose Your Hamper</h1>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Select your package and customize it with your personal touch
          </p>
        </div>
      </section>

      {/* Hamper Types Grid */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#F8F3EC' }}>
        <div className="container-evermaze">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hamperTypes.map((hamper) => (
              <Link
                key={hamper.price}
                to={`/build-your-box?package=${hamper.price}`}
                className="group bg-white border border-border-color rounded-3xl overflow-hidden hover:border-dark-lavender transition-all hover:-translate-y-1"
                style={{ boxShadow: '0 8px 30px rgba(90, 75, 84, 0.08)' }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={hamper.img} alt={hamper.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="block font-serif text-4xl text-white">₹{hamper.price}</span>
                    <span className="block font-serif text-xl text-white/90">{hamper.name}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-sm" style={{ color: '#5A4B54' }}>{hamper.description}</p>
                  <span className="btn-primary text-sm flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center">
                    Customize <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8" style={{ backgroundColor: '#5A4B54' }}>
        <div className="container-evermaze text-center">
          <Link to="/" className="font-serif text-2xl tracking-[0.2em]" style={{ color: 'white' }}>EVERMAZE</Link>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Beautifully personalized gift hampers for every celebration.</p>
          <p className="mt-6 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>© 2026 Evermaze. Made with love.</p>
        </div>
      </footer>
    </div>
  );
}
