"use client";

import Image from "next/image";

export default function About() {
  const experiences = [
    {
      title: "Formation",
      details: "Master 1 en Informatique (en cours) - Ecole Nationale d'Informatique (ENI)",
      icon: "🎓",
    },
    {
      title: "Compétences",
      details: "Next.js, React Native, PHP, Python, Java, Tailwind CSS, MySQL",
      icon: "💻",
    },
    {
      title: "Création Visuelle",
      details: "Canva, Figma, Flyers, supports graphiques",
      icon: "🎨",
    },
    {
      title: "Soft Skills",
      details: "Curieux, réactif, apprentissage rapide, communication",
      icon: "🚀",
    },
  ];

  return (
    <section id="a-propos" className="py-20 px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 relative">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {[
            "html.jpg",
            "main.jpg",
            "ordi.jpg",
            "Mada.jpg",
          ].map((img, i) => (
            <div key={i} className="aspect-square glass overflow-hidden rounded-2xl group">
              <img 
                src={img} 
                alt={`Skill ${i}`} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110" 
              />
            </div>
          ))}
          <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-mercury text-white px-8 py-4 rounded-2xl shadow-xl shadow-sky-500/30">
            <p className="text-2xl font-bold">Madagascar</p>
            <p className="text-xs font-medium uppercase tracking-widest text-center">Based</p>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">
            À Propos de <span className="text-mercury">Moi</span>
          </h2>
          <p className="text-slate-600 font-medium">Lorniot Marcel - Étudiant en Master 1 @ ENI</p>
          <p className="text-muted leading-relaxed">
            Je suis passionné par la création de solutions technologiques qui ont un impact réel. 
            Au-delà du code, je maîtrise les outils de communication visuelle et je possède une 
            grande curiosité intellectuelle qui me permet de m'adapter rapidement aux nouveaux 
            défis de l'industrie numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div key={exp.title} className="flex gap-4 group">
              <div className="w-10 h-10 shrink-0 bg-mercury/10 rounded-lg flex items-center justify-center text-xl group-hover:bg-mercury/20 transition-colors text-mercury">
                {exp.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-foreground uppercase text-xs tracking-widest">{exp.title}</h4>
                <p className="text-muted text-sm leading-snug">{exp.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          <a href="mailto:lorniotmarcel@gmail.com" className="px-8 py-3 bg-mercury text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-sky-500/30 flex items-center gap-3">
            Me Contacter
            <div className="w-5 h-5 relative">
              <Image 
                src="/email.png" 
                alt="Email Icon" 
                fill
                className="object-contain"
              />
            </div>
          </a>
        </div>
      </div>
    </section>

  );
}
