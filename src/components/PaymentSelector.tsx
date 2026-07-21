import { CreditCard, Smartphone, Building2, Wallet, Check } from 'lucide-react';

export type PaymentMethod = 'card' | 'upi' | 'netbanking' | 'wallet' | 'cod';

interface PaymentSelectorProps {
  selected: PaymentMethod;
  onSelect: (method: PaymentMethod) => void;
  totalAmount?: string;
}

interface PaymentOption {
  id: PaymentMethod;
  label: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
}

export function PaymentSelector({ selected, onSelect, totalAmount }: PaymentSelectorProps) {
  const paymentOptions: PaymentOption[] = [
    {
      id: 'card',
      label: 'Credit / Debit Card',
      description: 'Visa, Mastercard, RuPay',
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      id: 'upi',
      label: 'UPI',
      description: 'GPay, PhonePe, Paytm',
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      id: 'netbanking',
      label: 'Net Banking',
      description: 'All major banks',
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      id: 'wallet',
      label: 'Wallet',
      description: 'Paytm, Mobikwik, FreeCharge',
      icon: <Wallet className="w-5 h-5" />,
    },
    {
      id: 'cod',
      label: 'Cash on Delivery',
      description: 'Pay when you receive',
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>,
      badge: 'Popular',
    },
  ];

  return (
    <div className="space-y-4">
      <h4 className="font-serif text-2xl text-[#2F272C] mb-6" style={{ fontWeight: 400 }}>Select Payment Method</h4>
      
      <div className="grid gap-4">
        {paymentOptions.map((option) => {
          const isSelected = selected === option.id;
          
          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={`
                relative w-full p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 text-left
                ${isSelected 
                  ? 'border-[#7D6B87] bg-[#7D6B87]/5 shadow-md' 
                  : 'border-[#E9DDD2] bg-[#F8F5F2] hover:border-[#7D6B87]/50 hover:bg-[#E9DDD2]/30'
                }
              `}
            >
              {/* Selection indicator */}
              <div 
                className={`
                  absolute top-5 right-5 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all
                  ${isSelected 
                    ? 'border-[#7D6B87] bg-[#7D6B87]' 
                    : 'border-[#E9DDD2] bg-transparent'
                  }
                `}
              >
                {isSelected && <Check className="w-4 h-4 text-white" />}
              </div>

              {/* Badge */}
              {option.badge && (
                <span className="absolute -top-2.5 left-5 bg-[#7D6B87] text-white text-[10px] font-medium px-3 py-1 rounded-full tracking-wide">
                  {option.badge}
                </span>
              )}

              <div className="flex items-center gap-5">
                {/* Icon */}
                <div 
                  className={`
                    w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors
                    ${isSelected ? 'bg-[#7D6B87]/15 text-[#7D6B87]' : 'bg-[#E9DDD2] text-[#4B4347]'}
                  `}
                >
                  {option.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#2F272C] text-lg">{option.label}</p>
                  <p className="text-[#4B4347] mt-1">{option.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Security note */}
      <div className="flex items-center justify-center gap-3 mt-6 text-sm text-[#4B4347]/70">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        <span className="font-medium">Your payment information is secure and encrypted</span>
      </div>
    </div>
  );
}
