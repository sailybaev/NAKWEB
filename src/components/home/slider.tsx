import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export function Slider() {
  const { t } = useTranslation();
  
  const slides = [
    {
      image: '/Halat.jpg',
      title: t('home.slider.installment'),
      subtitle: t('home.slider.installmentSub'),
      description: t('home.slider.installmentDesc')
    },
    {
      image: '/Hero.jpg',
      title: t('home.slider.location'),
      subtitle: t('home.slider.locationSub'),
      description: t('home.slider.locationDesc')
    },
    {
      image: '/Halat.jpg',
      title: t('home.slider.design'),
      subtitle: t('home.slider.designSub'),
      description: t('home.slider.designDesc')
    },
    {
      image: '/Hero.jpg',
      title: t('home.slider.quality'),
      subtitle: t('home.slider.qualitySub'),
      description: t('home.slider.qualityDesc')
    },
  ];

  return (
    <div className="w-full relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{delay: 5000}}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        modules={[Navigation, Pagination, Autoplay]}
        className="photo-gallery rounded-lg overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full object-cover rounded-lg"
                style={{ height: '500px' }}
              />
              
              <div className="absolute inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/70 to-transparent ">
                
                <div className="self-start">
                  <img src="logo.png" alt="Logo" style={{width:100 , opacity: 0.4}} />
                </div>
                
                <div className="w-full">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="text-4xl font-light text-white mb-2 font-script">{slide.title}</h2>
                    </div>
                    
                    <div className="bg-white text-teal-800 inline-block px-3 py-2 mb-1 max-w-max" style={{ borderRadius: '7px'  }}>
                      <p className="text-xl font-bold" >{slide.subtitle}</p>
                    </div>
                    
                    <p className="text-sm text-white/80">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}