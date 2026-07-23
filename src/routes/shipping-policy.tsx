import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Heart, ShoppingBag, Truck, Clock, MapPin, Package } from "lucide-react";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({
    meta: [
      { title: "Shipping Policy | Evermaze" },
      { name: "description", content: "Evermaze Shipping Policy - Free shipping details, delivery times, and order tracking information." },
    ],
  }),
  component: ShippingPolicyPage,
});

function ShippingPolicyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--primary-bg)' }}>
      {/* Header */}
      <header className="bg-card border-b" style={{ borderColor: 'var(--border-color)' }}>
        <div className="container-evermaze py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm transition-colors hover:opacity-70" style={{ color: 'var(--heading-color)' }}>
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
          <Link to="/" className="flex flex-col items-center leading-none">
            <span className="font-serif text-2xl tracking-[0.35em] font-semibold" style={{ color: 'var(--heading-color)' }}>EVERMAZE</span>
            <span className="mt-0.5 text-[9px] tracking-[0.3em] uppercase" style={{ color: 'var(--heading-color)', opacity: 0.7 }}>JUST FOR YOU</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/wishlist" aria-label="Wishlist" style={{ color: 'var(--heading-color)' }} className="p-2">
              <Heart className="size-[18px]" />
            </Link>
            <Link to="/cart" aria-label="Cart" style={{ color: 'var(--heading-color)' }} className="relative p-2">
              <ShoppingBag className="size-[18px]" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--dusty-lavender)' }}>
        <div className="container-evermaze text-center">
          <span className="text-[0.7rem] tracking-[0.32em] uppercase text-white/80">Delivered with care</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white">Shipping Policy</h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">How we get your thoughtful gifts to their destination</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container-evermaze max-w-3xl">
          <div className="bg-card rounded-3xl p-8 md:p-12" style={{ backgroundColor: 'var(--card-bg)' }}>
            {/* Free Shipping Highlight */}
            <div className="p-6 rounded-2xl mb-10 text-center" style={{ backgroundColor: 'var(--champagne)' }}>
              <Truck className="size-10 mx-auto mb-3" style={{ color: 'var(--heading-color)' }} />
              <h3 className="font-serif text-2xl mb-2" style={{ color: 'var(--heading-color)' }}>Free Shipping</h3>
              <p className="text-lg" style={{ color: 'var(--heading-color)' }}>On all orders above ₹999</p>
            </div>

            <div className="prose prose-lg max-w-none" style={{ color: 'var(--body-text)' }}>
              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>1. Delivery Options</h2>
              
              <div className="space-y-6 mt-6">
                <div className="flex gap-4 p-6 rounded-2xl" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                  <Clock className="size-6 shrink-0" style={{ color: 'var(--dusty-lavender)' }} />
                  <div>
                    <h4 className="font-medium mb-1">Same-Day Dispatch</h4>
                    <p className="text-sm opacity-80">Orders placed before 2 PM are dispatched the same day</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 rounded-2xl" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                  <Truck className="size-6 shrink-0" style={{ color: 'var(--dusty-lavender)' }} />
                  <div>
                    <h4 className="font-medium mb-1">Standard Delivery</h4>
                    <p className="text-sm opacity-80">3-5 business days across major cities in India</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 rounded-2xl" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                  <Package className="size-6 shrink-0" style={{ color: 'var(--dusty-lavender)' }} />
                  <div>
                    <h4 className="font-medium mb-1">Express Delivery</h4>
                    <p className="text-sm opacity-80">Available at checkout for select cities</p>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>2. Delivery Locations</h2>
              <p>We deliver across India, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>All metro cities (Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad, Pune)</li>
                <li>Major Tier 1 and Tier 2 cities</li>
                <li>Selected rural areas through our partner network</li>
              </ul>
              <p className="mt-4">For remote locations, delivery may take an additional 2-3 business days.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>3. Shipping Rates</h2>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: 'var(--secondary-bg)' }}>
                      <th className="text-left p-4 rounded-tl-xl">Order Value</th>
                      <th className="text-right p-4 rounded-tr-xl">Shipping Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                      <td className="p-4">Below ₹999</td>
                      <td className="p-4 text-right">₹99</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                      <td className="p-4">₹999 - ₹1,999</td>
                      <td className="p-4 text-right">₹69</td>
                    </tr>
                    <tr>
                      <td className="p-4">₹2,000 and above</td>
                      <td className="p-4 text-right font-medium" style={{ color: 'var(--champagne)' }}>FREE</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>4. Order Tracking</h2>
              <p>Once your order is dispatched, you'll receive:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Email confirmation with tracking number</li>
                <li>SMS updates on delivery status</li>
                <li>Real-time tracking through our website</li>
              </ul>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>5. Packaging</h2>
              <p>Every Evermaze hamper is carefully packaged to ensure it arrives in perfect condition:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Eco-friendly, recyclable materials</li>
                <li>Protective cushioning for delicate items</li>
                <li>Water-resistant outer layer</li>
                <li>Beautiful wrapping that's gift-ready</li>
              </ul>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>6. Delivery to Different Addresses</h2>
              <p>You can send your gift directly to the recipient! During checkout, you can specify a different delivery address. We'll include a gift receipt but not pricing information.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>7. Contact Us</h2>
              <p>For any delivery-related queries:</p>
              <div className="mt-4 p-6 rounded-2xl" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                <p className="mb-2"><strong>Email:</strong> shipping@evermaze.com</p>
                <p className="mb-2"><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>WhatsApp:</strong> Available for order updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: 'var(--heading-color)' }}>
        <div className="container-evermaze text-center">
          <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-white">EVERMAZE</Link>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Beautifully personalized gift hampers for every celebration.</p>
          <div className="mt-8 flex justify-center gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <Link to="/privacy-policy" className="hover:opacity-100" style={{ color: 'rgba(255,255,255,0.6)' }}>Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:opacity-100" style={{ color: 'rgba(255,255,255,0.6)' }}>Terms</Link>
            <Link to="/shipping-policy" className="hover:opacity-100 opacity-100" style={{ color: 'white' }}>Shipping</Link>
            <Link to="/refund-policy" className="hover:opacity-100" style={{ color: 'rgba(255,255,255,0.6)' }}>Refunds</Link>
          </div>
          <p className="mt-8 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>© 2026 Evermaze. Made with love.</p>
        </div>
      </footer>
    </div>
  );
}
