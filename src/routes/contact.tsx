import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Evermaze" },
      { name: "description", content: "Get in touch with the Evermaze team. We'd love to hear from you!" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <LuxuryHeader />

      {/* Hero */}
      <section 
        className="py-16 lg:py-24"
        style={{ backgroundColor: '#F3EEE8' }}
      >
        <div className="container-evermaze text-center">
          <span className="eyebrow">We'd love to hear from you</span>
          <h1 className="mt-4 font-serif text-4xl lg:text-5xl" style={{ color: '#5A4B54' }}>
            Contact Us
          </h1>
          <p 
            className="mt-4 max-w-xl mx-auto"
            style={{ color: '#5A4B54', opacity: 0.75 }}
          >
            Have a question, feedback, or just want to say hello? We're here for you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="container-evermaze">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl mb-5" style={{ color: '#5A4B54' }}>
                Get in Touch
              </h2>
              <p className="mb-8" style={{ color: '#5A4B54', opacity: 0.75 }}>
                Whether you have a question about our hampers, need help with an order, or want to explore corporate gifting options, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div 
                    className="size-12 rounded-xl grid place-items-center shrink-0"
                    style={{ backgroundColor: '#F3EEE8' }}
                  >
                    <Mail className="size-5" style={{ color: '#8C7A95' }} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1" style={{ color: '#5A4B54' }}>Email Us</h3>
                    <p style={{ color: '#5A4B54', opacity: 0.7 }}>evermaze.info@gmail.com</p>
                    <p className="text-sm" style={{ color: '#5A4B54', opacity: 0.6 }}>We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="size-12 rounded-xl grid place-items-center shrink-0"
                    style={{ backgroundColor: '#F3EEE8' }}
                  >
                    <Phone className="size-5" style={{ color: '#8C7A95' }} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1" style={{ color: '#5A4B54' }}>Call Us</h3>
                    <p style={{ color: '#5A4B54', opacity: 0.7 }}>+91 9848507639</p>
                    <p className="text-sm" style={{ color: '#5A4B54', opacity: 0.6 }}>Mon-Sat, 10am-7pm IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="size-12 rounded-xl grid place-items-center shrink-0"
                    style={{ backgroundColor: '#F3EEE8' }}
                  >
                    <MapPin className="size-5" style={{ color: '#8C7A95' }} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1" style={{ color: '#5A4B54' }}>Visit Us</h3>
                    <p style={{ color: '#5A4B54', opacity: 0.7 }}>Secunderabad, Road No: 5</p>
                    <p style={{ color: '#5A4B54', opacity: 0.7 }}>Hyderabad, Telangana - 500062</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-medium mb-4" style={{ color: '#5A4B54' }}>Follow Us</h3>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="size-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    style={{ 
                      border: '1px solid rgba(90, 75, 84, 0.15)',
                      color: '#5A4B54'
                    }}
                  >
                    <Instagram className="size-5" />
                  </a>
                  <a 
                    href="#" 
                    className="size-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    style={{ 
                      border: '1px solid rgba(90, 75, 84, 0.15)',
                      color: '#5A4B54'
                    }}
                  >
                    <MessageCircle className="size-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              className="rounded-2xl p-6 lg:p-8"
              style={{ 
                backgroundColor: 'white',
                boxShadow: '0 4px 24px rgba(90, 75, 84, 0.06)'
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div 
                    className="size-16 rounded-full grid place-items-center mx-auto mb-5"
                    style={{ backgroundColor: 'rgba(140, 122, 149, 0.1)' }}
                  >
                    <Mail className="size-8" style={{ color: '#8C7A95' }} />
                  </div>
                  <h3 className="font-serif text-2xl mb-2" style={{ color: '#5A4B54' }}>Message Sent!</h3>
                  <p className="mb-6" style={{ color: '#5A4B54', opacity: 0.7 }}>We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-xl lg:text-2xl mb-5" style={{ color: '#5A4B54' }}>
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border text-base"
                        style={{ 
                          backgroundColor: '#FAF7F2',
                          borderColor: 'rgba(90, 75, 84, 0.12)',
                          color: '#5A4B54',
                          outline: 'none'
                        }}
                        placeholder="Priya Sharma"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border text-base"
                        style={{ 
                          backgroundColor: '#FAF7F2',
                          borderColor: 'rgba(90, 75, 84, 0.12)',
                          color: '#5A4B54',
                          outline: 'none'
                        }}
                        placeholder="priya@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>Subject</label>
                      <input
                        type="text"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border text-base"
                        style={{ 
                          backgroundColor: '#FAF7F2',
                          borderColor: 'rgba(90, 75, 84, 0.12)',
                          color: '#5A4B54',
                          outline: 'none'
                        }}
                        placeholder="Question about my order"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#5A4B54' }}>Message</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border text-base resize-none"
                        style={{ 
                          backgroundColor: '#FAF7F2',
                          borderColor: 'rgba(90, 75, 84, 0.12)',
                          color: '#5A4B54',
                          outline: 'none'
                        }}
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      Send Message <Send className="size-4" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  );
}
