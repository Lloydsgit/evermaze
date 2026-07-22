import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Heart, ShoppingBag, Star, Instagram, MessageCircle, Mail, Truck, Gift, Package, 
  HandHeart, ArrowRight, Sparkles, Award, Heart as HeartIcon, Calendar, Palette,
  ChevronRight, Quote, Lock, ShieldCheck, Leaf, Plus, ArrowUpRight
} from "lucide-react";

import heroHamper from "@/assets/hero-hamper.jpg";
import hamper1 from "@/assets/hamper-1.jpg";
import hamper2 from "@/assets/hamper-2.jpg";
import hamper3 from "@/assets/hamper-3.jpg";
import hamper4 from "@/assets/hamper-4.jpg";
import hamper5 from "@/assets/hamper-5.jpg";
import hamper6 from "@/assets/hamper-6.jpg";
import storyImg from "@/assets/story.jpg";

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
        Free shipping on orders above ₹1499 | Use code <span className="font-semibold">EVERMAZE10</span> for 10% off
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
            <span className="eyebrow">Curated with Love</span>
            <h1 
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-4 mb-6 leading-[1.1]"
              style={{ color: '#5A4B54' }}
            >
              Gifts That
              <br />
              <span style={{ color: '#8C7A95' }}>Touch the Heart</span>
            </h1>
            <p 
              className="text-base lg:text-lg max-w-lg mx-auto lg:mx-0 mb-8"
              style={{ color: '#5A4B54', opacity: 0.75 }}
            >
              Beautifully personalized gift hampers, thoughtfully curated for every celebration. Make every moment unforgettable with Evermaze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/build-your-box" className="btn-primary">
                Build Your Box <ArrowRight className="size-4" />
              </Link>
              <Link to="/shop" className="btn-outline">
                Explore Hampers
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8">
              {[
                { icon: Truck, text: "Free Shipping" },
                { icon: Heart, text: "Handpacked" },
                { icon: ShieldCheck, text: "Secure Checkout" },
              ].map(({ icon: Icon, text }) => (
                <div 
                  key={text}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: '#5A4B54', opacity: 0.7 }}
                >
                  <Icon className="size-4" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative">
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
              {/* Floating Badge */}
              <div 
                className="absolute bottom-6 left-6 right-6 rounded-2xl p-5 backdrop-blur-md"
                style={{ 
                  backgroundColor: 'rgba(250, 247, 242, 0.92)',
                  boxShadow: '0 8px 32px rgba(90, 75, 84, 0.15)'
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#8C7A95' }}>Starting from</p>
                    <p className="font-serif text-3xl" style={{ color: '#5A4B54' }}>₹499</p>
                  </div>
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div 
                        key={i}
                        className="size-10 rounded-full border-2 flex items-center justify-center text-xs font-medium"
                        style={{ 
                          backgroundColor: '#F3EEE8',
                          borderColor: '#FAF7F2',
                          color: '#5A4B54'
                        }}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div 
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
              style={{ backgroundColor: '#F3EEE8' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Shop by Occasion ---------- */
function OccasionBanner() {
  const occasions = [
    { name: "Birthday", emoji: "🎂", count: 24 },
    { name: "Anniversary", emoji: "💕", count: 18 },
    { name: "Baby Shower", emoji: "👶", count: 12 },
    { name: "Festive", emoji: "🎉", count: 32 },
    { name: "Self Care", emoji: "🧖", count: 15 },
    { name: "Pet Lovers", emoji: "🐾", count: 8 },
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
            Shop by Occasion
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
          {occasions.map((occasion) => (
            <Link
              key={occasion.name}
              to="/shop"
              className="group text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ 
                backgroundColor: '#FAF7F2',
                boxShadow: '0 2px 12px rgba(90, 75, 84, 0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(90, 75, 84, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(140, 122, 149, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(90, 75, 84, 0.04)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <span className="text-4xl mb-3 block">{occasion.emoji}</span>
              <h3 
                className="font-medium text-sm mb-1"
                style={{ color: '#5A4B54' }}
              >
                {occasion.name}
              </h3>
              <p 
                className="text-xs"
                style={{ color: '#5A4B54', opacity: 0.6 }}
              >
                {occasion.count} items
              </p>
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
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 lg:mb-16 gap-4">
          <div className="text-center sm:text-left">
            <span className="eyebrow">Handpicked for You</span>
            <h2 
              className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4"
              style={{ color: '#5A4B54' }}
            >
              Featured Hampers
            </h2>
          </div>
          <Link 
            to="/shop" 
            className="btn-outline whitespace-nowrap"
          >
            View All <ArrowRight className="size-4" />
          </Link>
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

/* ---------- Build Your Box Promo ---------- */
function BuildBoxPromo() {
  return (
    <section 
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#F3EEE8' }}
    >
      <div className="container-evermaze">
        <div 
          className="relative rounded-3xl overflow-hidden"
          style={{ 
            backgroundColor: '#5A4B54',
            boxShadow: '0 20px 60px rgba(90, 75, 84, 0.2)'
          }}
        >
          {/* Decorative circles */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{ backgroundColor: '#8C7A95', transform: 'translate(30%, -30%)' }}
          />
          <div 
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
            style={{ backgroundColor: '#DCC9AE', transform: 'translate(-40%, 40%)' }}
          />
          
          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 lg:p-16">
            <div className="text-center lg:text-left">
              <span 
                className="text-xs tracking-[0.3em] uppercase font-medium"
                style={{ color: 'rgba(140, 122, 149, 1)' }}
              >
                Create Your Own
              </span>
              <h2 
                className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6 text-white leading-tight"
              >
                Build Your
                <br />
                Perfect Box
              </h2>
              <p 
                className="text-base mb-8 max-w-md"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                Choose your hamper size, select personalized items, add a heartfelt message, and create a gift that's uniquely theirs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/build-your-box" className="btn-primary">
                  Start Building <ArrowRight className="size-4" />
                </Link>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  {[149, 499, 999, 1499, 1999].map((price, i) => (
                    <div key={price} className="text-center">
                      <span 
                        className="text-2xl font-serif text-white"
                        style={{ opacity: 1 - i * 0.1 }}
                      >
                        ₹{price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {[
                    { icon: Package, title: "Choose Size", desc: "From Mini to Luxury" },
                    { icon: Heart, title: "Pick Items", desc: "Curated selections" },
                  ].map((item) => (
                    <div 
                      key={item.title}
                      className="p-5 rounded-2xl"
                      style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <item.icon className="size-6 mb-3" style={{ color: '#8C7A95' }} />
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4 mt-8">
                  {[
                    { icon: Sparkles, title: "Add Touches", desc: "Photos & messages" },
                    { icon: Gift, title: "Gift & Go", desc: "Beautifully packaged" },
                  ].map((item) => (
                    <div 
                      key={item.title}
                      className="p-5 rounded-2xl"
                      style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <item.icon className="size-6 mb-3" style={{ color: '#8C7A95' }} />
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
          <span className="eyebrow">What They Say</span>
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4"
            style={{ color: '#5A4B54' }}
          >
            Loved by Thousands
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
          <span className="eyebrow">@evermaze.gifts</span>
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4"
            style={{ color: '#5A4B54' }}
          >
            Follow Our Journey
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section 
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#F3EEE8' }}
    >
      <div className="container-evermaze">
        <div className="max-w-xl mx-auto text-center">
          <span className="eyebrow">Stay in the Loop</span>
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4 mb-5"
            style={{ color: '#5A4B54' }}
          >
            Join the Evermaze Family
          </h2>
          <p 
            className="text-base mb-8"
            style={{ color: '#5A4B54', opacity: 0.75 }}
          >
            Get gifting inspiration, exclusive offers, and early access to new hampers.
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
              Subscribe
            </button>
          </form>
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
        <FeaturedCollection />
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
