// filepath: /Users/sailybaev/Documents/projects/react-ts-app/src/components/resedential/LocationSection.tsx
import { useTranslation } from 'react-i18next';

interface LocationProps {
    location: {
        address: string;
        coordinates?: {
            lat: number;
            lng: number;
        };
        mapImage?: string;
        nearbyFacilities?: {
            name: string;
            distance: string;
            type: string;
        }[];
    };
}

export function LocationSection({ location }: LocationProps) {
    const { t } = useTranslation();

    return (
        <section id="location" className="py-16 bg-gray-50 px-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {t('residential.location.title')}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            {t('residential.location.address')}
                        </h3>
                        <p className="text-lg text-gray-700 mb-6">{location.address}</p>

                        {location.nearbyFacilities && location.nearbyFacilities.length > 0 && (
                            <>
                                <h3 className="text-2xl font-semibold mb-4">
                                    {t('residential.location.nearbyFacilities')}
                                </h3>
                                <div className="space-y-4">
                                    {location.nearbyFacilities.map((facility, index) => (
                                        <div 
                                            key={index} 
                                            className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                                        >
                                            <div className="mr-4">
                                                {facility.type === 'shopping' && (
                                                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                    </svg>
                                                )}
                                                {facility.type === 'education' && (
                                                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                    </svg>
                                                )}
                                                {facility.type === 'recreation' && (
                                                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                    </svg>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-medium">{facility.name}</p>
                                                <p className="text-sm text-gray-500">{facility.distance}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    <div>
                        {location.mapImage ? (
                            <img 
                                src={location.mapImage} 
                                alt="Location map" 
                                className="w-full h-96 object-cover rounded-lg shadow-md"
                            />
                        ) : (
                            location.coordinates && (
                                <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                                    <p>{t('residential.location.mapPlaceholder')}</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}