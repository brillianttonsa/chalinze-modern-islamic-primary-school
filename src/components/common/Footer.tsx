import { Link } from 'react-router-dom';
import logo from '../../assets/chalinze-logo.jpg'

export default function Footer() {
  return (
    <footer className="bg-[#0b291e] text-white pt-16 pb-8 px-6 md:px-16 border-t border-[#133b2c]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
        
        {/* Col 1: Logo & Description (4 columns) */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            {/* School Logo Icon */}
            <div className="w-9 h-9 border border-white/40 flex items-center justify-center">
              <img src={logo} alt="Chalinze Modern Islamic School logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-serif tracking-widest text-lg font-semibold leading-tight">CHALINZE</h3>
              <p className="text-[9px] tracking-[0.2em] uppercase text-white/70">MODERN ISLAMIC SCHOOL</p>
            </div>
          </div>
          <p className="text-white/80 text-sm leading-relaxed max-w-sm pt-2 font-light">
            Supporting a generation of learners through knowledge, character and faith in Chalinze Modern Islamic, Tanzania.
          </p>
        </div>

        {/* Col 2: Explore Links (2 columns) */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="text-amber-200/90 text-xs uppercase tracking-[0.2em] font-medium">Explore</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-white transition-colors">Academics</Link></li>
            <li><Link to="/student-life" className="hover:text-white transition-colors">Student Life</Link></li>
            <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
          </ul>
        </div>

        {/* Col 3: Discover Links (2 columns) */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="text-amber-200/90 text-xs uppercase tracking-[0.2em] font-medium">Discover</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><Link to="/results" className="hover:text-white transition-colors">News & Results</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Col 4: Call to action (4 columns) */}
        <div className="md:col-span-4 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-white font-normal leading-snug">
              Every journey starts with a conversation.
            </h3>
          </div>
          <div>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#d4af37] text-gray-950 font-medium px-6 py-3 text-sm hover:bg-[#c29f31] transition-colors"
            >
              Get in touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/60">
        <p>© 2026 Chalinze Modern Islamic School</p>
        <p className="mt-2 sm:mt-0 font-light">Made for learning. Rooted in purpose.</p>
      </div>
    </footer>
  );
}
