"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Button({ className, variant = "primary", size = "default", children, ...props }) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-600 shadow-md",
    secondary: "bg-surface text-secondary hover:bg-gray-800 border border-border",
    ghost: "hover:bg-surface text-muted hover:text-secondary",
  };
  
  const sizes = {
    default: "h-12 px-6 py-3 text-base",
    sm: "h-9 px-4 text-sm",
    lg: "h-14 px-8 text-lg",
    icon: "h-12 w-12",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
