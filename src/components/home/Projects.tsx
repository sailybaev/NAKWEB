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
  PARKING: 'parking',
  IN_STOCK: 'inStock',
  ALL_CLASSES: 'allClasses', 
  ECONOMY: 'economy',
  COMFORT: 'comfort',
  COMFORT_PLUS: 'comfort+',  
  BUSINESS: 'business',
  PREMIUM: 'premium'
};

export function Projects() {
    const { t } = useTranslation();
    const [buildingTypeKey, setBuildingTypeKey] = useState(FILTER_KEYS.ALL_PROJECTS);
    const [propertyTypeKey, setPropertyTypeKey] = useState(FILTER_KEYS.ALL_TYPES);
    const [classTypeKey, setClassTypeKey] = useState(FILTER_KEYS.ALL_CLASSES);
    const [visibleCount, setVisibleCount] = useState(3);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const getTranslatedFilter = (key:any) => {
        switch(key) {
            case FILTER_KEYS.ALL_PROJECTS: return t('home.projects.filters.allProjects');
            case FILTER_KEYS.UNDER_CONSTRUCTION: return t('home.projects.filters.underConstruction');
            case FILTER_KEYS.COMPLETED: return t('home.projects.filters.completed');
            case FILTER_KEYS.ALL_TYPES: return t('home.projects.filters.all');
            case FILTER_KEYS.APARTMENT: return t('home.projects.filters.apartment');
            case FILTER_KEYS.COMMERCIAL: return t('home.projects.filters.commercial');
            case FILTER_KEYS.PARKING: return t('home.projects.filters.parking');
            case FILTER_KEYS.IN_STOCK: return t('home.projects.filters.inStock');
            case FILTER_KEYS.ALL_CLASSES: return t('home.projects.filters.allClasses');
            case FILTER_KEYS.ECONOMY: return t('home.projects.filters.economy');
            case FILTER_KEYS.COMFORT: return t('home.projects.filters.comfort');
            case FILTER_KEYS.COMFORT_PLUS: return t('home.projects.filters.comfortPlus'); 
            case FILTER_KEYS.BUSINESS: return t('home.projects.filters.business');
            case FILTER_KEYS.PREMIUM: return t('home.projects.filters.premium');
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

    const handleClassTypeChange = (translatedValue:any) => {
        if (translatedValue === t('home.projects.filters.allClasses')) {
            setClassTypeKey(FILTER_KEYS.ALL_CLASSES);
        } else if (translatedValue === t('home.projects.filters.economy')) {
            setClassTypeKey(FILTER_KEYS.ECONOMY);
        } else if (translatedValue === t('home.projects.filters.comfort')) {
            setClassTypeKey(FILTER_KEYS.COMFORT);
        } else if (translatedValue === t('home.projects.filters.comfortPlus')) {
            setClassTypeKey(FILTER_KEYS.COMFORT_PLUS); // Add this line
        } else if (translatedValue === t('home.projects.filters.business')) {
            setClassTypeKey(FILTER_KEYS.BUSINESS);
        } else if (translatedValue === t('home.projects.filters.premium')) {
            setClassTypeKey(FILTER_KEYS.PREMIUM);
        }
    };

    function filterByPrice(complex: any, minPrice: string, maxPrice: string): boolean {
        if (!minPrice && !maxPrice) return true;
        
        const minPriceNum = minPrice ? parseInt(minPrice.replace(/\s/g, '')) : 0;
        const maxPriceNum = maxPrice ? parseInt(maxPrice.replace(/\s/g, '')) : Infinity;
        
        const complexMinPrice = complex.minPriceNumeric;
        
        const apartmentMinPrices = complex.apartments.map((apt: any) => apt.pricePerSqmNumeric);
        
        const lowestPrice = Math.min(complexMinPrice, ...apartmentMinPrices.filter((p: any) => p > 0));
        
        return lowestPrice >= minPriceNum && lowestPrice <= maxPriceNum;
    }

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

        const classMatch = classTypeKey === FILTER_KEYS.ALL_CLASSES || 
            complex.class === classTypeKey;

        const priceMatch = filterByPrice(complex, minPrice, maxPrice);
        
        const inStockMatch = !inStockOnly || complex.apartments.some(apt => apt.available !== false);

        return buildingTypeMatch && propertyTypeMatch && priceMatch && inStockMatch && classMatch;
    });

    console.log('Filter conditions:', {
        buildingType: buildingTypeKey,
        propertyType: propertyTypeKey,
        inStockOnly,
        minPrice,
        maxPrice
    });

    console.log('Total projects:', residentialComplexes.length);
    console.log('Filtered projects:', filteredProjects.length);

    residentialComplexes.forEach(complex => {
        const buildingTypeMatch = buildingTypeKey === FILTER_KEYS.ALL_PROJECTS || 
            (complex.status === FILTER_KEYS.UNDER_CONSTRUCTION && buildingTypeKey === FILTER_KEYS.UNDER_CONSTRUCTION) || 
            (complex.status === FILTER_KEYS.COMPLETED && buildingTypeKey === FILTER_KEYS.COMPLETED);
            
        const propertyTypeMatch = complex.apartments.some(apt => {
            if (propertyTypeKey === FILTER_KEYS.APARTMENT) {
                return apt.type.includes('комнатная') || apt.type === 'Квартиры';
            } else if (propertyTypeKey === FILTER_KEYS.COMMERCIAL) {
                return apt.type.toLowerCase().includes('коммерческая');
            } else if (propertyTypeKey === FILTER_KEYS.PARKING) {
                return apt.type.toLowerCase().includes('паркинг');
            }
            return false;
        });
        const classMatch = classTypeKey === FILTER_KEYS.ALL_CLASSES || 
            complex.class === classTypeKey;
        const priceMatch = filterByPrice(complex, minPrice, maxPrice);
        const inStockMatch = !inStockOnly || complex.apartments.some(apt => apt.available !== false);
        
        console.log(`Project ${complex.name}:`, {
            buildingTypeMatch,
            propertyTypeMatch,
            priceMatch,
            inStockMatch,
            passes: buildingTypeMatch && propertyTypeMatch && priceMatch && inStockMatch
        });
    });

    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMoreProjects = visibleCount < filteredProjects.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

    const getClassColorStyle = (classType: string) => {
        switch(classType) {
          case FILTER_KEYS.ECONOMY:
            return 'bg-green-600';
          case FILTER_KEYS.COMFORT:
            return 'bg-blue-600'; 
          case FILTER_KEYS.COMFORT_PLUS:
            return 'bg-cyan-600';  
          case FILTER_KEYS.BUSINESS:
            return 'bg-purple-600'; 
          case FILTER_KEYS.PREMIUM:
            return 'bg-amber-600'; 
          default:
            return 'bg-gray-600';  
        }
      };

    return(
        <section className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8">{t('home.projects.title')}</h1>

            <FilterBar
                buildingType={getTranslatedFilter(buildingTypeKey)}
                setBuildingType={handleBuildingTypeChange}
                propertyType={getTranslatedFilter(propertyTypeKey)}
                setPropertyType={handlePropertyTypeChange}
                classType={getTranslatedFilter(classTypeKey)}
                setClassType={handleClassTypeChange}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                inStockOnly={inStockOnly}
                setInStockOnly={setInStockOnly}
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
                                categoryColor={getClassColorStyle(complex.class)} 
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