import { ResidentialComplex } from "./residentialConfig";

interface LocationAndInfrastructureProps {
    complex: ResidentialComplex;
}

export function LocationAndInfrastructure({ complex }: LocationAndInfrastructureProps) {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    
    return (
        <section className="p-16 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Расположение и инфраструктура</h2>
                <div className="flex flex-col lg:flex-row gap-10 p-16">
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-gray-200">
                            {apiKey ? (
                                <iframe
                                    src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(complex.address)}`}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <p className="text-red-500">Google Maps API key is not configured</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Инфраструктура</h3>
                        <ul className="space-y-4">
                            {["Школы и детские сады", "Торговые центры", "Парки и зоны отдыха", "Транспортная доступность"].map((item, index) => (
                                <li key={index} className="flex items-start group">
                                    <span className="flex-shrink-0 p-1 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 ml-3 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl shadow-inner border border-blue-200">
                            <h4 className="font-bold text-xl mb-3 text-blue-900">Преимущества расположения</h4>
                            <p className="text-gray-700 leading-relaxed">
                                Жилой комплекс <span className="font-medium">{complex.name}</span> расположен в удобном месте с отличной транспортной доступностью и развитой инфраструктурой вокруг.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}