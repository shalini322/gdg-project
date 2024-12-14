export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rishab Kumar",
    role: "GDG LEAD",
    text: "An incredible experience that transformed our approach to digital strategy.",
    avatar: "/img/lead.png",
  },
  {
    id: 2,
    name: "chinmay verma",
    role: "APP DEVELOPMENT LEAD",
    text: "Revolutionary solution that exceeded all our expectations. Our team was amazed by the results.",
    avatar: "/img/applead.png",
  },
  {
    id: 3,
    name: "deepak kumar",
    role: "WEB DEVELOPMENT LEAD",
    text: "Game-changing platform that brought our vision to life in ways we never imagined possible.",
    avatar: "/img/webdev.png",
  },
];
