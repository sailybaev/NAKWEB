import { useTranslation } from 'react-i18next';

interface AmenitiesSectionProps {
    amenities: string[];
}

export function AmenitiesSection({ amenities }: AmenitiesSectionProps) {
    const { t } = useTranslation();
    
    return (
        <section id="amenities" className="p-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {t('residential.amenities.title')}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {amenities.map((amenity, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-50 rounded-lg p-4 flex items-start"
                        >
                            <div className="mr-3 mt-1 text-blue-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-gray-800">{amenity}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}