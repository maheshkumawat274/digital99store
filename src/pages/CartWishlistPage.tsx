
import React, { useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import type { Product } from '../types';

interface CartWishlistPageProps {
  view: 'cart' | 'wishlist';
  products: Product[];
  onNav: (view: string) => void;
  onAddToCart: (id: string) => void;
  onToggleWishlist: (id: string) => void;
  onMoveToCart: (id: string) => void;
  wishlist: string[];
}

export const CartWishlistPage: React.FC<CartWishlistPageProps> = ({ 
  view, 
  products, 
  onNav, 
  onAddToCart, 
  onToggleWishlist, 
  onMoveToCart,
  wishlist 
}) => {
  const isCart = view === 'cart';
  const total = useMemo(() => products.reduce((sum, p) => sum + p.price, 0), [products]);

  if (products.length === 0) {
    return (
      <div className="py-24 text-center bg-white min-h-[60vh] flex flex-col items-center justify-center">
           <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name={isCart ? "ShoppingCart" : "Heart"} size={48} />
           </div>
           <h2 className="text-3xl font-bold mb-4 capitalize text-emerald-950">Your {view} is empty</h2>
           <p className="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven't added anything here yet. Explore our marketplace to find premium digital assets.</p>
           <Button size="lg" onClick={() => onNav('browse')}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
           <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">
              My Personal Collection
           </div>
           <h2 className="text-4xl font-bold text-emerald-950 mb-2 capitalize">Your {view}</h2>
           <p className="text-gray-500">You have {products.length} premium asset{products.length > 1 ? 's' : ''} in your collection.</p>
        </div>

        <div className={`grid gap-10 ${isCart ? 'lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
          <div className={isCart ? 'lg:col-span-2 space-y-4' : 'contents'}>
            {isCart ? (
              // Enhanced List Layout for Cart
              <div className="space-y-4">
                {products.map(product => (
                  <div key={product.id} className="bg-white p-4 rounded-3xl border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-all group">
                    <img src={product.thumbnail} className="w-24 h-24 rounded-2xl object-cover shrink-0" alt={product.title} />
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1">{product.category}</p>
                          <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{product.title}</h4>
                        </div>
                        <span className="text-lg font-bold text-emerald-600">${product.price.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <button 
                          onClick={() => onAddToCart(product.id)}
                          className="text-xs font-bold text-red-500 hover:text-red-600 flex items-center gap-1"
                        >
                          <Icon name="Trash2" size={12} /> Remove
                        </button>
                        <button 
                          onClick={() => onToggleWishlist(product.id)}
                          className={`text-xs font-bold flex items-center gap-1 ${wishlist.includes(product.id) ? 'text-emerald-600' : 'text-gray-400 hover:text-emerald-600'}`}
                        >
                          <Icon
                            name="Heart"
                            size={12}
                            className={
                              wishlist.includes(product.id)
                                ? "text-emerald-600 fill-emerald-600"
                                : "text-gray-400"
                            }
                          />
                          {wishlist.includes(product.id) ? 'Saved' : 'Save for later'}
                          
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Enhanced Grid for Wishlist with "Move to Cart"
              products.map(product => (
                <div key={product.id} className="flex flex-col gap-2">
                  <ProductCard 
                    product={product} 
                    onAddToCart={onAddToCart} 
                    onToggleWishlist={onToggleWishlist}
                    isWishlisted={wishlist.includes(product.id)}
                  />
                  <Button 
                    variant="secondary" 
                    className="w-full mt-1 border border-emerald-200"
                    onClick={() => onMoveToCart(product.id)}
                  >
                    <Icon name="ArrowRightCircle" size={16} className="mr-2" /> Move to Cart
                  </Button>
                </div>
              ))
            )}
          </div>

          {isCart && (
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-2xl sticky top-24">
                <h3 className="text-xl font-bold text-emerald-950 mb-6 flex items-center gap-2">
                   <Icon name="ReceiptText" className="text-emerald-600" /> Order Summary
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-500">
                    <span className="font-medium">Subtotal ({products.length} items)</span>
                    <span className="font-bold text-gray-900">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span className="font-medium">Processing Fee</span>
                    <span className="font-bold text-emerald-600">FREE</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span className="font-medium">Estimated Tax</span>
                    <span className="font-bold text-gray-900">$0.00</span>
                  </div>
                  <div className="border-t border-dashed border-gray-200 pt-6 mt-6 flex justify-between items-center">
                    <span className="text-lg font-bold text-emerald-950">Grand Total</span>
                    <div className="text-right">
                      <span className="text-3xl font-extrabold text-emerald-600">${total.toFixed(2)}</span>
                      <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-widest">Secure Checkout</p>
                    </div>
                  </div>
                </div>
                <Button fullWidth size="lg" className="py-5 shadow-2xl shadow-emerald-200 rounded-2xl">
                   Secure Checkout <Icon name="Lock" size={18} className="ml-2" />
                </Button>
                
                <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
                   <div className="text-center">
                      <Icon name="ShieldCheck" className="text-emerald-600 mx-auto mb-1" size={20} />
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Verified Secure</p>
                   </div>
                   <div className="text-center">
                      <Icon name="RotateCcw" className="text-emerald-600 mx-auto mb-1" size={20} />
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Money Back</p>
                   </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
