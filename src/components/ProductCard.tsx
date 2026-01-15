
import React, { useState } from 'react';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (id: string) => void;
  onToggleWishlist: (id: string) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onToggleWishlist,
  isWishlisted 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isBestSeller && (
          <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wider">
            <Icon name="Flame" size={10} /> Best Seller
          </span>
        )}
        {product.isTrending && (
          <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wider">
            <Icon name="TrendingUp" size={10} /> Trending
          </span>
        )}
      </div>

      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="primary" 
              className="rounded-full h-10 w-10 p-0"
              onClick={() => onAddToCart(product.id)}
            >
              <Icon name="ShoppingCart" />
            </Button>
            <Button 
              size="sm" 
              variant={isWishlisted ? 'danger' : 'secondary'} 
              className={`rounded-full h-10 w-10 p-0 ${isWishlisted ? 'text-white' : ''}`}
              onClick={() => onToggleWishlist(product.id)}
            >
              <Icon name="Heart" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-tight mb-1">{product.category}</p>
        <h3 className="text-gray-900 font-bold line-clamp-1 mb-1 group-hover:text-emerald-600 transition-colors">{product.title}</h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
            <Icon name="Star" className="text-amber-400 fill-amber-400" size={14} />
            <span>{product.rating}</span>
            <span className="text-gray-400 font-normal">({product.sales})</span>
          </div>
        </div>
      </div>
    </div>
  );
};
