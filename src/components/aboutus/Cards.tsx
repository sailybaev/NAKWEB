import { CardItem } from './CardItem';

export function Cards() {
    const cardsData = [
        {
            id: 1,
            title: "Жилищное строительство",
            description: "Строительство современных жилых комплексов с комфортной инфраструктурой, отвечающих всем требованиям безопасности и качества.",
            imageUrl: "test.jpg",
        },
        {
            id: 2,
            title: "Коммерческая недвижимость",
            description: "Разработка и реализация проектов бизнес-центров, торговых комплексов и других коммерческих объектов с учетом потребностей бизнеса.",
            imageUrl: "test.jpg",
        },
        {
            id: 3,
            title: "Социальные объекты",
            description: "Строительство школ, больниц, детских садов и других социально значимых объектов, способствующих развитию городской инфраструктуры.",
            imageUrl: "test.jpg",
        },
        {
            id: 4,
            title: "Инфраструктурные проекты",
            description: "Реализация масштабных инфраструктурных проектов, включая дороги, мосты и инженерные коммуникации для создания комфортной городской среды.",
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