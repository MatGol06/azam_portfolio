"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionWrapper({ id, children, className }) {
  return (
    <section id={id} className={cn("py-24 md:py-32 overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24"
      >
        {children}
      </motion.div>
    </section>
  );
}
