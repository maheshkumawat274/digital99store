
import React, { useState } from 'react';
import { Icon } from '../../ui/Icon';
import { CATEGORIES } from '../../dummydata/dummydata';
import { Button } from '../../ui/Button';

interface HeaderProps {
  onNav: (view: string) => void;
  cartCount: number;
  wishlistCount: number;
  user: any;
  currentView: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onNav, 
  cartCount, 
  wishlistCount, 
  user, 
  currentView,
  searchQuery,
  onSearchChange
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const handleMobileNav = (view: string) => {
    onNav(view);
    setIsMenuOpen(false);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white glass border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          
          {/* Logo */}
          <div onClick={() => onNav('home')} className="h-14 w-36 overflow-hidden flex items-center">
          <div className="block h-full w-full">
            <img
              src="/imgs/logo.png"
              alt="digital99store Logo"
              className="h-full w-full object-contain scale-255"
            />
          </div>
        </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 lg:gap-8 mx-4">
            <button 
              className={`text-sm font-semibold transition-colors ${currentView === 'home' ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}
              onClick={() => onNav('home')}
            >
              Home
            </button>
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors"
                onMouseEnter={() => setIsCategoriesOpen(true)}
              >
                Categories <Icon name="ChevronDown" size={14} />
              </button>
              
              <div 
                className={`absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 p-4 mt-2 grid grid-cols-1 gap-1 transition-all duration-200 ${isCategoriesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                {CATEGORIES.slice(0, 10).map(cat => (
                  <button 
                    key={cat}
                    className="text-left px-3 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                    onClick={() => {
                      onNav('category-' + cat);
                      setIsCategoriesOpen(false);
                    }}
                  >
                    {cat}
                  </button>
                ))}
                <div className="border-t border-gray-100 mt-2 pt-2">
                   <button 
                    onClick={() => onNav('categories-explorer')}
                    className="w-full text-center text-xs font-bold text-emerald-600 py-1 hover:underline"
                   >
                     Browse All Category
                   </button>
                </div>
              </div>
            </div>
            <button 
              className={`text-sm font-semibold transition-colors ${currentView === 'best-sellers' ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}
              onClick={() => onNav('best-sellers')}
            >
              Best Sellers
            </button>
            <button 
              className={`text-sm font-semibold transition-colors ${currentView === 'contact' ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}
              onClick={() => onNav('contact')}
            >
              Contact Us
            </button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <div className="hidden sm:flex relative items-center">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="pl-10 pr-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-500 rounded-xl text-sm w-32 lg:w-38 transition-all"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={handleSearchKeyDown}
              />
              <Icon name="Search" className="absolute left-3 text-gray-400" size={16} />
            </div>

            <button 
              className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
              onClick={() => onNav('wishlist')}
            >
              <Icon name="Heart" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 h-4 min-w-[16px] px-1 bg-emerald-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button 
              className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
              onClick={() => onNav('cart')}
            >
              <Icon name="ShoppingCart" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-4 min-w-[16px] px-1 bg-emerald-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>

            <div className="h-8 w-px bg-gray-200 mx-1 hidden md:block"></div>

            {user ? (
              <button 
                onClick={() => onNav('dashboard')}
                className="flex items-center gap-2 hover:bg-gray-100 p-1 pr-3 rounded-xl transition-all"
              >
                <img src={`https://ui-avatars.com/api/?name=${user.fullName}&background=10b981&color=fff`} className="w-8 h-8 rounded-full" alt="User" />
                <span className="text-sm font-semibold text-gray-700 hidden lg:block">{user.fullName.split(' ')[0]}</span>
              </button>
            ) : (
              <div className="hidden sm:inline-flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => onNav('login')} className="hidden sm:inline-flex">Sign In</Button>
                <Button variant="primary" size="sm" onClick={() => onNav('signup')}>Get Started</Button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button 
              className="p-2 text-gray-600 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-b border-gray-100 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 space-y-4">
          <div className="relative items-center mb-4 sm:hidden flex">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="pl-10 pr-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-500 rounded-xl text-sm w-full"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
            <Icon name="Search" className="absolute left-3 text-gray-400" size={16} />
          </div>
          <nav className="flex flex-col gap-4">
            <button onClick={() => handleMobileNav('home')} className="text-left font-semibold text-gray-700">Home</button>
            <button onClick={() => handleMobileNav('categories-explorer')} className="text-left font-semibold text-gray-700 font-bold text-emerald-600">Browse Categories</button>
            <button onClick={() => handleMobileNav('best-sellers')} className="text-left font-semibold text-gray-700">Best Sellers</button>
            <button onClick={() => handleMobileNav('contact')} className="text-left font-semibold text-gray-700">Contact Us</button>
            <button onClick={() => handleMobileNav('wishlist')} className="text-left font-semibold text-gray-700">Wishlist ({wishlistCount})</button>
            <button onClick={() => handleMobileNav('cart')} className="text-left font-semibold text-gray-700">Cart ({cartCount})</button>
          </nav>
          {!user && (
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
              <Button variant="outline" fullWidth onClick={() => handleMobileNav('login')}>Sign In</Button>
              <Button variant="primary" fullWidth onClick={() => handleMobileNav('signup')}>Create Account</Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
