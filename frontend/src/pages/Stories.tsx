import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, MessageCircle, Plus, Calendar, User, Eye } from 'lucide-react';
import { Story } from '../types';
import Button from '../components/UI/Button';

const Stories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'read' | 'share'>('read');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [language, setLanguage] = useState<'en' | 'ur'>('en');
  
  const [newStory, setNewStory] = useState({
    title: '',
    category: '',
    content: '',
    anonymous: true
  });

  const stories: Story[] = [
    {
      id: '1',
      title: 'Finding My Voice Through Legal Rights',
      category: 'Workplace Rights',
      content: 'I was being harassed at work for months and didn\'t know what to do. Through Haq, I learned about my rights under the Protection of Women Against Harassment Act 2010. The AI helped me understand the complaint process, and I was connected with a lawyer who guided me through filing a case. Today, I have a safe work environment and my confidence back.',
      anonymous: true,
      date: '2025-01-15',
    },
    {
      id: '2',
      title: 'Understanding My Nikah Nama Rights',
      category: 'Marriage Rights',
      content: 'When I got married, I didn\'t understand the terms in my Nikah Nama. After facing difficulties, I used Haq\'s document scanner and discovered that I had rights I never knew about. The platform helped me understand my Mehr rights and the conditions I could negotiate. This knowledge gave me the strength to have important conversations with my family.',
      anonymous: false,
      authorName: 'Ayesha K.',
      date: '2025-01-10',
    },
    {
      id: '3',
      title: 'Getting My Fair Share of Inheritance',
      category: 'Inheritance Rights',
      content: 'After my father passed away, my brothers tried to exclude me from the property inheritance. I didn\'t know that under Islamic law, I have guaranteed rights. Haq\'s AI explained my legal share in simple terms, and I found a lawyer who helped me claim what was rightfully mine. The platform gave me the knowledge and confidence to stand up for my rights.',
      anonymous: true,
      date: '2025-01-05',
    },
    {
      id: '4',
      title: 'Escaping Digital Harassment',
      category: 'Digital Rights',
      content: 'Someone was blackmailing me with private photos. I felt helpless and ashamed. Through Haq, I learned that this is a serious crime under the Prevention of Electronic Crimes Act 2016. The emergency system helped me contact authorities, and I was connected with a lawyer who specialized in cyber crimes. The harasser was prosecuted, and I got my life back.',
      anonymous: true,
      date: '2024-12-28',
    }
  ];

  const categories = ['all', 'Workplace Rights', 'Marriage Rights', 'Inheritance Rights', 'Digital Rights', 'Education Rights'];

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  const submitStory = () => {
    if (newStory.title && newStory.content && newStory.category) {
      // In a real app, this would submit to a backend
      alert(language === 'en' 
        ? 'Thank you for sharing your story! It will be reviewed and published soon.' 
        : 'آپ کی کہانی شیئر کرنے کا شکریہ! اس کا جائزہ لیا جائے گا اور جلد شائع کیا جائے گا۔'
      );
      setNewStory({ title: '', category: '', content: '', anonymous: true });
      setActiveTab('read');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="bg-[#FF9800] p-4 rounded-full w-fit mx-auto mb-6">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
            Stories of Empowerment
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F06292] mb-6">
            بااختیاری کی کہانیاں
          </h2>
          <p className="text-xl text-[#333333] max-w-4xl mx-auto leading-relaxed mb-4">
            Read inspiring stories from women who discovered their rights and took action. 
            Share your own journey to inspire others.
          </p>
          <p className="text-lg text-[#333333] max-w-4xl mx-auto leading-relaxed">
            ان خواتین کی حوصلہ افزا کہانیاں پڑھیں جنہوں نے اپنے حقوق دریافت کیے اور کارروائی کی۔ 
            دوسروں کو متاثر کرنے کے لیے اپنا سفر شیئر کریں۔
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

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('read')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'read'
                  ? 'bg-[#F06292] text-white'
                  : 'text-[#333333] hover:bg-[#FAFAFA]'
              }`}
            >
              {language === 'en' ? 'Read Stories' : 'کہانیاں پڑھیں'}
            </button>
            <button
              onClick={() => setActiveTab('share')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'share'
                  ? 'bg-[#F06292] text-white'
                  : 'text-[#333333] hover:bg-[#FAFAFA]'
              }`}
            >
              {language === 'en' ? 'Share Your Story' : 'اپنی کہانی شیئر کریں'}
            </button>
          </div>
        </motion.div>

        {activeTab === 'read' ? (
          <>
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#F06292] text-white'
                        : 'bg-white text-[#333333] hover:bg-[#FAFAFA] border border-gray-200'
                    }`}
                  >
                    {category === 'all' ? (language === 'en' ? 'All Categories' : 'تمام اقسام') : category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredStories.map((story, index) => (
                <motion.article
                  key={story.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-[#CE93D8] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {story.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(story.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#333333] mb-4 leading-tight">
                    {story.title}
                  </h3>
                  
                  <p className="text-[#333333] leading-relaxed mb-6 line-clamp-4">
                    {story.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-[#F06292]" />
                      <span className="text-sm text-[#333333]">
                        {story.anonymous 
                          ? (language === 'en' ? 'Anonymous' : 'گمنام') 
                          : story.authorName
                        }
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 text-[#F06292] hover:text-[#E91E63] transition-colors">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">23</span>
                      </button>
                      <button className="flex items-center gap-2 text-[#CE93D8] hover:text-[#BA68C8] transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Button
                      variant="primary"
                      size="sm"
                      icon={Eye}
                      className="w-full"
                    >
                      {language === 'en' ? 'Read Full Story' : 'مکمل کہانی پڑھیں'}
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </>
        ) : (
          /* Share Story Form */
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Plus className="h-8 w-8 text-[#F06292]" />
                <h3 className="text-2xl font-bold text-[#333333]">
                  {language === 'en' ? 'Share Your Story' : 'اپنی کہانی شیئر کریں'}
                </h3>
              </div>
              
              <p className="text-[#333333] mb-8 leading-relaxed">
                {language === 'en' 
                  ? 'Your story can inspire and help other women facing similar challenges. Share your journey of discovering your rights and taking action.'
                  : 'آپ کی کہانی دوسری خواتین کو متاثر کر سکتی ہے اور ان کی مدد کر سکتی ہے جو اسی طرح کے چیلنجز کا سامنا کر رہی ہیں۔ اپنے حقوق دریافت کرنے اور کارروائی کرنے کا سفر شیئر کریں۔'
                }
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    {language === 'en' ? 'Story Title' : 'کہانی کا عنوان'}
                  </label>
                  <input
                    type="text"
                    value={newStory.title}
                    onChange={(e) => setNewStory({ ...newStory, title: e.target.value })}
                    placeholder={language === 'en' ? 'Give your story a compelling title' : 'اپنی کہانی کو دلکش عنوان دیں'}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    {language === 'en' ? 'Category' : 'قسم'}
                  </label>
                  <select
                    value={newStory.category}
                    onChange={(e) => setNewStory({ ...newStory, category: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
                  >
                    <option value="">{language === 'en' ? 'Select a category' : 'قسم منتخب کریں'}</option>
                    {categories.slice(1).map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    {language === 'en' ? 'Your Story' : 'آپ کی کہانی'}
                  </label>
                  <textarea
                    value={newStory.content}
                    onChange={(e) => setNewStory({ ...newStory, content: e.target.value })}
                    placeholder={language === 'en' ? 'Share your experience, challenges faced, how you discovered your rights, and the outcome...' : 'اپنا تجربہ، سامنا کیے گئے چیلنجز، آپ نے اپنے حقوق کیسے دریافت کیے، اور نتیجہ شیئر کریں...'}
                    rows={8}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none resize-none"
                    dir={language === 'ur' ? 'rtl' : 'ltr'}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={newStory.anonymous}
                    onChange={(e) => setNewStory({ ...newStory, anonymous: e.target.checked })}
                    className="text-[#F06292] focus:ring-[#F06292]"
                  />
                  <label htmlFor="anonymous" className="text-[#333333]">
                    {language === 'en' ? 'Share anonymously (recommended for privacy)' : 'گمنام طور پر شیئر کریں (رازداری کے لیے تجویز کردہ)'}
                  </label>
                </div>

                <div className="p-4 bg-[#FAFAFA] rounded-lg">
                  <h4 className="font-semibold text-[#333333] mb-2">
                    {language === 'en' ? 'Privacy & Safety' : 'رازداری اور حفاظت'}
                  </h4>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {language === 'en' 
                      ? 'Your story will be reviewed before publication to ensure your safety and privacy. Personal details that could identify you will be removed. You can delete your story at any time.'
                      : 'آپ کی حفاظت اور رازداری کو یقینی بنانے کے لیے آپ کی کہانی شائع کرنے سے پہلے اس کا جائزہ لیا جائے گا۔ ذاتی تفصیلات جو آپ کی شناخت کر سکتی ہیں وہ ہٹا دی جائیں گی۔ آپ کسی بھی وقت اپنی کہانی ڈیلیٹ کر سکتے ہیں۔'
                    }
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="primary"
                    onClick={submitStory}
                    disabled={!newStory.title || !newStory.content || !newStory.category}
                    className="flex-1"
                  >
                    {language === 'en' ? 'Submit Story' : 'کہانی جمع کریں'}
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => setActiveTab('read')}
                    className="flex-1"
                  >
                    {language === 'en' ? 'Cancel' : 'منسوخ کریں'}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Inspiration Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-gradient-to-r from-[#F06292] to-[#CE93D8] rounded-2xl shadow-lg p-8 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Your Voice Matters' : 'آپ کی آواز اہم ہے'}
          </h3>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Every story shared helps another woman recognize her rights and find the courage to act. Together, we are building a community of empowered women.'
              : 'شیئر کی گئی ہر کہانی دوسری خاتون کو اپنے حقوق پہچاننے اور کارروائی کرنے کی ہمت دینے میں مدد کرتی ہے۔ مل کر، ہم بااختیار خواتین کی کمیونٹی بنا رہے ہیں۔'
            }
          </p>
          {activeTab === 'read' && (
            <Button
              variant="accent"
              size="lg"
              icon={MessageCircle}
              onClick={() => setActiveTab('share')}
              className="text-lg px-8 py-4"
            >
              {language === 'en' ? 'Share Your Story' : 'اپنی کہانی شیئر کریں'}
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Stories;