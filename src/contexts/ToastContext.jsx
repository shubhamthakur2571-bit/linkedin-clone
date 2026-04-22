import { createContext, useContext, useState, useCallback, useMemo } from "react";

const ToastContext = createContext(null);

export const TOAST_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
  WARNING: "warning",
};

const TOAST_CONFIG = {
  [TOAST_TYPES.SUCCESS]: {
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-200 dark:border-green-800",
    text: "text-green-800 dark:text-green-200",
    icon: "✓",
    iconBg: "bg-green-500",
  },
  [TOAST_TYPES.ERROR]: {
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-800",
    text: "text-red-800 dark:text-red-200",
    icon: "✕",
    iconBg: "bg-red-500",
  },
  [TOAST_TYPES.INFO]: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-800 dark:text-blue-200",
    icon: "ℹ",
    iconBg: "bg-blue-500",
  },
  [TOAST_TYPES.WARNING]: {
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
    border: "border-yellow-200 dark:border-yellow-800",
    text: "text-yellow-800 dark:text-yellow-200",
    icon: "!",
    iconBg: "bg-yellow-500",
  },
};

let toastIdCounter = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = TOAST_TYPES.INFO, duration = 3000) => {
    const id = ++toastIdCounter;
    const toast = {
      id,
      message,
      type,
      duration,
      exiting: false,
    };

    setToasts((prev) => [...prev, toast]);

    // Auto dismiss
    setTimeout(() => {
      dismissToast(id);
    }, duration);

    return id;
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
    );

    // Remove from DOM after animation
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 300);
  }, []);

  const value = useMemo(
    () => ({
      showToast,
      dismissToast,
      TOAST_TYPES,
    }),
    [showToast, dismissToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

function ToastContainer({ toasts, onDismiss }) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
}

function ToastItem({ toast, onDismiss }) {
  const config = TOAST_CONFIG[toast.type] || TOAST_CONFIG[TOAST_TYPES.INFO];

  return (
    <div
      className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border ${config.bg} ${config.border} transform transition-all duration-300 ${
        toast.exiting ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
      }`}
      style={{
        animation: toast.exiting ? undefined : "slideInFromRight 0.3s ease-out",
      }}
    >
      <div
        className={`w-6 h-6 rounded-full ${config.iconBg} text-white flex items-center justify-center text-sm font-bold shrink-0`}
      >
        {config.icon}
      </div>
      <span className={`text-sm font-medium ${config.text}`}>{toast.message}</span>
      <button
        onClick={() => onDismiss(toast.id)}
        className={`ml-2 p-1 rounded hover:bg-black/10 transition-colors ${config.text}`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default ToastProvider;
