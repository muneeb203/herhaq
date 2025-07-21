import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Shield } from 'lucide-react';
import Button from '../UI/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#F06292] to-[#CE93D8] relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 p-4 rounded-full w-fit mx-auto mb-8">
            <Shield className="h-12 w-12 text-white" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Know Your Rights?
          </h2>
          
          <h3 className="text-3xl sm:text-4xl font-bold text-white/90 mb-8">
            اپنے حقوق جانने کے لیے تیار؟
          </h3>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of Pakistani women who have discovered their legal rights through Haq. 
            Your journey to empowerment starts with a single question.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="accent"
              size="lg"
              icon={MessageCircle}
              onClick={() => window.location.href = '/chat'}
              className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Start AI Chat
            </Button>
            
            <Button
              variant="success"
              size="lg"
              icon={Phone}
              onClick={() => window.location.href = '/emergency'}
              className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Emergency Help
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#FFCA28] rounded-full mr-3"></div>
              <span>100% Anonymous & Safe</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#66BB6A] rounded-full mr-3"></div>
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#FFCA28] rounded-full mr-3"></div>
              <span>Free to Use</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;