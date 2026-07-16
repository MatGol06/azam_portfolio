"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Download } from "lucide-react";

export function HeroSection() {
  const { hero } = portfolioData;

  return (
    <div className="min-h-[90vh] flex flex-col justify-center pt-20 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none" />

      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="success" className="mb-8">
            <span className="w-2 h-2 rounded-full bg-success mr-2 animate-pulse" />
            {hero.availability}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6"
        >
          {hero.title.split(' ').map((word, i) => (
            word === "Premium" ? <span key={i} className="text-primary block md:inline"> {word} </span> : <span key={i}>{word} </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted max-w-2xl mb-10 leading-relaxed"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" onClick={() => window.location.href='#projects'}>
            View Projects <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button variant="secondary" size="lg" onClick={() => window.open('/resume.pdf', '_blank')}>
            Download Resume <Download size={18} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
