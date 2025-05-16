import { ResidentialComplex } from "./residentialConfig";

interface FeaturesSectionProps {
    complex: ResidentialComplex;
}

export function FeaturesSection({ complex }: FeaturesSectionProps) {
    return (
        <section className="p-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Особенности комплекса</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Особенности строительства", content: complex.constructionFeatures, icon: "building" },
                        { title: "Внешняя отделка", content: complex.exteriorFinish, icon: "sparkles" },
                        { title: "Окна", content: complex.windows, icon: "view-grid" },
                        { title: "Лифты", content: complex.elevator || "Современные бесшумные лифты", icon: "arrow-up" },
                        { title: "Отопление", content: complex.heating, icon: "fire" }
                    ].map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                            <div className="mb-4 p-3 bg-blue-50 inline-block rounded-lg text-blue-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{feature.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}