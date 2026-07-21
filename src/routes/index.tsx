import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search, Heart, ShoppingBag, User, Menu, X, Star,
  Instagram, MessageCircle, Mail, Truck, Gift, Package, HandHeart, Clock, ArrowRight,
  Sparkles, Award, Heart as HeartIcon, Calendar, Palette, Camera, Ribbon,
  Plus, ChevronRight, Quote
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

/* ---------- Header ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/shop" },
    { name: "Occasions", to: "/gift-hampers" },
    { name: "Build Your Own Box", to: "/build-your-box" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-evermaze py-4">
        <div className="hidden md:flex items-center justify-between">
          <nav className="flex items-center gap-6 lg:gap-8">
            {nav.slice(0, 3).map((n) => (
              <Link key={n.name} to={n.to} className="text-xs tracking-[0.15em] uppercase text-charcoal hover:text-lavender transition-colors">
                {n.name}
              </Link>
            ))}
          </nav>

          <Link to="/" className="flex flex-col items-center leading-none mx-4 lg:mx-8">
            <span className="font-serif text-2xl lg:text-3xl tracking-[0.3em] text-charcoal">EVERMAZE</span>
            <span className="mt-0.5 text-[0.55rem] lg:text-xs tracking-[0.35em] uppercase text-gray-500 font-light">Just For You</span>
          </Link>

          <nav className="flex items-center gap-6 lg:gap-8">
            {nav.slice(3).map((n) => (
              <Link key={n.name} to={n.to} className="text-xs tracking-[0.15em] uppercase text-charcoal hover:text-lavender transition-colors">
                {n.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-2 lg:ml-4">
              <button 
                onClick={() => setSearchOpen(!searchOpen)} 
                aria-label="Search" 
                className={`hover:text-lavender transition-colors ${searchOpen ? "text-lavender" : "text-charcoal"}`}
              >
                <Search className="size-[18px]" />
              </button>
              <Link to="/wishlist" aria-label="Wishlist" className="text-charcoal hover:text-lavender transition-colors"><Heart className="size-[18px]" /></Link>
              <Link to="/profile" aria-label="Account" className="text-charcoal hover:text-lavender transition-colors"><User className="size-[18px]" /></Link>
              <Link to="/cart" aria-label="Cart" className="relative text-charcoal hover:text-lavender transition-colors">
                <ShoppingBag className="size-[18px]" />
              </Link>
            </div>
          </nav>
        </div>

        <div className="flex md:hidden items-center justify-between">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 -ml-2 z-20 text-charcoal"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <Link to="/" className="flex flex-col items-center leading-none">
            <span className="font-serif text-xl tracking-[0.3em] text-charcoal">EVERMAZE</span>
            <span className="mt-0.5 text-[0.5rem] tracking-[0.35em] uppercase text-gray-500 font-light">Just For You</span>
          </Link>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)} 
              aria-label="Search" 
              className="text-charcoal"
            >
              <Search className="size-[18px]" />
            </button>
            <Link to="/cart" aria-label="Cart" className="text-charcoal hover:text-lavender transition-colors">
              <ShoppingBag className="size-[18px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-4 shadow-md">
          <div className="container-evermaze">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search for gift hampers..."
                autoFocus
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:border-lavender focus:outline-none transition-colors"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-charcoal"
                aria-label="Close search"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container-evermaze py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link key={n.name} to={n.to} className="text-sm tracking-[0.15em] uppercase text-charcoal">{n.name}</Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-12 md:pb-20 overflow-hidden bg-gradient-to-b from-cream to-white">
      <div className="container-evermaze grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <span className="inline-block text-xs tracking-[0.35em] uppercase text-lavender font-medium">EVERMAZE</span>
          <h1 className="mt-4 md:mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-charcoal">
            Thoughtful Gifts,<br />
            <span className="italic text-lavender">Made with Love</span>
          </h1>
          <p className="mt-4 md:mt-6 max-w-md mx-auto md:mx-0 text-gray-600 leading-relaxed text-sm md:text-base">
            Curated gift hampers for every occasion, packed with care and made to create unforgettable moments.
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
            <Link to="/shop" className="btn-secondary">Explore Hampers <ArrowRight className="size-4" /></Link>
            <Link to="/build-your-box" className="btn-outline border-charcoal text-charcoal hover:bg-charcoal hover:text-white">Build Your Own Box</Link>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-lavender/10 to-dusty-lavender/20">
            <img
              src={heroHamper}
              alt="Premium lavender gift hamper with satin ribbon and dried flowers"
              width={1600} height={1808}
              className="size-full object-cover"
            />
          </div>
          <div className="hidden lg:block absolute -bottom-6 -left-8 w-44 bg-white rounded-2xl p-5 shadow-lg">
            <div className="flex items-center gap-1 text-lavender">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-3 fill-current" />)}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-gray-600">
              "It felt like opening a little world of love."
            </p>
            <p className="mt-2 text-[10px] tracking-[0.15em] uppercase text-gray-500">— Aanya, Delhi</p>
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
    { icon: Truck, label: "Safe & Fast Delivery" },
  ];

  return (
    <section className="py-8 md:py-12 bg-white border-y border-gray-100">
      <div className="container-evermaze">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <div className="size-12 md:size-14 rounded-full bg-lavender/10 flex items-center justify-center">
                <f.icon className="size-5 md:size-6 text-lavender" />
              </div>
              <span className="text-xs md:text-sm text-charcoal font-medium tracking-wide">{f.label}</span>
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
    { name: "Best Friends", img: hamper3 },
    { name: "Anniversary", img: hamper4 },
    { name: "Self Care", img: hamper5 },
    { name: "Festive", img: hamper6 },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-evermaze">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-lavender">Shop by Occasion</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-charcoal">Find the Perfect Gift</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {occasions.map((occ, i) => (
            <Link
              key={i}
              to="/shop"
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100"
            >
              <img
                src={occ.img}
                alt={occ.name}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-serif text-lg md:text-xl">{occ.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Promotional Banner ---------- */
function PromoBanner() {
  return (
    <section className="py-16 md:py-20 bg-lavender relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-12 size-24 rounded-full border-2 border-white" />
        <div className="absolute bottom-12 right-16 size-16 rounded-full border-2 border-white" />
        <div className="absolute top-1/2 right-1/4 size-8 rounded-full bg-white" />
      </div>
      <div className="container-evermaze text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
          More Than a Gift,<br />It's an Emotion
        </h2>
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-white/80 text-sm md:text-base leading-relaxed">
          Curated hampers that speak from the heart and stay in memory forever.
        </p>
        <Link to="/shop" className="inline-flex items-center gap-2 mt-8 md:mt-10 px-8 py-3.5 bg-white text-lavender rounded-full font-medium text-sm tracking-wide hover:bg-gray-100 transition-colors">
          Shop Now <ChevronRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

/* ---------- Best Sellers ---------- */
function BestSellers() {
  const products = [
    { name: "Birthday Bliss Hamper", price: 999, rating: 4.9, img: hamper1 },
    { name: "Romantic Evening Box", price: 1499, rating: 5.0, img: hamper2 },
    { name: "Self Care Retreat", price: 799, rating: 4.8, img: hamper3 },
    { name: "Best Friend Forever", price: 1199, rating: 4.9, img: hamper4 },
    { name: "Festive Celebration", price: 1999, rating: 4.7, img: hamper5 },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-evermaze">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-lavender">Customer Favorites</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-charcoal">Best Sellers</h2>
          </div>
          <Link to="/shop" className="text-sm text-lavender hover:text-dusty-lavender transition-colors tracking-wide flex items-center gap-1">
            View All <ChevronRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((p, i) => (
            <div key={i} className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-3">
                <img src={p.img} alt={p.name} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <button className="absolute bottom-3 right-3 size-10 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-lavender hover:text-white">
                  <Plus className="size-5" />
                </button>
              </div>
              <h3 className="font-medium text-charcoal text-sm md:text-base">{p.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <Star className="size-3 fill-lavender text-lavender" />
                <span className="text-xs text-gray-600">{p.rating}</span>
              </div>
              <p className="mt-1 font-serif text-lg text-lavender">₹{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Budget Collection ---------- */
function BudgetCollection() {
  const boxes = [
    { price: 199, name: "Mini Surprise", items: 4, img: hamper1 },
    { price: 499, name: "Signature Box", items: 6, img: hamper2 },
    { price: 999, name: "Celebration Hamper", items: 9, img: hamper3 },
    { price: 1499, name: "Premium Moments", items: 12, img: hamper4 },
    { price: 1999, name: "Grand Gesture Box", items: 15, img: hamper5 },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream to-white">
      <div className="container-evermaze">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-lavender">Build Your Own</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-charcoal">Budget Collections</h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">Choose your budget and we'll curate the perfect hamper</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {boxes.map((box, i) => (
            <Link
              key={i}
              to="/build-your-box"
              className="group bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                <img src={box.img} alt={box.name} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="font-serif text-2xl md:text-3xl text-lavender">₹{box.price}</p>
              <p className="mt-1 font-medium text-charcoal text-sm md:text-base">{box.name}</p>
              <p className="mt-1 text-xs text-gray-500">{box.items} items</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/build-your-box" className="btn-secondary">
            Build Your Custom Hamper <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Customization Section ---------- */
function CustomizationSection() {
  const options = [
    { icon: Calendar, label: "Choose Occasion" },
    { icon: HeartIcon, label: "Add a Personal Message" },
    { icon: Clock, label: "Select Delivery Date" },
    { icon: Camera, label: "Add Photos (Optional)" },
    { icon: Palette, label: "Choose Ribbon Color" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-evermaze">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-lavender">Personal Touch</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-charcoal">Make It Uniquely Yours</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every hamper comes with customization options to make your gift truly special. Add personal touches that will be treasured forever.
            </p>
            <div className="mt-8 space-y-4">
              {options.map((opt, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-lavender/10 flex items-center justify-center flex-shrink-0">
                    <opt.icon className="size-5 text-lavender" />
                  </div>
                  <span className="text-charcoal font-medium">{opt.label}</span>
                </div>
              ))}
            </div>
            <Link to="/build-your-box" className="btn-secondary mt-8">
              Start Customizing <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-lavender/20 to-dusty-lavender/30">
              <img src={storyImg} alt="Personalized gift wrapping with lavender ribbon" className="size-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Instagram Gallery ---------- */
function InstagramGallery() {
  const images = [hamper1, hamper2, hamper3, hamper4, hamper5, hamper6];

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-evermaze">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-lavender">@evermaze.gifts</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-charcoal">Follow Our Journey</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {images.map((img, i) => (
            <a key={i} href="#" className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img src={img} alt={`Instagram post ${i + 1}`} className="size-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="size-8 text-white" />
              </div>
            </a>
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container-evermaze">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-lavender">Love Letters</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-charcoal">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-cream rounded-2xl p-6 md:p-8">
              <Quote className="size-8 text-lavender/40 mb-4" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="size-4 fill-lavender text-lavender" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-lavender/20 overflow-hidden">
                  <img src={r.img} alt={r.name} className="size-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-charcoal">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Newsletter ---------- */
function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-cream">
      <div className="container-evermaze">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Join the Evermaze Family</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Get gifting inspiration, exclusive offers, and early access to new hampers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full border border-gray-200 bg-white focus:border-lavender focus:outline-none text-sm"
            />
            <button className="btn-secondary whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-xs text-gray-500">By subscribing, you agree to our Privacy Policy</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const cols = [
    {
      t: "Quick Links",
      l: [
        { name: "Shop All", to: "/shop" },
        { name: "Build Your Box", to: "/build-your-box" },
        { name: "Occasions", to: "/gift-hampers" },
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
        { name: "About Us", to: "/about" },
        { name: "Our Story", to: "/about" },
        { name: "Press", to: "/about" },
      ]
    },
  ];
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container-evermaze">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-12">
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] text-white">EVERMAZE</Link>
            <p className="mt-1 text-[0.6rem] tracking-[0.35em] uppercase text-gray-400 font-light">Just For You</p>
            <p className="mt-5 max-w-xs text-gray-400 leading-relaxed text-sm">
              Beautifully personalized gift hampers, thoughtfully curated for every celebration.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Instagram" className="size-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-lavender hover:border-lavender transition-colors">
                <Instagram className="size-4" />
              </a>
              <a href="#" aria-label="WhatsApp" className="size-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-lavender hover:border-lavender transition-colors">
                <MessageCircle className="size-4" />
              </a>
              <a href="#" aria-label="Email" className="size-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-lavender hover:border-lavender transition-colors">
                <Mail className="size-4" />
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <h4 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-5">{c.t}</h4>
              <ul className="space-y-3 text-sm">
                {c.l.map((li) => <li key={li.name}><Link to={li.to} className="text-gray-300 hover:text-white transition-colors">{li.name}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">
          <span>© 2026 Evermaze. Made with love.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
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
        <PromoBanner />
        <BestSellers />
        <BudgetCollection />
        <CustomizationSection />
        <InstagramGallery />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
