import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Sparkles, Package, Truck, ShieldCheck, Clock, Gift, Award, Leaf, Quote } from "lucide-react";

import storyImg from "@/assets/story.jpg";

import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";

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
      <LuxuryHeader />

      {/* Hero Section */}
      <section className="pt-32 lg:pt-36 pb-20 lg:pb-28" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="container-evermaze">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow">Our Story</span>
              <h1 className="mt-4 font-serif text-4xl lg:text-5xl xl:text-6xl" style={{ color: '#5A4B54' }}>
                Our Brand Story
              </h1>
              <p className="mt-8 text-base lg:text-lg leading-relaxed" style={{ color: '#5A4B54', opacity: 0.8 }}>
                Evermaze was created with one simple belief — the most meaningful gifts aren't the most expensive ones, they're the ones chosen with love.
              </p>
              <p className="mt-5 leading-relaxed" style={{ color: '#5A4B54', opacity: 0.75 }}>
                We believe every celebration deserves a thoughtful surprise. Whether it's a birthday, anniversary, graduation, farewell or just because, every hamper is carefully curated to create unforgettable memories.
              </p>
              <p className="mt-5 leading-relaxed" style={{ color: '#5A4B54', opacity: 0.75 }}>
                At Evermaze, every box is packed with love, attention to detail and a personal touch, making every gift feel truly special.
              </p>

              {/* Quote */}
              <div className="mt-10 p-8 lg:p-10 rounded-2xl" style={{ backgroundColor: '#F3EEE8' }}>
                <Quote className="size-8 mb-4" style={{ color: '#8C7A95' }} />
                <p className="font-serif text-xl lg:text-2xl italic leading-relaxed" style={{ color: '#5A4B54' }}>
                  "It's not just a gift, it's a feeling."
                </p>
              </div>
            </div>

            <div>
              <div 
                className="aspect-[4/5] rounded-2xl overflow-hidden"
                style={{ 
                  backgroundColor: '#F3EEE8', 
                  boxShadow: '0 20px 60px rgba(90, 75, 84, 0.12)' 
                }}
              >
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
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F3EEE8' }}>
        <div className="container-evermaze">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {timeline.map((t, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div 
                  className="size-14 lg:size-16 rounded-full flex items-center justify-center mb-3 lg:mb-4"
                  style={{ backgroundColor: 'rgba(140, 122, 149, 0.15)' }}
                >
                  <t.icon className="size-6 lg:size-7" style={{ color: '#8C7A95' }} />
                </div>
                <p className="text-sm lg:text-base font-medium" style={{ color: '#5A4B54' }}>{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe In */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="container-evermaze">
          <div className="text-center mb-12 lg:mb-16">
            <span className="eyebrow">Our Values</span>
            <h2 className="mt-4 font-serif text-3xl lg:text-4xl" style={{ color: '#5A4B54' }}>
              What We Believe In
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {beliefs.map((b, i) => (
              <div key={i} className="text-center">
                <div 
                  className="size-16 lg:size-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(140, 122, 149, 0.12)' }}
                >
                  <b.icon className="size-7 lg:size-8" style={{ color: '#8C7A95' }} />
                </div>
                <p className="text-sm lg:text-base font-medium" style={{ color: '#5A4B54' }}>{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Banner */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: '#8C7A95' }}>
        <div className="container-evermaze text-center">
          <p className="font-serif text-2xl lg:text-3xl text-white">
            Thank you for being a part of our journey.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F3EEE8' }}>
        <div className="container-evermaze text-center">
          <h2 className="font-serif text-3xl lg:text-4xl" style={{ color: '#5A4B54' }}>
            Ready to spread some love?
          </h2>
          <p className="mt-4 max-w-lg mx-auto" style={{ color: '#5A4B54', opacity: 0.75 }}>
            Browse our collection of thoughtfully curated gift hampers or build your own custom box.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/shop" className="btn-primary">
              Shop Hampers <ArrowRight className="size-4" />
            </Link>
            <Link to="/build-your-box" className="btn-outline">
              Build Your Own Box
            </Link>
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  );
}
