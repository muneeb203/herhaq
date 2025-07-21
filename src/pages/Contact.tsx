import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react';
import Button from '../components/UI/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    anonymous: false
  });
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    alert(language === 'en' 
      ? 'Thank you for your message! We will get back to you within 24 hours.' 
      : 'آپ کے پیغام کا شکریہ! ہم 24 گھنٹوں کے اندر آپ سے رابطہ کریں گے۔'
    );
    setFormData({ name: '', email: '', phone: '', subject: '', message: '', anonymous: false });
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

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="bg-[#F06292] p-4 rounded-full w-fit mx-auto mb-6">
            <MessageCircle className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
            Contact & Support
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F06292] mb-6">
            رابطہ اور سپورٹ
          </h2>
          <p className="text-xl text-[#333333] max-w-4xl mx-auto leading-relaxed mb-4">
            We're here to help and support you. Reach out to us through any of the channels below.
          </p>
          <p className="text-lg text-[#333333] max-w-4xl mx-auto leading-relaxed">
            ہم آپ کی مدد اور سپورٹ کے لیے یہاں ہیں۔ نیچے دیے گئے کسی بھی ذریعے سے ہم سے رابطہ کریں۔
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Emergency Contacts */}
            <div className="bg-[#E53935] rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'en' ? 'Emergency Help' : 'ایمرجنسی مدد'}
              </h3>
              <div className="space-y-3">
                <a
<<<<<<< HEAD
                  href="https://wa.me/+923338505201?text=EMERGENCY%20HELP%20NEEDED"
=======
                  href="https://wa.me/+923001234567?text=EMERGENCY%20HELP%20NEEDED"
>>>>>>> dad3785788b24799a72a6a9969b18bea9d03fa1c
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Emergency WhatsApp</p>
<<<<<<< HEAD
                    <p className="text-sm">+92 333 8505201</p>
=======
                    <p className="text-sm">+92 300 1234567</p>
>>>>>>> dad3785788b24799a72a6a9969b18bea9d03fa1c
                  </div>
                </a>
                <a
                  href="tel:1099"
                  className="flex items-center gap-3 p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Women Helpline</p>
                    <p className="text-sm">1099</p>
                  </div>
                </a>
                <a
                  href="tel:15"
                  className="flex items-center gap-3 p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Police</p>
                    <p className="text-sm">15</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Regular Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">
                {language === 'en' ? 'Get in Touch' : 'رابطے میں رہیں'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#F06292] p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">Email</p>
<<<<<<< HEAD
                    <p className="text-[#333333]">momna164@gmail.com</p>
=======
                    <p className="text-[#333333]">help@haq.org.pk</p>
>>>>>>> dad3785788b24799a72a6a9969b18bea9d03fa1c
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#CE93D8] p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">Support Line</p>
                    <p className="text-[#333333]">+92 21 1234567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#66BB6A] p-2 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">WhatsApp</p>
                    <p className="text-[#333333]">+92 300 1234567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#FFCA28] p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">Address</p>
<<<<<<< HEAD
                    <p className="text-[#333333]">Islamabad, Pakistan</p>
=======
                    <p className="text-[#333333]">Karachi, Pakistan</p>
>>>>>>> dad3785788b24799a72a6a9969b18bea9d03fa1c
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">
                {language === 'en' ? 'Support Hours' : 'سپورٹ کے اوقات'}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#333333]">{language === 'en' ? 'Monday - Friday' : 'پیر - جمعہ'}</span>
                  <span className="text-[#F06292] font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#333333]">{language === 'en' ? 'Saturday' : 'ہفتہ'}</span>
                  <span className="text-[#F06292] font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#333333]">{language === 'en' ? 'Sunday' : 'اتوار'}</span>
                  <span className="text-gray-500">{language === 'en' ? 'Closed' : 'بند'}</span>
                </div>
                <div className="mt-4 p-3 bg-[#FAFAFA] rounded-lg">
                  <div className="flex items-center gap-2 text-[#66BB6A]">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {language === 'en' ? 'Emergency Support: 24/7' : 'ایمرجنسی سپورٹ: 24/7'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-[#333333] mb-6">
                {language === 'en' ? 'Send us a Message' : 'ہمیں پیغام بھیجیں'}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#333333] mb-2">
                      {language === 'en' ? 'Name' : 'نام'} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required={!formData.anonymous}
                      disabled={formData.anonymous}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none disabled:bg-gray-100"
                      placeholder={formData.anonymous ? (language === 'en' ? 'Anonymous' : 'گمنام') : (language === 'en' ? 'Your name' : 'آپ کا نام')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#333333] mb-2">
                      {language === 'en' ? 'Email' : 'ای میل'} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
                      placeholder={language === 'en' ? 'your.email@example.com' : 'آپ کا ای میل'}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#333333] mb-2">
                      {language === 'en' ? 'Phone (Optional)' : 'فون (اختیاری)'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#333333] mb-2">
                      {language === 'en' ? 'Subject' : 'موضوع'} *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
                    >
                      <option value="">{language === 'en' ? 'Select a subject' : 'موضوع منتخب کریں'}</option>
                      <option value="legal-question">{language === 'en' ? 'Legal Question' : 'قانونی سوال'}</option>
                      <option value="technical-support">{language === 'en' ? 'Technical Support' : 'تکنیکی سپورٹ'}</option>
                      <option value="lawyer-inquiry">{language === 'en' ? 'Lawyer Inquiry' : 'وکیل کی انکوائری'}</option>
                      <option value="feedback">{language === 'en' ? 'Feedback' : 'رائے'}</option>
                      <option value="partnership">{language === 'en' ? 'Partnership' : 'شراکت'}</option>
                      <option value="other">{language === 'en' ? 'Other' : 'دیگر'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    {language === 'en' ? 'Message' : 'پیغام'} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none resize-none"
                    placeholder={language === 'en' ? 'Please describe your question or concern in detail...' : 'براہ کرم اپنے سوال یا پریشانی کی تفصیل بیان کریں...'}
                    dir={language === 'ur' ? 'rtl' : 'ltr'}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleInputChange}
                    className="text-[#F06292] focus:ring-[#F06292]"
                  />
                  <label htmlFor="anonymous" className="text-[#333333]">
                    {language === 'en' ? 'Send anonymously (we cannot reply to anonymous messages)' : 'گمنام طور پر بھیجیں (ہم گمنام پیغامات کا جواب نہیں دے سکتے)'}
                  </label>
                </div>

                <div className="p-4 bg-[#FAFAFA] rounded-lg">
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {language === 'en' 
                      ? 'Your privacy is important to us. We will only use your information to respond to your inquiry and will never share it with third parties without your consent.'
                      : 'آپ کی رازداری ہمارے لیے اہم ہے۔ ہم آپ کی معلومات صرف آپ کی انکوائری کا جواب دینے کے لیے استعمال کریں گے اور آپ کی رضامندی کے بغیر کبھی کسی تیسرے فریق کے ساتھ شیئر نہیں کریں گے۔'
                    }
                  </p>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  className="w-full"
                >
                  {language === 'en' ? 'Send Message' : 'پیغام بھیجیں'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-3xl font-bold text-[#333333] mb-8 text-center">
            {language === 'en' ? 'Frequently Asked Questions' : 'اکثر پوچھے جانے والے سوالات'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Is Haq really free to use?',
                urduQuestion: 'کیا حق واقعی استعمال کرنے کے لیے مفت ہے؟',
                answer: 'Yes, all our AI services, document scanning, and basic features are completely free. Some lawyer consultations may have fees.',
                urduAnswer: 'جی ہاں، ہماری تمام اے آئی خدمات، دستاویز اسکیننگ، اور بنیادی فیچرز مکمل طور پر مفت ہیں۔ کچھ وکیل کی مشاورت میں فیس ہو سکتی ہے۔'
              },
              {
                question: 'How do I ensure my privacy?',
                urduQuestion: 'میں اپنی رازداری کو کیسے یقینی بناؤں؟',
                answer: 'All conversations are encrypted and anonymous. We never store personal details unless you choose to share them.',
                urduAnswer: 'تمام گفتگو خفیہ اور گمنام ہے۔ ہم کبھی ذاتی تفصیلات محفوظ نہیں کرتے جب تک آپ انہیں شیئر کرنے کا انتخاب نہ کریں۔'
              },
              {
                question: 'Can I use Haq in Urdu?',
                urduQuestion: 'کیا میں حق کو اردو میں استعمال کر سکتی ہوں؟',
                answer: 'Yes, our AI assistant understands and responds in both Urdu and English.',
                urduAnswer: 'جی ہاں، ہمارا اے آئی اسسٹنٹ اردو اور انگریزی دونوں میں سمجھتا اور جواب دیتا ہے۔'
              },
              {
                question: 'What if I need emergency help?',
                urduQuestion: 'اگر مجھے ایمرجنسی مدد کی ضرورت ہو تو کیا کریں؟',
                answer: 'Use our emergency WhatsApp system or call the emergency numbers provided. Help is available 24/7.',
                urduAnswer: 'ہمارا ایمرجنسی واٹس ایپ سسٹم استعمال کریں یا فراہم کردہ ایمرجنسی نمبرز پر کال کریں۔ مدد 24/7 دستیاب ہے۔'
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-[#FAFAFA] rounded-xl">
                <h4 className="font-bold text-[#333333] mb-3">
                  {language === 'en' ? faq.question : faq.urduQuestion}
                </h4>
                <p className="text-[#333333] leading-relaxed">
                  {language === 'en' ? faq.answer : faq.urduAnswer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;