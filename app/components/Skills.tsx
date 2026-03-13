"use client";

const skills = [
  { name: "Next.js / React", percentage: 90 },
  { name: "React Native", percentage: 80 },
  { name: "PHP", percentage: 85 },
  { name: "Python / Flask", percentage: 75 },
  { name: "Java", percentage: 70 },
  { name: "Administartion Réseau", percentage: 70 },
  { name: "MySQL", percentage: 85 },
];

export default function Skills() {
  return (
    <section id="competences" className="py-20 px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl font-bold">
          <span className="text-mercury">Compétences</span> & Expérience
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Mon parcours professionnel et mon expertise technique
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-white/80">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-mercury rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="glass p-8 space-y-8">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-mercury before:via-accent-blue before:to-transparent">
            {/* CERES */}
            <div className="relative flex items-start gap-6 group">
              <div className="mt-1 w-10 h-10 shrink-0 bg-mercury text-black rounded-lg flex items-center justify-center z-10 font-bold group-hover:scale-110 transition-transform shadow-lg shadow-sky-500/20">1</div>
              <div>
                <h4 className="font-bold text-white tracking-widest uppercase text-sm">Programme CERES @ Fianarantsoa</h4>
                <p className="text-mercury text-xs font-bold mt-1">Sept 2025 - Déc 2025</p>
                <p className="text-muted text-sm mt-3 leading-relaxed">Digitalisation et centralisation de la gestion des navettes. Développement avec Next.js, Prisma et MySQL.</p>
              </div>
            </div>
            
            {/* Complexas */}
            <div className="relative flex items-start gap-6 group">
              <div className="mt-1 w-10 h-10 shrink-0 bg-white/5 border border-mercury/30 text-mercury rounded-lg flex items-center justify-center z-10 font-bold group-hover:bg-mercury/10 transition-colors">2</div>
              <div>
                <h4 className="font-bold text-white tracking-widest uppercase text-sm">Agent de collecte @ Complexas</h4>
                <p className="text-muted text-xs font-bold mt-1">2024</p>
                <p className="text-muted text-sm mt-3 leading-relaxed">Conduite d'enquêtes terrain et collecte de données fiables pour soutenir des décisions à impact social.</p>
              </div>
            </div>
 
            {/* SMMC */}
            <div className="relative flex items-start gap-6 group">
              <div className="mt-1 w-10 h-10 shrink-0 bg-white/5 border border-mercury/30 text-mercury rounded-lg flex items-center justify-center z-10 font-bold group-hover:bg-mercury/10 transition-colors">3</div>
              <div>
                <h4 className="font-bold text-white tracking-widest uppercase text-sm">STAGE SMMC Port @ Toamasina</h4>
                <p className="text-muted text-xs font-bold mt-1">Août 2022 - Nov 2022</p>
                <p className="text-muted text-sm mt-3 leading-relaxed">Développement d'un outil de gestion du personnel et de suivi des réparations informatiques sous normes ISO.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

