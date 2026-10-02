
export default function CuriosityWithDirectionSection() {
  return (
    <section className="bg-[#0b291e] text-white py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Decorative background star/geometric graphic */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-10 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-full h-[2px] bg-white"></div>
          <div className="absolute h-full w-[2px] bg-white"></div>
          <div className="absolute w-full h-[2px] bg-white rotate-45"></div>
          <div className="absolute w-full h-[2px] bg-white -rotate-45"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl space-y-6">
          
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-200/90 font-medium">
            <span className="w-6 h-[1px] bg-amber-200/90"></span>
            <span>Academics</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-tight tracking-tight">
            Curiosity with direction.
          </h2>

          <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
            A connected educational journey from primary learning to secondary studies and Islamic scholarship.
          </p>

        </div>
      </div>
    </section>
  );
}
