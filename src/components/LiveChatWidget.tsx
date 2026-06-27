import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Sparkles, User, RefreshCw, AlertCircle } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'tejxstudio';
  text: string;
  timestamp: string;
}

interface PresetQuestion {
  id: string;
  question: string;
  answer: string;
}

const PRESET_QUESTIONS: PresetQuestion[] = [
  {
    id: 'pq-1',
    question: "What are your editing rates & packages?",
    answer: "My pricing is tailored to project complexity and video volume. For cinematic YouTube edits and mini-docs, project rates start around $500, while premium short-form assets start at $120. I also offer custom monthly retainer packages which secure dedicated weekly editing hours and high priority turnaround."
  },
  {
    id: 'pq-2',
    question: "Can we book a discovery session?",
    answer: "I'd love to jump on a strategy session! You can instantly book a 15-minute screen-share on my calendar by scrolling down to the 'Collab' booking section on the landing page, or simply leave your email here in this chat and I will send over a booking link."
  },
  {
    id: 'pq-3',
    question: "What is your turnaround time?",
    answer: "For short-form reels, TikToks, and shorts, standard turnaround is 24 to 48 hours. Long-form video essays, multi-cam podcasts, and mini-documentaries typically take 3 to 7 business days. If you're on a tight deadline, let me know and we can discuss premium priority delivery."
  },
  {
    id: 'pq-4',
    question: "Do you offer short-form bulk retainers?",
    answer: "Yes, absolutely! I partner with creators and brands on bulk monthly vertical retainers (10, 20, or 30 videos per month). This includes hook conceptualization, kinetic typography design, custom SFX layering, and color grading optimized to scale views and retention."
  }
];

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'tejxstudio',
      text: "Hey! I'm TejxStudio, your retention engineering companion. Looking to elevate your content or scale your YouTube/Shorts views? Ask me anything or select a quick question below!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever message log or typing state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Open helper delay
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  const handleSendMessage = (text: string, isPreset: boolean = false) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate specialized response matching
    setTimeout(() => {
      let replyText = "";
      if (isPreset) {
        // Find matching preset question answer
        const preset = PRESET_QUESTIONS.find(q => q.question === text);
        replyText = preset ? preset.answer : "That is an excellent point. I'd love to chat details with you over a brief strategy session!";
      } else {
        // Natural language detection on raw input
        const query = text.toLowerCase();
        if (query.includes('hi') || query.includes('hello') || query.includes('hey')) {
          replyText = "Hello! Great to connect with you. How can I help level up your video production today?";
        } else if (query.includes('price') || query.includes('rate') || query.includes('cost') || query.includes('fee') || query.includes('package')) {
          replyText = "Rates generally start at $500 for deep, cinematic long-form visual stories and $120 for engaging vertical edits. If you are producing consistent high-volume content, our monthly retainers offer significant discounts and priority pipeline slots. What type of project are you planning?";
        } else if (query.includes('book') || query.includes('call') || query.includes('schedule') || query.includes('meeting')) {
          replyText = "Awesome! Let's get a call set up. Scroll to the 'Collab' section on our home page to instantly trigger the 15-Min Discovery Session scheduler. Alternatively, type your email here and I'll send an invite!";
        } else if (query.includes('time') || query.includes('turnaround') || query.includes('deadline') || query.includes('fast')) {
          replyText = "Speed is standard: 24-48 hours for snappy vertical Reels, and 3-7 business days for custom, sound-designed YouTube masterworks. Need something faster? We offer rush slots!";
        } else if (query.includes('software') || query.includes('premiere') || query.includes('resolve') || query.includes('after effects')) {
          replyText = "I edit natively in Adobe Premiere Pro and DaVinci Resolve Studio for surgical color grading, and deploy Adobe After Effects for high-end custom motion designs and tracking.";
        } else if (query.includes('email') || query.includes('contact') || query.includes('reach')) {
          replyText = "You can fill out the brief in the 'Collab' section below, or email me directly at hello@tejxstudio.io. Looking forward to it!";
        } else {
          replyText = "That sounds like a spectacular project brief! To give you a precise quote and visual moodboard, let's schedule a call. Would you mind leaving your email address here, or scrolling down to fill out the custom Collab Form on the page?";
        }
      }

      const tejxstudioMsg: Message = {
        id: `tejxstudio-${Date.now()}`,
        sender: 'tejxstudio',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, tejxstudioMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handlePresetClick = (q: PresetQuestion) => {
    handleSendMessage(q.question, true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    handleSendMessage(inputText);
  };

  return (
    <>
      {/* Floating Interactive Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white cursor-pointer shadow-2xl transition-all duration-300 ${
            isOpen 
              ? 'bg-neutral-900 border border-white/10 hover:border-[#0070FF]/50' 
              : 'bg-[#0070FF] shadow-[#0070FF]/30'
          }`}
          id="chat-widget-toggle"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6" />
              {/* Unread Message Indicator Pulse Badge */}
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-[#050505] text-[10px] font-bold flex items-center justify-center text-white animate-bounce">
                  {unreadCount}
                </span>
              )}
            </>
          )}
        </motion.button>
      </div>

      {/* Live Chat Drawer Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-24 right-6 w-[92vw] sm:w-[400px] h-[550px] rounded-2xl z-50 overflow-hidden border border-white/10 bg-neutral-950/95 shadow-2xl backdrop-blur-xl flex flex-col"
            id="chat-widget-window"
          >
            {/* Widget Elegant Header */}
            <div className="p-4 bg-gradient-to-r from-neutral-950 to-neutral-900 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-[#0070FF]/10 border border-[#0070FF]/30 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-[#0070FF]" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-neutral-950 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white font-display">TejxStudio</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold">Active Now</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-[10px] text-neutral-400 font-medium">Retention Expert</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message Feed Display */}
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 font-sans scrollbar-thin"
            >
              {messages.map((msg) => {
                const isTejxStudio = msg.sender === 'tejxstudio';
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isTejxStudio ? 'justify-start' : 'justify-end'} items-end gap-2.5`}
                  >
                    {isTejxStudio && (
                      <div className="w-6 h-6 rounded-full bg-[#0070FF]/10 border border-[#0070FF]/20 flex items-center justify-center text-[#0070FF] shrink-0">
                        <User className="w-3 h-3" />
                      </div>
                    )}
                    
                    <div className="flex flex-col max-w-[80%]">
                      <div
                        className={`p-3 rounded-2xl text-xs md:text-sm leading-relaxed ${
                          isTejxStudio
                            ? 'bg-neutral-900 text-neutral-200 rounded-bl-none border border-white/5'
                            : 'bg-[#0070FF] text-white rounded-br-none shadow-md shadow-[#0070FF]/10'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[9px] text-neutral-600 font-mono mt-1 text-right">
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Typing Simulated State Dot-Loop */}
              {isTyping && (
                <div className="flex justify-start items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#0070FF]/10 border border-[#0070FF]/20 flex items-center justify-center text-[#0070FF] shrink-0 animate-pulse">
                    <RefreshCw className="w-3 h-3 animate-spin duration-3000" />
                  </div>
                  <div className="p-3 bg-neutral-900 border border-white/5 text-neutral-500 rounded-2xl rounded-bl-none flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Preset Options Pills Bar */}
            <div className="px-4 py-2 bg-neutral-950/80 border-t border-white/5">
              <span className="text-[10px] font-mono text-neutral-500 block mb-1.5 flex items-center gap-1 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-[#0070FF]" /> Quick Questions
              </span>
              <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-none no-scrollbar">
                {PRESET_QUESTIONS.map((pq) => (
                  <button
                    key={pq.id}
                    onClick={() => handlePresetClick(pq)}
                    disabled={isTyping}
                    className="text-[11px] bg-white/[0.02] border border-white/5 text-neutral-300 px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-[#0070FF]/10 hover:border-[#0070FF]/30 hover:text-white transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {pq.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Direct Input Form */}
            <form 
              onSubmit={handleSubmit}
              className="p-3 bg-neutral-950 border-t border-white/5 flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 bg-white/[0.02] border border-white/5 rounded-xl text-xs md:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#0070FF]/50 transition-all font-sans"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="p-2 bg-[#0070FF] hover:bg-blue-600 rounded-xl text-white transition-all shrink-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-[#0070FF]/10 hover:shadow-[#0070FF]/20"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
