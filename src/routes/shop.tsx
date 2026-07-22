import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, ArrowRight, Star, Filter, Grid3X3, Grid2X2 } from "lucide-react";
import { useState } from "react";

import hamper1 from "@/assets/hamper-1.jpg";
import hamper2 from "@/assets/hamper-2.jpg";
import hamper3 from "@/assets/hamper-3.jpg";
import hamper4 from "@/assets/hamper-4.jpg";
import hamper5 from "@/assets/hamper-5.jpg";

import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
});

const hamperTypes = [
  { 
    price: 199, 
    name: "Mini Hamper", 
    description: "Perfect for small gestures and intimate moments",
    img: hamper1,
    rating: 4.8,
    reviews: 45,
    tag: "入门款"
  },
  { 
    price: 499, 
    name: "Classic Hamper", 
    description: "Thoughtful gift for any celebration",
    img: hamper2,
    rating: 4.9,
    reviews: 128,
    tag: "Bestseller"
  },
  { 
    price: 999, 
    name: "Signature Hamper", 
    description: "Premium selection for special occasions",
    img: hamper3,
    rating: 4.9,
    reviews: 96,
    tag: "Popular"
  },
  { 
    price: 1499, 
    name: "Supreme Hamper", 
    description: "Luxurious experience with premium items",
    img: hamper4,
    rating: 5.0,
    reviews: 67,
    tag: "Premium"
  },
  { 
    price: 1999, 
    name: "Luxury Hamper", 
    description: "Ultimate indulgence with exclusive items",
    img: hamper5,
    rating: 5.0,
    reviews: 34,
    tag: "Exclusive"
  },
];

function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [gridSize, setGridSize] = useState<"small" | "large">("large");

  const categories = [
    { id: "all", name: "All Hampers" },
    { id: "mini", name: "Mini" },
    { id: "classic", name: "Classic" },
    { id: "premium", name: "Premium" },
  ];

  const sortOptions = [
    { id: "featured", name: "Featured" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
    { id: "rating", name: "Top Rated" },
  ];

  return (
    <div className="min-h-screen">
      <LuxuryHeader />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section 
          className="py-16 lg:py-24"
          style={{ backgroundColor: '#F3EEE8' }}
        >
          <div className="container-evermaze text-center">
            <span className="eyebrow">Discover Our Collection</span>
            <h1 
              className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 mb-5"
              style={{ color: '#5A4B54' }}
            >
              Choose Your Hamper
            </h1>
            <p 
              className="text-base lg:text-lg max-w-2xl mx-auto"
              style={{ color: '#5A4B54', opacity: 0.75 }}
            >
              Select your perfect package and customize it with your personal touch. From intimate gestures to grand celebrations, we have something for everyone.
            </p>
          </div>
        </section>

        {/* Filters & Grid */}
        <section 
          className="py-8 lg:py-12"
          style={{ backgroundColor: '#FAF7F2' }}
        >
          <div className="container-evermaze">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b" style={{ borderColor: 'rgba(90, 75, 84, 0.08)' }}>
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === cat.id 
                        ? '' 
                        : ''
                    }`}
                    style={{
                      backgroundColor: selectedCategory === cat.id ? '#8C7A95' : 'transparent',
                      color: selectedCategory === cat.id ? 'white' : '#5A4B54',
                      border: selectedCategory === cat.id ? 'none' : '1px solid rgba(90, 75, 84, 0.15)',
                    }}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Sort & Grid */}
              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-full text-sm border appearance-none cursor-pointer"
                  style={{ 
                    backgroundColor: '#FAF7F2',
                    borderColor: 'rgba(90, 75, 84, 0.15)',
                    color: '#5A4B54',
                    outline: 'none'
                  }}
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>{opt.name}</option>
                  ))}
                </select>

                {/* Grid Toggle */}
                <div className="hidden lg:flex items-center gap-1 p-1 rounded-full" style={{ backgroundColor: '#F3EEE8' }}>
                  <button
                    onClick={() => setGridSize("large")}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      gridSize === "large" ? '' : ''
                    }`}
                    style={{
                      backgroundColor: gridSize === "large" ? 'white' : 'transparent',
                      boxShadow: gridSize === "large" ? '0 2px 8px rgba(90, 75, 84, 0.1)' : 'none'
                    }}
                  >
                    <Grid2X2 className="size-4" style={{ color: '#5A4B54' }} />
                  </button>
                  <button
                    onClick={() => setGridSize("small")}
                    className={`p-2 rounded-full transition-all duration-200`}
                    style={{
                      backgroundColor: gridSize === "small" ? 'white' : 'transparent',
                      boxShadow: gridSize === "small" ? '0 2px 8px rgba(90, 75, 84, 0.1)' : 'none'
                    }}
                  >
                    <Grid3X3 className="size-4" style={{ color: '#5A4B54' }} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={gridSize === "large" 
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              : "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5"
            }>
              {hamperTypes.map((hamper) => (
                <Link
                  key={hamper.price}
                  to={`/build-your-box?package=${hamper.price}`}
                  className="group"
                >
                  <div 
                    className={`relative rounded-2xl overflow-hidden mb-4 transition-all duration-300 group-hover:-translate-y-1 ${
                      gridSize === "large" ? "aspect-[4/5]" : "aspect-square"
                    }`}
                    style={{ 
                      boxShadow: '0 4px 20px rgba(90, 75, 84, 0.06)'
                    }}
                  >
                    <img 
                      src={hamper.img} 
                      alt={hamper.name} 
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    
                    {/* Tag */}
                    <span 
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: 'rgba(140, 122, 149, 0.92)',
                        color: 'white'
                      }}
                    >
                      {hamper.tag}
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
                  
                  {/* Info */}
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="size-3.5 fill-current" style={{ color: '#DCC9AE' }} />
                      <span className="text-xs" style={{ color: '#5A4B54', opacity: 0.7 }}>
                        {hamper.rating} ({hamper.reviews})
                      </span>
                    </div>
                    <h3 
                      className={`font-serif group-hover:text-[#8C7A95] transition-colors mb-1 ${
                        gridSize === "large" ? "text-xl" : "text-lg"
                      }`}
                      style={{ color: '#5A4B54' }}
                    >
                      {hamper.name}
                    </h3>
                    <p 
                      className={`text-sm mb-3 ${gridSize === "large" ? "" : "hidden"}`}
                      style={{ color: '#5A4B54', opacity: 0.7 }}
                    >
                      {hamper.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-serif text-xl" style={{ color: '#8C7A95' }}>
                        ₹{hamper.price.toLocaleString()}
                      </p>
                      <span 
                        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                          gridSize === "large" ? "" : "hidden"
                        }`}
                        style={{ color: '#5A4B54', opacity: 0.6 }}
                      >
                        Customize <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn-outline">
                View All Hampers
              </button>
            </div>
          </div>
        </section>

        {/* Build Your Box CTA */}
        <section 
          className="py-20 lg:py-28"
          style={{ backgroundColor: '#F3EEE8' }}
        >
          <div className="container-evermaze">
            <div 
              className="relative rounded-3xl overflow-hidden p-8 lg:p-16 text-center"
              style={{ 
                backgroundColor: 'white',
                boxShadow: '0 20px 60px rgba(90, 75, 84, 0.1)'
              }}
            >
              <span className="eyebrow">Can't Decide?</span>
              <h2 
                className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4 mb-5"
                style={{ color: '#5A4B54' }}
              >
                Create Your Own Hamper
              </h2>
              <p 
                className="text-base max-w-xl mx-auto mb-8"
                style={{ color: '#5A4B54', opacity: 0.75 }}
              >
                Build a personalized gift box from scratch. Choose your size, pick your items, add a heartfelt message, and make it truly unique.
              </p>
              <Link to="/build-your-box" className="btn-primary">
                Start Building <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <LuxuryFooter />
    </div>
  );
}
