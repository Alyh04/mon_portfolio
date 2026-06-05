"use client";

import { GitFork, Download, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

function HeroBackground() {
  return (
    <div
      className="absolute top-0 right-0 h-full w-[80vw] md:w-[65vw]"
      style={{
        WebkitMaskImage: "linear-gradient(to left, transparent 8%, black 42%, black 62%, transparent 85%), linear-gradient(to top, transparent 8%, black 20%)",
        WebkitMaskComposite: "source-in",
        maskImage: "linear-gradient(to left, transparent 8%, black 42%, black 62%, transparent 85%), linear-gradient(to top, transparent 8%, black 20%)",
        maskComposite: "intersect",
      }}
    >
      <video
        src="/2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-24 pb-10 md:pt-32 md:pb-12 overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl space-y-8">
          <ScrollReveal direction="up">
            <div className="space-y-4">
              <p className="text-sm font-medium text-white/70 tracking-wide">
                Master 1 Computer Science Student & Full-Stack Developer
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                Hello, Je suis{" "}
                <span className="inline-block">
                  Lorniot Marcel
                </span>
                &nbsp;!
              </h1>
              <p className="text-white/80 max-w-lg leading-relaxed text-base">
                Passionné par le développement web et mobile, je conçois des
                solutions digitales utiles et innovantes. Je combine expertise
                technique et créativité visuelle pour donner vie à vos projets.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Alyh04"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all"
              >
                <GitFork className="w-4 h-4" aria-hidden="true" />
                GitHub
                <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
              </a>
              <a
                href="#a-propos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-input bg-background text-foreground text-sm font-medium hover:bg-accent transition-colors"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                En savoir plus
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
