
import React from 'react';
import { Hero } from '../../components/home/Hero';
import { Button } from '../../ui/Button';
import { Icon } from '../../ui/Icon';
import WhyChoose from '../../components/home/WhyChoose';
import TrendingSection from '../../components/home/TrendingSection';
import BestSellingSection from '../../components/home/BestSellingSection';
import NewsLetterSection from '../../components/home/NewsLetterSection';

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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-100">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-2">Explore Our Vast Library</h2>
              <p className="text-emerald-700/70">From AI tools to creative graphics, find everything in one place.</p>
            </div>
            <Button size="md" onClick={() => onNav('categories-explorer')} className="shadow-lg shadow-emerald-100">
              Browse All Category <Icon name="ChevronRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

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
