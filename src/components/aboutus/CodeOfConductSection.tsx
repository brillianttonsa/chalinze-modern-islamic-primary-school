import type { Tab } from '../common/types';

export default function CodeOfConductSection({ onNavigate }: { onNavigate?: (tab: Tab) => void }) {
  return (
    <section className="bg-[#1b4f3c] text-white py-20 px-6 md:px-16 border-t border-[#133b2c]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-200/90 font-medium">
            <span className="w-6 h-[1px] bg-amber-200/90"></span>
            <span>Our Code of Conduct</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-tight tracking-tight">
            Character in every action.
          </h2>
        </div>

        {/* Right Column: Description & Link (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
            Our approach to student conduct centers on honesty, kindness, respect for others, care for shared spaces, and responsibility in learning and worship. Students are encouraged to carry these values into school, home and community life.
          </p>

          <div className="pt-2">
            <button 
              onClick={() => onNavigate && onNavigate('contact')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-200 font-semibold hover:text-white transition-colors group border-b border-amber-200/50 pb-1"
            >
              <span>Ask about school policies</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
