
import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../dummydata/dummydata';

interface TrendingPageProps {
  onAddToCart: (id: string) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
}

export const TrendingPage: React.FC<TrendingPageProps> = ({ onAddToCart, onToggleWishlist, wishlist }) => {
  const Trending = PRODUCTS.filter(p => p.isTrending);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-emerald-950 mb-4">
            Trending Products
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover the most in-demand digital products that creators are exploring and purchasing right now across our marketplace.
          </p>
        </div>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Trending.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlist.includes(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
