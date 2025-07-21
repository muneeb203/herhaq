import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, MicOff, Download, AlertTriangle, Volume2, VolumeX } from 'lucide-react';
import { ChatMessage } from '../types';
import Button from '../components/UI/Button';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hello! I\'m your legal rights assistant. You can speak to me in Urdu or English. What situation would you like help with today?',
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ur'>('en');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

<<<<<<< HEAD
  const simulateAIResponse = (userMessage: string): ChatMessage => {
    const responses = [
      {
        text: "I understand you're facing a difficult situation. Based on what you've described, this may involve violations of your workplace rights under the Protection of Women Against Harassment Act 2010. Let me explain your options...",
        category: "Workplace Rights",
        legalClause: "Protection of Women Against Harassment Act 2010, Section 4",
        recommendation: "1. Document the incidents 2. Report to management 3. File complaint with Ombudsman if needed"
      },
      {
        text: "This sounds like it relates to your matrimonial rights. According to Pakistani law, you have specific rights regarding your Nikah Nama and maintenance. Would you like me to explain these in detail?",
        category: "Marriage Rights",
        legalClause: "Muslim Family Laws Ordinance 1961",
        recommendation: "Review your Nikah Nama terms and consult with a family law expert"
      }
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    return {
      id: Date.now().toString(),
      text: randomResponse.text,
      isUser: false,
      timestamp: new Date(),
      category: randomResponse.category,
      legalClause: randomResponse.legalClause,
      recommendation: randomResponse.recommendation
    };
  };

  const sendMessage = () => {
=======
  const fetchAIResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch('https://herhaq-backend.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMessage }),
      });
      const data = await response.json();
      return data.answer || "Sorry, I couldn't get a response.";
    } catch (error) {
      return "Error connecting to the AI backend.";
    }
  };

  const sendMessage = async () => {
>>>>>>> dad3785788b24799a72a6a9969b18bea9d03fa1c
    if (!inputText.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

<<<<<<< HEAD
    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse = simulateAIResponse(inputText);
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 2000);
=======
    // Call Flask backend
    const aiText = await fetchAIResponse(inputText);
    const aiResponse: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: aiText,
      isUser: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, aiResponse]);
    setIsLoading(false);
>>>>>>> dad3785788b24799a72a6a9969b18bea9d03fa1c
  };

  const toggleVoiceRecording = () => {
    setIsListening(!isListening);
    // In a real implementation, this would start/stop voice recognition
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setInputText("Voice message received: I'm having issues at my workplace...");
      }, 3000);
    }
  };

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'ur' ? 'ur-PK' : 'en-US';
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  };

  const exportChat = () => {
    const chatContent = messages.map(msg => 
      `${msg.isUser ? 'You' : 'Haq AI'} (${msg.timestamp.toLocaleTimeString()}): ${msg.text}`
    ).join('\n\n');
    
    const blob = new Blob([chatContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'haq-legal-consultation.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const triggerEmergency = () => {
    const summary = messages.slice(-3).map(m => m.text).join(' | ');
    const whatsappUrl = `https://wa.me/+923001234567?text=EMERGENCY%20ALERT%0A%0AChat%20Summary:%20${encodeURIComponent(summary)}%0A%0ALocation:%20Please%20share%20current%20location`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#333333] mb-2">
<<<<<<< HEAD
                Haq AI Legal Assistant
=======
                Haq AI Assistant
>>>>>>> dad3785788b24799a72a6a9969b18bea9d03fa1c
              </h1>
              <p className="text-[#333333] opacity-80">
                {language === 'en' 
                  ? 'Speak freely about your situation. All conversations are private and secure.'
                  : 'اپنی صورتحال کے بارے میں آزادی سے بات کریں۔ تمام گفتگو نجی اور محفوظ ہے۔'
                }
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
                className="px-4 py-2 bg-[#CE93D8] text-white rounded-lg hover:bg-[#BA68C8] transition-colors"
              >
                {language === 'en' ? 'اردو' : 'English'}
              </button>
              
              <Button
                variant="accent"
                size="sm"
                icon={Download}
                onClick={exportChat}
                className="whitespace-nowrap"
              >
                Export Chat
              </Button>
              
              <Button
                variant="danger"
                size="sm"
                icon={AlertTriangle}
                onClick={triggerEmergency}
                className="whitespace-nowrap"
              >
                Emergency
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl shadow-lg h-[600px] flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    message.isUser 
                      ? 'bg-[#F06292] text-white' 
                      : 'bg-[#FAFAFA] text-[#333333] border border-gray-200'
                  }`}>
                    <p className="mb-2">{message.text}</p>
                    
                    {!message.isUser && (
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() => speakMessage(message.text)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                          disabled={isSpeaking}
                        >
                          {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                        </button>
                        <span className="text-xs text-gray-500">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    )}
                    
                    {message.category && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm font-semibold text-[#F06292] mb-1">
                          Category: {message.category}
                        </p>
                        {message.legalClause && (
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>Legal Reference:</strong> {message.legalClause}
                          </p>
                        )}
                        {message.recommendation && (
                          <p className="text-sm text-gray-600">
                            <strong>Recommended Actions:</strong> {message.recommendation}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-[#CE93D8] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#CE93D8] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-[#CE93D8] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleVoiceRecording}
                className={`p-3 rounded-full transition-colors ${
                  isListening 
                    ? 'bg-[#E53935] text-white animate-pulse' 
                    : 'bg-[#CE93D8] text-white hover:bg-[#BA68C8]'
                }`}
              >
                {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </button>
              
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder={language === 'en' 
                  ? "Type your question or concern..." 
                  : "اپنا سوال یا پریشانی ٹائپ کریں..."
                }
                className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
                dir={language === 'ur' ? 'rtl' : 'ltr'}
              />
              
              <button
                onClick={sendMessage}
                disabled={!inputText.trim()}
                className="p-3 bg-[#F06292] text-white rounded-xl hover:bg-[#E91E63] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-3 text-center">
              {language === 'en' 
                ? "Your conversation is encrypted and anonymous. Click Emergency if you need immediate help."
                : "آپ کی گفتگو خفیہ اور گمنام ہے۔ فوری مدد کے لیے ایمرجنسی پر کلک کریں۔"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;