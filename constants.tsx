
import { SlideData } from './types';

export const SLIDES: Record<'en' | 'fr', SlideData[]> = {
  en: [
    {
      id: "the-table",
      badge: "The Observation",
      badgeIcon: "restaurant",
      title: "It all started around the table",
      subtitle: "We took a seat at the restaurant tech table and saw specialized giants: Reservations, POS, Payroll, and Inventory. We realized nobody was talking to each other. So we decided to take the center and bring everyone together.",
      layout: 'left',
      accentColor: '#0088FF',
      features: [],
      // Vite serves files in `public/` from the site root.
      image: "/image.png",
      uiCards: [],
      testimonial: {
        quote: "The table was full, but the systems were silent.",
        author: "Founder team",
        role: "THE VISION",
        avatar: "https://i.pravatar.cc/150?u=pivot"
      }
    },
    {
      id: "the-connection",
      badge: "The Outcome",
      badgeIcon: "bolt",
      title: "Automation through Connection",
      subtitle: "By connecting with each of them, we realized we could automate payroll. Furthermore, we automate tips via POS sync and co-pilot the restaurant by spotting problematic shifts.",
      layout: 'right',
      accentColor: '#10b981',
      features: [
        { icon: "payments", title: "Automated Payroll", description: "Direct integration with software like Employeur D." },
        { icon: "monetization_on", title: "Tip Automation", description: "Real-time calculation and distribution from POS data." },
        { icon: "psychology", title: "Operational Co-pilot", description: "Detecting labor issues before they impact your margins." }
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
      uiCards: [
        { label: "PAYROLL", value: "Automated", type: 'stat', position: "top-10 -left-12" },
        { label: "TIPS", value: "POS Synced", type: 'pos', position: "bottom-12 -right-10" }
      ],
      testimonial: {
        quote: "Connecting the dots allowed us to finally focus on our guests.",
        author: "Sarah Jenkins",
        role: "Operator",
        avatar: "https://i.pravatar.cc/150?u=sarah"
      }
    }
  ],
  fr: [
    {
      id: "the-table",
      badge: "L'Observation",
      badgeIcon: "restaurant",
      title: "Tout a commencé autour de la table",
      subtitle: "On a commencé en prenant une place autour de la restaurant tech et la, on a vu qu'il y avait des gens autours de la table, plateforme de réservation, POS, Paie et inventaire. On s'est rendu compte que personne se parlait. Donc on s'est dit qu'on devait prendre le centre et rassembler tout le monde.",
      layout: 'left',
      accentColor: '#0088FF',
      features: [],
      image: "/image.png",
      uiCards: [],
      testimonial: {
        quote: "Les outils étaient là, mais le dialogue était absent.",
        author: "Équipe fondatrice",
        role: "LA VISION",
        avatar: "https://i.pravatar.cc/150?u=pivot"
      }
    },
    {
      id: "the-connection",
      badge: "Le Résultat",
      badgeIcon: "bolt",
      title: "L'Automatisation par la Connexion",
      subtitle: "En ce connectant avec chacun d'entre eux, on a remarqué qu'on pouvait automatisé la paie grâce à la connection avec les logiciels de paies. Par la suite, automatisé le pourboire, avec la connection POS, co piloter le restaurant en remarquant les quarts qui étaient problématique.",
      layout: 'right',
      accentColor: '#10b981',
      features: [
        { icon: "payments", title: "Paie Automatisée", description: "" },
        { icon: "monetization_on", title: "Pourboires", description: "" },
        { icon: "psychology", title: "Co-pilotage", description: "" }
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
      uiCards: [
        { label: "PAIE", value: "Automatisée", type: 'stat', position: "top-10 -left-12" },
        { label: "POURBOIRES", value: "POS Synchro", type: 'pos', position: "bottom-12 -right-10" }
      ],
      testimonial: {
        quote: "Relier les systèmes nous a permis de nous concentrer sur nos clients.",
        author: "Sarah Jenkins",
        role: "Gestionnaire",
        avatar: "https://i.pravatar.cc/150?u=sarah"
      }
    }
  ]
};
