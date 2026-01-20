
import { SlideData } from './types';

// Helper to create a fullscreen slide
const fullscreenSlide = (id: string, image: string): SlideData => ({
  id,
  badge: "",
  badgeIcon: "",
  title: "",
  subtitle: "",
  layout: 'fullscreen',
  accentColor: '#0088FF',
  features: [],
  image,
  uiCards: [],
  testimonial: { quote: "", author: "", role: "", avatar: "" }
});

// Story flow:
// 1. Cover - Introduction
// 2. L'histoire de Pivot - The founders
// 3. The Table (disconnected) - Everyone at the restaurant tech table, but NOT connected
// 4. Le problème des restaurateurs - The pain points
// 5. The Table (connected) - Pivot as the BRIDGE connecting everyone
// 6. Pivot pour les franchisés - Value proposition
// 7. KPIs & Références - Traction and social proof
// 8. Nous vs la Concurrence - Competitive advantage
// 9. Équipe - The team
// 10. Nos valeurs - Company values
// 11. Votre rôle - What we need from you
// 12. Closing message - "Ils s'occupent des clients, Nous on gère tout le reste"
// 13. Questions - Q&A

export const SLIDES: Record<'en' | 'fr', SlideData[]> = {
  en: [
    fullscreenSlide("cover", "/Cover 3.png"),
    fullscreenSlide("story-intro", "/Page.png"),
    fullscreenSlide("problem", "/Page (2).png"),
    {
      id: "table-disconnected",
      badge: "L'Observation",
      badgeIcon: "restaurant",
      title: "Tout a commencé autour de la table",
      subtitle: "On a pris une place autour de la restaurant tech et là, on a vu qu'il y avait des gens autour de la table: plateforme de réservation, POS, Paie et inventaire. Mais personne ne se parlait.",
      layout: 'left',
      accentColor: '#0088FF',
      features: [],
      image: "/image.png",
      uiCards: [],
      testimonial: { quote: "", author: "", role: "", avatar: "" }
    },
    {
      id: "table-connected",
      badge: "La Solution",
      badgeIcon: "hub",
      title: "Pivot est le pont qui rassemble tout le monde",
      subtitle: "On a décidé de prendre le centre et de rassembler tout le monde. Pivot connecte la réservation, le POS, la paie et l'inventaire pour que tous les systèmes se parlent enfin.",
      layout: 'left',
      accentColor: '#10b981',
      features: [],
      image: "/5.png",
      uiCards: [],
      testimonial: { quote: "", author: "", role: "", avatar: "" }
    },
    {
      id: "manager",
      badge: "",
      badgeIcon: "",
      title: "",
      subtitle: "",
      layout: 'manager',
      accentColor: '#0088FF',
      features: [],
      image: "/manager2.png",
      uiCards: [],
      testimonial: { quote: "", author: "", role: "", avatar: "" }
    },
    fullscreenSlide("kpis", "/6.png"),
    fullscreenSlide("competition", "/7.png"),
    fullscreenSlide("team", "/9.png"),
    fullscreenSlide("your-role", "/Page (4).png"),
    fullscreenSlide("questions", "/Page (6).png"),
    fullscreenSlide("closing", "/Page (7).png"),
  ],
  fr: [
    fullscreenSlide("cover", "/Cover 3.png"),
    fullscreenSlide("story-intro", "/Page.png"),
    fullscreenSlide("problem", "/Page (2).png"),
    {
      id: "table-disconnected",
      badge: "L'Observation",
      badgeIcon: "restaurant",
      title: "Tout a commencé autour de la table",
      subtitle: "On a pris une place autour de la restaurant tech et là, on a vu qu'il y avait des gens autour de la table: plateforme de réservation, POS, Paie et inventaire. Mais personne ne se parlait.",
      layout: 'left',
      accentColor: '#0088FF',
      features: [],
      image: "/image.png",
      uiCards: [],
      testimonial: { quote: "", author: "", role: "", avatar: "" }
    },
    {
      id: "table-connected",
      badge: "La Solution",
      badgeIcon: "hub",
      title: "Pivot est le pont qui rassemble tout le monde",
      subtitle: "On a décidé de prendre le centre et de rassembler tout le monde. Pivot connecte la réservation, le POS, la paie et l'inventaire pour que tous les systèmes se parlent enfin.",
      layout: 'left',
      accentColor: '#10b981',
      features: [],
      image: "/5.png",
      uiCards: [],
      testimonial: { quote: "", author: "", role: "", avatar: "" }
    },
    {
      id: "manager",
      badge: "",
      badgeIcon: "",
      title: "",
      subtitle: "",
      layout: 'manager',
      accentColor: '#0088FF',
      features: [],
      image: "/manager2.png",
      uiCards: [],
      testimonial: { quote: "", author: "", role: "", avatar: "" }
    },
    fullscreenSlide("kpis", "/6.png"),
    fullscreenSlide("competition", "/7.png"),
    fullscreenSlide("team", "/9.png"),
    fullscreenSlide("your-role", "/Page (4).png"),
    fullscreenSlide("questions", "/Page (6).png"),
    fullscreenSlide("closing", "/Page (7).png"),
  ]
};
