import { ResidentialComplex } from "./residentialConfig";
import { useTranslation } from 'react-i18next';

interface OverviewSectionProps {
    complex: ResidentialComplex;
}

export function OverviewSection({ complex }: OverviewSectionProps) {
    const { t } = useTranslation();

    return (
        <section id="overview" className="py-12 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 p-16">
                    <div className="w-full lg:w-2/3">
                        <h2 className="text-4xl font-bold mb-8 text-gray-800 border-b border-gray-200 pb-4">
                            {t('residential.about.title')}
                        </h2>
                        <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                            {complex.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                            {[
                                { label: "Класс дома", value: complex.class },
                                { label: "Количество блоков", value: complex.blocks },
                                { label: "Этажность", value: complex.floors },
                                { label: "Квартир на площадке", value: complex.unitsPerFloor },
                                { label: "Высота потолков", value: `${complex.ceilingHeight} метра` },
                                { label: "Срок сдачи", value: complex.completionDate },
                                { label: "Отделка", value: complex.finishType },
                                { label: "Цена от", value: complex.minPrice },
                                { label: "Статус", value: complex.status === "completed" ? "Сдан в эксплуатацию" : "Строится" },
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                    <h3 className="font-semibold text-gray-500 mb-2 text-sm uppercase tracking-wide">{item.label}</h3>
                                    <p className="text-gray-900 font-medium text-lg">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-1/3">
                        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-blue-100 pb-4">Контакты проекта</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                        {t('residential.location.address')}
                                    </h4>
                                    <p className="text-gray-800 font-medium mt-1">{complex.address}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                        Расположение
                                    </h4>
                                    <a 
                                        href={complex.location} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 font-medium mt-1 inline-flex items-center"
                                    >
                                        Посмотреть на карте
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                        Метод оплаты
                                    </h4>
                                    <p className="text-gray-800 font-medium mt-1">{complex.paymentOptions}</p>
                                </div>
                                
                                {complex.promoAction && (
                                    <div className="bg-yellow-50 p-5 rounded-xl shadow-inner border border-yellow-200">
                                        <div className="flex items-center mb-2">
                                            <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                            </svg>
                                            <h4 className="font-bold text-yellow-800">
                                                Акция!
                                            </h4>
                                        </div>
                                        <p className="text-yellow-900">
                                            {complex.promoAction}
                                        </p>
                                    </div>
                                )}
                                
                                <div className="pt-4 space-y-3">
                                    {[
                                        { url: complex.presentation, label: "Презентация проекта", icon: "document-text" },
                                        { url: complex.tour3d, label: "3D тур по объекту", icon: "cube" },
                                        { url: complex.video, label: "Видеопрезентация", icon: "film" }
                                    ].filter(item => item.url).map((item, index) => (
                                        <a 
                                            key={index}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 bg-white border border-blue-200 text-blue-700 hover:bg-blue-50 py-3 px-4 rounded-lg transition-colors shadow-sm hover:shadow"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}