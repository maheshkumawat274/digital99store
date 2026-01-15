
import React, { useState, useMemo } from 'react';
import { BestSellersPage } from './pages/BestSellersPage';
import { CartWishlistPage } from './pages/CartWishlistPage';
import { AuthForms } from './components/AuthForms';
import { Dashboard } from './components/Dashboard';
import { CategoryExplorerPage } from './pages/CategoryExplorerPage';
import type { AuthView, User } from './types';
import { PRODUCTS } from './dummydata/dummydata';
import { Header } from './components/header/Header';
import { BrowsePage } from './pages/BrowsePage';
import { Footer } from './components/footer/Footer';
import { HomePage } from './pages/home';
import { ContactUsPage } from './pages/contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Derived filtered products for Browse/Search
  const displayProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory ? p.category === activeCategory : true;
      const matchesSearch = searchQuery 
        ? p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Handle Search Input from Header
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query && currentView !== 'browse') {
      setCurrentView('browse');
    }
  };

  const cartProducts = useMemo(() => PRODUCTS.filter(p => cart.includes(p.id)), [cart]);
  const wishlistProducts = useMemo(() => PRODUCTS.filter(p => wishlist.includes(p.id)), [wishlist]);

  const handleNav = (view: string) => {
    if (view.startsWith('category-')) {
      const cat = view.split('category-')[1];
      setActiveCategory(cat);
      setCurrentView('categories-explorer');
    } else {
      setActiveCategory(null);
      setCurrentView(view);
    }
    // Only clear search if navigating to fixed pages, not browsing
    if (view !== 'browse' && !view.startsWith('category-') && view !== 'categories-explorer') {
        setSearchQuery('');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCart = (id: string) => {
    setCart(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleWishlist = (id: string) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const moveToCart = (id: string) => {
    if (!cart.includes(id)) {
      setCart(prev => [...prev, id]);
    }
    setWishlist(prev => prev.filter(item => item !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onNav={handleNav} 
        cartCount={cart.length} 
        wishlistCount={wishlist.length} 
        user={user}
        currentView={currentView}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <HomePage
            onNav={handleNav} 
            onAddToCart={toggleCart} 
            onToggleWishlist={toggleWishlist} 
            wishlist={wishlist} 
          />
        )}

        {currentView === 'categories-explorer' && (
          <CategoryExplorerPage 
            onAddToCart={toggleCart}
            onToggleWishlist={toggleWishlist}
            wishlist={wishlist}
            initialCategory={activeCategory}
          />
        )}

        {currentView === 'browse' && (
          <BrowsePage
            products={displayProducts} 
            category={activeCategory} 
            searchQuery={searchQuery}
            onClearCategory={() => handleNav('browse')}
            onAddToCart={toggleCart}
            onToggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}

        {currentView === 'best-sellers' && (
          <BestSellersPage 
            onAddToCart={toggleCart} 
            onToggleWishlist={toggleWishlist} 
            wishlist={wishlist} 
          />
        )}

        {currentView === 'contact' && <ContactUsPage />}

        {(currentView === 'cart' || currentView === 'wishlist') && (
          <CartWishlistPage 
            view={currentView as 'cart' | 'wishlist'}
            products={currentView === 'cart' ? cartProducts : wishlistProducts}
            onNav={handleNav}
            onAddToCart={toggleCart}
            onToggleWishlist={toggleWishlist}
            onMoveToCart={moveToCart}
            wishlist={wishlist}
          />
        )}

        {(currentView === 'login' || currentView === 'signup' || currentView === 'forgot-password') && (
          <div className="py-20 min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
            <AuthForms 
              initialView={currentView as AuthView} 
              onSuccess={(u) => { setUser(u); setCurrentView('dashboard'); }}
              onSwitchView={(v) => setCurrentView(v)}
            />
          </div>
        )}

        {currentView === 'dashboard' && user && (
          <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Dashboard 
                user={user} 
                onLogout={() => { setUser(null); setCurrentView('home'); }} 
                onNav={handleNav}
                wishlistProducts={wishlistProducts}
                cartProducts={cartProducts}
                onAddToCart={toggleCart}
                onToggleWishlist={toggleWishlist}
                wishlistIds={wishlist}
              />
            </div>
          </div>
        )}
      </main>

      <Footer onNav={handleNav} />
    </div>
  );
};

export default App;
