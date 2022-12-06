import React from 'react'
import OurAthletes from '../OurAthletes/OurAthletes';
import GoogleMaps from '../googleMap/GoogleMaps';
import LittleAboutus from '../LittleAboutus/LittleAboutus';
import GallerySection from '../GallerySection/GallerySection';
import HomeCarousel from '../HeroCarousel/HomeCarousel';
import NewsSection from '../NewsSection/NewsSection';

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <NewsSection />
      <LittleAboutus />
      <GallerySection />
      <OurAthletes />
      <GoogleMaps />
    </div>
  )
}
