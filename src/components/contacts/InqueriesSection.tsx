
export default function InquiriesSection() {
  return (
    <section className="bg-[#fbf9f5] py-20 px-6 md:px-16 border-t border-[#f0ebd9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading (5 columns) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-medium">
            <span className="w-6 h-[1px] bg-[#d4af37]"></span>
            <span>Inquiries</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0b291e] font-normal leading-tight">
            We’re here to help.
          </h2>
        </div>

        {/* Right Column: Description & Notice Box (7 columns) */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
            For questions about admissions, school visits, fees, boarding or student life, please reach out using the school's verified contact channels once available.
          </p>

          {/* Info / Notice Card */}
          <div className="bg-[#f4ebd0]/60 border-l-2 border-[#d4af37] p-6 relative">
            <div className="flex items-start gap-3">
              {/* Sparkle Icon */}
              <div className="text-[#d4af37] shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-light">
                An inquiry form cannot deliver messages until a school-approved recipient or backend is connected. We have intentionally not included a nonfunctional submission button.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
