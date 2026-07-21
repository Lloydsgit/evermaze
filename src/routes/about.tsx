import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Sparkles, Package, Truck, ShieldCheck, Clock, Gift, Award, Leaf, Quote } from "lucide-react";

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
      {/* Header */}
      <header className="bg-white border-b border-border-color py-5">
        <div className="container-evermaze flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-secondary-text hover:text-dark-lavender transition-colors">
            <span>←</span> Back to Shop
          </Link>
          <Link to="/" className="flex flex-col items-center leading-none">
            <span className="font-serif text-xl tracking-[0.25em] text-primary-text">EVERMAZE</span>
            <span className="mt-0.5 text-[0.5rem] tracking-[0.3em] uppercase text-secondary-text font-light italic">Just For You</span>
          </Link>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--primary-bg)' }}>
        <div className="container-evermaze">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--dark-lavender)' }}>Our Story</span>
              <h1 className="mt-4 font-serif text-4xl lg:text-5xl xl:text-6xl" style={{ color: 'var(--primary-text)' }}>
                Our Brand Story
              </h1>
              <p className="mt-8 text-base lg:text-lg leading-relaxed" style={{ color: 'var(--secondary-text)' }}>
                Evermaze was created with one simple belief — the most meaningful gifts aren't the most expensive ones, they're the ones chosen with love.
              </p>
              <p className="mt-6 leading-relaxed" style={{ color: 'var(--secondary-text)' }}>
                We believe every celebration deserves a thoughtful surprise. Whether it's a birthday, anniversary, graduation, farewell or just because, every hamper is carefully curated to create unforgettable memories.
              </p>
              <p className="mt-6 leading-relaxed" style={{ color: 'var(--secondary-text)' }}>
                At Evermaze, every box is packed with love, attention to detail and a personal touch, making every gift feel truly special.
              </p>
              
              {/* Quote */}
              <div className="mt-12 p-8 rounded-2xl" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                <Quote className="size-8 mb-4" style={{ color: 'var(--dusty-lavender)' }} />
                <p className="font-serif text-2xl lg:text-3xl italic leading-relaxed" style={{ color: 'var(--primary-text)' }}>
                  "It's not just a gift,<br />it's a feeling."
                </p>
              </div>
            </div>
            
            <div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden" style={{ backgroundColor: 'var(--secondary-bg)' }}>
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
      <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="container-evermaze">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {timeline.map((t, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="size-14 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(184, 171, 199, 0.2)' }}>
                  <t.icon className="size-6" style={{ color: 'var(--dark-lavender)' }} />
                </div>
                <p className="text-sm font-medium" style={{ color: 'var(--primary-text)' }}>{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe In */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--primary-bg)' }}>
        <div className="container-evermaze">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--dark-lavender)' }}>Our Values</span>
            <h2 className="mt-4 font-serif text-3xl lg:text-4xl" style={{ color: 'var(--primary-text)' }}>What We Believe In</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {beliefs.map((b, i) => (
              <div key={i} className="text-center">
                <div className="size-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgba(184, 171, 199, 0.15)' }}>
                  <b.icon className="size-7" style={{ color: 'var(--dark-lavender)' }} />
                </div>
                <p className="text-sm font-medium" style={{ color: 'var(--primary-text)' }}>{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Banner */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--dusty-lavender)' }}>
        <div className="container-evermaze text-center">
          <p className="font-serif text-2xl lg:text-3xl text-white">
            Thank you for being a part of our journey.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="container-evermaze text-center">
          <h2 className="font-serif text-3xl lg:text-4xl" style={{ color: 'var(--primary-text)' }}>Ready to spread some love?</h2>
          <p className="mt-4 max-w-lg mx-auto" style={{ color: 'var(--secondary-text)' }}>
            Browse our collection of thoughtfully curated gift hampers or build your own custom box.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/shop" className="btn-primary">Shop Hampers <ArrowRight className="size-4" /></Link>
            <Link to="/build-your-box" className="btn-outline">Build Your Own Box</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8" style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="container-evermaze text-center">
          <Link to="/" className="font-serif text-2xl tracking-[0.2em]" style={{ color: 'var(--primary-text)' }}>EVERMAZE</Link>
          <p className="mt-2 text-xs tracking-[0.25em] uppercase" style={{ color: 'var(--secondary-text)', fontFamily: 'Allura, cursive' }}>Just For You</p>
          <p className="mt-4 text-sm" style={{ color: 'var(--secondary-text)' }}>Beautifully personalized gift hampers for every celebration.</p>
        </div>
      </footer>
    </div>
  );
}
