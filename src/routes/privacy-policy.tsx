import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Heart, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Evermaze" },
      { name: "description", content: "Evermaze Privacy Policy - Learn how we collect, use, and protect your personal information." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
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
          <span className="text-[0.7rem] tracking-[0.32em] uppercase text-white/80">Your trust matters to us</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white">Privacy Policy</h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container-evermaze max-w-3xl">
          <div className="bg-card rounded-3xl p-8 md:p-12" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="prose prose-lg max-w-none" style={{ color: 'var(--body-text)' }}>
              <p className="lead text-lg mb-8">At Evermaze, we believe that your personal information should be handled with the same care and attention we put into creating our gift hampers. This Privacy Policy explains how we collect, use, and protect your data.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>1. Information We Collect</h2>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and shipping address</li>
                <li><strong>Payment Details:</strong> Payment card information (processed securely through our payment partners)</li>
                <li><strong>Personalization Data:</strong> Gift messages, recipient details, and customization preferences</li>
                <li><strong>Communication Preferences:</strong> Newsletter subscriptions and marketing consent</li>
              </ul>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Process and fulfill your gift hamper orders</li>
                <li>Personalize your gift with your chosen message and customizations</li>
                <li> Communicate order updates and delivery status</li>
                <li>Send promotional offers (with your consent)</li>
                <li>Improve our products and services</li>
                <li>Prevent fraud and ensure security</li>
              </ul>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>3. Information Sharing</h2>
              <p>We never sell your personal information. We share your data only with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Delivery Partners:</strong> To ship your order to the recipient</li>
                <li><strong>Payment Processors:</strong> To securely process your payment</li>
                <li><strong>Service Providers:</strong> Who assist us in operating our website (bound by confidentiality)</li>
              </ul>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>4. Data Security</h2>
              <p>We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits. Your payment information is tokenized and never stored on our servers.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>6. Cookies</h2>
              <p>We use cookies to enhance your browsing experience, remember your preferences, and analyze site traffic. You can manage cookie preferences through your browser settings.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>7. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="mt-4 p-6 rounded-2xl" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                <p className="mb-2"><strong>Email:</strong> privacy@evermaze.com</p>
                <p className="mb-2"><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Address:</strong> Evermaze Studio, Sector 15, Gurugram, Haryana 122001</p>
              </div>

              <p className="mt-10 text-sm opacity-70">We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Last updated" date.</p>
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
            <Link to="/privacy-policy" className="hover:opacity-100 opacity-100" style={{ color: 'white' }}>Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:opacity-100" style={{ color: 'rgba(255,255,255,0.6)' }}>Terms</Link>
            <Link to="/shipping-policy" className="hover:opacity-100" style={{ color: 'rgba(255,255,255,0.6)' }}>Shipping</Link>
            <Link to="/refund-policy" className="hover:opacity-100" style={{ color: 'rgba(255,255,255,0.6)' }}>Refunds</Link>
          </div>
          <p className="mt-8 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>© 2026 Evermaze. Made with love.</p>
        </div>
      </footer>
    </div>
  );
}
