
import React from 'react';
import { Button } from '../../ui/Button';
import { Icon } from '../../ui/Icon';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
      <div className="absolute top-0 left-0 w-full h-full bg-pattern -z-10"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-100 rounded-full blur-[120px] opacity-50 -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-emerald-50 rounded-full blur-[100px] opacity-60 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
          <Icon name="Sparkles" size={14} /> The #1 Digital Marketplace
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-emerald-950 mb-6 leading-tight max-w-4xl mx-auto">
          Elevate Your Digital Game with <span className="text-emerald-600">Premium Assets.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Unlock instant access to expert-curated software, eBooks, courses, and creative tools. Start scaling your business and skills today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="h-14 px-10 text-lg shadow-xl shadow-emerald-200" onClick={onExplore}>
            Explore All Products <Icon name="ArrowRight" className="ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-10 text-lg">
            How it Works
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-70 grayscale">
            <div className="flex items-center justify-center gap-2 font-bold text-gray-400"><Icon name="CheckCircle" /> Quality Verified</div>
            <div className="flex items-center justify-center gap-2 font-bold text-gray-400"><Icon name="Zap" /> Instant Access</div>
            <div className="flex items-center justify-center gap-2 font-bold text-gray-400"><Icon name="Lock" /> Secure Payment</div>
            <div className="flex items-center justify-center gap-2 font-bold text-gray-400"><Icon name="Users" /> 10k+ Users</div>
        </div>
      </div>
    </section>
  );
};
