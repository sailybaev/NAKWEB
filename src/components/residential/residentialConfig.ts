export interface ResidentialComplex {
  id: string;
  name: string;
  class: string;
  blocks: string;
  floors: string;
  unitsPerFloor: string;
  ceilingHeight: string;
  completionDate: string;
  status: "completed" | "underConstruction";
  address: string;
  location: string;
  paymentOptions: string;
  description: string;
  finishType: string;
  imageUrl: string;
  minPrice: string;
  minPriceNumeric: number; 
  elevator: string;
  windows: string;
  heating: string;
  constructionFeatures: string;
  exteriorFinish: string;
  promoAction?: string;
  presentation?: string;
  tour3d?: string;
  video?: string;
  apartments: Apartment[];
}

export interface Apartment {
  id: string;
  type: string;
  rooms: number;
  area: string;
  price: string;
  pricePerSqm: string;
  pricePerSqmNumeric: number; // Add numeric price field
  available: boolean;
  floorPlan?: string;
}

export const residentialComplexes: ResidentialComplex[] = [
  {
    id: "arai-towers",
    name: "ARAI TOWERS",
    class: "comfort+",
    blocks: "6",
    floors: "21 (3-21)",
    unitsPerFloor: "от 4-7",
    ceilingHeight: "3.0",
    completionDate: "II квартал 2025",
    status: "underConstruction",
    address: "г.Астана, ул. Мангилик-Рыскулова Онгарсынова",
    location: "https://go.2gis.com/obekp",
    paymentOptions: "Рассрочка до окончания строительства с ПВ от 20% (+1 месяц), остаток 80% оплачивается после ввода в эксплуатацию",
    description: "Жилой комплекс комфорт+ класса \"ARAI TOWERS\" с панорамными окнами и системой \"Умный дом\".",
    finishType: "предчистая",
    imageUrl: "/Arai.png",
    minPrice: "от 505 000 ₸/м²",
    minPriceNumeric: 505000,
    presentation: "https://clck.ru/35bkeo",
    tour3d: "https://clck.ru/35uJyu",
    elevator: "Блок А и Б - 4 лифта, Блок В, Г и Д - 3 лифта",
    windows: "3 метра",
    heating: "центральное",
    constructionFeatures: "система считывания номеров машин, система умный дом, touch ID",
    exteriorFinish: "фиброцементная панель, со вставками из алюминия, гранита, клинкерного кирпича",
    apartments: [
      {
        id: "arai-1",
        type: "1-комнатная",
        rooms: 1,
        area: "40-50 м²",
        price: "от 22 000 000 ₸",
        pricePerSqm: "от 550 000 до 630 000 ₸/м²",
        pricePerSqmNumeric: 590000,
        available: true,
        floorPlan: "/floorplans/arai-1br.jpg"
      },
      {
        id: "arai-2",
        type: "2-комнатная",
        rooms: 2,
        area: "60-70 м²",
        price: "от 33 600 000 ₸",
        pricePerSqm: "от 560 000 до 610 000 ₸/м²",
        pricePerSqmNumeric: 585000,
        available: true,
        floorPlan: "/floorplans/arai-2br.jpg"
      },
      {
        id: "arai-3",
        type: "3-комнатная",
        rooms: 3,
        area: "80-95 м²",
        price: "от 40 400 000 ₸",
        pricePerSqm: "от 505 000 до 630 000 ₸/м²",
        pricePerSqmNumeric: 567500,
        available: true,
        floorPlan: "/floorplans/arai-3br.jpg"
      },
      {
        id: "arai-4",
        type: "4-комнатная",
        rooms: 4,
        area: "110-120 м²",
        price: "от 66 550 000 ₸",
        pricePerSqm: "605 000 ₸/м²",
        pricePerSqmNumeric: 605000,
        available: true,
        floorPlan: "/floorplans/arai-4br.jpg"
      }
    ]
  },
  {
    id: "eco-park",
    name: "ECO Park",
    class: "comfort+",
    blocks: "11",
    floors: "от 9,12,18 этаж",
    unitsPerFloor: "от 4 до 6",
    ceilingHeight: "3.0",
    completionDate: "II квартал 2025",
    status: "underConstruction",
    address: "г.Астана, ул. Туран-Сыганак",
    location: "https://go.2gis.com/nf479",
    paymentOptions: "30% первоначального взноса, а остальную сумму можно выплачивать ежемесячно до ввода объекта в эксплуатацию.",
    description: "ЖК комфорт-класса \"ECO Park\", напротив Зеленого квартала в районе Хан-Шатыра.",
    finishType: "предчистая",
    imageUrl: "/6.jpg",
    minPrice: "от 543 000 ₸/м²",
    minPriceNumeric: 543000,
    presentation: "https://clck.ru/35Rxeh",
    video: "https://youtu.be/otQaga_6hTA",
    tour3d: "https://clck.ru/35uKLH/",
    elevator: "В блоке 1, 2, 3 - в подъезде 3 лифта, с 4 по 10 блок - 2 лифта, 11 блок - 1 лифт",
    windows: "панорамные",
    heating: "центральное",
    constructionFeatures: "монолитный каркас, заполнение газоблок",
    exteriorFinish: "фиброцементная плитка с алюминиевой вставкой и клинкерная плитка",
    apartments: [
      {
        id: "eco-park-1",
        type: "1-комнатная",
        rooms: 1,
        area: "40-55 м²",
        price: "от 22 680 000 ₸",
        pricePerSqm: "от 567 000 до 626 000 ₸/м²",
        pricePerSqmNumeric: 596500,
        available: true,
        floorPlan: "/floorplans/ecopark-1br.jpg"
      },
      {
        id: "eco-park-2",
        type: "2-комнатная",
        rooms: 2,
        area: "60-75 м²",
        price: "от 32 580 000 ₸",
        pricePerSqm: "от 543 000 до 600 000 ₸/м²",
        pricePerSqmNumeric: 571500,
        available: true,
        floorPlan: "/floorplans/ecopark-2br.jpg"
      },
      {
        id: "eco-park-3",
        type: "3-комнатная",
        rooms: 3,
        area: "85-100 м²",
        price: "от 47 260 000 ₸",
        pricePerSqm: "от 556 000 до 562 000 ₸/м²",
        pricePerSqmNumeric: 559000,
        available: true,
        floorPlan: "/floorplans/ecopark-3br.jpg"
      },
      {
        id: "eco-park-4",
        type: "4-комнатная",
        rooms: 4,
        area: "120 м²",
        price: "от 69 240 000 ₸",
        pricePerSqm: "577 000 ₸/м²",
        pricePerSqmNumeric: 577000,
        available: false,
        floorPlan: "/floorplans/ecopark-4br.jpg"
      }
    ]
  },
  {
    id: "dariya",
    name: "DARIYA",
    class: "comfort",
    blocks: "14",
    floors: "9",
    unitsPerFloor: "4-5",
    ceilingHeight: "3.0",
    completionDate: "II квартал 2026",
    status: "underConstruction",
    address: "г.Астана, ул. Сыганак",
    location: "https://2gis.kz/astana/firm/70000001095215062?m=71.373237%2C51.130242%2F17.35",
    paymentOptions: "100% оплата",
    description: "ЖК комфорт-класса \"DARYIA\" расположен по улице Сыганак, напротив магазина Мечта. Рядом школа Binom, перспективный район с развитой инфраструктурой.",
    finishType: "улучшенная черновая",
    imageUrl: "/Dariya.jpg",
    minPrice: "от 425 000 ₸/м²",
    minPriceNumeric: 425000,
    elevator: "В подъезде 1 лифт",
    windows: "увеличенные",
    heating: "центральное",
    constructionFeatures: "Разрешение на строительство есть, земля в собственности. Наружные стены материал (кирпич/газоблок), Отопление: радиатор биметаллический, Центральное отопление.",
    exteriorFinish: "облицовочный кирпич, композитная панель и гранит",
    tour3d: "https://astana3d.kz/3d/nak/dariya/?clckid=a8037284#pano548172/-126.1/3.0/90.0",
    apartments: [
      {
        id: "daryia-1",
        type: "1-комнатная",
        rooms: 1,
        area: "45-55 м²",
        price: "от 23 625 000 ₸",
        pricePerSqm: "от 525 000 до 550 000 ₸/м²",
        pricePerSqmNumeric: 537500,
        available: false, 
        floorPlan: "/floorplans/daryia-1br.jpg"
      },
      {
        id: "daryia-2",
        type: "2-комнатная",
        rooms: 2,
        area: "65-80 м²",
        price: "от 28 275 000 ₸",
        pricePerSqm: "от 435 000 до 500 000 ₸/м²",
        pricePerSqmNumeric: 467500,
        available: false,
        floorPlan: "/floorplans/daryia-2br.jpg"
      },
      {
        id: "daryia-3",
        type: "3-комнатная",
        rooms: 3,
        area: "85-110 м²",
        price: "от 36 125 000 ₸",
        pricePerSqm: "от 425 000 до 470 000 ₸/м²",
        pricePerSqmNumeric: 447500,
        available: false,
        floorPlan: "/floorplans/daryia-3br.jpg"
      },
      {
        id: "daryia-4",
        type: "4-комнатная",
        rooms: 4,
        area: "120-140 м²",
        price: "от 55 800 000 ₸",
        pricePerSqm: "от 465 000 до 490 000 ₸/м²",
        pricePerSqmNumeric: 477500,
        available: false,
        floorPlan: "/floorplans/daryia-4br.jpg"
      }
    ]
  },
  {
    id: "ansau-residence",
    name: "ANSAU RESIDENCE",
    class: "comfort",
    blocks: "8",
    floors: "9",
    unitsPerFloor: "4-5",
    ceilingHeight: "3.0",
    completionDate: "IV квартал 2025",
    status: "underConstruction",
    address: "г.Астана, ул. Нажимеденова и Тынышбайулы",
    location: "https://2gis.kz/astana/geo/70030077011546665/71.52843%2C51.109914?m=71.5273%2C51.109943%2F17.35",
    paymentOptions: "100% оплата",
    description: "ЖК комфорт \"ANSAU RESIDENCE\" – всего 295 квартир. В шаговой доступности вокзал Нурлы Жол. На территории детский сад. Современные системы безопасности Face ID и Touch ID.",
    finishType: "черновая",
    imageUrl: "/Ansau.jpg",
    minPrice: "от 340 000 ₸/м²",
    minPriceNumeric: 340000,
    elevator: "В 1 подъезде 1 лифт, современный, высокоскоростной бесшумный",
    windows: "Алюмениевые конструкции, 5ти камерные, окна со сложным открыванием, 210х180см (увеличенные)",
    heating: "центральное, радиаторы биметаллические",
    constructionFeatures: "Земля в собственности, дом кирпичный с плитами перекрытия, 220мм плита перекрытия. Двери в подъезд двойные, входная дверь в кв металлическая, утепленная. Подземный паркинг на 164 мест, высота паркинга 3 м.",
    exteriorFinish: "Декоративный кирпич, гранитная отделка первого этажа, фиброцементные панели",
    tour3d: "https://astana3d.kz/3d/nak/ansau/#pano548444/-42.7/13.8/31.8",
    apartments: [
      {
        id: "ansau-1",
        type: "1-комнатная",
        rooms: 1,
        area: "40-55 м²",
        price: "от 16 800 000 ₸",
        pricePerSqm: "от 420 000 до 425 000 ₸/м²",
        pricePerSqmNumeric: 422500,
        available: true,
        floorPlan: "/floorplans/ansau-1br.jpg"
      },
      {
        id: "ansau-2",
        type: "2-комнатная",
        rooms: 2,
        area: "60-75 м²",
        price: "от 20 400 000 ₸",
        pricePerSqm: "от 340 000 до 375 000 ₸/м²",
        pricePerSqmNumeric: 357500,
        available: true,
        floorPlan: "/floorplans/ansau-2br.jpg"
      },
      {
        id: "ansau-3",
        type: "3-комнатная",
        rooms: 3,
        area: "85-100 м²",
        price: "от 28 900 000 ₸",
        pricePerSqm: "от 340 000 до 370 000 ₸/м²",
        pricePerSqmNumeric: 355000,
        available: false, // Changed to false
        floorPlan: "/floorplans/ansau-3br.jpg"
      },
      {
        id: "ansau-4",
        type: "4-комнатная",
        rooms: 4,
        area: "110-130 м²",
        price: "от 42 900 000 ₸",
        pricePerSqm: "390 000 ₸/м²",
        pricePerSqmNumeric: 390000,
        available: true,
        floorPlan: "/floorplans/ansau-4br.jpg"
      }
    ]
  },
  {
    id: "royal-expo",
    name: "Royal Expo",
    class: "premium",
    blocks: "",
    floors: "От 6 до 8 этаж",
    unitsPerFloor: "2 (клубный дом)",
    ceilingHeight: "3.3",
    completionDate: "сдан (IV квартал 2023)",
    status: "completed",
    address: "г.Астана, ул. Улы дала-Акмешит",
    location: "https://go.2gis.com/m11ol",
    paymentOptions: "Отбасы банк 50/50, БЦК, Алтын банк",
    description: "ЖК премиум-класса \"Royal Expo\" - введён в эксплуатацию.",
    finishType: "предчистая",
    imageUrl: "/Royal.jpg",
    minPrice: "от 670 000 ₸/м²",
    minPriceNumeric: 670000,
    presentation: "https://clck.ru/35Rxpo",
    tour3d: "https://clck.ru/35uKQc",
    promoAction: "скидки на квартиры до 12% на паркинг 20%",
    elevator: "",
    windows: "от 2 до 3 метров высота",
    heating: "центральное",
    constructionFeatures: "дизайнерская отделка, мрамор, керамика, дерево, полированный метал, керамогранит, площадь от 74 до 187, в продаже блоки В7 и В12",
    exteriorFinish: "монолитный каркас, заполнение керамический кирпич, газоблок и гипсокартон",
    apartments: [
      {
        id: "royal-expo-2",
        type: "2-комнатная",
        rooms: 2,
        area: "75-85 м²",
        price: "от 51 750 000 ₸",
        pricePerSqm: "690 000 ₸/м²",
        pricePerSqmNumeric: 690000,
        available: true,
        floorPlan: "/floorplans/royal-2br.jpg"
      },
      {
        id: "royal-expo-3",
        type: "3-комнатная",
        rooms: 3,
        area: "95-120 м²",
        price: "от 63 650 000 ₸",
        pricePerSqm: "от 670 000 до 690 000 ₸/м²",
        pricePerSqmNumeric: 680000,
        available: true,
        floorPlan: "/floorplans/royal-3br.jpg"
      }
    ]
  },
  {
    id: "asylym-park-1",
    name: "АСЫЛЫМ ПАРК 1",
    class: "business",
    blocks: "9",
    floors: "9",
    unitsPerFloor: "от 3 до 7",
    ceilingHeight: "3.0",
    completionDate: "I квартал 2024",
    status: "completed",
    address: "г.Астана, ул. первая линия Бокейхана",
    location: "https://go.2gis.com/zbhw2",
    paymentOptions: "Отбасы банк 50/50, БЦК, Алтын банк",
    description: "ЖК бизнес-класса \"Asylym Park 1\" - введён в эксплуатацию с пешеходной аллеей.",
    finishType: "предчистовая",
    imageUrl: "/Asylym.png",
    minPrice: "от 498 000 ₸/м²",
    minPriceNumeric: 498000,
    presentation: "https://clck.ru/38URFq",
    tour3d: "https://clck.ru/35uKRF",
    promoAction: "скидки на квартиры до 6% на паркинг 14% и кладовки до 30%",
    elevator: "В подъезде 1 лифт",
    windows: "2х камерные с тройным остеклением",
    heating: "центральное",
    constructionFeatures: "пешеходная аллея",
    exteriorFinish: "фиброцементная панель, со вставками из алюминия, гранита, клинкерного кирпича",
    apartments: [
      {
        id: "asylym-park-1-any",
        type: "Квартиры",
        rooms: 2,
        area: "различные площади",
        price: "от 498 000 ₸/м²",
        pricePerSqm: "от 498 000 ₸/м²",
        pricePerSqmNumeric: 498000,
        available: true,
        floorPlan: "/floorplans/asylym-plan.jpg"
      }
    ]
  },
  {
    id: "hazar",
    name: "HAZAR",
    class: "comfort",
    blocks: "4",
    floors: "17,21",
    unitsPerFloor: "5",
    ceilingHeight: "2.7",
    completionDate: "сдан (IV квартал 2023)",
    status: "completed",
    address: "г.Астана, ул. Мангилик 62",
    location: "https://go.2gis.com/bk6010",
    paymentOptions: "Отбасы банк 30/70 или 50/50, БЦК, Алтын банк",
    description: "ЖК комфорт-класса \"HAZAR\" - введён в эксплуатацию.",
    finishType: "предчистая",
    imageUrl: "/hazar.jpg",
    minPrice: "от 400 000 ₸/м²",
    minPriceNumeric: 400000,
    presentation: "https://clck.ru/3AZCwr",
    tour3d: "https://clck.ru/35uJyu",
    promoAction: "скидки на квартиры до 10%",
    elevator: "",
    windows: "1,7 метра",
    heating: "центральное",
    constructionFeatures: "монилитный каркас, заполнение газоблок",
    exteriorFinish: "монилитный каркас, заполнение газоблок",
    apartments: [
      {
        id: "hazar-3",
        type: "3-комнатная",
        rooms: 3,
        area: "80-90 м²",
        price: "от 32 000 000 ₸",
        pricePerSqm: "400 000 ₸/м²",
        pricePerSqmNumeric: 400000,
        available: true,
        floorPlan: "/floorplans/hazar-3br.jpg"
      }
    ]
  },
  {
    id: "tomiris-towers",
    name: "Томирис Тауэрс",
    class: "comfort",
    blocks: "2",
    floors: "21",
    unitsPerFloor: "5-9",
    ceilingHeight: "2.85",
    completionDate: "сдан (IV квартал 2023)",
    status: "completed",
    address: "г.Астана, ул. Нурмагамбетова 36",
    location: "https://go.2gis.com/3ulqpm",
    paymentOptions: "Отбасы банк 30/70 или 50/50, БЦК, Алтын банк, программа 7-20-25",
    description: "ЖК Комфорт класса \"Томирис Тауэрс\" - закрытый двор с детской и спортивной площадкой, ландшафтный дизайн, дизайнерские холлы, бесшумные лифты.",
    finishType: "предчистая",
    imageUrl: "/tomiris.png",
    minPrice: "от 390 000 ₸/м²",
    minPriceNumeric: 390000,
    presentation: "https://clck.ru/35RxXr",
    promoAction: "скидки на квартиры до 3%",
    elevator: "",
    windows: "2 метра",
    heating: "центральное",
    constructionFeatures: "монилитный каркас, заполнение газоблок",
    exteriorFinish: "монилитный каркас, заполнение газоблок",
    apartments: [
      {
        id: "tomiris-towers-any",
        type: "Квартиры",
        rooms: 2,
        area: "различные площади",
        price: "от 390 000 ₸/м²",
        pricePerSqm: "от 390 000 ₸/м²",
        pricePerSqmNumeric: 390000,
        available: true,
        floorPlan: "/floorplans/tomiris-plan.jpg"
      }
    ]
  },
  {
    id: "asylym",
    name: "АСЫЛЫМ",
    class: "business",
    blocks: "14",
    floors: "8",
    unitsPerFloor: "от 2 до 4",
    ceilingHeight: "3.0",
    completionDate: "сдан (I квартал 2023)",
    status: "completed",
    address: "г.Астана, ул. Мангилик ел-Орынбор, район Арка",
    location: "https://go.2gis.com/1jqrio",
    paymentOptions: "Отбасы 50/50, БЦК, Алтын банк",
    description: "\"Asylym\" - пешеходная парковая зона с выходом на арку, закрытые дворы. Охраняемая территория с системой видеонаблюдения.",
    finishType: "предчистовая",
    imageUrl: "/asylym2.png",
    minPrice: "от 515 000 ₸/м²",
    minPriceNumeric: 515000,
    presentation: "https://clck.ru/35Rx5a",
    tour3d: "https://clck.ru/35uKRF",
    promoAction: "скидки на квартиры до 5% на паркинг 14% и кладовки до 33%",
    elevator: "",
    windows: "2х камерные с тройным остеклением",
    heating: "центральное",
    constructionFeatures: "остались 3-4 комн, пешеходная парковая зона с выходом на арку, закрытые дворы. Охраняемая территория, видео обзор и детской площадки из квартиры, сиситема считывания номеров машин, видеодомофон, датчики протечки воды, виртуальный ассистент алиса.яндекс, дверной проем 2,4 метра 0,9",
    exteriorFinish: "фиброцементная панель, со вставками из алюминия, гранита, клинкерного кирпича",
    apartments: [
      {
        id: "asylym-any",
        type: "Квартиры",
        rooms: 3,
        area: "различные площади",
        price: "от 515 000 ₸/м²",
        pricePerSqm: "от 515 000 ₸/м²",
        pricePerSqmNumeric: 515000,
        available: true,
        floorPlan: "/floorplans/asylym-main-plan.jpg"
      }
    ]
  },
  {
    id: "aulyet",
    name: "АУЛЕТ",
    class: "comfort",
    blocks: "8",
    floors: "10-13",
    unitsPerFloor: "4",
    ceilingHeight: "2.7",
    completionDate: "сдан (I квартал 2023)",
    status: "completed",
    address: "г.Астана, ул. Кошкарбаева-Жумабаева",
    location: "https://go.2gis.com/0s0pa",
    paymentOptions: "Отбасы банк 50/50, Алтын банк",
    description: "ЖК Комфорт класса \"AYLET\" - только 3х комнатные квартиры, закрытый двор, паркинг.",
    finishType: "предчистая",
    imageUrl: "/aulet.jpg",
    minPrice: "от 380 000 ₸/м²",
    minPriceNumeric: 380000,
    presentation: "https://clck.ru/35Ryp8",
    promoAction: "скидки на квартиры до 5% на паркинг15%",
    elevator: "",
    windows: "",
    heating: "центральное",
    constructionFeatures: "только 3х комнатые квартиры закрытый двор, паркинг",
    exteriorFinish: "монилитный каркас, заполнение газоблок",
    apartments: [
      {
        id: "aulyet-3",
        type: "3-комнатная",
        rooms: 3,
        area: "80-95 м²",
        price: "от 30 400 000 ₸",
        pricePerSqm: "от 380 000 ₸/м²",
        pricePerSqmNumeric: 387500,
        available: true,
        floorPlan: "/floorplans/aulyet-3br.jpg"
      }
    ]
  },
  {
    id: "asyl-tau",
    name: "АсылТау",
    class: "comfort",
    blocks: "6",
    floors: "17-21",
    unitsPerFloor: "6",
    ceilingHeight: "2.7",
    completionDate: "III квартал 2024",
    status: "underConstruction",
    address: "г.Астана, ул. Туркестан, 4Б",
    location: "https://go.2gis.com/dewjj",
    paymentOptions: "100, 50, 70% предоплата. и всё.",
    description: "ЖК Комфорт класса \"Асыл Тау\" (возле ТРЦ Abu Dabi Plaza)",
    finishType: "предчистовая",
    imageUrl: "/asyltau.png",
    minPrice: "от 460 000 ₸/м²",
    minPriceNumeric: 460000,
    tour3d: "https://clck.ru/3AHS53",
    presentation: "https://clck.ru/3ABo4V",
    elevator: "",
    windows: "алюминиевые и металлопластиковые стеклопакеты немецкого бренда Rehau",
    heating: "центральное",
    constructionFeatures: "подземный паркинг (но его не продаем, фактически есть)",
    exteriorFinish: "фиброцементная панель HPL, вентилируемый фасад",
    apartments: [
      {
        id: "asyl-tau-any",
        type: "Квартиры",
        rooms: 2,
        area: "различные площади",
        price: "от 460 000 ₸/м²",
        pricePerSqm: "от 460 000 ₸/м²",
        pricePerSqmNumeric: 460000,
        available: true,
        floorPlan: "/floorplans/asyltau-plan.jpg"
      }
    ]
  },
  {
    id: "triumph-exclusive",
    name: "Триумф Эксклюзив",
    class: "business",
    blocks: "2",
    floors: "9",
    unitsPerFloor: "4",
    ceilingHeight: "3.0",
    completionDate: "Введён в эксплуатацию",
    status: "completed",
    address: "г.Астана, ул. Мәңгілік Ел, 36",
    location: "https://go.2gis.com/6xox7",
    paymentOptions: "100, 50, 70% предоплата. ипотеки нет",
    description: "Жилой комплекс \"Triumph Exclusive\" – клубный дом, всего 47 квартир в 200 метрах от Триумфальной Арки, с панорамными окнами и прекрасным видом, дизайнерскими холлами, фитнес-залом и игровой комнатой.",
    finishType: "предчистовая",
    imageUrl: "/triumph.jpg",
    minPrice: "от 772 000 ₸/м²",
    minPriceNumeric: 772000,
    presentation: "https://clck.ru/39NR4c",
    tour3d: "https://clck.ru/39794C",
    video: "https://youtu.be/2Piu7Xbqb4Q",
    elevator: "пассажирский, грузовой",
    windows: "2х камерные, цвет профиля антрацит",
    heating: "центральное",
    constructionFeatures: "паркинг на 54 машины",
    exteriorFinish: "Алюминиевые композитные панель, Прозрачное стекло",
    apartments: [
      {
        id: "triumph-3",
        type: "3-комнатная",
        rooms: 3,
        area: "100-120 м²",
        price: "от 77 200 000 ₸",
        pricePerSqm: "от 772 000 до 782 000 ₸/м²",
        pricePerSqmNumeric: 777000,
        available: true,
        floorPlan: "/floorplans/triumph-3br.jpg"
      },
      {
        id: "triumph-4",
        type: "4-комнатная",
        rooms: 4,
        area: "130-150 м²",
        price: "от 100 360 000 ₸",
        pricePerSqm: "от 772 000 до 782 000 ₸/м²",
        pricePerSqmNumeric: 777000,
        available: true,
        floorPlan: "/floorplans/triumph-4br.jpg"
      }
    ]
  },
  {
    id: "tomiris-towers-2",
    name: "Томирис Тауерс",
    class: "comfort",
    blocks: "2",
    floors: "21",
    unitsPerFloor: "5-9",
    ceilingHeight: "2.85",
    completionDate: "Введён в эксплуатацию",
    status: "completed",
    address: "г.Астана, ул. Ракымжан Кошкарбаев, 36",
    location: "https://go.2gis.com/3ulqpm",
    paymentOptions: "",
    description: "Жилой комплекс комфорт-класса \"Tomiris Towers\" с закрытым двором, детской и спортивной площадкой, ландшафтным дизайном, дизайнерскими холлами и бесшумными лифтами.",
    finishType: "предчистовая",
    imageUrl: "/tomiris.png",
    minPrice: "от 420 000 ₸/м²",
    minPriceNumeric: 420000,
    presentation: "https://clck.ru/35RxXr",
    elevator: "",
    windows: "высота окон 2,0 м",
    heating: "",
    constructionFeatures: "подземный",
    exteriorFinish: "фиброцементные панели",
    apartments: [
      {
        id: "tomiris-towers-2-any",
        type: "Квартиры",
        rooms: 2,
        area: "различные площади",
        price: "от 420 000 ₸/м²",
        pricePerSqm: "от 420 000 ₸/м²",
        pricePerSqmNumeric: 420000,
        available: true,
        floorPlan: "/floorplans/tomiris-main-plan.jpg"
      }
    ]
  }
];