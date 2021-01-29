import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import TestimonialSlider from "../Testimonials-Slider";
// import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <TestimonialSlider />
      {/*<Footer />*/}
    </>
  );
}

export default Home;
