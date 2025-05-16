import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Apartment {
    id: string;
    type: string;
    rooms: number;
    area: string;
    price: string;
    available: boolean;
    floorPlan?: string;
}

interface ApartmentSliderProps {
    apartments: Apartment[];
}

export function ApartmentSlider({ apartments }: ApartmentSliderProps) {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);
    
    const apartmentsWithPlans = apartments.filter(apartment => apartment.floorPlan);
    
    const goToSlide = (index: number) => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setCurrentIndex(index);
        
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };
    
    const nextSlide = () => {
        if (apartmentsWithPlans.length <= 1) return;
        
        const newIndex = currentIndex === apartmentsWithPlans.length - 1 ? 0 : currentIndex + 1;
        goToSlide(newIndex);
    };
    
    const prevSlide = () => {
        if (apartmentsWithPlans.length <= 1) return;
        
        const newIndex = currentIndex === 0 ? apartmentsWithPlans.length - 1 : currentIndex - 1;
        goToSlide(newIndex);
    };
    
    const currentApartment = apartmentsWithPlans[currentIndex];
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);
    
    if (apartmentsWithPlans.length === 0) {
        return null;
    }
    
    return (
        <section id="apartment-plans" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {t('residential.apartmentPlans.title')}
                </h2>
                
                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        <div 
                            ref={sliderRef}
                            className="overflow-hidden rounded-lg shadow-lg bg-white"
                        >
                            <div className="relative h-[500px] flex items-center justify-center">
                                <div className="w-full flex flex-col md:flex-row h-full">
                                    <div className="w-full md:w-2/3 bg-gray-100 flex items-center justify-center p-4">
                                        <img 
                                            src={currentApartment.floorPlan} 
                                            alt={`Floor plan for ${currentApartment.type}`}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                    
                                    <div className="w-full md:w-1/3 p-6 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">
                                                {currentApartment.type}
                                            </h3>
                                            
                                            <div className="mt-4 space-y-3">
                                                <div>
                                                    <p className="text-sm text-gray-500">
                                                        {t('residential.apartments.rooms')}
                                                    </p>
                                                    <p className="font-medium text-lg">
                                                        {currentApartment.rooms}
                                                    </p>
                                                </div>
                                                
                                                <div>
                                                    <p className="text-sm text-gray-500">
                                                        {t('residential.apartments.area')}
                                                    </p>
                                                    <p className="font-medium text-lg">
                                                        {currentApartment.area}
                                                    </p>
                                                </div>
                                                
                                                <div>
                                                    <p className="text-sm text-gray-500">
                                                        {t('residential.apartments.price')}
                                                    </p>
                                                    <p className="font-medium text-lg">
                                                        {currentApartment.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-6">
                                            <a
                                                href="#contact"
                                                className={`block w-full text-center py-3 rounded-md ${
                                                    currentApartment.available
                                                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                                }`}
                                            >
                                                {currentApartment.available
                                                    ? t('residential.apartmentPlans.inquire')
                                                    : t('residential.apartments.notAvailable')
                                                }
                                            </a>
                                            
                                            <div className={`mt-3 text-center ${
                                                currentApartment.available
                                                ? 'text-green-600'
                                                : 'text-red-600'
                                            }`}>
                                                {currentApartment.available
                                                    ? t('residential.apartments.available')
                                                    : t('residential.apartments.sold')
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {apartmentsWithPlans.length > 1 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10 focus:outline-none"
                                    disabled={isAnimating}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10 focus:outline-none"
                                    disabled={isAnimating}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>
                    
                    {apartmentsWithPlans.length > 1 && (
                        <div className="flex justify-center mt-6 space-x-2">
                            {apartmentsWithPlans.map((apartment, index) => (
                                <button
                                    key={apartment.id}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        index === currentIndex 
                                        ? 'bg-blue-600 w-6' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to apartment plan ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                    
                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        {apartmentsWithPlans.map((apartment, index) => (
                            <button
                                key={apartment.id}
                                onClick={() => goToSlide(index)}
                                className={`px-4 py-2 rounded-full text-sm ${
                                    index === currentIndex
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                                }`}
                            >
                                {apartment.type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}