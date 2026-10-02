
export default function PrinciplesSection() {
  return (
    <section className="bg-[#fbf9f5] py-20 px-6 md:px-16 border-t border-[#f0ebd9]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-medium">
            <span className="w-6 h-[1px] bg-[#d4af37]"></span>
            <span>What guides us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0b291e] font-normal tracking-tight">
            Principles we put into practice.
          </h2>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Our mission */}
          <div className="bg-white p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              {/* Book Icon */}
              <div className="text-[#d4af37]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[#0b291e] font-normal">Our mission</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
                To foster thoughtful learners through a balanced education in academics, faith and personal development.
              </p>
            </div>
          </div>

          {/* Card 2: Our vision */}
          <div className="bg-white p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              {/* Globe / World Icon */}
              <div className="text-[#d4af37]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[#0b291e] font-normal">Our vision</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
                A community of capable, compassionate young people prepared to contribute positively to the world.
              </p>
            </div>
          </div>

          {/* Card 3: Our values */}
          <div className="bg-white p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              {/* Heart Icon */}
              <div className="text-[#d4af37]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[#0b291e] font-normal">Our values</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
                Faith, respect, integrity, service and a commitment to doing our best in all that we do.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
