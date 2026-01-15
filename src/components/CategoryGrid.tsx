
import React from 'react';
import { Icon } from '../ui/Icon';
import { CATEGORIES } from '../dummydata/dummydata';

interface CategoryGridProps {
  onSelect: (cat: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelect }) => {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-emerald-950 mb-2">Browse by Category</h2>
            <p className="text-gray-500">Find exactly what you need to take your project to the next level.</p>
          </div>
          <button className="text-emerald-600 font-bold hover:underline">View All Categories &rarr;</button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className="group p-6 bg-gray-50 hover:bg-emerald-600 rounded-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-600 text-center flex flex-col items-center gap-3 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-sm">
                <Icon name="Box" size={24} />
              </div>
              <span className="text-sm font-bold text-gray-700 group-hover:text-white transition-colors">{cat}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
