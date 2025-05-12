export interface CardInfo {
    id: number;
    title: string;
    imageUrl: string;
    category: string;
    address: string;
    price: string;
    date: string;
    roomrange: string;
    area: string;
    amount: number;
    buildingType: string;
    propertyType: string;
    href?: string;
}

export const cardData: CardInfo[] = [
    {
        id: 1,
        title: "Triumph Exclusive",
        imageUrl: "triumph.jpg",
        category: "Элитный",
        address: "Мангылык ел",
        price: "от 772 000 ₸/м²",
        date: "Сдача: 3 кв. 2024",
        roomrange: "1-4",
        area: "45-120 м²",
        amount: 24,
        buildingType: "Строющиеся",
        propertyType: "Квартира",
        href: "https://triumph-exclusive.kz/"
    },
    {
        id: 2,
        title: "Dariya",
        imageUrl: "Dariya.jpg",
        category: "Комфорт",
        address: "Алматы, ул. Абая 45",
        price: "от 280 000 ₸/м²",
        date: "Сдача: 2 кв. 2024",
        roomrange: "1-3",
        area: "40-95 м²",
        amount: 36,
        buildingType: "Строющиеся",
        propertyType: "Квартира"
    },
    {
        id: 3,
        title: "Arai Towers",
        imageUrl: "Arai.png",
        category: "Бизнес",
        address: "Алматы, пр. Аль-Фараби 78",
        price: "от 320 000 ₸/м²",
        date: "Сдача: 1 кв. 2023",
        roomrange: "2-5",
        area: "60-150 м²",
        amount: 18,
        buildingType: "Готовые",
        propertyType: "Квартира",
        href: "https://araitowers.nak.kz"
    },
    {
        id: 4,
        title: "Ecopark",
        imageUrl: "6.jpg",
        category: "Премиум",
        address: "Алматы, ул. Сатпаева 22",
        price: "от 400 000 ₸/м²",
        date: "Сдача: 3 кв. 2024",
        roomrange: "2-4",
        area: "70-200 м²",
        amount: 12,
        buildingType: "Строющиеся",
        propertyType: "Квартира",
        href: "https://ecopark.nak.kz"
    },
    {
        id: 5,
        title: "Royal Expo",
        imageUrl: "Royal.jpg",
        category: "Бизнес",
        address: "Алматы, пр. Жибек Жолы 54",
        price: "от 450 000 ₸/м²",
        date: "Сдача: 4 кв. 2022",
        roomrange: "1-3",
        area: "50-120 м²",
        amount: 30,
        buildingType: "Готовые",
        propertyType: "Коммерческая недвижимость",
        href: "https://royalexpo.nak.kz"
    },
    {
        id: 6,
        title: "Hazar",
        imageUrl: "hazar.jpg",
        category: "Комфорт",
        address: "Алматы, ул. Тимирязева 15",
        price: "от 290 000 ₸/м²",
        date: "Сдача: 2 кв. 2023",
        roomrange: "1-4",
        area: "45-110 м²",
        amount: 42,
        buildingType: "Строющиеся",
        propertyType: "Квартира"
    },
    {
        id: 1,
        title: "Triumph Exclusive",
        imageUrl: "triumph.jpg",
        category: "Элитный",
        address: "Мангылык ел",
        price: "от 772 000 ₸/м²",
        date: "Сдача: 3 кв. 2024",
        roomrange: "1-4",
        area: "45-120 м²",
        amount: 24,
        buildingType: "Строющиеся",
        propertyType: "Квартира",
        href: "https://triumph-exclusive.kz/"
    },
    {
        id: 2,
        title: "Dariya",
        imageUrl: "Dariya.jpg",
        category: "Комфорт",
        address: "Алматы, ул. Абая 45",
        price: "от 280 000 ₸/м²",
        date: "Сдача: 2 кв. 2024",
        roomrange: "1-3",
        area: "40-95 м²",
        amount: 36,
        buildingType: "Строющиеся",
        propertyType: "Квартира"
    },
    {
        id: 3,
        title: "Arai Towers",
        imageUrl: "Arai.png",
        category: "Бизнес",
        address: "Алматы, пр. Аль-Фараби 78",
        price: "от 320 000 ₸/м²",
        date: "Сдача: 1 кв. 2023",
        roomrange: "2-5",
        area: "60-150 м²",
        amount: 18,
        buildingType: "Готовые",
        propertyType: "Квартира",
        href: "https://araitowers.nak.kz"
    },
    {
        id: 4,
        title: "Ecopark",
        imageUrl: "6.jpg",
        category: "Премиум",
        address: "Алматы, ул. Сатпаева 22",
        price: "от 400 000 ₸/м²",
        date: "Сдача: 3 кв. 2024",
        roomrange: "2-4",
        area: "70-200 м²",
        amount: 12,
        buildingType: "Строющиеся",
        propertyType: "Квартира",
        href: "https://ecopark.nak.kz"
    },
    {
        id: 5,
        title: "Royal Expo",
        imageUrl: "Royal.jpg",
        category: "Бизнес",
        address: "Алматы, пр. Жибек Жолы 54",
        price: "от 450 000 ₸/м²",
        date: "Сдача: 4 кв. 2022",
        roomrange: "1-3",
        area: "50-120 м²",
        amount: 30,
        buildingType: "Готовые",
        propertyType: "Коммерческая недвижимость",
        href: "https://royalexpo.nak.kz"
    },
    {
        id: 6,
        title: "Hazar",
        imageUrl: "hazar.jpg",
        category: "Комфорт",
        address: "Алматы, ул. Тимирязева 15",
        price: "от 290 000 ₸/м²",
        date: "Сдача: 2 кв. 2023",
        roomrange: "1-4",
        area: "45-110 м²",
        amount: 42,
        buildingType: "Строющиеся",
        propertyType: "Квартира"
    },

];