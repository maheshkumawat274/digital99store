
import { Button } from '../../ui/Button'
import React, { useState } from 'react';
import { Icon } from '../../ui/Icon';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
    };
  return (
    <>
     <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl">
              {submitted ? (
                <div className="text-center py-16 animate-fade-in">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="Check" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-950 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                    <select className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Billing & Payments</option>
                      <option>Product Feedback</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <Button size="lg" fullWidth className="py-5 shadow-lg shadow-emerald-100">
                    Send Message <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
          </>
  )
}

export default ContactForm