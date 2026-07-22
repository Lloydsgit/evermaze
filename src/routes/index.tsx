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
      style={{ backgroundColor: '#5A4B54', color: 'rgba(255,255,255,0.9)' }}
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
      style={{ backgroundColor: '#FAF7F2' }}
    >
      {/* Background Decorative Elements */}
      <div 
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: '#8C7A95' }}
      />
      <div 
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: '#DCC9AE' }}
      />
      
      <div className="container-evermaze w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="eyebrow">Made with love</span>
            <h1 
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-4 mb-6 leading-[1.1]"
              style={{ color: '#5A4B54' }}
            >
              Personalized
              <br />
              <span style={{ color: '#8C7A95' }}>Gift Hampers</span>
            </h1>
            <p 
              className="text-base lg:text-lg max-w-lg mx-auto lg:mx-0 mb-8"
              style={{ color: '#5A4B54', opacity: 0.75 }}
            >
              Made With Love.
              <br />
              Curated gifts for every celebration, thoughtfully packed to create unforgettable memories — moments that live longer than the ribbon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/build-your-box" className="btn-primary">
                Shop Hampers <ArrowRight className="size-4" />
              </Link>
              <Link to="/build-your-box" className="btn-outline">
                Build Your Own Box
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8">
              <div>
                <p className="font-serif text-3xl" style={{ color: '#8C7A95' }}>12k+</p>
                <p className="text-sm" style={{ color: '#5A4B54', opacity: 0.6 }}>Happy gifters</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1,2,3,4].map((i) => (
                    <Star key={i} className="size-4 fill-current" style={{ color: '#DCC9AE' }} />
                  ))}
                  <StarHalf className="size-4" style={{ color: '#DCC9AE', fill: '#DCC9AE' }} />
                </div>
                <span className="font-serif text-3xl ml-2" style={{ color: '#8C7A95' }}>4.9</span>
                <span className="text-sm" style={{ color: '#5A4B54', opacity: 0.6 }}>Rating</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative">
            {/* Made with Love Sticker */}
            <div 
              className="absolute -top-4 left-4 z-20 px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              style={{ 
                backgroundColor: '#8C7A95',
                color: 'white',
                boxShadow: '0 4px 16px rgba(140, 122, 149, 0.4)'
              }}
            >
              Made with Love ♥
            </div>
            
            <div 
              className="relative rounded-3xl overflow-hidden"
              style={{ 
                boxShadow: '0 25px 80px rgba(90, 75, 84, 0.15), 0 8px 24px rgba(90, 75, 84, 0.1)'
              }}
            >
              <img 
                src={heroHamper} 
                alt="Luxury gift hamper" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            {/* Review Card */}
            <div 
              className="absolute -bottom-6 left-4 right-4 rounded-2xl p-5 backdrop-blur-md"
              style={{ 
                backgroundColor: 'rgba(250, 247, 242, 0.95)',
                boxShadow: '0 8px 32px rgba(90, 75, 84, 0.15)'
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
            
            {/* Trust Badges */}
            <div 
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-2 p-3 rounded-xl"
              style={{ backgroundColor: 'rgba(250, 247, 242, 0.95)', boxShadow: '0 4px 16px rgba(90, 75, 84, 0.1)' }}
            >
              {[
                "Free shipping over ₹999",
                "Personalization included",
                "Safe dispatch",
                "Sustainable packaging"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-xs" style={{ color: '#5A4B54' }}>
                  <Check className="size-3" style={{ color: '#8C7A95' }} />
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
      style={{ backgroundColor: '#F3EEE8' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <span className="eyebrow">Find Your Perfect Gift</span>
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4"
            style={{ color: '#5A4B54' }}
          >
            Made for every moment
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
          {occasions.map((occasion) => (
            <Link
              key={occasion.name}
              to="/shop"
              className="group text-center"
            >
              <div 
                className="relative rounded-2xl overflow-hidden mb-3 aspect-square transition-all duration-300 group-hover:shadow-lg"
                style={{ 
                  boxShadow: '0 2px 12px rgba(90, 75, 84, 0.08)'
                }}
              >
                <img 
                  src={occasion.img} 
                  alt={occasion.name}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 
                className="text-sm font-medium"
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

/* ---------- Featured Collection ---------- */
function FeaturedCollection() {
  const products = [
    { 
      id: 1,
      name: "The Sabrina Bloom", 
      price: 1899, 
      img: hamper1, 
      rating: 4.9,
      reviews: 128,
      tag: "Bestseller"
    },
    { 
      id: 2,
      name: "Rose Ritual Box", 
      price: 1499, 
      img: hamper2, 
      rating: 4.8,
      reviews: 96,
      tag: "Popular"
    },
    { 
      id: 3,
      name: "Golden Hour Set", 
      price: 2199, 
      img: hamper3, 
      rating: 4.9,
      reviews: 74,
      tag: "New"
    },
    { 
      id: 4,
      name: "Midnight Luxe", 
      price: 2499, 
      img: hamper4, 
      rating: 5.0,
      reviews: 52,
      tag: "Premium"
    },
  ];

  return (
    <section 
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#FAF7F2' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <span className="eyebrow">Best Sellers</span>
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4"
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
                className="relative rounded-2xl overflow-hidden mb-4"
                style={{ 
                  boxShadow: '0 4px 20px rgba(90, 75, 84, 0.06)'
                }}
              >
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Tag */}
                <span 
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ 
                    backgroundColor: 'rgba(140, 122, 149, 0.9)',
                    color: 'white'
                  }}
                >
                  {product.tag}
                </span>
                {/* Wishlist */}
                <button 
                  className="absolute top-4 right-4 size-9 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
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
                  className="font-serif text-lg mb-1 group-hover:text-[#8C7A95] transition-colors"
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
      style={{ backgroundColor: '#F3EEE8' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <span className="eyebrow">New Arrivals</span>
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4"
            style={{ color: '#5A4B54' }}
          >
            Freshly wrapped this week.
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
          {newProducts.map((product) => (
            <Link
              key={product.id}
              to={`/build-your-box?package=${product.price}`}
              className="group"
            >
              <div 
                className="relative rounded-2xl overflow-hidden mb-4"
                style={{ boxShadow: '0 4px 20px rgba(90, 75, 84, 0.06)' }}
              >
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span 
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ backgroundColor: '#5A4B54', color: 'white' }}
                >
                  New
                </span>
              </div>
              <h3 className="font-serif text-lg mb-1" style={{ color: '#5A4B54' }}>
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
      style={{ backgroundColor: '#FAF7F2' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <span className="eyebrow">Build Your Perfect Hamper</span>
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4"
            style={{ color: '#5A4B54' }}
          >
            Customize it your way.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {hampers.map((hamper) => (
            <Link
              key={hamper.price}
              to={`/build-your-box?package=${hamper.price}`}
              className="group text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ 
                backgroundColor: 'white',
                boxShadow: '0 2px 12px rgba(90, 75, 84, 0.06)'
              }}
            >
              <p className="font-serif text-3xl mb-1" style={{ color: '#8C7A95' }}>₹{hamper.price}</p>
              <p className="text-sm mb-4" style={{ color: '#5A4B54', opacity: 0.7 }}>{hamper.name}</p>
              <span 
                className="inline-flex items-center gap-1 text-xs px-4 py-2 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(140, 122, 149, 0.1)',
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
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#8C7A95' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4"
          >
            Build your own box
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Seven little steps. One perfect gift.
          </p>
          <p className="text-base text-white/70 mt-4 max-w-xl mx-auto">
            Design a hamper as one-of-a-kind as they are. Every choice, every note, every detail — yours to shape.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {steps.slice(0, 4).map((step) => (
            <div key={step.num} className="text-center">
              <p className="font-serif text-5xl text-white/20 mb-2">{step.num}</p>
              <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/60">{step.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {steps.slice(4).map((step) => (
            <div key={step.num} className="text-center">
              <p className="font-serif text-5xl text-white/20 mb-2">{step.num}</p>
              <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/60">{step.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/build-your-box" className="btn-white">
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
    { 
      icon: HandHeart, 
      title: "Handcrafted with Love",
      description: "Every hamper is carefully curated and packed by hand, ensuring attention to every detail."
    },
    { 
      icon: Leaf, 
      title: "Sustainable Packaging",
      description: "We use eco-friendly materials and recyclable packaging to minimize our environmental impact."
    },
    { 
      icon: Award, 
      title: "Premium Quality",
      description: "Only the finest products make it into our hampers, from artisanal goods to luxury treats."
    },
    { 
      icon: Calendar, 
      title: "Scheduled Delivery",
      description: "Plan ahead and schedule your gift delivery for the perfect moment."
    },
  ];

  return (
    <section 
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#FAF7F2' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <span className="eyebrow">The Evermaze Promise</span>
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4"
            style={{ color: '#5A4B54' }}
          >
            Why Choose Us
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ 
                backgroundColor: '#F3EEE8',
                boxShadow: '0 2px 12px rgba(90, 75, 84, 0.03)'
              }}
            >
              <div 
                className="size-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(140, 122, 149, 0.12)' }}
              >
                <feature.icon className="size-7" style={{ color: '#8C7A95' }} />
              </div>
              <h3 
                className="font-serif text-xl mb-3"
                style={{ color: '#5A4B54' }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-sm leading-relaxed"
                style={{ color: '#5A4B54', opacity: 0.7 }}
              >
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
    {
      name: "Priya S.",
      location: "Mumbai",
      rating: 5,
      text: "The hamper I ordered for my mother's birthday was absolutely stunning. The attention to detail and quality of products exceeded my expectations. Will definitely order again!",
      product: "Anniversary Hamper"
    },
    {
      name: "Rahul M.",
      location: "Bangalore",
      rating: 5,
      text: "Evermaze made our wedding anniversary truly special. The personalized touch with the handwritten note was so heartfelt. My wife loved it!",
      product: "Couple's Retreat Box"
    },
    {
      name: "Ananya K.",
      location: "Delhi",
      rating: 5,
      text: "Fast delivery, beautiful packaging, and amazing products. The baby shower hamper was perfect for my sister. Everyone loved it!",
      product: "Baby Shower Hamper"
    },
  ];

  return (
    <section 
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#F3EEE8' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <span className="eyebrow">Little love notes</span>
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4"
            style={{ color: '#5A4B54' }}
          >
            What our gifters are saying.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div 
              key={review.name}
              className="bg-white rounded-2xl p-6 lg:p-8"
              style={{ boxShadow: '0 4px 20px rgba(90, 75, 84, 0.05)' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" style={{ color: '#DCC9AE' }} />
                ))}
              </div>
              
              {/* Quote */}
              <Quote className="size-8 mb-4" style={{ color: '#8C7A95', opacity: 0.3 }} />
              <p 
                className="text-sm leading-relaxed mb-6"
                style={{ color: '#5A4B54', opacity: 0.8 }}
              >
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
                  style={{ backgroundColor: '#F3EEE8', color: '#5A4B54' }}
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
      style={{ backgroundColor: '#FAF7F2' }}
    >
      <div className="container-evermaze">
        <div className="text-center mb-12 lg:mb-16">
          <span className="eyebrow">@evermaze on Instagram</span>
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4"
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
              className="group relative aspect-square rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 4px 20px rgba(90, 75, 84, 0.08)' }}
            >
              <img 
                src={img} 
                alt={`Instagram post ${i + 1}`} 
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(90, 75, 84, 0.5)' }}
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
      style={{ backgroundColor: '#F3EEE8' }}
    >
      <div className="container-evermaze">
        <div className="max-w-xl mx-auto text-center">
          <span className="eyebrow">Join the family</span>
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4 mb-5"
            style={{ color: '#5A4B54' }}
          >
            Join the Evermaze family.
          </h2>
          <p 
            className="text-base mb-8"
            style={{ color: '#5A4B54', opacity: 0.75 }}
          >
            Get exclusive offers, new launches and gentle gifting inspiration — straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-sm min-h-[52px] border"
              style={{ 
                backgroundColor: '#FAF7F2',
                borderColor: 'rgba(90, 75, 84, 0.12)',
                color: '#5A4B54',
                outline: 'none'
              }}
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
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
