import { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface ProductCard {
    id: number;
    title: string;
    description: string;
    image: string;
}

export function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

    useEffect(() => {
        if (!emblaApi) return;


    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-12 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">Новости</h2>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex py-4">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 first:pl-0"
                                >
                                    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col mx-2">
                                        <div className="h-64 overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                                            <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                                                {product.description}
                                            </p>
                                            <button className="text-blue-950 font-medium flex items-center">
                                                Подробнее
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <button
                        className="absolute top-1/2 -right-4 z-10 bg-white rounded-full shadow-md p-2 transform -translate-y-1/2"
                        onClick={onNextButtonClick}
                        aria-label="Next slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
const products: ProductCard[] = [
    {
        id: 1,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/test.jpg'
    },
    {
        id: 2,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/test.jpg'
    },
    {
        id: 3,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/test.jpg'
    },
    {
        id: 4,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/test.jpg'
    },
];