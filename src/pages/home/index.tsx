
import React from 'react';
import { Hero } from '../../components/home/Hero';
import WhyChoose from '../../components/home/WhyChoose';
import TrendingSection from '../../components/home/TrendingSection';
import BestSellingSection from '../../components/home/BestSellingSection';
import NewsLetterSection from '../../components/home/NewsLetterSection';
import BrowseCategoryCTAsection from '../../components/home/BrowseCategoryCTAsection';

interface HomeProps {
  onNav: (view: string) => void;
  onAddToCart: (id: string) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
}

export const HomePage: React.FC<HomeProps> = ({ onNav, onAddToCart, onToggleWishlist, wishlist }) => {
  return (
    <>
      <Hero onExplore={() => onNav('categories-explorer')} />
      
      {/* Browse All Category CTA */}
      <BrowseCategoryCTAsection onNav={onNav}/>

      {/* Best Selling Section */}
      <BestSellingSection 
        onNav={onNav}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlist={wishlist}
      />
      
      {/* Why Us Section */}
      <WhyChoose/>

      {/* Trending Section */}
      <TrendingSection
        onNav={onNav}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlist={wishlist}
      />

      {/* Newsletter */}
      <NewsLetterSection 
      onNav={onNav}
      />
    </>
  );
};
