import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { User, Mail, Phone, MapPin, Package, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

import hamper1 from "@/assets/hamper-1.jpg";
import hamper5 from "@/assets/hamper-5.jpg";

import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";

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
      <LuxuryHeader />

      {/* Hero */}
      <section 
        className="py-12 lg:py-16"
        style={{ backgroundColor: '#8C7A95' }}
      >
        <div className="container-evermaze flex items-center gap-5">
          <div 
            className="size-16 lg:size-20 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <User className="size-8 lg:size-10" style={{ color: 'white' }} />
          </div>
          <div>
            <h1 className="font-serif text-2xl lg:text-3xl text-white">Welcome, Guest!</h1>
            <p className="mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Manage your profile and orders</p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section 
        className="border-b"
        style={{ borderColor: 'rgba(90, 75, 84, 0.08)' }}
      >
        <div className="container-evermaze">
          <div className="flex gap-2 overflow-x-auto">
            {(["orders", "addresses", "settings"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-5 text-sm font-medium tracking-wide border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-[#8C7A95] text-[#8C7A95]'
                    : 'border-transparent text-[#5A4B54] opacity-60 hover:opacity-100'
                }`}
              >
                {tab === "orders" ? "My Orders" : tab === "addresses" ? "Addresses" : "Settings"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 lg:py-12" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="container-evermaze">
          {activeTab === "orders" && (
            <div className="space-y-5">
              <h2 className="font-serif text-2xl" style={{ color: '#5A4B54' }}>My Orders</h2>
              {orders.map((order) => (
                <div 
                  key={order.id} 
                  className="rounded-2xl p-5 lg:p-6"
                  style={{ 
                    backgroundColor: 'white',
                    boxShadow: '0 2px 12px rgba(90, 75, 84, 0.04)'
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div 
                        className="w-20 h-20 rounded-xl overflow-hidden shrink-0"
                        style={{ backgroundColor: '#F3EEE8' }}
                      >
                        <img src={order.img} alt={order.items} className="size-full object-cover" />
                      </div>
                      <div>
                        <p className="text-xs" style={{ color: '#5A4B54', opacity: 0.6 }}>{order.id}</p>
                        <h3 className="font-serif text-lg mt-1" style={{ color: '#5A4B54' }}>{order.items}</h3>
                        <p className="text-sm mt-1" style={{ color: '#5A4B54', opacity: 0.6 }}>{order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-xl" style={{ color: '#8C7A95' }}>{order.price}</p>
                      <span 
                        className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full"
                        style={{ backgroundColor: 'rgba(125, 154, 120, 0.15)', color: '#7D9A78' }}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {orders.length === 0 && (
                <div className="text-center py-12">
                  <Package className="size-12 mx-auto mb-4" style={{ color: '#5A4B54', opacity: 0.3 }} />
                  <p style={{ color: '#5A4B54', opacity: 0.7 }}>No orders yet</p>
                  <Link to="/shop" className="btn-primary mt-4 inline-block">Start Shopping</Link>
                </div>
              )}
            </div>
          )}

          {activeTab === "addresses" && (
            <div className="space-y-5">
              <h2 className="font-serif text-2xl" style={{ color: '#5A4B54' }}>My Addresses</h2>
              <div className="grid md:grid-cols-2 gap-5">
                <div 
                  className="rounded-2xl p-5"
                  style={{ 
                    backgroundColor: 'white',
                    boxShadow: '0 2px 12px rgba(90, 75, 84, 0.04)'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="size-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(140, 122, 149, 0.1)' }}
                    >
                      <MapPin className="size-5" style={{ color: '#8C7A95' }} />
                    </div>
                    <div>
                      <h3 className="font-medium" style={{ color: '#5A4B54' }}>Home</h3>
                      <p className="mt-2 text-sm" style={{ color: '#5A4B54', opacity: 0.7 }}>
                        Secunderabad, Hyderabad, Telangana 500062
                      </p>
                      <p className="mt-1 text-sm" style={{ color: '#5A4B54', opacity: 0.5 }}>+91 9848507639</p>
                    </div>
                  </div>
                </div>
                <button 
                  className="rounded-2xl p-5 text-left transition-all duration-300 border-2 border-dashed"
                  style={{ borderColor: 'rgba(90, 75, 84, 0.15)' }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="size-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(140, 122, 149, 0.1)' }}
                    >
                      <span className="text-xl" style={{ color: '#8C7A95' }}>+</span>
                    </div>
                    <span style={{ color: '#5A4B54', opacity: 0.6 }}>Add new address</span>
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

      <LuxuryFooter />
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
  };

  if (isEditing) {
    return (
      <div className="space-y-5">
        <h2 className="font-serif text-2xl" style={{ color: '#5A4B54' }}>Edit Account Settings</h2>
        <div 
          className="rounded-2xl p-6 lg:p-8"
          style={{ 
            backgroundColor: 'white',
            boxShadow: '0 2px 12px rgba(90, 75, 84, 0.04)'
          }}
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <h3 className="font-medium mb-4 flex items-center gap-2" style={{ color: '#5A4B54' }}>
                <User className="size-5" style={{ color: '#8C7A95' }} />
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#5A4B54', opacity: 0.7 }}>First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-base"
                    style={{ 
                      backgroundColor: '#FAF7F2',
                      borderColor: 'rgba(90, 75, 84, 0.12)',
                      color: '#5A4B54',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#5A4B54', opacity: 0.7 }}>Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-base"
                    style={{ 
                      backgroundColor: '#FAF7F2',
                      borderColor: 'rgba(90, 75, 84, 0.12)',
                      color: '#5A4B54',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-medium mb-4 flex items-center gap-2" style={{ color: '#5A4B54' }}>
                <Mail className="size-5" style={{ color: '#8C7A95' }} />
                Email Address
              </h3>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border text-base"
                style={{ 
                  backgroundColor: '#FAF7F2',
                  borderColor: 'rgba(90, 75, 84, 0.12)',
                  color: '#5A4B54',
                  outline: 'none'
                }}
              />
            </div>

            {/* Phone */}
            <div>
              <h3 className="font-medium mb-4 flex items-center gap-2" style={{ color: '#5A4B54' }}>
                <Phone className="size-5" style={{ color: '#8C7A95' }} />
                Phone Number
              </h3>
              <div className="flex gap-3">
                <span 
                  className="px-4 py-3 rounded-xl text-base"
                  style={{ backgroundColor: '#F3EEE8', color: '#5A4B54' }}
                >
                  +91
                </span>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 px-4 py-3 rounded-xl border text-base"
                  style={{ 
                    backgroundColor: '#FAF7F2',
                    borderColor: 'rgba(90, 75, 84, 0.12)',
                    color: '#5A4B54',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-medium mb-4 flex items-center gap-2" style={{ color: '#5A4B54' }}>
                <Heart className="size-5" style={{ color: '#8C7A95' }} />
                Newsletter Preferences
              </h3>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  className="size-5 rounded"
                  style={{ accentColor: '#8C7A95' }}
                />
                <span className="text-sm" style={{ color: '#5A4B54' }}>Subscribe to newsletters and promotional emails</span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4" style={{ borderTop: '1px solid rgba(90, 75, 84, 0.08)' }}>
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
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl" style={{ color: '#5A4B54' }}>Account Settings</h2>
        <button onClick={() => setIsEditing(true)} className="btn-primary">
          Edit Profile
        </button>
      </div>
      <div 
        className="rounded-2xl overflow-hidden"
        style={{ 
          backgroundColor: 'white',
          boxShadow: '0 2px 12px rgba(90, 75, 84, 0.04)'
        }}
      >
        {[
          { icon: User, label: "Full Name", value: `${formData.firstName} ${formData.lastName}` },
          { icon: Mail, label: "Email Address", value: formData.email },
          { icon: Phone, label: "Phone Number", value: `+91 ${formData.phone}` },
          { icon: Heart, label: "Newsletter", value: formData.newsletter ? "Subscribed" : "Not subscribed" },
        ].map((item, i) => (
          <div 
            key={i}
            className="p-5 flex items-center gap-4"
            style={{ borderBottom: i < 3 ? '1px solid rgba(90, 75, 84, 0.06)' : 'none' }}
          >
            <item.icon className="size-5 shrink-0" style={{ color: '#5A4B54', opacity: 0.4 }} />
            <div className="flex-1">
              <p className="text-sm font-medium" style={{ color: '#5A4B54' }}>{item.label}</p>
              <p className="text-sm" style={{ color: '#5A4B54', opacity: 0.6 }}>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
