import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail, Heart } from "lucide-react";
import { useState } from "react";

export function LuxuryFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    shop: {
      title: "Shop",
      links: [
        { name: "All Hampers", to: "/shop" },
        { name: "Build Your Box", to: "/build-your-box" },
        { name: "Gift Cards", to: "/shop" },
        { name: "Corporate Gifting", to: "/contact" },
      ],
    },
    help: {
      title: "Help",
      links: [
        { name: "FAQs", to: "/faq" },
        { name: "Shipping Policy", to: "/faq" },
        { name: "Refund Policy", to: "/faq" },
        { name: "Contact Us", to: "/contact" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "Our Story", to: "/about" },
        { name: "Track Order", to: "/contact" },
        { name: "Contact", to: "/contact" },
      ],
    },
  };

  return (
    <footer style={{ backgroundColor: "#5A4B54" }}>
      {/* Newsletter Section */}
      <div 
        className="py-16 lg:py-20 border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container-evermaze">
          <div className="max-w-xl mx-auto text-center">
            <h3 
              className="font-serif text-2xl lg:text-3xl mb-3 text-white"
            >
              Stay Connected
            </h3>
            <p 
              className="text-base mb-8"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Subscribe for exclusive offers, gifting inspiration, and early access to new collections.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-sm min-h-[52px]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                  outline: "none",
                }}
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-full min-h-[52px] text-sm font-medium transition-all duration-300 whitespace-nowrap"
                style={{
                  backgroundColor: "#8C7A95",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#7A6A82";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#8C7A95";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
            {subscribed && (
              <p className="mt-4 text-sm" style={{ color: "#7D9A78" }}>
                Welcome to the Evermaze family!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 lg:py-20">
        <div className="container-evermaze">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-16">
            {/* Brand Column */}
            <div>
              <Link to="/" className="inline-block">
                <span 
                  className="font-serif text-2xl tracking-[0.2em] text-white"
                >
                  EVERMAZE
                </span>
                <span 
                  className="block text-[10px] tracking-[0.3em] uppercase mt-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Just For You
                </span>
              </Link>
              <p 
                className="mt-6 text-base leading-relaxed max-w-xs"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Beautifully personalized gift hampers, thoughtfully curated for every celebration. Made with love, delivered with care.
              </p>
              
              {/* Social Links */}
              <div className="mt-8 flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="size-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#8C7A95";
                    e.currentTarget.style.color = "#8C7A95";
                    e.currentTarget.style.backgroundColor = "rgba(140, 122, 149, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="size-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#8C7A95";
                    e.currentTarget.style.color = "#8C7A95";
                    e.currentTarget.style.backgroundColor = "rgba(140, 122, 149, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <MessageCircle className="size-5" />
                </a>
                <a
                  href="mailto:evermaze.info@gmail.com"
                  aria-label="Email"
                  className="size-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#8C7A95";
                    e.currentTarget.style.color = "#8C7A95";
                    e.currentTarget.style.backgroundColor = "rgba(140, 122, 149, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <Mail className="size-5" />
                </a>
              </div>
            </div>

            {/* Link Columns */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 
                  className="text-xs tracking-[0.25em] uppercase mb-6"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.to as any}
                        className="text-base transition-all duration-200 inline-block hover:-translate-x-1"
                        style={{ color: "rgba(255,255,255,0.75)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#8C7A95";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="py-6 border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container-evermaze">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div 
              className="flex items-center gap-2"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <span>© 2026 Evermaze.</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="size-3 inline fill-current" /> love.
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {["Privacy Policy", "Terms & Conditions", "Shipping Policy", "Refund Policy"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-all duration-200 hover:opacity-100"
                  style={{ color: "rgba(255,255,255,0.4)", opacity: 0.8 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
