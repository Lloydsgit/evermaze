import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Heart, ShoppingBag, RefreshCw, Shield, Mail } from "lucide-react";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy | Evermaze" },
      { name: "description", content: "Evermaze Refund Policy - Our hassle-free return and refund process for your peace of mind." },
    ],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
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
          <span className="text-[0.7rem] tracking-[0.32em] uppercase text-white/80">Your satisfaction matters</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white">Refund Policy</h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">Hassle-free returns and refunds for your peace of mind</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container-evermaze max-w-3xl">
          <div className="bg-card rounded-3xl p-8 md:p-12" style={{ backgroundColor: 'var(--card-bg)' }}>
            {/* Satisfaction Highlight */}
            <div className="p-6 rounded-2xl mb-10 text-center" style={{ backgroundColor: 'var(--secondary-bg)' }}>
              <Shield className="size-10 mx-auto mb-3" style={{ color: 'var(--dusty-lavender)' }} />
              <h3 className="font-serif text-2xl mb-2" style={{ color: 'var(--heading-color)' }}>100% Satisfaction Guaranteed</h3>
              <p style={{ color: 'var(--body-text)' }}>We want you and your gift recipient to be absolutely delighted</p>
            </div>

            <div className="prose prose-lg max-w-none" style={{ color: 'var(--body-text)' }}>
              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>1. Return Window</h2>
              <p>We accept return requests within <strong>7 days</strong> of delivery. To initiate a return, please contact us with your order number and reason for return.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>2. Eligibility for Returns</h2>
              <p>Returns are accepted for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Damaged Products:</strong> Items damaged during transit or with manufacturing defects</li>
                <li><strong>Incorrect Orders:</strong> Wrong item received or missing items from your hamper</li>
                <li><strong>Quality Issues:</strong> Products that don't meet your expectations in quality</li>
              </ul>

              <div className="p-4 rounded-xl mt-6" style={{ backgroundColor: 'rgba(142, 124, 152, 0.1)' }}>
                <p className="text-sm"><strong>Note:</strong> Due to the personalized nature of our gift hampers, we cannot accept returns for change of mind. However, we'll always work with you to find a solution.</p>
              </div>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>3. Non-Returnable Items</h2>
              <p>The following items cannot be returned:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Personalized items (custom messages, engraved products)</li>
                <li>Perishable goods (food items, flowers)</li>
                <li>Items marked as "Final Sale" or "Non-Returnable"</li>
                <li>Products that have been used or altered</li>
              </ul>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>4. Refund Options</h2>
              <p>Once your return is approved, you can choose:</p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                  <h4 className="font-medium mb-2">Replacement</h4>
                  <p className="text-sm opacity-80">We'll send a new hamper to replace the damaged/incorrect item</p>
                </div>
                <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                  <h4 className="font-medium mb-2">Store Credit</h4>
                  <p className="text-sm opacity-80">Full refund as credit for your next order (never expires)</p>
                </div>
              </div>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>5. Refund Timeline</h2>
              <div className="flex items-start gap-4 p-6 rounded-2xl mt-4" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                <RefreshCw className="size-6 shrink-0" style={{ color: 'var(--dusty-lavender)' }} />
                <div>
                  <h4 className="font-medium mb-1">Processing Time</h4>
                  <p className="text-sm opacity-80">Refunds are processed within 5-7 business days after we receive and inspect the returned item</p>
                </div>
              </div>
              <p className="mt-4">For bank transfers, please allow an additional 3-5 business days for the amount to reflect in your account.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>6. How to Request a Return</h2>
              <ol className="list-decimal pl-6 space-y-3 mt-4">
                <li>Email us at <a href="mailto:returns@evermaze.com" className="underline" style={{ color: 'var(--dusty-lavender)' }}>returns@evermaze.com</a> with your order number</li>
                <li>Describe the issue and attach photos if applicable</li>
                <li>We'll review your request within 24 hours</li>
                <li>Once approved, we'll provide return instructions</li>
                <li>Ship the item back in its original packaging</li>
              </ol>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>7. Damaged on Arrival</h2>
              <p>If your hamper arrives damaged, please:</p>
              <ol className="list-decimal pl-6 space-y-2 mt-4">
                <li>Take photos of the damage immediately</li>
                <li>Keep the original packaging</li>
                <li>Contact us within 24 hours of delivery</li>
                <li>We'll arrange a replacement or full refund at no extra cost</li>
              </ol>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>8. Contact Us</h2>
              <p>We're here to help with any concerns:</p>
              <div className="mt-4 p-6 rounded-2xl" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="size-5" style={{ color: 'var(--dusty-lavender)' }} />
                  <strong>returns@evermaze.com</strong>
                </div>
                <p className="text-sm opacity-80">Please include your order number and photos in your email for faster resolution.</p>
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
            <Link to="/shipping-policy" className="hover:opacity-100" style={{ color: 'rgba(255,255,255,0.6)' }}>Shipping</Link>
            <Link to="/refund-policy" className="hover:opacity-100 opacity-100" style={{ color: 'white' }}>Refunds</Link>
          </div>
          <p className="mt-8 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>© 2026 Evermaze. Made with love.</p>
        </div>
      </footer>
    </div>
  );
}
