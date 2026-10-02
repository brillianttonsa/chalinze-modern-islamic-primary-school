import type { Tab } from '../common/types';
import { ArrowUpRight } from "lucide-react"

export default function WhatsHappeningSection({ onNavigate }: { onNavigate?: (tab: Tab) => void }) {
  return (
    <section className="bg-[#1b4f3c] text-white py-20 px-6 md:px-16 border-t border-[#133b2c]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading & CTA (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-200/90 font-medium">
              <span className="w-6 h-[1px] bg-amber-200/90"></span>
              <span>Stay connected</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-normal leading-tight tracking-tight">
              What's happening<br />at Chalinze Modern?
            </h2>
          </div>

          <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
            Important notices, school updates and examination resources, all in one place.
          </p>

          <div className="pt-2">
            <button 
              onClick={() => onNavigate && onNavigate('news & results')}
              className="inline-flex items-center gap-3 border border-white/30 text-white font-medium px-6 py-3.5 text-sm hover:bg-white/10 transition-colors group"
            >
              <span>Visit news & results</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Right Column: List of Interactive Links (7 cols) */}
        <div className="lg:col-span-7 space-y-0 divide-y divide-white/15 border-t border-b border-white/15">
          
         {/* Item 1 */}
          <div 
          onClick={() => onNavigate && onNavigate('admissions')}
          className="py-6 flex items-center justify-between group cursor-pointer hover:bg-white/[0.03] transition-colors px-2">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-amber-200/80 font-medium">School Notices</span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal group-hover:text-amber-200 transition-colors">
                Term dates and announcements
              </h3>
            </div>
            <div className="text-white/70 group-hover:text-amber-200 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Item 2 */}
          <div 
            onClick={() => onNavigate && onNavigate('contact')}
            className="py-6 flex items-center justify-between group cursor-pointer hover:bg-white/[0.03] transition-colors px-2"
          >
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-amber-200/80 font-medium">Get in touch</span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal group-hover:text-amber-200 transition-colors">
                Have a question? Connect with our team
              </h3>
            </div>
            <div className="text-white/70 group-hover:text-amber-200 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
