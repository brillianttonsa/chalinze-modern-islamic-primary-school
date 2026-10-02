const values = ['Integrity and discipline', 'Respect and compassion', 'Excellence in education', 'Islamic morals and identity']

export default function LeadershipAndApproachSection() {
  return <section className="bg-[#fbf9f5] py-20 px-6 md:px-16 border-t border-[#f0ebd9]">
    <div className="max-w-7xl mx-auto space-y-16">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-[#d4af37] text-xs uppercase tracking-[.2em]">Our purpose</p>
          <h2 className="font-serif text-4xl text-[#0b291e] mt-3">Where faith, knowledge and character grow together.</h2>
          <p className="text-gray-700 leading-relaxed mt-5">Chalinze Modern Islamic School offers Nursery and Primary education in Chalinze, Pwani. We combine the national curriculum with Qur'an learning and strong Islamic values so every child grows in knowledge, discipline and good character.</p>
          </div>
          <div className="bg-white border border-[#e6dec2] p-8">
            <h3 className="font-serif text-2xl text-[#0b291e]">How we do it</h3>
            
            <p className="text-gray-700 mt-3">Thoughtful teaching, clear routines, prayer, family partnership and opportunities to practise leadership give learning a purpose beyond the classroom.</p>
            <h3 className="font-serif text-2xl text-[#0b291e] mt-7">Our approach</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              {values.map((value) => <li key={value}>✓ {value}</li>)}
              </ul>
              </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#0b291e] text-white p-8 md:p-12">
                <img src="" alt="School director" className="w-full h-80 object-cover" />
                <div>
                  <p className="text-amber-200 text-xs uppercase tracking-[.2em]">Director's message</p><h2 className="font-serif text-3xl mt-3">Every child deserves guidance, challenge and belonging.</h2><p className="text-white/80 mt-5 leading-relaxed">Our commitment is to help learners excel in their studies while building the discipline, faith and compassion they need to serve their communities.</p><p className="mt-6 text-amber-200 font-medium">Office of the Director</p><p className="text-sm text-white/60 mt-1">Director name and approved portrait to be confirmed by the school.</p></div></div></div></section>
}
