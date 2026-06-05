"use client";

import { Building2, Ship, Bus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "Next.js / React", percentage: 90 },
  { name: "React Native", percentage: 80 },
  { name: "PHP", percentage: 85 },
  { name: "Python / Flask", percentage: 75 },
  { name: "Java", percentage: 70 },
  { name: "Administration Réseau", percentage: 70 },
  { name: "MySQL", percentage: 85 },
];

const experiences = [
  {
    number: 1,
    title: "Programme CERES @ Fianarantsoa",
    date: "Sept 2025 - Déc 2025",
    description:
      "Digitalisation et centralisation de la gestion des navettes. Développement avec Next.js, Prisma et MySQL.",
    icon: Bus,
    active: true,
  },
  {
    number: 2,
    title: "Agent de collecte @ Complexas",
    date: "2024",
    description:
      "Conduite d'enquêtes terrain et collecte de données fiables pour soutenir des décisions à impact social.",
    icon: Building2,
    active: false,
  },
  {
    number: 3,
    title: "Stage SMMC Port @ Toamasina",
    date: "Août 2022 - Nov 2022",
    description:
      "Développement d'un outil de gestion du personnel et de suivi des réparations informatiques sous normes ISO.",
    icon: Ship,
    active: false,
  },
];

export default function Skills() {
  return (
    <section id="competences" className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      <ScrollReveal direction="up">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Expérience
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base">
            Mon parcours professionnel et mon expertise technique
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <ScrollReveal direction="left">
          <div className="rounded-lg p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[url('/service.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 -z-10 bg-black/75" />
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-px before:bg-gradient-to-b before:from-white before:via-white/50 before:to-transparent">
              {experiences.map((exp) => {
                const Icon = exp.icon;
                return (
                  <div
                    key={exp.number}
                    className="relative flex items-start gap-5 group"
                  >
                    <div
                      className={`mt-0.5 w-10 h-10 shrink-0 rounded-lg flex items-center justify-center z-10 font-bold text-sm transition-all duration-300 ${
                        exp.active
                          ? "bg-white text-black shadow-lg shadow-white/20"
                          : "bg-white/10 text-white border border-white/20"
                      }`}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-white text-sm tracking-wide">
                        {exp.title}
                      </h3>
                      <p className="text-xs font-medium text-white/70 mt-1">
                        {exp.date}
                      </p>
                      <p className="text-white/70 text-sm mt-2 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} direction="right" delay={index * 0.03}>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-medium uppercase tracking-widest text-white/70">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
