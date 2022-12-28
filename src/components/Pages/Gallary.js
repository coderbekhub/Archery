import React from 'react'
import GalleryPage1 from '../../img/archerygallery1.jpg'
import GalleryPage2 from '../../img/archerygallery2.jpg'
import GalleryPage3 from '../../img/archerygallery3.jpg'
import GalleryPage4 from '../../img/archerygallery4.jpg'
import GalleryPage5 from '../../img/archerygallery9.jpg'
import GalleryPage6 from '../../img/archerygallery6.jpg'
import GalleryPage7 from '../../img/archerygallery7.jpg'
import GoogleMaps from '../googleMap/GoogleMaps'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../styles/styles.css"
import { EffectCoverflow, Pagination } from "swiper";
export default function Gallary() {
  return (
    <>
      <section className='carousel_section'>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='gallery_img' src={GalleryPage1} alt='slider img'/>
          </SwiperSlide>
          <SwiperSlide>
            <img className='gallery_img' src={GalleryPage7} alt='slider img' />
          </SwiperSlide>
          <SwiperSlide>
            <img className='gallery_img' src={GalleryPage2} alt='slider img' />
          </SwiperSlide>
          <SwiperSlide>
            <img className='gallery_img' src={GalleryPage3} alt='slider img' />
          </SwiperSlide>
          <SwiperSlide>
            <img className='gallery_img' src={GalleryPage4} alt='slider img' />
          </SwiperSlide>
          <SwiperSlide>
            <img className='gallery_img' src={GalleryPage5} alt='slider img' />
          </SwiperSlide>
          <SwiperSlide>
            <img className='gallery_img' src={GalleryPage6} alt='slider img' />
          </SwiperSlide>
          <SwiperSlide>
            <img className='gallery_img' src={GalleryPage7} alt='slider img' />
          </SwiperSlide>
          <SwiperSlide>
            <img className='gallery_img' src={GalleryPage5} alt='slider img' />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );

<GoogleMaps />
}
