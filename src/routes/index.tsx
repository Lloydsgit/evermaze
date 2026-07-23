import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search, Heart, ShoppingBag, User, Menu, X, Star,
  Instagram, MessageCircle, Mail, Truck, Gift, Package, HandHeart, Clock, ArrowRight,
  Sparkles, Award, Heart as HeartIcon, Calendar, Palette, Camera,
  Plus, ChevronRight, Quote, Lock, ShieldCheck, Leaf
} from "lucide-react";

import heroHamper from "@/assets/hero-hamper.jpg";
import hamper1 from "@/assets/hamper-1.jpg";
import hamper2 from "@/assets/hamper-2.jpg";
import hamper3 from "@/assets/hamper-3.jpg";
import hamper4 from "@/assets/hamper-4.jpg";
import hamper5 from "@/assets/hamper-5.jpg";
import hamper6 from "@/assets/hamper-6.jpg";
import storyImg from "@/assets/story.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evermaze — Just For You | Personalized Gift Hampers" },
      { name: "description", content: "Curated, personalized gift hampers thoughtfully packed for every celebration. Shop by occasion, or build your own box." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

/* ---------- Header with Dropdown ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [occasionsOpen, setOccasionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const occasionItems = [
    { name: "Birthday", to: "/shop" },
    { name: "Couple", to: "/shop" },
    { name: "Kids", to: "/shop" },
    { name: "Self Care", to: "/shop" },
    { name: "Anniversary", to: "/shop" },
    { name: "Festive", to: "/shop" },
    { name: "Pet Lovers", to: "/shop" },
    { name: "Graduation", to: "/shop" },
    { name: "Baby Shower", to: "/shop" },
  ];

  const nav = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/shop" },
    { name: "Build Your Box", to: "/build-your-box" },
    { name: "Our Story", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ 
        minHeight: '88px',
        backgroundColor: 'rgba(248, 243, 236, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(232, 226, 220, 0.5)',
      }}
    >
      <div className="container-evermaze h-full flex items-center">
        {/* Logo - Left aligned */}
        <Link to="/" className="flex flex-col items-start leading-none lg:mr-12">
          <span className="font-serif text-3xl lg:text-4xl tracking-[0.15em] font-semibold" style={{ color: '#5A4B54' }}>EVERMAZE</span>
          <span className="mt-0.5 text-[9px] lg:text-[10px] tracking-[0.3em] uppercase" style={{ color: '#5A4B54', opacity: 0.7 }}>JUST FOR YOU</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <nav className="flex items-center gap-8" style={{ gap: '36px' }}>
            {nav.slice(0, 2).map((n) => (
              <Link 
                key={n.name} 
                to={n.to} 
                className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dusty-lavender hover:after:w-full after:transition-all after:duration-300"
                style={{ color: '#5A4B54', letterSpacing: '0.3px' }}
              >
                {n.name}
              </Link>
            ))}
            <div className="relative">
              <button
                onMouseEnter={() => setOccasionsOpen(true)}
                onMouseLeave={() => setOccasionsOpen(false)}
                className="text-sm font-medium flex items-center gap-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dusty-lavender hover:after:w-full after:transition-all after:duration-300"
                style={{ color: '#5A4B54', letterSpacing: '0.3px' }}
              >
                Occasions <ChevronRight className="size-3 rotate-90" />
              </button>
              {occasionsOpen && (
                <div
                  onMouseEnter={() => setOccasionsOpen(true)}
                  onMouseLeave={() => setOccasionsOpen(false)}
                  className="absolute top-full left-0 mt-3 w-52 rounded-2xl shadow-xl border border-border-color py-3"
                  style={{ backgroundColor: '#FFFDF9' }}
                >
                  {occasionItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="block px-6 py-3 text-sm transition-colors"
                      style={{ color: '#5A4B54' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dusty-lavender)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#5A4B54'}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <nav className="flex items-center gap-8" style={{ gap: '36px' }}>
            {nav.slice(2).map((n) => (
              <Link 
                key={n.name} 
                to={n.to} 
                className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dusty-lavender hover:after:w-full after:transition-all after:duration-300"
                style={{ color: '#5A4B54', letterSpacing: '0.3px' }}
              >
                {n.name}
              </Link>
            ))}
            <div className="flex items-center gap-5 ml-4">
              <button 
                onClick={() => setSearchOpen(!searchOpen)} 
                aria-label="Search" 
                style={{ color: '#5A4B54' }}
                className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <Search className="size-[18px]" />
              </button>
              <Link to="/wishlist" aria-label="Wishlist" style={{ color: '#5A4B54' }} className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <Heart className="size-[18px]" />
              </Link>
              <Link to="/cart" aria-label="Cart" className="relative p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" style={{ color: '#5A4B54' }}>
                <ShoppingBag className="size-[18px]" />
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center justify-between w-full">
          <button
            onClick={() => setOpen(!open)}
            className="p-3 -ml-2 z-20 min-w-[48px] min-h-[48px] flex items-center justify-center"
            style={{ color: '#5A4B54' }}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSearchOpen(!searchOpen)} 
              aria-label="Search" 
              style={{ color: '#5A4B54' }}
              className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center"
            >
              <Search className="size-[18px]" />
            </button>
            <Link to="/wishlist" aria-label="Wishlist" className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center" style={{ color: '#5A4B54' }}>
              <Heart className="size-[18px]" />
            </Link>
            <Link to="/cart" aria-label="Cart" className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center" style={{ color: '#5A4B54' }}>
              <ShoppingBag className="size-[18px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 p-4 shadow-lg" style={{ backgroundColor: '#FFFDF9', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container-evermaze">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5" style={{ color: '#5A4B54' }} />
              <input
                type="search"
                placeholder="Search for gift hampers..."
                autoFocus
                className="w-full pl-12 pr-12 py-3.5 rounded-full border text-sm"
                style={{ backgroundColor: '#F5EFE7', borderColor: 'var(--border-color)', color: '#5A4B54' }}
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
                style={{ color: '#5A4B54' }}
                aria-label="Close search"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="lg:hidden border-t border-border-color" style={{ backgroundColor: '#FFFDF9', maxHeight: 'calc(100vh - 88px)', overflow: 'auto' }}>
          <nav className="container-evermaze py-8 flex flex-col gap-4">
            {nav.map((n) => (
              <Link key={n.name} to={n.to} className="text-base font-medium py-2" style={{ color: '#5A4B54' }}>{n.name}</Link>
            ))}
            <div className="pt-6 border-t border-border-color mt-2">
              <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: '#5A4B54' }}>Occasions</p>
              {occasionItems.map((item) => (
                <Link key={item.name} to={item.to} className="block py-2.5 text-sm" style={{ color: '#5A4B54' }}>{item.name}</Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-40 pb-16 lg:pb-0" style={{ backgroundColor: '#F8F3EC' }}>
      <div className="container-evermaze">
        <div className="grid lg:grid-cols-[48%_52%] gap-12 lg:gap-16 items-center min-h-[80vh] lg:min-h-[85vh] py-12 lg:py-16">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-6 lg:mb-8">
              <Sparkles className="size-4" style={{ color: '#957DAD' }} />
              <span className="text-[11px] tracking-[0.4em] uppercase font-medium" style={{ color: '#957DAD' }}>Made With Love</span>
            </div>
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ color: '#5A4B54' }}>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light">Personalized</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl italic mt-1" style={{ color: '#957DAD' }}>Gift Hampers</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light mt-1">Made With</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light mt-1">Love.</span>
            </h1>
            <p className="mt-8 lg:mt-10 max-w-md text-base lg:text-lg leading-relaxed" style={{ color: '#5A4B54' }}>
              Curated with care, personalized with heart. The perfect gift for every celebration.
            </p>
            <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="btn-primary w-full sm:w-auto justify-center">Shop Hampers</Link>
              <Link to="/build-your-box" className="btn-outline w-full sm:w-auto justify-center">Build Your Own Box</Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 flex items-center">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-3xl" style={{ backgroundColor: '#FFFDF9', boxShadow: '0 40px 100px rgba(90, 75, 84, 0.1)' }}>
              <img
                src={heroHamper}
                alt="Premium gift hamper with dried lavender flowers and satin ribbon"
                width={1600} height={1808}
                className="size-full object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 px-5 py-3 rounded-full backdrop-blur-sm shadow-lg" style={{ backgroundColor: 'rgba(255, 253, 249, 0.95)' }}>
                <span className="text-sm font-medium" style={{ color: '#5A4B54' }}>Packed with love</span>
              </div>
              {/* Review Card */}
              <div className="absolute top-6 right-6 px-5 py-4 rounded-2xl backdrop-blur-sm shadow-lg" style={{ backgroundColor: 'rgba(255, 253, 249, 0.95)' }}>
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3 fill-current" style={{ color: '#DCC9AE' }} />
                  ))}
                </div>
                <p className="text-xs" style={{ color: '#5A4B54' }}>"Absolutely beautiful!"</p>
              </div>
              {/* Slider Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="size-2 rounded-full" style={{ backgroundColor: '#957DAD' }} />
                <div className="size-2 rounded-full" style={{ backgroundColor: 'rgba(142, 120, 168, 0.3)' }} />
                <div className="size-2 rounded-full" style={{ backgroundColor: 'rgba(142, 120, 168, 0.3)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Announcement Bar ---------- */
function AnnouncementBar() {
  const features = [
    { icon: Truck, text: "Free Shipping on Orders Above ₹999" },
    { icon: Gift, text: "Personalization Included" },
    { icon: Clock, text: "Same-Day Dispatch" },
    { icon: HeartIcon, text: "Handwritten Gift Note" },
    { icon: Package, text: "Premium Packaging" },
  ];

  return (
    <section className="py-4 border-b" style={{ backgroundColor: '#FFFDF9', borderColor: '#E8E2DC' }}>
      <div className="container-evermaze">
        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <feature.icon className="size-4 shrink-0" style={{ color: '#957DAD' }} />
              <span className="text-xs lg:text-sm whitespace-nowrap" style={{ color: '#5A4B54' }}>{feature.text}</span>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <div className="flex items-center justify-center gap-6 overflow-x-auto scrollbar-hide">
            {features.slice(0, 3).map((feature, i) => (
              <div key={i} className="flex items-center gap-2 shrink-0">
                <feature.icon className="size-4 shrink-0" style={{ color: '#957DAD' }} />
                <span className="text-xs whitespace-nowrap" style={{ color: '#5A4B54' }}>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Emotion Banner ---------- */
function EmotionBanner() {
  return (
    <section className="py-28 lg:py-36" style={{ backgroundColor: '#957DAD' }}>
      <div className="container-evermaze text-center">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
          More Than a Gift,<br />It's an Emotion
        </h2>
        <p className="mt-6 lg:mt-8 max-w-xl mx-auto text-white/80 text-base lg:text-lg leading-relaxed">
          Curated hampers that speak from the heart and stay in memory forever.
        </p>
        <Link to="/shop" className="inline-flex items-center gap-3 mt-10 lg:mt-12 px-10 lg:px-12 py-4 lg:py-5 bg-white rounded-full font-medium text-sm tracking-wider transition-all hover:shadow-2xl hover:-translate-y-0.5" style={{ color: '#5A4B54' }}>
          Shop Now <ChevronRight className="size-5" />
        </Link>
      </div>
    </section>
  );
}

/* ---------- Shop by Occasion ---------- */
function OccasionCategories() {
  const occasions = [
    { name: "Birthday", img: hamper1 },
    { name: "Anniversary", img: hamper2 },
    { name: "Best Friend", img: hamper3 },
    { name: "Couple", img: hamper4 },
    { name: "Corporate", img: hamper5 },
    { name: "Baby", img: hamper6 },
    { name: "Wedding", img: hamper1 },
    { name: "Self Care", img: hamper2 },
    { name: "Graduation", img: hamper3 },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-evermaze">
        <div className="text-center mb-14 lg:mb-20">
          <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#957DAD' }}>SHOP BY OCCASION</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl" style={{ color: '#5A4B54' }}>Find the Perfect Gift</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {occasions.map((occ, i) => (
            <Link
              key={i}
              to="/shop"
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 8px 30px rgba(90, 75, 84, 0.1)' }}
            >
              <img
                src={occ.img}
                alt={occ.name}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                <span className="text-white font-serif text-sm lg:text-base">{occ.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Best Sellers ---------- */
function FeaturedCollection() {
  const products = [
    { name: "Birthday Bliss Hamper", price: 999, rating: 4.9, img: hamper1 },
    { name: "Romantic Evening Box", price: 1499, rating: 5.0, img: hamper2 },
    { name: "Self Care Retreat", price: 799, rating: 4.8, img: hamper3 },
    { name: "Best Friend Hamper", price: 1199, rating: 4.9, img: hamper4 },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#F8F3EC' }}>
      <div className="container-evermaze">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 lg:mb-20">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#957DAD' }}>FEATURED COLLECTION</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl" style={{ color: '#5A4B54' }}>Our Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm flex items-center gap-2 transition-colors hover:opacity-70" style={{ color: '#957DAD' }}>
            View All <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {products.map((p, i) => (
            <div key={i} className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 lg:mb-5 transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#FFFDF9', boxShadow: '0 8px 30px rgba(90, 75, 84, 0.08)' }}>
                <img src={p.img} alt={p.name} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <button className="absolute bottom-4 right-4 size-12 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: '#957DAD' }}>
                  <Plus className="size-5" />
                </button>
              </div>
              <h3 className="font-medium text-sm lg:text-base" style={{ color: '#5A4B54' }}>{p.name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <Star className="size-3.5 fill-current" style={{ color: '#DCC9AE' }} />
                <span className="text-xs" style={{ color: '#5A4B54' }}>{p.rating}</span>
              </div>
              <p className="mt-1 font-serif text-lg" style={{ color: '#5A4B54' }}>₹{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Build Your Own Box Promo ---------- */
function BuildBoxPromo() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-evermaze">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#957DAD' }}>CREATE YOUR OWN</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl" style={{ color: '#5A4B54' }}>
              Build a Hamper<br />That's Uniquely Yours
            </h2>
            <p className="mt-5 text-base leading-relaxed max-w-md" style={{ color: '#5A4B54' }}>
              Choose your package, add personal touches, and create a gift that's made just for them. From handwritten letters to custom photo frames.
            </p>
            <Link to="/build-your-box" className="btn-primary inline-flex mt-8 lg:mt-10">
              Start Building <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden" style={{ boxShadow: '0 30px 80px rgba(90, 75, 84, 0.1)' }}>
              <img src={hamper5} alt="Custom gift hamper" className="size-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Evermaze ---------- */
function WhyChoose() {
  const reasons = [
    { icon: Award, label: "Premium Packaging" },
    { icon: HeartIcon, label: "Personalised" },
    { icon: Sparkles, label: "Handpicked" },
    { icon: Truck, label: "Delivered with Love" },
    { icon: Gift, label: "Made for Every Occasion" },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#F8F3EC' }}>
      <div className="container-evermaze">
        <div className="text-center mb-14 lg:mb-20">
          <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#957DAD' }}>WHY EVERMAZE</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl" style={{ color: '#5A4B54' }}>What Makes Us Special</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-10">
          {reasons.map((r, i) => (
            <div key={i} className="text-center">
              <div className="size-16 rounded-full mx-auto mb-5 flex items-center justify-center transition-transform duration-300 hover:scale-105" style={{ backgroundColor: 'rgba(142, 120, 168, 0.1)' }}>
                <r.icon className="size-7" style={{ color: '#957DAD' }} />
              </div>
              <p className="text-sm font-medium" style={{ color: '#5A4B54' }}>{r.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const reviews = [
    {
      name: "Priya S.",
      location: "Mumbai",
      rating: 5,
      text: "The most beautiful gift hamper I've ever received! The attention to detail and personal touch made it so special.",
      img: hamper1
    },
    {
      name: "Ananya R.",
      location: "Delhi",
      rating: 5,
      text: "Perfect for my best friend's birthday. She cried happy tears when she opened it. Will definitely order again!",
      img: hamper2
    },
    {
      name: "Meera K.",
      location: "Bangalore",
      rating: 5,
      text: "The packaging is exquisite and the quality of products inside exceeded my expectations. Highly recommend!",
      img: hamper3
    },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-evermaze">
        <div className="text-center mb-14 lg:mb-20">
          <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#957DAD' }}>LOVE LETTERS</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl" style={{ color: '#5A4B54' }}>What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#F5EFE7', boxShadow: '0 8px 40px rgba(90, 75, 84, 0.06)' }}>
              <Quote className="size-8 mb-5" style={{ color: '#DCC9AE' }} />
              <div className="flex items-center gap-1.5 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="size-4 fill-current" style={{ color: '#DCC9AE' }} />
                ))}
              </div>
              <p className="leading-relaxed text-sm mb-5" style={{ color: '#5A4B54' }}>"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
                  <img src={r.img} alt={r.name} className="size-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: '#5A4B54' }}>{r.name}</p>
                  <p className="text-xs" style={{ color: '#5A4B54' }}>{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Instagram Gallery ---------- */
function InstagramGallery() {
  const images = [hamper1, hamper2, hamper3, hamper4, hamper5, hamper6];

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#F8F3EC' }}>
      <div className="container-evermaze">
        <div className="text-center mb-14 lg:mb-20">
          <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#957DAD' }}>@evermaze.gifts</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl" style={{ color: '#5A4B54' }}>Follow Our Journey</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {images.map((img, i) => (
            <a key={i} href="#" className="group relative aspect-square rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: '0 8px 30px rgba(90, 75, 84, 0.08)' }}>
              <img src={img} alt={`Instagram post ${i + 1}`} className="size-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" style={{ backgroundColor: 'rgba(45, 39, 38, 0.4)' }}>
                <Instagram className="size-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Newsletter ---------- */
function Newsletter() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-evermaze">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl" style={{ color: '#5A4B54' }}>Join the Evermaze Family</h2>
          <p className="mt-5 text-base" style={{ color: '#5A4B54' }}>
            Get gifting inspiration, exclusive offers, and early access to new hampers.
          </p>
          <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border text-sm min-h-[52px]"
              style={{ backgroundColor: '#F5EFE7', borderColor: '#E8E2DC', color: '#5A4B54' }}
            />
            <button className="btn-primary whitespace-nowrap w-full sm:w-auto justify-center">
              Subscribe
            </button>
          </div>
          <p className="mt-5 text-sm" style={{ color: '#5A4B54' }}>By subscribing, you agree to our Privacy Policy</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const cols = [
    {
      t: "Shop",
      l: [
        { name: "All Hampers", to: "/shop" },
        { name: "Build Your Box", to: "/build-your-box" },
        { name: "Gift Cards", to: "/shop" },
        { name: "Corporate Gifting", to: "/contact" },
      ]
    },
    {
      t: "Help",
      l: [
        { name: "FAQs", to: "/faq" },
        { name: "Shipping Policy", to: "/shipping-policy" },
        { name: "Refund Policy", to: "/refund-policy" },
        { name: "Contact Us", to: "/contact" },
      ]
    },
    {
      t: "Company",
      l: [
        { name: "Our Story", to: "/about" },
        { name: "Track Order", to: "/contact" },
        { name: "Contact", to: "/contact" },
      ]
    },
  ];
  return (
    <footer className="pt-20 pb-10" style={{ backgroundColor: '#5A4B54' }}>
      <div className="container-evermaze">
        {/* Newsletter mini */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <h3 className="font-serif text-2xl text-white mb-3">Stay Connected</h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Subscribe for exclusive offers and gifting inspiration.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-5 py-3 rounded-full text-sm min-h-[48px]"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
            />
            <button className="px-6 py-3 rounded-full bg-white min-h-[48px] text-sm font-medium transition-colors hover:bg-opacity-90" style={{ color: '#5A4B54' }}>
              Join
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-16">
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.2em]" style={{ color: 'white' }}>EVERMAZE</Link>
            <p className="mt-2 text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>Just For You</p>
            <p className="mt-8 max-w-xs leading-relaxed text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Beautifully personalized gift hampers, thoughtfully curated for every celebration.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" aria-label="Instagram" className="size-12 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#A99BAD' }}>
                <Instagram className="size-5" />
              </a>
              <a href="#" aria-label="WhatsApp" className="size-12 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#A99BAD' }}>
                <MessageCircle className="size-5" />
              </a>
              <a href="mailto:evermaze.info@gmail.com" aria-label="Email" className="size-12 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#A99BAD' }}>
                <Mail className="size-5" />
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <h4 className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>{c.t}</h4>
              <ul className="space-y-4 text-base">
                {c.l.map((li) => <li key={li.name}><Link to={li.to} className="transition-colors hover:opacity-70" style={{ color: 'rgba(255,255,255,0.8)' }}>{li.name}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 lg:mt-20 pt-8 border-t flex flex-col md:flex-row justify-between gap-4 text-sm" style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}>
          <span>© 2026 Evermaze. Made with love.</span>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:opacity-70">Privacy Policy</Link>
            <Link to="/terms-conditions" className="transition-colors hover:opacity-70">Terms & Conditions</Link>
            <Link to="/shipping-policy" className="transition-colors hover:opacity-70">Shipping Policy</Link>
            <Link to="/refund-policy" className="transition-colors hover:opacity-70">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AnnouncementBar />
        <Hero />
        <EmotionBanner />
        <OccasionCategories />
        <FeaturedCollection />
        <BuildBoxPromo />
        <WhyChoose />
        <Testimonials />
        <InstagramGallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
