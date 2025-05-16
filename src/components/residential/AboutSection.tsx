import { useTranslation } from 'react-i18next';

interface Feature {
    title: string;
    description: string;
    icon?: string;
}

interface AboutSectionProps {
    description: string;
    features: Feature[];
}

export function AboutSection({ description, features }: AboutSectionProps) {
    const { t } = useTranslation();
    
    return (
        <section id="about" className="py-16 bg-white px-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {t('residential.about.title')}
                </h2>
                
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {description}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            {feature.icon && (
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                                    <img src={feature.icon} alt="" className="w-6 h-6" />
                                </div>
                            )}
                            {!feature.icon && (
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            )}
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}