import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import bg1 from '../assets/bg/bg-1.jpg';
import bg2 from '../assets/bg/bg-2.jpg';
import bg3 from '../assets/bg/bg-3.jpg';

import {Link} from 'react-router';


function HeroSlider() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        speed={1200}
        effect={'fade'}
        fadeEffect={{
          crossFade: true
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="h-[700px] shadow-2xl"
        loop={true}
        grabCursor={true}
      >

        {[
          { 
            src: bg1, 
            text: "Welcome to HomeNest",
            subtext: "Discover the dream house you searching for."
          },
          { 
            src: bg2, 
            text: "Affordable Homes",
            subtext: "Beautiful houses for every budget"
          },
          { 
            src: bg3, 
            text: "Huge Collections of houses",
            subtext: "Find or post about your house for potential buyer/seller."
          },
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[700px] overflow-hidden">
              {/* Background Image with Slow Zoom Only - No Hover Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.src}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover transform scale-110 animate-slowZoom"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/40"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
                {/* Subtle Shine Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-shine"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="ml-8 md:ml-16 transform translate-y-8 opacity-0 animate-slideIn">
                  <p className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-2xl">
                    {slide.text}
                  </p>
                  <p className="text-white/90 text-xl md:text-2xl font-light mb-6 max-w-md drop-shadow-lg">
                    {slide.subtext}
                  </p>
                  <Link to="/all-properties" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
                    Explore Now
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </Link>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-8 right-8 opacity-0 animate-float delay-1000">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 shadow-lg">
                  <span className="text-white text-sm font-medium">New Arrivals</span>
                </div>
              </div>

              {/* Progress Bar for Autoplay */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
                <div className="h-full w-full bg-amber-500 animate-progress"></div>
              </div>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}

export default HeroSlider;