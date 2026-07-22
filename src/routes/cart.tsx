import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Heart, X, Plus, Minus, Truck, Sparkles, Shield, CreditCard, Smartphone, Banknote } from "lucide-react";
import { useState } from "react";

import heroHamper from "@/assets/hero-hamper.jpg";
import hamper5 from "@/assets/hamper-5.jpg";

import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";
import { ConfirmationModal } from "@/components/ConfirmationModal";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Shopping Cart | Evermaze" },
      { name: "description", content: "Review your cart and checkout your personalized gift hampers." },
    ],
  }),
  component: CartPage,
});

const cartItems = [
  { id: 1, name: "The Sabrina Bloom", price: 1899, img: heroHamper, qty: 1, tag: "Classic Hamper" },
  { id: 2, name: "Rose Ritual Box", price: 1499, img: hamper5, qty: 1, tag: "Signature Hamper" },
];

const paymentMethods = [
  { id: "upi", name: "UPI", icon: Smartphone, description: "PhonePe / Google Pay / Paytm" },
  { id: "card", name: "Card", icon: CreditCard, description: "Visa, Mastercard" },
  { id: "cod", name: "Cash on Delivery", icon: Banknote, description: "Pay when you receive" },
];

function CartPage() {
  const [items, setItems] = useState(cartItems);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 1499 ? 0 : 99;
  const total = subtotal + shipping;

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handlePlaceOrder = () => {
    const newOrderNumber = `#EVM${Date.now().toString().slice(-8)}`;
    setOrderNumber(newOrderNumber);
    setShowCheckout(false);
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen">
      <LuxuryHeader />
      
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section 
          className="py-12 lg:py-16"
          style={{ backgroundColor: '#F3EEE8' }}
        >
          <div className="container-evermaze">
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="size-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(140, 122, 149, 0.15)' }}
              >
                <ShoppingBag className="size-5" style={{ color: '#8C7A95' }} />
              </div>
              <div>
                <h1 
                  className="font-serif text-3xl sm:text-4xl"
                  style={{ color: '#5A4B54' }}
                >
                  Shopping Cart
                </h1>
                <p className="text-sm" style={{ color: '#5A4B54', opacity: 0.7 }}>
                  {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-8 lg:py-12" style={{ backgroundColor: '#FAF7F2' }}>
          <div className="container-evermaze">
            {items.length === 0 ? (
              /* Empty State */
              <div 
                className="max-w-lg mx-auto text-center py-16 px-6 rounded-3xl"
                style={{ backgroundColor: 'white', boxShadow: '0 4px 24px rgba(90, 75, 84, 0.06)' }}
              >
                <div 
                  className="size-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(140, 122, 149, 0.1)' }}
                >
                  <ShoppingBag className="size-10" style={{ color: '#8C7A95', opacity: 0.6 }} />
                </div>
                <h2 className="font-serif text-2xl mb-3" style={{ color: '#5A4B54' }}>
                  Your cart is empty
                </h2>
                <p className="mb-8" style={{ color: '#5A4B54', opacity: 0.7 }}>
                  Add some beautiful gift hampers to get started
                </p>
                <Link to="/shop" className="btn-primary">
                  Shop Now <ArrowLeft className="size-4 rotate-180" />
                </Link>
              </div>
            ) : !showCheckout ? (
              /* Cart Items */
              <div className="grid lg:grid-cols-[1fr_420px] gap-8">
                <div>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div 
                        key={item.id} 
                        className="bg-white rounded-2xl p-4 sm:p-6 transition-all duration-300"
                        style={{ boxShadow: '0 2px 12px rgba(90, 75, 84, 0.04)' }}
                      >
                        <div className="flex gap-4 sm:gap-6">
                          <div 
                            className="w-24 sm:w-32 h-24 sm:h-32 rounded-xl overflow-hidden shrink-0"
                            style={{ backgroundColor: '#F3EEE8' }}
                          >
                            <img src={item.img} alt={item.name} className="size-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <span 
                                  className="text-xs px-2 py-1 rounded-full mb-2 inline-block"
                                  style={{ backgroundColor: 'rgba(140, 122, 149, 0.1)', color: '#8C7A95' }}
                                >
                                  {item.tag}
                                </span>
                                <h3 className="font-serif text-lg sm:text-xl" style={{ color: '#5A4B54' }}>
                                  {item.name}
                                </h3>
                                <p className="text-sm mt-1" style={{ color: '#5A4B54', opacity: 0.6 }}>
                                  Personalized Gift Hamper
                                </p>
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-2 rounded-full transition-colors hover:bg-[rgba(193,124,116,0.1)]"
                                style={{ color: '#5A4B54', opacity: 0.5 }}
                                aria-label="Remove item"
                              >
                                <X className="size-5" />
                              </button>
                            </div>
                            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => updateQty(item.id, -1)}
                                  className="size-8 sm:size-9 rounded-full flex items-center justify-center transition-all"
                                  style={{ 
                                    backgroundColor: '#FAF7F2',
                                    border: '1px solid rgba(90, 75, 84, 0.12)'
                                  }}
                                >
                                  <Minus className="size-4" style={{ color: '#5A4B54' }} />
                                </button>
                                <span className="w-8 text-center font-medium" style={{ color: '#5A4B54' }}>
                                  {item.qty}
                                </span>
                                <button
                                  onClick={() => updateQty(item.id, 1)}
                                  className="size-8 sm:size-9 rounded-full flex items-center justify-center transition-all"
                                  style={{ 
                                    backgroundColor: '#FAF7F2',
                                    border: '1px solid rgba(90, 75, 84, 0.12)'
                                  }}
                                >
                                  <Plus className="size-4" style={{ color: '#5A4B54' }} />
                                </button>
                              </div>
                              <p className="font-serif text-xl" style={{ color: '#8C7A95' }}>
                                ₹{(item.price * item.qty).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-medium transition-colors" style={{ color: '#8C7A95' }}>
                      <ArrowLeft className="size-4" />
                      Continue Shopping
                    </Link>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:sticky lg:top-28 h-fit">
                  <div 
                    className="bg-white rounded-2xl p-6"
                    style={{ boxShadow: '0 4px 24px rgba(90, 75, 84, 0.06)' }}
                  >
                    <h2 className="font-serif text-2xl mb-6" style={{ color: '#5A4B54' }}>
                      Order Summary
                    </h2>
                    
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between">
                        <span style={{ color: '#5A4B54', opacity: 0.7 }}>Subtotal</span>
                        <span style={{ color: '#5A4B54' }}>₹{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: '#5A4B54', opacity: 0.7 }}>Shipping</span>
                        <span style={{ color: shipping === 0 ? '#7D9A78' : '#5A4B54' }}>
                          {shipping === 0 ? 'FREE' : `₹${shipping}`}
                        </span>
                      </div>
                      {shipping > 0 && (
                        <div 
                          className="p-3 rounded-xl text-xs"
                          style={{ backgroundColor: 'rgba(140, 122, 149, 0.08)', color: '#5A4B54' }}
                        >
                          Add ₹{(1499 - subtotal).toLocaleString()} more for free shipping!
                        </div>
                      )}
                      <div className="pt-4 border-t" style={{ borderColor: 'rgba(90, 75, 84, 0.08)' }}>
                        <div className="flex justify-between">
                          <span className="font-medium" style={{ color: '#5A4B54' }}>Total</span>
                          <span className="font-serif text-2xl" style={{ color: '#8C7A95' }}>₹{total.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => setShowCheckout(true)}
                      className="btn-primary w-full mt-6"
                    >
                      Proceed to Checkout
                    </button>

                    <div className="mt-6 space-y-3">
                      {[
                        { icon: Truck, text: "Free shipping on orders above ₹1499" },
                        { icon: Sparkles, text: "Handpacked with love" },
                        { icon: Shield, text: "Secure checkout" },
                      ].map(({ icon: Icon, text }) => (
                        <div 
                          key={text}
                          className="flex items-center gap-3 text-xs"
                          style={{ color: '#5A4B54', opacity: 0.6 }}
                        >
                          <Icon className="size-4" />
                          <span>{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Checkout */
              <div className="max-w-xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-2xl" style={{ color: '#5A4B54' }}>
                    Select Payment Method
                  </h2>
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="btn-ghost"
                  >
                    Back to Cart
                  </button>
                </div>
                
                <div className="space-y-4 mb-8">
                  {paymentMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <button
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`w-full p-5 rounded-2xl text-left transition-all duration-300 border-2 flex items-center gap-4 ${
                          selectedPayment === method.id
                            ? 'border-[#8C7A95] bg-[rgba(140,122,149,0.08)]'
                            : 'border-transparent bg-white hover:border-[rgba(140,122,149,0.3)]'
                        }`}
                        style={{ boxShadow: '0 2px 12px rgba(90, 75, 84, 0.04)' }}
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

                <div className="rounded-2xl p-6 mb-8" style={{ backgroundColor: '#F3EEE8' }}>
                  <div className="flex justify-between mb-3">
                    <span style={{ color: '#5A4B54', opacity: 0.7 }}>Total</span>
                    <span className="font-serif text-2xl" style={{ color: '#8C7A95' }}>₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={!selectedPayment}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Place Order
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Success Modal */}
      <ConfirmationModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          setItems([]);
        }}
        type="success"
        icon="party"
        title="Order Received!"
        message="Thank you for choosing Evermaze. We've received your order and are preparing your personalized hamper with care."
        confirmText="Continue Shopping"
        orderNumber={orderNumber}
        additionalInfo={
          <p className="text-sm" style={{ color: '#5A4B54', opacity: 0.7 }}>
            You'll receive an order confirmation via email shortly.
          </p>
        }
      />

      <LuxuryFooter />
    </div>
  );
}
