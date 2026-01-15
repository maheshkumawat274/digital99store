import { Icon } from "../../ui/Icon"


const WhyChoose = () => {
  return (
    <>
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
    </>
  )
}

export default WhyChoose