import { ResidentialComplexData } from '../types/residential';

export const residentialComplexes: ResidentialComplexData[] = [
  {
    id: "triumph-exclusive",
    name: "Triumph Exclusive",
    tagline: "Комфорт и престиж в самом сердце столицы",
    heroImage: "/triumph.jpg",
    logo: "/triumphExclusive/logo.png",
    description: "ЖК «Triumph Exclusive» – это элитный жилой комплекс, расположенный в престижном районе Мангылык Ел. Проект сочетает в себе инновационные архитектурные решения, высококачественные материалы и современные технологии строительства.",
    features: [
      {
        title: "Премиальное расположение",
        description: "Расположение в самом центре деловой и культурной жизни города"
      },
      {
        title: "Современная архитектура",
        description: "Уникальный дизайн фасадов с использованием натуральных материалов"
      },
      {
        title: "Технологии умного дома",
        description: "Интеллектуальные системы управления освещением, климатом и безопасностью"
      }
    ],
    location: {
      address: "Нур-Султан, пр. Мангылык Ел",
      coordinates: {
        lat: 51.0895,
        lng: 71.4176
      },
      mapImage: "/triumphExclusive/map.png",
      nearbyFacilities: [
        {
          name: "Торговый центр «Mega Silk Way»",
          distance: "1.2 км",
          type: "shopping"
        },
        {
          name: "Международная школа",
          distance: "800 м",
          type: "education"
        },
        {
          name: "Ботанический сад",
          distance: "500 м",
          type: "recreation"
        }
      ]
    },
    apartments: [
      {
        id: "t1",
        type: "2-комнатная квартира",
        rooms: 2,
        area: "45-60 м²",
        price: "от 772 000 ₸/м²",
        available: true,
        floorPlan: "/triumphExclusive/floorplan-2.jpg"
      },
      {
        id: "t2",
        type: "3-комнатная квартира",
        rooms: 3,
        area: "65-85 м²",
        price: "от 760 000 ₸/м²",
        available: true,
        floorPlan: "/triumphExclusive/floorplan-3.jpg"
      },
      {
        id: "t3",
        type: "4-комнатная квартира",
        rooms: 4,
        area: "90-110 м²",
        price: "от 750 000 ₸/м²",
        available: true,
        floorPlan: "/triumphExclusive/floorplan-4.jpg"
      },
      {
        id: "t4",
        type: "5-комнатная квартира",
        rooms: 5,
        area: "115-120 м²",
        price: "от 740 000 ₸/м²",
        available: false,
        floorPlan: "/triumphExclusive/floorplan-5.jpg"
      }
    ],
    gallery: [
      {
        image: "/triumphExclusive/fasad.jpg",
        title: "Фасад здания",
        category: "exterior"
      },
      {
        image: "/triumphExclusive/detroom.jpg",
        title: "Детская комната",
        category: "interior"
      },
      {
        image: "/triumphExclusive/out.jpg",
        title: "Зона отдыха",
        category: "amenities"
      },
      {
        image: "/triumphExclusive/det.jpg",
        title: "Двор",
        category: "exterior"
      }
    ],
    amenities: [
      "Закрытая территория",
      "Подземный паркинг",
      "Фитнес центр",
      "Детская площадка",
      "24/7 охрана",
      "Ландшафтный дизайн",
      "Зоны отдыха",
      "Консьерж сервис"
    ],
    constructionStatus: {
      status: "in-progress",
      completionDate: "3 кв. 2024",
      currentStage: "Монтаж инженерных систем",
      progress: 65
    },
    developer: {
      name: "NAK Development",
      logo: "/logo.png",
      description: "Ведущая строительная компания с многолетним опытом реализации премиальных проектов"
    },
    contacts: {
      phone: "+7 (7172) 999 500",
      email: "sales@triumph-exclusive.kz",
      salesOffice: "Нур-Султан, ул. Сыганак 54, БЦ 'Viva Plaza', офис 507"
    }
  }
];

// Function to get a specific residential complex by ID
export function getResidentialComplexById(id: string): ResidentialComplexData | undefined {
  return residentialComplexes.find(complex => complex.id === id);
}