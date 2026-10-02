import CodeOfConductSection from '../components/aboutus/CodeOfConductSection'
import OurStorySection from '../components/aboutus/OurStorySection'
import PeopleBehindPurposeSection from '../components/aboutus/PeopleBehindPurposeSection'
import PrinciplesSection from '../components/aboutus/PrincipleSection'
import LeadershipAndApproachSection from '../components/aboutus/LeadershipAndApproachSection'
import type { Tab } from '../components/common/types'

export default function AboutPage({ onNavigate }: { onNavigate: (tab: Tab) => void }) { return <><OurStorySection /><PrinciplesSection /><LeadershipAndApproachSection /><PeopleBehindPurposeSection /><CodeOfConductSection onNavigate={onNavigate} /></> }
