import { MainLayout } from "../layouts/MainLayout";
import { Slider } from "../components/home/slider";
import { Card } from "../components/home/Card";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto px-10 py-8">
        <div className="h-screen">
          
          <div className="md:col-span-2">
            <Slider />
          </div>
            
        </div>
      </div>
    </MainLayout>
  );
}