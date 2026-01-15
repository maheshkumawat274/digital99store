
import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../dummydata/dummydata';

interface BestSellersPageProps {
  onAddToCart: (id: string) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
}

export const BestSellersPage: React.FC<BestSellersPageProps> = ({ onAddToCart, onToggleWishlist, wishlist }) => {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
           <h2 className="text-4xl font-bold text-emerald-950 mb-4">Our Best Sellers</h2>
           <p className="text-gray-500 max-w-2xl mx-auto">The most popular and highly rated assets in our marketplace, trusted by thousands of creators worldwide.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map(product => (
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
