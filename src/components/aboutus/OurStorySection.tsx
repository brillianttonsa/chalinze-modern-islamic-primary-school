
export default function OurStorySection() {
  return (
    <div className="bg-[#fbf9f5] min-h-screen">
      
      {/* Top Hero Banner */}
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
            <span>Our Story</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
            An education with meaning.
          </h1>

          {/* Description */}
          <p className="text-white/80 text-sm md:text-base max-w-lg font-light leading-relaxed">
            Get to know the purpose, people and principles behind Chalinze Modern Islamic School.
          </p>
        </div>
      </section>

      {/* Who We Are Content Section */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading (5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-medium">
              <span className="w-6 h-[1px] bg-[#d4af37]"></span>
              <span>Who We Are</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0b291e] font-normal leading-tight">
              Growing minds.<br />
              Grounded hearts.
            </h2>
          </div>

          {/* Right Column: Paragraphs & Notice Box (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
              Chalinze Modern Islamic School serves families seeking an education that brings academic learning and Islamic character together. From the early years through primary school, our aim is to help learners build knowledge, confidence and a lasting sense of responsibility.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
              Our school community is rooted in Chalinze, Tanzania. We believe that a supportive environment, strong partnerships with families and purposeful learning give every child room to flourish.
            </p>

            {/* Info / Notice Card */}
            <div className="bg-[#f4ebd0]/60 border-l-2 border-[#d4af37] p-6 relative mt-8">
              <div className="flex items-start gap-3">
                {/* Sparkle Icon */}
                <div className="text-[#d4af37] shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </div>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-light">
                  A verified founding timeline and school history will be published here when supplied by the school administration.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
