"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-3 z-10";
  
  const variants = {
    primary: "bg-coffee-500 text-cream-50 shadow-lg shadow-coffee-900/20 hover:shadow-coffee-500/40 border border-coffee-400/20",
    secondary: "bg-cream-100 text-coffee-900 hover:bg-white shadow-md",
    outline: "bg-transparent border-2 border-coffee-300/30 text-cream-100 hover:border-coffee-300 hover:bg-coffee-900/30 backdrop-blur-sm",
    ghost: "bg-transparent text-cream-200 hover:text-white hover:bg-white/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 0 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Efek Kilauan (Shimmer) untuk varian Primary */}
      {variant === 'primary' && (
        <span className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};