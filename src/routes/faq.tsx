import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";

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
    a: "Yes! We offer bulk orders for corporate gifting with custom branding options. Contact us at evermaze.info@gmail.com for special pricing and customization options.",
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
      <LuxuryHeader />

      {/* Hero */}
      <section 
        className="py-16 lg:py-24"
        style={{ backgroundColor: '#F3EEE8' }}
      >
        <div className="container-evermaze text-center">
          <span className="eyebrow">We're here to help</span>
          <h1 className="mt-4 font-serif text-4xl lg:text-5xl" style={{ color: '#5A4B54' }}>
            Frequently Asked Questions
          </h1>
          <p 
            className="mt-4 max-w-xl mx-auto"
            style={{ color: '#5A4B54', opacity: 0.75 }}
          >
            Can't find the answer you're looking for? Reach out to our team at evermaze.info@gmail.com
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="container-evermaze max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{ 
                  backgroundColor: 'white',
                  boxShadow: '0 2px 12px rgba(90, 75, 84, 0.04)'
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                >
                  <span className="font-medium pr-4" style={{ color: '#5A4B54' }}>{faq.q}</span>
                  <ChevronDown 
                    className={`size-5 shrink-0 transition-all duration-300 ${openIndex === i ? "rotate-180" : ""}`} 
                    style={{ color: '#8C7A95' }} 
                  />
                </button>
                {openIndex === i && (
                  <div 
                    className="px-5 lg:px-6 pb-5 lg:pb-6 text-base"
                    style={{ color: '#5A4B54', opacity: 0.75 }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section 
        className="py-12 lg:py-16"
        style={{ backgroundColor: '#F3EEE8' }}
      >
        <div className="container-evermaze text-center">
          <div 
            className="size-16 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(140, 122, 149, 0.12)' }}
          >
            <MessageCircle className="size-7" style={{ color: '#8C7A95' }} />
          </div>
          <h2 className="font-serif text-2xl lg:text-3xl mb-3" style={{ color: '#5A4B54' }}>
            Still have questions?
          </h2>
          <p className="mb-6" style={{ color: '#5A4B54', opacity: 0.7 }}>
            Our team is here to help you with anything you need.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  );
}
