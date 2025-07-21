import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Scan, 
  Phone, 
  BookOpen, 
  Users, 
  FileText,
  Scale
} from 'lucide-react';

const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Legal Assistant",
      urdu: "اے آئی قانونی اسسٹنٹ",
      description: "Chat with our AI to understand your rights and get legal guidance",
      urduDesc: "اپنے حقوق سمجھنے اور قانونی رہنمائی کے لیے ہمارے اے آئی سے بات کریں",
      link: "/chat",
      color: "bg-[#F06292]"
    },
    {
      icon: Scan,
      title: "Document Scanner",
      urdu: "دستاویز اسکینر",
      description: "Scan your Nikah Nama and contracts to discover your rights",
      urduDesc: "اپنے حقوق دریافت کرنے کے لیے نکاح نامہ اور معاہدے اسکین کریں",
      link: "/scan",
      color: "bg-[#CE93D8]"
    },
    {
      icon: Phone,
      title: "Emergency SOS",
      urdu: "ایمرجنسی ایس او ایس",
      description: "Quick WhatsApp emergency system with location sharing",
      urduDesc: "مقام کی اشتراک کے ساتھ فوری واٹس ایپ ایمرجنسی سسٹم",
      link: "/emergency",
      color: "bg-[#E53935]"
    },
    {
      icon: BookOpen,
      title: "Know Your Rights",
      urdu: "اپنے حقوق جانیں",
      description: "Learn about your legal rights in marriage, workplace, and more",
      urduDesc: "شادی، کام کی جگہ اور مزید میں اپنے قانونی حقوق کے بارے میں جانیں",
      link: "/rights",
      color: "bg-[#FFCA28]"
    },
    {
      icon: Users,
      title: "Find a Lawyer",
      urdu: "وکیل تلاش کریں",
      description: "Connect with verified lawyers at discounted rates",
      urduDesc: "کم نرخوں پر تصدیق شدہ وکیلوں سے رابطہ کریں",
      link: "/lawyers",
      color: "bg-[#66BB6A]"
    },
    {
      icon: FileText,
      title: "Stories & Support",
      urdu: "کہانیاں اور سپورٹ",
      description: "Read inspiring stories and share your own experiences",
      urduDesc: "حوصلہ افزا کہانیاں پڑھیں اور اپنے تجربات شیئر کریں",
      link: "/stories",
      color: "bg-[#FF9800]"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
            How Haq Can Help You
          </h2>
          <div className="text-center mb-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#F06292]">
              حق آپ کی کیسے مدد کر سکتا ہے
            </h3>
          </div>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive tools designed to empower you with legal knowledge and support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={feature.link} className="block">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                    <div className={`${feature.color} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#333333] text-center mb-2">
                      {feature.title}
                    </h3>
                    
                    <h4 className="text-lg font-semibold text-[#F06292] text-center mb-4">
                      {feature.urdu}
                    </h4>
                    
                    <p className="text-[#333333] text-center leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    
                    <p className="text-[#333333] text-center leading-relaxed text-sm opacity-80">
                      {feature.urduDesc}
                    </p>
                    
                    <div className="mt-6 text-center">
                      <span className="inline-flex items-center text-[#F06292] font-semibold group-hover:text-[#E91E63] transition-colors">
                        Learn More
                        <Scale className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;