import type React from "react";
import { Button } from "../../ui/Button"

interface NewsLetterProps {
  onNav: (view: string) => void;
}
const NewsLetterSection: React.FC<NewsLetterProps> = ({onNav}) => {
  return (
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
  )
}

export default NewsLetterSection