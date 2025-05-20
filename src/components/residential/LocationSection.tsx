// filepath: /Users/sailybaev/Documents/projects/react-ts-app/src/components/resedential/LocationSection.tsx
import { useTranslation } from 'react-i18next';
import { ResidentialComplex } from './residentialConfig';

interface LocationSectionProps {
    complex: ResidentialComplex;
}

export function LocationSection({ complex }: LocationSectionProps) {
    const { t } = useTranslation();

    return (
        <section id="location" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {t('residential.location.title')}
                </h2>
                
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">{t('residential.location.address')}</h3>
                            <p className="text-gray-600 mb-6">{complex.address}</p>
                            
                            <div className="aspect-w-16 aspect-h-9 mb-6">
                                <iframe
                                    src={complex.location}
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-lg font-semibold mb-3">{t('residential.location.infrastructure')}</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {t('residential.location.schools')}
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {t('residential.location.kindergartens')}
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {t('residential.location.shopping')}
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-3">{t('residential.location.transport')}</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {t('residential.location.bus')}
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {t('residential.location.taxi')}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}