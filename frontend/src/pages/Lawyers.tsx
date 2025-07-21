import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Users, Calendar, Phone, MessageCircle, Filter } from 'lucide-react';
import { Lawyer } from '../types';
import Button from '../components/UI/Button';

const Lawyers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [showProBonoOnly, setShowProBonoOnly] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  const lawyers: Lawyer[] = [
    {
      id: '1',
      name: 'Advocate Fatima Khan',
      city: 'Karachi',
      language: ['Urdu', 'English'],
      gender: 'Female',
      specialization: ['Family Law', 'Women Rights'],
      rating: 4.8,
      proBono: true,
      avatar: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: 8
    },
    {
      id: '2',
      name: 'Advocate Sarah Ahmed',
      city: 'Lahore',
      language: ['Urdu', 'English', 'Punjabi'],
      gender: 'Female',
      specialization: ['Employment Law', 'Harassment Cases'],
      rating: 4.9,
      proBono: false,
      avatar: 'https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: 12
    },
    {
      id: '3',
      name: 'Advocate Ayesha Malik',
      city: 'Islamabad',
      language: ['Urdu', 'English'],
      gender: 'Female',
      specialization: ['Family Law', 'Divorce Cases'],
      rating: 4.7,
      proBono: true,
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: 15
    },
    {
      id: '4',
      name: 'Advocate Zara Hassan',
      city: 'Karachi',
      language: ['Urdu', 'English', 'Sindhi'],
      gender: 'Female',
      specialization: ['Women Rights', 'Property Law'],
      rating: 4.6,
      proBono: false,
      avatar: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: 10
    },
    {
      id: '5',
      name: 'Advocate Maria Ali',
      city: 'Lahore',
      language: ['Urdu', 'English'],
      gender: 'Female',
      specialization: ['Cyber Crime', 'Digital Rights'],
      rating: 4.9,
      proBono: true,
      avatar: 'https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: 6
    },
    {
      id: '6',
      name: 'Advocate Nadia Shah',
      city: 'Faisalabad',
      language: ['Urdu', 'Punjabi'],
      gender: 'Female',
      specialization: ['Family Law', 'Inheritance'],
      rating: 4.5,
      proBono: false,
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: 9
    }
  ];

  const cities = ['Karachi', 'Lahore', 'Islamabad', 'Faisalabad', 'Rawalpindi', 'Multan'];
  const languages = ['Urdu', 'English', 'Punjabi', 'Sindhi', 'Pashto'];
  const specializations = ['Family Law', 'Women Rights', 'Employment Law', 'Harassment Cases', 'Divorce Cases', 'Property Law', 'Cyber Crime', 'Digital Rights', 'Inheritance'];

  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lawyer.specialization.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCity = !selectedCity || lawyer.city === selectedCity;
    const matchesLanguage = !selectedLanguage || lawyer.language.includes(selectedLanguage);
    const matchesGender = !selectedGender || lawyer.gender === selectedGender;
    const matchesSpecialization = !selectedSpecialization || lawyer.specialization.includes(selectedSpecialization);
    const matchesProBono = !showProBonoOnly || lawyer.proBono;

    return matchesSearch && matchesCity && matchesLanguage && matchesGender && matchesSpecialization && matchesProBono;
  });

  const bookConsultation = (lawyer: Lawyer) => {
    const message = `Hello ${lawyer.name}, I would like to book a consultation regarding my legal matter. I found your profile through the Haq platform.`;
    const whatsappUrl = `https://wa.me/+923001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Find a Lawyer
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F06292] mb-6">
            وکیل تلاش کریں
          </h2>
          <p className="text-xl text-[#333333] max-w-4xl mx-auto leading-relaxed mb-4">
            Connect with verified female lawyers who understand your needs and offer services at discounted rates
          </p>
          <p className="text-lg text-[#333333] max-w-4xl mx-auto leading-relaxed">
            تصدیق شدہ خاتون وکیلوں سے رابطہ کریں جو آپ کی ضروریات سمجھتی ہیں اور کم نرخوں پر خدمات فراہم کرتی ہیں
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

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={language === 'en' ? 'Search lawyers by name or specialization...' : 'نام یا مہارت کے ذریعے وکیل تلاش کریں...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
            >
              <option value="">{language === 'en' ? 'All Cities' : 'تمام شہر'}</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
            >
              <option value="">{language === 'en' ? 'All Languages' : 'تمام زبانیں'}</option>
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>

            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
            >
              <option value="">{language === 'en' ? 'All Genders' : 'تمام اصناف'}</option>
              <option value="Female">{language === 'en' ? 'Female' : 'خاتون'}</option>
              <option value="Male">{language === 'en' ? 'Male' : 'مرد'}</option>
            </select>

            <select
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
            >
              <option value="">{language === 'en' ? 'All Specializations' : 'تمام مہارتیں'}</option>
              {specializations.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>

            <label className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="checkbox"
                checked={showProBonoOnly}
                onChange={(e) => setShowProBonoOnly(e.target.checked)}
                className="text-[#F06292] focus:ring-[#F06292]"
              />
              <span className="text-sm">{language === 'en' ? 'Pro Bono Only' : 'صرف مفت'}</span>
            </label>

            <div className="flex items-center justify-center">
              <Filter className="h-5 w-5 text-[#F06292]" />
              <span className="ml-2 text-[#F06292] font-medium">
                {filteredLawyers.length} {language === 'en' ? 'Results' : 'نتائج'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Lawyers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLawyers.map((lawyer, index) => (
            <motion.div
              key={lawyer.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={lawyer.avatar}
                  alt={lawyer.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {lawyer.proBono && (
                    <span className="bg-[#66BB6A] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Pro Bono
                    </span>
                  )}
                  <span className="bg-[#F06292] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {lawyer.gender === 'Female' ? (language === 'en' ? 'Female' : 'خاتون') : (language === 'en' ? 'Male' : 'مرد')}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#333333] mb-2">
                  {lawyer.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-[#CE93D8]" />
                  <span className="text-[#333333]">{lawyer.city}</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-4 w-4 text-[#FFCA28] fill-current" />
                  <span className="text-[#333333] font-medium">{lawyer.rating}</span>
                  <span className="text-gray-500">({lawyer.experience} years exp.)</span>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    {language === 'en' ? 'Languages:' : 'زبانیں:'}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {lawyer.language.map(lang => (
                      <span key={lang} className="bg-[#FAFAFA] text-[#333333] px-2 py-1 rounded-full text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">
                    {language === 'en' ? 'Specializations:' : 'مہارتیں:'}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {lawyer.specialization.map(spec => (
                      <span key={spec} className="bg-[#CE93D8] text-white px-2 py-1 rounded-full text-xs">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    variant="primary"
                    icon={Calendar}
                    onClick={() => bookConsultation(lawyer)}
                    className="w-full"
                  >
                    {language === 'en' ? 'Book Consultation' : 'مشاورت بک کریں'}
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      icon={Phone}
                      onClick={() => window.open(`tel:+923001234567`, '_blank')}
                      className="flex-1 text-sm"
                    >
                      {language === 'en' ? 'Call' : 'کال'}
                    </Button>
                    <Button
                      variant="accent"
                      icon={MessageCircle}
                      onClick={() => bookConsultation(lawyer)}
                      className="flex-1 text-sm"
                    >
                      {language === 'en' ? 'WhatsApp' : 'واٹس ایپ'}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredLawyers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="bg-[#FAFAFA] p-8 rounded-2xl">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#333333] mb-4">
                {language === 'en' ? 'No Lawyers Found' : 'کوئی وکیل نہیں ملا'}
              </h3>
              <p className="text-[#333333] mb-6">
                {language === 'en' 
                  ? 'Try adjusting your search criteria or contact us to add more lawyers in your area.'
                  : 'اپنے تلاش کے معیار کو تبدیل کرنے کی کوشش کریں یا اپنے علاقے میں مزید وکیل شامل کرنے کے لیے ہم سے رابطہ کریں۔'
                }
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCity('');
                  setSelectedLanguage('');
                  setSelectedGender('');
                  setSelectedSpecialization('');
                  setShowProBonoOnly(false);
                }}
              >
                {language === 'en' ? 'Clear Filters' : 'فلٹرز صاف کریں'}
              </Button>
            </div>
          </motion.div>
        )}

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-gradient-to-r from-[#F06292] to-[#CE93D8] rounded-2xl shadow-lg p-8 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Are you a lawyer?' : 'کیا آپ وکیل ہیں؟'}
          </h3>
          <p className="text-xl mb-6">
            {language === 'en' 
              ? 'Join our network of legal professionals and help women access justice'
              : 'قانونی پیشہ ور افراد کے ہمارے نیٹ ورک میں شامل ہوں اور خواتین کو انصاف تک رسائی میں مدد کریں'
            }
          </p>
          <Button
            variant="accent"
            size="lg"
            onClick={() => window.location.href = '/lawyer-partnership'}
            className="text-lg px-8 py-4"
          >
            {language === 'en' ? 'Join Our Network' : 'ہمارے نیٹ ورک میں شامل ہوں'}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Lawyers;