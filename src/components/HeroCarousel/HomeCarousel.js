import '../../styles/HomeCarousel.css'
import '../../global.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

export default function HomeCarousel() {
  const {t} = useTranslation()
  const language = [
    {
      code: 'uz',
      name: 'O‘zbek',
      country_code: 'uz'
    },
    {
      code: 'ru',
      name: 'Русский',
      country_code: 'ru'
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb'
    }
  ]
  return (
    <>
      <section className='home_section'>
      <div className="container">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <h1>Slide 1</h1>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              {t('heroCarousel1')}
              {t('heroCarousel1')}
              {t('heroCarousel1')}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <h1>Slide 2</h1>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            {t('heroCarousel2')}
            {t('heroCarousel2')}
            {t('heroCarousel2')}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <h1>Slide 3</h1>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            {t('heroCarousel3')}
            {t('heroCarousel3')}
            {t('heroCarousel3')}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      </div>
      </section>
    </>
  );
}
