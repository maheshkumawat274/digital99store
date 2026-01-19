
import React from 'react';
import { Icon } from '../../ui/Icon';
import { Link } from 'react-router-dom';

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
              src="/imgs/logo1.png"
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
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-emerald-100/60">
              <li>
                <button className="hover:text-white transition-colors">
                  <Link to='/about-us'>About Us</Link>
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                 <Link to='/contact-us'> Contact Us</Link>
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  <Link to="/terms-conditions">Terms-conditions</Link>
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  <Link to='/privacy-policy'>Privacy Policy</Link>
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  <Link to='/refund-policy'>Refund Policy</Link>
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  <Link to='/delivery-policy'>Delivery Policy</Link>
                </button>
              </li>
            </ul>
          </div>
          

          <div>
            <h4 className="text-lg font-bold mb-6">Digital Products</h4>
            <ul className="space-y-4 text-emerald-100/60">
              <li>
                <button className="hover:text-white transition-colors">
                  <Link to='/best-sellers'>Best Selling Products</Link>
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  <Link to='/trending-products'>Trending Products</Link>
                </button>
              </li>
            </ul>
          </div>
          

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
          
            <div className="space-y-4 text-emerald-100/60 text-sm">
              <p className="flex items-center gap-3 hover:text-white transition-colors">
                <Icon name="Phone" size={16} />
                <span>+91 8595428410</span>
              </p>
          
              <p className="flex items-center gap-3 hover:text-white transition-colors">
                <Icon name="Mail" size={16} />
                <span>support@digital99store.in</span>
              </p>

              <p className="flex items-center gap-3 hover:text-white transition-colors">
                <Icon name="LocateIcon" size={16} />
                <span>Sector 63, Noida</span>
              </p>
            </div>
          
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: "Facebook", label: "Facebook" },
                { icon: "Instagram", label: "Instagram" },
                { icon: "Twitter", label: "Twitter" },
                { icon: "Linkedin", label: "LinkedIn" },
              ].map((item, i) => (
                <button
                  key={i}
                  aria-label={item.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 
                             text-emerald-100/60 
                             transition-all duration-300 
                             hover:text-white hover:scale-110 hover:bg-emerald-500/20"
                >
                  <Icon name={item.icon as any} size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-100/40">
          <p>&copy; © 2026 Digital99Store. All rights reserved.</p>
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
