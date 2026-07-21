import { useEffect, useRef } from 'react';
import { X, Check, AlertCircle, Info, Sparkles } from 'lucide-react';

export type ModalType = 'success' | 'error' | 'info' | 'confirmation';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: ModalType;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  showCloseButton?: boolean;
  icon?: React.ReactNode;
}

export function ConfirmationModal({
  isOpen,
  onClose,
  type = 'success',
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  showCloseButton = true,
  icon,
}: ConfirmationModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const typeConfig = {
    success: {
      iconBg: 'bg-[#7D6B87]/10',
      iconColor: 'text-[#7D6B87]',
      buttonBg: 'bg-[#7D6B87] hover:bg-[#66566F]',
      icon: <Check className="w-7 h-7" />,
    },
    error: {
      iconBg: 'bg-red-50',
      iconColor: 'text-red-500',
      buttonBg: 'bg-red-500 hover:bg-red-600',
      icon: <AlertCircle className="w-7 h-7" />,
    },
    info: {
      iconBg: 'bg-[#7D6B87]/10',
      iconColor: 'text-[#7D6B87]',
      buttonBg: 'bg-[#7D6B87] hover:bg-[#66566F]',
      icon: <Info className="w-7 h-7" />,
    },
    confirmation: {
      iconBg: 'bg-[#7D6B87]/10',
      iconColor: 'text-[#7D6B87]',
      buttonBg: 'bg-[#7D6B87] hover:bg-[#66566F]',
      icon: <Sparkles className="w-7 h-7" />,
    },
  };

  const config = typeConfig[type];
  const displayIcon = icon || config.icon;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#2E292C]/50 backdrop-blur-md animate-[modal-overlay-in_0.3s_ease-out]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-lg bg-[#F8F5F2] rounded-3xl shadow-[0_25px_80px_rgba(46,41,44,0.2)] overflow-hidden animate-[modal-content-in_0.5s_cubic-bezier(0.4,0,0.2,1)]"
      >
        {/* Decorative top accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E9DDD2] via-[#7D6B87] to-[#E9DDD2]" />

        <div className="p-10 md:p-12">
          {/* Close button */}
          {showCloseButton && (
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2.5 rounded-full hover:bg-[#E9DDD2] transition-all duration-300 text-[#4B4347]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {/* Icon */}
          <div 
            className={`w-20 h-20 rounded-full ${config.iconBg} ${config.iconColor} flex items-center justify-center mx-auto mb-8`}
          >
            {displayIcon}
          </div>

          {/* Title */}
          <h3 
            id="modal-title" 
            className="text-center font-serif text-3xl md:text-4xl text-[#2F272C] mb-4"
            style={{ fontWeight: 400 }}
          >
            {title}
          </h3>

          {/* Message */}
          <p className="text-center text-[#4B4347] leading-relaxed text-base md:text-lg px-4">
            {message}
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {onConfirm && (
              <button
                onClick={onConfirm}
                className={`${config.buttonBg} text-white px-10 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}
              >
                {confirmText}
              </button>
            )}
            {cancelText && (
              <button
                onClick={onClose}
                className="bg-[#E9DDD2] hover:bg-[#D4C9BF] text-[#2F272C] px-10 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300"
              >
                {cancelText}
              </button>
            )}
            {!onConfirm && (
              <button
                onClick={onClose}
                className={`${config.buttonBg} text-white px-10 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300`}
              >
                Got it
              </button>
            )}
          </div>
        </div>

        {/* Decorative bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E9DDD2] via-[#7D6B87] to-[#E9DDD2]" />
      </div>
    </div>
  );
}
