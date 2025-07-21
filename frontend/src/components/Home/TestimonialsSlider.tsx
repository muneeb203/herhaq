import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Ayesha K.",
    urduName: "عائشہ کے",
    city: "Karachi",
    story: "Haq helped me understand my Nikah Nama rights when I was facing issues. The AI explained everything in simple Urdu, and I found a great lawyer through the platform.",
    urduStory: "حق نے مجھے میرے نکاح نامہ کے حقوق سمجھنے میں مدد کی جب میں مسائل کا سامنا کر رہی تھی۔ اے آئی نے سب کچھ آسان اردو میں سمجھایا، اور میں نے پلیٹ فارم کے ذریعے ایک بہترین وکیل تلاش کیا۔",
    rating: 5,
    category: "Marriage Rights"
  },
  {
    id: 2,
    name: "Fatima S.",
    urduName: "فاطمہ ایس",
    city: "Lahore",
    story: "The emergency WhatsApp feature saved me during a difficult situation. My family received my location and summary immediately. I felt safe knowing help was available.",
    urduStory: "ایمرجنسی واٹس ایپ فیچر نے مشکل حالات میں میری جان بچائی۔ میرے خاندان کو فوری طور پر میرا مقام اور خلاصہ مل گیا۔ یہ جان کر محفوظ محسوس کیا کہ مدد دستیاب ہے۔",
    rating: 5,
    category: "Emergency Help"
  },
  {
    id: 3,
    name: "Zara M.",
    urduName: "زارا ایم",
    city: "Islamabad",
    story: "I was being harassed at work and didn't know my rights. Haq's AI guided me through the legal process and connected me with a female lawyer who understood my situation.",
    urduStory: "مجھے کام کی جگہ ہراساں کیا جا رہا تھا اور میں اپنے حقوق نہیں جانتی تھی۔ حق کے اے آئی نے قانونی عمل میں میری رہنمائی کی اور مجھے ایک خاتون وکیل سے ملایا جو میرے حالات سمجھتی تھی۔",
    rating: 5,
    category: "Workplace Rights"
  },
  {
    id: 4,
    name: "Mariam A.",
    urduName: "مریم اے",
    city: "Faisalabad",
    story: "The inheritance calculator helped me understand what I was entitled to. The platform made complex legal jargon simple to understand in both English and Urdu.",
    urduStory: "وراثت کیلکولیٹر نے مجھے سمجھنے میں مدد کی کہ میں کس چیز کی حقدار تھی۔ پلیٹ فارم نے پیچیدہ قانونی اصطلاحات کو انگریزی اور اردو دونوں میں سمجھنا آسان بنا دیا۔",
    rating: 5,
    category: "Inheritance Rights"
  }
];

const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F06292] to-[#CE93D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Real Stories, Real Impact
          </h2>
          <div className="text-center mb-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-white/90">
              حقیقی کہانیاں، حقیقی اثرات
            </h3>
          </div>
          <button
            onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
            className="text-white/80 hover:text-white text-sm border border-white/30 px-4 py-2 rounded-md transition-colors"
          >
            {language === 'en' ? 'اردو میں پڑھیں' : 'Read in English'}
          </button>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <div className="text-center mb-8">
                <div className="bg-[#FFCA28] p-3 rounded-full w-fit mx-auto mb-4">
                  <Quote className="h-8 w-8 text-[#333333]" />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#FFCA28] fill-current" />
                  ))}
                </div>
                <span className="inline-block bg-[#CE93D8] text-white px-4 py-2 rounded-full text-sm font-medium">
                  {currentTestimonial.category}
                </span>
              </div>

              <blockquote className="text-lg md:text-xl text-[#333333] text-center leading-relaxed mb-8">
                "{language === 'en' ? currentTestimonial.story : currentTestimonial.urduStory}"
              </blockquote>

              <div className="text-center">
                <p className="font-bold text-[#333333] text-lg">
                  {language === 'en' ? currentTestimonial.name : currentTestimonial.urduName}
                </p>
                <p className="text-[#666666]">{currentTestimonial.city}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#FFCA28]' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;