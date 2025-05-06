import { MainLayout } from "../layouts/MainLayout";
import { Slider } from "../components/home/slider";
import { Carousel } from "../components/home/Carousel";
import 'swiper/swiper-bundle.css';


import { Projects } from "../components/home/Projects";


export function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto px-10 py-8">

          <Slider />

          <Projects />

          <Carousel />
      </div>
    </MainLayout>
  );
}