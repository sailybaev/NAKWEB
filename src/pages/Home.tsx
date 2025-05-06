import { MainLayout } from "../layouts/MainLayout";
import { Slider } from "../components/home/slider";
import { Card } from "../components/home/Card";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Projects } from "../components/home/Projects";


export function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto px-10 py-8">
        <div className="h-screen">
          
          <div className="md:col-span-2 mb-4">
            <Slider />
          </div>
            
          <div className="md:col-span-2 py-4">
            <Projects />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}