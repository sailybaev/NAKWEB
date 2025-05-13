import { useTranslation } from 'react-i18next';

export function Hero() {
    const { t } = useTranslation();
    
    return (
        <section
            className="relative py-24 text-white"
            style={{
                backgroundImage: 'url("/BGI.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-4xl font-bold mb-6">{t('commerce.hero.title')}</h1>
                <p className="text-lg max-w-3xl">{t('commerce.hero.subtitle')}</p>
            </div>
        </section>
    );
}