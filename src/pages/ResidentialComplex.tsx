import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MainLayout } from "../layouts/MainLayout";
import { ResidentialComplex as ResidentialComplexType, residentialComplexes } from '../components/residential/residentialConfig';
import { ApartmentSlider } from '../components/residential/ApartmentSlider';
import { useTranslation } from 'react-i18next';
import { ContactSection } from '../components/residential/ContactSection';
import { HeroSection } from '../components/residential/HeroSection';
import { OverviewSection } from '../components/residential/OverviewSection';
import { FeaturesSection } from '../components/residential/FeaturesSection';
import { LocationAndInfrastructure } from '../components/residential/LocationAndInfrastructure';

export function ResidentialComplex() {
    const { t } = useTranslation();
    const { complexId } = useParams<{ complexId: string }>();
    const navigate = useNavigate();
    const [complex, setComplex] = useState<ResidentialComplexType | null>(null);
    
    useEffect(() => {
        const foundComplex = residentialComplexes.find(c => c.id === complexId);
        if (foundComplex) {
            setComplex(foundComplex);
        } else {
            console.error(`Complex with ID ${complexId} not found`);
        }
    }, [complexId]);
    
    if (!complex) {
        return (
            <MainLayout>
                <div className="container mx-auto px-4 py-32 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-4xl font-bold mb-6 text-gray-800">{t('residential.notFound.title')}</h1>
                        <p className="text-xl text-gray-600 mb-10">{t('residential.notFound.description')}</p>
                        <button 
                            onClick={() => navigate('/')}
                            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                        >
                            {t('residential.notFound.backHome')}
                        </button>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            {/* Hero Section */}
            <HeroSection complex={complex} />
            
            {/* Overview Section */}
            <OverviewSection complex={complex} />
            
            {/* Features Section */}
            <FeaturesSection complex={complex} />
            
            {/* Apartment Plans Section */}
            <section id="apartment-plans" className="py-20 px-4 bg-white">
                <div className="container mx-auto">
                    <ApartmentSlider apartments={complex.apartments} />
                </div>
            </section>
            
            {/* Location and Infrastructure Section */}
            <LocationAndInfrastructure complex={complex} />

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Связаться с нами</h2>
                    <div className="max-w-5xl mx-auto">
                        <ContactSection complex={complex} />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}