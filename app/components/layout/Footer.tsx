import React from 'react';
import { Instagram, Facebook, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-950 text-cream-100 py-12 border-t border-coffee-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-serif text-2xl font-bold tracking-wider">Eternity Coffee</h3>
            <p className="text-coffee-300 text-sm max-w-xs">
              Teman begadang skripsian & nongkrong tanpa henti di Jogja.
            </p>
          </div>

          {/* Quick Links / Socials */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-sage-400 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-sage-400 transition-colors"><Facebook size={20} /></a>
            <a href="https://maps.app.goo.gl/..." target="_blank" className="hover:text-sage-400 transition-colors"><MapPin size={20} /></a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-coffee-900 text-center text-xs text-coffee-400">
          <p>&copy; {currentYear} Eternity Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}