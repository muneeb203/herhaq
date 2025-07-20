import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Users, Shield, Settings, AlertTriangle } from 'lucide-react';
import Button from '../components/UI/Button';
import { EmergencyContact } from '../types';

const Emergency: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContact[]>([
    { id: '1', name: 'Sister - Ayesha', phone: '+923001234567', relationship: 'Sister' },
    { id: '2', name: 'Friend - Sarah', phone: '+923007654321', relationship: 'Friend' }
  ]);
  const [triggerPhrase, setTriggerPhrase] = useState('I want mangoes');
  const [newContact, setNewContact] = useState({ name: '', phone: '', relationship: '' });
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  const addEmergencyContact = () => {
    if (newContact.name && newContact.phone) {
      const contact: EmergencyContact = {
        id: Date.now().toString(),
        name: newContact.name,
        phone: newContact.phone,
        relationship: newContact.relationship || 'Contact'
      };
      setEmergencyContacts([...emergencyContacts, contact]);
      setNewContact({ name: '', phone: '', relationship: '' });
    }
  };

  const removeContact = (id: string) => {
    setEmergencyContacts(emergencyContacts.filter(contact => contact.id !== id));
  };

  const triggerEmergencyAlert = () => {
    const locationText = location 
      ? `Location: https://maps.google.com/maps?q=${location.lat},${location.lng}`
      : 'Location: Unable to determine';
    
    const alertMessage = `🚨 EMERGENCY ALERT 🚨%0A%0AI need immediate help!%0A%0A${locationText}%0A%0APlease contact me or authorities immediately.%0A%0ATime: ${new Date().toLocaleString()}`;
    
    // Send to each emergency contact
    emergencyContacts.forEach(contact => {
      const whatsappUrl = `https://wa.me/${contact.phone.replace(/\D/g, '')}?text=${alertMessage}`;
      window.open(whatsappUrl, '_blank');
    });

    // Also send to police (example number)
    const policeUrl = `https://wa.me/+9215?text=${alertMessage}`;
    window.open(policeUrl, '_blank');
  };

  const testEmergencySystem = () => {
    const testMessage = `🧪 TEST ALERT 🧪%0A%0AThis is a test of the emergency system.%0A%0AIf you receive this message, the system is working correctly.%0A%0ATime: ${new Date().toLocaleString()}`;
    
    const whatsappUrl = `https://wa.me/${emergencyContacts[0]?.phone.replace(/\D/g, '')}?text=${testMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="bg-[#E53935] p-4 rounded-full w-fit mx-auto mb-6">
            <Shield className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
            Emergency SOS System
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E53935] mb-6">
            ایمرجنسی ایس او ایس سسٹم
          </h2>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed mb-4">
            Set up your emergency contacts and trigger phrases for instant help when needed
          </p>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto leading-relaxed">
            ضرورت کے وقت فوری مدد کے لیے اپنے ایمرجنسی رابطے اور ٹرگر فقرے سیٹ کریں
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

        {/* Quick Emergency Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-[#E53935] to-[#D32F2F] rounded-2xl shadow-lg p-8 mb-8 text-center"
        >
          <AlertTriangle className="h-16 w-16 text-white mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-white mb-4">
            {language === 'en' ? 'EMERGENCY ALERT' : 'ایمرجنسی الرٹ'}
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            {language === 'en' 
              ? 'Press this button if you are in immediate danger'
              : 'اگر آپ فوری خطرے میں ہیں تو یہ بٹن دبائیں'
            }
          </p>
          <Button
            variant="accent"
            size="lg"
            onClick={triggerEmergencyAlert}
            className="text-xl px-12 py-4 transform hover:scale-105 transition-all shadow-lg"
          >
            {language === 'en' ? 'SEND EMERGENCY ALERT' : 'ایمرجنسی الرٹ بھیجیں'}
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Emergency Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-[#F06292]" />
              <h3 className="text-2xl font-bold text-[#333333]">
                {language === 'en' ? 'Emergency Contacts' : 'ایمرجنسی رابطے'}
              </h3>
            </div>

            {/* Current Contacts */}
            <div className="space-y-3 mb-6">
              {emergencyContacts.map((contact) => (
                <div key={contact.id} className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-xl">
                  <div>
                    <p className="font-semibold text-[#333333]">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.phone}</p>
                    <p className="text-xs text-[#F06292]">{contact.relationship}</p>
                  </div>
                  <button
                    onClick={() => removeContact(contact.id)}
                    className="text-[#E53935] hover:text-[#D32F2F] transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Add New Contact */}
            <div className="space-y-3 p-4 border border-[#CE93D8] rounded-xl">
              <h4 className="font-semibold text-[#333333]">
                {language === 'en' ? 'Add New Contact' : 'نیا رابطہ شامل کریں'}
              </h4>
              <input
                type="text"
                placeholder={language === 'en' ? 'Name' : 'نام'}
                value={newContact.name}
                onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
              />
              <input
                type="tel"
                placeholder={language === 'en' ? 'Phone Number (+92...)' : 'فون نمبر (+92...)'}
                value={newContact.phone}
                onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
              />
              <input
                type="text"
                placeholder={language === 'en' ? 'Relationship' : 'رشتہ'}
                value={newContact.relationship}
                onChange={(e) => setNewContact({ ...newContact, relationship: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
              />
              <Button variant="primary" onClick={addEmergencyContact} className="w-full">
                {language === 'en' ? 'Add Contact' : 'رابطہ شامل کریں'}
              </Button>
            </div>
          </motion.div>

          {/* Settings & Test */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Trigger Phrase */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="h-8 w-8 text-[#FFCA28]" />
                <h3 className="text-2xl font-bold text-[#333333]">
                  {language === 'en' ? 'Trigger Phrase' : 'ٹرگر فقرہ'}
                </h3>
              </div>
              
              <p className="text-[#333333] mb-4">
                {language === 'en' 
                  ? 'Set a coded phrase that will trigger emergency alerts when said in the AI chat'
                  : 'ایک کوڈ فقرہ سیٹ کریں جو اے آئی چیٹ میں کہنے پر ایمرجنسی الرٹ ٹرگر کرے گا'
                }
              </p>
              
              <input
                type="text"
                value={triggerPhrase}
                onChange={(e) => setTriggerPhrase(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none mb-4"
                placeholder="e.g., I want mangoes"
              />
              
              <div className="p-4 bg-[#FAFAFA] rounded-lg">
                <p className="text-sm text-[#333333]">
                  <strong>Example:</strong> If you set "I want mangoes" as your phrase, saying this in any conversation will secretly trigger an emergency alert.
                </p>
              </div>
            </div>

            {/* Location Status */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-8 w-8 text-[#66BB6A]" />
                <h3 className="text-2xl font-bold text-[#333333]">
                  {language === 'en' ? 'Location Status' : 'مقام کی صورتحال'}
                </h3>
              </div>
              
              {location ? (
                <div className="p-4 bg-green-50 border border-[#66BB6A] rounded-lg">
                  <p className="text-[#66BB6A] font-semibold">
                    ✓ {language === 'en' ? 'Location Access Enabled' : 'لوکیشن تک رسائی فعال'}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {language === 'en' 
                      ? 'Your location will be shared in emergency alerts'
                      : 'آپ کا مقام ایمرجنسی الرٹس میں شیئر کیا جائے گا'
                    }
                  </p>
                </div>
              ) : (
                <div className="p-4 bg-yellow-50 border border-[#FFCA28] rounded-lg">
                  <p className="text-[#FFCA28] font-semibold">
                    ⚠ {language === 'en' ? 'Location Access Disabled' : 'لوکیشن تک رسائی غیر فعال'}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {language === 'en' 
                      ? 'Enable location access for more effective emergency alerts'
                      : 'زیادہ مؤثر ایمرجنسی الرٹس کے لیے لوکیشن تک رسائی فعال کریں'
                    }
                  </p>
                </div>
              )}
            </div>

            {/* Test System */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">
                {language === 'en' ? 'Test Emergency System' : 'ایمرجنسی سسٹم ٹیسٹ کریں'}
              </h3>
              <p className="text-[#333333] mb-6">
                {language === 'en' 
                  ? 'Send a test alert to make sure your emergency system is working'
                  : 'یقینی بنانے کے لیے کہ آپ کا ایمرجنسی سسٹم کام کر رہا ہے ٹیسٹ الرٹ بھیجیں'
                }
              </p>
              <Button
                variant="secondary"
                onClick={testEmergencySystem}
                className="w-full"
                disabled={emergencyContacts.length === 0}
              >
                {language === 'en' ? 'Send Test Alert' : 'ٹیسٹ الرٹ بھیجیں'}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Emergency Hotlines */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-[#333333] mb-6">
            {language === 'en' ? 'Emergency Hotlines Pakistan' : 'پاکستان کی ایمرجنسی ہاٹ لائنز'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Police', urdu: 'پولیس', number: '15', color: 'bg-[#E53935]' },
              { name: 'Women Helpline', urdu: 'خواتین ہیلپ لائن', number: '1099', color: 'bg-[#F06292]' },
              { name: 'Ambulance', urdu: 'ایمبولینس', number: '1122', color: 'bg-[#66BB6A]' },
              { name: 'Fire Brigade', urdu: 'فائر بریگیڈ', number: '16', color: 'bg-[#FF9800]' },
              { name: 'Child Helpline', urdu: 'بچوں کی ہیلپ لائن', number: '1121', color: 'bg-[#CE93D8]' },
              { name: 'Emergency', urdu: 'ایمرجنسی', number: '115', color: 'bg-[#FFCA28]' }
            ].map((hotline, index) => (
              <a
                key={index}
                href={`tel:${hotline.number}`}
                className="block p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className={`${hotline.color} p-2 rounded-lg`}>
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">{hotline.name}</p>
                    <p className="text-sm text-[#F06292]">{hotline.urdu}</p>
                    <p className="text-lg font-bold text-[#333333]">{hotline.number}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Emergency;