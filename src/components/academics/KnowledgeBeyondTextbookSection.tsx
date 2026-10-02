
export default function KnowledgeBeyondTextbookSection() {
  return (
    <section className="bg-[#fbf9f5] py-20 px-6 md:px-16 border-t border-[#f0ebd9]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-medium">
            <span className="w-6 h-[1px] bg-[#d4af37]"></span>
            <span>How we learn</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0b291e] font-normal tracking-tight">
            Knowledge beyond the textbook.
          </h2>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Hands-on discovery */}
          <div className="bg-white p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              {/* Sparkle Icon */}
              <div className="text-[#d4af37]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[#0b291e] font-normal">Hands-on discovery</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
                Practical activities and active participation make learning meaningful.
              </p>
            </div>
          </div>

          {/* Card 2: Guided growth */}
          <div className="bg-white p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              {/* People Icon */}
              <div className="text-[#d4af37]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[#0b291e] font-normal">Guided growth</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
                Teachers support students as individuals, encouraging questions and progress.
              </p>
            </div>
          </div>

          {/* Card 3: Exam readiness */}
          <div className="bg-white p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              {/* Shield/Check Icon */}
              <div className="text-[#d4af37]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[#0b291e] font-normal">Exam readiness</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
                Structured revision and practice support students preparing for assessments.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
