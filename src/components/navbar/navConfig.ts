import { NavConfig } from './types';

export const navConfig: NavConfig = {
  mainItems: [
    { label: "Басты бет", href: "/" },
    { label: "Коммерция", href: "#" },
    { label: "Біз Туралы", href: "/about" },
    { label: "Науқандар", href: "#" },
    { label: "Байланыс", href: "#" },
  ],
  megaMenuItems: {
    columnOne: [
      {
        label: "Жаңа тұрғын үй",
        href: "#",
        description: "Жаңа салынған тұрғын үй кешендеріндегі пәтерлер"
      },
      {
        label: "Қайталама нарық",
        href: "#",
        description: "Қолданыста болған пәтерлер мен үйлер"
      },
      {
        label: "Жеке үйлер",
        href: "#",
        description: "Астана қалаcындағы жеке үйлер"
      }
    ],
    columnTwo: [
      {
        label: "Жер телімдері",
        href: "#",
        description: "Құрылысқа арналған және ауыл шаруашылық жер телімдері"
      },
      {
        label: "Ипотека",
        href: "#",
        description: "Ипотека бағдарламалары бойынша ұсыныстар"
      },
      {
        label: "Отандық жобалар",
        href: "#", 
        description: "Мемлекеттік қолдаумен салынған тұрғын үй кешендері"
      }
    ]
  }
};