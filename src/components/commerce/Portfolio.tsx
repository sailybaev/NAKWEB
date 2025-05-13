import { useTranslation } from "react-i18next";
import { commerceConfig } from "./commerceConfig.ts";

export function Portfolio() {
    const { t } = useTranslation();

    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">{t('commerce.portfolio.title')}</h2>
                    <p className="text-xl max-w-3xl mx-auto text-gray-300">
                        {t('commerce.portfolio.subtitle')}
                    </p>
                </div>

                <div className="space-y-12">
                    {commerceConfig.projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-gray-800 rounded-lg overflow-hidden shadow-lg`}
                        >
                            <div className="lg:w-1/2 flex items-center justify-center p-4">
                                <div className="bg-gray-700 relative overflow-hidden rounded-lg w-11/12 h-[400px]">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.nameKey}
                                        className="w-full h-auto object-cover object-center transition-transform duration-300 hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 px-3 bg-blue-600 text-white text-sm font-semibold rounded-full">
                                        {t('commerce.portfolio.status')}
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2 flex flex-col justify-center p-6 md:p-8">
                                <h3 className="text-2xl font-semibold mb-3">{project.nameKey}</h3>
                                <p className="text-gray-400 mb-4">{project.descriptionKey}</p>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-gray-300">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        <span className="text-sm">{project.address}</span>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        <a href={`mailto:${project.contactEmail}`} className="text-sm hover:underline">{project.contactEmail}</a>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                        <a href={`tel:${project.contactPhone}`} className="text-sm hover:underline">{project.contactPhone}</a>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tagKeys.map((tagKey, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full"
                                        >
                                            {tagKey}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={`#quote`}
                                    className="inline-flex items-center text-blue-400 hover:text-blue-300 mt-auto text-sm"
                                >
                                    {t('commerce.portfolio.details')}
                                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <a
                        href="/"
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition-colors text-sm"
                    >
                        {t('commerce.portfolio.viewAll')}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}