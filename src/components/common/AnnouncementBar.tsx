import { Sparkles } from 'lucide-react'

export default function AnnouncementBar({ onApply }: { onApply: () => void }) {
  return (
    <div className="bg-[#1E4D3A] text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
      <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
      <span>Admissions for 2026/2027 Academic Year are now open!</span>
      <button onClick={onApply} className="underline text-yellow-200 cursor-pointer hover:text-yellow-800 font-semibold ml-2">Apply Today →</button>
    </div>
)}
