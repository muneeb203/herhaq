import React from 'react';
import { LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuickExitButtonProps {
  position?: 'fixed' | 'relative';
  className?: string;
}

const QuickExitButton: React.FC<QuickExitButtonProps> = ({ 
  position = 'fixed', 
  className = '' 
}) => {
  const quickExit = () => {
    // Clear browsing history and redirect
    window.location.replace('https://www.google.com');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={quickExit}
      className={`
        ${position === 'fixed' ? 'fixed bottom-6 right-6 z-50' : ''}
        bg-[#E53935] text-white p-3 rounded-full shadow-lg 
        hover:bg-[#D32F2F] transition-colors
        flex items-center space-x-2
        ${className}
      `}
      title="Quick Exit - Redirects to Google"
    >
      <LogOut className="h-5 w-5" />
      <span className="hidden sm:inline font-medium">Quick Exit</span>
    </motion.button>
  );
};

export default QuickExitButton;