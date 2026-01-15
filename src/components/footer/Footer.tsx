
import React from 'react';
import { Icon } from '../../ui/Icon';

interface FooterProps {
  onNav: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNav }) => {
  return (
    <footer className="bg-emerald-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div onClick={() => onNav('home')} className="h-14 w-36 overflow-hidden flex items-center">
          <div className="block h-full w-full">
            <img
              src="/imgs/logo.png"
              alt="digital99store Logo"
              className="h-full w-full object-contain scale-255"
            />
          </div>
        </div>
            <p className="text-emerald-100/60 leading-relaxed">
              The world's leading marketplace for premium digital products. Empowering creators and businesses since 2026.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 transition-colors"><Icon name="Twitter" size={18} /></button>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 transition-colors"><Icon name="Instagram" size={18} /></button>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 transition-colors"><Icon name="Linkedin" size={18} /></button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Marketplace</h4>
            <ul className="space-y-4 text-emerald-100/60">
              <li><button className="hover:text-white transition-colors">All Products</button></li>
              <li><button className="hover:text-white transition-colors">Best Sellers</button></li>
              <li><button className="hover:text-white transition-colors">New Arrivals</button></li>
              <li><button className="hover:text-white transition-colors">Creative Assets</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-emerald-100/60">
              <li><button className="hover:text-white transition-colors">Help Center</button></li>
              <li><button className="hover:text-white transition-colors">Terms of Service</button></li>
              <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Join Newsletter</h4>
            <p className="text-emerald-100/60 mb-6">Get the latest updates and exclusive offers right in your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm" 
              />
              <button className="bg-emerald-500 hover:bg-emerald-400 p-3 rounded-xl transition-colors">
                <Icon name="Send" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-100/40">
          <p>&copy; 2026 Digital99store. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Powered by secure payments</span>
            <div className="flex gap-3">
               <Icon name="CreditCard" size={24} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
