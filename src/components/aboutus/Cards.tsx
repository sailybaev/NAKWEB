import { CardItem } from './CardItem';
import { useTranslation } from 'react-i18next';

export function Cards() {
    const { t } = useTranslation();
    
    const cardsData = [
        {
            id: 1,
            title: t('aboutus.services.housing.title'),
            description: t('aboutus.services.housing.description'),
            imageUrl: "test.jpg",
        },
        {
            id: 2,
            title: t('aboutus.services.commercial.title'),
            description: t('aboutus.services.commercial.description'),
            imageUrl: "test.jpg",
        },
        {
            id: 3,
            title: t('aboutus.services.social.title'),
            description: t('aboutus.services.social.description'),
            imageUrl: "test.jpg",
        },
        {
            id: 4,
            title: t('aboutus.services.infrastructure.title'),
            description: t('aboutus.services.infrastructure.description'),
            imageUrl: "test.jpg",
        }
    ];

    return (
        <section className="cards-section">
            <div className="container" style={{ maxWidth: '95vw', margin: '0 auto', padding: '60px 15px' }}>
                <div className="cards-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '55px' 
                }}>
                    {cardsData.map(card => (
                        <CardItem 
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            imageUrl={card.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}