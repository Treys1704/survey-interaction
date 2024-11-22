import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
}

export default function Button({ 
  onClick, 
  disabled, 
  variant = 'primary',
  className = '',
  children 
}: ButtonProps) {
  const baseStyles = "py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors group";
  const variantStyles = {
    primary: `${disabled 
      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
      : 'bg-black text-white hover:bg-gray-900'}`,
    secondary: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      layout
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}