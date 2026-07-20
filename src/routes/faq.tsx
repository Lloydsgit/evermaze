import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Heart, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs | Evermaze" },
      { name: "description", content: "Frequently asked questions about Evermaze gift hampers, shipping, personalization, and more." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  {
    q: "How long does delivery take?",
    a: "We offer same-day dispatch for orders placed before 2 PM. Standard delivery takes 3-5 business days across major cities. Express delivery options are available at checkout.",
  },
  {
    q: "Can I personalize the hamper?",
    a: "Absolutely! Every hamper comes with a complimentary handwritten note. You can customize the message during checkout. Some hampers also allow you to choose specific items.",
  },
  {
    q: "What's your return policy?",
    a: "We want you to love your gift. If the recipient isn't completely satisfied, we offer a one-time replacement or store credit within 7 days of delivery. Personalized items are non-returnable unless damaged.",
  },
  {
    q: "Do you offer corporate gifting?",
    a: "Yes! We offer bulk orders for corporate gifting with custom branding options. Contact us at corporate@evermaze.com for special pricing and customization options.",
  },
  {
    q: "How are the hampers packaged?",
    a: "Each hamper is handpacked in our signature eco-friendly boxes, wrapped with tissue and finished with a silk ribbon. Everything is carefully arranged to ensure it arrives in perfect condition.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards, UPI, net banking, and popular wallets. For corporate orders, we also offer invoice-based payments.",
  },
  {
    q: "Can I track my order?",
    a: "Yes! Once your order is dispatched, you'll receive a tracking number via email and SMS. You can also track your order status in your account dashboard.",
  },
  {
    q: "Do you offer same-day delivery?",
    a: "Same-day delivery is available in Delhi NCR, Mumbai, Bangalore, and Pune for orders placed before 12 PM. A small delivery fee applies based on your location.",
  },
];

function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            <span className="mt-1 text-[0.6rem] tracking-[0.4em] uppercase text-muted-foreground">Specially Just For You</span>
          </Link>
          <div className="flex items-center gap-4">
            <button aria-label="Wishlist" className="hover:text-burgundy transition-colors"><Heart className="size-[18px]" /></button>
            <button aria-label="Cart" className="relative hover:text-burgundy transition-colors">
              <ShoppingBag className="size-[18px]" />
              <span className="absolute -top-1.5 -right-2 bg-burgundy text-white text-[9px] rounded-full size-4 grid place-items-center">2</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-burgundy text-white py-16 md:py-20">
        <div className="container-evermaze text-center">
          <span className="text-[0.7rem] tracking-[0.32em] uppercase text-champagne">We're here to help</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">Can't find the answer you're looking for? Reach out to our team at hello@evermaze.com</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16">
        <div className="container-evermaze max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium pr-4">{faq.q}</span>
                  <ChevronDown className={`size-5 text-muted-foreground shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container-evermaze text-center">
          <h2 className="font-serif text-2xl">Still have questions?</h2>
          <p className="mt-2 text-muted-foreground">Our team is here to help you with anything you need.</p>
          <Link to="/contact" className="btn-primary mt-6 inline-block">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ivory border-t border-border pt-12 pb-6">
        <div className="container-evermaze text-center">
          <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-burgundy">EVERMAZE</Link>
          <p className="mt-4 text-sm text-muted-foreground">Beautifully personalized gift hampers for every celebration.</p>
        </div>
      </footer>
    </div>
  );
}
