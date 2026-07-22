import { useEffect, useRef } from "react";
import { X, Check, AlertCircle, Info, AlertTriangle, PartyPopper } from "lucide-react";

type ModalType = "success" | "error" | "warning" | "info" | "confirmation";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: ModalType;
  title: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  showCancel?: boolean;
  icon?: "check" | "party" | "alert" | "info";
  orderNumber?: string;
  additionalInfo?: React.ReactNode;
}

export function ConfirmationModal({
  isOpen,
  onClose,
  type = "success",
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  showCancel = false,
  icon = "check",
  orderNumber,
  additionalInfo,
}: ConfirmationModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  const iconColors = {
    success: { bg: "rgba(140, 122, 149, 0.12)", icon: "#8C7A95" },
    error: { bg: "rgba(193, 124, 116, 0.12)", icon: "#C17C74" },
    warning: { bg: "rgba(220, 201, 174, 0.3)", icon: "#DCC9AE" },
    info: { bg: "rgba(140, 122, 149, 0.12)", icon: "#8C7A95" },
  };

  const getIcon = () => {
    switch (icon) {
      case "party":
        return <PartyPopper className="size-10" style={{ color: iconColors[type].icon }} />;
      case "alert":
        return <AlertCircle className="size-10" style={{ color: iconColors[type].icon }} />;
      case "info":
        return <Info className="size-10" style={{ color: iconColors[type].icon }} />;
      default:
        return <Check className="size-10" style={{ color: iconColors[type].icon }} />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-300"
      style={{
        backgroundColor: "rgba(90, 75, 84, 0.4)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        animation: "fadeIn 0.3s ease-out",
      }}
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="w-full max-w-md rounded-3xl p-8 text-center transform transition-all"
        style={{
          backgroundColor: "#FAF7F2",
          boxShadow: "0 25px 80px rgba(90, 75, 84, 0.25), 0 8px 24px rgba(90, 75, 84, 0.15)",
          animation: "scaleIn 0.3s ease-out",
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Icon */}
        <div
          className="size-20 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ backgroundColor: iconColors[type].bg }}
        >
          {getIcon()}
        </div>

        {/* Title */}
        <h2
          id="modal-title"
          className="font-serif text-2xl sm:text-3xl mb-3"
          style={{ color: "#5A4B54" }}
        >
          {title}
        </h2>

        {/* Message */}
        {message && (
          <p className="text-base mb-6" style={{ color: "#5A4B54", opacity: 0.8 }}>
            {message}
          </p>
        )}

        {/* Order Number */}
        {orderNumber && (
          <div
            className="rounded-2xl p-5 mb-6"
            style={{ backgroundColor: "#F3EEE8", border: "1px solid rgba(90, 75, 84, 0.08)" }}
          >
            <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#5A4B54", opacity: 0.6 }}>
              Your Order Number
            </p>
            <p className="font-serif text-2xl" style={{ color: "#8C7A95" }}>
              {orderNumber}
            </p>
          </div>
        )}

        {/* Additional Info */}
        {additionalInfo && <div className="mb-6">{additionalInfo}</div>}

        {/* Actions */}
        <div className={`flex flex-col sm:flex-row gap-3 ${showCancel ? "" : "justify-center"}`}>
          {showCancel && (
            <button
              onClick={() => {
                onCancel?.();
                onClose();
              }}
              className="btn-outline flex-1"
            >
              {cancelText}
            </button>
          )}
          <button
            onClick={() => {
              onConfirm?.();
              if (type !== "confirmation" || !showCancel) {
                onClose();
              }
            }}
            className={showCancel ? "btn-primary flex-1" : "btn-primary"}
          >
            {confirmText}
          </button>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full transition-all duration-200 hover:bg-[rgba(90,75,84,0.06)]"
          style={{ color: "#5A4B54", opacity: 0.5 }}
          aria-label="Close"
        >
          <X className="size-5" />
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

// Specialized order success modal
interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
  email?: string;
}

export function OrderSuccessModal({ isOpen, onClose, orderNumber, email }: OrderSuccessModalProps) {
  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      type="success"
      icon="party"
      title="Order Received!"
      message="Thank you for choosing Evermaze. We've received your order and are preparing your personalized hamper with care."
      confirmText="Continue Shopping"
      additionalInfo={
        <div className="text-left space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-[rgba(90,75,84,0.1)]">
            <span className="text-sm" style={{ color: "#5A4B54", opacity: 0.7 }}>Order Number</span>
            <span className="font-medium" style={{ color: "#8C7A95" }}>{orderNumber}</span>
          </div>
          {email && (
            <div className="flex items-center justify-between py-2">
              <span className="text-sm" style={{ color: "#5A4B54", opacity: 0.7 }}>Confirmation sent to</span>
              <span className="text-sm" style={{ color: "#5A4B54" }}>{email}</span>
            </div>
          )}
          <p className="text-sm pt-2" style={{ color: "#5A4B54", opacity: 0.6 }}>
            You'll receive an order confirmation via email shortly. We'll notify you when your order ships.
          </p>
        </div>
      }
    />
  );
}

// Confirmation dialog for payment or destructive actions
interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  isDestructive = false,
}: ConfirmDialogProps) {
  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      type={isDestructive ? "error" : "confirmation"}
      title={title}
      message={message}
      confirmText={confirmText}
      cancelText={cancelText}
      onConfirm={onConfirm}
      showCancel
      icon="alert"
    />
  );
}
