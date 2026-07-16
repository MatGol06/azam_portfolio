"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Card({ className, children, hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-2xl bg-card border border-border p-6 shadow-lg backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
