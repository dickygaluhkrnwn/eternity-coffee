"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Coffee, Utensils, Star, Info, Sparkles, Droplets } from 'lucide-react';

// --- DATA MENU ---
const menuItems = [
  // --- SIGNATURE ---
  {
    id: 1,
    name: "Reinkarnasi Aren",
    price: "21",
    desc: "Arabica beans + secret milk + homemade aren. Light & addictive.",
    category: "signature",
    image: "/images/menu/kopi-susu-reinkarnasi-aren.jpg"
  },
  {
    id: 2,
    name: "Butterscotch",
    price: "26",
    desc: "Creamy, buttery, and aromatic coffee blend.",
    category: "signature",
    image: "/images/menu/kopi-susu-reinkarnasi-butterscotch.jpg"
  },
  {
    id: 3,
    name: "Salted Caramel",
    price: "26",
    desc: "Perfect balance of sweet and savory homemade caramel.",
    category: "signature",
    image: "/images/menu/kopi-susu-reinkarnasi-salted.jpg"
  },

  // --- COFFEE (Basic) ---
  {
    id: 4,
    name: "Cafe Latte",
    price: "28",
    desc: "Smooth Arabica espresso with steamed milk.",
    category: "coffee",
    image: "/images/menu/cafe-latte.jpg"
  },
  {
    id: 5,
    name: "Americano",
    price: "25",
    desc: "Pure Arabica. Bold, fresh, and energizing.",
    category: "coffee",
    image: "/images/menu/americano.jpg"
  },

  // --- NON-COFFEE (Latte Series) ---
  {
    id: 6,
    name: "Charcoal Latte",
    price: "29",
    desc: "Unique texture with detoxifying charcoal.",
    category: "non-coffee",
    image: "/images/menu/charcoal-latte.jpg"
  },
  {
    id: 7,
    name: "Matcha Latte",
    price: "29",
    desc: "Premium pure matcha with silky milk.",
    category: "non-coffee",
    image: "/images/menu/matcha-latte.jpg"
  },
  {
    id: 8,
    name: "Red Velvet",
    price: "29",
    desc: "Sweet chocolate taste with a vibrant red hue.",
    category: "non-coffee",
    image: "/images/menu/redvelvet-latte.jpg"
  },
  {
    id: 9,
    name: "Chocolate",
    price: "29",
    desc: "Rich, creamy, and irresistible premium chocolate.",
    category: "non-coffee",
    image: "/images/menu/chocolate-latte.jpg"
  },
  
  // --- FRESH ---
  {
    id: 10,
    name: "Lychee Like You",
    price: "28",
    desc: "Yakult based refresher. A crowd favorite since 2019!",
    category: "fresh",
    image: "/images/menu/lychee-like-you.jpg"
  },
  {
    id: 11,
    name: "Original Tea",
    price: "27",
    desc: "Simple, refreshing, and calming.",
    category: "fresh",
    image: "/images/menu/original-tea.jpg"
  },

  // --- FOOD (Ricebox & Snacks) ---
  {
    id: 12,
    name: "Beef Blackpepper",
    price: "-",
    desc: "Ricebox with savory blackpepper beef.",
    category: "food",
    isSoldOut: true,
    image: "/images/menu/beef-blackpepper.jpg"
  },
  {
    id: 13,
    name: "Beef Woku",
    price: "-",
    desc: "Ricebox with spicy aromatic Manado style beef.",
    category: "food",
    isSoldOut: true,
    image: "/images/menu/beef-woku.jpg"
  },
  {
    id: 14,
    name: "Chicken Blackpepper",
    price: "-",
    desc: "Ricebox with savory blackpepper chicken.",
    category: "food",
    isSoldOut: true,
    image: "/images/menu/chicken-blackpepper.jpg"
  },
  {
    id: 15,
    name: "Chicken Woku",
    price: "-",
    desc: "Ricebox with spicy aromatic Manado style chicken.",
    category: "food",
    isSoldOut: true,
    image: "/images/menu/chicken-woku.jpg"
  },
  {
    id: 16,
    name: "Mix Platter",
    price: "-",
    desc: "Fries, Nugget, Sausage, Cikuwa. Perfect for sharing.",
    category: "food",
    isSoldOut: true,
    image: "/images/menu/mix-platter.jpg"
  },
  {
    id: 17,
    name: "French Fries",
    price: "-",
    desc: "Classic golden crispy potato fries.",
    category: "food",
    isSoldOut: true,
    image: "/images/menu/french-fries.jpg"
  },
  {
    id: 18,
    name: "Nugget",
    price: "-",
    desc: "Crispy chicken nuggets.",
    category: "food",
    isSoldOut: true,
    image: "/images/menu/nugget.jpg"
  },
  {
    id: 19,
    name: "Sausage",
    price: "-",
    desc: "Fried savory sausages.",
    category: "food",
    isSoldOut: true,
    image: "/images/menu/sausage.jpg"
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'signature', label: 'Signature' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'non-coffee', label: 'Latte' },
  { id: 'fresh', label: 'Fresh' },
  { id: 'food', label: 'Eats' },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-coffee-950 text-cream-50 selection:bg-sage-500 selection:text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-cream-100 to-coffee-400">
              Our Menu.
            </h1>
            <p className="text-cream-200/60 text-lg max-w-md">
              Crafted with passion, served with pride.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? 'bg-cream-100 text-coffee-950 border-cream-100 shadow-glow'
                    : 'bg-transparent text-cream-200/50 border-white/10 hover:border-white/30 hover:text-cream-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Menu */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 hover:border-sage-500/50 transition-all duration-500 flex flex-col ${
                  item.isSoldOut ? 'opacity-50 grayscale' : 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50'
                }`}
              >
                {/* Image Area */}
                <div className="h-64 bg-coffee-900 relative overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  
                  {/* Sold Out Overlay */}
                  {item.isSoldOut && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
                      <span className="font-bold text-red-500 border border-red-500 px-4 py-1 rounded text-sm tracking-widest uppercase -rotate-12">
                        Sold Out
                      </span>
                    </div>
                  )}

                  {/* Real Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        // Fallback jika gambar error/tidak ketemu
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-coffee-800');
                        e.currentTarget.parentElement!.innerHTML = '<span class="text-white/20 text-xs">No Image</span>';
                      }}
                    />
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    {item.category === 'signature' && (
                      <div className="flex items-center gap-1 bg-sage-500/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        <Sparkles size={10} /> Signature
                      </div>
                    )}
                    {item.category === 'fresh' && (
                      <div className="flex items-center gap-1 bg-blue-500/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        <Droplets size={10} /> Fresh
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-20 -mt-12 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-2xl font-bold text-cream-100 leading-none group-hover:text-sage-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  
                  <p className="text-cream-200/50 text-sm mb-6 line-clamp-2 min-h-[40px] flex-grow">
                    {item.desc}
                  </p>

                  <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
                    <span className="font-mono text-xl font-bold text-sage-400">
                      {item.isSoldOut ? '---' : `${item.price}k`}
                    </span>
                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-coffee-950 transition-all">
                      <Info size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
      
      <Footer />
    </main>
  );
}