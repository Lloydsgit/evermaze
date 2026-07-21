import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search, Heart, ShoppingBag, User, Menu, X, Star,
  Instagram, Mail, Truck, Sparkles, Gift, Package, HandHeart, Clock, ArrowRight,
  ChevronDown, Plus, Minus, ShoppingCart, Check, CreditCard, Smartphone,
  Building2, Wallet, MapPin, Calendar, HeartHandshake, Package2, Shield, Mail as MailIcon,
} from "lucide-react";

import { Logo } from "@/components/Logo";
import { ConfirmationModal } from "@/components/ConfirmationModal";
import { PaymentSelector, type PaymentMethod } from "@/components/PaymentSelector";
import { sendOrderEmail } from "@/lib/emailService";

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
      { title: "Evermaze — Love in a Box | Personalized Gift Hampers" },
      { name: "description", content: "Curated, personalized gift hampers thoughtfully packed for every celebration. Shop by occasion, or build your own box." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

/* ---------- Luxury Sticky Header ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Shop", href: "#shop" },
    { name: "Gift Hampers", href: "#bestsellers" },
    { name: "Build Your Box", href: "#build" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#FAF7F2]/95 backdrop-blur-[12px] shadow-[0_2px_20px_rgba(90,75,84,0.08)]" 
          : "bg-transparent"
      }`}
    >
      <div className="container-evermaze">
        <div className="flex items-center justify-between h-[72px] md:h-[80px]">
          {/* Logo - Left aligned */}
          <Logo size="md" showTagline={true} />

          {/* Center Navigation - Desktop */}
          <nav className="hidden xl:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-sm tracking-wide text-[#2F272C]/80 hover:text-[#7D6B87] transition-colors duration-300 relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#7D6B87] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Icons - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            <button 
              aria-label="Search" 
              className="p-2 md:p-3 text-[#2F272C]/70 hover:text-[#7D6B87] hover:bg-[#E9DDD2]/50 rounded-full transition-all duration-300"
            >
              <Search className="size-5" />
            </button>
            <button 
              aria-label="Wishlist" 
              className="p-2 md:p-3 text-[#2F272C]/70 hover:text-[#7D6B87] hover:bg-[#E9DDD2]/50 rounded-full transition-all duration-300"
            >
              <Heart className="size-5" />
            </button>
            <button 
              aria-label="Account" 
              className="p-2 md:p-3 text-[#2F272C]/70 hover:text-[#7D6B87] hover:bg-[#E9DDD2]/50 rounded-full transition-all duration-300"
            >
              <User className="size-5" />
            </button>
            <button 
              aria-label="Cart" 
              className="relative p-2 md:p-3 text-[#2F272C]/70 hover:text-[#7D6B87] hover:bg-[#E9DDD2]/50 rounded-full transition-all duration-300 ml-2"
            >
              <ShoppingBag className="size-5" />
              <span className="absolute top-1 right-1 bg-[#7D6B87] text-white text-[10px] font-medium rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile Icons - Right side */}
          <div className="flex items-center gap-1 xl:hidden">
            <button 
              aria-label="Cart" 
              className="relative p-2 text-[#2F272C]/70 hover:text-[#7D6B87] transition-colors"
            >
              <ShoppingBag className="size-5" />
              <span className="absolute top-0.5 right-0.5 bg-[#7D6B87] text-white text-[10px] font-medium rounded-full min-w-[16px] h-[16px] flex items-center justify-center">
                2
              </span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2F272C] hover:text-[#7D6B87] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`xl:hidden absolute top-full left-0 right-0 bg-[#F8F5F2]/98 backdrop-blur-lg border-b border-[#E9DDD2]/50 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <nav className="container-evermaze py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-[#2F272C] hover:text-[#7D6B87] transition-colors py-2"
            >
              {item.name}
            </a>
          ))}
          <hr className="border-[#E9DDD2]/50 my-2" />
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-[#4B4347] hover:text-[#7D6B87] transition-colors">
              <Search className="size-4" /> Search
            </button>
            <button className="flex items-center gap-2 text-sm text-[#4B4347] hover:text-[#7D6B87] transition-colors">
              <Heart className="size-4" /> Wishlist
            </button>
            <button className="flex items-center gap-2 text-sm text-[#4B4347] hover:text-[#7D6B87] transition-colors">
              <User className="size-4" /> Account
            </button>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-sm text-[#4B4347] hover:text-[#7D6B87] transition-colors">FAQs</a>
            <a href="#" className="text-sm text-[#4B4347] hover:text-[#7D6B87] transition-colors">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

/* ---------- Luxury Hero Section ---------- */
function Hero() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F8F5F2] via-[#F8F5F2] to-[#E9DDD2]/30">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-[#7D6B87]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#7D6B87]/5 rounded-full blur-3xl" />
      
      <div className="container-evermaze relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E9DDD2]/60 backdrop-blur-sm rounded-full mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-[#7D6B87]" />
              <span className="text-xs font-medium tracking-widest uppercase text-[#7D6B87]">Made with love · Est. 2024</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-[#2F272C]">
              Personalized<br />
              <span className="italic text-[#7D6B87]">Gift Hampers</span><br />
              Made With Love.
            </h1>
            
            <p className="mt-6 md:mt-8 max-w-lg mx-auto lg:mx-0 text-[#4B4347] leading-relaxed text-base md:text-lg">
              Curated gifts for every celebration, thoughtfully packed to
              create unforgettable memories — moments that live longer than the ribbon.
            </p>
            
            <div className="mt-8 md:mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#shop" className="btn-primary">
                Shop Hampers <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#build" className="btn-outline">
                Build Your Own Box
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10">
              <div className="text-center lg:text-left">
                <span className="block font-serif text-3xl md:text-4xl text-[#2F272C]">12k+</span>
                <span className="text-xs tracking-widest uppercase text-[#4B4347]">Happy gifters</span>
              </div>
              <div className="w-px h-12 bg-border/50 hidden sm:block" />
              <div className="text-center lg:text-left">
                <span className="block font-serif text-3xl md:text-4xl text-[#2F272C]">4.9</span>
                <span className="text-xs tracking-widest uppercase text-[#4B4347]">Average rating</span>
              </div>
              <div className="w-px h-12 bg-border/50 hidden sm:block" />
              <div className="text-center lg:text-left">
                <span className="block font-serif text-3xl md:text-4xl text-[#2F272C]">50k+</span>
                <span className="text-xs tracking-widest uppercase text-[#4B4347]">Hampers sent</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Main image with decorative frame */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-luxury">
                <img
                  src={heroHamper}
                  alt="Personalized Evermaze gift hamper with candle, dried florals and silk ribbon"
                  width={1600} height={1808}
                  className="size-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-taupe/10 via-transparent to-transparent" />
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-4 md:-left-12 lg:-left-16 w-56 md:w-64 bg-[#F8F5F2]/95 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-luxury animate-float">
                <div className="flex items-center gap-1 text-[#7D6B87] mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm md:text-base leading-relaxed text-[#4B4347] italic">
                  "It felt like opening a little world of love."
                </p>
                <p className="mt-3 text-xs tracking-widest uppercase text-[#2F272C]/70">— Aanya, Delhi</p>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#7D6B87] to-taupe text-white flex items-center justify-center shadow-luxury animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="text-center">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1" />
                  <div className="font-serif italic text-sm md:text-base leading-tight">
                    Packed<br/>with love
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -bottom-10 right-10 md:right-20 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7D6B87]/40" />
                <div className="w-2 h-2 rounded-full bg-[#7D6B87]/60" />
                <div className="w-2 h-2 rounded-full bg-[#7D6B87]" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-[#4B4347] animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Luxury Marquee Strip ---------- */
function Strip() {
  const items = [
    { icon: "🎁", text: "Free shipping over ₹1499" },
    { icon: "✨", text: "Personalization included" },
    { icon: "🚀", text: "Same-day dispatch" },
    { icon: "💌", text: "Handwritten notes" },
    { icon: "🌿", text: "Sustainable packaging" },
  ];
  
  return (
    <section className="py-5 md:py-6 bg-gradient-to-r from-[#E9DDD2]/50 via-[#F8F5F2] to-[#E9DDD2]/50 border-y border-[#E9DDD2]/50">
      <div className="container-evermaze">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-[#4B4347]">
              <span className="text-base">{item.icon}</span>
              <span className="font-medium tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Occasions Grid ---------- */
function Occasions() {
  const items = [
    { name: "Birthday", img: hamper3, count: 24 },
    { name: "Anniversary", img: hamper5, count: 18 },
    { name: "Wedding", img: hamper2, count: 12 },
    { name: "Baby Shower", img: hamper4, count: 15 },
    { name: "Diwali", img: hamper6, count: 20 },
    { name: "Valentine's", img: hamper1, count: 22 },
    { name: "Friendship", img: hamper3, count: 10 },
    { name: "Just Because", img: heroHamper, count: 8 },
  ];
  
  return (
    <section className="section-padding bg-[#F8F5F2]" id="shop">
      <div className="container-evermaze">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="eyebrow">Shop by occasion</span>
            <h2 className="mt-4 text-[#2F272C]">A hamper for every hello.</h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 text-sm font-medium text-[#7D6B87] hover:text-[#2F272C] transition-colors">
            View all occasions
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, i) => (
            <a 
              key={item.name + i} 
              href="#" 
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#E9DDD2]"
            >
              <img 
                src={item.img} 
                alt={`${item.name} gift hampers`} 
                loading="lazy" 
                width={1000} 
                height={1200}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-taupe/70 via-taupe/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">{item.name}</h3>
                <span className="text-xs text-white/80 tracking-wider">{item.count} hampers</span>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-white/90 tracking-wider uppercase">
                  Explore 
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Shop by Price ---------- */
function ShopByPrice() {
  const prices = [
    { label: "Under ₹199", amount: "₹199" },
    { label: "Under ₹499", amount: "₹499" },
    { label: "Under ₹999", amount: "₹999" },
    { label: "Under ₹1499", amount: "₹1,499" },
    { label: "Under ₹1999", amount: "₹1,999" },
  ];
  
  return (
    <section className="section-padding bg-[#E9DDD2]/50">
      <div className="container-evermaze">
        <div className="text-center mb-12 md:mb-16">
          <span className="eyebrow">Shop by budget</span>
          <h2 className="mt-4 text-[#2F272C]">Thoughtful gifts, at every price.</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {prices.map((item, i) => (
            <a 
              key={i} 
              href="#" 
              className="group relative bg-[#F8F5F2] rounded-3xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-luxury hover:-translate-y-1 border border-transparent hover:border-lavender/20"
            >
              <span className="block text-xs md:text-sm font-medium tracking-wider uppercase text-[#4B4347] mb-2">
                {item.label}
              </span>
              <span className="block font-serif text-3xl md:text-4xl lg:text-5xl text-[#7D6B87] transition-colors">
                {item.amount}
              </span>
              <span className="mt-4 md:mt-6 inline-flex items-center gap-1 text-xs font-medium tracking-wider uppercase text-[#2F272C]/60 group-hover:text-[#7D6B87] transition-colors">
                Shop now 
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Luxury Product Card ---------- */
type Product = { 
  name: string; 
  price: string; 
  oldPrice?: string; 
  rating: number; 
  img: string; 
  tag?: string;
  description?: string;
};

function ProductCard({ p, className = "" }: { p: Product; className?: string }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  return (
    <article className={`group ${className}`}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#E9DDD2]/50">
        <img 
          src={p.img} 
          alt={p.name} 
          loading="lazy" 
          width={1000} 
          height={1200}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" 
        />
        
        {/* Tag */}
        {p.tag && (
          <span className="absolute top-4 left-4 bg-[#7D6B87]/90 backdrop-blur-sm text-white px-3 py-1.5 text-[10px] md:text-xs font-medium tracking-wider uppercase rounded-full">
            {p.tag}
          </span>
        )}
        
        {/* Wishlist button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 ${
            isWishlisted 
              ? "bg-[#7D6B87] text-white" 
              : "bg-[#F8F5F2]/90 text-[#2F272C] hover:bg-[#7D6B87] hover:text-white"
          }`}
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
        </button>
        
        {/* Quick add button */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button className="w-full bg-[#2F272C] text-white text-xs md:text-sm font-medium tracking-wider uppercase py-3 md:py-4 rounded-2xl hover:bg-[#7D6B87] transition-colors shadow-lg">
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="mt-5 md:mt-6">
        <h3 className="font-serif text-lg md:text-xl text-[#2F272C] leading-tight">{p.name}</h3>
        {p.description && (
          <p className="mt-1 text-sm text-[#4B4347] line-clamp-2">{p.description}</p>
        )}
        
        <div className="mt-3 flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5 text-[#7D6B87]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(p.rating) ? "fill-current" : ""}`} />
              ))}
            </div>
            <span className="text-xs text-[#4B4347]">({p.rating})</span>
          </div>
          
          {/* Price */}
          <div className="text-right">
            <span className="font-serif text-lg md:text-xl text-[#2F272C]">{p.price}</span>
            {p.oldPrice && (
              <span className="ml-2 text-sm text-[#4B4347] line-through">{p.oldPrice}</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- Best Sellers ---------- */
function BestSellers() {
  const products: Product[] = [
    { 
      name: "The Sabrina Bloom", 
      price: "₹1,899", 
      oldPrice: "₹2,299", 
      rating: 4.9, 
      img: heroHamper, 
      tag: "Personalized",
      description: "A delicate arrangement of dried florals with a scented candle"
    },
    { 
      name: "Rose Ritual Box", 
      price: "₹1,499", 
      rating: 4.8, 
      img: hamper5, 
      tag: "Best Seller",
      description: "Luxurious rose-themed skincare set with aromatherapy oils"
    },
    { 
      name: "Little Wonder", 
      price: "₹1,299", 
      rating: 4.9, 
      img: hamper4, 
      tag: "New",
      description: "Perfect for baby celebrations with soft plush and treats"
    },
    { 
      name: "Golden Diwali", 
      price: "₹2,199", 
      rating: 5.0, 
      img: hamper6, 
      tag: "Limited",
      description: "Festive gold-themed hamper with premium sweets and diyas"
    },
  ];
  
  return (
    <section className="section-padding bg-[#F8F5F2]" id="bestsellers">
      <div className="container-evermaze">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="eyebrow">Best Sellers</span>
            <h2 className="mt-4 text-[#2F272C]">Loved by thousands.</h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 text-sm font-medium text-[#7D6B87] hover:text-[#2F272C] transition-colors">
            Shop all
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- New Arrivals ---------- */
function NewArrivals() {
  const products: Product[] = [
    { name: "Bridal Whispers", price: "₹2,499", rating: 4.9, img: hamper2, tag: "New", description: "Elegant bridal collection with silk and dried roses" },
    { name: "Birthday Confetti", price: "₹899", rating: 4.7, img: hamper3, tag: "New", description: "Playful celebration box with cake and surprises" },
    { name: "Sweet Nothings", price: "₹1,199", rating: 4.8, img: hamper1, tag: "New", description: "Romantic hamper with chocolates and love notes" },
    { name: "Rose Ritual", price: "₹1,499", rating: 4.9, img: hamper5, tag: "New", description: "Self-care essentials in a beautiful presentation" },
    { name: "Baby Bloom", price: "₹1,299", rating: 5.0, img: hamper4, tag: "New", description: "Soft pastels with plush toys and essentials" },
    { name: "Festive Golden", price: "₹1,999", rating: 4.9, img: hamper6, tag: "New", description: "Opulent festive collection with traditional sweets" },
  ];
  
  return (
    <section className="section-padding bg-[#E9DDD2]/30">
      <div className="container-evermaze">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <span className="eyebrow">New Arrivals</span>
            <h2 className="mt-4 text-[#2F272C]">Freshly wrapped this week.</h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 text-sm font-medium text-[#7D6B87] hover:text-[#2F272C] transition-colors">
            View all new arrivals
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      
      {/* Horizontal Scroll */}
      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div 
          className="flex gap-6 md:gap-8 px-5 md:px-10" 
          style={{ paddingLeft: "max(1.5rem, calc((100vw - 1320px)/2 + 3rem))" }}
        >
          {products.map((p) => (
            <div key={p.name} className="w-[75vw] sm:w-[45vw] md:w-[32vw] lg:w-[22vw] shrink-0">
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Build Your Own Box Section ---------- */
function BuildYourBox() {
  const steps = [
    { 
      icon: <Package className="w-6 h-6" />,
      n: "01", 
      t: "Choose Box", 
      d: "Pick a size and style that fits your moment." 
    },
    { 
      icon: <Sparkles className="w-6 h-6" />,
      n: "02", 
      t: "Choose Theme", 
      d: "From bridal to birthday, set the mood." 
    },
    { 
      icon: <Gift className="w-6 h-6" />,
      n: "03", 
      t: "Choose Products", 
      d: "Handpick every little joy inside." 
    },
    { 
      icon: <Heart className="w-6 h-6" />,
      n: "04", 
      t: "Special Message", 
      d: "Add a handwritten note, straight from you." 
    },
    { 
      icon: <Calendar className="w-6 h-6" />,
      n: "05", 
      t: "Delivery Date", 
      d: "Pick when the surprise should arrive." 
    },
    { 
      icon: <ShoppingCart className="w-6 h-6" />,
      n: "06", 
      t: "Preview & Checkout", 
      d: "See your box, then send with love." 
    },
  ];
  
  return (
    <section id="build" className="section-padding bg-gradient-to-b from-[#E9DDD2]/30 via-[#E9DDD2]/50 to-[#E9DDD2]/30">
      <div className="container-evermaze">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-luxury">
              <img 
                src={hamper1} 
                alt="Build your own personalized gift box" 
                loading="lazy" 
                width={1000} 
                height={1200}
                className="size-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-taupe/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-gradient-to-br from-[#7D6B87] to-taupe text-white p-6 md:p-8 rounded-3xl shadow-luxury max-w-[200px] md:max-w-[240px]">
              <Sparkles className="w-6 h-6 md:w-7 md:h-7 mb-3" />
              <p className="font-serif text-xl md:text-2xl italic leading-tight">Yours, entirely.</p>
              <p className="mt-2 text-xs tracking-widest uppercase opacity-80">Made just for them</p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="eyebrow">Build your own box</span>
            <h2 className="mt-4 text-[#2F272C] leading-[1.1]">
              Six little steps.<br />
              <span className="italic text-[#7D6B87]">One perfect gift.</span>
            </h2>
            <p className="mt-6 text-[#4B4347] max-w-md leading-relaxed">
              Design a hamper as one-of-a-kind as they are. Every choice, every note, every detail — yours to shape.
            </p>

            {/* Steps Grid */}
            <ol className="mt-10 md:mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#7D6B87]/10 flex items-center justify-center text-[#7D6B87]">
                    {s.icon}
                  </div>
                  <div>
                    <span className="font-serif italic text-[#7D6B87]/70 text-sm">{s.n}</span>
                    <h3 className="font-serif text-xl text-[#2F272C]">{s.t}</h3>
                    <p className="mt-1 text-sm text-[#4B4347]">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <a href="#" className="btn-primary mt-10 md:mt-12 inline-flex">
              Start Building <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Evermaze ---------- */
function WhyEvermaze() {
  const items = [
    { 
      icon: Package, 
      t: "Premium Packaging", 
      d: "Every box, a keepsake." 
    },
    { 
      icon: Gift, 
      t: "Handpicked Gifts", 
      d: "Only what we'd gift ourselves." 
    },
    { 
      icon: HandHeart, 
      t: "Personalized Touch", 
      d: "Notes, names & tiny details." 
    },
    { 
      icon: Truck, 
      t: "Fast Delivery", 
      d: "Same-day dispatch, most cities." 
    },
    { 
      icon: Sparkles, 
      t: "Made with Love", 
      d: "Slow-crafted, one at a time." 
    },
    { 
      icon: Clock, 
      t: "Affordable Luxury", 
      d: "Grand feelings, gentle prices." 
    },
  ];
  
  return (
    <section className="section-padding bg-[#F8F5F2]" id="about">
      <div className="container-evermaze">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="eyebrow">Why Evermaze</span>
          <h2 className="mt-4 text-[#2F272C]">Small details. Big feelings.</h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map(({ icon: Icon, t, d }) => (
            <div 
              key={t} 
              className="group flex gap-5 p-6 md:p-8 rounded-3xl bg-[#E9DDD2]/30 border border-transparent hover:border-lavender/20 transition-all duration-300"
            >
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#7D6B87]/10 flex items-center justify-center text-[#7D6B87] group-hover:bg-[#7D6B87] group-hover:text-white transition-colors duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-xl text-[#2F272C]">{t}</h3>
                <p className="mt-2 text-sm text-[#4B4347] leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How It Works ---------- */
function HowItWorks() {
  const steps = [
    { 
      n: "01", 
      t: "Choose", 
      d: "Browse curated hampers or start from scratch with our Build Your Box tool." 
    },
    { 
      n: "02", 
      t: "Personalize", 
      d: "Add names, notes, and thoughtful touches that make it uniquely theirs." 
    },
    { 
      n: "03", 
      t: "Packed Beautifully", 
      d: "Wrapped by hand with ribbon and all the little details that matter." 
    },
    { 
      n: "04", 
      t: "Delivered with Love", 
      d: "Straight to their doorstep, on the date that matters most." 
    },
  ];
  
  return (
    <section className="section-padding bg-gradient-to-b from-[#E9DDD2]/30 to-[#F8F5F2]">
      <div className="container-evermaze">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 text-[#2F272C] leading-[1.1]">
              From <span className="italic text-[#7D6B87]">your heart</span><br /> to their hands.
            </h2>
            
            {/* Image */}
            <div className="mt-8 md:mt-10 relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-luxury">
                <img 
                  src={storyImg} 
                  alt="Hands tying a silk ribbon on a cream gift box" 
                  loading="lazy" 
                  width={1400} 
                  height={1000} 
                  className="size-full object-cover" 
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#7D6B87]/10 rounded-full -z-10" />
            </div>
          </div>

          {/* Right Steps */}
          <div className="space-y-6 md:space-y-8">
            {steps.map((s, i) => (
              <div 
                key={s.n} 
                className="relative pl-8 md:pl-10 pb-6 md:pb-8 border-l-2 border-lavender/20 last:pb-0 last:border-l-0"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[-2px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-[#7D6B87]/20 to-transparent" />
                )}
                
                <span className="absolute left-[-2px] top-0 w-8 h-8 rounded-full bg-[#7D6B87]/10 flex items-center justify-center">
                  <span className="font-serif text-sm text-[#7D6B87] font-medium">{s.n}</span>
                </span>
                
                <h3 className="font-serif text-2xl md:text-3xl text-[#2F272C]">{s.t}</h3>
                <p className="mt-2 text-[#4B4347] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews Section ---------- */
function Reviews() {
  const reviews = [
    { 
      name: "Aanya M.", 
      city: "Delhi", 
      rating: 5,
      text: "The moment I lifted the lid, I gasped. Every detail felt intentional — even the ribbon smelled lovely.", 
      img: hamper1 
    },
    { 
      name: "Karan S.", 
      city: "Mumbai", 
      rating: 5,
      text: "Sent this to my wife on our anniversary. She cried. In a good way. Evermaze made me look like a hero.", 
      img: hamper5 
    },
    { 
      name: "Ritika P.", 
      city: "Bangalore", 
      rating: 5,
      text: "It's the little handwritten note that got me. Feels like the boxes are packed by someone who really cares.", 
      img: hamper4 
    },
    { 
      name: "Ananya G.", 
      city: "Pune", 
      rating: 5,
      text: "Better than any big-brand hamper I've ordered. Elegant, personal, and delivered right on time.", 
      img: hamper2 
    },
  ];
  
  return (
    <section className="section-padding bg-[#E9DDD2]/30">
      <div className="container-evermaze">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="eyebrow">Little love notes</span>
          <h2 className="mt-4 text-[#2F272C]">What our gifters are saying.</h2>
        </div>
        
        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {reviews.map((r) => (
            <figure 
              key={r.name} 
              className="mb-6 break-inside-avoid bg-[#F8F5F2] rounded-3xl p-5 md:p-6 shadow-soft overflow-hidden"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-5">
                <img 
                  src={r.img} 
                  alt="" 
                  loading="lazy" 
                  width={1000} 
                  height={1200} 
                  className="size-full object-cover" 
                />
              </div>
              
              {/* Stars */}
              <div className="flex items-center gap-1 text-[#7D6B87] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < r.rating ? "fill-current" : ""}`} />
                ))}
              </div>
              
              <blockquote className="font-serif text-lg leading-relaxed text-[#2F272C] italic">
                "{r.text}"
              </blockquote>
              
              <figcaption className="mt-4 text-sm tracking-wider uppercase text-[#4B4347]">
                — {r.name} · {r.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Instagram Gallery ---------- */
function InstagramGallery() {
  const imgs = [heroHamper, hamper1, hamper5, hamper3, hamper4, hamper6, hamper2, storyImg];
  
  return (
    <section className="section-padding bg-[#F8F5F2]">
      <div className="container-evermaze mb-10 md:mb-14 text-center">
        <span className="eyebrow">@evermaze on Instagram</span>
        <h2 className="mt-4 text-[#2F272C]">Come unbox with us.</h2>
        <a 
          href="https://instagram.com/evermaze" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[#7D6B87] hover:text-[#2F272C] transition-colors"
        >
          Follow us <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {imgs.map((src, i) => (
          <a 
            key={i} 
            href="https://instagram.com/evermaze" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl md:rounded-3xl"
          >
            <img 
              src={src} 
              alt={`Evermaze instagram post ${i + 1}`} 
              loading="lazy" 
              width={1000} 
              height={1000}
              className="size-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-taupe/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Instagram className="w-8 h-8 text-white" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------- Newsletter Section ---------- */
function Newsletter() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#66566F] to-[#7D6B87] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container-evermaze text-center max-w-2xl relative z-10">
        <MailIcon className="w-12 h-12 mx-auto mb-6 text-white/80" />
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/80">Join the family</span>
        <h2 className="mt-4 text-white">Join the Evermaze family.</h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          Get exclusive offers, new launches and gentle gifting inspiration — straight to your inbox.
        </p>
        
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            aria-label="Email address"
            className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 focus:border-white/50 rounded-full px-6 py-4 text-sm placeholder:text-white/40 text-white outline-none transition-colors"
          />
          <button 
            type="submit" 
            className="bg-white text-[#2F272C] px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#E9DDD2] transition-colors"
          >
            Subscribe
          </button>
        </form>
        
        <p className="mt-6 text-xs text-white/60">
          No spam, just love. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

/* ---------- Luxury Footer ---------- */
function Footer() {
  const cols = [
    { 
      t: "Shop", 
      links: [
        { name: "All Hampers", href: "#" },
        { name: "Occasions", href: "#shop" },
        { name: "Build Your Box", href: "#build" },
        { name: "Under ₹999", href: "#" },
        { name: "Gift Cards", href: "#" },
      ] 
    },
    { 
      t: "Help", 
      links: [
        { name: "Track Order", href: "#" },
        { name: "Shipping", href: "#" },
        { name: "Returns", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Contact", href: "#" },
      ] 
    },
    { 
      t: "About", 
      links: [
        { name: "Our Story", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Corporate Gifting", href: "#" },
        { name: "Press", href: "#" },
      ] 
    },
  ];
  
  return (
    <footer className="bg-[#2F272C] text-white">
      {/* Main Footer */}
      <div className="container-evermaze py-16 md:py-20">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 md:gap-16">
          {/* Brand Column */}
          <div>
            <Logo size="lg" className="text-white [&_span:first-child]:text-white [&_span:last-child]:text-white/60" />
            
            <p className="mt-6 text-white/80 leading-relaxed max-w-sm">
              Beautifully personalized gift hampers, thoughtfully packed for every celebration. 
              Made with love, delivered with care.
            </p>
            
            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              <a 
                href="https://instagram.com/evermaze" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2F272C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:evermaze.info@gmail.com"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2F272C] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2F272C] transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {cols.map((col) => (
            <div key={col.t}>
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-6">
                {col.t}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-evermaze py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Evermaze. Made with love in India.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Main HomePage Component ---------- */
function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      <Header />
      <main>
        <Hero />
        <Strip />
        <Occasions />
        <ShopByPrice />
        <BestSellers />
        <NewArrivals />
        <BuildYourBox />
        <WhyEvermaze />
        <HowItWorks />
        <Reviews />
        <InstagramGallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
