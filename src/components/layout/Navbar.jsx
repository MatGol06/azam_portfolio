"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-secondary tracking-tighter hover:opacity-80 transition-opacity">
          Azam<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <a href="https://github.com/MatGol06" target="_blank" rel="noreferrer" className="text-muted hover:text-secondary transition-colors">
              <FaGithub size={20} />
            </a>
            <Button variant="primary" size="sm" onClick={() => window.location.href='#contact'}>
              Contact Me
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface border-b border-border shadow-lg md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-secondary py-2 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 mt-4">
                 <Button variant="primary" className="w-full" onClick={() => { setMobileMenuOpen(false); window.location.href='#contact'; }}>
                   Contact Me
                 </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
