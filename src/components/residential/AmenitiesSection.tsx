import { useTranslation } from 'react-i18next';
import { ResidentialComplex } from './residentialConfig';

interface AmenitiesSectionProps {
    complex: ResidentialComplex;
}

export function AmenitiesSection({ complex }: AmenitiesSectionProps) {
    const { t } = useTranslation();

    return (
        <section id="amenities" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {t('residential.amenities.title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">{t('residential.amenities.elevator')}</h3>
                        <p className="text-gray-600">{complex.elevator}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">{t('residential.amenities.windows')}</h3>
                        <p className="text-gray-600">{complex.windows}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">{t('residential.amenities.heating')}</h3>
                        <p className="text-gray-600">{complex.heating}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">{t('residential.amenities.construction')}</h3>
                        <p className="text-gray-600">{complex.constructionFeatures}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">{t('residential.amenities.exterior')}</h3>
                        <p className="text-gray-600">{complex.exteriorFinish}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">{t('residential.amenities.finish')}</h3>
                        <p className="text-gray-600">{complex.finishType}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}