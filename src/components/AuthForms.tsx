
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import type { AuthView } from '../types';

interface AuthFormsProps {
  initialView: AuthView;
  onSuccess: (user: any) => void;
  onSwitchView: (view: AuthView) => void;
}

export const AuthForms: React.FC<AuthFormsProps> = ({ initialView, onSuccess, onSwitchView }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: '',
    mobile: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    onSuccess({
      id: 'user-1',
      fullName: formData.fullName || 'Demo User',
      email: formData.email,
      purchasedProducts: [],
      wishlist: [],
      cart: []
    });
  };

  const renderLogin = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-gray-500 mt-2">Enter your credentials to access your account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
          <input 
            required
            type="email" 
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <button 
              type="button"
              onClick={() => onSwitchView('forgot-password')}
              className="text-xs font-bold text-emerald-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
          <input 
            required
            type="password" 
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>
        <Button fullWidth size="lg" type="submit" className="mt-2">Sign In</Button>
      </form>
      <div className="text-center text-sm text-gray-500">
        Don't have an account? <button onClick={() => onSwitchView('signup')} className="font-bold text-emerald-600 hover:underline">Register New User</button>
      </div>
    </div>
  );

  const renderSignup = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
        <p className="text-gray-500 mt-2">Join our community and start your journey</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
          <input 
            required
            type="text" 
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
            <input 
              type="tel" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
              placeholder="+1 234 567 890"
              value={formData.mobile}
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input 
              required
              type="password" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
            <input 
              required
              type="password" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
          </div>
        </div>
        <div className="flex items-center gap-2 py-2">
            <input type="checkbox" className="w-4 h-4 accent-emerald-600" id="terms" required />
            <label htmlFor="terms" className="text-xs text-gray-500">I agree to the <button className="underline">Terms of Service</button> and <button className="underline">Privacy Policy</button></label>
        </div>
        <Button fullWidth size="lg" type="submit">Register Account</Button>
      </form>
      <div className="text-center text-sm text-gray-500">
        Already have an account? <button onClick={() => onSwitchView('login')} className="font-bold text-emerald-600 hover:underline">Sign In Instead</button>
      </div>
    </div>
  );

  const renderForgotPassword = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Reset Password</h2>
        <p className="text-gray-500 mt-2">Enter your email and we'll send you instructions</p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
          <input 
            required
            type="email" 
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
            placeholder="name@example.com"
          />
        </div>
        <Button fullWidth size="lg" type="button">Send Reset Link</Button>
      </form>
      <div className="flex justify-between items-center text-sm">
        <button onClick={() => onSwitchView('login')} className="flex items-center gap-1 font-bold text-emerald-600 hover:underline">
          <Icon name="ArrowLeft" size={14} /> Back to Login
        </button>
        <button className="text-gray-400 hover:text-gray-600 font-medium">Need Help?</button>
      </div>
    </div>
  );

  return (
    <div className="max-w-md w-full mx-auto p-8 bg-white rounded-3xl shadow-2xl border border-gray-100">
      {initialView === 'login' && renderLogin()}
      {initialView === 'signup' && renderSignup()}
      {initialView === 'forgot-password' && renderForgotPassword()}
    </div>
  );
};
