export interface Event {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  date: string;
  endDate?: string;
  location: string;
  image: string;
  category: string;
  participants: number;
  maxParticipants: number;
  requirements?: string[];
  organizer?: {
    name: string;
    contact: string;
    logo?: string;
  };
  status: 'upcoming' | 'ongoing' | 'completed';
  price?: number;
  tags?: string[];
  lat?: number;
  lng?: number;
}

export interface EventApplication {
  id: string;
  userId: string;
  eventId: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  user: {
    name: string;
    email: string;
    phone?: string;
  };
  additionalInfo?: Record<string, string>;
}

export type EventFilterParams = {
  category?: string;
  dateFrom?: string;
  dateTo?: string;
  status?: string;
  search?: string;
};
