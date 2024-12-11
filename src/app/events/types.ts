export type EventCategory = 'upcoming' | 'past';

export interface EventType {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: EventCategory;
  imageUrl: string;
  registrationLink: string;
}