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
        scrolled ? "bg-white/98 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      style={{ minHeight: '96px' }}
    >
      <div className="container-evermaze h-full flex items-center">
        <div className="hidden lg:flex items-center justify-between w-full">
          <nav className="flex items-center gap-10" style={{ gap: '44px' }}>
            {nav.slice(0, 2).map((n) => (
              <Link 
                key={n.name} 
                to={n.to} 
                className="text-[17px] font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dusty-lavender hover:after:w-full after:transition-all after:duration-300"
                style={{ color: 'var(--nav-text)', letterSpacing: '0.3px' }}
              >
                {n.name}
              </Link>
            ))}
            <div className="relative">
              <button
                onMouseEnter={() => setOccasionsOpen(true)}
                onMouseLeave={() => setOccasionsOpen(false)}
                className="text-[17px] font-medium flex items-center gap-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dusty-lavender hover:after:w-full after:transition-all after:duration-300"
                style={{ color: 'var(--nav-text)', letterSpacing: '0.3px' }}
              >
                Occasions <ChevronRight className="size-3.5 rotate-90" />
              </button>
              {occasionsOpen && (
                <div
                  onMouseEnter={() => setOccasionsOpen(true)}
                  onMouseLeave={() => setOccasionsOpen(false)}
                  className="absolute top-full left-0 mt-3 w-52 bg-white rounded-2xl shadow-xl border border-border-color py-3"
                >
                  {occasionItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="block px-6 py-3 text-[15px] transition-colors"
                      style={{ color: 'var(--body-text)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dusty-lavender)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--body-text)'}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <Link to="/" className="flex flex-col items-center leading-none mx-12">
            <span className="font-serif text-[46px] tracking-[9px] font-semibold" style={{ color: 'var(--logo-color)' }}>EVERMAZE</span>
            <span className="mt-1 text-[10px] tracking-[9px] uppercase" style={{ color: 'var(--body-text)' }}>JUST FOR YOU</span>
          </Link>

          <nav className="flex items-center gap-10" style={{ gap: '44px' }}>
            {nav.slice(2).map((n) => (
              <Link 
                key={n.name} 
                to={n.to} 
                className="text-[17px] font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dusty-lavender hover:after:w-full after:transition-all after:duration-300"
                style={{ color: 'var(--nav-text)', letterSpacing: '0.3px' }}
              >
                {n.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 ml-6">
              <button 
                onClick={() => setSearchOpen(!searchOpen)} 
                aria-label="Search" 
                style={{ color: 'var(--nav-text)' }}
              >
                <Search className="size-[20px]" />
              </button>
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
          <button
            onClick={() => setOpen(!open)}
            className="p-2 -ml-2 z-20"
            style={{ color: 'var(--nav-text)' }}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>

          <Link to="/" className="flex flex-col items-center leading-none">
            <span className="font-serif text-2xl tracking-[6px] font-semibold" style={{ color: 'var(--logo-color)' }}>EVERMAZE</span>
            <span className="mt-0.5 text-[9px] tracking-[6px] uppercase" style={{ color: 'var(--body-text)' }}>JUST FOR YOU</span>
          </Link>

          <div className="flex items-center gap-5">
            <button 
              onClick={() => setSearchOpen(!searchOpen)} 
              aria-label="Search" 
              style={{ color: 'var(--nav-text)' }}
            >
              <Search className="size-[20px]" />
            </button>
            <Link to="/cart" aria-label="Cart" style={{ color: 'var(--nav-text)' }}>
              <ShoppingBag className="size-[20px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border-color p-5 shadow-lg" style={{ minHeight: '80px', display: 'flex', alignItems: 'center' }}>
          <div className="container-evermaze">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-5" style={{ color: 'var(--body-text)' }} />
              <input
                type="search"
                placeholder="Search for gift hampers..."
                autoFocus
                className="w-full pl-14 pr-12 py-4 rounded-full border text-base"
                style={{ backgroundColor: 'var(--secondary-bg)', borderColor: 'var(--border-color)', color: 'var(--heading-color)' }}
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-5 top-1/2 -translate-y-1/2"
                style={{ color: 'var(--body-text)' }}
                aria-label="Close search"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="lg:hidden border-t border-border-color bg-white" style={{ minHeight: 'calc(100vh - 96px)' }}>
          <nav className="container-evermaze py-8 flex flex-col gap-5">
            {nav.map((n) => (
              <Link key={n.name} to={n.to} className="text-lg font-medium" style={{ color: 'var(--nav-text)' }}>{n.name}</Link>
            ))}
            <div className="pt-6 border-t border-border-color">
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--body-text)' }}>Occasions</p>
              {occasionItems.map((item) => (
                <Link key={item.name} to={item.to} className="block py-3 text-base" style={{ color: 'var(--body-text)' }}>{item.name}</Link>
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
    <section className="relative overflow-hidden pt-32 md:pt-36" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container-evermaze">
        <div className="grid lg:grid-cols-[48%_52%] gap-16 lg:gap-20 items-center min-h-[80vh] py-16 lg:py-20">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <span className="text-[11px] tracking-[0.5em] uppercase font-medium" style={{ color: 'var(--dusty-lavender)' }}>EVERMAZE</span>
            <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight" style={{ color: 'var(--heading-color)' }}>
              Thoughtful Gifts,<br />
              <span className="italic font-light" style={{ fontFamily: 'Parisienne, cursive', color: 'var(--dusty-lavender)', fontSize: '1.05em' }}>Made with Love</span>
            </h1>
            <p className="mt-10 max-w-lg text-lg leading-relaxed" style={{ color: 'var(--body-text)' }}>
              Curated gift hampers for every occasion, packed with care and made to create unforgettable moments.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link to="/shop" className="btn-primary">Explore Hampers <ArrowRight className="size-5" /></Link>
              <Link to="/build-your-box" className="btn-outline">Build Your Own Box</Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 flex items-center">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:max-w-none overflow-hidden rounded-3xl" style={{ backgroundColor: 'var(--secondary)', boxShadow: '0 30px 80px rgba(46, 42, 43, 0.15)' }}>
              <img
                src={heroHamper}
                alt="Premium gift hamper with dried lavender flowers and satin ribbon"
                width={1600} height={1808}
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Feature Icons ---------- */
function FeatureIcons() {
  const features = [
    { icon: Award, label: "Premium Quality" },
    { icon: HeartIcon, label: "Made with Love" },
    { icon: Sparkles, label: "Carefully Curated" },
    { icon: Gift, label: "Perfect for Every Occasion" },
    { icon: Truck, label: "Safe Delivery" },
  ];

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container-evermaze">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-16">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4">
              <div className="size-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(143, 122, 153, 0.1)' }}>
                <f.icon className="size-6" style={{ color: 'var(--dusty-lavender)' }} />
              </div>
              <span className="text-base tracking-wide" style={{ color: 'var(--heading-color)' }}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Occasion Categories ---------- */
function OccasionCategories() {
  const occasions = [
    { name: "Birthday", img: hamper1 },
    { name: "Couple", img: hamper2 },
    { name: "Kids", img: hamper3 },
    { name: "Self Care", img: hamper4 },
    { name: "Anniversary", img: hamper5 },
    { name: "Festive", img: hamper6 },
    { name: "Pet Lovers", img: hamper1 },
    { name: "Graduation", img: hamper2 },
    { name: "Baby Shower", img: hamper3 },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container-evermaze">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-[11px] tracking-[0.4em] uppercase font-medium" style={{ color: 'var(--dusty-lavender)' }}>Shop by Occasion</span>
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl" style={{ color: 'var(--heading-color)' }}>Find the Perfect Gift</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {occasions.map((occ, i) => (
            <Link
              key={i}
              to="/shop"
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 10px 40px rgba(46, 42, 43, 0.12)' }}
            >
              <img
                src={occ.img}
                alt={occ.name}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-white font-serif text-lg lg:text-xl">{occ.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Featured Collection ---------- */
function FeaturedCollection() {
  const products = [
    { name: "Birthday Bliss Hamper", price: 999, rating: 4.9, img: hamper1 },
    { name: "Romantic Evening Box", price: 1499, rating: 5.0, img: hamper2 },
    { name: "Self Care Retreat", price: 799, rating: 4.8, img: hamper3 },
    { name: "Best Friend Hamper", price: 1199, rating: 4.9, img: hamper4 },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container-evermaze">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <span className="text-[11px] tracking-[0.4em] uppercase font-medium" style={{ color: 'var(--dusty-lavender)' }}>Featured Collection</span>
            <h2 className="mt-5 font-serif text-4xl lg:text-5xl" style={{ color: 'var(--heading-color)' }}>Our Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-base flex items-center gap-2 transition-colors" style={{ color: 'var(--dusty-lavender)' }}>
            View All <ArrowRight className="size-5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {products.map((p, i) => (
            <div key={i} className="group">
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-6" style={{ backgroundColor: 'var(--background)', boxShadow: '0 12px 40px rgba(46, 42, 43, 0.1)' }}>
                <img src={p.img} alt={p.name} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <button className="absolute bottom-5 right-5 size-14 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--dusty-lavender)' }}>
                  <Plus className="size-6" />
                </button>
              </div>
              <h3 className="font-medium text-base lg:text-lg" style={{ color: 'var(--heading-color)' }}>{p.name}</h3>
              <div className="flex items-center gap-2 mt-3">
                <Star className="size-4 fill-current" style={{ color: 'var(--soft-lavender)' }} />
                <span className="text-sm" style={{ color: 'var(--body-text)' }}>{p.rating}</span>
              </div>
              <p className="mt-2 font-serif text-xl" style={{ color: 'var(--heading-color)' }}>₹{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Choose Evermaze ---------- */
function WhyChoose() {
  const reasons = [
    { icon: Award, label: "Premium Quality" },
    { icon: HeartIcon, label: "Personalised" },
    { icon: Sparkles, label: "Handcrafted" },
    { icon: Truck, label: "Fast Delivery" },
    { icon: Lock, label: "Secure Checkout" },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container-evermaze">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-[11px] tracking-[0.4em] uppercase font-medium" style={{ color: 'var(--dusty-lavender)' }}>Why Evermaze</span>
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl" style={{ color: 'var(--heading-color)' }}>Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-12">
          {reasons.map((r, i) => (
            <div key={i} className="text-center">
              <div className="size-20 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ backgroundColor: 'rgba(143, 122, 153, 0.1)' }}>
                <r.icon className="size-8" style={{ color: 'var(--dusty-lavender)' }} />
              </div>
              <p className="text-base font-medium" style={{ color: 'var(--heading-color)' }}>{r.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Promotional Banner ---------- */
function PromoBanner() {
  return (
    <section className="py-28 lg:py-36" style={{ backgroundColor: 'var(--dusty-lavender)' }}>
      <div className="container-evermaze text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
          More Than a Gift,<br />It's an Emotion
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-white/80 text-lg leading-relaxed">
          Curated hampers that speak from the heart and stay in memory forever.
        </p>
        <Link to="/shop" className="inline-flex items-center gap-3 mt-12 px-10 py-5 bg-white rounded-full font-medium text-base tracking-wide transition-all hover:shadow-xl" style={{ color: 'var(--dusty-lavender)' }}>
          Shop Now <ChevronRight className="size-5" />
        </Link>
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
    <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container-evermaze">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-[11px] tracking-[0.4em] uppercase font-medium" style={{ color: 'var(--dusty-lavender)' }}>Love Letters</span>
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl" style={{ color: 'var(--heading-color)' }}>What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-3xl p-10" style={{ backgroundColor: 'var(--background)', boxShadow: '0 12px 50px rgba(46, 42, 43, 0.08)' }}>
              <Quote className="size-10 mb-8" style={{ color: 'var(--soft-lavender)' }} />
              <div className="flex items-center gap-2 mb-5">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="size-5 fill-current" style={{ color: 'var(--soft-lavender)' }} />
                ))}
              </div>
              <p className="leading-relaxed text-lg mb-8" style={{ color: 'var(--body-text)' }}>"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--secondary)' }}>
                  <img src={r.img} alt={r.name} className="size-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-base" style={{ color: 'var(--heading-color)' }}>{r.name}</p>
                  <p className="text-sm" style={{ color: 'var(--body-text)' }}>{r.location}</p>
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
    <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container-evermaze">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-[11px] tracking-[0.4em] uppercase font-medium" style={{ color: 'var(--dusty-lavender)' }}>@evermaze.gifts</span>
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl" style={{ color: 'var(--heading-color)' }}>Follow Our Journey</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {images.map((img, i) => (
            <a key={i} href="#" className="group relative aspect-square rounded-3xl overflow-hidden" style={{ boxShadow: '0 10px 40px rgba(46, 42, 43, 0.1)' }}>
              <img src={img} alt={`Instagram post ${i + 1}`} className="size-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" style={{ backgroundColor: 'rgba(46, 42, 43, 0.4)' }}>
                <Instagram className="size-10 text-white" />
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
    <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container-evermaze">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl" style={{ color: 'var(--heading-color)' }}>Join the Evermaze Family</h2>
          <p className="mt-6 text-lg" style={{ color: 'var(--body-text)' }}>
            Get gifting inspiration, exclusive offers, and early access to new hampers.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-8 py-4 rounded-full border text-base"
              style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border-color)', color: 'var(--heading-color)' }}
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="mt-6 text-sm" style={{ color: 'var(--body-text)' }}>By subscribing, you agree to our Privacy Policy</p>
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
        { name: "Shipping & Returns", to: "/faq" },
        { name: "Track Order", to: "/contact" },
        { name: "Contact Us", to: "/contact" },
      ]
    },
    {
      t: "Company",
      l: [
        { name: "Our Story", to: "/about" },
        { name: "Press", to: "/about" },
        { name: "Careers", to: "/about" },
      ]
    },
  ];
  return (
    <footer className="pt-20 pb-10" style={{ backgroundColor: 'var(--heading-color)' }}>
      <div className="container-evermaze">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16">
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.2em]" style={{ color: 'white' }}>EVERMAZE</Link>
            <p className="mt-2 text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>Just For You</p>
            <p className="mt-8 max-w-xs leading-relaxed text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Beautifully personalized gift hampers, thoughtfully curated for every celebration.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" aria-label="Instagram" className="size-12 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'var(--soft-lavender)' }}>
                <Instagram className="size-5" />
              </a>
              <a href="#" aria-label="WhatsApp" className="size-12 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'var(--soft-lavender)' }}>
                <MessageCircle className="size-5" />
              </a>
              <a href="#" aria-label="Email" className="size-12 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'var(--soft-lavender)' }}>
                <Mail className="size-5" />
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <h4 className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>{c.t}</h4>
              <ul className="space-y-4 text-base">
                {c.l.map((li) => <li key={li.name}><Link to={li.to} className="transition-colors hover:opacity-70" style={{ color: 'rgba(255,255,255,0.8)' }}>{li.name}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-20 pt-8 border-t flex flex-col md:flex-row justify-between gap-4 text-base" style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
          <span>© 2026 Evermaze. Made with love.</span>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:opacity-70">Privacy</a>
            <a href="#" className="transition-colors hover:opacity-70">Terms</a>
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
        <Hero />
        <FeatureIcons />
        <OccasionCategories />
        <FeaturedCollection />
        <WhyChoose />
        <PromoBanner />
        <Testimonials />
        <InstagramGallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
