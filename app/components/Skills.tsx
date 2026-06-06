"use client";

import { useState } from "react";
import { Building2, Ship, Bus, Code, MessageCircle, X, Globe, Smartphone, Server, Terminal, Coffee, Wifi, Database, Palette, PenTool, ClipboardList } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "Next.js / React", percentage: 90, icon: Globe },
  { name: "React Native", percentage: 80, icon: Smartphone },
  { name: "PHP", percentage: 85, icon: Server },
  { name: "Python / Flask", percentage: 75, icon: Terminal },
  { name: "Java", percentage: 70, icon: Coffee },
  { name: "Administration Réseau", percentage: 70, icon: Wifi },
  { name: "MySQL", percentage: 85, icon: Database },
  { name: "Canva", percentage: 80, icon: Palette },
  { name: "Figma", percentage: 70, icon: PenTool },
  { name: "Scrum Master", percentage: 90, icon: ClipboardList },
];

const experiences = [
  {
    number: 1,
    title: "Freelance Full-Stack Développeur",
    date: "Jusqu'à maintenant",
    description:
      "Création de sites web et d'applications mobiles pour des entreprises particulières ou publiques.",
    icon: Code,
    active: true,
  },
  {
    number: 2,
    title: "Community Manager",
    pdf: "/attestation-travail.pdf",
    date: "Mars 2026",
    description:
      "Création de designs, création de blog, ainsi qu'assistant IT.",
    icon: MessageCircle,
    active: true,
  },
  {
    number: 3,
    title: "Agent de terrain sur la collecte de données pour COMPLEXAS",
    link: "https://www.complexas.com",
    date: "Janvier 2026",
    description:
      "Mon travail consiste à mener des enquêtes de terrain en m'immergeant dans la vie des villageois afin de recueillir des informations essentielles pour l'entreprise. Cette mission, étroitement liée au travail des ONG, demande écoute, respect des réalités locales et capacité d'adaptation. Mon rôle est de collecter des données fiables et pertinentes pour soutenir des actions et des décisions à impact social.",
    icon: Building2,
    active: true,
  },
  {
    number: 4,
    title: "Programme CERES @ Fianarantsoa",
    link: "https://programme-ceres.mg/",
    date: "Sept 2025 - Déc 2025",
    description:
      "Digitalisation et centralisation de la gestion des navettes. Développement avec Next.js, Prisma et MySQL.",
    icon: Bus,
    active: true,
  },
  {
    number: 5,
    title: "Stage SMMC Port @ Toamasina",
    link: "https://smmc-company.com/",
    date: "Août 2022 - Nov 2022",
    description:
      "Développement d'un outil de gestion du personnel et de suivi des réparations informatiques sous normes ISO.",
    icon: Ship,
    active: false,
  },
];

export default function Skills() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

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
                const hasPdf = "pdf" in exp;
                const hasLink = "link" in exp;
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
                        {hasPdf ? (
                          <button
                            onClick={() => setPdfUrl((exp as any).pdf)}
                            className="hover:underline text-left"
                          >
                            {exp.title}
                          </button>
                        ) : hasLink ? (
                          <a
                            href={(exp as any).link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {exp.title}
                          </a>
                        ) : (
                          exp.title
                        )}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <ScrollReveal key={skill.name} direction="up" delay={index * 0.04}>
                <div className="group relative p-4 md:p-5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-white/5">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white">{skill.name}</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-widest text-white/40">
                        Maîtrise
                      </span>
                      <span className="text-xs font-bold text-white/80">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full animate-shimmer"
                        style={{
                          width: `${skill.percentage}%`,
                          background: "linear-gradient(90deg, #38bdf8 0%, #8b5cf6 50%, #d946ef 100%)",
                          backgroundSize: "200% auto",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {pdfUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPdfUrl(null)}
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPdfUrl(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              className="w-full h-full"
              title="Attestation"
            />
          </div>
        </div>
      )}
    </section>
  );
}
