
export interface SlideData {
  id: string;
  badge: string;
  badgeIcon: string;
  title: string;
  subtitle: string;
  features: Feature[];
  image: string;
  layout: 'left' | 'right' | 'center';
  accentColor: string;
  uiCards: UICard[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface UICard {
  label: string;
  value: string;
  type: 'pos' | 'res' | 'stat';
  position: string; // Tailwind classes for positioning
}
