import React from 'react';
import { CheckCircle, Users, Rocket, Shield } from 'lucide-react';

interface AboutProps {
  onNav: (view: string) => void;
}
const AboutSection: React.FC<AboutProps> = ({onNav}) => {
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fast & Instant Access",
      description: "Get instant downloads after purchase. No waiting, no delays."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trusted & Reliable",
      description: "Verified products with regular updates and secure payments."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Focused",
      description: "Built for Indian creators, entrepreneurs, and freelancers."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Easy to Use",
      description: "No technical skills required. Ready-to-use solutions."
    }
  ];

  const stats = [
    { value: "10K+", label: "Happy Users" },
    { value: "500+", label: "Digital Products" },
    { value: "24/7", label: "Support" },
    { value: "99%", label: "Satisfaction" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-50 text-emerald-700">
                About Digital99Store
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Empowering Indian
                <span className="text-emerald-600"> Digital Creators</span>
              </h2>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Digital99Store helps Indian creators, entrepreneurs, and freelancers access affordable digital products.
                Founded in 2026, our goal is to provide ready-to-use digital tools that save time, reduce costs, and help users grow faster without technical complexity.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Thousands of users trust Digital99Store for instant downloads and reliable support. We're committed to making digital excellence accessible to everyone.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Digital workspace with team collaboration"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-4 md:-left-6 top-12 bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-[200px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">5K+</div>
                  <div className="text-xs text-gray-600">Creators</div>
                </div>
              </div>
              <p className="text-sm text-gray-700">Indian creators growing their digital presence</p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-4 md:-right-6 bottom-12 bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-[200px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">2026</div>
                  <div className="text-xs text-gray-600">Founded</div>
                </div>
              </div>
              <p className="text-sm text-gray-700">Dedicated to empowering digital growth</p>
            </div>

            {/* Pattern Background */}
            <div className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Ready to accelerate your digital journey?
            </h3>
            <p className="text-gray-600">
              Join thousands of creators who trust Digital99Store for their digital needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onNav('categories-explorer')} className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;