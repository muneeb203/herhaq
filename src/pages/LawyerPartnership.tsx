import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart, DollarSign, Calendar, Send, CheckCircle } from 'lucide-react';
import Button from '../components/UI/Button';

const LawyerPartnership: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    barNumber: '',
    experience: '',
    city: '',
    specializations: [],
    languages: [],
    proBono: false,
    availability: '',
    motivation: ''
  });
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(language === 'en' 
      ? 'Thank you for your interest! We will review your application and get back to you within 3-5 business days.' 
      : 'آپ کی دلچسپی کا شکریہ! ہم آپ کی درخواست کا جائزہ لیں گے اور 3-5 کاروباری دنوں میں آپ سے رابطہ کریں گے۔'
    );
    setFormData({
      name: '', email: '', phone: '', barNumber: '', experience: '', city: '',
      specializations: [], languages: [], proBono: false, availability: '', motivation: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleArrayChange = (field: 'specializations' | 'languages', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const benefits = [
    {
      icon: Heart,
      title: 'Make a Difference',
      urdu: 'فرق پیدا کریں',
      description: 'Help women access justice and understand their rights',
      urduDesc: 'خواتین کو انصاف تک رسائی اور اپنے حقوق سمجھنے میں مدد کریں'
    },
    {
      icon: Users,
      title: 'Growing Client Base',
      urdu: 'بڑھتا ہوا کلائنٹ بیس',
      description: 'Connect with clients who specifically need your expertise',
      urduDesc: 'ایسے کلائنٹس سے جڑیں جنہیں خاص طور پر آپ کی مہارت کی ضرورت ہے'
    },
    {
      icon: Award,
      title: 'Professional Recognition',
      urdu: 'پیشہ ورانہ پہچان',
      description: 'Build your reputation as a women\'s rights advocate',
      urduDesc: 'خواتین کے حقوق کے وکیل کے طور پر اپنی شہرت بنائیں'
    },
    {
      icon: DollarSign,
      title: 'Flexible Pricing',
      urdu: 'لچکدار قیمت',
      description: 'Set your own rates and offer pro bono cases as you choose',
      urduDesc: 'اپنی مرضی کے مطابق ریٹ مقرر کریں اور اپنی پسند کے مطابق مفت کیسز پیش کریں'
    }
  ];

  const specializations = [
    'Family Law', 'Women Rights', 'Employment Law', 'Harassment Cases', 
    'Divorce Cases', 'Property Law', 'Cyber Crime', 'Digital Rights', 
    'Inheritance Rights', 'Constitutional Law'
  ];

  const languages = ['Urdu', 'English', 'Punjabi', 'Sindhi', 'Pashto', 'Balochi'];
  const cities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta'];

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="bg-[#66BB6A] p-4 rounded-full w-fit mx-auto mb-6">
            <Users className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
            Join Our Legal Network
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F06292] mb-6">
            ہمارے قانونی نیٹ ورک میں شامل ہوں
          </h2>
          <p className="text-xl text-[#333333] max-w-4xl mx-auto leading-relaxed mb-4">
            Partner with Haq to help Pakistani women access justice and legal representation. 
            Make a meaningful impact while growing your practice.
          </p>
          <p className="text-lg text-[#333333] max-w-4xl mx-auto leading-relaxed">
            پاکستانی خواتین کو انصاف اور قانونی نمائندگی تک رسائی میں مدد کے لیے حق کے ساتھ شراکت کریں۔ 
            اپنی پریکٹس بڑھاتے ہوئے بامعنی اثر ڈالیں۔
          </p>
          
          <div className="mt-6">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
              className="px-4 py-2 bg-[#CE93D8] text-white rounded-lg hover:bg-[#BA68C8] transition-colors"
            >
              {language === 'en' ? 'اردو' : 'English'}
            </button>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-[#333333] text-center mb-8">
            {language === 'en' ? 'Why Partner with Haq?' : 'حق کے ساتھ شراکت کیوں؟'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="bg-[#F06292] p-4 rounded-full w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#333333] mb-2">
                    {language === 'en' ? benefit.title : benefit.urdu}
                  </h4>
                  <p className="text-[#333333] text-sm leading-relaxed">
                    {language === 'en' ? benefit.description : benefit.urduDesc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-3xl font-bold text-[#333333] mb-8 text-center">
            {language === 'en' ? 'Partnership Application' : 'شراکت کی درخواست'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-xl font-semibold text-[#333333] mb-4">
                {language === 'en' ? 'Personal Information' : 'ذاتی معلومات'}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    {language === 'en' ? 'Full Name' : 'مکمل نام'} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
                    placeholder={language === 'en' ? 'Advocate [Your Name]' : 'ایڈووکیٹ [آپ کا نام]'}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    {language === 'en' ? 'Email Address' : 'ای میل ایڈریس'} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    {language === 'en' ? 'Phone Number' : 'فون نمبر'} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
                    placeholder="+92 300 1234567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    {language === 'en' ? 'Bar Registration Number' : 'بار رجسٹریشن نمبر'} *
                  </label>
                  <input
                    type="text"
                    name="barNumber"
                    value={formData.barNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
                    placeholder={language === 'en' ? 'Your bar registration number' : 'آپ کا بار رجسٹریشن نمبر'}
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-xl font-semibold text-[#333333] mb-4">
                {language === 'en' ? 'Professional Information' : 'پیشہ ورانہ معلومات'}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    {language === 'en' ? 'Years of Experience' : 'تجربے کے سال'} *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
                  >
                    <option value="">{language === 'en' ? 'Select experience' : 'تجربہ منتخب کریں'}</option>
                    <option value="1-3">1-3 years</option>
                    <option value="4-7">4-7 years</option>
                    <option value="8-15">8-15 years</option>
                    <option value="15+">15+ years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    {language === 'en' ? 'Primary City' : 'بنیادی شہر'} *
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
                  >
                    <option value="">{language === 'en' ? 'Select city' : 'شہر منتخب کریں'}</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    {language === 'en' ? 'Specializations' : 'مہارتیں'} *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {specializations.map(spec => (
                      <label key={spec} className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="checkbox"
                          checked={formData.specializations.includes(spec)}
                          onChange={() => handleArrayChange('specializations', spec)}
                          className="text-[#F06292] focus:ring-[#F06292]"
                        />
                        <span className="text-sm">{spec}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    {language === 'en' ? 'Languages' : 'زبانیں'} *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                    {languages.map(lang => (
                      <label key={lang} className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="checkbox"
                          checked={formData.languages.includes(lang)}
                          onChange={() => handleArrayChange('languages', lang)}
                          className="text-[#F06292] focus:ring-[#F06292]"
                        />
                        <span className="text-sm">{lang}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Availability and Motivation */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#333333] mb-2">
                  {language === 'en' ? 'Availability' : 'دستیابی'} *
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
                >
                  <option value="">{language === 'en' ? 'Select availability' : 'دستیابی منتخب کریں'}</option>
                  <option value="full-time">{language === 'en' ? 'Full-time (40+ hours/week)' : 'فل ٹائم (40+ گھنٹے/ہفتہ)'}</option>
                  <option value="part-time">{language === 'en' ? 'Part-time (20-40 hours/week)' : 'پارٹ ٹائم (20-40 گھنٹے/ہفتہ)'}</option>
                  <option value="occasional">{language === 'en' ? 'Occasional (As needed)' : 'کبھی کبھار (ضرورت کے مطابق)'}</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="proBono"
                  name="proBono"
                  checked={formData.proBono}
                  onChange={handleInputChange}
                  className="text-[#F06292] focus:ring-[#F06292]"
                />
                <label htmlFor="proBono" className="text-[#333333]">
                  {language === 'en' ? 'I am willing to take pro bono cases for women in need' : 'میں ضرورت مند خواتین کے لیے مفت کیسز لینے کو تیار ہوں'}
                </label>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#333333] mb-2">
                  {language === 'en' ? 'Why do you want to join Haq?' : 'آپ حق میں کیوں شامل ہونا چاہتے ہیں؟'} *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none resize-none"
                  placeholder={language === 'en' ? 'Tell us about your motivation to help women access justice...' : 'خواتین کو انصاف تک رسائی میں مدد کرنے کی اپنی ترغیب کے بارے میں بتائیں...'}
                  dir={language === 'ur' ? 'rtl' : 'ltr'}
                />
              </div>
            </div>

            <div className="p-4 bg-[#FAFAFA] rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#66BB6A] mt-1" />
                <div>
                  <h5 className="font-semibold text-[#333333] mb-2">
                    {language === 'en' ? 'Application Process' : 'درخواست کا عمل'}
                  </h5>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {language === 'en' 
                      ? 'After submitting your application, our team will review your credentials and contact you within 3-5 business days. If approved, you will go through a brief orientation and verification process before being added to our network.'
                      : 'اپنی درخواست جمع کرنے کے بعد، ہماری ٹیم آپ کی اسناد کا جائزہ لے گی اور 3-5 کاروباری دنوں میں آپ سے رابطہ کرے گی۔ اگر منظور ہو جائے تو آپ کو ہمارے نیٹ ورک میں شامل کرنے سے پہلے ایک مختصر توجیہ اور تصدیقی عمل سے گزرنا ہوگا۔'
                    }
                  </p>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={Send}
              className="w-full"
              disabled={!formData.name || !formData.email || !formData.barNumber || formData.specializations.length === 0}
            >
              {language === 'en' ? 'Submit Application' : 'درخواست جمع کریں'}
            </Button>
          </form>
        </motion.div>

        {/* Contact for Questions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-gradient-to-r from-[#F06292] to-[#CE93D8] rounded-2xl shadow-lg p-8 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Have Questions?' : 'سوالات ہیں؟'}
          </h3>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Contact our partnership team for any questions about joining our legal network'
              : 'ہمارے قانونی نیٹ ورک میں شامل ہونے کے بارے میں کسی بھی سوال کے لیے ہماری پارٹنرشپ ٹیم سے رابطہ کریں'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="accent"
              icon={Calendar}
              onClick={() => window.location.href = 'mailto:partnerships@haq.org.pk'}
              className="text-lg px-8 py-4"
            >
              {language === 'en' ? 'Email Partnership Team' : 'پارٹنرشپ ٹیم کو ای میل کریں'}
            </Button>
            <Button
              variant="success"
              icon={Calendar}
              onClick={() => window.open('https://wa.me/+923001234567?text=Partnership Inquiry', '_blank')}
              className="text-lg px-8 py-4"
            >
              {language === 'en' ? 'WhatsApp Us' : 'واٹس ایپ کریں'}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LawyerPartnership;