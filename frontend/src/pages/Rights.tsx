import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Briefcase, GraduationCap, Home, Smartphone, Scale, ChevronRight } from 'lucide-react';
import { RightsCategory } from '../types';

const Rights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  const rightsCategories: RightsCategory[] = [
    {
      id: 'marriage',
      title: 'Marriage & Divorce Rights',
      description: 'Your rights in marriage, divorce, custody, and domestic matters',
      icon: 'Heart',
      laws: [
        {
          id: 'nikah-rights',
          title: 'Nikah Nama Rights',
          description: 'You have the right to negotiate and include specific conditions in your Nikah Nama, including the right to work, seek education, and specify Mehr amount.',
          urduTranslation: 'آپ کو اپنے نکاح نامے میں مخصوص شرائط پر بات چیت اور شامل کرنے کا حق ہے، بشمول کام کرنے، تعلیم حاصل کرنے، اور مہر کی رقم مقرر کرنے کا حق۔',
          legalReference: 'Muslim Family Laws Ordinance 1961, Section 5'
        },
        {
          id: 'mehr-rights',
          title: 'Mehr (Dower) Rights',
          description: 'You are entitled to receive the full Mehr amount specified in your Nikah Nama. This is your legal right and cannot be denied.',
          urduTranslation: 'آپ اپنے نکاح نامے میں بیان کردہ مکمل مہر کی رقم حاصل کرنے کی حقدار ہیں۔ یہ آپ کا قانونی حق ہے اور اس سے انکار نہیں کیا جا سکتا۔',
          legalReference: 'Muslim Personal Law (Shariat) Application Act 1937'
        },
        {
          id: 'divorce-rights',
          title: 'Divorce Rights',
          description: 'You have the right to seek Khula (divorce) through court if you include this right in your Nikah Nama or under specific circumstances.',
          urduTranslation: 'اگر آپ نے اپنے نکاح نامے میں یہ حق شامل کیا ہے یا مخصوص حالات میں، آپ کو عدالت کے ذریعے خلع (طلاق) کا حق ہے۔',
          legalReference: 'West Pakistan Family Courts Act 1964'
        }
      ]
    },
    {
      id: 'workplace',
      title: 'Workplace Rights',
      description: 'Protection against harassment, equal pay, and safe working conditions',
      icon: 'Briefcase',
      laws: [
        {
          id: 'harassment-protection',
          title: 'Protection Against Harassment',
          description: 'You are protected against sexual harassment at workplace. Employers must provide a safe environment and investigate complaints.',
          urduTranslation: 'آپ کو کام کی جگہ جنسی ہراسانی کے خلاف تحفظ حاصل ہے۔ آجروں کو محفوظ ماحول فراہم کرنا اور شکایات کی تحقیق کرنا ضروری ہے۔',
          legalReference: 'Protection of Women Against Harassment Act 2010'
        },
        {
          id: 'equal-pay',
          title: 'Equal Pay Rights',
          description: 'You have the right to equal pay for equal work regardless of gender. Wage discrimination based on gender is illegal.',
          urduTranslation: 'آپ کو جنس سے قطع نظر برابر کام کے لیے برابر تنخواہ کا حق ہے۔ جنس کی بنیاد پر اجرت میں تفریق غیر قانونی ہے۔',
          legalReference: 'Constitution of Pakistan 1973, Article 25'
        },
        {
          id: 'maternity-leave',
          title: 'Maternity Leave Rights',
          description: 'You are entitled to at least 12 weeks of paid maternity leave and job protection during pregnancy and after childbirth.',
          urduTranslation: 'آپ کو کم از کم 12 ہفتوں کی بامعاوضہ زچگی کی چھٹی اور حمل کے دوران اور بچے کی پیدائش کے بعد ملازمت کے تحفظ کا حق ہے۔',
          legalReference: 'Maternity Benefit Act 1958'
        }
      ]
    },
    {
      id: 'education',
      title: 'Education Rights',
      description: 'Right to education, access to schools and universities',
      icon: 'GraduationCap',
      laws: [
        {
          id: 'basic-education',
          title: 'Right to Education',
          description: 'Every child has the right to free and compulsory education up to age 16. Gender cannot be a barrier to education.',
          urduTranslation: 'ہر بچے کو 16 سال کی عمر تک مفت اور لازمی تعلیم کا حق ہے۔ جنس تعلیم میں رکاوٹ نہیں بن سکتی۔',
          legalReference: 'Constitution of Pakistan 1973, Article 25-A'
        },
        {
          id: 'higher-education',
          title: 'Higher Education Access',
          description: 'You have the right to pursue higher education including professional degrees. No one can stop you from getting education.',
          urduTranslation: 'آپ کو اعلیٰ تعلیم بشمول پیشہ ورانہ ڈگریاں حاصل کرنے کا حق ہے۔ کوئی آپ کو تعلیم حاصل کرنے سے نہیں روک سکتا۔',
          legalReference: 'Higher Education Commission Ordinance 2002'
        }
      ]
    },
    {
      id: 'inheritance',
      title: 'Inheritance Rights',
      description: 'Your legal share in family property and assets',
      icon: 'Home',
      laws: [
        {
          id: 'property-inheritance',
          title: 'Property Inheritance',
          description: 'You have a legal right to inherit property from your parents and spouse according to Islamic law. This right cannot be denied.',
          urduTranslation: 'اسلامی قانون کے مطابق آپ کو اپنے والدین اور شوہر سے جائیداد وراثت میں پانے کا قانونی حق ہے۔ اس حق سے انکار نہیں کیا جا سکتا۔',
          legalReference: 'Muslim Personal Law (Shariat) Application Act 1937'
        },
        {
          id: 'inheritance-share',
          title: 'Inheritance Share',
          description: 'Your share is clearly defined: 1/8 from husband if no children, 1/16 if children exist, and specific shares from parents\' property.',
          urduTranslation: 'آپ کا حصہ واضح طور پر مقرر ہے: شوہر سے 1/8 اگر اولاد نہیں، اولاد موجود ہونے پر 1/16، اور والدین کی جائیداد سے مخصوص حصے۔',
          legalReference: 'Muslim Family Laws Ordinance 1961'
        }
      ]
    },
    {
      id: 'digital',
      title: 'Digital Rights',
      description: 'Privacy, cybercrime protection, and digital harassment',
      icon: 'Smartphone',
      laws: [
        {
          id: 'cyber-harassment',
          title: 'Cyber Harassment Protection',
          description: 'You are protected against online harassment, blackmail, and non-consensual sharing of images. These are criminal offenses.',
          urduTranslation: 'آپ کو آن لائن ہراسانی، بلیک میلنگ، اور رضامندی کے بغیر تصاویر شیئر کرنے سے تحفظ حاصل ہے۔ یہ فوجداری جرائم ہیں۔',
          legalReference: 'Prevention of Electronic Crimes Act 2016'
        },
        {
          id: 'privacy-rights',
          title: 'Digital Privacy',
          description: 'Your personal data and communications are protected. Unauthorized access to your devices or accounts is illegal.',
          urduTranslation: 'آپ کا ذاتی ڈیٹا اور مواصلات محفوظ ہیں۔ آپ کے آلات یا اکاؤنٹس تک غیر مجاز رسائی غیر قانونی ہے۔',
          legalReference: 'Prevention of Electronic Crimes Act 2016, Section 21'
        }
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
      Heart,
      Briefcase,
      GraduationCap,
      Home,
      Smartphone
    };
    return icons[iconName] || BookOpen;
  };

  const selectedCategoryData = selectedCategory 
    ? rightsCategories.find(cat => cat.id === selectedCategory)
    : null;

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="bg-[#F06292] p-4 rounded-full w-fit mx-auto mb-6">
            <Scale className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
            Know Your Rights
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F06292] mb-6">
            اپنے حقوق جانیں
          </h2>
          <p className="text-xl text-[#333333] max-w-4xl mx-auto leading-relaxed mb-4">
            Understanding your legal rights is the first step toward empowerment. 
            Explore comprehensive information about your rights under Pakistani law.
          </p>
          <p className="text-lg text-[#333333] max-w-4xl mx-auto leading-relaxed">
            اپنے قانونی حقوق کو سمجھنا بااختیاری کی طرف پہلا قدم ہے۔ 
            پاکستانی قانون کے تحت اپنے حقوق کے بارے میں تفصیلی معلومات حاصل کریں۔
          </p>
          
          <div className="mt-6">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
              className="px-4 py-2 bg-[#CE93D8] text-white rounded-lg hover:bg-[#BA68C8] transition-colors"
            >
              {language === 'en' ? 'اردو میں پڑھیں' : 'Read in English'}
            </button>
          </div>
        </motion.div>

        {!selectedCategory ? (
          /* Categories Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rightsCategories.map((category, index) => {
              const Icon = getIcon(category.icon);
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer hover:shadow-xl transition-all group"
                >
                  <div className="bg-[#F06292] p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#333333] text-center mb-4">
                    {category.title}
                  </h3>
                  
                  <p className="text-[#333333] text-center leading-relaxed mb-6">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-center text-[#F06292] font-semibold group-hover:text-[#E91E63] transition-colors">
                    <span>Learn More</span>
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Category Detail */
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Back Button */}
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center gap-2 text-[#F06292] hover:text-[#E91E63] transition-colors mb-6"
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
              <span>Back to Categories</span>
            </button>

            {/* Category Header */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                {(() => {
                  const Icon = getIcon(selectedCategoryData?.icon || '');
                  return (
                    <div className="bg-[#F06292] p-4 rounded-2xl">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  );
                })()}
                <div>
                  <h2 className="text-3xl font-bold text-[#333333]">
                    {selectedCategoryData?.title}
                  </h2>
                  <p className="text-[#333333] opacity-80">
                    {selectedCategoryData?.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Laws */}
            <div className="space-y-6">
              {selectedCategoryData?.laws.map((law, index) => (
                <motion.div
                  key={law.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h3 className="text-2xl font-bold text-[#333333] mb-4">
                    {law.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-[#FAFAFA] rounded-xl">
                      <h4 className="font-semibold text-[#F06292] mb-2">
                        {language === 'en' ? 'Your Right:' : 'آپ کا حق:'}
                      </h4>
                      <p className="text-[#333333] leading-relaxed">
                        {language === 'en' ? law.description : law.urduTranslation}
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                      <h4 className="font-semibold text-blue-700 mb-2">
                        {language === 'en' ? 'Legal Reference:' : 'قانونی حوالہ:'}
                      </h4>
                      <p className="text-blue-700 text-sm">
                        {law.legalReference}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => window.location.href = '/chat'}
                className="flex-1 bg-[#F06292] text-white p-4 rounded-xl font-semibold hover:bg-[#E91E63] transition-colors"
              >
                {language === 'en' ? 'Ask AI About This Right' : 'اے آئی سے اس حق کے بارے میں پوچھیں'}
              </button>
              <button
                onClick={() => window.location.href = '/lawyers'}
                className="flex-1 bg-[#CE93D8] text-white p-4 rounded-xl font-semibold hover:bg-[#BA68C8] transition-colors"
              >
                {language === 'en' ? 'Consult a Lawyer' : 'وکیل سے مشورہ کریں'}
              </button>
            </div>
          </motion.div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-[#FFCA28]">
          <div className="flex items-start gap-3">
            <BookOpen className="h-6 w-6 text-[#FFCA28] mt-1" />
            <div>
              <h4 className="font-semibold text-[#333333] mb-2">
                {language === 'en' ? 'Important Disclaimer' : 'اہم اعلان'}
              </h4>
              <p className="text-[#333333] text-sm leading-relaxed">
                {language === 'en' 
                  ? 'This information is for educational purposes only and does not constitute legal advice. Laws may change and individual cases may vary. For specific legal guidance, please consult with a qualified lawyer.'
                  : 'یہ معلومات صرف تعلیمی مقاصد کے لیے ہیں اور قانونی مشورہ نہیں ہیں۔ قوانین تبدیل ہو سکتے ہیں اور انفرادی کیسز مختلف ہو سکتے ہیں۔ مخصوص قانونی رہنمائی کے لیے، برائے کرم کسی قابل وکیل سے مشورہ کریں۔'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rights;