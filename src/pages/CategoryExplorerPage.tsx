import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Icon } from '../ui/Icon';
import { CATEGORIES, PRODUCTS } from '../dummydata/dummydata';

interface CategoryExplorerPageProps {
  onAddToCart: (id: string) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
  initialCategory?: string | null;
}

export const CategoryExplorerPage: React.FC<CategoryExplorerPageProps> = ({ 
  onAddToCart, 
  onToggleWishlist, 
  wishlist,
  initialCategory 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || CATEGORIES[0]);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
        {/* Desktop Sidebar - Hidden on Mobile */}
        <aside className="hidden md:flex w-72 bg-white border-r border-gray-100 flex-col shrink-0 sticky top-20 h-[calc(100vh-80px)]">
          <div className="p-6 border-b border-gray-50">
            <h3 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
              <Icon name="Layers" size={20} className="text-emerald-600" />
              Categories
            </h3>
          </div>
          <nav className="flex-grow overflow-y-auto p-4 space-y-1 custom-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  selectedCategory === cat 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' 
                    : 'text-gray-500 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon name="Circle" size={8} className={selectedCategory === cat ? 'text-white' : 'text-gray-300'} />
                  {cat}
                </div>
                {selectedCategory === cat && <Icon name="ChevronRight" size={14} />}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile Categories Dropdown */}
        <div className="md:hidden bg-white border-b border-gray-100 sticky top-20 z-10">
          <button
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            className="w-full flex items-center justify-between p-4"
          >
            <div className="flex items-center gap-3">
              <Icon name="Layers" size={20} className="text-emerald-600" />
              <div className="text-left">
                <div className="text-sm text-gray-500">Selected Category</div>
                <div className="text-lg font-bold text-emerald-950">{selectedCategory}</div>
              </div>
            </div>
            <Icon 
              name={isCategoriesOpen ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              className="text-gray-400 transition-transform duration-200"
            />
          </button>
          
          {/* Mobile Categories Dropdown Menu */}
          <div className={`overflow-hidden transition-all duration-300 ${
            isCategoriesOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="p-4 border-t border-gray-100 bg-white max-h-[300px] overflow-y-auto">
              <div className="grid grid-cols-1 gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsCategoriesOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === cat 
                        ? 'bg-emerald-600 text-white font-semibold' 
                        : 'text-gray-700 hover:bg-emerald-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon 
                        name="Circle" 
                        size={8} 
                        className={selectedCategory === cat ? 'text-white' : 'text-gray-300'} 
                      />
                      {cat}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <main className="flex-grow p-4 md:p-10">
          {/* Mobile Breadcrumb */}
          <div className="md:hidden mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Marketplace</span>
              <Icon name="ChevronRight" size={12} />
              <span className="font-semibold text-emerald-600">{selectedCategory}</span>
            </div>
          </div>

          <div className="mb-10 hidden md:block">
            <div className="flex items-center gap-3 mb-2">
               <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-md">Marketplace</span>
               <Icon name="ChevronRight" size={12} className="text-gray-300" />
               <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{selectedCategory}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-emerald-950 mb-2">{selectedCategory}</h2>
            <p className="text-gray-500">Showing {filteredProducts.length} high-quality assets in this category.</p>
          </div>

          {/* Mobile Category Info */}
          <div className="md:hidden mb-6">
            <h2 className="text-2xl font-bold text-emerald-950 mb-1">{selectedCategory}</h2>
            <p className="text-gray-500 text-sm">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
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
            <div className="text-center py-20 md:py-32 bg-white rounded-3xl md:rounded-[2rem] border border-dashed border-gray-200">
               <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 mx-auto mb-4 md:mb-6">
                  <Icon name="Package" size={32} className="md:w-10 md:h-10" />
               </div>
               <h3 className="text-lg md:text-xl font-bold text-gray-400">No products in this category yet.</h3>
               <p className="text-gray-400 mt-2 text-sm md:text-base">Check back soon for new arrivals!</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};