"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { MapPin, Clock, Phone, Wifi, Car, BatteryCharging, Wind, Music, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function LocationPage() {
  const facilities = [
    { icon: <Wifi className="w-5 h-5" />, label: "High-Speed WiFi" },
    { icon: <BatteryCharging className="w-5 h-5" />, label: "Power Outlets" },
    { icon: <Car className="w-5 h-5" />, label: "Spacious Parking" },
    { icon: <Wind className="w-5 h-5" />, label: "AC & Outdoor" },
    { icon: <Music className="w-5 h-5" />, label: "Weekend Live Music" },
    { icon: <MapPin className="w-5 h-5" />, label: "Mushola Available" },
  ];

  return (
    <main className="min-h-screen bg-coffee-950 text-cream-50 selection:bg-sage-500 selection:text-white">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Info Text */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9]">
                Find<br/>
                <span className="text-sage-500">Sanctuary.</span>
              </h1>
              <p className="text-cream-200/60 text-lg max-w-md">
                Terletak di jantung keramaian mahasiswa, tapi menawarkan ketenangan untuk fokusmu. Buka 24 jam, setiap hari.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <div className="group border-b border-white/10 pb-6 hover:border-sage-500/50 transition-colors">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Address</h3>
                <p className="text-xl font-medium leading-relaxed group-hover:text-sage-200 transition-colors">
                  Jalan Kaliurang KM 12 Ngaglik, Candi Karang,<br/>
                  Sardonoharjo, Sleman, Yogyakarta 55281
                </p>
              </div>

              <div className="group border-b border-white/10 pb-6 hover:border-sage-500/50 transition-colors">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Hours</h3>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-medium group-hover:text-sage-200 transition-colors">Monday - Sunday</p>
                  <span className="bg-sage-500/20 text-sage-400 px-3 py-1 rounded text-sm font-bold">OPEN 24H</span>
                </div>
              </div>

              <div className="group border-b border-white/10 pb-6 hover:border-sage-500/50 transition-colors">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Contact</h3>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-medium group-hover:text-sage-200 transition-colors">0857-1221-7561</p>
                  <Button variant="outline" className="px-4 py-2 text-xs">
                    WhatsApp <ArrowUpRight size={14} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Facilities Grid */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Facilities</h3>
              <div className="grid grid-cols-2 gap-4">
                {facilities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-cream-200/80">
                    <div className="text-sage-500">{item.icon}</div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map & Visuals */}
          <div className="relative h-[600px] lg:h-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group">
            {/* Dark Mode Map Filter */}
            <div className="absolute inset-0 bg-coffee-900/20 pointer-events-none z-10 mix-blend-multiply" />
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.899684336109!2d110.40798437583923!3d-7.693916676249561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ec7c3b9b0ad%3A0x7f0e0f0f0f0f0f0f!2sJl.%20Kaliurang%20No.KM.12%2C%20Candi%20Karang%2C%20Sardonoharjo%2C%20Kec.%20Ngaglik%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055581!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(85%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            ></iframe>

            {/* Overlay Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-coffee-950/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 z-20">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Navigate</p>
                  <p className="font-serif text-xl font-bold">Get Directions</p>
                </div>
                <div className="bg-sage-500 p-3 rounded-full text-white cursor-pointer hover:bg-sage-400 transition-colors">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}