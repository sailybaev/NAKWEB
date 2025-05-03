import { FeatureItem } from "./FeatureItem";

interface Feature {
  icon: any;
  title: string;
  description: string;
  iconColor: string;
}

export function Features() {
  const features: Feature[] = [
    {
      icon: (
        <svg
          className="flex-shrink-0 w-9 h-9"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
      ),
      title: "Опыт и надежность",
      description:
        "Более 15 лет успешной работы на строительном рынке Казахстана с безупречной репутацией и сотнями реализованных проектов.",
      iconColor: "text-green-500"
    },
    {
      icon: (
        <svg
          className="flex-shrink-0 w-9 h-9"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Современные технологии",
      description:
        "Применение инновационных строительных технологий и материалов, соответствующих мировым стандартам качества и экологической безопасности.",
      iconColor: "text-blue-600"
    },
    {
      icon: (
        <svg
          className="flex-shrink-0 w-9 h-9"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Комплексный подход",
      description:
        "От проектирования до ввода объектов в эксплуатацию — полный цикл работ, выполняемый квалифицированными специалистами нашей компании.",
      iconColor: "text-red-500"
    }
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24" style={{background: '#f5f5f7'}}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Наши Преимущества
          </h2>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconColor={feature.iconColor}
              />
            ))}

          </div>

          <div className="lg:col-span-3">
            <img
              className="w-full rounded-lg shadow-xl"
              src="Halat.jpg"
              alt="Современное здание, построенное нашей компанией"
            />
          </div>
        </div>
      </div>
    </section>
  );
}