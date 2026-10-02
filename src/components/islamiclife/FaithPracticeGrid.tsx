const areas = [
  ['Qur’an', 'Daily recitation with tajweed and memorisation opportunities; confirm the Hifdh track with the school.'],
  ['Prayer and routines', 'Daily prayers, Friday Jumu’ah and supervised boarding routines.'],
  ['Islamic studies', 'Aqeedah, fiqh, seerah and Arabic taught by qualified teachers.'],
  ['Character and manners', 'Adab, respect for parents and elders, honesty and responsibility.'],
  ['Special events', 'Ramadan programmes, Qur’an competitions, Maulid and Eid celebrations.'],
]

export default function FaithPracticeGrid() {
  return <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-6">{areas.map(([title, text]) => <article key={title} className="bg-white border border-[#e6dec2] p-7"><h2 className="font-serif text-2xl text-[#0b291e]">{title}</h2><p className="text-gray-700 mt-3">{text}</p></article>)}</section>
}
