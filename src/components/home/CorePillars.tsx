import { BookOpen, Shield, Users } from "lucide-react"

export default function CorePillars() {
    return (
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-[#8C6D3B] text-xs font-bold tracking-widest uppercase bg-[#F9F7F0] px-3 py-1.5 rounded-full inline-block mb-3">
                    Why Choose Us
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#1A2E22]">
                    Nurturing Minds, Shaping Noble Characters
                  </h2>
                  <p className="text-[#65756C] mt-4 text-base">
                    At Chalinze Modern Islamic School, we combine rigorous modern education with deep-rooted Islamic ethics to foster holistic development.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Shield,
                      title: "Islamic Values & Ethics",
                      desc: "Daily Quranic memorization (Tahfidz), Islamic jurisprudence, and moral guidance integrated into everyday student interactions."
                    },
                    {
                      icon: BookOpen,
                      title: "World-Class Academics",
                      desc: "Comprehensive national curriculum taught by passionate educators with state-of-the-art science and computer laboratories."
                    },
                    {
                      icon: Users,
                      title: "Holistic Development",
                      desc: "Robust sports programs, leadership training, debates, and community service ensuring balanced personal growth."
                    }
                  ].map((pillar, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#EFECE4] hover:border-[#1E4D3A] transition-all duration-300 hover:shadow-xl group"
                    >
                      <div className="w-14 h-14 bg-[#1E4D3A] text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                        <pillar.icon className="w-7 h-7 text-[#D4AF37]" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#1A2E22] mb-3">{pillar.title}</h3>
                      <p className="text-[#65756C] text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    )
}