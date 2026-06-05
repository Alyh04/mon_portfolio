"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Accueil", href: "#" },
  { label: "Services", href: "#services" },
  { label: "À Propos", href: "#a-propos" },
  { label: "Expérience", href: "#competences" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="flex items-center justify-between px-4 md:px-8 py-4 backdrop-blur-lg border-b border-white/10 relative overflow-hidden"
        aria-label="Navigation principale"
      >
        <div className="absolute inset-0 -z-10 bg-[url('/nav.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-black/75" />
        <Link
          href="/"
          className="relative h-10 w-40 shrink-0"
          aria-label="Lorniot Marcel - Accueil"
        >
          <Image
            src="/mon_logo.png"
            alt="Lorniot Portfolio Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">

          <a
            href="mailto:lorniotmarcel@gmail.com"
            className="hidden md:inline-flex px-5 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition-opacity"
          >
            Discutons
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Menu className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className="md:hidden border-b border-white/10 px-4 py-4 space-y-3 relative overflow-hidden"
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="absolute inset-0 -z-10 bg-[url('/nav.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 -z-10 bg-black/85" />
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-white/70 hover:text-white transition-colors py-2"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:lorniotmarcel@gmail.com"
            className="block text-center px-5 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition-opacity"
          >
            Discutons
          </a>
        </div>
      )}
    </header>
  );
}
