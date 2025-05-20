import { useTranslation } from 'react-i18next';
import { ResidentialComplex } from './residentialConfig';

interface AboutSectionProps {
    complex: ResidentialComplex;
}

export function AboutSection({ complex }: AboutSectionProps) {
    const { t } = useTranslation();
    
    return (
        <section id="about" className="py-16 bg-white px-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {t('residential.about.title')}
                </h2>
                
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {complex.description}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{t('residential.about.features.class')}</h3>
                        <p className="text-gray-600">{complex.class}</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{t('residential.about.features.blocks')}</h3>
                        <p className="text-gray-600">{complex.blocks}</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{t('residential.about.features.floors')}</h3>
                        <p className="text-gray-600">{complex.floors}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}