import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, Heart, Sparkles, Package, Truck, ShieldCheck, Clock, Gift, Award, Leaf, Quote, Search, ShoppingBag, Menu, X, ChevronRight } from "lucide-react";

import storyImg from "@/assets/story.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Evermaze | Personalized Gift Hampers" },
      { name: "description", content: "Discover the story behind Evermaze — a gifting brand born from the belief that the most meaningful gifts are chosen with love." },
    ],
  }),
  component: AboutPage,
});

/* ---------- Header ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/shop" },
    { name: "Build Your Box", to: "/build-your-box" },
    { name: "Our Story", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/98 backdrop-blur-md shadow-sm" : "bg-white"}`}
      style={{ minHeight: '96px', borderBottom: '1px solid var(--border-color)' }}
    >
      <div className="container-evermaze h-full flex items-center">
        <div className="hidden lg:flex items-center justify-between w-full">
          <nav className="flex items-center gap-10" style={{ gap: '44px' }}>
            {nav.slice(0, 2).map((n) => (
              <Link key={n.name} to={n.to} className="text-[17px] font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dusty-lavender hover:after:w-full after:transition-all after:duration-300" style={{ color: 'var(--nav-text)', letterSpacing: '0.3px' }}>
                {n.name}
              </Link>
            ))}
          </nav>

          <Link to="/" className="flex flex-col items-center leading-none mx-12">
            <span className="font-serif text-[46px] tracking-[9px] font-semibold" style={{ color: 'var(--logo-color)' }}>EVERMAZE</span>
            <span className="mt-1 text-[10px] tracking-[9px] uppercase" style={{ color: 'var(--body-text)' }}>JUST FOR YOU</span>
          </Link>

          <nav className="flex items-center gap-10" style={{ gap: '44px' }}>
            {nav.slice(2).map((n) => (
              <Link key={n.name} to={n.to} className="text-[17px] font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dusty-lavender hover:after:w-full after:transition-all after:duration-300" style={{ color: 'var(--nav-text)', letterSpacing: '0.3px' }}>
                {n.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 ml-6">
              <Link to="/wishlist" aria-label="Wishlist" style={{ color: 'var(--nav-text)' }}>
                <Heart className="size-[20px]" />
              </Link>
              <Link to="/cart" aria-label="Cart" className="relative" style={{ color: 'var(--nav-text)' }}>
                <ShoppingBag className="size-[20px]" />
              </Link>
            </div>
          </nav>
        </div>

        <div className="flex lg:hidden items-center justify-between w-full">
          <button onClick={() => setOpen(!open)} className="p-2 -ml-2 z-20" style={{ color: 'var(--nav-text)' }} aria-label="Toggle menu">
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
          <Link to="/" className="flex flex-col items-center leading-none">
            <span className="font-serif text-2xl tracking-[6px] font-semibold" style={{ color: 'var(--logo-color)' }}>EVERMAZE</span>
            <span className="mt-0.5 text-[9px] tracking-[6px] uppercase" style={{ color: 'var(--body-text)' }}>JUST FOR YOU</span>
          </Link>
          <Link to="/cart" aria-label="Cart" style={{ color: 'var(--nav-text)' }}>
            <ShoppingBag className="size-[20px]" />
          </Link>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border-color bg-white" style={{ minHeight: 'calc(100vh - 96px)' }}>
          <nav className="container-evermaze py-8 flex flex-col gap-5">
            {nav.map((n) => (
              <Link key={n.name} to={n.to} className="text-lg font-medium" style={{ color: 'var(--nav-text)' }}>{n.name}</Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function AboutPage() {
  const timeline = [
    { icon: Heart, label: "Thoughtfully Selected" },
    { icon: Sparkles, label: "Carefully Curated" },
    { icon: Package, label: "Beautifully Packed" },
    { icon: Truck, label: "Delivered with Love" },
    { icon: Heart, label: "Made to Make You Smile" },
  ];

  const beliefs = [
    { icon: Heart, label: "Made with Love" },
    { icon: Award, label: "Premium Quality" },
    { icon: Sparkles, label: "Meaningful Connections" },
    { icon: Truck, label: "Safe Delivery" },
    { icon: Leaf, label: "Supporting Small Businesses" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 lg:pt-36 pb-20 lg:pb-28" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container-evermaze">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <span className="text-[11px] tracking-[0.4em] uppercase font-medium" style={{ color: 'var(--dusty-lavender)' }}>Our Story</span>
              <h1 className="mt-6 font-serif text-4xl lg:text-5xl xl:text-6xl" style={{ color: 'var(--heading-color)' }}>
                Our Brand Story
              </h1>
              <p className="mt-8 text-lg leading-relaxed" style={{ color: 'var(--body-text)' }}>
                Evermaze was created with one simple belief — the most meaningful gifts aren't the most expensive ones, they're the ones chosen with love.
              </p>
              <p className="mt-6 leading-relaxed" style={{ color: 'var(--body-text)' }}>
                We believe every celebration deserves a thoughtful surprise. Whether it's a birthday, anniversary, graduation, farewell or just because, every hamper is carefully curated to create unforgettable memories.
              </p>
              <p className="mt-6 leading-relaxed" style={{ color: 'var(--body-text)' }}>
                At Evermaze, every box is packed with love, attention to detail and a personal touch, making every gift feel truly special.
              </p>
              
              {/* Quote */}
              <div className="mt-12 p-10 rounded-3xl" style={{ backgroundColor: 'var(--secondary)' }}>
                <Quote className="size-10 mb-5" style={{ color: 'var(--dusty-lavender)' }} />
                <p className="font-serif text-2xl lg:text-3xl italic leading-relaxed" style={{ color: 'var(--heading-color)' }}>
                  "It's not just a gift,<br />it's a feeling."
                </p>
              </div>
            </div>
            
            <div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden" style={{ backgroundColor: 'var(--secondary)', boxShadow: '0 25px 60px rgba(46, 42, 43, 0.12)' }}>
                <img 
                  src={storyImg} 
                  alt="Evermaze founder carefully packing a gift hamper" 
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="container-evermaze">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            {timeline.map((t, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="size-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(143, 122, 153, 0.15)' }}>
                  <t.icon className="size-7" style={{ color: 'var(--dusty-lavender)' }} />
                </div>
                <p className="text-base font-medium" style={{ color: 'var(--heading-color)' }}>{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe In */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container-evermaze">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-[11px] tracking-[0.4em] uppercase font-medium" style={{ color: 'var(--dusty-lavender)' }}>Our Values</span>
            <h2 className="mt-5 font-serif text-4xl lg:text-5xl" style={{ color: 'var(--heading-color)' }}>What We Believe In</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
            {beliefs.map((b, i) => (
              <div key={i} className="text-center">
                <div className="size-20 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ backgroundColor: 'rgba(143, 122, 153, 0.12)' }}>
                  <b.icon className="size-8" style={{ color: 'var(--dusty-lavender)' }} />
                </div>
                <p className="text-base font-medium" style={{ color: 'var(--heading-color)' }}>{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Banner */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--dusty-lavender)' }}>
        <div className="container-evermaze text-center">
          <p className="font-serif text-3xl lg:text-4xl text-white">
            Thank you for being a part of our journey.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="container-evermaze text-center">
          <h2 className="font-serif text-4xl lg:text-5xl" style={{ color: 'var(--heading-color)' }}>Ready to spread some love?</h2>
          <p className="mt-6 max-w-lg mx-auto text-lg" style={{ color: 'var(--body-text)' }}>
            Browse our collection of thoughtfully curated gift hampers or build your own custom box.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link to="/shop" className="btn-primary">Shop Hampers <ArrowRight className="size-5" /></Link>
            <Link to="/build-your-box" className="btn-outline">Build Your Own Box</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10" style={{ backgroundColor: 'var(--heading-color)' }}>
        <div className="container-evermaze text-center">
          <Link to="/" className="font-serif text-2xl tracking-[0.2em]" style={{ color: 'white' }}>EVERMAZE</Link>
          <p className="mt-2 text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>Just For You</p>
          <p className="mt-6 text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>Beautifully personalized gift hampers for every celebration.</p>
          <div className="mt-6 flex justify-center gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <Link to="/privacy-policy" className="hover:opacity-100">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:opacity-100">Terms</Link>
            <Link to="/shipping-policy" className="hover:opacity-100">Shipping</Link>
            <Link to="/refund-policy" className="hover:opacity-100">Refunds</Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>© 2026 Evermaze. Made with love.</p>
        </div>
      </footer>
    </div>
  );
}
