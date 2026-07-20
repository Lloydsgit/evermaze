import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Heart, HeartHandshake, Leaf, Sparkles } from "lucide-react";

import storyImg from "@/assets/story.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Evermaze" },
      { name: "description", content: "Learn about Evermaze - our story, mission, and commitment to creating personalized gift experiences." },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: HeartHandshake,
    title: "Made with Love",
    desc: "Every hamper is packed by hand, with attention to every detail and a genuine desire to make someone's day special.",
  },
  {
    icon: Sparkles,
    title: "Thoughtfully Curated",
    desc: "We source only the finest products and pair them in combinations that tell a story and create lasting memories.",
  },
  {
    icon: Leaf,
    title: "Sustainably Packaged",
    desc: "From biodegradable materials to reusable containers, we're committed to being gentle on the planet.",
  },
];

const team = [
  { name: "Priya Sharma", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
  { name: "Arjun Mehta", role: "Head of Curation", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Sneha Reddy", role: "Creative Director", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
];

function AboutPage() {
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
            <span className="mt-1 text-[0.6rem] tracking-[0.4em] uppercase text-muted-foreground">Special Just For You</span>
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
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container-evermaze">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Story</span>
            <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-tight">
              Love in<br />
              <span className="italic text-burgundy">Every Box</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Evermaze was born from a simple belief: the best gifts aren't just objects, they're experiences. 
              Moments that live longer than the ribbon.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img src={storyImg} alt="Evermaze story" className="size-full object-cover" />
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container-evermaze max-w-3xl">
          <blockquote className="font-serif text-3xl md:text-4xl text-center leading-relaxed italic">
            "We believe that when you give a gift from Evermaze, you're not just giving products — 
            you're giving a piece of your heart, beautifully wrapped."
          </blockquote>
          <p className="mt-6 text-center text-muted-foreground">— Priya Sharma, Founder</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container-evermaze">
          <div className="text-center mb-12">
            <span className="eyebrow">What we stand for</span>
            <h2 className="mt-3 font-serif text-4xl">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-8 bg-card rounded-3xl border border-border">
                <value.icon className="size-10 mx-auto text-burgundy mb-4" />
                <h3 className="font-serif text-2xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container-evermaze">
          <div className="text-center mb-12">
            <span className="eyebrow">The people behind the packs</span>
            <h2 className="mt-3 font-serif text-4xl">Meet Our Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square rounded-full overflow-hidden mb-4 max-w-[200px] mx-auto">
                  <img src={member.img} alt={member.name} className="size-full object-cover" />
                </div>
                <h3 className="font-serif text-xl">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20">
        <div className="container-evermaze">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="font-serif text-5xl text-burgundy">12k+</span>
              <p className="mt-2 text-sm text-muted-foreground">Happy Gifters</p>
            </div>
            <div>
              <span className="font-serif text-5xl text-burgundy">4.9</span>
              <p className="mt-2 text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <span className="font-serif text-5xl text-burgundy">50+</span>
              <p className="mt-2 text-sm text-muted-foreground">Unique Hampers</p>
            </div>
            <div>
              <span className="font-serif text-5xl text-burgundy">100%</span>
              <p className="mt-2 text-sm text-muted-foreground">Handpacked</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-burgundy text-white">
        <div className="container-evermaze text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Ready to spread the love?</h2>
          <p className="mt-4 text-white/70 max-w-md mx-auto">Explore our collection of thoughtfully curated gift hampers.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/shop" className="bg-champagne text-foreground px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors">
              Shop Hampers
            </Link>
            <Link to="/build-your-box" className="border border-white/30 px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-burgundy transition-colors">
              Build Your Box
            </Link>
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
