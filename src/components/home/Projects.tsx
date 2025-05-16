import { useState } from 'react';
import { FilterBar } from './FilterBar';
import { Card } from './Card';
import { residentialComplexes } from '../residential/residentialConfig';
import { useTranslation } from 'react-i18next';

const FILTER_KEYS = {
  ALL_PROJECTS: 'all',
  UNDER_CONSTRUCTION: 'underConstruction',
  COMPLETED: 'completed',
  ALL_TYPES: 'all',
  APARTMENT: 'apartment',
  COMMERCIAL: 'commercial',
  PARKING: 'parking'
};

export function Projects() {
    const { t } = useTranslation();
    const [buildingTypeKey, setBuildingTypeKey] = useState(FILTER_KEYS.ALL_PROJECTS);
    const [propertyTypeKey, setPropertyTypeKey] = useState(FILTER_KEYS.ALL_TYPES);
    const [visibleCount, setVisibleCount] = useState(3);

    const getTranslatedFilter = (key:any) => {
        switch(key) {
            case FILTER_KEYS.ALL_PROJECTS: return t('home.projects.filters.allProjects');
            case FILTER_KEYS.UNDER_CONSTRUCTION: return t('home.projects.filters.underConstruction');
            case FILTER_KEYS.COMPLETED: return t('home.projects.filters.completed');
            case FILTER_KEYS.ALL_TYPES: return t('home.projects.filters.all');
            case FILTER_KEYS.APARTMENT: return t('home.projects.filters.apartment');
            case FILTER_KEYS.COMMERCIAL: return t('home.projects.filters.commercial');
            case FILTER_KEYS.PARKING: return t('home.projects.filters.parking');
            default: return '';
        }
    };

    const handleBuildingTypeChange = (translatedValue:any) => {
        if (translatedValue === t('home.projects.filters.allProjects')) {
            setBuildingTypeKey(FILTER_KEYS.ALL_PROJECTS);
        } else if (translatedValue === t('home.projects.filters.underConstruction')) {
            setBuildingTypeKey(FILTER_KEYS.UNDER_CONSTRUCTION);
        } else if (translatedValue === t('home.projects.filters.completed')) {
            setBuildingTypeKey(FILTER_KEYS.COMPLETED);
        }
    };

    const handlePropertyTypeChange = (translatedValue:any) => {
        if (translatedValue === t('home.projects.filters.all')) {
            setPropertyTypeKey(FILTER_KEYS.ALL_TYPES);
        } else if (translatedValue === t('home.projects.filters.apartment')) {
            setPropertyTypeKey(FILTER_KEYS.APARTMENT);
        } else if (translatedValue === t('home.projects.filters.commercial')) {
            setPropertyTypeKey(FILTER_KEYS.COMMERCIAL);
        } else if (translatedValue === t('home.projects.filters.parking')) {
            setPropertyTypeKey(FILTER_KEYS.PARKING);
        }
    };

    const filteredProjects = residentialComplexes.filter(complex => {
        const buildingTypeMatch = buildingTypeKey === FILTER_KEYS.ALL_PROJECTS || 
            (complex.status === FILTER_KEYS.UNDER_CONSTRUCTION && buildingTypeKey === FILTER_KEYS.UNDER_CONSTRUCTION) || 
            (complex.status === FILTER_KEYS.COMPLETED && buildingTypeKey === FILTER_KEYS.COMPLETED);
            
        const propertyTypeMatch = propertyTypeKey === FILTER_KEYS.ALL_TYPES || 
            complex.apartments.some(apt => {
                if (propertyTypeKey === FILTER_KEYS.APARTMENT) {
                    return apt.type.includes('комнатная') || apt.type === 'Квартиры';
                } else if (propertyTypeKey === FILTER_KEYS.COMMERCIAL) {
                    return apt.type.toLowerCase().includes('коммерческая');
                } else if (propertyTypeKey === FILTER_KEYS.PARKING) {
                    return apt.type.toLowerCase().includes('паркинг');
                }
                return false;
            });

        return buildingTypeMatch && propertyTypeMatch;
    });

    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMoreProjects = visibleCount < filteredProjects.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

    return(
        <section className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8">{t('home.projects.title')}</h1>

            <FilterBar
                buildingType={getTranslatedFilter(buildingTypeKey)}
                setBuildingType={handleBuildingTypeChange}
                propertyType={getTranslatedFilter(propertyTypeKey)}
                setPropertyType={handlePropertyTypeChange}
            />

            <div className="cardsContainer mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleProjects.length > 0 ? (
                        visibleProjects.map((complex) => (
                            <Card
                                key={complex.id}
                                title={complex.name}
                                imageUrl={complex.imageUrl}
                                category={complex.class}
                                address={complex.address}
                                price={complex.minPrice}
                                date={complex.completionDate}
                                roomrange={complex.apartments[0]?.rooms ? `${complex.apartments[0].rooms}` : "1-4"}
                                area={complex.apartments[0]?.area || ""}
                                amount={complex.apartments.length}
                                href={`/residential/${complex.id}`}
                            />
                        ))
                    ) : (
                        <p className="col-span-3 text-center text-gray-500 py-8">
                            {t('home.projects.noProjects')}
                        </p>
                    )}
                </div>

                {hasMoreProjects && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handleLoadMore}
                            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            {t('home.projects.loadMore')}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}