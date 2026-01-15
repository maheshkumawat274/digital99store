
import { Button } from '../../ui/Button'
import { Icon } from '../../ui/Icon'

const ContactInfo = () => {
  return (
    <>
     <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-emerald-950 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Mail" size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-gray-900 font-semibold">support@digital99store.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Phone" size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-gray-900 font-semibold">+1 (555) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="MapPin" size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-gray-900 font-semibold">Silicon Valley, CA, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-50">
                <p className="text-sm font-bold text-gray-900 mb-4">Follow Our Updates</p>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all"><Icon name="Twitter" size={18} /></button>
                  <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all"><Icon name="Instagram" size={18} /></button>
                  <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all"><Icon name="Linkedin" size={18} /></button>
                </div>
              </div>
            </div>

            <div className="bg-emerald-600 p-8 rounded-3xl text-white">
              <h3 className="text-xl font-bold mb-4">Technical Support</h3>
              <p className="text-emerald-50 text-sm opacity-90 mb-6 leading-relaxed">Already a customer? Access our priority support portal for faster response times and dedicated assistance.</p>
              <Button variant="secondary" fullWidth className="bg-white text-emerald-600 hover:bg-emerald-50">Open Ticket</Button>
            </div>
          </div>
    </>
  )
}

export default ContactInfo