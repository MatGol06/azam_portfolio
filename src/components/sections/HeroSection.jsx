"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const { hero } = portfolioData;

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[85vh] relative z-10 pt-20 pb-12 gap-12 lg:gap-8">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-medium border-primary/50 text-primary bg-primary/10">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {hero.availability}
          </Badge>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tight mb-6 leading-[1.1]"
        >
          {hero.title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted mb-10 max-w-xl leading-relaxed"
        >
          {hero.subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/projects">
            <Button size="lg" className="w-full sm:w-auto">
              View Projects <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
          <Button variant="secondary" size="lg" onClick={() => window.open('/resume.pdf', '_blank')} className="w-full sm:w-auto">
            Download Resume <Download size={18} className="ml-2" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
        className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 shrink-0 relative group"
      >
        {/* Premium Glow Effect Behind Image */}
        <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl group-hover:bg-primary/50 transition-colors duration-500" />
        
        {/* Image Container with Border */}
        <div className="relative z-10 w-full h-full rounded-3xl p-1 bg-gradient-to-br from-primary/50 to-background">
          <div className="w-full h-full rounded-3xl overflow-hidden bg-surface">
            <img 
              src="/projects/avatar.png" 
              alt="Azam Profile" 
              className="w-full h-full object-cover scale-[1.25] -translate-y-[13%]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
