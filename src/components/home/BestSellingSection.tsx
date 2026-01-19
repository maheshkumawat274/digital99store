import type React from "react";
import { PRODUCTS } from "../../dummydata/dummydata"
import { Button } from "../../ui/Button"
import { ProductCard } from "../ProductCard"

interface BestSellingProps {
  onNav: (view: string) => void;
  onAddToCart: (id: string) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
}
const BestSellingSection:React.FC<BestSellingProps> = ({onNav, onAddToCart, onToggleWishlist, wishlist}) => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-emerald-950 mb-2">🔥 Best-Selling Digital Products</h2>
              <p className="text-gray-500">The highest rated assets trusted by thousands of creators.</p>
            </div>
            <Button variant="outline" onClick={() => onNav('best-sellers')}>View All</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.filter(p => p.isBestSeller).slice(0, 4).map(product => (
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
      </section>
  )
}

export default BestSellingSection