import { ArrowRight, ExternalLink } from 'lucide-react'
import type { Tab } from '../common/types'
import hero from '../../assets/school.jpg'

export default function HeroSection({ onNavigate }: { onApply: () => void; onNavigate: (tab: Tab) => void }) {
  const metrics = [['100%', 'National Exam Pass Rate'], ['15+', 'Extracurricular Clubs'], ['A+', 'Moral & Academic Standard']]
  return <section className="relative overflow-hidden bg-[#FDFBF7] lg:min-h-[calc(100vh-80px)] flex items-center"><div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2">
    <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 lg:py-24 z-10"><div className="flex items-center gap-2 mb-4"><div className="w-8 h-[2px] bg-[#8C6D3B]" /><span className="text-xs sm:text-sm font-semibold tracking-widest text-[#6B5A38] uppercase">Welcome to Chalinze Modern Islamic School</span><span className="w-2 h-2 rounded-full bg-red-600 animate-ping" /></div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#1A2E22] leading-[1.1] mb-6">Rooted in faith.<span className="italic block mt-1">Ready for the</span> future<span className="text-[#D4AF37]">.</span></h1><p className="text-base sm:text-lg text-[#55635B] max-w-xl leading-relaxed mb-10">Where a strong academic foundation and Islamic values come together to help every child grow with purpose, character, and confidence.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button onClick={() => onNavigate('admissions')} className="bg-[#D4AF37] hover:bg-[#C29F2F] text-[#1A2E22] px-8 py-4 rounded-md font-semibold flex justify-center gap-3 group">Explore admissions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button><button onClick={() => onNavigate('about us')} className="border border-[#C7C0B0] text-[#1A2E22] px-8 py-4 rounded-md font-semibold flex justify-center gap-2 bg-white/40">Discover our school <ExternalLink className="w-4 h-4" /></button></div>
      <div className="grid grid-cols-3 gap-6 pt-12 mt-12 border-t border-[#E6E2D8]">{metrics.map(([value, label]) => <div key={label}><h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2E22]">{value}</h4><p className="text-xs sm:text-sm text-[#6B5A38] mt-1 font-medium">{label}</p></div>)}</div>
    </div><div className="relative min-h-[400px] lg:min-h-full overflow-hidden bg-[#1E4D3A]"><img src={hero} alt="Compound Of The School" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" /><div className="absolute bottom-8 right-8 hidden sm:flex items-center gap-3 bg-white/90 px-5 py-3 rounded-xl shadow-lg"><div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" /><span className="text-xs font-bold text-[#1A2E22]">Knowledge. Character.
A brighter tomorrow.</span></div></div>
  </div></section>
}
