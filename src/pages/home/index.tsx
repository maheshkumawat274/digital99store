
import React from 'react';
import { Hero } from '../../components/home/Hero';
import { Button } from '../../ui/Button';
import { PRODUCTS } from '../../dummydata/dummydata';
import { ProductCard } from '../../components/ProductCard';
import { Icon } from '../../ui/Icon';

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
            <Button size="lg" onClick={() => onNav('categories-explorer')} className="shadow-lg shadow-emerald-100">
              Browse All Category <Icon name="ChevronRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Best Selling Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-emerald-950 mb-2">🔥 Best Selling Products</h2>
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

      {/* Why Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-emerald-950 mb-4">Why We Are Best?</h2>
            <p className="text-gray-500 text-lg">We provide a premium ecosystem for digital asset acquisition with focus on quality and security.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quality products', desc: 'Every asset is manually reviewed by our expert team for high standards.', icon: 'ShieldCheck' },
              { title: 'Instant access', desc: 'Get your digital files immediately after payment. No waiting time.', icon: 'Zap' },
              { title: 'Secure payments', desc: 'Industry-standard encryption for all your financial transactions.', icon: 'Lock' },
              { title: 'Expert curation', desc: 'Content created by world-class professionals in their respective fields.', icon: 'Star' },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-emerald-200 transition-all hover:bg-white hover:shadow-xl group">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={item.icon as any} size={28} />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-emerald-950 mb-2">📈 Trending Right Now</h2>
              <p className="text-gray-500">Popular items that are shaping the digital landscape this week.</p>
            </div>
            <Button variant="outline" onClick={() => onNav('browse')}>Explore More</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.filter(p => p.isTrending).slice(0, 4).map(product => (
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

      {/* Newsletter */}
      <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-emerald-600 rounded-[2.5rem] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                  <div className="max-w-2xl relative z-10">
                      <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to accelerate your workflow?</h2>
                      <p className="text-emerald-50 text-lg opacity-90 mb-8 leading-relaxed">Join 10,000+ happy customers who are already using our premium digital assets.</p>
                      <div className="flex flex-wrap gap-4">
                          <Button variant="secondary" size="lg" className="bg-white text-emerald-900" onClick={() => onNav('signup')}>Get Started Free</Button>
                          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" onClick={() => onNav('browse')}>Browse Library</Button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};
