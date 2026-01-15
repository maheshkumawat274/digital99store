
import React from 'react';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';

export const ResourcesPage: React.FC = () => {
  const resources = [
    { title: 'Getting Started Guide', desc: 'New to Evergreen? Learn how to buy and use your first asset.', icon: 'BookOpen' },
    { title: 'License Documentation', desc: 'Detailed information about how you can use our digital products.', icon: 'FileText' },
    { title: 'Community Discord', desc: 'Join 5,000+ creators and get help from our community.', icon: 'Users' },
    { title: 'API Reference', desc: 'Build integrations with Evergreen using our powerful REST API.', icon: 'Code' },
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
           <h2 className="text-4xl font-bold text-emerald-950 mb-4">Resources & Support</h2>
           <p className="text-gray-500 max-w-2xl mx-auto">Everything you need to succeed with our premium digital assets.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {resources.map((res, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 flex items-start gap-6 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Icon name={res.icon as any} size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{res.title}</h3>
                <p className="text-gray-500 mb-4">{res.desc}</p>
                <Button variant="ghost" className="text-emerald-600 p-0 hover:bg-transparent">Learn more &rarr;</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-950 text-white rounded-[2.5rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Still need help?</h3>
              <p className="text-emerald-100/60">Our support team is available 24/7 for your assistance.</p>
           </div>
           <Button variant="primary" size="lg" className="bg-emerald-500 hover:bg-emerald-400">Contact Support</Button>
        </div>
      </div>
    </div>
  );
};
