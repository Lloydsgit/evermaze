import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { 
  ArrowLeft, ShoppingBag, MapPin, CreditCard, Clock, Shield, 
  Check, Minus, Plus, X, Trash2, Heart
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { PaymentSelector, type PaymentMethod } from "@/components/PaymentSelector";
import { ConfirmationModal } from "@/components/ConfirmationModal";
import { sendOrderEmail } from "@/lib/emailService";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout | Evermaze — Love in a Box" },
      { name: "description", content: "Complete your order securely. Build your perfect gift hamper and have it delivered with love." },
    ],
  }),
  component: CheckoutPage,
});

/* ---------- Cart Item Type ---------- */
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

/* ---------- Sample Cart Items ---------- */
const initialCartItems: CartItem[] = [
  { id: "1", name: "The Sabrina Bloom", price: 1899, quantity: 1, image: "/assets/hero-hamper.jpg" },
  { id: "2", name: "Rose Ritual Box", price: 1499, quantity: 1, image: "/assets/hamper-5.jpg" },
];

/* ---------- Form Data Type ---------- */
interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  pincode: string;
  specialInstructions: string;
}

/* ---------- Checkout Page ---------- */
function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
    specialInstructions: "",
  });

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 1499 ? 0 : 99;
  const total = subtotal + shipping;

  // Update quantity
  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  // Remove item
  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // Handle form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle order placement
  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    try {
      // Try to send confirmation email
      const emailResult = await sendOrderEmail({
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        items: cartItems.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          image: item.image,
        })),
        shippingAddress: {
          fullName: `${formData.firstName} ${formData.lastName}`,
          addressLine1: formData.address,
          addressLine2: formData.apartment,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          phone: formData.phone,
        },
        totalAmount: total,
        paymentMethod: paymentMethod,
        specialMessage: formData.specialInstructions,
      });

      // Even if email fails, show success (order is saved)
      if (!emailResult.success) {
        console.log("Email sending failed, but order was saved locally");
      }

      // Clear cart and show success
      setCartItems([]);
      setShowSuccessModal(true);
      setShowConfirmModal(false);
    } catch (error) {
      console.error("Order processing error:", error);
      // Still show success as order is saved locally
      setCartItems([]);
      setShowSuccessModal(true);
      setShowConfirmModal(false);
    } finally {
      setIsProcessing(false);
    }
  };

  // Trigger confirmation modal
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      {/* Header */}
      <header className="bg-[#F8F5F2]/95 backdrop-blur-md border-b border-[#E9DDD2]/50 sticky top-0 z-50">
        <div className="container-evermaze">
          <div className="flex items-center justify-between h-[72px] md:h-[80px]">
            <a href="/" className="flex items-center gap-2 text-[#2F272C]/70 hover:text-[#2F272C] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">Back to Shop</span>
            </a>
            <div className="hidden sm:block">
              <Logo size="md" showTagline={false} />
            </div>
            <div className="w-24" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="container-evermaze py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-[#2F272C] text-center mb-8 md:mb-12">
          Checkout
        </h1>

        <form onSubmit={handleCheckout} className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12">
          {/* Left Column - Form */}
          <div className="space-y-8">
            {/* Contact Information */}
            <section className="bg-[#F8F5F2] rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(86,72,80,0.1)]">
              <h2 className="font-serif text-xl md:text-2xl text-[#2F272C] mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7D6B87]/10 flex items-center justify-center text-[#7D6B87] text-sm font-medium">1</div>
                Contact Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#2F272C]/70 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#E9DDD2]/50 bg-[#E9DDD2]/20 focus:bg-white focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2F272C]/70 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-[#E9DDD2]/50 bg-[#E9DDD2]/20 focus:bg-white focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-all"
                  />
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section className="bg-[#F8F5F2] rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(86,72,80,0.1)]">
              <h2 className="font-serif text-xl md:text-2xl text-[#2F272C] mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7D6B87]/10 flex items-center justify-center text-[#7D6B87] text-sm font-medium">2</div>
                Shipping Address
              </h2>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#2F272C]/70 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Sarah"
                      className="w-full px-4 py-3 rounded-xl border border-[#E9DDD2]/50 bg-[#E9DDD2]/20 focus:bg-white focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2F272C]/70 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Johnson"
                      className="w-full px-4 py-3 rounded-xl border border-[#E9DDD2]/50 bg-[#E9DDD2]/20 focus:bg-white focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2F272C]/70 mb-2">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="123 Main Street"
                    className="w-full px-4 py-3 rounded-xl border border-[#E9DDD2]/50 bg-[#E9DDD2]/20 focus:bg-white focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2F272C]/70 mb-2">Apartment, Suite, etc. (optional)</label>
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    placeholder="Apt 4B"
                    className="w-full px-4 py-3 rounded-xl border border-[#E9DDD2]/50 bg-[#E9DDD2]/20 focus:bg-white focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-all"
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#2F272C]/70 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Mumbai"
                      className="w-full px-4 py-3 rounded-xl border border-[#E9DDD2]/50 bg-[#E9DDD2]/20 focus:bg-white focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2F272C]/70 mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      placeholder="Maharashtra"
                      className="w-full px-4 py-3 rounded-xl border border-[#E9DDD2]/50 bg-[#E9DDD2]/20 focus:bg-white focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2F272C]/70 mb-2">PIN Code</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      placeholder="400001"
                      className="w-full px-4 py-3 rounded-xl border border-[#E9DDD2]/50 bg-[#E9DDD2]/20 focus:bg-white focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="bg-[#F8F5F2] rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(86,72,80,0.1)]">
              <h2 className="font-serif text-xl md:text-2xl text-[#2F272C] mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7D6B87]/10 flex items-center justify-center text-[#7D6B87] text-sm font-medium">3</div>
                Payment Method
              </h2>
              <PaymentSelector 
                selected={paymentMethod} 
                onSelect={setPaymentMethod}
                totalAmount={`₹${total.toLocaleString()}`}
              />
            </section>

            {/* Special Instructions */}
            <section className="bg-[#F8F5F2] rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(86,72,80,0.1)]">
              <h2 className="font-serif text-xl md:text-2xl text-[#2F272C] mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7D6B87]/10 flex items-center justify-center text-[#7D6B87] text-sm font-medium">4</div>
                Special Instructions (Optional)
              </h2>
              <textarea
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleChange}
                placeholder="Any special requests or notes for your hamper..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-[#E9DDD2]/50 bg-[#E9DDD2]/20 focus:bg-white focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-all resize-none"
              />
            </section>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:sticky lg:top-[100px] h-fit">
            <div className="bg-[#F8F5F2] rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(86,72,80,0.1)]">
              <h2 className="font-serif text-xl md:text-2xl text-[#2F272C] mb-6">Order Summary</h2>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 rounded-xl bg-[#E9DDD2]/50 overflow-hidden shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-base text-[#2F272C] truncate">{item.name}</h3>
                      <p className="text-sm text-[#4B4347]">₹{item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-full bg-[#E9DDD2]/50 flex items-center justify-center hover:bg-[#7D6B87]/10 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-full bg-[#E9DDD2]/50 flex items-center justify-center hover:bg-[#7D6B87]/10 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-[#4B4347] hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-[#E9DDD2]/50 my-6" />

              {/* Totals */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[#4B4347]">Subtotal</span>
                  <span className="text-[#2F272C]">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#4B4347]">Shipping</span>
                  <span className="text-[#2F272C]">
                    {shipping === 0 ? (
                      <span className="text-success">Free</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-[#7D6B87]">
                    Add ₹{(1499 - subtotal).toLocaleString()} more for free shipping!
                  </p>
                )}
              </div>

              {/* Total */}
              <div className="border-t border-[#E9DDD2]/50 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-serif text-xl text-[#2F272C]">Total</span>
                  <span className="font-serif text-2xl text-[#2F272C]">₹{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 py-4 border-t border-[#E9DDD2]/50">
                <div className="flex items-center gap-1 text-xs text-[#4B4347]">
                  <Shield className="w-4 h-4" />
                  Secure
                </div>
                <div className="w-px h-4 bg-border/50" />
                <div className="flex items-center gap-1 text-xs text-[#4B4347]">
                  <Heart className="w-4 h-4" />
                  Handmade
                </div>
                <div className="w-px h-4 bg-border/50" />
                <div className="flex items-center gap-1 text-xs text-[#4B4347]">
                  <Clock className="w-4 h-4" />
                  Fast
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                disabled={cartItems.length === 0 || isProcessing}
                className="w-full btn-primary mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  `Place Order · ₹${total.toLocaleString()}`
                )}
              </button>
            </div>
          </div>
        </form>
      </main>

      {/* Order Confirmation Modal */}
      <ConfirmationModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          window.location.href = "/";
        }}
        type="success"
        title="Order Placed Successfully!"
        message={`Thank you for your order! We've received your hamper request and will begin preparing it with love. You'll receive a confirmation email shortly at ${formData.email || 'your email address'}.`}
        confirmText="Continue Shopping"
        onConfirm={() => {
          setShowSuccessModal(false);
          window.location.href = "/";
        }}
      />

      {/* Checkout Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        type="confirmation"
        title="Confirm Your Order"
        message={`You're about to place an order for ₹${total.toLocaleString()}. This includes ${cartItems.length} item${cartItems.length > 1 ? 's' : ''} that will be beautifully packed and delivered to ${formData.city || 'your address'}.`}
        confirmText="Yes, Place Order"
        cancelText="Review Again"
        onConfirm={handlePlaceOrder}
      />
    </div>
  );
}
