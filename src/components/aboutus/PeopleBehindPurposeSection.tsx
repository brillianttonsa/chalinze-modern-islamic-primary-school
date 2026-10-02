
export default function PeopleBehindPurposeSection() {
  return (
    <section className="bg-[#fbf9f5] py-20 px-6 md:px-16 border-t border-[#f0ebd9]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-medium">
            <span className="w-6 h-[1px] bg-[#d4af37]"></span>
            <span>Our community</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0b291e] font-normal tracking-tight">
            The people behind the purpose.
          </h2>
          <p className="text-gray-700 text-sm md:text-base font-light pt-1">
            A school is shaped by the care and commitment of its people.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Board of directors */}
          <div className="bg-white p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-[#d4af37] text-xs font-mono font-semibold tracking-widest">01</span>
              <h3 className="font-serif text-2xl text-[#0b291e] font-normal">Board of directors</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
                Providing oversight and stewardship for the school's long-term direction.
              </p>
            </div>
          </div>

          {/* Card 2: School leadership */}
          <div className="bg-white p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-[#d4af37] text-xs font-mono font-semibold tracking-widest">02</span>
              <h3 className="font-serif text-2xl text-[#0b291e] font-normal">School leadership</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
                Guiding daily learning, student wellbeing and the school community.
              </p>
            </div>
          </div>

          {/* Card 3: Teachers & mentors */}
          <div className="bg-white p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-[#d4af37] text-xs font-mono font-semibold tracking-widest">03</span>
              <h3 className="font-serif text-2xl text-[#0b291e] font-normal">Teachers & mentors</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
                Supporting each learner with knowledge, encouragement and care.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Notice Banner */}
        <div className="bg-[#f4ebd0]/60 border-l-2 border-[#d4af37] p-6">
          <div className="flex items-start gap-3">
            {/* Sparkle Icon */}
            <div className="text-[#d4af37] shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-light">
              Names, biographies and photographs of leadership and teaching staff await school approval before publication.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
