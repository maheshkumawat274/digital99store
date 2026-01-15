
import React, { useState } from 'react';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import type { Product, User } from '../types';
import { PRODUCTS } from '../dummydata/dummydata';

interface DashboardProps {
  user: User;
  onLogout: () => void;
  onNav: (view: string) => void;
  wishlistProducts: Product[];
  cartProducts: Product[];
  onAddToCart: (id: string) => void;
  onToggleWishlist: (id: string) => void;
  wishlistIds: string[];
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  user, 
  onLogout, 
  onNav, 
  wishlistProducts, 
  cartProducts,
  onAddToCart,
  onToggleWishlist,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'wishlist' | 'cart' | 'settings'>('overview');

  const stats = [
    { id: 'cart', label: 'In Cart', value: cartProducts.length.toString(), icon: 'ShoppingCart', color: 'bg-emerald-100 text-emerald-600' },
    { id: 'wishlist', label: 'Wishlist', value: wishlistProducts.length.toString(), icon: 'Heart', color: 'bg-rose-100 text-rose-600' },
    { id: 'downloads', label: 'Downloads', value: '28', icon: 'Download', color: 'bg-amber-100 text-amber-600' },
  ];

  const sidebarLinks = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'wishlist', label: 'Liked Products', icon: 'Heart' },
    { id: 'cart', label: 'My Cart', icon: 'ShoppingCart' },
    { id: 'settings', label: 'Account Settings', icon: 'Settings' },
  ];

  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row gap-8 bg-white p-4 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
      {/* Sidebar */}
      <aside className="w-full md:w-64 flex flex-col gap-8 shrink-0">
        <div className="flex items-center gap-4 px-2">
          <img 
            src={`https://ui-avatars.com/api/?name=${user.fullName}&background=10b981&color=fff&size=128`} 
            className="w-16 h-16 rounded-2xl shadow-lg border-2 border-emerald-50" 
            alt="User" 
          />
          <div>
            <h3 className="font-bold text-gray-900 text-lg leading-tight">{user.fullName}</h3>
            <p className="text-xs text-gray-400 font-medium truncate w-32">{user.email}</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {sidebarLinks.map(link => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id as any)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${activeTab === link.id ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' : 'text-gray-500 hover:bg-emerald-50 hover:text-emerald-700'}`}
            >
              <Icon name={link.icon as any} size={20} />
              {link.label}
            </button>
          ))}
          <button 
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-red-400 hover:bg-red-50 hover:text-red-600 transition-all mt-4"
          >
            <Icon name="LogOut" size={20} />
            Sign Out
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'overview' && (
          <div className="space-y-10 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">User Dashboard</h2>
                <p className="text-gray-500 text-sm">Welcome back! Here's what's happening today.</p>
              </div>
              <Button variant="primary" size="sm" className="shadow-lg shadow-emerald-100" onClick={() => onNav('browse')}>
                <Icon name="Plus" size={16} className="mr-2" /> Browse Market
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {stats.map(stat => (
                <div 
                  key={stat.label} 
                  onClick={() => ['cart', 'wishlist'].includes(stat.id) && setActiveTab(stat.id as any)}
                  className={`p-6 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-emerald-200 transition-all cursor-pointer`}
                >
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <Icon name={stat.icon as any} />
                  </div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Recent Items */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-900">Recommended for You</h3>
                        <button onClick={() => onNav('browse')} className="text-emerald-600 text-xs font-bold hover:underline">View All</button>
                    </div>
                    <div className="space-y-4">
                        {PRODUCTS.slice(0, 3).map(p => (
                            <div key={p.id} className="flex items-center gap-4 p-3 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow cursor-pointer" onClick={() => onNav('browse')}>
                                <img src={p.thumbnail} className="w-16 h-16 rounded-xl object-cover" alt={p.title} />
                                <div className="flex-grow">
                                    <h4 className="font-bold text-sm text-gray-900 leading-tight mb-1">{p.title}</h4>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-emerald-600">${p.price}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{p.category}</span>
                                    </div>
                                </div>
                                <Button variant="ghost" className="h-10 w-10 p-0 rounded-full"><Icon name="ArrowRight" size={16}/></Button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-900">Recent Transactions</h3>
                        <button className="text-emerald-600 text-xs font-bold hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="text-gray-400 border-b border-gray-100">
                                <tr>
                                    <th className="pb-3 font-semibold">Item ID</th>
                                    <th className="pb-3 font-semibold">Status</th>
                                    <th className="pb-3 font-semibold text-right">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[1,2,3].map(i => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 font-medium text-gray-600">#TRX-00{i+24}</td>
                                        <td className="py-4">
                                            <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full uppercase">Success</span>
                                        </td>
                                        <td className="py-4 font-bold text-gray-900 text-right">$49.00</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
        )}

        {activeTab === 'wishlist' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Liked Products</h2>
              <p className="text-gray-500 text-sm">These are the items you've saved for later.</p>
            </div>
            {wishlistProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {wishlistProducts.map(p => (
                  <div key={p.id} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col gap-3 group hover:border-emerald-200 transition-all">
                    <img src={p.thumbnail} className="w-full aspect-video rounded-xl object-cover" alt={p.title} />
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-1">{p.title}</h4>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{p.category}</p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="font-bold text-emerald-600">${p.price}</span>
                      <div className="flex gap-2">
                         <button 
                          onClick={() => onToggleWishlist(p.id)}
                          className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                        >
                          <Icon name="Trash2" size={16} />
                        </button>
                        <button 
                          onClick={() => onAddToCart(p.id)}
                          className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                        >
                          <Icon name="ShoppingCart" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                <Icon name="Heart" size={48} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900">No Liked Products</h3>
                <p className="text-gray-500 text-sm mb-6">You haven't added any products to your wishlist yet.</p>
                <Button variant="outline" size="sm" onClick={() => onNav('browse')}>Explore Marketplace</Button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'cart' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">My Cart</h2>
              <p className="text-gray-500 text-sm">Items ready for checkout.</p>
            </div>
            {cartProducts.length > 0 ? (
              <div className="space-y-3">
                {cartProducts.map(p => (
                  <div key={p.id} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-4 group hover:border-emerald-200 transition-all">
                    <img src={p.thumbnail} className="w-16 h-16 rounded-xl object-cover" alt={p.title} />
                    <div className="flex-grow">
                      <h4 className="font-bold text-gray-900 line-clamp-1">{p.title}</h4>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{p.category}</p>
                    </div>
                    <span className="font-bold text-emerald-600">${p.price}</span>
                    <button 
                      onClick={() => onAddToCart(p.id)}
                      className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Icon name="X" size={16} />
                    </button>
                  </div>
                ))}
                <div className="pt-6 flex justify-end">
                   <Button onClick={() => onNav('cart')}>Go to Checkout</Button>
                </div>
              </div>
            ) : (
              <div className="py-20 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                <Icon name="ShoppingCart" size={48} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900">Cart is Empty</h3>
                <p className="text-gray-500 text-sm mb-6">Start adding premium assets to your cart.</p>
                <Button variant="outline" size="sm" onClick={() => onNav('browse')}>Explore Marketplace</Button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
              <p className="text-gray-500 text-sm">Manage your profile and personal information.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                <div className="relative">
                   <input 
                    readOnly
                    type="text" 
                    value={user.fullName}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 focus:outline-none"
                  />
                  <Icon name="User" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Email Address</label>
                <div className="relative">
                  <input 
                    readOnly
                    type="email" 
                    value={user.email}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 focus:outline-none"
                  />
                  <Icon name="Mail" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Mobile Number</label>
                <div className="relative">
                  <input 
                    readOnly
                    type="text" 
                    value={user.mobile || 'Not provided'}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 focus:outline-none"
                  />
                  <Icon name="Phone" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                </div>
              </div>
               <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Password</label>
                <div className="relative">
                  <input 
                    readOnly
                    type="password" 
                    value="••••••••••••"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 focus:outline-none"
                  />
                  <Icon name="Lock" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-50 flex gap-4">
               <Button size="sm">Edit Profile</Button>
               <Button variant="outline" size="sm">Change Password</Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
