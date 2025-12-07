"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Wifi, BatteryCharging, ArrowUpRight, Coffee, Star, MapPin } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Button } from './components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-coffee-950 text-cream-50 selection:bg-sage-500 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        
        {/* Background Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        {/* Gradient Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-coffee-600/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-sage-900/20 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Content (Typography) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left pt-10 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mx-auto lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium tracking-widest text-cream-200">OPEN 24 HOURS</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.9] text-balance"
            >
              The Eternity <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream-100 via-cream-200 to-coffee-400">Coffee Club.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-cream-200/60 max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              Bukan sekadar tempat ngopi. Ini markas buat kamu yang produktif di malam hari, pecinta skripsi, dan pencari inspirasi tanpa batas waktu.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
            >
              <Link href="/menu">
                <Button variant="primary" className="rounded-full px-8">
                  Explore Menu <ArrowUpRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/location">
                <Button variant="outline" className="rounded-full px-8">
                  Find Us
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content (Visual Abstract) */}
          {/* FIX: Menghapus class 'hidden lg:block' agar tampil di mobile, dan menyesuaikan tinggi/margin */}
          <div className="lg:col-span-5 relative h-[450px] lg:h-[500px] w-full mt-12 lg:mt-0">
            {/* Card 1: Indoor Ambience (Utama) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-0 right-4 lg:top-10 lg:right-10 w-56 h-72 lg:w-64 lg:h-80 bg-coffee-800 rounded-3xl border border-white/10 shadow-2xl overflow-hidden group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110"
                style={{ backgroundImage: "url('/images/suasana-indoor.jpg')" }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-xs font-bold text-sage-400 uppercase tracking-wider mb-1">Cozy Space</p>
                <p className="font-serif text-2xl font-bold italic">Indoor Area</p>
              </div>
            </motion.div>

            {/* Card 2: Outdoor/Menu Vibe (Overlay) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
              animate={{ opacity: 1, scale: 1, rotate: 6 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-28 left-4 lg:top-40 lg:left-10 w-56 h-72 lg:w-64 lg:h-80 bg-coffee-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden z-10 group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                style={{ backgroundImage: "url('/images/suasana-outdoor.jpg')" }}
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-500">
                 <span className="text-white/80 font-serif text-5xl lg:text-6xl font-bold">24/7</span>
                 <span className="text-white/60 text-sm tracking-[0.3em] uppercase mt-2">Open Daily</span>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white text-coffee-950 p-2 rounded-full shadow-lg">
                <Wifi size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID FEATURES --- */}
      <section className="py-24 px-4 bg-coffee-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            
            {/* Box 1: Large Intro */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 row-span-2 bg-coffee-800 rounded-3xl p-8 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-sage-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-sage-500/30 transition-colors" />
              <div>
                <h3 className="text-3xl md:text-5xl font-serif font-bold mb-4">Space for <br/>Everyone.</h3>
                <p className="text-cream-200/70 max-w-sm">
                  Dari meja tunggal untuk fokus skripsian, sampai sofa panjang untuk diskusi tim. Kami fasilitasi semua kebutuhanmu.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full border border-white/5">
                  <Wifi size={18} className="text-sage-400" /> <span className="text-sm">High Speed</span>
                </div>
                <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full border border-white/5">
                  <BatteryCharging size={18} className="text-sage-400" /> <span className="text-sm">Power Outlets</span>
                </div>
              </div>
            </motion.div>

            {/* Box 2: Menu Highlight */}
            <Link href="/menu">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-cream-100 h-full rounded-3xl p-6 text-coffee-950 flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-transform relative overflow-hidden"
              >
                {/* Background Image Tipis */}
                <div className="absolute inset-0 bg-[url('/images/menu/kopi-susu-reinkarnasi-butterscotch.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity" />
                
                <div className="relative z-10 flex justify-between items-start">
                  <Star className="fill-coffee-950 w-8 h-8" />
                  <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-1">Best Seller</p>
                  <h4 className="text-2xl font-serif font-bold">Butterscotch <br/>Series</h4>
                </div>
              </motion.div>
            </Link>

            {/* Box 3: Ambience/Location */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-sage-900 rounded-3xl p-6 border border-white/5 flex flex-col justify-center items-center text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <h4 className="text-6xl font-serif font-bold text-sage-200">24H</h4>
              <p className="text-sage-100/60 mt-2 font-medium">Non-stop Services</p>
            </motion.div>

            {/* Box 4: CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-3 bg-gradient-to-r from-coffee-900 to-coffee-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between border border-white/10 gap-6"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Coffee className="text-cream-100" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Siap untuk produktif?</h4>
                  <p className="text-cream-200/60 text-sm">Reservasi tempatmu sekarang atau langsung datang.</p>
                </div>
              </div>
              <Link href="/location">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-coffee-950 w-full md:w-auto">
                  Cek Lokasi <MapPin size={16} />
                </Button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}