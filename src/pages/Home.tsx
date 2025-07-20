import React from 'react';
import HeroCarousel from '../components/Home/HeroCarousel';
import AboutSection from '../components/Home/AboutSection';
import FeaturesGrid from '../components/Home/FeaturesGrid';
import TestimonialsSlider from '../components/Home/TestimonialsSlider';
import CTASection from '../components/Home/CTASection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <FeaturesGrid />
      <TestimonialsSlider />
      <CTASection />
    </div>
  );
};

export default Home;