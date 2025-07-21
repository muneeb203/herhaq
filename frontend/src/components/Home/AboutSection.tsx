import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Users, Scale } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      urdu: "محفوظ اور یقین دہانی",
      description: "Your privacy and safety are our top priorities. All conversations are encrypted and anonymous.",
      urduDesc: "آپ کی رازداری اور حفاظت ہماری اولین ترجیح ہے۔ تمام گفتگو خفیہ اور گمنام ہے۔"
    },
    {
      icon: Heart,
      title: "Empowering Women",
      urdu: "خواتین کو بااختیار بنانا",
      description: "Designed specifically for Pakistani women to understand and exercise their legal rights.",
      urduDesc: "خاص طور پر پاکستانی خواتین کے لیے بنایا گیا تاکہ وہ اپنے قانونی حقوق سمجھ سکیں اور ان پر عمل کر سکیں۔"
    },
    {
      icon: Users,
      title: "Community Support",
      urdu: "کمیونٹی کی حمایت",
      description: "Connect with verified lawyers and support networks at discounted rates.",
      urduDesc: "کم نرخوں پر تصدیق شدہ وکیلوں اور مدد کے نیٹ ورکس سے رابطہ کریں۔"
    },
    {
      icon: Scale,
      title: "Legal Guidance",
      urdu: "قانونی رہنمائی",
      description: "AI-powered assistance to understand Pakistani laws in simple language.",
      urduDesc: "آسان زبان میں پاکستانی قوانین سمجھنے کے لیے اے آئی کی مدد۔"
    }
  ];

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
            About Haq
          </h2>
          <div className="text-right mb-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#F06292]">
              حق کے بارے میں
            </h3>
          </div>
          <p className="text-xl text-[#333333] max-w-4xl mx-auto leading-relaxed mb-4">
            Haq is Pakistan's first AI-powered legal rights assistant designed specifically for women. 
            We help you understand your rights, identify violations, and take action with confidence.
          </p>
          <p className="text-lg text-[#333333] max-w-4xl mx-auto leading-relaxed">
            حق پاکستان کا پہلا اے آئی پاور قانونی حقوق اسسٹنٹ ہے جو خاص طور پر خواتین کے لیے بنایا گیا ہے۔ 
            ہم آپ کو اپنے حقوق سمجھنے، خلاف ورزیوں کی شناخت کرنے، اور اعتماد کے ساتھ کارروائی کرنے میں مدد کرتے ہیں۔
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#CE93D8] p-4 rounded-full w-fit mx-auto mb-6">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;