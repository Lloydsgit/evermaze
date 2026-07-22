import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Heart, ShoppingBag, Star, Instagram, MessageCircle, Mail, Truck, Gift, Package, 
  HandHeart, ArrowRight, Sparkles, Award, Heart as HeartIcon, Calendar, Palette,
  ChevronRight, Quote, Lock, ShieldCheck, Leaf, Plus, ArrowUpRight, Check, StarHalf
} from "lucide-react";

import heroHamper from "@/assets/hero-hamper.jpg";
import hamper1 from "@/assets/hamper-1.jpg";
import hamper2 from "@/assets/hamper-2.jpg";
import hamper3 from "@/assets/hamper-3.jpg";
import hamper4 from "@/assets/hamper-4.jpg";
import hamper5 from "@/assets/hamper-5.jpg";
import hamper6 from "@/assets/hamper-6.jpg";

import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";

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

/* ---------- Announcement Bar ---------- */
function AnnouncementBar() {
  return (
    <div 
      className="py-2.5 text-center text-xs tracking-wide"
      style={{ background: 'linear-gradient(90deg, #5A4B54 0%, #6B5A62 50%, #5A4B54 100%)', color: 'rgba(255,255,255,0.95)' }}
    >
      <span className="inline-flex items-center gap-2">
        <Gift className="size-3.5" />
        Free shipping on orders above ₹999 | Use code <span className="font-semibold">EVERMAZE10</span> for 10% off
        <ArrowRight className="size-3.5" />
      </span>
    </div>
  );
}

/* ---------- Hero Section ---------- */
function Hero() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(180deg, #FAF7F2 0%, #F3EEE8 50%, #FAF7F2 100%)' }}
    >
      {/* Background Decorative Elements */}
      <div 
        className="absolute top-20 right-10 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(140, 122, 149, 0.25) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div 
        className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(220, 201, 174, 0.3) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      
      <div className="container-evermaze w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span 
              className="eyebrow inline-block"
              style={{ 
                background: 'linear-gradient(90deg, #8C7A95, #A99BAD)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Made with love
            </span>
            <h1 
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-4 mb-6 leading-[1.1]"
              style={{ color: '#5A4B54' }}
            >
              Personalized
              <br />
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #8C7A95, #6B5A62)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Gift Hampers
              </span>
            </h1>
            <p 
              className="text-base lg:text-lg max-w-lg mx-auto lg:mx-0 mb-4"
              style={{ color: '#5A4B54', opacity: 0.8 }}
            >
              <span className="font-serif text-xl italic">Made With Love.</span>
            </p>
            <p 
              className="text-base lg:text-lg max-w-lg mx-auto lg:mx-0 mb-8"
              style={{ color: '#5A4B54', opacity: 0.7 }}
            >
              Curated gifts for every celebration, thoughtfully packed to create unforgettable memories — moments that live longer than the ribbon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/build-your-box" 
                className="btn-primary relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #8C7A95 0%, #7A6A82 100%)',
                }}
              >
                <span className="relative z-10">Shop Hampers</span>
                <ArrowRight className="size-4 relative z-10" />
              </Link>
              <Link 
                to="/build-your-box" 
                className="btn-outline relative"
                style={{
                  borderImage: 'linear-gradient(135deg, #8C7A95, #A99BAD) 1',
                }}
              >
                Build Your Own Box
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center">
                <p 
                  className="font-serif text-4xl"
                  style={{ 
                    background: 'linear-gradient(90deg, #8C7A95, #5A4B54)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  12k+
                </p>
                <p className="text-sm" style={{ color: '#5A4B54', opacity: 0.6 }}>Happy gifters</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[1,2,3,4].map((i) => (
                    <Star key={i} className="size-5 fill-current" style={{ color: '#DCC9AE' }} />
                  ))}
                  <StarHalf className="size-5" style={{ color: '#DCC9AE', fill: '#DCC9AE' }} />
                </div>
                <p 
                  className="font-serif text-3xl"
                  style={{ 
                    background: 'linear-gradient(90deg, #8C7A95, #5A4B54)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  4.9
                </p>
                <p className="text-sm" style={{ color: '#5A4B54', opacity: 0.6 }}>Rating</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative">
            {/* Made with Love Sticker */}
            <div 
              className="absolute -top-3 left-4 z-20 px-5 py-2.5 rounded-full text-sm font-medium animate-pulse"
              style={{ 
                background: 'linear-gradient(135deg, #8C7A95 0%, #6B5A62 100%)',
                color: 'white',
                boxShadow: '0 8px 24px rgba(140, 122, 149, 0.5)',
              }}
            >
              Made with Love ♥
            </div>
            
            <div 
              className="relative rounded-3xl overflow-hidden"
              style={{ 
                boxShadow: '0 30px 100px rgba(90, 75, 84, 0.2), 0 15px 50px rgba(90, 75, 84, 0.15)',
              }}
            >
              <img 
                src={heroHamper} 
                alt="Luxury gift hamper" 
                className="w-full aspect-[4/5] object-cover"
              />
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(250, 247, 242, 0.1) 0%, transparent 30%)' }}
              />
            </div>
            
            {/* Review Card */}
            <div 
              className="absolute -bottom-8 left-4 right-4 rounded-2xl p-5 backdrop-blur-lg"
              style={{ 
                background: 'rgba(250, 247, 242, 0.95)',
                boxShadow: '0 12px 40px rgba(90, 75, 84, 0.2)',
                border: '1px solid rgba(140, 122, 149, 0.1)'
              }}
            >
              <p className="text-sm mb-2" style={{ color: '#5A4B54', opacity: 0.8 }}>
                Personalized Evermaze gift hamper with candle, dried florals and silk ribbon
              </p>
              <p className="text-sm italic mb-2" style={{ color: '#8C7A95' }}>
                "It felt like opening a little world of love."
              </p>
              <p className="text-xs" style={{ color: '#5A4B54', opacity: 0.6 }}>
                — Aanya, Delhi
              </p>
            </div>
            
            {/* Trust Badges - Floating Left */}
            <div 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-3 p-4 rounded-2xl backdrop-blur-lg"
              style={{ background: 'rgba(250, 247, 242, 0.9)', boxShadow: '0 8px 32px rgba(90, 75, 84, 0.1)', border: '1px solid rgba(140, 122, 149, 0.1)' }}
            >
              {[
                "Free shipping over ₹999",
                "Personalization included",
                "Safe dispatch",
                "Sustainable packaging"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-sm whitespace-nowrap" style={{ color: '#5A4B54' }}>
                  <div 
                    className="size-6 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(140, 122, 149, 0.2) 0%, rgba(140, 122, 149, 0.1) 100%)' }}
                  >
                    <Check className="size-3" style={{ color: '#8C7A95' }} />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Shop by Occasion ---------- */
function OccasionBanner() {
  const occasions = [
    { name: "Birthday", img: hamper1 },
    { name: "Anniversary", img: hamper2 },
    { name: "Baby Shower", img: hamper3 },
    { name: "Bridal", img: hamper4 },
    { name: "Festive", img: hamper5 },
    { name: "Self Care", img: hamper6 },
  ];

  return (
    <section 
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #F3EEE8 0%, #E8E2DC 50%, #F3EEE8 100%)' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <span 
            className="eyebrow"
            style={{ 
              background: 'linear-gradient(90deg, #8C7A95, #A99BAD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Find Your Perfect Gift
          </span>
          <h2 
            className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4"
            style={{ color: '#5A4B54' }}
          >
            Made for every moment
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {occasions.map((occasion, index) => (
            <Link
              key={occasion.name}
              to="/shop"
              className="group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="relative rounded-2xl overflow-hidden mb-3 aspect-square transition-all duration-500 group-hover:shadow-xl group-hover:scale-105"
                style={{ 
                  boxShadow: '0 4px 20px rgba(90, 75, 84, 0.1)',
                }}
              >
                <img 
                  src={occasion.img} 
                  alt={occasion.name}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(140, 122, 149, 0.6) 0%, transparent 50%)' }}
                />
              </div>
              <h3 
                className="text-sm font-medium transition-colors duration-300 group-hover:text-[#8C7A95]"
                style={{ color: '#5A4B54' }}
              >
                {occasion.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Hamper Prices Grid ---------- */
function HamperPricesGrid() {
  const hampers = [
    { price: 199, name: "Mini Hamper" },
    { price: 499, name: "Classic Hamper" },
    { price: 999, name: "Signature Hamper" },
    { price: 1499, name: "Supreme Hamper" },
    { price: 1999, name: "Luxury Hamper" },
  ];

  return (
    <section 
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #FAF7F2 0%, #F3EEE8 100%)' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <span 
            className="eyebrow"
            style={{ 
              background: 'linear-gradient(90deg, #8C7A95, #A99BAD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Build Your Perfect Hamper
          </span>
          <h2 
            className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4"
            style={{ color: '#5A4B54' }}
          >
            Customize it your way.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {hampers.map((hamper, index) => (
            <Link
              key={hamper.price}
              to={`/build-your-box?package=${hamper.price}`}
              className="group text-center p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ 
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
                boxShadow: '0 4px 20px rgba(90, 75, 84, 0.08)',
                border: '1px solid rgba(140, 122, 149, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(140, 122, 149, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(140, 122, 149, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(90, 75, 84, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(140, 122, 149, 0.08)';
              }}
            >
              <p 
                className="font-serif text-3xl mb-1 transition-colors duration-300 group-hover:text-[#6B5A62]"
                style={{ color: '#8C7A95' }}
              >
                ₹{hamper.price}
              </p>
              <p className="text-sm mb-4" style={{ color: '#5A4B54', opacity: 0.7 }}>{hamper.name}</p>
              <span 
                className="inline-flex items-center gap-1 text-xs px-4 py-2 rounded-full transition-all duration-300 group-hover:shadow-md"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(140, 122, 149, 0.15) 0%, rgba(140, 122, 149, 0.08) 100%)',
                  color: '#8C7A95'
                }}
              >
                Customize
              </span>
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
    { id: 1, name: "The Sabrina Bloom", price: 1899, img: hamper1, rating: 4.9, reviews: 128, tag: "Bestseller" },
    { id: 2, name: "Rose Ritual Box", price: 1499, img: hamper2, rating: 4.8, reviews: 96, tag: "Popular" },
    { id: 3, name: "Golden Hour Set", price: 2199, img: hamper3, rating: 4.9, reviews: 74, tag: "New" },
    { id: 4, name: "Midnight Luxe", price: 2499, img: hamper4, rating: 5.0, reviews: 52, tag: "Premium" },
  ];

  return (
    <section 
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #F3EEE8 0%, #E8E2DC 50%, #F3EEE8 100%)' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <span 
            className="eyebrow"
            style={{ 
              background: 'linear-gradient(90deg, #8C7A95, #A99BAD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Best Sellers
          </span>
          <h2 
            className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4"
            style={{ color: '#5A4B54' }}
          >
            Loved by thousands.
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/build-your-box?package=${product.price}`}
              className="group"
            >
              <div 
                className="relative rounded-2xl overflow-hidden mb-4 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2"
                style={{ boxShadow: '0 8px 30px rgba(90, 75, 84, 0.1)' }}
              >
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Tag */}
                <span 
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ 
                    background: 'linear-gradient(135deg, #8C7A95 0%, #6B5A62 100%)',
                    color: 'white'
                  }}
                >
                  {product.tag}
                </span>
                {/* Wishlist */}
                <button 
                  className="absolute top-4 right-4 size-9 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(250, 247, 242, 0.9)' }}
                  onClick={(e) => e.preventDefault()}
                >
                  <Heart className="size-4" style={{ color: '#5A4B54' }} />
                </button>
              </div>
              
              <div>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="size-3.5 fill-current" style={{ color: '#DCC9AE' }} />
                  <span className="text-xs" style={{ color: '#5A4B54', opacity: 0.7 }}>
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <h3 
                  className="font-serif text-lg mb-1 transition-colors duration-300 group-hover:text-[#8C7A95]"
                  style={{ color: '#5A4B54' }}
                >
                  {product.name}
                </h3>
                <p className="font-medium" style={{ color: '#8C7A95' }}>
                  ₹{product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- New Arrivals ---------- */
function NewArrivals() {
  const newProducts = [
    { id: 1, name: "Spring Garden", price: 1299, img: hamper5 },
    { id: 2, name: "Cozy Evening", price: 1599, img: hamper6 },
  ];

  return (
    <section 
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #FAF7F2 0%, #F3EEE8 100%)' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <span 
            className="eyebrow"
            style={{ 
              background: 'linear-gradient(90deg, #8C7A95, #A99BAD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            New Arrivals
          </span>
          <h2 
            className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4"
            style={{ color: '#5A4B54' }}
          >
            Freshly wrapped this week.
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-10 max-w-3xl mx-auto">
          {newProducts.map((product) => (
            <Link
              key={product.id}
              to={`/build-your-box?package=${product.price}`}
              className="group"
            >
              <div 
                className="relative rounded-2xl overflow-hidden mb-4 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2"
                style={{ boxShadow: '0 8px 30px rgba(90, 75, 84, 0.1)' }}
              >
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span 
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ 
                    background: 'linear-gradient(135deg, #5A4B54 0%, #6B5A62 100%)',
                    color: 'white'
                  }}
                >
                  New
                </span>
              </div>
              <h3 className="font-serif text-xl mb-1 transition-colors duration-300 group-hover:text-[#8C7A95]" style={{ color: '#5A4B54' }}>
                {product.name}
              </h3>
              <p className="font-medium" style={{ color: '#8C7A95' }}>₹{product.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Build Your Box Promo ---------- */
function BuildBoxPromo() {
  const steps = [
    { num: "01", title: "Choose Box", desc: "Pick a size and style that fits your moment." },
    { num: "02", title: "Choose Occasion", desc: "From bridal to birthday, set the mood." },
    { num: "03", title: "Choose Relation", desc: "Handpick every little joy inside." },
    { num: "04", title: "Choose Products", desc: "Add a handwritten note, straight from you." },
    { num: "05", title: "Special Touches", desc: "Pick when the surprise should arrive." },
    { num: "06", title: "Delivery Date", desc: "See your box, then send with love." },
    { num: "07", title: "Checkout", desc: "Made just for them." },
  ];

  return (
    <section 
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #8C7A95 0%, #7A6A82 50%, #6B5A62 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(220,201,174,0.15) 0%, transparent 70%)' }}
      />
      
      <div className="container-evermaze relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
          >
            Build your own box
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Seven little steps. One perfect gift.
          </p>
          <p className="text-base text-white/70 mt-4 max-w-xl mx-auto">
            Design a hamper as one-of-a-kind as they are. Every choice, every note, every detail — yours to shape.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {steps.slice(0, 4).map((step, index) => (
            <div 
              key={step.num} 
              className="text-center p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <p className="font-serif text-5xl text-white/20 mb-2">{step.num}</p>
              <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/60">{step.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-3xl mx-auto mb-12">
          {steps.slice(4).map((step) => (
            <div 
              key={step.num} 
              className="text-center p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <p className="font-serif text-5xl text-white/20 mb-2">{step.num}</p>
              <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/60">{step.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/build-your-box" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #FAF7F2 0%, #FFFFFF 100%)',
              color: '#5A4B54',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}
          >
            Start Building Yours, entirely. <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Choose Us ---------- */
function WhyChoose() {
  const features = [
    { icon: HandHeart, title: "Handcrafted with Love", description: "Every hamper is carefully curated and packed by hand, ensuring attention to every detail." },
    { icon: Leaf, title: "Sustainable Packaging", description: "We use eco-friendly materials and recyclable packaging to minimize our environmental impact." },
    { icon: Award, title: "Premium Quality", description: "Only the finest products make it into our hampers, from artisanal goods to luxury treats." },
    { icon: Calendar, title: "Scheduled Delivery", description: "Plan ahead and schedule your gift delivery for the perfect moment." },
  ];

  return (
    <section 
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #F3EEE8 0%, #FAF7F2 50%, #F3EEE8 100%)' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <span 
            className="eyebrow"
            style={{ 
              background: 'linear-gradient(90deg, #8C7A95, #A99BAD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            The Evermaze Promise
          </span>
          <h2 
            className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4"
            style={{ color: '#5A4B54' }}
          >
            Why Choose Us
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ 
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
                boxShadow: '0 4px 20px rgba(90, 75, 84, 0.06)',
                border: '1px solid rgba(140, 122, 149, 0.08)'
              }}
            >
              <div 
                className="size-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(140, 122, 149, 0.15) 0%, rgba(140, 122, 149, 0.08) 100%)'
                }}
              >
                <feature.icon className="size-7" style={{ color: '#8C7A95' }} />
              </div>
              <h3 className="font-serif text-xl mb-3" style={{ color: '#5A4B54' }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5A4B54', opacity: 0.7 }}>
                {feature.description}
              </p>
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
    { name: "Priya S.", location: "Mumbai", rating: 5, text: "The hamper I ordered for my mother's birthday was absolutely stunning. The attention to detail and quality of products exceeded my expectations. Will definitely order again!", product: "Anniversary Hamper" },
    { name: "Rahul M.", location: "Bangalore", rating: 5, text: "Evermaze made our wedding anniversary truly special. The personalized touch with the handwritten note was so heartfelt. My wife loved it!", product: "Couple's Retreat Box" },
    { name: "Ananya K.", location: "Delhi", rating: 5, text: "Fast delivery, beautiful packaging, and amazing products. The baby shower hamper was perfect for my sister. Everyone loved it!", product: "Baby Shower Hamper" },
  ];

  return (
    <section 
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #FAF7F2 0%, #E8E2DC 50%, #FAF7F2 100%)' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <span 
            className="eyebrow"
            style={{ 
              background: 'linear-gradient(90deg, #8C7A95, #A99BAD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Little love notes
          </span>
          <h2 
            className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4"
            style={{ color: '#5A4B54' }}
          >
            What our gifters are saying.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div 
              key={review.name}
              className="rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2"
              style={{ 
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
                boxShadow: '0 8px 32px rgba(90, 75, 84, 0.08)',
                border: '1px solid rgba(140, 122, 149, 0.08)'
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" style={{ color: '#DCC9AE' }} />
                ))}
              </div>
              
              {/* Quote */}
              <Quote className="size-8 mb-4" style={{ color: '#8C7A95', opacity: 0.3 }} />
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#5A4B54', opacity: 0.8 }}>
                "{review.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium" style={{ color: '#5A4B54' }}>{review.name}</p>
                  <p className="text-xs" style={{ color: '#5A4B54', opacity: 0.6 }}>{review.location}</p>
                </div>
                <span 
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ background: 'rgba(140, 122, 149, 0.1)', color: '#8C7A95' }}
                >
                  {review.product}
                </span>
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
    <section 
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #FAF7F2 0%, #F3EEE8 100%)' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <span 
            className="eyebrow"
            style={{ 
              background: 'linear-gradient(90deg, #8C7A95, #A99BAD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            @evermaze on Instagram
          </span>
          <h2 
            className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4"
            style={{ color: '#5A4B54' }}
          >
            Come unbox with us.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {images.map((img, i) => (
            <a 
              key={i} 
              href="#" 
              className="group relative aspect-square rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              style={{ boxShadow: '0 4px 20px rgba(90, 75, 84, 0.1)' }}
            >
              <img 
                src={img} 
                alt={`Instagram post ${i + 1}`} 
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                style={{ background: 'linear-gradient(to top, rgba(90, 75, 84, 0.7) 0%, rgba(90, 75, 84, 0.3) 50%, transparent 100%)' }}
              >
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
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section 
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #E8E2DC 0%, #F3EEE8 100%)' }}
    >
      <div className="container-evermaze">
        <div 
          className="max-w-xl mx-auto text-center rounded-3xl p-8 lg:p-12"
          style={{ 
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
            boxShadow: '0 20px 60px rgba(90, 75, 84, 0.1)'
          }}
        >
          <span 
            className="eyebrow"
            style={{ 
              background: 'linear-gradient(90deg, #8C7A95, #A99BAD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Join the family
          </span>
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4 mb-4"
            style={{ color: '#5A4B54' }}
          >
            Join the Evermaze family.
          </h2>
          <p className="text-base mb-8" style={{ color: '#5A4B54', opacity: 0.75 }}>
            Get exclusive offers, new launches and gentle gifting inspiration — straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-sm min-h-[52px] border transition-all duration-300 focus:shadow-lg"
              style={{ 
                background: '#FAF7F2',
                borderColor: 'rgba(140, 122, 149, 0.2)',
                color: '#5A4B54',
                outline: 'none'
              }}
              required
            />
            <button 
              type="submit" 
              className="btn-primary whitespace-nowrap relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #8C7A95 0%, #7A6A82 100%)',
              }}
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
          {subscribed && (
            <p className="mt-4 text-sm" style={{ color: '#7D9A78' }}>
              Welcome to the family! Check your inbox for a special gift.
            </p>
          )}
          <p className="mt-5 text-xs" style={{ color: '#5A4B54', opacity: 0.6 }}>
            By subscribing, you agree to our Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <LuxuryHeader />
      <main>
        <Hero />
        <OccasionBanner />
        <HamperPricesGrid />
        <FeaturedCollection />
        <NewArrivals />
        <BuildBoxPromo />
        <WhyChoose />
        <Testimonials />
        <InstagramGallery />
        <Newsletter />
      </main>
      <LuxuryFooter />
    </div>
  );
}
