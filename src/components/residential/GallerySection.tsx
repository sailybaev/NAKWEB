import { useTranslation } from 'react-i18next';
import { ResidentialComplex } from './residentialConfig';

interface GallerySectionProps {
    complex: ResidentialComplex;
}

export function GallerySection({ complex }: GallerySectionProps) {
    const { t } = useTranslation();

    return (
        <section id="gallery" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {t('residential.gallery.title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={complex.imageUrl}
                            alt={complex.name}
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold">{complex.name}</span>
                        </div>
                    </div>

                    {complex.presentation && (
                        <div className="relative group overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/presentation.jpg"
                                alt="Presentation"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                            />
                            <a
                                href={complex.presentation}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                            >
                                <span className="text-white text-lg font-semibold">{t('residential.gallery.presentation')}</span>
                            </a>
                        </div>
                    )}

                    {complex.tour3d && (
                        <div className="relative group overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/3d-tour.jpg"
                                alt="3D Tour"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                            />
                            <a
                                href={complex.tour3d}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                            >
                                <span className="text-white text-lg font-semibold">{t('residential.gallery.tour3d')}</span>
                            </a>
                        </div>
                    )}

                    {complex.video && (
                        <div className="relative group overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/video.jpg"
                                alt="Video"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                            />
                            <a
                                href={complex.video}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                            >
                                <span className="text-white text-lg font-semibold">{t('residential.gallery.video')}</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}