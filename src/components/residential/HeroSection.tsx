import { useTranslation } from 'react-i18next';
import { ResidentialComplex } from "./residentialConfig";

interface HeroSectionProps {
    complex: ResidentialComplex;
}

export function HeroSection({ complex }: HeroSectionProps) {
    const { t } = useTranslation();
    
    return (
        <section className="relative h-[85vh] bg-gray-900">
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                    backgroundImage: `url(${complex.imageUrl})`,
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>
            <div className="container mx-auto px-4 lg:px-8 h-full flex items-center relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-block bg-blue-600 text-white font-semibold px-4 py-1.5 rounded-full mb-6 shadow-md">
                        {complex.class}
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                        {complex.name}
                    </h1>
                    <p className="text-xl text-gray-100 mb-10 max-w-2xl">
                        {complex.address}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a 
                            href="#apartment-plans"
                            className="bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-8 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            {t('residential.hero.viewApartments')}
                        </a>
                        <a 
                            href="#contact"
                            className="bg-white hover:bg-gray-100 text-blue-900 py-3.5 px-8 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            {t('residential.hero.contact')}
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-12 left-0 right-0 text-center">
                <a 
                    href="#overview"
                    className="text-white inline-flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity"
                >
                    <span className="text-sm font-medium mb-2">{t('residential.hero.scrollDown')}</span>
                    <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}