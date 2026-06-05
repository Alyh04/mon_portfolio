"use client";

import { Code, FileText, Smartphone, BarChart3, Palette, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Développement Web",
    description:
      "Applications web sur mesure conçues avec des technologies modernes pour des performances et une expérience utilisateur optimales.",
    icon: Code,
  },
  {
    title: "Rédaction Technique",
    description:
      "Documentation claire et complète pour aider les utilisateurs à comprendre et à utiliser vos produits efficacement.",
    icon: FileText,
  },
  {
    title: "Développement Mobile",
    description:
      "Applications mobiles natives et multiplateformes offrant des expériences fluides sur tous les appareils.",
    icon: Smartphone,
  },
  {
    title: "Gestion de Projet",
    description:
      "Organisation et pilotage stratégique de vos projets digitaux. Expérience sur divers projets pour une gestion fluide.",
    icon: BarChart3,
  },
  {
    title: "Design UI/UX",
    description:
      "Conceptions centrées sur l'utilisateur alliant esthétique et fonctionnalité pour des expériences numériques exceptionnelles.",
    icon: Palette,
  },
  {
    title: "Web Design",
    description:
      "Conceptions de sites web responsives et visuellement époustouflantes qui captivent les visiteurs et reflètent votre marque.",
    icon: Globe,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      <ScrollReveal direction="up">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Mes <span className="text-white">Services</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base">
            Des solutions digitales complètes adaptées à vos besoins
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <ScrollReveal key={service.title} direction="up" delay={index * 0.05}>
              <div className="p-6 md:p-8 space-y-4 rounded-lg relative overflow-hidden group cursor-default">
                <div className="absolute inset-0 -z-10 bg-[url('/service.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 -z-10 bg-black/75" />
                <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal direction="up" delay={0.2}>
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/Alyh04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
          >
            Voir tous les projets
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
