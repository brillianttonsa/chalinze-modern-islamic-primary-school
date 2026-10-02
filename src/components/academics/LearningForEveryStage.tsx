import { useState } from 'react';

type Stage = 'primary' | 'seminary'

const stagesData: Record<Stage, { sectionTitle: string; title: string; description: string; focusAreas: string[]; notice: string }> = {
  primary: {
    sectionTitle: 'PRIMARY SECTION',
    title: 'Strong foundations for a lifelong love of learning.',
    description: 'Our primary section focuses on literacy, numeracy, inquiry and the habits that help children grow into confident learners.',
    focusAreas: [
      'Core literacy and numeracy',
      'Science and discovery',
      'Languages and communication',
      'Creative and co-curricular learning'
    ],
    notice: 'Detailed syllabi, daily timetables, practical schedules and verified performance summaries will be added once the school provides current documents.'
  },
  // secondary: {
  //   sectionTitle: 'SECONDARY SECTION',
  //   title: 'Expanding horizons, critical thinking and academic depth.',
  //   description: 'Our secondary program challenges students with rigorous coursework, analytical problem-solving and preparation for national examinations.',
  //   focusAreas: [
  //     'Advanced mathematics and sciences',
  //     'Humanities and social studies',
  //     'Information and communication technology',
  //     'Leadership and collaborative projects'
  //   ],
  //   notice: 'Detailed syllabi, daily timetables, practical schedules and verified performance summaries will be added once the school provides current documents.'
  // },
  seminary: {
    sectionTitle: 'SEMINARY SECTION',
    title: 'Deepening faith, character and Islamic scholarship.',
    description: 'Our seminary pathway integrates comprehensive Islamic studies, Quranic memorization, moral philosophy and spiritual mentorship.',
    focusAreas: [
      'Quranic studies and Hifdh',
      'Arabic language and literature',
      'Islamic jurisprudence and ethics',
      'Community service and spiritual leadership'
    ],
    notice: 'Detailed syllabi, daily timetables, practical schedules and verified performance summaries will be added once the school provides current documents.'
  }
};

export default function LearningForEveryStageSection() {
  const [activeTab, setActiveTab] = useState<Stage>('primary');
  const currentData = stagesData[activeTab];

  return (
    <section className="bg-[#fbf9f5] py-20 px-6 md:px-16 border-t border-[#f0ebd9]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Area */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-medium">
              <span className="w-6 h-[1px] bg-[#d4af37]"></span>
              <span>Explore our pathways</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0b291e] font-normal tracking-tight">
              Learning for every stage.
            </h2>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-8 border-b border-[#e6dec2] pb-0">
            
            {/* Primary Tab */}
            <button
              onClick={() => setActiveTab('primary')}
              className={`pb-4 text-sm md:text-base font-serif flex items-center gap-2 transition-colors relative ${
                activeTab === 'primary' 
                  ? 'text-[#0b291e] font-medium border-b-2 border-[#0b291e] -mb-[2px]' 
                  : 'text-gray-500 hover:text-[#0b291e]'
              }`}
            >
              <span>Primary</span>
              <span className="text-xs">↗</span>
            </button>

            {/* Secondary Tab */}
            {/* <button
              onClick={() => setActiveTab('secondary')}
              className={`pb-4 text-sm md:text-base font-serif flex items-center gap-2 transition-colors relative ${
                activeTab === 'secondary' 
                  ? 'text-[#0b291e] font-medium border-b-2 border-[#0b291e] -mb-[2px]' 
                  : 'text-gray-500 hover:text-[#0b291e]'
              }`}
            >
              <span>Secondary</span>
              <span className="text-xs">↗</span>
            </button> */}

            {/* Seminary Tab */}
            <button
              onClick={() => setActiveTab('seminary')}
              className={`pb-4 text-sm md:text-base font-serif flex items-center gap-2 transition-colors relative ${
                activeTab === 'seminary' 
                  ? 'text-[#0b291e] font-medium border-b-2 border-[#0b291e] -mb-[2px]' 
                  : 'text-gray-500 hover:text-[#0b291e]'
              }`}
            >
              <span>Seminary</span>
              <span className="text-xs">↗</span>
            </button>

          </div>
        </div>

        {/* Tab Content Box */}
        <div className="bg-[#f5f0e6] p-8 md:p-14 border border-[#e6dec2] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-start transition-all duration-300">
          
          {/* Left Text (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              <span className="w-5 h-[1px] bg-[#d4af37]"></span>
              <span>{currentData.sectionTitle}</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#0b291e] font-normal leading-tight tracking-tight">
              {currentData.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light pt-2">
              {currentData.description}
            </p>
          </div>

          {/* Right Areas of Focus (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold block mb-2">
              Areas of focus
            </span>
            <div className="divide-y divide-[#e6dec2] border-t border-b border-[#e6dec2]">
              {currentData.focusAreas.map((area, index) => (
                <div key={index} className="py-3.5 flex items-center gap-3 text-sm text-[#0b291e] font-light">
                  <span className="text-[#d4af37] shrink-0 font-bold">✓</span>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Notice Banner */}
        <div className="bg-[#f4ebd0]/60 border-l-2 border-[#d4af37] p-6">
          <div className="flex items-start gap-3">
            <div className="text-[#d4af37] shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-light">
              {currentData.notice}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
