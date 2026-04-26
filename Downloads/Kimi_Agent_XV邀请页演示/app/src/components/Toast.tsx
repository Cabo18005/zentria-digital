import { useEffect, useState } from 'react';
import { CheckCircle, X, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose: () => void;
}

export function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-400" />,
    error: <X className="w-5 h-5 text-red-400" />,
    info: <Info className="w-5 h-5 text-[#d4af37]" />,
  };

  const bgColors = {
    success: 'border-green-400/50',
    error: 'border-red-400/50',
    info: 'border-[#d4af37]/50',
  };

  return (
    <div
      className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-[9999] bg-black/90 border ${bgColors[type]} rounded-full px-6 py-3 flex items-center gap-3 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {icons[type]}
      <span className="text-sm text-white">{message}</span>
    </div>
  );
}

// Toast container hook
import { createRoot } from 'react-dom/client';

export function showToast(message: string, type: ToastType = 'info', duration?: number) {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const root = createRoot(container);
  
  const handleClose = () => {
    root.unmount();
    container.remove();
  };

  root.render(<Toast message={message} type={type} duration={duration} onClose={handleClose} />);
}
