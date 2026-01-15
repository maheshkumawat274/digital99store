
import React from 'react';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import type { Product } from '../types';
import { ProductCard } from '../components/ProductCard';

interface BrowsePageProps {
  products: Product[];
  category: string | null;
  searchQuery: string;
  onClearCategory: () => void;
  onAddToCart: (id: string) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
}

export const BrowsePage: React.FC<BrowsePageProps> = ({ 
  products, 
  category, 
  searchQuery, 
  onClearCategory,
  onAddToCart,
  onToggleWishlist,
  wishlist
}) => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
           <div>
             <h2 className="text-3xl font-bold text-emerald-950 mb-2">
               {searchQuery ? `Search results for "${searchQuery}"` : (category ? category : 'Explore Marketplace')}
             </h2>
             <p className="text-gray-500">Discover {products.length} premium digital assets for your next project.</p>
           </div>
           {(category || searchQuery) && (
             <Button variant="ghost" size="sm" onClick={onClearCategory} className="text-emerald-600">
               Clear Filters <Icon name="X" size={14} className="ml-2" />
             </Button>
           )}
        </div>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart} 
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlist.includes(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
             <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mx-auto mb-6">
                <Icon name="SearchX" size={40} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
             <p className="text-gray-500 mb-6">Try adjusting your search or browsing different categories.</p>
             <Button onClick={onClearCategory}>Reset All Filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};
