import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Heart, Check, Calendar, User, Gift, Sparkles, ArrowRight, Send } from "lucide-react";
import { useState } from "react";

import heroHamper from "@/assets/hero-hamper.jpg";

export const Route = createFileRoute("/build-your-box")({
  component: BuildYourBoxPage,
});

const packages = [
  { price: 199, name: "Mini Hamper", items: 2, maxItems: 2 },
  { price: 499, name: "Classic Hamper", items: 4, maxItems: 4 },
  { price: 999, name: "Signature Hamper", items: 6, maxItems: 6 },
  { price: 1499, name: "Supreme Hamper", items: 8, maxItems: 8 },
  { price: 1999, name: "Luxury Hamper", items: 10, maxItems: 10 },
];

const occasions = ["Birthday", "Wedding", "Anniversary", "Farewell", "Return Gift", "Baby Shower", "Festival", "Corporate", "Pet Gift", "Other"];

const itemCategories = [
  {
    name: "Sweets & Treats",
    icon: "🍫",
    items: [
      { name: "Artisan Chocolates", price: 99 },
      { name: "Handmade Cookies", price: 79 },
      { name: "Premium Dry Fruits", price: 149 },
      { name: "Gourmet Candies", price: 49 },
      { name: "Indian Sweets Box", price: 129 },
      { name: "Assorted Nuts", price: 99 },
    ],
  },
  {
    name: "Self-Care & Wellness",
    icon: "🧴",
    items: [
      { name: "Scented Candle", price: 149 },
      { name: "Bath Bombs Set", price: 99 },
      { name: "Face Mask Pack", price: 79 },
      { name: "Essential Oil Roller", price: 69 },
      { name: "Lip Balm Set", price: 49 },
      { name: "Hand Cream Duo", price: 89 },
    ],
  },
  {
    name: "Personal Touches",
    icon: "💝",
    items: [
      { name: "Handwritten Letter", price: 49 },
      { name: "Photo Frame", price: 99 },
      { name: "Personalized Keychain", price: 79 },
      { name: "Custom Bookmark", price: 49 },
      { name: "Engraved Token", price: 129 },
      { name: "Memory Card", price: 39 },
    ],
  },
  {
    name: " Décor & Accessories",
    icon: "🏠",
    items: [
      { name: "Mini Vase", price: 79 },
      { name: "Scented Potpourri", price: 59 },
      { name: "Decorative Tray", price: 99 },
      { name: "LED Photo Clip", price: 69 },
      { name: "Ceramic Coaster Set", price: 89 },
      { name: "Dream Catcher", price: 79 },
    ],
  },
  {
    name: "Plants & Green",
    icon: "🌿",
    items: [
      { name: "Succulent Plant", price: 99 },
      { name: "Air Plant Terrarium", price: 149 },
      { name: "Herb Garden Kit", price: 129 },
      { name: "Bamboo Plant", price: 79 },
      { name: "Flowering Plant", price: 119 },
      { name: "Moss Ball", price: 69 },
    ],
  },
];

const personalTouches = [
  { name: "Handwritten Letter", price: 49, description: "Your personal message written with love" },
  { name: "Premium Gift Wrapping", price: 79, description: "Luxurious wrapping with silk ribbon" },
  { name: "Photo Card", price: 39, description: "Include a special photo with your gift" },
  { name: "Video Message Link", price: 29, description: "Share a personalized video message" },
  { name: "Gift Card with Wishes", price: 49, description: "Beautiful card with your wishes" },
  { name: "Champagne/Wine Upgrade", price: 299, description: "Add a bottle of champagne or wine" },
];

function BuildYourBoxPage() {
  const search = Route.useSearch();
  const initialPackage = search.package ? parseInt(search.package as string) : null;

  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<number | null>(initialPackage);
  const [selectedOccasion, setSelectedOccasion] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedTouches, setSelectedTouches] = useState<string[]>([]);
  const [occasionDate, setOccasionDate] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientMessage, setRecipientMessage] = useState("");
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    address: "",
    city: "",
    pincode: "",
    specialInstructions: "",
  });

  const pkg = packages.find((p) => p.price === selectedPackage);

  const toggleItem = (item: string) => {
    setSelectedItems((prev) => 
      prev.includes(item) ? prev.filter((i) => i !== item) : prev
    );
  };

  const toggleTouch = (touch: string) => {
    setSelectedTouches((prev) =>
      prev.includes(touch) ? prev.filter((t) => t !== touch) : prev
    );
  };

  const calculateTotal = () => {
    let total = selectedPackage || 0;
    selectedItems.forEach((itemName) => {
      for (const cat of itemCategories) {
        const found = cat.items.find((i) => i.name === itemName);
        if (found) {
          total += found.price;
          break;
        }
      }
    });
    selectedTouches.forEach((touchName) => {
      const found = personalTouches.find((t) => t.name === touchName);
      if (found) total += found.price;
    });
    return total;
  };

  const canProceed = () => {
    switch (step) {
      case 1: return selectedPackage !== null;
      case 2: return selectedOccasion !== "" && occasionDate !== "";
      case 3: return selectedItems.length <= (pkg?.maxItems || 0);
      case 4: return true;
      case 5: return formData.senderName && formData.senderEmail && formData.senderPhone && formData.address && formData.city && formData.pincode;
      default: return true;
    }
  };

  const handleSubmit = () => {
    alert("Order placed successfully! You will receive a confirmation email shortly.");
  };

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
            <span className="mt-1 text-[0.6rem] tracking-[0.4em] uppercase text-muted-foreground">Just For You</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/wishlist" aria-label="Wishlist" className="hover:text-burgundy transition-colors"><Heart className="size-[18px]" /></Link>
            <Link to="/cart" aria-label="Cart" className="relative hover:text-burgundy transition-colors">
              <ShoppingBag className="size-[18px]" />
              <span className="absolute -top-1.5 -right-2 bg-burgundy text-white text-[9px] rounded-full size-4 grid place-items-center">2</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <section className="bg-card border-b border-border py-4">
        <div className="container-evermaze">
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`size-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                  step >= s ? "bg-burgundy text-white" : "bg-muted text-muted-foreground"
                }`}>
                  {s}
                </div>
                {s < 5 && (
                  <div className={`w-12 md:w-20 h-1 mx-2 rounded ${step > s ? "bg-burgundy" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 md:gap-8 mt-2 text-xs md:text-sm text-muted-foreground">
            <span className={step >= 1 ? "text-burgundy" : ""}>Package</span>
            <span className={step >= 2 ? "text-burgundy" : ""}>Occasion</span>
            <span className={step >= 3 ? "text-burgundy" : ""}>Items</span>
            <span className={step >= 4 ? "text-burgundy" : ""}>Touches</span>
            <span className={step >= 5 ? "text-burgundy" : ""}>Book</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-burgundy text-white py-8 md:py-12">
        <div className="container-evermaze text-center">
          <h1 className="font-serif text-3xl md:text-4xl">Customize Your Hamper</h1>
          <p className="mt-2 text-white/70">Create the perfect personalized gift</p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-evermaze">
          {/* Step 1: Package Selection */}
          {step === 1 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl mb-6 flex items-center gap-2">
                <Gift className="size-6 text-burgundy" />
                Choose Your Package
              </h2>
              <div className="grid md:grid-cols-5 gap-4">
                {packages.map((pkg) => (
                  <button
                    key={pkg.price}
                    onClick={() => setSelectedPackage(pkg.price)}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      selectedPackage === pkg.price
                        ? "border-burgundy bg-burgundy/5"
                        : "border-border hover:border-burgundy"
                    }`}
                  >
                    <span className="block font-serif text-3xl text-burgundy">₹{pkg.price}</span>
                    <span className="block mt-2 font-serif text-lg">{pkg.name}</span>
                    <span className="block mt-1 text-sm text-muted-foreground">Up to {pkg.items} items</span>
                    {selectedPackage === pkg.price && (
                      <Check className="size-5 text-burgundy mt-3 mx-auto" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Occasion Details */}
          {step === 2 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl mb-6 flex items-center gap-2">
                <Calendar className="size-6 text-burgundy" />
                Tell Us About the Occasion
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Occasion Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {occasions.map((occ) => (
                      <button
                        key={occ}
                        onClick={() => setSelectedOccasion(occ)}
                        className={`p-3 rounded-xl border text-sm transition-all ${
                          selectedOccasion === occ
                            ? "border-burgundy bg-burgundy/5 text-burgundy"
                            : "border-border hover:border-burgundy"
                        }`}
                      >
                        {occ}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date of Occasion</label>
                  <input
                    type="date"
                    value={occasionDate}
                    onChange={(e) => setOccasionDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-burgundy focus:outline-none"
                    min={new Date().toISOString().split('T')[0]}
                  />
                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">Recipient's Name (Optional)</label>
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="Who is this gift for?"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-burgundy focus:outline-none"
                    />
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">Message for Recipient (Optional)</label>
                    <textarea
                      value={recipientMessage}
                      onChange={(e) => setRecipientMessage(e.target.value)}
                      placeholder="Write a personal message..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-burgundy focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Item Selection */}
          {step === 3 && (
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-2xl mb-2 flex items-center gap-2">
                <Sparkles className="size-6 text-burgundy" />
                Select Your Items
              </h2>
              <p className="text-muted-foreground mb-6">Choose up to {pkg?.maxItems} items for your {pkg?.name}</p>
              <div className="flex flex-wrap gap-2 mb-6 p-4 bg-burgundy/10 rounded-xl">
                <span className="text-sm font-medium">Selected: {selectedItems.length}/{pkg?.maxItems}</span>
                {selectedItems.map((item) => (
                  <span key={item} className="bg-burgundy text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
                    {item}
                    <button onClick={() => toggleItem(item)} className="hover:text-champagne">×</button>
                  </span>
                ))}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {itemCategories.map((category) => (
                  <div key={category.name} className="bg-card border border-border rounded-2xl p-5">
                    <h3 className="font-serif text-lg mb-4">{category.icon} {category.name}</h3>
                    <div className="space-y-2">
                      {category.items.map((item) => {
                        const isSelected = selectedItems.includes(item.name);
                        const isDisabled = !isSelected && selectedItems.length >= (pkg?.maxItems || 0);
                        return (
                          <button
                            key={item.name}
                            onClick={() => !isDisabled && toggleItem(item.name)}
                            disabled={isDisabled}
                            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
                              isSelected
                                ? "border-burgundy bg-burgundy/5"
                                : isDisabled
                                ? "border-border opacity-50 cursor-not-allowed"
                                : "border-border hover:border-burgundy"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {isSelected && <Check className="size-4 text-burgundy" />}
                              <span className="text-sm">{item.name}</span>
                            </span>
                            <span className="text-sm text-muted-foreground">+₹{item.price}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Personal Touches */}
          {step === 4 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl mb-2 flex items-center gap-2">
                <Heart className="size-6 text-burgundy" />
                Add Personal Touches
              </h2>
              <p className="text-muted-foreground mb-6">Make your gift extra special</p>
              <div className="grid md:grid-cols-2 gap-4">
                {personalTouches.map((touch) => {
                  const isSelected = selectedTouches.includes(touch.name);
                  return (
                    <button
                      key={touch.name}
                      onClick={() => toggleTouch(touch.name)}
                      className={`p-5 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? "border-burgundy bg-burgundy/5"
                          : "border-border hover:border-burgundy"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">{touch.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{touch.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">+₹{touch.price}</span>
                          {isSelected && <Check className="size-5 text-burgundy" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 5: Booking Details */}
          {step === 5 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl mb-6 flex items-center gap-2">
                <User className="size-6 text-burgundy" />
                Complete Your Order
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      value={formData.senderName}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-burgundy focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-burgundy focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.senderPhone}
                      onChange={(e) => setFormData({ ...formData, senderPhone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-burgundy focus:outline-none"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Delivery Address *</label>
                    <textarea
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-burgundy focus:outline-none resize-none"
                      placeholder="Enter full delivery address"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">City *</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-burgundy focus:outline-none"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Pincode *</label>
                      <input
                        type="text"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-burgundy focus:outline-none"
                        placeholder="Pincode"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Special Instructions</label>
                    <textarea
                      value={formData.specialInstructions}
                      onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-burgundy focus:outline-none resize-none"
                      placeholder="Any special delivery instructions..."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Order Summary */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-serif text-xl mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Package</span>
                  <span>{pkg?.name} (₹{pkg?.price})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Items ({selectedItems.length})</span>
                  <span>₹{selectedItems.reduce((sum, itemName) => {
                    for (const cat of itemCategories) {
                      const found = cat.items.find(i => i.name === itemName);
                      if (found) { sum += found.price; break; }
                    }
                    return sum;
                  }, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Personal Touches ({selectedTouches.length})</span>
                  <span>₹{selectedTouches.reduce((sum, touchName) => {
                    const found = personalTouches.find(t => t.name === touchName);
                    if (found) sum += found.price;
                    return sum;
                  }, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Occasion</span>
                  <span>{selectedOccasion} - {occasionDate}</span>
                </div>
                <div className="border-t border-border pt-3 mt-3">
                  <div className="flex justify-between font-serif text-2xl">
                    <span>Total</span>
                    <span className="text-burgundy">₹{calculateTotal()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="max-w-4xl mx-auto mt-8 flex justify-between">
            {step > 1 ? (
              <button onClick={() => setStep(step - 1)} className="btn-outline">
                ← Previous
              </button>
            ) : (
              <Link to="/shop" className="btn-outline">
                ← Back to Shop
              </Link>
            )}
            {step < 5 ? (
              <button 
                onClick={() => setStep(step + 1)} 
                disabled={!canProceed()}
                className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next <ArrowRight className="size-4" />
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="size-4" /> Book Now
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ivory border-t border-border pt-12 pb-6 mt-12">
        <div className="container-evermaze text-center">
          <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-burgundy">EVERMAZE</Link>
          <p className="mt-4 text-sm text-muted-foreground">Beautifully personalized gift hampers for every celebration.</p>
        </div>
      </footer>
    </div>
  );
}
