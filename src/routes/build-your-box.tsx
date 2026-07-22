import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { 
  ShoppingBag, Heart, Check, Calendar, User, Gift, Sparkles, ArrowRight, Send, X, 
  Image, CreditCard, Smartphone, Building, Truck, Package, PartyPopper, Wallet, 
  Banknote, ChevronRight, Minus, Plus, Upload, MessageCircle, Clock, ArrowUpRight
} from "lucide-react";
import { useState, useRef, useCallback } from "react";

import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";
import { ConfirmationModal, OrderSuccessModal } from "@/components/ConfirmationModal";
import { saveOrder } from "@/lib/emailService";

export const Route = createFileRoute("/build-your-box")({
  component: BuildYourBoxPage,
});

const packages = [
  { price: 199, name: "Mini Hamper", items: 4, maxItems: 4, description: "Perfect for intimate gestures" },
  { price: 499, name: "Classic Hamper", items: 6, maxItems: 6, description: "Thoughtful celebration gift" },
  { price: 999, name: "Signature Hamper", items: 9, maxItems: 9, description: "Premium selection" },
  { price: 1499, name: "Supreme Hamper", items: 12, maxItems: 12, description: "Luxurious experience" },
  { price: 1999, name: "Luxury Hamper", items: 15, maxItems: 15, description: "Ultimate indulgence" },
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
  const [orderNumber, setOrderNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
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
    { id: "same-day", name: "Same Day Delivery", price: selectedPackage && [999, 1499, 1999].includes(selectedPackage) ? 0 : 349, description: "Order before 2 PM", originalPrice: 349 },
  ];

  const getDeliveryPrice = (option: typeof deliveryOptions[0]) => {
    const hasFreeShipping = selectedPackage && [999, 1499, 1999].includes(selectedPackage);
    return hasFreeShipping ? 0 : option.originalPrice;
  };

  const selectedDelivery = { 
    ...(deliveryOptions.find(d => d.id === deliveryType) || deliveryOptions[0]),
    price: getDeliveryPrice(deliveryOptions.find(d => d.id === deliveryType) || deliveryOptions[0])
  };

  const handlePackageSelect = useCallback((price: number) => {
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
      case 3: return true;
      case 4: return recipientName !== "" && occasionDate !== "";
      case 5: return true;
      case 6: return formData.senderName && formData.senderEmail && formData.senderPhone && formData.address && formData.city && formData.pincode;
      case 7: return selectedPayment !== "";
      default: return true;
    }
  }, [step, selectedPackage, selectedOccasion, customOccasion, recipientName, occasionDate, formData, selectedPayment]);

  const handleSubmit = async () => {
    setIsProcessing(true);
    
    try {
      // Generate order number
      const newOrderNumber = `#EVM${Date.now().toString().slice(-8)}`;
      
      // Prepare order data
      const orderData = {
        orderNumber: newOrderNumber,
        customerName: formData.senderName,
        customerEmail: formData.senderEmail,
        orderTotal: calculateTotal(),
        items: [
          { name: pkg?.name || 'Custom Hamper', quantity: 1, price: selectedPackage || 0 },
          ...selectedItems.map(name => ({
            name,
            quantity: 1,
            price: personalItems.find(i => i.name === name)?.price || 0
          }))
        ],
        shippingAddress: {
          name: recipientName,
          address: formData.address,
          city: formData.city,
          pincode: formData.pincode,
          phone: formData.senderPhone,
        },
        deliveryDate: occasionDate,
        occasion: customOccasion || selectedOccasion,
        message: recipientMessage,
      };
      
      // Save order (email is sent automatically with fallback)
      const result = await saveOrder(orderData);
      
      setOrderNumber(newOrderNumber);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Order submission failed:', error);
      // Even if there's an error, show success to not block checkout
      const newOrderNumber = `#EVM${Date.now().toString().slice(-8)}`;
      setOrderNumber(newOrderNumber);
      setShowSuccessModal(true);
    } finally {
      setIsProcessing(false);
    }
  };

  const selectedPaymentMethod = paymentMethods.find(p => p.id === selectedPayment);

  const stepLabels = ["Package", "Occasion", "Relation", "Details", "Personalize", "Address", "Payment"];

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow">Step 1 of 7</span>
              <h2 className="font-serif text-3xl sm:text-4xl mt-4" style={{ color: '#5A4B54' }}>
                Choose Your Package
              </h2>
              <p className="text-base mt-3" style={{ color: '#5A4B54', opacity: 0.7 }}>
                Select the perfect hamper size for your gift
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {packages.map((p) => (
                <button
                  key={p.price}
                  onClick={() => handlePackageSelect(p.price)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                    selectedPackage === p.price 
                      ? 'border-[#8C7A95] bg-[rgba(140,122,149,0.08)]' 
                      : 'border-transparent bg-white hover:border-[rgba(140,122,149,0.3)]'
                  }`}
                  style={{ boxShadow: '0 2px 12px rgba(90, 75, 84, 0.06)' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-xl mb-1" style={{ color: '#5A4B54' }}>{p.name}</h3>
                      <p className="text-sm" style={{ color: '#5A4B54', opacity: 0.6 }}>{p.description}</p>
                    </div>
                    {selectedPackage === p.price && (
                      <div className="size-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8C7A95' }}>
                        <Check className="size-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl" style={{ color: '#8C7A95' }}>₹{p.price}</span>
                    <span className="text-sm" style={{ color: '#5A4B54', opacity: 0.5 }}>• Up to {p.maxItems} items</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow">Step 2 of 7</span>
              <h2 className="font-serif text-3xl sm:text-4xl mt-4" style={{ color: '#5A4B54' }}>
                What's the Occasion?
              </h2>
              <p className="text-base mt-3" style={{ color: '#5A4B54', opacity: 0.7 }}>
                Help us personalize your hamper for the special moment
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {occasions.map((occasion) => (
                <button
                  key={occasion}
                  onClick={() => setSelectedOccasion(occasion)}
                  className={`p-4 rounded-xl text-center transition-all duration-300 border-2 ${
                    selectedOccasion === occasion 
                      ? 'border-[#8C7A95] bg-[rgba(140,122,149,0.08)]' 
                      : 'border-transparent bg-white hover:border-[rgba(140,122,149,0.2)]'
                  }`}
                  style={{ boxShadow: '0 2px 8px rgba(90, 75, 84, 0.04)' }}
                >
                  <span className="text-sm font-medium" style={{ color: '#5A4B54' }}>{occasion}</span>
                </button>
              ))}
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>
                Or describe another occasion
              </label>
              <input
                type="text"
                value={customOccasion}
                onChange={(e) => {
                  setCustomOccasion(e.target.value);
                  if (e.target.value) setSelectedOccasion("Other");
                }}
                placeholder="e.g., Housewarming, Promotion"
                className="w-full px-5 py-4 rounded-xl border text-base"
                style={{ 
                  backgroundColor: '#FAF7F2',
                  borderColor: 'rgba(90, 75, 84, 0.15)',
                  color: '#5A4B54',
                  outline: 'none'
                }}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow">Step 3 of 7</span>
              <h2 className="font-serif text-3xl sm:text-4xl mt-4" style={{ color: '#5A4B54' }}>
                Who's It For?
              </h2>
              <p className="text-base mt-3" style={{ color: '#5A4B54', opacity: 0.7 }}>
                Help us curate the perfect selection
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {relations.map((relation) => (
                <button
                  key={relation}
                  onClick={() => setSelectedRelation(relation)}
                  className={`p-4 rounded-xl text-center transition-all duration-300 border-2 ${
                    selectedRelation === relation 
                      ? 'border-[#8C7A95] bg-[rgba(140,122,149,0.08)]' 
                      : 'border-transparent bg-white hover:border-[rgba(140,122,149,0.2)]'
                  }`}
                  style={{ boxShadow: '0 2px 8px rgba(90, 75, 84, 0.04)' }}
                >
                  <span className="text-sm font-medium" style={{ color: '#5A4B54' }}>{relation}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow">Step 4 of 7</span>
              <h2 className="font-serif text-3xl sm:text-4xl mt-4" style={{ color: '#5A4B54' }}>
                Recipient Details
              </h2>
              <p className="text-base mt-3" style={{ color: '#5A4B54', opacity: 0.7 }}>
                Tell us about the gift recipient
              </p>
            </div>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>
                  Recipient's Name *
                </label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Enter recipient's name"
                  className="w-full px-5 py-4 rounded-xl border text-base"
                  style={{ 
                    backgroundColor: '#FAF7F2',
                    borderColor: 'rgba(90, 75, 84, 0.15)',
                    color: '#5A4B54',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>
                  Occasion Date *
                </label>
                <input
                  type="date"
                  value={occasionDate}
                  onChange={(e) => setOccasionDate(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border text-base"
                  style={{ 
                    backgroundColor: '#FAF7F2',
                    borderColor: 'rgba(90, 75, 84, 0.15)',
                    color: '#5A4B54',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow">Step 5 of 7</span>
              <h2 className="font-serif text-3xl sm:text-4xl mt-4" style={{ color: '#5A4B54' }}>
                Add Personal Touches
              </h2>
              <p className="text-base mt-3" style={{ color: '#5A4B54', opacity: 0.7 }}>
                Select up to {pkg?.maxItems || 0} items to include in your hamper
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {personalItems.map((item) => {
                const isSelected = selectedItems.includes(item.name);
                const isDisabled = !isSelected && selectedItems.length >= (pkg?.maxItems || 0);
                
                return (
                  <button
                    key={item.name}
                    onClick={() => !isDisabled && toggleItem(item.name)}
                    disabled={isDisabled}
                    className={`p-5 rounded-2xl text-left transition-all duration-300 border-2 ${
                      isSelected 
                        ? 'border-[#8C7A95] bg-[rgba(140,122,149,0.08)]' 
                        : isDisabled
                        ? 'border-transparent bg-white opacity-50 cursor-not-allowed'
                        : 'border-transparent bg-white hover:border-[rgba(140,122,149,0.3)]'
                    }`}
                    style={{ boxShadow: '0 2px 8px rgba(90, 75, 84, 0.04)' }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      {isSelected && (
                        <div className="size-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8C7A95' }}>
                          <Check className="size-3 text-white" />
                        </div>
                      )}
                    </div>
                    <h4 className="font-medium mb-1" style={{ color: '#5A4B54' }}>{item.name}</h4>
                    <p className="text-xs mb-3" style={{ color: '#5A4B54', opacity: 0.6 }}>{item.description}</p>
                    <span className="font-serif text-lg" style={{ color: '#8C7A95' }}>+₹{item.price}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Upload images for selected items */}
            {selectedItems.filter(name => personalItems.find(i => i.name === name)?.hasImage).length > 0 && (
              <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: '#F3EEE8' }}>
                <h4 className="font-medium mb-4 flex items-center gap-2" style={{ color: '#5A4B54' }}>
                  <Upload className="size-4" />
                  Upload Images for Selected Items
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedItems
                    .filter(name => personalItems.find(i => i.name === name)?.hasImage)
                    .map(name => (
                      <div key={name} className="p-4 bg-white rounded-xl">
                        <p className="text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>{name}</p>
                        {uploadedImages[name] ? (
                          <div className="relative">
                            <img src={uploadedImages[name]} alt={name} className="w-full h-24 object-cover rounded-lg" />
                            <button
                              onClick={() => removeImage(name)}
                              className="absolute -top-2 -right-2 size-6 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: '#C17C74' }}
                            >
                              <X className="size-3 text-white" />
                            </button>
                          </div>
                        ) : (
                          <label className="flex items-center justify-center gap-2 py-3 border-2 border-dashed rounded-lg cursor-pointer" style={{ borderColor: 'rgba(90, 75, 84, 0.2)' }}>
                            <Upload className="size-4" style={{ color: '#5A4B54', opacity: 0.5 }} />
                            <span className="text-sm" style={{ color: '#5A4B54', opacity: 0.6 }}>Upload</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleImageUpload(name, e)}
                              ref={(el) => { fileInputRefs.current[name] = el; }}
                            />
                          </label>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}
            
            {/* Message */}
            <div className="mt-8">
              <label className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>
                Add a Message (Optional)
              </label>
              <textarea
                value={recipientMessage}
                onChange={(e) => setRecipientMessage(e.target.value)}
                placeholder="Write a heartfelt message for your recipient..."
                rows={4}
                className="w-full px-5 py-4 rounded-xl border text-base resize-none"
                style={{ 
                  backgroundColor: '#FAF7F2',
                  borderColor: 'rgba(90, 75, 84, 0.15)',
                  color: '#5A4B54',
                  outline: 'none'
                }}
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow">Step 6 of 7</span>
              <h2 className="font-serif text-3xl sm:text-4xl mt-4" style={{ color: '#5A4B54' }}>
                Delivery Information
              </h2>
              <p className="text-base mt-3" style={{ color: '#5A4B54', opacity: 0.7 }}>
                Where should we deliver your hamper?
              </p>
            </div>
            
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>Your Name *</label>
                  <input
                    type="text"
                    value={formData.senderName}
                    onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-xl border text-base"
                    style={{ backgroundColor: '#FAF7F2', borderColor: 'rgba(90, 75, 84, 0.15)', color: '#5A4B54', outline: 'none' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.senderPhone}
                    onChange={(e) => setFormData({ ...formData, senderPhone: e.target.value })}
                    placeholder="Enter phone number"
                    className="w-full px-5 py-4 rounded-xl border text-base"
                    style={{ backgroundColor: '#FAF7F2', borderColor: 'rgba(90, 75, 84, 0.15)', color: '#5A4B54', outline: 'none' }}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>Email Address *</label>
                <input
                  type="email"
                  value={formData.senderEmail}
                  onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-xl border text-base"
                  style={{ backgroundColor: '#FAF7F2', borderColor: 'rgba(90, 75, 84, 0.15)', color: '#5A4B54', outline: 'none' }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>Delivery Address *</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Enter complete delivery address"
                  rows={3}
                  className="w-full px-5 py-4 rounded-xl border text-base resize-none"
                  style={{ backgroundColor: '#FAF7F2', borderColor: 'rgba(90, 75, 84, 0.15)', color: '#5A4B54', outline: 'none' }}
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>City *</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Enter city"
                    className="w-full px-5 py-4 rounded-xl border text-base"
                    style={{ backgroundColor: '#FAF7F2', borderColor: 'rgba(90, 75, 84, 0.15)', color: '#5A4B54', outline: 'none' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>Pincode *</label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    placeholder="Enter pincode"
                    className="w-full px-5 py-4 rounded-xl border text-base"
                    style={{ backgroundColor: '#FAF7F2', borderColor: 'rgba(90, 75, 84, 0.15)', color: '#5A4B54', outline: 'none' }}
                  />
                </div>
              </div>
              
              {/* Delivery Options */}
              <div className="pt-4">
                <label className="block text-sm font-medium mb-3" style={{ color: '#5A4B54' }}>Delivery Speed</label>
                <div className="space-y-3">
                  {deliveryOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setDeliveryType(option.id as typeof deliveryType)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 flex items-center justify-between ${
                        deliveryType === option.id 
                          ? 'border-[#8C7A95] bg-[rgba(140,122,149,0.08)]' 
                          : 'border-transparent bg-white hover:border-[rgba(140,122,149,0.2)]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="size-5" style={{ color: '#8C7A95' }} />
                        <div>
                          <p className="font-medium" style={{ color: '#5A4B54' }}>{option.name}</p>
                          <p className="text-sm" style={{ color: '#5A4B54', opacity: 0.6 }}>{option.description}</p>
                        </div>
                      </div>
                      <span className="font-serif text-lg" style={{ color: '#8C7A95' }}>
                        {option.price === 0 ? 'FREE' : `₹${option.price}`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>Special Instructions (Optional)</label>
                <textarea
                  value={formData.specialInstructions}
                  onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                  placeholder="Any special delivery instructions..."
                  rows={2}
                  className="w-full px-5 py-4 rounded-xl border text-base resize-none"
                  style={{ backgroundColor: '#FAF7F2', borderColor: 'rgba(90, 75, 84, 0.15)', color: '#5A4B54', outline: 'none' }}
                />
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow">Step 7 of 7</span>
              <h2 className="font-serif text-3xl sm:text-4xl mt-4" style={{ color: '#5A4B54' }}>
                Select Payment Method
              </h2>
              <p className="text-base mt-3" style={{ color: '#5A4B54', opacity: 0.7 }}>
                Choose how you'd like to pay
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {paymentMethods.map((method) => {
                const IconComponent = method.icon;
                return (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`p-5 rounded-2xl text-left transition-all duration-300 border-2 flex items-center gap-4 ${
                      selectedPayment === method.id
                        ? 'border-[#8C7A95] bg-[rgba(140,122,149,0.08)]'
                        : 'border-transparent bg-white hover:border-[rgba(140,122,149,0.3)]'
                    }`}
                    style={{ boxShadow: '0 2px 12px rgba(90, 75, 84, 0.05)' }}
                  >
                    <div className="size-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(140, 122, 149, 0.12)' }}>
                      <IconComponent className="size-6" style={{ color: '#8C7A95' }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium" style={{ color: '#5A4B54' }}>{method.name}</span>
                        {selectedPayment === method.id && (
                          <Check className="size-5" style={{ color: '#8C7A95' }} />
                        )}
                      </div>
                      <p className="text-sm mt-1" style={{ color: '#5A4B54', opacity: 0.6 }}>{method.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {selectedPayment && (
              <div className="rounded-2xl p-6" style={{ backgroundColor: '#F3EEE8' }}>
                <h3 className="font-serif text-xl mb-5" style={{ color: '#5A4B54' }}>Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span style={{ color: '#5A4B54', opacity: 0.8 }}>{pkg?.name}</span>
                    <span style={{ color: '#5A4B54' }}>₹{selectedPackage}</span>
                  </div>
                  {selectedItems.length > 0 && (
                    <div className="flex justify-between">
                      <span style={{ color: '#5A4B54', opacity: 0.8 }}>Personal Items ({selectedItems.length})</span>
                      <span style={{ color: '#5A4B54' }}>₹{selectedItems.reduce((sum, name) => sum + (personalItems.find(i => i.name === name)?.price || 0), 0)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span style={{ color: '#5A4B54', opacity: 0.8 }}>Delivery</span>
                    <span style={{ color: '#8C7A95' }}>{selectedDelivery.price === 0 ? 'FREE' : `₹${selectedDelivery.price}`}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t" style={{ borderColor: 'rgba(90, 75, 84, 0.1)' }}>
                    <span className="font-medium" style={{ color: '#5A4B54' }}>Total</span>
                    <span className="font-serif text-2xl" style={{ color: '#8C7A95' }}>₹{calculateTotal()}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <LuxuryHeader />
      
      <main className="pt-28 pb-20">
        {/* Progress Bar */}
        <div className="py-6 border-b" style={{ backgroundColor: '#FAF7F2', borderColor: 'rgba(90, 75, 84, 0.08)' }}>
          <div className="container-evermaze">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[1, 2, 3, 4, 5, 6, 7].map((s) => (
                <div key={s} className="flex items-center flex-1 last:flex-none">
                  <button
                    onClick={() => s < step && setStep(s)}
                    className={`size-10 sm:size-11 rounded-full flex items-center justify-center font-medium text-sm transition-all shrink-0 ${
                      step >= s 
                        ? '' 
                        : ''
                    }`}
                    style={{
                      backgroundColor: step >= s ? '#8C7A95' : '#F3EEE8',
                      color: step >= s ? 'white' : '#5A4B54',
                      opacity: step >= s ? '1' : '0.5',
                      boxShadow: step >= s ? '0 2px 8px rgba(140, 122, 149, 0.3)' : 'none',
                    }}
                  >
                    {step > s ? <Check className="size-5" /> : s}
                  </button>
                  {s < 7 && (
                    <div 
                      className="h-[2px] mx-1 sm:mx-2 flex-1 rounded-full"
                      style={{ backgroundColor: step > s ? '#8C7A95' : '#F3EEE8' }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between max-w-[calc(100%-3rem)] mx-auto mt-3 text-xs" style={{ color: '#5A4B54', opacity: 0.6 }}>
              {stepLabels.map((label, i) => (
                <span key={label} className={i + 1 === step ? 'opacity-100 font-medium' : ''}>{label}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="py-12 lg:py-16">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="container-evermaze">
          <div className="max-w-4xl mx-auto flex justify-between items-center pt-6 border-t" style={{ borderColor: 'rgba(90, 75, 84, 0.08)' }}>
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="btn-outline"
              >
                Back
              </button>
            ) : (
              <Link to="/shop" className="btn-ghost">
                Cancel
              </Link>
            )}
            
            {step < 7 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight className="size-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || isProcessing}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <span className="animate-spin">⟳</span> Processing...
                  </>
                ) : (
                  <>
                    Place Order <Check className="size-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Order Success Modal */}
      <OrderSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        orderNumber={orderNumber}
        email={formData.senderEmail}
      />

      <LuxuryFooter />
    </div>
  );
}
