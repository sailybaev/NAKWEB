import { useState } from 'react';
import { FilterBar } from './FilterBar';
import { Card } from './Card';
import { cardData } from '../home/cardInfo.ts';
import { useTranslation } from 'react-i18next';

export function Projects() {
    const { t } = useTranslation();
    const [buildingType, setBuildingType] = useState(t('home.projects.filters.allProjects'));
    const [propertyType, setPropertyType] = useState(t('home.projects.filters.all'));
    const [visibleCount, setVisibleCount] = useState(3);

    const filteredProjects = cardData.filter(project => {
        const buildingTypeMatch = buildingType === t('home.projects.filters.allProjects') || project.buildingType === buildingType;
        const propertyTypeMatch = propertyType === t('home.projects.filters.all') || project.propertyType === propertyType;

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
                buildingType={buildingType}
                setBuildingType={setBuildingType}
                propertyType={propertyType}
                setPropertyType={setPropertyType}
            />

            <div className="cardsContainer mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleProjects.length > 0 ? (
                        visibleProjects.map((project) => (
                            <Card
                                key={project.id}
                                title={project.title}
                                imageUrl={project.imageUrl}
                                category={project.category}
                                address={project.address}
                                price={project.price}
                                date={project.date}
                                roomrange={project.roomrange}
                                area={project.area}
                                amount={project.amount}
                                href={project.href}
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