import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageCircle, Scan, Scale } from 'lucide-react';
import Button from '../UI/Button';

const slides = [
  {
    id: 1,
    title: "Facing Workplace Harassment?",
    urduTitle: "کام کی جگہ ہراسانی کا سامنا؟",
    subtitle: "Get instant legal guidance and know your rights",
    urduSubtitle: "فوری قانونی رہنمائی حاصل کریں اور اپنے حقوق جانیں",
    cta: "Ask AI Assistant",
    urduCta: "اے آئی سے پوچھیں",
    link: "/chat",
    icon: MessageCircle,
    bgImage: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Scan Your Nikah Nama",
    urduTitle: "اپنا نکاح نامہ اسکین کریں",
    subtitle: "Discover your matrimonial rights in simple language",
    urduSubtitle: "آسان زبان میں اپنے ازدواجی حقوق دریافت کریں",
    cta: "Scan Document",
    urduCta: "دستاویز اسکین کریں",
    link: "/scan",
    icon: Scan,
    bgImage: "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Get Connected to a Lawyer",
    urduTitle: "وکیل سے رابطہ کریں",
    subtitle: "Find trusted legal professionals at discounted rates",
    urduSubtitle: "کم نرخوں پر بھروسہ مند قانونی ماہرین تلاش کریں",
    cta: "Find Lawyer",
    urduCta: "وکیل تلاش کریں",
    link: "/lawyers",
    icon: Scale,
    bgImage: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={currentSlideData.bgImage}
            alt={currentSlideData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center sm:text-left"
            >
              <div className="flex items-center justify-center sm:justify-start mb-4">
                <div className="bg-[#F06292] p-3 rounded-full mr-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <button
                  onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
                  className="text-white/80 hover:text-white text-sm border border-white/30 px-3 py-1 rounded-md transition-colors"
                >
                  {language === 'en' ? 'اردو' : 'English'}
                </button>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {language === 'en' ? currentSlideData.title : currentSlideData.urduTitle}
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                {language === 'en' ? currentSlideData.subtitle : currentSlideData.urduSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.location.href = currentSlideData.link}
                  className="text-lg px-8 py-4"
                >
                  {language === 'en' ? currentSlideData.cta : currentSlideData.urduCta}
                </Button>
                
                <Button
                  variant="accent"
                  size="lg"
                  onClick={() => window.location.href = '/emergency'}
                  className="text-lg px-8 py-4"
                >
                  {language === 'en' ? 'Emergency Help' : 'ایمرجنسی مدد'}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#FFCA28]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;