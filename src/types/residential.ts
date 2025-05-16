export interface ResidentialComplexData {
  id: string;
  name: string;
  tagline: string;
  heroImage: string;
  logo?: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];
  location: {
    address: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
    mapImage?: string;
    nearbyFacilities?: {
      name: string;
      distance: string;
      type: string;
    }[];
  };
  apartments: {
    id: string;
    type: string;
    rooms: number;
    area: string;
    price: string;
    available: boolean;
    floorPlan?: string;
  }[];
  gallery: {
    image: string;
    title?: string;
    category?: string;
  }[];
  amenities: string[];
  constructionStatus: {
    status: 'planned' | 'in-progress' | 'completed';
    completionDate?: string;
    currentStage?: string;
    progress?: number;
  };
  developer: {
    name: string;
    logo?: string;
    description?: string;
  };
  contacts: {
    phone: string;
    email: string;
    salesOffice?: string;
  };
}