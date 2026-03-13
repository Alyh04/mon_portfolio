"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <p className="text-mercury font-medium tracking-wide">
            Master 1 Computer Science Student & Full-Stack Developer
          </p>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Hello, Je suis <span className="text-mercury">Lorniot Marcel</span> 🧸
          </h1>
          <p className="text-muted max-w-lg leading-relaxed">
            Passionné par le développement web et mobile, je conçois des solutions
            digitales utiles et innovantes. Je combine expertise technique et
            créativité visuelle pour donner vie à vos projets.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a 
            href="https://github.com/Alyh04" 
            target="_blank"
            className="px-8 py-4 bg-mercury text-black font-bold rounded-2xl hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-sky-500/30"
          >
            GitHub <span>→</span>
          </a>
        </div>

        <div className="flex gap-12 pt-8">
          {[
            { label: "Projets", value: "20+" },
            { label: "Années", value: "3+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-mercury">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-md aspect-square">
        {/* Organic Shape Background - Mercury tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-400 rounded-[40%_60%_70%_30%/40%_50%_60%_40%] animate-pulse-slow opacity-90 shadow-2xl shadow-sky-500/30"></div>
        {/* Current Avatar from CV Photo */}
        <div className="absolute inset-4 overflow-hidden rounded-[40%_60%_70%_30%/40%_50%_60%_40%] border-4 border-white/10">
          <img 
            src="profil.jpeg" 
            alt="Lorniot Marcel"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Glowing Dots */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-secondary rounded-full blur-xl animate-pulse"></div>
      </div>
    </section>
  );
}
