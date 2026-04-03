"use client";

const services = [
  {
    title: "Développement Web",
    description: "Applications web sur mesure conçues avec des technologies modernes pour des performances et une expérience utilisateur optimales.",
    icon: "💻",
  },
  {
    title: "Rédaction Technique",
    description: "Documentation claire et complète pour aider les utilisateurs à comprendre et à utiliser vos produits efficacement.",
    icon: "📜",
  },
  {
    title: "Développement Mobile",
    description: "Applications mobiles natives et multiplateformes offrant des expériences fluides sur tous les appareils.",
    icon: "📱",
  },
  {
    title: "Gestion de Projet",
    description: "Organisation et pilotage stratégique de vos projets digitaux. Mon expérience sur divers projets me permet d'assurer une gestion fluide, du planning à la livraison finale.",
    icon: "📊",
  },
  {
    title: "Design UI/UX",
    description: "Conceptions centrées sur l'utilisateur alliant esthétique et fonctionnalité pour des expériences numériques exceptionnelles.",
    icon: "🎨",
  },
  {
    title: "Web Design",
    description: "Conceptions de sites web responsives et visuellement époustouflantes qui captivent les visiteurs et reflètent votre marque.",
    icon: "🌐",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl font-bold">
          Mes <span className="text-mercury">Services</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Des solutions digitales complètes adaptées à vos besoins
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index}
            className="glass p-8 space-y-4 hover:border-accent-blue/50 transition-colors group cursor-default"
          >
            <div className="w-12 h-12 bg-mercury rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
            <p className="text-muted leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a 
          href="https://github.com/Alyh04" 
          target="_blank" 
          className="px-8 py-3 bg-mercury text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-sky-500/20"
        >
          Voir tous les projets <span>→</span>
        </a>
      </div>
    </section>
  );
}
