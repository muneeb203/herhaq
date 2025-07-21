import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Phone, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ur'>('en');
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', urdu: 'ہوم' },
    { name: 'AI Assistant', href: '/chat', urdu: 'اے آئی اسسٹنٹ' },
    { name: 'Scan Documents', href: '/scan', urdu: 'دستاویزات اسکین' },
    { name: 'Emergency', href: '/emergency', urdu: 'ایمرجنسی' },
    { name: 'Know Rights', href: '/rights', urdu: 'اپنے حقوق جانیں' },
    { name: 'Find Lawyer', href: '/lawyers', urdu: 'وکیل تلاش کریں' },
    { name: 'Stories', href: '/stories', urdu: 'کہانیاں' },
  ];

  const quickExit = () => {
    // Redirect to Google and clear history
    window.location.replace('https://www.google.com');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-[#F06292] p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#333333]">
              {language === 'en' ? 'Haq' : 'حق'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#F06292] ${
                  location.pathname === item.href
                    ? 'text-[#F06292] border-b-2 border-[#F06292] pb-1'
                    : 'text-[#333333]'
                }`}
              >
                {language === 'en' ? item.name : item.urdu}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
              className="text-sm px-3 py-1 border border-[#CE93D8] text-[#333333] rounded-md hover:bg-[#CE93D8] hover:text-white transition-colors"
            >
              {language === 'en' ? 'اردو' : 'English'}
            </button>

            {/* WhatsApp SOS */}
            <a
              href="https://wa.me/+923001234567?text=Emergency%20Help%20Needed"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFCA28] text-[#333333] p-2 rounded-lg hover:bg-[#FFC107] transition-colors"
              title={language === 'en' ? 'Emergency WhatsApp' : 'ایمرجنسی واٹس ایپ'}
            >
              <Phone className="h-5 w-5" />
            </a>

            {/* Quick Exit */}
            <button
              onClick={quickExit}
              className="bg-[#E53935] text-white p-2 rounded-lg hover:bg-[#D32F2F] transition-colors"
              title={language === 'en' ? 'Quick Exit' : 'فوری باہر نکلیں'}
            >
              <LogOut className="h-5 w-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#333333]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-[#F06292] bg-[#FAFAFA]'
                      : 'text-[#333333] hover:text-[#F06292] hover:bg-[#FAFAFA]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'en' ? item.name : item.urdu}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;