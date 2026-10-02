import HeroSection from '../components/home/HeroSection'
import MoreThanAnEducationSection from '../components/home/MoreThanAnEducationSection'
import WhatHappeningSection from '../components/home/WhatHappeningSection'
import type { Tab } from '../components/common/types'

export default function HomePage({ onApply, onNavigate }: { onApply: () => void; onNavigate: (tab: Tab) => void }) {
  return <><HeroSection onApply={onApply} onNavigate={onNavigate} /><MoreThanAnEducationSection onNavigate={onNavigate} /><WhatHappeningSection onNavigate={onNavigate} /></>
}
