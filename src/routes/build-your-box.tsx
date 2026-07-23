import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Heart, Check, Calendar, User, Gift, Sparkles, ArrowRight, Send, X, Image, CreditCard, Smartphone, Building, Truck, Package, PartyPopper, Wallet, Banknote } from "lucide-react";
import { useState, useRef, useCallback } from "react";

import heroHamper from "@/assets/hero-hamper.jpg";

export const Route = createFileRoute("/build-your-box")({
  component: BuildYourBoxPage,
});

const packages = [
  { price: 149, name: "Mini Hamper", items: 4, maxItems: 4 },
  { price: 499, name: "Classic Hamper", items: 6, maxItems: 6 },
  { price: 999, name: "Signature Hamper", items: 9, maxItems: 9 },
  { price: 1499, name: "Supreme Hamper", items: 12, maxItems: 12 },
  { price: 1999, name: "Luxury Hamper", items: 15, maxItems: 15 },
];

const occasions = ["Birthday", "Wedding", "Anniversary", "Farewell", "Return Gift", "Baby Shower", "Festival", "Corporate", "Pet Gift"];

const relations = ["Friend", "Sister", "Brother", "Mother", "Father", "Partner", "Wife", "Husband", "Colleague", "Teacher", "Other"];

const personalItems = [
  { name: "Handwritten Letter", price: 49, description: "Your personal message written with love", icon: "✉️", hasImage: true },
  { name: "Bookmark", price: 39, description: "Beautiful bookmark for book lovers", icon: "📚", hasImage: false },
  { name: "Fridge Magnet", price: 49, description: "Custom fridge magnet as keepsake", icon: "🧲", hasImage: true },
  { name: "Chocolate Box", price: 79, description: "Assorted premium chocolates", icon: "🍫", hasImage: false },
  { name: "Keychain", price: 59, description: "Custom keychain with their name", icon: "🔑", hasImage: false },
  { name: "Photo Frame", price: 99, description: "Beautiful frame for your special photo", icon: "📷", hasImage: true },
  { name: "Photo Album", price: 149, description: "Premium photo album for memories", icon: "📒", hasImage: true },
  { name: "Personalized Mug", price: 89, description: "Custom printed ceramic mug", icon: "☕", hasImage: true },
  { name: "Scented Candle", price: 99, description: "Hand-poured aromatic candle", icon: "🕯️", hasImage: false },
  { name: "Teddy Bear", price: 129, description: "Soft and cuddly teddy bear", icon: "🧸", hasImage: false },
  { name: "Flower Bouquet", price: 149, description: "Fresh flower arrangement", icon: "💐", hasImage: false },
  { name: "Succulent Plant", price: 99, description: "Low maintenance beautiful plant", icon: "🌱", hasImage: false },
];

const paymentMethods = [
  { id: "upi", name: "UPI", icon: Smartphone, description: "PhonePe / Google Pay / Paytm" },
  { id: "card", name: "Credit / Debit Card", icon: CreditCard, description: "Visa, Mastercard, RuPay" },
  { id: "netbanking", name: "Net Banking", icon: Building, description: "All major banks supported" },
  { id: "wallet", name: "Wallets", icon: Wallet, description: "Paytm, Mobikwik, FreeCharge" },
  { id: "cod", name: "Cash on Delivery", icon: Banknote, description: "Pay when you receive" },
];

function BuildYourBoxPage() {
  const search = Route.useSearch();
  const initialPackage = search.package ? parseInt(search.package as string) : null;

  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<number | null>(initialPackage);
  const [selectedOccasion, setSelectedOccasion] = useState<string>("");
  const [selectedRelation, setSelectedRelation] = useState<string>("");
  const [customRelation, setCustomRelation] = useState<string>("");
  const [customOccasion, setCustomOccasion] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [uploadedImages, setUploadedImages] = useState<Record<string, string>>({});
  const [occasionDate, setOccasionDate] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientMessage, setRecipientMessage] = useState("");
  const [deliveryType, setDeliveryType] = useState<"standard" | "express" | "same-day">("standard");
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderNumber] = useState(`#EVM${Date.now().toString().slice(-8)}`);
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    address: "",
    city: "",
    pincode: "",
    specialInstructions: "",
  });

  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const pkg = packages.find((p) => p.price === selectedPackage);

  const deliveryOptions = [
    { id: "standard", name: "Standard Delivery", price: selectedPackage && [999, 1499, 1999].includes(selectedPackage) ? 0 : 99, description: "3-5 business days", originalPrice: 99 },
    { id: "express", name: "Express Delivery", price: selectedPackage && [999, 1499, 1999].includes(selectedPackage) ? 0 : 199, description: "1-2 business days", originalPrice: 199 },
    { id: "same-day", name: "Same Day Delivery", price: selectedPackage && [999, 1499, 1999].includes(selectedPackage) ? 0 : 349, description: "Delivery today (order before 2 PM)", originalPrice: 349 },
  ];

  const getDeliveryPrice = (option: typeof deliveryOptions[0]) => {
    const hasFreeShipping = selectedPackage && [999, 1499, 1999].includes(selectedPackage);
    return hasFreeShipping ? 0 : option.originalPrice;
  };

  const selectedDelivery = { 
    ...(deliveryOptions.find(d => d.id === deliveryType) || deliveryOptions[0]),
    price: getDeliveryPrice(deliveryOptions.find(d => d.id === deliveryType) || deliveryOptions[0])
  };

  const handlePackageSelect = useCallback((price: number, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }
    setSelectedPackage(price);
    setSelectedItems([]);
  }, []);

  const toggleItem = useCallback((itemName: string) => {
    setSelectedItems((prev) => {
      if (prev.includes(itemName)) {
        return prev.filter((i) => i !== itemName);
      }
      return [...prev, itemName];
    });
  }, []);

  const handleImageUpload = useCallback((itemName: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImages((prev) => ({ ...prev, [itemName]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const removeImage = useCallback((itemName: string) => {
    setUploadedImages((prev) => {
      const newImages = { ...prev };
      delete newImages[itemName];
      return newImages;
    });
  }, []);

  const calculateTotal = useCallback(() => {
    let total = selectedPackage || 0;
    selectedItems.forEach((itemName) => {
      const found = personalItems.find((i) => i.name === itemName);
      if (found) total += found.price;
    });
    total += selectedDelivery.price;
    return total;
  }, [selectedPackage, selectedItems, selectedDelivery]);

  const canProceed = useCallback(() => {
    switch (step) {
      case 1: return selectedPackage !== null;
      case 2: return selectedOccasion !== "" && (selectedOccasion !== "Other" || customOccasion !== "");
      case 3: return true; // Relation is optional in current implementation
      case 4: return recipientName !== "" && occasionDate !== "";
      case 5: return true; // Personal touches are optional
      case 6: return formData.senderName && formData.senderEmail && formData.senderPhone && formData.address && formData.city && formData.pincode;
      case 7: return selectedPayment !== "";
      default: return true;
    }
  }, [step, selectedPackage, selectedOccasion, customOccasion, selectedRelation, customRelation, recipientName, occasionDate, formData, selectedPayment]);

  const handleSubmit = () => {
    if (selectedPayment === "cod") {
      setShowSuccessModal(true);
    } else {
      alert("Payment Gateway Coming Soon! Please select Cash on Delivery for now, or we will integrate Razorpay soon.");
    }
  };

  const selectedPaymentMethod = paymentMethods.find(p => p.id === selectedPayment);

  const getOccasionDisplay = () => {
    if (customOccasion) return customOccasion;
    if (selectedOccasion === "Other" && !customOccasion) return "";
    return selectedOccasion;
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  };

  const isItemSelected = (itemName: string) => selectedItems.includes(itemName);
  const isItemDisabled = (itemName: string) => !isItemSelected(itemName) && selectedItems.length >= (pkg?.maxItems || 0);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header 
        className="py-4 border-b"
        style={{ 
          backgroundColor: 'rgba(250, 248, 245, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderColor: 'rgba(232, 226, 220, 0.6)',
        }}
      >
        <div className="container-evermaze flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-secondary-text hover:text-dark-lavender transition-colors min-h-[44px]">
            <ArrowLeft className="size-4" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
          <Link to="/" className="flex flex-col items-center leading-none">
            <span className="font-serif text-2xl tracking-[0.35em]" style={{ color: '#5A4B54' }}>EVERMAZE</span>
            <span className="mt-1 text-[0.6rem] tracking-[0.4em] uppercase" style={{ color: '#5A4B54', opacity: 0.7 }}>Just For You</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/wishlist" aria-label="Wishlist" className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-dark-lavender transition-colors" style={{ color: '#5A4B54' }}>
              <Heart className="size-[20px]" />
            </Link>
            <Link to="/cart" aria-label="Cart" className="relative p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-dark-lavender transition-colors" style={{ color: '#5A4B54' }}>
              <ShoppingBag className="size-[20px]" />
            </Link>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <section className="bg-white border-b border-border-color py-5 px-4">
        <div className="container-evermaze">
          {/* Circles and connecting lines */}
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7].map((s) => (
              <div key={s} className="flex items-center flex-1 last:flex-none">
                {/* Circle */}
                <button
                  onClick={() => s < step && setStep(s)}
                  className={`size-10 sm:size-12 rounded-full flex items-center justify-center font-medium transition-all text-sm sm:text-base shrink-0 ${
                    step >= s 
                      ? "bg-dark-lavender text-white shadow-md" 
                      : "bg-secondary text-secondary-text"
                  }`}
                  style={{ width: '40px', height: '40px', minWidth: '40px' }}
                >
                  {step > s ? (
                    <Check className="size-5" />
                  ) : (
                    s
                  )}
                </button>
                {/* Connecting line - only if not last */}
                {s < 7 && (
                  <div 
                    className={`h-[2px] mx-1 sm:mx-2 flex-1 rounded-full transition-colors ${
                      step > s ? "bg-dark-lavender" : "bg-secondary"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          
          {/* Labels - perfectly aligned under circles */}
          <div className="flex items-start justify-between max-w-2xl mx-auto mt-4">
            {[
              { s: 1, label: 'Hamper' },
              { s: 2, label: 'Occasion' },
              { s: 3, label: 'Relation' },
              { s: 4, label: 'Details' },
              { s: 5, label: 'Touches' },
              { s: 6, label: 'Address' },
              { s: 7, label: 'Payment' },
            ].map((item, i) => (
              <div 
                key={item.s} 
                className="flex flex-col items-center"
                style={{ width: '40px', minWidth: '40px' }}
              >
                <span className={`text-[10px] sm:text-xs font-medium text-center leading-tight ${step >= item.s ? "text-dark-lavender" : "text-secondary-text"}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-dark-lavender text-white py-8 md:py-12">
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
                <Gift className="size-6 text-dark-lavender" />
                Choose Your Package
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                {packages.map((pkgItem) => (
                  <button
                    key={pkgItem.price}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePackageSelect(pkgItem.price);
                    }}
                    className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all text-left relative ${
                      selectedPackage === pkgItem.price
                        ? "border-dark-lavender bg-dark-lavender/5"
                        : "border-border-color hover:border-dark-lavender"
                    }`}
                    style={{ minHeight: '100px' }}
                  >
                    {selectedPackage === pkgItem.price && (
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 size-5 sm:size-6 bg-dark-lavender rounded-full flex items-center justify-center">
                        <Check className="size-3 sm:size-4 text-white" />
                      </div>
                    )}
                    <span className="block font-serif text-xl sm:text-3xl text-dark-lavender">₹{pkgItem.price}</span>
                    <span className="block mt-1 sm:mt-2 font-serif text-sm sm:text-lg">{pkgItem.name}</span>
                    <span className="block mt-1 text-xs sm:text-sm text-secondary-text">{pkgItem.items} items</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Personalization */}
          {step === 2 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl mb-6 flex items-center gap-2">
                <Calendar className="size-6 text-dark-lavender" />
                Let's Personalize Your Gift
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Occasion Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {occasions.map((occ) => (
                      <button
                        key={occ}
                        onClick={() => {
                          setSelectedOccasion(occ);
                          setCustomOccasion("");
                        }}
                        className={`p-3 rounded-xl border text-sm transition-all relative ${
                          selectedOccasion === occ && customOccasion === ""
                            ? "border-dark-lavender bg-dark-lavender/5 text-dark-lavender"
                            : "border-border-color hover:border-dark-lavender"
                        }`}
                      >
                        {selectedOccasion === occ && customOccasion === "" && (
                          <div className="absolute top-2 right-2 size-4 bg-dark-lavender rounded-full flex items-center justify-center">
                            <Check className="size-3 text-white" />
                          </div>
                        )}
                        {occ}
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        setSelectedOccasion("Other");
                        setCustomOccasion("");
                      }}
                      className={`p-3 rounded-xl border text-sm transition-all relative ${
                        selectedOccasion === "Other"
                          ? "border-dark-lavender bg-dark-lavender/5 text-dark-lavender"
                          : "border-border-color hover:border-dark-lavender"
                      }`}
                    >
                      {selectedOccasion === "Other" && (
                        <div className="absolute top-2 right-2 size-4 bg-dark-lavender rounded-full flex items-center justify-center">
                          <Check className="size-3 text-white" />
                        </div>
                      )}
                      Other
                    </button>
                  </div>
                  
                  {/* Custom Occasion Input */}
                  {selectedOccasion === "Other" && (
                    <div className="mt-4">
                      <input
                        type="text"
                        value={customOccasion}
                        onChange={(e) => setCustomOccasion(e.target.value)}
                        placeholder="Enter the occasion..."
                        className="w-full px-4 py-3 rounded-xl border-2 border-dark-lavender bg-background focus:outline-none"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date of Occasion</label>
                  <input
                    type="date"
                    value={occasionDate}
                    onChange={(e) => setOccasionDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border-color bg-background focus:border-dark-lavender focus:outline-none cursor-pointer"
                    style={{ colorScheme: 'light' }}
                  />
                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">Recipient's Name</label>
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="Who is this gift for?"
                      className="w-full px-4 py-3 rounded-xl border border-border-color bg-background focus:border-dark-lavender focus:outline-none"
                    />
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">Special Message</label>
                    <textarea
                      value={recipientMessage}
                      onChange={(e) => setRecipientMessage(e.target.value)}
                      placeholder="Write your message here..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-border-color bg-background focus:border-dark-lavender focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Personal Touches (Optional) */}
          {step === 5 && (
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-2xl mb-2 flex items-center gap-2">
                <Sparkles className="size-6 text-dark-lavender" />
                Add Personal Touches
              </h2>
              <p className="text-secondary-text mb-6">
                Choose up to {pkg?.maxItems} personal items for your {pkg?.name}. Selected: {selectedItems.length}/{pkg?.maxItems}
              </p>
              
              {/* Selected Items Summary */}
              <div className="mb-6 p-4 bg-dark-lavender/10 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Selected Items ({selectedItems.length}/{pkg?.maxItems})</span>
                  <span className="text-sm text-dark-lavender font-medium">₹{calculateTotal() - (selectedPackage || 0)}</span>
                </div>
                {selectedItems.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {selectedItems.map((item) => {
                      const itemData = personalItems.find(i => i.name === item);
                      return (
                        <span key={item} className="bg-dark-lavender text-white text-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                          <span>{itemData?.icon}</span>
                          <span>{item}</span>
                          <button 
                            onClick={() => toggleItem(item)} 
                            className="hover:text-red-200 ml-1"
                            type="button"
                          >
                            <X className="size-3" />
                          </button>
                        </span>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-secondary-text">Click on items below to select them</p>
                )}
              </div>

              {/* Items Grid - Using Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {personalItems.map((item) => {
                  const selected = isItemSelected(item.name);
                  const disabled = isItemDisabled(item.name);
                  
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => !disabled && toggleItem(item.name)}
                      disabled={disabled}
                      className={`w-full text-left rounded-2xl border-2 transition-all overflow-hidden ${
                        selected
                          ? "border-dark-lavender bg-dark-lavender/5"
                          : disabled
                          ? "border-border-color opacity-50 cursor-not-allowed"
                          : "border-border-color hover:border-dark-lavender"
                      }`}
                    >
                      <div className="p-5">
                        <div className="flex items-start gap-4">
                          <div className={`size-12 rounded-xl flex items-center justify-center text-2xl transition-colors ${
                            selected ? "bg-dark-lavender/20" : "bg-secondary-bg"
                          }`}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-secondary-text mt-1">{item.description}</p>
                            <p className="mt-2 font-medium text-dark-lavender">+₹{item.price}</p>
                          </div>
                          <div className={`size-8 rounded-full border-2 flex items-center justify-center transition-all ${
                            selected
                              ? "border-dark-lavender bg-dark-lavender text-white"
                              : "border-border-color bg-white"
                          }`}>
                            {selected && <Check className="size-5" />}
                          </div>
                        </div>
                      </div>
                      
                      {/* Image Upload Section - Only show for selected items that need images */}
                      {selected && item.hasImage && (
                        <div className="px-5 pb-5 border-t border-dark-lavender/20 pt-4 mt-2">
                          <label className="block cursor-pointer">
                            <div className={`border-2 border-dashed rounded-xl p-4 text-center transition-colors ${
                              uploadedImages[item.name]
                                ? "border-dark-lavender bg-dark-lavender/10"
                                : "border-border-color hover:border-dark-lavender hover:bg-secondary-bg"
                            }`}>
                              {uploadedImages[item.name] ? (
                                <div className="relative">
                                  <img 
                                    src={uploadedImages[item.name]} 
                                    alt="Uploaded" 
                                    className="max-h-32 mx-auto rounded-lg object-cover"
                                  />
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      removeImage(item.name);
                                    }}
                                    className="absolute -top-2 -right-2 size-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                                  >
                                    <X className="size-4" />
                                  </button>
                                  <p className="text-xs text-dark-lavender mt-2">Click to change image</p>
                                </div>
                              ) : (
                                <>
                                  <Image className="size-8 mx-auto text-secondary-text mb-2" />
                                  <p className="text-sm font-medium">Upload Image</p>
                                  <p className="text-xs text-secondary-text mt-1">For {item.name}</p>
                                </>
                              )}
                            </div>
                            <input
                              type="file"
                              accept="image/*"
                              ref={(el) => { fileInputRefs.current[item.name] = el; }}
                              onChange={(e) => {
                                e.stopPropagation();
                                handleImageUpload(item.name, e);
                              }}
                              onClick={(e) => e.stopPropagation()}
                              className="hidden"
                            />
                          </label>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {step === 4 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl mb-6 flex items-center gap-2">
                <Heart className="size-6 text-dark-lavender" />
                Review Your Hamper
              </h2>
              <div className="bg-card border border-border-color rounded-2xl p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-dark-lavender mb-4">Package Details</h3>
                    <p className="text-lg font-serif">{pkg?.name} - ₹{pkg?.price}</p>
                    <p className="text-secondary-text mt-2">
                      <span className="font-medium">Occasion:</span> {getOccasionDisplay()}
                    </p>
                    <p className="text-secondary-text">
                      <span className="font-medium">Date:</span> {formatDate(occasionDate)}
                    </p>
                    {recipientName && (
                      <p className="text-secondary-text">
                        <span className="font-medium">For:</span> {recipientName}
                      </p>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-lavender mb-4">Selected Items ({selectedItems.length})</h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {selectedItems.map((itemName) => {
                        const item = personalItems.find(i => i.name === itemName);
                        return (
                          <div key={itemName} className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2">
                              <span>{item?.icon}</span>
                              <span>{itemName}</span>
                              {uploadedImages[itemName] && (
                                <span className="size-5 bg-green-100 rounded-full flex items-center justify-center">
                                  <Check className="size-3 text-green-600" />
                                </span>
                              )}
                            </span>
                            <span className="text-secondary-text">₹{item?.price}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {recipientMessage && (
                  <div className="mt-6 pt-6 border-t border-border-color">
                    <h3 className="font-medium text-dark-lavender mb-2">Your Message</h3>
                    <p className="text-secondary-text italic">"{recipientMessage}"</p>
                  </div>
                )}
                
                {/* Uploaded Images Preview */}
                {Object.keys(uploadedImages).length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border-color">
                    <h3 className="font-medium text-dark-lavender mb-3">Uploaded Images</h3>
                    <div className="flex flex-wrap gap-3">
                      {Object.entries(uploadedImages).map(([itemName, image]) => (
                        <div key={itemName} className="relative">
                          <img src={image} alt={itemName} className="size-16 rounded-lg object-cover border border-border-color" />
                          <span className="absolute -bottom-1 -right-1 text-[10px] bg-dark-lavender text-white px-1.5 py-0.5 rounded-full">
                            {itemName.split(' ')[0]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 6: Shipping Address */}
          {step === 6 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl mb-3 flex items-center gap-3">
                <User className="size-7" style={{ color: 'var(--dusty-lavender)' }} />
                Shipping Address
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--body-text)' }}>Enter your delivery details</p>
              
              {/* Delivery Options */}
              <div className="mb-10">
                <h3 className="font-medium mb-4">
                  Delivery Options
                  {selectedPackage && [999, 1499, 1999].includes(selectedPackage) && (
                    <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">FREE Shipping</span>
                  )}
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {deliveryOptions.map((option) => {
                    const isFreeShipping = selectedPackage && [999, 1499, 1999].includes(selectedPackage);
                    const displayPrice = isFreeShipping ? 0 : option.originalPrice;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setDeliveryType(option.id as "standard" | "express" | "same-day")}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          deliveryType === option.id
                            ? "border-dark-lavender bg-dark-lavender/5"
                            : "border-border-color hover:border-dark-lavender"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium">{option.name}</span>
                          {deliveryType === option.id && (
                            <Check className="size-5 text-dark-lavender" />
                          )}
                        </div>
                        <p className="text-sm text-secondary-text">{option.description}</p>
                        <div className="mt-2">
                          {isFreeShipping ? (
                            <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-2 py-0.5 rounded">FREE</span>
                          ) : (
                            <span className="font-medium text-dark-lavender">₹{displayPrice}</span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      value={formData.senderName}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border-color bg-background focus:border-dark-lavender focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border-color bg-background focus:border-dark-lavender focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.senderPhone}
                      onChange={(e) => setFormData({ ...formData, senderPhone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border-color bg-background focus:border-dark-lavender focus:outline-none"
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
                      className="w-full px-4 py-3 rounded-xl border border-border-color bg-background focus:border-dark-lavender focus:outline-none resize-none"
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
                        className="w-full px-4 py-3 rounded-xl border border-border-color bg-background focus:border-dark-lavender focus:outline-none"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Pincode *</label>
                      <input
                        type="text"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border-color bg-background focus:border-dark-lavender focus:outline-none"
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
                      className="w-full px-4 py-3 rounded-xl border border-border-color bg-background focus:border-dark-lavender focus:outline-none resize-none"
                      placeholder="Any special delivery instructions..."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Order Summary - Only on Personal Touches page */}
          {step === 5 && (
            <div className="max-w-4xl mx-auto mt-12">
              <div className="bg-card border border-border-color rounded-2xl p-6">
                <h3 className="font-serif text-xl mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary-text">Package</span>
                    <span>{pkg?.name} (₹{pkg?.price})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-text">Items ({selectedItems.length})</span>
                    <span>₹{selectedItems.reduce((sum, itemName) => {
                      const found = personalItems.find(i => i.name === itemName);
                      if (found) sum += found.price;
                      return sum;
                    }, 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-text">Shipping</span>
                    <span>
                      {selectedDelivery.price === 0 ? (
                        <span className="text-green-600 font-medium">FREE</span>
                      ) : (
                        <>₹{selectedDelivery.price} ({selectedDelivery.name})</>
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-text">Occasion</span>
                    <span>{getOccasionDisplay()} - {formatDate(occasionDate)}</span>
                  </div>
                  <div className="border-t border-border-color pt-3 mt-3">
                    <div className="flex justify-between font-serif text-2xl">
                      <span>Total</span>
                      <span className="text-dark-lavender">₹{calculateTotal()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row justify-between gap-4">
            {step > 1 ? (
              <button onClick={() => setStep(step - 1)} type="button" className="btn-outline w-full sm:w-auto justify-center">
                ← Previous
              </button>
            ) : (
              <Link to="/shop" className="btn-outline w-full sm:w-auto justify-center">
                ← Back to Shop
              </Link>
            )}
            {step < 7 ? (
              <button 
                type="button"
                onClick={() => setStep(step + 1)} 
                disabled={!canProceed()}
                className="btn-primary flex items-center gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                {step === 5 ? 'Skip (Optional)' : 'Next'} <ArrowRight className="size-4" />
              </button>
            ) : (
              <button 
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="btn-primary flex items-center gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                <Send className="size-4" /> Complete Order
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Step 7: Payment Selection */}
      {step === 7 && (
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl mb-3 flex items-center gap-3">
            <CreditCard className="size-7" style={{ color: 'var(--dusty-lavender)' }} />
            Select Payment Method
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--body-text)' }}>Choose how you'd like to pay for your order</p>
          
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {paymentMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setSelectedPayment(method.id)}
                  className={`p-6 rounded-2xl border-2 text-left transition-all ${
                    selectedPayment === method.id
                      ? "border-dusty-lavender"
                      : "border-border-color hover:border-dusty-lavender"
                  }`}
                  style={{ 
                    backgroundColor: selectedPayment === method.id ? 'rgba(143, 122, 153, 0.08)' : 'var(--background)',
                    borderColor: selectedPayment === method.id ? 'var(--dusty-lavender)' : 'var(--border-color)'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(143, 122, 153, 0.15)' }}>
                      <IconComponent className="size-6" style={{ color: 'var(--dusty-lavender)' }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-lg">{method.name}</span>
                        {selectedPayment === method.id && (
                          <Check className="size-5" style={{ color: 'var(--dusty-lavender)' }} />
                        )}
                      </div>
                      <p className="text-sm mt-1" style={{ color: 'var(--body-text)' }}>{method.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {selectedPayment && (
            <div className="rounded-2xl p-8 mb-8" style={{ backgroundColor: 'var(--secondary)', border: '1px solid var(--border-color)' }}>
              <h3 className="font-serif text-xl mb-6">Order Summary</h3>
              <div className="space-y-3 text-base">
                <div className="flex justify-between">
                  <span style={{ color: 'var(--body-text)' }}>Package</span>
                  <span>{pkg?.name} (₹{pkg?.price})</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--body-text)' }}>Personal Items ({selectedItems.length})</span>
                  <span>₹{selectedItems.reduce((sum, itemName) => {
                    const found = personalItems.find(i => i.name === itemName);
                    if (found) sum += found.price;
                    return sum;
                  }, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--body-text)' }}>Shipping</span>
                  <span>{selectedDelivery.price === 0 ? <span className="text-green-600 font-medium">FREE</span> : <>₹{selectedDelivery.price}</>}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--body-text)' }}>Payment Method</span>
                  <span className="font-medium">{selectedPaymentMethod?.name}</span>
                </div>
                <div className="border-t border-border-color pt-4 mt-4">
                  <div className="flex justify-between font-serif text-2xl">
                    <span>Total</span>
                    <span style={{ color: 'var(--dusty-lavender)' }}>₹{calculateTotal()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(46, 42, 43, 0.5)', backdropFilter: 'blur(8px)' }}>
          <div className="w-full max-w-lg rounded-3xl p-10 text-center animate-in fade-in zoom-in duration-300" style={{ backgroundColor: 'white', boxShadow: '0 25px 80px rgba(46, 42, 43, 0.25)' }}>
            <div className="size-20 rounded-full mx-auto mb-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(143, 122, 153, 0.15)' }}>
              <PartyPopper className="size-10" style={{ color: 'var(--dusty-lavender)' }} />
            </div>
            <h2 className="font-serif text-3xl mb-3" style={{ color: 'var(--heading-color)' }}>
              Order Received!
            </h2>
            <p className="text-lg mb-2" style={{ color: 'var(--heading-color)' }}>
              Thank you for choosing Evermaze.
            </p>
            <p className="mb-6" style={{ color: 'var(--body-text)' }}>
              We've received your order and are preparing your personalized hamper with care.
            </p>
            <div className="rounded-2xl p-6 mb-8" style={{ backgroundColor: 'var(--secondary)' }}>
              <p className="text-sm" style={{ color: 'var(--body-text)' }}>Your Order Number</p>
              <p className="font-serif text-2xl" style={{ color: 'var(--dusty-lavender)' }}>{orderNumber}</p>
            </div>
            <p className="text-sm mb-8" style={{ color: 'var(--body-text)' }}>
              You'll receive an order confirmation via email shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-outline flex-1">
                Continue Shopping
              </Link>
              <button className="btn-primary flex-1" onClick={() => setShowSuccessModal(false)}>
                View My Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="pt-16 pb-8" style={{ backgroundColor: '#2F262B' }}>
        <div className="container-evermaze">
          <div className="text-center mb-12">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em]" style={{ color: 'white' }}>EVERMAZE</Link>
            <p className="mt-2 text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>Just For You</p>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>© 2026 Evermaze. Made with love.</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <a href="mailto:evermaze.info@gmail.com" className="hover:opacity-70 transition-opacity">evermaze.info@gmail.com</a>
              <Link to="/privacy-policy" className="hover:opacity-70 transition-opacity">Privacy</Link>
              <Link to="/terms-conditions" className="hover:opacity-70 transition-opacity">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
