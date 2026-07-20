import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search, Heart, ShoppingBag, User, Menu, X, Star,
  Instagram, MessageCircle, Mail, Truck, Sparkles, Gift, Package, HandHeart, Clock, ArrowRight,
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
    { name: "Shop", to: "/shop" },
    { name: "Gift Hampers", to: "/gift-hampers" },
    { name: "Build Your Box", to: "/build-your-box" },
    { name: "About", to: "/about" },
    { name: "FAQs", to: "/faq" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-card/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-evermaze flex items-center justify-between py-4">
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -ml-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <nav className="hidden md:flex items-center gap-8 flex-1">
          {nav.slice(0, 3).map((n) => (
            <Link key={n.name} to={n.to} className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-burgundy transition-colors">
              {n.name}
            </Link>
          ))}
        </nav>

        <Link to="/" className="flex flex-col items-center leading-none">
          <span className="font-serif text-2xl md:text-3xl tracking-[0.35em] text-burgundy">EVERMAZE</span>
          <span className="mt-1 text-[0.6rem] md:text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground">Just For You</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 flex-1 justify-end">
          {nav.slice(3).map((n) => (
            <Link key={n.name} to={n.to} className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-burgundy transition-colors">
              {n.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5 md:ml-8">
          <button 
            onClick={() => setSearchOpen(!searchOpen)} 
            aria-label="Search" 
            className={`hover:text-burgundy transition-colors ${searchOpen ? "text-burgundy" : ""}`}
          >
            <Search className="size-[18px]" />
          </button>
          <Link to="/wishlist" aria-label="Wishlist" className="hover:text-burgundy transition-colors hidden sm:block"><Heart className="size-[18px]" /></Link>
          <Link to="/profile" aria-label="Account" className="hover:text-burgundy transition-colors hidden sm:block"><User className="size-[18px]" /></Link>
          <Link to="/cart" aria-label="Cart" className="relative hover:text-burgundy transition-colors">
            <ShoppingBag className="size-[18px]" />
            <span className="absolute -top-1.5 -right-2 bg-burgundy text-white text-[9px] rounded-full size-4 grid place-items-center">2</span>
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-card border-b border-border p-4 shadow-lg">
          <div className="container-evermaze">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search for gift hampers..."
                autoFocus
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-full focus:border-burgundy focus:outline-none transition-colors"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Close search"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container-evermaze py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link key={n.name} to={n.to} className="text-xs tracking-[0.2em] uppercase">{n.name}</Link>
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
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="container-evermaze grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <span className="eyebrow">Made with love</span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight">
            Personalized<br />
            <span className="italic text-burgundy">Gift Hampers</span><br />
            Made With Love.
          </h1>
          <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
            Curated gifts for every celebration, thoughtfully packed to
            create unforgettable memories — moments that live longer than the ribbon.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/shop" className="btn-primary">Shop Hampers <ArrowRight className="size-4" /></Link>
            <Link to="/build-your-box" className="btn-outline">Build Your Own Box</Link>
          </div>

          <div className="mt-14 flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            <div><span className="block font-serif text-2xl text-foreground normal-case tracking-normal">12k+</span>Happy gifters</div>
            <div className="w-px h-10 bg-border" />
            <div><span className="block font-serif text-2xl text-foreground normal-case tracking-normal">4.9</span>Rating</div>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-champagne-soft">
            <img
              src={heroHamper}
              alt="Personalized Evermaze gift hamper with candle, dried florals and silk ribbon"
              width={1600} height={1808}
              className="size-full object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-8 -left-10 w-48 bg-card rounded-2xl p-5 shadow-[var(--shadow-card)] animate-float">
            <div className="flex items-center gap-1 text-burgundy">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-3 fill-current" />)}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              "It felt like opening a little world of love."
            </p>
            <p className="mt-2 text-[10px] tracking-[0.2em] uppercase">— Aanya, Delhi</p>
          </div>
          <div className="hidden md:flex absolute -top-6 -right-6 size-28 rounded-full bg-burgundy text-white items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="text-center">
              <div className="font-serif italic text-lg leading-tight">Packed<br/>with love</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Marquee strip ---------- */
function Strip() {
  const items = ["Free shipping over ₹999", "Personalization included", "Same-day dispatch", "Handwritten notes", "Sustainable packaging"];
  return (
    <div className="border-y border-border bg-card/50 py-4">
      <div className="container-evermaze flex flex-wrap justify-center gap-x-10 gap-y-2 text-[0.7rem] tracking-[0.25em] uppercase text-gray-700">
        {items.map((i) => <span key={i}>· {i}</span>)}
      </div>
    </div>
  );
}

/* ---------- Occasions ---------- */
function Occasions() {
  const items = [
    { name: "Birthday", img: hamper3 },
    { name: "Anniversary", img: hamper5 },
    { name: "Wedding", img: hamper2 },
    { name: "Baby Shower", img: hamper4 },
    { name: "Farewell", img: hamper6 },
    { name: "Friendship", img: hamper1 },
    { name: "Festival Hamper", img: hamper3 },
    { name: "Special Moments", img: heroHamper },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-evermaze">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow">Shop by occasion</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Made for every moment.</h2>
          </div>
          <Link to="/gift-hampers" className="text-xs tracking-[0.2em] uppercase text-burgundy border-b border-burgundy pb-1">View all occasions</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((it, i) => (
            <Link key={it.name + i} to="/gift-hampers" className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
              <img src={it.img} alt={`${it.name} gift hampers`} loading="lazy" width={1000} height={1200}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-white">{it.name}</h3>
                <span className="mt-1 inline-flex items-center gap-1 text-[0.65rem] tracking-[0.3em] uppercase text-white/90">
                  Explore <ArrowRight className="size-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Shop by Price ---------- */
function ShopByPrice() {
  const hamperTypes = [
    { price: 199, name: "Mini Hamper", description: "Perfect small gesture" },
    { price: 499, name: "Classic Hamper", description: "Thoughtful gift" },
    { price: 999, name: "Signature Hamper", description: "Premium selection" },
    { price: 1499, name: "Supreme Hamper", description: "Luxurious experience" },
    { price: 1999, name: "Luxury Hamper", description: "Ultimate indulgence" },
  ];

  return (
    <section className="py-16 md:py-24 bg-card border-y border-border">
      <div className="container-evermaze">
        <div className="text-center mb-12">
          <span className="eyebrow">Build Your Perfect Hamper</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Customize it your way.</h2>
        </div>
        {/* Hamper Types */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {hamperTypes.map((h) => (
            <Link 
              key={h.price}
              to={`/build-your-box?package=${h.price}`}
              className="group relative bg-ivory border border-border rounded-2xl py-8 px-4 text-center transition-all hover:border-burgundy hover:-translate-y-1"
            >
              <span className="block font-serif text-3xl md:text-4xl text-burgundy">₹{h.price}</span>
              <span className="block mt-2 font-serif text-lg text-foreground">{h.name}</span>
              <span className="mt-1 inline-flex items-center gap-1 text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                Customize <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Product card ---------- */
type Product = { name: string; price: string; oldPrice?: string; rating: number; img: string; tag?: string };

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
        <img src={p.img} alt={p.name} loading="lazy" width={1000} height={1200}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        {p.tag && (
          <span className="absolute top-3 left-3 bg-ivory/95 backdrop-blur px-3 py-1 text-[0.6rem] tracking-[0.25em] uppercase rounded-full">
            {p.tag}
          </span>
        )}
        <button
          aria-label={`Add ${p.name} to wishlist`}
          className="absolute top-3 right-3 size-9 grid place-items-center bg-ivory/95 backdrop-blur rounded-full hover:bg-burgundy hover:text-white transition-colors"
        >
          <Heart className="size-4" />
        </button>
        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button className="w-full bg-foreground text-ivory text-[0.7rem] tracking-[0.25em] uppercase py-3 rounded-full hover:bg-burgundy">
            Quick Add
          </button>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-serif text-lg leading-tight truncate">{p.name}</h3>
          <div className="mt-1 flex items-center gap-1 text-burgundy">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`size-3 ${i < Math.floor(p.rating) ? "fill-current" : ""}`} />
            ))}
            <span className="ml-1 text-[10px] text-muted-foreground">{p.rating}</span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <span className="font-serif text-lg">{p.price}</span>
          {p.oldPrice && <span className="block text-xs text-muted-foreground line-through">{p.oldPrice}</span>}
        </div>
      </div>
    </article>
  );
}

/* ---------- Best sellers ---------- */
function BestSellers() {
  const products: Product[] = [
    { name: "The Sabrina Bloom", price: "₹1,899", oldPrice: "₹2,299", rating: 4.9, img: heroHamper, tag: "Personalized" },
    { name: "Rose Ritual Box", price: "₹1,499", rating: 4.8, img: hamper5, tag: "Best Seller" },
    { name: "Little Wonder", price: "₹1,299", rating: 4.9, img: hamper4, tag: "New" },
    { name: "Golden Diwali", price: "₹2,199", rating: 5.0, img: hamper6, tag: "Limited" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-evermaze">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow">Best Sellers</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Loved by thousands.</h2>
          </div>
          <Link to="/shop" className="text-xs tracking-[0.2em] uppercase text-burgundy border-b border-burgundy pb-1">Shop all</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- New Arrivals (horizontal) ---------- */
function NewArrivals() {
  const products: Product[] = [
    { name: "Bridal Whispers", price: "₹2,499", rating: 4.9, img: hamper2, tag: "New" },
    { name: "Birthday Confetti", price: "₹899", rating: 4.7, img: hamper3, tag: "New" },
    { name: "Sweet Nothings", price: "₹1,199", rating: 4.8, img: hamper1, tag: "New" },
    { name: "Rose Ritual", price: "₹1,499", rating: 4.9, img: hamper5, tag: "New" },
    { name: "Baby Bloom", price: "₹1,299", rating: 5.0, img: hamper4, tag: "New" },
    { name: "Festive Golden", price: "₹1,999", rating: 4.9, img: hamper6, tag: "New" },
  ];
  return (
    <section className="py-20 md:py-28 bg-card border-y border-border">
      <div className="container-evermaze">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <span className="eyebrow">New Arrivals</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Freshly wrapped this week.</h2>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-5 md:px-10 pb-4" style={{ paddingLeft: "max(1.25rem, calc((100vw - 1400px)/2 + 2.5rem))" }}>
          {products.map((p) => (
            <div key={p.name} className="w-[70vw] sm:w-[40vw] md:w-[24vw] lg:w-[18vw] shrink-0">
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Build your own box ---------- */
function BuildYourBox() {
  const steps = [
    { n: "01", t: "Choose Box", d: "Pick a size and style that fits your moment." },
    { n: "02", t: "Choose Occasion", d: "From bridal to birthday, set the mood." },
    { n: "03", t: "Choose Products", d: "Handpick every little joy inside." },
    { n: "04", t: "Special Message", d: "Add a handwritten note, straight from you." },
    { n: "05", t: "Delivery Date", d: "Pick when the surprise should arrive." },
    { n: "06", t: "Preview & Checkout", d: "See your box, then send with love." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-evermaze grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-champagne-soft">
            <img src={hamper1} alt="Build your own personalized gift box" loading="lazy" width={1000} height={1200}
              className="size-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-burgundy text-white p-6 rounded-2xl w-52 hidden md:block">
            <Sparkles className="size-5" />
            <p className="mt-3 font-serif text-xl leading-tight italic">Yours, entirely.</p>
            <p className="mt-1 text-[10px] tracking-[0.25em] uppercase opacity-80">Made just for them</p>
          </div>
        </div>

        <div>
          <span className="eyebrow">Build your own box</span>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl leading-[1.05]">
            Six little steps.<br /><span className="italic text-burgundy">One perfect gift.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Design a hamper as one-of-a-kind as they are. Every choice, every note, every detail — yours to shape.
          </p>

          <ol className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {steps.map((s) => (
              <li key={s.n} className="border-l border-border pl-5 py-1">
                <span className="font-serif italic text-burgundy text-sm">{s.n}</span>
                <h3 className="mt-1 font-serif text-xl">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>

          <Link to="/build-your-box" className="btn-primary mt-10">Start Building <ArrowRight className="size-4" /></Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Evermaze ---------- */
function WhyEvermaze() {
  const items = [
    { icon: Package, t: "Premium Packaging", d: "Every box, a keepsake." },
    { icon: Gift, t: "Handpicked Gifts", d: "Only what we'd gift ourselves." },
    { icon: HandHeart, t: "Personalized Touch", d: "Notes, names & tiny details." },
    { icon: Truck, t: "Fast Delivery", d: "Same-day dispatch, most cities." },
    { icon: Sparkles, t: "Made with Love", d: "Slow-crafted, one at a time." },
    { icon: Clock, t: "Affordable Luxury", d: "Grand feelings, gentle prices." },
  ];
  return (
    <section className="py-20 md:py-28 bg-card border-y border-border">
      <div className="container-evermaze">
        <div className="text-center mb-14">
          <span className="eyebrow">Why Evermaze</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Small details. Big feelings.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-5">
              <div className="shrink-0 size-14 rounded-full bg-ivory border border-border grid place-items-center text-burgundy">
                <Icon className="size-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-2xl">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Choose", d: "Browse curated hampers or start from scratch." },
    { n: "02", t: "Personalize", d: "Add names, notes and thoughtful touches." },
    { n: "03", t: "Packed Beautifully", d: "Wrapped by hand, ribbon and all." },
    { n: "04", t: "Delivered with Love", d: "Straight to their doorstep, on your date." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-evermaze">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow">How it works</span>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl leading-[1.05]">
              From <span className="italic text-burgundy">your heart</span><br /> to their hands.
            </h2>
            <div className="mt-8 aspect-[4/3] rounded-[2rem] overflow-hidden">
              <img src={storyImg} alt="Hands tying a silk ribbon on a cream gift box" loading="lazy" width={1400} height={1000} className="size-full object-cover" />
            </div>
          </div>
          <ol className="space-y-8">
            {steps.map((s, i) => (
              <li key={s.n} className="grid grid-cols-[auto_1fr] gap-6 items-start pb-8 border-b border-border last:border-none">
                <span className="font-serif text-5xl italic text-champagne">{s.n}</span>
                <div>
                  <h3 className="font-serif text-3xl">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews ---------- */
function Reviews() {
  const reviews = [
    { name: "Aanya M.", city: "Delhi", text: "The moment I lifted the lid, I gasped. Every detail felt intentional — even the ribbon smelled lovely.", img: hamper1 },
    { name: "Karan S.", city: "Mumbai", text: "Sent this to my wife on our anniversary. She cried. In a good way. Evermaze made me look like a hero.", img: hamper5 },
    { name: "Ritika P.", city: "Bangalore", text: "It's the little handwritten note that got me. Feels like the boxes are packed by someone who really cares.", img: hamper4 },
    { name: "Ananya G.", city: "Pune", text: "Better than any big-brand hamper I've ordered. Elegant, personal, and delivered right on time.", img: hamper2 },
  ];
  return (
    <section className="py-20 md:py-28 bg-card border-y border-border">
      <div className="container-evermaze">
        <div className="text-center mb-14">
          <span className="eyebrow">Little love notes</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">What our gifters are saying.</h2>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {reviews.map((r) => (
            <figure key={r.name} className="mb-6 break-inside-avoid bg-ivory border border-border rounded-3xl p-6">
              <div className="aspect-[4/5] mb-4 overflow-hidden rounded-2xl">
                <img src={r.img} alt="" loading="lazy" width={1000} height={1200} className="size-full object-cover" />
              </div>
              <div className="flex items-center gap-1 text-burgundy">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-3 fill-current" />)}
              </div>
              <blockquote className="mt-3 font-serif text-lg leading-snug italic">"{r.text}"</blockquote>
              <figcaption className="mt-4 text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground">— {r.name} · {r.city}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Instagram ---------- */
function InstagramGallery() {
  const imgs = [heroHamper, hamper1, hamper5, hamper3, hamper4, hamper6, hamper2, storyImg];
  return (
    <section className="py-20 md:py-28">
      <div className="container-evermaze mb-10 text-center">
        <span className="eyebrow">@evermaze on Instagram</span>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">Come unbox with us.</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
        {imgs.map((src, i) => (
          <a key={i} href="#" className="group relative aspect-square overflow-hidden">
            <img src={src} alt={`Evermaze instagram post ${i + 1}`} loading="lazy" width={1000} height={1000}
              className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/40 transition-colors grid place-items-center">
              <Instagram className="size-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------- Newsletter ---------- */
function Newsletter() {
  return (
    <section className="py-20 md:py-28 bg-burgundy text-white relative overflow-hidden">
      <div className="container-evermaze text-center max-w-2xl relative z-10">
        <span className="text-sm tracking-[0.32em] uppercase text-champagne">Join the family</span>
        <h2 className="mt-4 font-serif text-5xl md:text-7xl text-white">Join the Evermaze family.</h2>
        <p className="mt-4 text-lg text-white/70">Get exclusive offers, new launches and gentle gifting inspiration — straight to your inbox.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="your@email.com"
            aria-label="Email address"
            className="flex-1 bg-transparent border border-white/30 focus:border-champagne rounded-full px-5 py-3 text-sm placeholder:text-white/40 outline-none"
          />
          <button type="submit" className="bg-champagne text-foreground px-8 py-3 rounded-full text-sm tracking-[0.2em] uppercase hover:bg-white transition-colors">
            Subscribe
          </button>
        </form>
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
        { name: "Occasions", to: "/gift-hampers" },
        { name: "Build Your Box", to: "/build-your-box" },
        { name: "Under ₹999", to: "/shop" },
        { name: "Gift Cards", to: "/shop" },
      ] 
    },
    { 
      t: "Help", 
      l: [
        { name: "Track Order", to: "/contact" },
        { name: "Shipping", to: "/faq" },
        { name: "Returns", to: "/faq" },
        { name: "FAQs", to: "/faq" },
        { name: "Contact", to: "/contact" },
      ] 
    },
    { 
      t: "About", 
      l: [
        { name: "Our Story", to: "/about" },
        { name: "Sustainability", to: "/about" },
        { name: "Careers", to: "/about" },
        { name: "Corporate Gifting", to: "/contact" },
        { name: "Press", to: "/about" },
      ] 
    },
  ];
  return (
    <footer className="bg-ivory border-t border-border pt-20 pb-8">
      <div className="container-evermaze grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
        <div>
          <Link to="/" className="font-serif text-3xl tracking-[0.3em] text-burgundy">EVERMAZE</Link>
          <p className="mt-2 text-[0.65rem] tracking-[0.4em] uppercase text-gray-600">Just For You</p>
          <p className="mt-6 max-w-xs text-sm text-gray-600 leading-relaxed">
            Beautifully personalized gift hampers, thoughtfully packed for every celebration.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, MessageCircle, Mail].map((Icon, i) => (
              <a key={i} href="#" className="size-10 rounded-full border border-border grid place-items-center hover:bg-burgundy hover:text-white hover:border-burgundy transition-colors" aria-label="Social">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.t}>
            <h4 className="text-xs tracking-[0.25em] uppercase mb-5">{c.t}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {c.l.map((li) => <li key={li.name}><Link to={li.to} className="hover:text-burgundy transition-colors">{li.name}</Link></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-evermaze mt-16 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-gray-600">
        <span>Evermaze. Made with love in India.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-burgundy">Privacy</a>
          <a href="#" className="hover:text-burgundy">Terms</a>
          <a href="#" className="hover:text-burgundy">Shipping</a>
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
