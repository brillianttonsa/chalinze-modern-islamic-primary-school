export const navigationItems = [
  'home',
  'about us',
  'academics',
  'student life',
  'admissions',
  'news & results',
  'gallery',
  'contact',
  'islamic life',
  'careers',
] as const

export type Tab = (typeof navigationItems)[number]

export const titleForTab = (tab: Tab) => tab.replace(/\b\w/g, (letter) => letter.toUpperCase())


export type HeaderProps = { activeTab: Tab; onNavigate: (tab: Tab) => void; onApply: () => void }
