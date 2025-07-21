import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import Button from '../components/UI/Button';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  const blogPosts = [
    {
      id: '1',
      title: 'Understanding Your Nikah Nama: A Complete Guide',
      urduTitle: 'اپنے نکاح نامے کو سمجھنا: مکمل رہنما',
      excerpt: 'Learn about the important clauses in your Nikah Nama and how to protect your rights from the beginning.',
      urduExcerpt: 'اپنے نکاح نامے میں اہم شقوں کے بارے میں جانیں اور شروع سے ہی اپنے حقوق کی حفاظت کیسے کریں۔',
      author: 'Legal Team',
      date: '2025-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Marriage Rights', 'Legal Guide'],
      featured: true
    },
    {
      id: '2',
      title: 'Workplace Harassment: Know Your Rights and Options',
      urduTitle: 'کام کی جگہ ہراسانی: اپنے حقوق اور آپشنز جانیں',
      excerpt: 'A comprehensive guide to understanding workplace harassment laws and taking action.',
      urduExcerpt: 'کام کی جگہ ہراسانی کے قوانین کو سمجھنے اور کارروائی کرنے کے لیے جامع رہنما۔',
      author: 'Advocate Sarah Ahmed',
      date: '2025-01-10',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Workplace Rights', 'Legal Guide'],
      featured: false
    },
    {
      id: '3',
      title: 'Digital Safety for Women: Protecting Yourself Online',
      urduTitle: 'خواتین کے لیے ڈیجیٹل سیفٹی: آن لائن اپنی حفاظت',
      excerpt: 'Essential tips for staying safe online and knowing your digital rights.',
      urduExcerpt: 'آن لائن محفوظ رہنے اور اپنے ڈیجیٹل حقوق جاننے کے لیے ضروری تجاویز۔',
      author: 'Tech Safety Team',
      date: '2025-01-05',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Digital Rights', 'Safety Tips'],
      featured: false
    },
    {
      id: '4',
      title: 'Inheritance Rights: What Every Woman Should Know',
      urduTitle: 'وراثت کے حقوق: ہر خاتون کو کیا جاننا چاہیے',
      excerpt: 'Understanding your legal right to inheritance under Pakistani law.',
      urduExcerpt: 'پاکستانی قانون کے تحت وراثت کے آپ کے قانونی حق کو سمجھنا۔',
      author: 'Legal Team',
      date: '2024-12-28',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Inheritance Rights', 'Legal Guide'],
      featured: false
    },
    {
      id: '5',
      title: 'How to Use Haq AI: Getting the Most Out of Your Legal Assistant',
      urduTitle: 'حق اے آئی کا استعمال: اپنے قانونی اسسٹنٹ سے بہترین فائدہ اٹھانا',
      excerpt: 'Tips and tricks for effectively communicating with the Haq AI to get accurate legal guidance.',
      urduExcerpt: 'درست قانونی رہنمائی حاصل کرنے کے لیے حق اے آئی کے ساتھ مؤثر طریقے سے بات چیت کرنے کے طریقے۔',
      author: 'AI Team',
      date: '2024-12-20',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI Guide', 'How To'],
      featured: false
    },
    {
      id: '6',
      title: 'Emergency Planning: Creating Your Safety Network',
      urduTitle: 'ایمرجنسی پلاننگ: اپنا سیفٹی نیٹ ورک بنانا',
      excerpt: 'How to set up emergency contacts and safety plans for difficult situations.',
      urduExcerpt: 'مشکل حالات کے لیے ایمرجنسی رابطے اور سیفٹی پلان کیسے سیٹ کریں۔',
      author: 'Safety Team',
      date: '2024-12-15',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Safety Tips', 'Emergency'],
      featured: false
    }
  ];

  const tags = ['all', 'Marriage Rights', 'Workplace Rights', 'Digital Rights', 'Inheritance Rights', 'Safety Tips', 'Legal Guide', 'AI Guide', 'How To', 'Emergency'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="bg-[#FFCA28] p-4 rounded-full w-fit mx-auto mb-6">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
            Legal Awareness Hub
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F06292] mb-6">
            قانونی آگاہی مرکز
          </h2>
          <p className="text-xl text-[#333333] max-w-4xl mx-auto leading-relaxed mb-4">
            Stay informed with the latest legal guides, rights awareness articles, and practical tips for Pakistani women
          </p>
          <p className="text-lg text-[#333333] max-w-4xl mx-auto leading-relaxed">
            پاکستانی خواتین کے لیے تازہ ترین قانونی رہنمائی، حقوق کی آگاہی کے مضامین، اور عملی تجاویز کے ساتھ آگاہ رہیں
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

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search articles...' : 'مضامین تلاش کریں...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-[#F06292] text-white'
                      : 'bg-[#FAFAFA] text-[#333333] hover:bg-[#CE93D8] hover:text-white border border-gray-200'
                  }`}
                >
                  {tag === 'all' ? (language === 'en' ? 'All' : 'تمام') : tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Article */}
        {featuredPost && selectedTag === 'all' && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FFCA28] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    {featuredPost.tags.map(tag => (
                      <span key={tag} className="bg-[#CE93D8] text-white px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-3xl font-bold text-[#333333] mb-4">
                    {language === 'en' ? featuredPost.title : featuredPost.urduTitle}
                  </h2>
                  
                  <p className="text-[#333333] mb-6 leading-relaxed">
                    {language === 'en' ? featuredPost.excerpt : featuredPost.urduExcerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <User className="h-4 w-4" />
                      <span className="text-sm">{featuredPost.author}</span>
                      <Calendar className="h-4 w-4 ml-2" />
                      <span className="text-sm">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <span className="text-sm text-[#F06292] font-medium">{featuredPost.readTime}</span>
                  </div>
                  
                  <Button variant="primary" icon={ArrowRight}>
                    {language === 'en' ? 'Read Article' : 'مضمون پڑھیں'}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-[#FAFAFA] text-[#333333] px-2 py-1 rounded-full text-xs border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-[#333333] mb-3 line-clamp-2 group-hover:text-[#F06292] transition-colors">
                  {language === 'en' ? post.title : post.urduTitle}
                </h3>
                
                <p className="text-[#333333] mb-4 line-clamp-3 leading-relaxed">
                  {language === 'en' ? post.excerpt : post.urduExcerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-[#F06292] hover:text-[#E91E63] transition-colors font-medium">
                    <span>{language === 'en' ? 'Read More' : 'مزید پڑھیں'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#333333] mb-4">
                {language === 'en' ? 'No Articles Found' : 'کوئی مضمون نہیں ملا'}
              </h3>
              <p className="text-[#333333] mb-6">
                {language === 'en' 
                  ? 'Try adjusting your search or filter criteria to find relevant articles.'
                  : 'متعلقہ مضامین تلاش کرنے کے لیے اپنے تلاش یا فلٹر کے معیار کو تبدیل کرنے کی کوشش کریں۔'
                }
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag('all');
                }}
              >
                {language === 'en' ? 'Clear Filters' : 'فلٹرز صاف کریں'}
              </Button>
            </div>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-gradient-to-r from-[#F06292] to-[#CE93D8] rounded-2xl shadow-lg p-8 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Stay Updated' : 'آپ ڈیٹ رہیں'}
          </h3>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Get the latest legal guides and rights awareness articles delivered to your WhatsApp'
              : 'تازہ ترین قانونی رہنمائی اور حقوق کی آگاہی کے مضامین اپنے واٹس ایپ پر حاصل کریں'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="tel"
              placeholder={language === 'en' ? 'Your WhatsApp number' : 'آپ کا واٹس ایپ نمبر'}
              className="flex-1 p-3 rounded-lg text-[#333333] focus:ring-2 focus:ring-[#FFCA28] focus:outline-none"
            />
            <Button variant="accent" className="whitespace-nowrap">
              {language === 'en' ? 'Subscribe' : 'سبسکرائب کریں'}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;