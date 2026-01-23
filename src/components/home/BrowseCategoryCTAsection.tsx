
import type React from 'react';
import { Button } from '../../ui/Button'
import { Icon } from '../../ui/Icon'


interface BrowseCTAProps {
  onNav: (view: string) => void;
}
const BrowseCategoryCTAsection:React.FC<BrowseCTAProps> = ({ onNav }) => {
  return (
    <section className="py-12 bg-white">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-100">
         <div>
           <h2 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-2">Explore Our Vast Library</h2>
           <p className="text-emerald-700/70">From AI tools to creative graphics, find everything in one place.</p>
         </div>
         <Button size="md" onClick={() => onNav('categories-explorer')} className="shadow-lg shadow-emerald-100">
           Browse All Category <Icon name="ChevronRight" size={18} className="ml-2" />
         </Button>
       </div>
     </div>
   </section>
  )
}

export default BrowseCategoryCTAsection