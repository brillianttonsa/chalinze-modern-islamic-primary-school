
export default function ContactHeaderBanner() {
  return (
    <section className="bg-[#0b291e] text-white py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Decorative background Islamic star / geometric watermark pattern */}
      <div className="absolute right-[-10%] top-[-50%] w-[600px] h-[600px] opacity-10 pointer-events-none flex items-center justify-center">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-[#d4af37] transform rotate-0"></div>
          <div className="absolute inset-0 bg-[#d4af37] transform rotate-45"></div>
          <div className="absolute inset-0 bg-[#d4af37] transform rotate-90"></div>
          <div className="absolute inset-0 bg-[#d4af37] transform rotate-[135deg]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-4">
        {/* Subtitle tag */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-200/90 font-medium">
          <span className="w-6 h-[1px] bg-amber-200/90"></span>
          <span>Contact & Location</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
          Let’s connect.
        </h1>

        {/* Description */}
        <p className="text-white/80 text-sm md:text-base max-w-lg font-light leading-relaxed">
          Have a question about school life or admissions? We would be glad to help you find your next step.
        </p>
      </div>
    </section>
  );
}
