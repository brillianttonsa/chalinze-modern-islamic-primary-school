import type { Tab } from '../common/types';
import studentsPractical from '../../assets/students-practical.jpg'

export default function MoreThanAnEducationSection({ onNavigate }: { onNavigate?: (tab: Tab) => void }) {
  return (
    <section className="bg-[#fbf9f5] py-20 px-6 md:px-16 border-t border-[#f0ebd9]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Header Row with 3 Columns of Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-gray-300/60 pb-16">
          
          {/* Left Title (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-medium">
              <span className="w-6 h-[1px] bg-[#d4af37]"></span>
              <span>A school for the whole child</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0b291e] font-normal tracking-tight leading-tight">
              More than<br />an education.
            </h2>
          </div>

          {/* Right 3 Feature Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Feature 1 */}
            <div className="space-y-2 border-l border-gray-300/80 pl-4">
              <div className="text-[#d4af37] mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-serif text-lg text-[#0b291e] font-medium">Primary to Form IV</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">A connected learning journey</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-2 border-l border-gray-300/80 pl-4">
              <div className="text-[#d4af37] mb-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>
              <h4 className="font-serif text-lg text-[#0b291e] font-medium">Faith & character</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">Values at the heart of each day</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-2 border-l border-gray-300/80 pl-4">
              <div className="text-[#d4af37] mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-serif text-lg text-[#0b291e] font-medium">Boarding & day life</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">A community to belong to</p>
            </div>

          </div>

        </div>

        {/* Bottom Content Row: Image + Welcome Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Image Box (6 cols) */}
          <div className="lg:col-span-6 relative group overflow-hidden shadow-md">
            <div className="relative h-[420px] w-full bg-gray-200">
              {/* Image representing students studying */}
              <img 
                src={studentsPractical} 
                alt="Students in classroom at Chalinze Modern Islamic School" 
                className="w-full h-full object-cover"
              />
              {/* Overlay bottom caption tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0b291e]/90 text-white px-4 py-3 flex justify-between items-center text-xs tracking-wide">
                <span>A place to learn, grow and belong</span>
                <span className="text-[#d4af37]">↗</span>
              </div>
            </div>
          </div>

          {/* Right Text Box (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-medium">
                <span className="w-6 h-[1px] bg-[#d4af37]"></span>
                <span>A welcome from our school</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0b291e] font-normal tracking-tight leading-tight">
                Every great journey begins with belonging.
              </h3>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
              At Chalinze Modern Islamic School, we believe education should nurture both the mind and the heart. Our approach brings together academic curiosity, thoughtful guidance and the timeless principles of Islam.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
              Whether in the classroom, at prayer or among friends, we want every learner to feel encouraged to become their best self.
            </p>

            <div className="pt-2">
              <button 
                onClick={() => onNavigate && onNavigate('about us')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#0b291e] font-semibold hover:text-[#d4af37] transition-colors group"
              >
                <span>Get to know us</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
