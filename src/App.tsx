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
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import TermsAndConditions from './components/policy/TermConditions';
import RefundPolicy from './components/policy/RefundPolicy';
import DeliveryPolicy from './components/policy/DeliveryPolicy';
import { TrendingPage } from './pages/TrendingPage';
import ScrollTop from './components/ScrollTop';
import PrivacyPolicySection from './components/policy/PrivacyPolicySection';
import AboutSection from './components/about/AboutSection';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const navigate = useNavigate();

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
    if (query) {
      navigate('/browse');
    }
  };

  const cartProducts = useMemo(() => PRODUCTS.filter(p => cart.includes(p.id)), [cart]);
  const wishlistProducts = useMemo(() => PRODUCTS.filter(p => wishlist.includes(p.id)), [wishlist]);

  const handleNav = (view: string) => {
    if (view.startsWith('category-')) {
      const cat = view.split('category-')[1];
      setActiveCategory(cat);
      navigate('/categories-explorer');
    } else {
      // Map view names to routes
      const routeMap: Record<string, string> = {
        'home': '/',
        'best-sellers': '/best-sellers',
        'trending-products':'/trending-products',
        'contact-us': '/contact-us',
        'cart': '/cart',
        'wishlist': '/wishlist',
        'login': '/login',
        'signup': '/signup',
        'forgot-password': '/forgot-password',
        'dashboard': '/dashboard',
        'browse': '/browse',
        'categories-explorer': '/categories-explorer'
      };
      
      const targetPath = routeMap[view] || '/';
      navigate(targetPath);
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
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <ScrollTop/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <HomePage
              onNav={handleNav} 
              onAddToCart={toggleCart} 
              onToggleWishlist={toggleWishlist} 
              wishlist={wishlist} 
            />
          } />

          <Route path="/categories-explorer" element={
            <CategoryExplorerPage 
              onAddToCart={toggleCart}
              onToggleWishlist={toggleWishlist}
              wishlist={wishlist}
              initialCategory={activeCategory}
            />
          } />

          <Route path="/browse" element={
            <BrowsePage
              products={displayProducts} 
              category={activeCategory} 
              searchQuery={searchQuery}
              onClearCategory={() => {
                setActiveCategory(null);
                navigate('/browse');
              }}
              onAddToCart={toggleCart}
              onToggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          } />

          <Route path="/best-sellers" element={
            <BestSellersPage 
              onAddToCart={toggleCart} 
              onToggleWishlist={toggleWishlist} 
              wishlist={wishlist} 
            />
          } />
          <Route path="/trending-products" element={
            <TrendingPage
              onAddToCart={toggleCart} 
              onToggleWishlist={toggleWishlist} 
              wishlist={wishlist} 
            />
          } />

          <Route path="/contact-us" element={<ContactUsPage />} />

          <Route path="/cart" element={
            <CartWishlistPage 
              view="cart"
              products={cartProducts}
              onNav={handleNav}
              onAddToCart={toggleCart}
              onToggleWishlist={toggleWishlist}
              onMoveToCart={moveToCart}
              wishlist={wishlist}
            />
          } />

          <Route path="/wishlist" element={
            <CartWishlistPage 
              view="wishlist"
              products={wishlistProducts}
              onNav={handleNav}
              onAddToCart={toggleCart}
              onToggleWishlist={toggleWishlist}
              onMoveToCart={moveToCart}
              wishlist={wishlist}
            />
          } />

          <Route path="/login" element={
            <div className="py-20 min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
              <AuthForms 
                initialView="login" 
                onSuccess={(u) => { 
                  setUser(u); 
                  navigate('/dashboard'); 
                }}
                onSwitchView={(v) => navigate(`/${v}`)}
              />
            </div>
          } />

          <Route path="/signup" element={
            <div className="py-20 min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
              <AuthForms 
                initialView="signup" 
                onSuccess={(u) => { 
                  setUser(u); 
                  navigate('/dashboard'); 
                }}
                onSwitchView={(v) => navigate(`/${v}`)}
              />
            </div>
          } />

          <Route path="/forgot-password" element={
            <div className="py-20 min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
              <AuthForms 
                initialView="forgot-password" 
                onSuccess={(u) => { 
                  setUser(u); 
                  navigate('/dashboard'); 
                }}
                onSwitchView={(v) => navigate(`/${v}`)}
              />
            </div>
          } />

          <Route path="/dashboard" element={
            user ? (
              <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <Dashboard 
                    user={user} 
                    onLogout={() => { 
                      setUser(null); 
                      navigate('/'); 
                    }} 
                    onNav={handleNav}
                    wishlistProducts={wishlistProducts}
                    cartProducts={cartProducts}
                    onAddToCart={toggleCart}
                    onToggleWishlist={toggleWishlist}
                    wishlistIds={wishlist}
                  />
                </div>
              </div>
            ) : (
              <Navigate to="/login" replace />
            )
          } />
          <Route path='/about-us' element={<AboutSection onNav={handleNav} />}/>
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/delivery-policy" element={<DeliveryPolicy />} />
           <Route path='/privacy-policy' element={<PrivacyPolicySection/>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer onNav={handleNav} />
    </div>
  );
};

// Main App Wrapper
const AppWrapper: React.FC = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;