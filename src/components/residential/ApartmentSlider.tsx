import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ResidentialComplex } from './residentialConfig';

interface ApartmentSliderProps {
    complex: ResidentialComplex;
}

export function ApartmentSlider({ complex }: ApartmentSliderProps) {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<string>('all');

    const filteredApartments = activeTab === 'all'
        ? complex.apartments
        : complex.apartments.filter(apt => apt.rooms === parseInt(activeTab));

    return (
        <section id="apartments" className="p-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {t('residential.apartments.title')}
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-6 py-2 rounded-full ${
                            activeTab === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                    >
                        {t('residential.apartments.allTypes')}
                    </button>
                    {[1, 2, 3, 4].map((rooms) => (
                        <button
                            key={rooms}
                            onClick={() => setActiveTab(rooms.toString())}
                            className={`px-6 py-2 rounded-full ${
                                activeTab === rooms.toString()
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            {t(`residential.apartments.${rooms}room`)}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredApartments.map((apartment) => (
                        <div
                            key={apartment.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            {apartment.floorPlan && (
                                <div className="relative h-48">
                                    <img
                                        src={apartment.floorPlan}
                                        alt={`${apartment.type} floor plan`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {apartment.type}
                                </h3>
                                <div className="space-y-2 mb-4">
                                    <p className="text-gray-600">
                                        {t('residential.apartments.area')}: {apartment.area}
                                    </p>
                                    <p className="text-gray-600">
                                        {t('residential.apartments.price')}: {apartment.price}
                                    </p>
                                    <p className="text-gray-600">
                                        {t('residential.apartments.pricePerSqm')}: {apartment.pricePerSqm}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className={`px-3 py-1 rounded-full text-sm ${
                                        apartment.available
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                        {apartment.available
                                            ? t('residential.apartments.available')
                                            : t('residential.apartments.sold')}
                                    </span>
                                    {apartment.available && (
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                            {t('residential.apartments.contact')}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}