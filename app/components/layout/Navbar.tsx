"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Coffee, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Location', path: '/location' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Container - Floating Style */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className={`
          flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500
          ${isScrolled 
            ? 'w-full max-w-5xl bg-coffee-950/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20' 
            : 'w-full max-w-7xl bg-transparent border border-transparent'
          }
        `}>
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-coffee-800 text-cream-100' : 'bg-white/10 backdrop-blur-md text-white'}`}>
              <Coffee size={20} className="group-hover:rotate-12 transition-transform" />
            </div>
            <span className={`font-serif font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-cream-100' : 'text-white drop-shadow-md'}`}>
              Eternity<span className="text-sage-400">.</span>
            </span>
          </Link>

          {/* Desktop Menu - Pill Style */}
          <div className="hidden md:flex items-center bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/5">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-coffee-100 rounded-full shadow-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors ${isActive ? 'text-coffee-950 font-bold' : 'text-cream-100 hover:text-white'}`}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right Action (Mobile Toggle / Extra) */}
          <div className="flex items-center gap-3">
            <Link href="/location" className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white hover:text-coffee-950 transition-all">
              <MapPin size={18} />
            </Link>
            
            <button 
              className={`md:hidden p-2 rounded-full transition-colors ${isScrolled ? 'text-cream-100' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Full Screen Modern */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-coffee-950/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-8 right-8 text-cream-100 p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-serif text-4xl tracking-wide transition-colors ${
                      pathname === item.path ? 'text-sage-400 italic' : 'text-cream-100 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-12 flex gap-4">
               <div className="w-12 h-[1px] bg-white/20"></div>
               <span className="text-white/40 text-xs tracking-[0.3em]">EST 2024</span>
               <div className="w-12 h-[1px] bg-white/20"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}