import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Heart, ShoppingBag, Lock, Truck, Shield, CreditCard, Check, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout | Evermaze" },
      { name: "description", content: "Complete your Evermaze order securely." },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    giftMessage: "",
    sameAsBilling: true,
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Sample cart items
  const cartItems = [
    { id: 1, name: "Birthday Bliss Hamper", price: 999, qty: 1, img: "hamper-1.jpg" },
    { id: 2, name: "Self Care Retreat Box", price: 799, qty: 1, img: "hamper-3.jpg" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--primary-bg)' }}>
        <div className="max-w-lg w-full text-center">
          <div className="size-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--champagne)' }}>
            <Check className="size-10" style={{ color: 'var(--heading-color)' }} />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: 'var(--heading-color)' }}>Thank You!</h1>
          <p className="text-lg mb-2" style={{ color: 'var(--body-text)' }}>Your order has been placed successfully.</p>
          <p className="mb-8" style={{ color: 'var(--body-text)' }}>Order #EV2026XXXX - A confirmation email has been sent to you.</p>
          <div className="p-6 rounded-2xl mb-8" style={{ backgroundColor: 'var(--card-bg)' }}>
            <p className="text-sm mb-4" style={{ color: 'var(--body-text)' }}>Your gift will be dispatched soon, packed with love and care.</p>
            <div className="flex items-center justify-center gap-2 text-sm" style={{ color: 'var(--dusty-lavender)' }}>
              <Truck className="size-4" />
              <span>Expected delivery: 3-5 business days</span>
            </div>
          </div>
          <Link to="/" className="btn-primary inline-flex">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--primary-bg)' }}>
      {/* Header */}
      <header className="bg-card border-b" style={{ borderColor: 'var(--border-color)' }}>
        <div className="container-evermaze py-4 flex items-center justify-between">
          <Link to="/cart" className="flex items-center gap-2 text-sm transition-colors hover:opacity-70" style={{ color: 'var(--heading-color)' }}>
            <ArrowLeft className="size-4" />
            Back to Cart
          </Link>
          <Link to="/" className="flex flex-col items-center leading-none">
            <span className="font-serif text-2xl tracking-[0.35em] font-semibold" style={{ color: 'var(--heading-color)' }}>EVERMAZE</span>
            <span className="mt-0.5 text-[9px] tracking-[0.3em] uppercase" style={{ color: 'var(--heading-color)', opacity: 0.7 }}>JUST FOR YOU</span>
          </Link>
          <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--body-text)' }}>
            <Lock className="size-3" />
            <span>Secure Checkout</span>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="py-4 border-b" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
        <div className="container-evermaze">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {['Contact', 'Shipping', 'Payment'].map((label, index) => (
              <div key={label} className="flex items-center gap-2">
                <div
                  className={`size-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    step > index + 1 ? 'bg-green-500 text-white' : step === index + 1 ? 'text-white' : ''
                  }`}
                  style={step === index + 1 ? { backgroundColor: 'var(--dusty-lavender)' } : {}}
                >
                  {step > index + 1 ? <Check className="size-4" /> : index + 1}
                </div>
                <span
                  className="text-sm font-medium hidden md:inline"
                  style={{ color: step === index + 1 ? 'var(--heading-color)' : 'var(--body-text)' }}
                >
                  {label}
                </span>
                {index < 2 && <ChevronDown className="size-4 hidden md:block" style={{ color: 'var(--body-text)' }} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container-evermaze">
          <div className="grid lg:grid-cols-[1fr,400px] gap-8 lg:gap-12">
            {/* Form Section */}
            <div>
              {/* Step 1: Contact */}
              {step === 1 && (
                <div className="bg-card rounded-3xl p-6 md:p-8" style={{ backgroundColor: 'var(--card-bg)' }}>
                  <h2 className="font-serif text-2xl mb-6" style={{ color: 'var(--heading-color)' }}>Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3.5 rounded-xl border text-sm"
                        style={{ backgroundColor: 'var(--secondary-bg)', borderColor: 'var(--border-color)', color: 'var(--heading-color)' }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Priya"
                          className="w-full px-4 py-3.5 rounded-xl border text-sm"
                          style={{ backgroundColor: 'var(--secondary-bg)', borderColor: 'var(--border-color)', color: 'var(--heading-color)' }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Sharma"
                          className="w-full px-4 py-3.5 rounded-xl border text-sm"
                          style={{ backgroundColor: 'var(--secondary-bg)', borderColor: 'var(--border-color)', color: 'var(--heading-color)' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl border text-sm"
                        style={{ backgroundColor: 'var(--secondary-bg)', borderColor: 'var(--border-color)', color: 'var(--heading-color)' }}
                      />
                    </div>
                  </div>
                  <button onClick={() => setStep(2)} className="btn-primary w-full mt-8">
                    Continue to Shipping
                  </button>
                </div>
              )}

              {/* Step 2: Shipping */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="bg-card rounded-3xl p-6 md:p-8" style={{ backgroundColor: 'var(--card-bg)' }}>
                    <h2 className="font-serif text-2xl mb-6" style={{ color: 'var(--heading-color)' }}>Shipping Address</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Street Address</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="123, MG Road, Sector 15"
                          className="w-full px-4 py-3.5 rounded-xl border text-sm"
                          style={{ backgroundColor: 'var(--secondary-bg)', borderColor: 'var(--border-color)', color: 'var(--heading-color)' }}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">City</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Gurugram"
                            className="w-full px-4 py-3.5 rounded-xl border text-sm"
                            style={{ backgroundColor: 'var(--secondary-bg)', borderColor: 'var(--border-color)', color: 'var(--heading-color)' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">State</label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder="Haryana"
                            className="w-full px-4 py-3.5 rounded-xl border text-sm"
                            style={{ backgroundColor: 'var(--secondary-bg)', borderColor: 'var(--border-color)', color: 'var(--heading-color)' }}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">PIN Code</label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          placeholder="122001"
                          className="w-full px-4 py-3.5 rounded-xl border text-sm"
                          style={{ backgroundColor: 'var(--secondary-bg)', borderColor: 'var(--border-color)', color: 'var(--heading-color)' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-3xl p-6 md:p-8" style={{ backgroundColor: 'var(--card-bg)' }}>
                    <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--heading-color)' }}>Gift Message (Optional)</h2>
                    <p className="text-sm mb-4 opacity-70">Add a personal touch with a handwritten note</p>
                    <textarea
                      name="giftMessage"
                      value={formData.giftMessage}
                      onChange={handleInputChange}
                      placeholder="Write your heartfelt message here..."
                      rows={4}
                      className="w-full px-4 py-3.5 rounded-xl border text-sm resize-none"
                      style={{ backgroundColor: 'var(--secondary-bg)', borderColor: 'var(--border-color)', color: 'var(--heading-color)' }}
                    />
                  </div>

                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="btn-outline flex-1">
                      Back
                    </button>
                    <button onClick={() => setStep(3)} className="btn-primary flex-1">
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="bg-card rounded-3xl p-6 md:p-8" style={{ backgroundColor: 'var(--card-bg)' }}>
                    <h2 className="font-serif text-2xl mb-6" style={{ color: 'var(--heading-color)' }}>Payment Method</h2>
                    
                    <div className="space-y-3">
                      {['Credit/Debit Card', 'UPI', 'Net Banking', 'Cash on Delivery'].map((method) => (
                        <label
                          key={method}
                          className="flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all hover:border-opacity-50"
                          style={{ backgroundColor: 'var(--secondary-bg)', borderColor: 'var(--border-color)' }}
                        >
                          <input type="radio" name="payment" value={method} className="accent-[var(--dusty-lavender)]" />
                          <CreditCard className="size-5" style={{ color: 'var(--dusty-lavender)' }} />
                          <span className="font-medium">{method}</span>
                        </label>
                      ))}
                    </div>

                    <div className="mt-6 p-6 rounded-xl" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                      <div className="flex items-center gap-2 mb-4">
                        <CreditCard className="size-5" style={{ color: 'var(--dusty-lavender)' }} />
                        <span className="font-medium">Card Details</span>
                      </div>
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Card Number"
                          className="w-full px-4 py-3.5 rounded-xl border text-sm"
                          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--heading-color)' }}
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3.5 rounded-xl border text-sm"
                            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--heading-color)' }}
                          />
                          <input
                            type="text"
                            placeholder="CVV"
                            className="w-full px-4 py-3.5 rounded-xl border text-sm"
                            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--heading-color)' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button onClick={() => setStep(2)} className="btn-outline flex-1">
                      Back
                    </button>
                    <button onClick={handlePlaceOrder} className="btn-primary flex-1">
                      <Lock className="size-4" />
                      Place Order • ₹{total}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm" style={{ color: 'var(--body-text)' }}>
                    <Shield className="size-4" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-card rounded-3xl p-6 md:p-8 sticky top-24" style={{ backgroundColor: 'var(--card-bg)' }}>
                <h3 className="font-serif text-xl mb-6" style={{ color: 'var(--heading-color)' }}>Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="size-20 rounded-xl overflow-hidden shrink-0" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                        <div className="size-full bg-gradient-to-br from-[#E8D5C4] to-[#D4C4B0]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate" style={{ color: 'var(--heading-color)' }}>{item.name}</h4>
                        <p className="text-sm opacity-70">Qty: {item.qty}</p>
                        <p className="font-serif mt-1">₹{item.price * item.qty}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-3" style={{ borderColor: 'var(--border-color)' }}>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: 'var(--body-text)' }}>Subtotal</span>
                    <span style={{ color: 'var(--heading-color)' }}>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: 'var(--body-text)' }}>Shipping</span>
                    <span style={{ color: shipping === 0 ? 'var(--champagne)' : 'var(--heading-color)' }}>
                      {shipping === 0 ? 'Free' : `₹${shipping}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs" style={{ color: 'var(--body-text)' }}>
                      Add ₹{999 - subtotal} more for free shipping!
                    </p>
                  )}
                </div>

                <div className="border-t mt-4 pt-4" style={{ borderColor: 'var(--border-color)' }}>
                  <div className="flex justify-between">
                    <span className="font-serif text-lg" style={{ color: 'var(--heading-color)' }}>Total</span>
                    <span className="font-serif text-lg" style={{ color: 'var(--heading-color)' }}>₹{total}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                  <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--body-text)' }}>
                    <Truck className="size-4" />
                    <span>Free shipping on orders above ₹999</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs mt-2" style={{ color: 'var(--body-text)' }}>
                    <Heart className="size-4" />
                    <span>Handwritten gift note included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
        <div className="container-evermaze text-center">
          <div className="flex items-center justify-center gap-6 text-sm" style={{ color: 'var(--body-text)' }}>
            <Link to="/privacy-policy" className="hover:opacity-70">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:opacity-70">Terms</Link>
            <Link to="/shipping-policy" className="hover:opacity-70">Shipping</Link>
            <Link to="/refund-policy" className="hover:opacity-70">Refunds</Link>
          </div>
          <p className="mt-4 text-xs" style={{ color: 'var(--body-text)' }}>© 2026 Evermaze. Made with love.</p>
        </div>
      </footer>
    </div>
  );
}
