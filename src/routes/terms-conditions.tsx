import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Heart, ShoppingBag, FileText, Scale, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Evermaze" },
      { name: "description", content: "Evermaze Terms & Conditions - The legal terms governing your use of our website and services." },
    ],
  }),
  component: TermsConditionsPage,
});

function TermsConditionsPage() {
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
          <span className="text-[0.7rem] tracking-[0.32em] uppercase text-white/80">Legal information</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white">Terms & Conditions</h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container-evermaze max-w-3xl">
          <div className="bg-card rounded-3xl p-8 md:p-12" style={{ backgroundColor: 'var(--card-bg)' }}>
            {/* Introduction */}
            <div className="p-6 rounded-2xl mb-10" style={{ backgroundColor: 'var(--secondary-bg)' }}>
              <p className="text-lg" style={{ color: 'var(--heading-color)' }}>
                Welcome to Evermaze. These Terms & Conditions govern your use of our website and services. By placing an order with us, you agree to these terms.
              </p>
            </div>

            <div className="prose prose-lg max-w-none" style={{ color: 'var(--body-text)' }}>
              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>1. General Information</h2>
              <p>Evermaze is a gifting brand that curates and sells personalized gift hampers. We operate under the following details:</p>
              <div className="mt-4 p-6 rounded-2xl" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                <p className="mb-2"><strong>Company Name:</strong> Evermaze Gifting Pvt. Ltd.</p>
                <p className="mb-2"><strong>Registered Address:</strong> Sector 15, Gurugram, Haryana 122001</p>
                <p className="mb-2"><strong>Email:</strong> hello@evermaze.com</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
              </div>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>2. Orders & Acceptance</h2>
              <p>When you place an order with Evermaze:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>You confirm that all information provided is accurate</li>
                <li>You authorize us to charge the payment method provided</li>
                <li>Orders are confirmed via email after payment verification</li>
                <li>We reserve the right to cancel orders for fraud prevention</li>
              </ul>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>3. Pricing & Payment</h2>
              <p>All prices are in Indian Rupees (₹) and include applicable taxes unless stated otherwise. We accept:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Credit/Debit Cards (Visa, Mastercard, American Express)</li>
                <li>UPI and Net Banking</li>
                <li>Wallets (Paytm, PhonePe, etc.)</li>
                <li>EMI options for select banks</li>
              </ul>
              <p className="mt-4">Payment must be received in full before order processing begins.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>4. Product Information</h2>
              <p>We strive to display accurate product information, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Prices, descriptions, and images</li>
                <li>Product availability and stock status</li>
                <li>Customization options and limitations</li>
              </ul>
              <p className="mt-4">However, slight variations may occur due to product availability or supplier changes. We'll notify you of significant changes.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>5. Personalization & Custom Orders</h2>
              <p>For personalized items:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Custom messages are limited to [X] characters per hamper</li>
                <li>We reserve the right to refuse inappropriate content</li>
                <li>Custom orders cannot be cancelled once processing begins</li>
                <li>Handwritten notes are included with every hamper</li>
              </ul>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>6. Delivery & Risk</h2>
              <p>Risk of loss and title for items purchased passes to you upon our delivery to the carrier. Please refer to our <Link to="/shipping-policy" className="underline" style={{ color: 'var(--dusty-lavender)' }}>Shipping Policy</Link> for more details.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>7. Intellectual Property</h2>
              <p>All content on our website, including designs, logos, images, and text, is the property of Evermaze and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>8. Limitation of Liability</h2>
              <p>Evermaze shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or services. Our total liability shall not exceed the amount you paid for the specific order.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>9. User Conduct</h2>
              <p>When using our website, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Violate any laws or regulations</li>
                <li>Submit false or misleading information</li>
                <li>Attempt to gain unauthorized access</li>
                <li>Interfere with the website's operation</li>
                <li>Use automated systems to access our website without permission</li>
              </ul>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>10. Indemnification</h2>
              <p>You agree to indemnify and hold harmless Evermaze, its officers, directors, and employees from any claims, damages, or expenses arising from your violation of these Terms or your misuse of our website.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>11. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified Terms.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>12. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>13. Severability</h2>
              <p>If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.</p>

              <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--heading-color)' }}>14. Contact Information</h2>
              <p>For questions about these Terms, please contact us:</p>
              <div className="mt-4 p-6 rounded-2xl" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                <p className="mb-2"><strong>Email:</strong> legal@evermaze.com</p>
                <p><strong>Address:</strong> Evermaze Gifting Pvt. Ltd., Sector 15, Gurugram, Haryana 122001</p>
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
            <Link to="/terms-conditions" className="hover:opacity-100 opacity-100" style={{ color: 'white' }}>Terms</Link>
            <Link to="/shipping-policy" className="hover:opacity-100" style={{ color: 'rgba(255,255,255,0.6)' }}>Shipping</Link>
            <Link to="/refund-policy" className="hover:opacity-100" style={{ color: 'rgba(255,255,255,0.6)' }}>Refunds</Link>
          </div>
          <p className="mt-8 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>© 2026 Evermaze. Made with love.</p>
        </div>
      </footer>
    </div>
  );
}
