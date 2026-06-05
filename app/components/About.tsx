"use client";

import { GraduationCap, PenTool, Zap, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "Formation",
    details:
      "Master 1 en Informatique (en cours) - Ecole Nationale d'Informatique (ENI)",
    icon: GraduationCap,
  },

  {
    title: "Création Visuelle",
    details: "Canva, Figma, Flyers, supports graphiques",
    icon: PenTool,
  },
  {
    title: "Soft Skills",
    details: "",
    icon: Zap,
    extended: [
      "Communication et vulgarisation (Data Storytelling)",
      "Écoute active et recueil des besoins",
      "Esprit critique et esprit analytique orienté business",
      "Résolution de problèmes complexes",
      "Gestion des parties prenantes (Stakeholder Management)",
      "Diplomatie et conduite du changement",
      "Curiosité métier et sectorielle",
      "Proactivité et force de proposition",
      "Sens de l'organisation et gestion des priorités",
    ],
  },
];

export default function About() {
  return (
    <section id="a-propos" className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 w-full">
          <ScrollReveal direction="left">
            <div className="relative max-w-md mx-auto aspect-[3/4] rounded-xl overflow-hidden border border-border bg-card shadow-lg">
              <video
                src="/3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>

        <div className="flex-1 space-y-8">
          <ScrollReveal direction="right">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                À Propos de{" "}
                <span className="text-white">Moi</span>
              </h2>
              <p className="text-white/70 font-medium text-sm">
                Lorniot Marcel - Étudiant en Master 1 @ ENI
              </p>
              <p className="text-white/80 leading-relaxed">
                Je suis passionné par la création de solutions technologiques qui
                ont un impact réel. Au-delà du code, je maîtrise les outils de
                communication visuelle et je possède une grande curiosité
                intellectuelle qui me permet de m&apos;adapter rapidement aux
                nouveaux défis de l&apos;industrie numérique.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <ScrollReveal
                  key={exp.title}
                  direction="up"
                  delay={index * 0.05}
                  className={"extended" in exp && exp.extended ? "sm:col-span-2" : ""}
                >
                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon
                        className="w-5 h-5 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h3 className="font-semibold text-white text-xs uppercase tracking-widest">
                        {exp.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-snug">
                        {exp.details}
                      </p>
                      {"extended" in exp && exp.extended && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {exp.extended.map((item: string, i: number) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-2.5 py-1 rounded-md border border-white/20 bg-white/5 text-white/70 text-[11px] font-medium leading-tight hover:border-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal direction="up" delay={0.15}>
            <div className="flex gap-3 pt-2">
              <a
                href="mailto:lorniotmarcel@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Me Contacter
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
