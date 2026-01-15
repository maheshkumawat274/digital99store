
import React from 'react';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';

export const ContactUsPage: React.FC = () => {
  

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-emerald-950 mb-4">Get in Touch</h2>
          <p className="text-gray-500 text-lg">Have questions about our products or need technical support? We're here to help you 24/7.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <ContactInfo/>

          {/* Contact Form */}
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};
