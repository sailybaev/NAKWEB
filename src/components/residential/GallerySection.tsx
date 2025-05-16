import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface GalleryItem {
    image: string;
    title?: string;
    category?: string;
}

interface GallerySectionProps {
    gallery: GalleryItem[];
    name: string;
}

export function GallerySection({ gallery, name }: GallerySectionProps) {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
    
    // Get unique categories
    const categories: string[] = Array.from(
        new Set(
            gallery
                .map(item => item.category)
                .filter((cat): cat is string => typeof cat === 'string')
        )
    );
    
    const filteredGallery = activeCategory 
        ? gallery.filter(item => item.category === activeCategory)
        : gallery;
        
    const openModal = (image: GalleryItem) => {
        setSelectedImage(image);
        setShowModal(true);
    };
    
    return (
        <section id="gallery" className="p-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {t('residential.gallery.title')}
                </h2>
                
                {categories.length > 0 && (
                    <div className="flex flex-wrap justify-center mb-8 gap-2">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`px-4 py-2 rounded-full ${
                                activeCategory === null 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            {t('residential.gallery.allCategories')}
                        </button>
                        
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full ${
                                    activeCategory === category 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                            >
                                {t(`residential.gallery.categories.${category}`)}
                            </button>
                        ))}
                    </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredGallery.map((item, index) => (
                        <div 
                            key={index} 
                            onClick={() => openModal(item)}
                            className="cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
                        >
                            <div className="relative h-64">
                                <img 
                                    src={item.image} 
                                    alt={item.title || `${name} gallery image`} 
                                    className="w-full h-full object-cover"
                                />
                                
                                {item.title && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <h3 className="text-white text-lg">{item.title}</h3>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {showModal && selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={() => setShowModal(false)}
                >
                    <div 
                        className="max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative">
                            <img 
                                src={selectedImage.image} 
                                alt={selectedImage.title || `${name} gallery image`} 
                                className="w-full h-auto"
                            />
                            
                            <button 
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            
                            {selectedImage.title && (
                                <div className="bg-black bg-opacity-70 p-4">
                                    <h3 className="text-white text-lg">{selectedImage.title}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}