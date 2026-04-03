"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-transparent backdrop-blur-sm">
      <Link href="/" className="relative h-10 w-40">
        <Image
          src="/mon_logo.png"
          alt="Lorniot Portfolio Logo"
          fill
          className="object-contain"
          priority
        />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Accueil", href: "#" },
          { label: "Services", href: "#services" },
          { label: "À Propos", href: "#a-propos" },
          { label: "Compétences", href: "#competences" },
          { label: "Projets", href: "https://github.com/Alyh04" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <a
        href="mailto:lorniotmarcel@gmail.com"
        className="px-6 py-2 bg-mercury text-white font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-sky-500/20"
      >
        Discutons
      </a>
    </nav>
  );
}
