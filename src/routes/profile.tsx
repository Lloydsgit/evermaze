import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Heart, User, Mail, Phone, MapPin, Package, Clock, HeartHandshake } from "lucide-react";
import { useState } from "react";

import hamper1 from "@/assets/hamper-1.jpg";
import hamper5 from "@/assets/hamper-5.jpg";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Profile | Evermaze" },
      { name: "description", content: "Manage your Evermaze profile, orders, and preferences." },
    ],
  }),
  component: ProfilePage,
});

const orders = [
  { id: "EM-2024-001", date: "Dec 15, 2024", items: "The Sabrina Bloom", price: "₹1,899", status: "Delivered", img: hamper1 },
  { id: "EM-2024-002", date: "Dec 20, 2024", items: "Rose Ritual Box", price: "₹1,499", status: "Delivered", img: hamper5 },
];

function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"orders" | "addresses" | "settings">("orders");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-border-color py-4">
        <div className="container-evermaze flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-secondary-text hover:text-dark-lavender transition-colors">
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
          <Link to="/" className="flex flex-col items-center leading-none">
            <span className="font-serif text-2xl tracking-[0.35em] text-dark-lavender">EVERMAZE</span>
            <span className="mt-1 text-[0.6rem] tracking-[0.4em] uppercase text-secondary-text">Just For You</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/wishlist" aria-label="Wishlist" className="hover:text-dark-lavender transition-colors"><Heart className="size-[18px]" /></Link>
            <Link to="/cart" aria-label="Cart" className="relative hover:text-dark-lavender transition-colors">
              <ShoppingBag className="size-[18px]" />
              <span className="absolute -top-1.5 -right-2 bg-dark-lavender text-white text-[9px] rounded-full size-4 grid place-items-center">2</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-dark-lavender text-white py-12 md:py-16">
        <div className="container-evermaze flex items-center gap-6">
          <div className="size-20 md:size-24 rounded-full bg-champagne/20 flex items-center justify-center">
            <User className="size-10 md:size-12 text-champagne" />
          </div>
          <div>
            <h1 className="font-serif text-3xl md:text-4xl">Welcome, Guest!</h1>
            <p className="mt-1 text-white/70">Manage your profile and orders</p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-border-color">
        <div className="container-evermaze">
          <div className="flex gap-8">
            {(["orders", "addresses", "settings"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 text-sm tracking-[0.2em] uppercase border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-dark-lavender text-dark-lavender"
                    : "border-transparent text-secondary-text hover:text-foreground"
                }`}
              >
                {tab === "orders" ? "My Orders" : tab === "addresses" ? "Addresses" : "Settings"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12">
        <div className="container-evermaze">
          {activeTab === "orders" && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl">My Orders</h2>
              {orders.map((order) => (
                <div key={order.id} className="bg-white border border-border-color rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-secondary-bg">
                        <img src={order.img} alt={order.items} className="size-full object-cover" />
                      </div>
                      <div>
                        <p className="text-xs text-secondary-text">{order.id}</p>
                        <h3 className="font-serif text-lg mt-1">{order.items}</h3>
                        <p className="text-sm text-secondary-text mt-1">{order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-xl">{order.price}</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {orders.length === 0 && (
                <div className="text-center py-12">
                  <Package className="size-12 mx-auto text-secondary-text mb-4" />
                  <p className="text-secondary-text">No orders yet</p>
                  <Link to="/shop" className="btn-primary mt-4 inline-block">Start Shopping</Link>
                </div>
              )}
            </div>
          )}

          {activeTab === "addresses" && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl">My Addresses</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-border-color rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="size-5 text-dark-lavender mt-1" />
                    <div>
                      <h3 className="font-medium">Home</h3>
                      <p className="mt-2 text-sm text-secondary-text">
                        Secunderabad, Hyderabad, Telangana 500062
                      </p>
                      <p className="mt-1 text-xs text-secondary-text">+91 9848507639</p>
                    </div>
                  </div>
                </div>
                <button className="bg-white border border-dashed border-border-color rounded-2xl p-6 text-left hover:border-dark-lavender transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full border border-border-color grid place-items-center">
                      <span className="text-xl">+</span>
                    </div>
                    <span className="text-secondary-text">Add new address</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <SettingsForm />
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ivory border-t border-border-color pt-12 pb-6 mt-12">
        <div className="container-evermaze text-center">
          <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-dark-lavender">EVERMAZE</Link>
          <p className="mt-4 text-sm text-secondary-text">Beautifully personalized gift hampers for every celebration.</p>
        </div>
      </footer>
    </div>
  );
}

function SettingsForm() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Guest",
    lastName: "User",
    email: "evermaze.info@gmail.com",
    phone: "9848507639",
    newsletter: true,
  });

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you would save to backend here
  };

  if (isEditing) {
    return (
      <div className="space-y-6">
        <h2 className="font-serif text-2xl">Edit Account Settings</h2>
        <div className="bg-white border border-border-color rounded-2xl p-6 md:p-8">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <User className="size-5 text-dark-lavender" />
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-secondary-text mb-2">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border-color bg-background focus:border-dark-lavender focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-secondary-text mb-2">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border-color bg-background focus:border-dark-lavender focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <Mail className="size-5 text-dark-lavender" />
                Email Address
              </h3>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border-color bg-background focus:border-dark-lavender focus:outline-none transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <Phone className="size-5 text-dark-lavender" />
                Phone Number
              </h3>
              <div className="flex gap-3">
                <span className="px-4 py-3 bg-secondary-bg rounded-xl text-secondary-text">+91</span>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 px-4 py-3 rounded-xl border border-border-color bg-background focus:border-dark-lavender focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <HeartHandshake className="size-5 text-dark-lavender" />
                Newsletter Preferences
              </h3>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  className="size-5 rounded border-border-color text-dark-lavender focus:ring-burgundy"
                />
                <span className="text-sm">Subscribe to newsletters and promotional emails</span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4 border-t border-border-color">
              <button onClick={handleSave} className="btn-primary">
                Save Changes
              </button>
              <button onClick={() => setIsEditing(false)} className="btn-outline">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl">Account Settings</h2>
        <button onClick={() => setIsEditing(true)} className="btn-primary">
          Edit Profile
        </button>
      </div>
      <div className="bg-white border border-border-color rounded-2xl divide-y divide-border">
        <div className="p-6 flex items-center gap-4">
          <User className="size-5 text-secondary-text" />
          <div className="flex-1">
            <p className="font-medium">Full Name</p>
            <p className="text-sm text-secondary-text">{formData.firstName} {formData.lastName}</p>
          </div>
        </div>
        <div className="p-6 flex items-center gap-4">
          <Mail className="size-5 text-secondary-text" />
          <div className="flex-1">
            <p className="font-medium">Email Address</p>
            <p className="text-sm text-secondary-text">{formData.email}</p>
          </div>
        </div>
        <div className="p-6 flex items-center gap-4">
          <Phone className="size-5 text-secondary-text" />
          <div className="flex-1">
            <p className="font-medium">Phone Number</p>
            <p className="text-sm text-secondary-text">+91 {formData.phone}</p>
          </div>
        </div>
        <div className="p-6 flex items-center gap-4">
          <HeartHandshake className="size-5 text-secondary-text" />
          <div className="flex-1">
            <p className="font-medium">Newsletter Preferences</p>
            <p className="text-sm text-secondary-text">{formData.newsletter ? "Subscribed" : "Not subscribed"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
