import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, Heart, ShoppingBag, Menu, X, ChevronRight, User } from "lucide-react";

interface LuxuryHeaderProps {
  showBackButton?: boolean;
  backHref?: string;
  backLabel?: string;
}

export function LuxuryHeader({ showBackButton, backHref = "/", backLabel = "Back to Home" }: LuxuryHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [occasionsOpen, setOccasionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const occasionItems = [
    { name: "Birthday", to: "/shop" },
    { name: "Couple", to: "/shop" },
    { name: "Kids", to: "/shop" },
    { name: "Self Care", to: "/shop" },
    { name: "Anniversary", to: "/shop" },
    { name: "Festive", to: "/shop" },
    { name: "Pet Lovers", to: "/shop" },
    { name: "Graduation", to: "/shop" },
    { name: "Baby Shower", to: "/shop" },
  ];

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/shop" },
    { name: "Build Your Box", to: "/build-your-box" },
    { name: "Our Story", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        minHeight: '80px',
        backgroundColor: scrolled ? 'rgba(250, 247, 242, 0.92)' : 'rgba(250, 247, 242, 0.95)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(90, 75, 84, 0.08)',
        boxShadow: scrolled ? '0 4px 24px rgba(90, 75, 84, 0.06)' : 'none',
      }}
    >
      <div className="container-evermaze h-full flex items-center justify-between">
        {/* Left: Back button or Logo */}
        <div className="flex items-center">
          {showBackButton ? (
            <Link
              to={backHref as any}
              className="flex items-center gap-2 text-sm font-medium transition-all hover:opacity-70 min-h-[44px] pr-4"
              style={{ color: '#5A4B54' }}
            >
              <X className="size-5" />
              <span className="hidden sm:inline">{backLabel}</span>
            </Link>
          ) : (
            <Link to="/" className="flex flex-col items-start leading-none">
              <span 
                className="font-serif text-2xl lg:text-3xl tracking-[0.18em] font-semibold" 
                style={{ color: '#5A4B54' }}
              >
                EVERMAZE
              </span>
              <span 
                className="mt-0.5 text-[9px] lg:text-[10px] tracking-[0.35em] uppercase" 
                style={{ color: '#5A4B54', opacity: 0.65 }}
              >
                Just For You
              </span>
            </Link>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 absolute left-1/2 transform -translate-x-1/2">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.name}
              to={item.to as any}
              className="relative text-sm font-medium py-2 group"
              style={{ color: '#5A4B54', letterSpacing: '0.02em' }}
            >
              <span className="relative z-10 group-hover:text-[#8C7A95] transition-colors duration-300">
                {item.name}
              </span>
              <span 
                className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8C7A95] transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
          
          {/* Occasions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOccasionsOpen(true)}
            onMouseLeave={() => setOccasionsOpen(false)}
          >
            <button
              className="relative text-sm font-medium py-2 flex items-center gap-1 group"
              style={{ color: '#5A4B54', letterSpacing: '0.02em' }}
            >
              <span className="relative z-10 group-hover:text-[#8C7A95] transition-colors duration-300">
                Occasions
              </span>
              <ChevronRight 
                className="size-3 transition-transform duration-300" 
                style={{ transform: occasionsOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              />
              <span 
                className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8C7A95] transition-all duration-300 group-hover:w-full"
              />
            </button>
            
            {occasionsOpen && (
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-56 rounded-2xl shadow-2xl border border-[rgba(90,75,84,0.1)] py-3 animate-in fade-in slide-in-from-top-2 duration-200"
                style={{ backgroundColor: '#FAF7F2' }}
              >
                {occasionItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to as any}
                    className="block px-5 py-2.5 text-sm transition-all duration-200 hover:bg-[rgba(140,122,149,0.08)] hover:pl-6"
                    style={{ color: '#5A4B54' }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navItems.slice(2).map((item) => (
            <Link
              key={item.name}
              to={item.to as any}
              className="relative text-sm font-medium py-2 group"
              style={{ color: '#5A4B54', letterSpacing: '0.02em' }}
            >
              <span className="relative z-10 group-hover:text-[#8C7A95] transition-colors duration-300">
                {item.name}
              </span>
              <span 
                className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8C7A95] transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Search */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[rgba(90,75,84,0.06)]"
            style={{ color: '#5A4B54' }}
            aria-label="Search"
          >
            <Search className="size-[18px]" />
          </button>
          
          {/* User */}
          <Link
            to="/profile"
            className="hidden sm:flex p-3 min-w-[44px] min-h-[44px] items-center justify-center rounded-full transition-all duration-300 hover:bg-[rgba(90,75,84,0.06)]"
            style={{ color: '#5A4B54' }}
            aria-label="Account"
          >
            <User className="size-[18px]" />
          </Link>
          
          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[rgba(90,75,84,0.06)]"
            style={{ color: '#5A4B54' }}
            aria-label="Wishlist"
          >
            <Heart className="size-[18px]" />
          </Link>
          
          {/* Cart */}
          <Link
            to="/cart"
            className="relative p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[rgba(90,75,84,0.06)]"
            style={{ color: '#5A4B54' }}
            aria-label="Cart"
          >
            <ShoppingBag className="size-[18px]" />
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[rgba(90,75,84,0.06)]"
            style={{ color: '#5A4B54' }}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div 
          className="absolute inset-x-0 top-full border-t border-[rgba(90,75,84,0.08)] py-5 px-4 animate-in slide-in-from-top duration-300"
          style={{ backgroundColor: '#FAF7F2' }}
        >
          <div className="container-evermaze">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 size-5" style={{ color: '#5A4B54', opacity: 0.5 }} />
              <input
                type="text"
                placeholder="Search for hampers, gifts..."
                className="w-full pl-14 pr-6 py-4 rounded-full text-base bg-white border border-[rgba(90,75,84,0.12)] focus:outline-none focus:border-[#8C7A95] transition-colors"
                style={{ color: '#5A4B54' }}
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2"
                style={{ color: '#5A4B54', opacity: 0.5 }}
              >
                <X className="size-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden absolute top-full inset-x-0 border-t border-[rgba(90,75,84,0.08)] py-6 px-4 animate-in slide-in-from-top duration-300 overflow-y-auto max-h-[calc(100vh-80px)]"
          style={{ backgroundColor: '#FAF7F2' }}
        >
          <nav className="container-evermaze space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to as any}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-4 text-base font-medium rounded-xl transition-all duration-200 hover:bg-[rgba(90,75,84,0.06)]"
                style={{ color: '#5A4B54' }}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4 pb-2">
              <p className="px-4 text-xs tracking-widest uppercase mb-3" style={{ color: '#5A4B54', opacity: 0.5 }}>
                Occasions
              </p>
              <div className="grid grid-cols-2 gap-2">
                {occasionItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to as any}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-sm rounded-xl transition-all duration-200 hover:bg-[rgba(90,75,84,0.06)]"
                    style={{ color: '#5A4B54' }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
