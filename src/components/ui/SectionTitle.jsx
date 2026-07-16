"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionTitle({ title, subtitle, className }) {
  return (
    <div className={cn("flex flex-col gap-2 mb-12", className)}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-primary font-medium tracking-wider text-sm uppercase"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
