import { ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/chalinze-logo.jpg'
import { navigationItems, titleForTab, type Tab } from './types'
import { routeForTab } from './routes'

export default function Header({ onApply }: { onApply: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeMobile = () => setMobileOpen(false)
  return <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E6E2D8]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
    <Link to="/" onClick={closeMobile} className="flex items-center gap-3 text-left"><div className="w-10 h-10 border-2 border-[#1E4D3A] rounded-lg bg-white shadow-sm overflow-hidden"><img src={logo} alt="Chalinze Modern Islamic School logo" className="w-full h-full object-contain" /></div><div><span className="block font-bold text-base sm:text-lg tracking-wider text-[#1E4D3A] font-serif leading-tight">CHALINZE</span><span className="block text-[10px] sm:text-xs tracking-widest text-[#5A6860] uppercase font-semibold">Modern Islamic School</span></div></Link>
    <nav className="hidden xl:flex items-center space-x-5 text-sm font-medium">{navigationItems.map((tab) => <NavigationLink key={tab} tab={tab} />)}</nav>
    <button onClick={onApply} className="hidden xl:flex bg-[#1E4D3A] hover:bg-[#143326] text-white px-5 py-3 rounded-lg font-medium text-sm items-center gap-2 shadow-md group">Apply now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></button>
    <button onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-label="Toggle navigation" className="xl:hidden p-2 rounded-lg text-[#1E4D3A] hover:bg-[#EAE4D3]">{mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
  </div>{mobileOpen && <MobileSidebar onClose={closeMobile} onApply={onApply} />}</header>
}

function NavigationLink({ tab, mobile = false, onClick }: { tab: Tab; mobile?: boolean; onClick?: () => void }) {
  return <NavLink to={routeForTab[tab]} onClick={onClick} className={({ isActive }) => `${mobile ? 'py-3 border-b border-[#E6E2D8]' : 'py-2'} block transition-colors hover:text-[#1E4D3A] ${isActive ? 'text-[#1E4D3A] font-semibold' : 'text-[#263A30]'}`}>{titleForTab(tab)}</NavLink>
}

function MobileSidebar({ onClose, onApply }: { onClose: () => void; onApply: () => void }) {
  return <div className="fixed inset-0 z-[60] pointer-events-none xl:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <nav className="pointer-events-auto absolute z-[60] right-0 top-20 flex h-100 w-[min(22rem,86vw)] flex-col overflow-y-auto border-l border-[#E6E2D8] bg-[#FDFBF7] px-6 pb-4 shadow-2xl animate-[mobile-drawer-in_250ms_ease-out]">
      <div className="flex flex-col mt-2">{navigationItems.map((tab) => <NavigationLink key={tab} tab={tab} mobile onClick={onClose} />)}<button onClick={() => { onClose(); onApply() }} className="mt-6 bg-[#1E4D3A] text-white py-3 rounded-lg font-medium">Apply now</button></div>
    </nav>
  </div>
}
