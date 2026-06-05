import { GitFork, Mail, Link, MapPin } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Alyh04",
    icon: GitFork,
  },
  {
    label: "Email",
    href: "mailto:lorniotmarcel@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: Link,
  },
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "À Propos", href: "#a-propos" },
  { label: "Expérience", href: "#competences" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>Madagascar</span>
          </div>

          <nav aria-label="Navigation pied de page">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Lorniot Marcel. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
