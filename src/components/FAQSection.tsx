import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] bg-[#0070FF]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#0070FF] bg-[#0070FF]/10 px-3 py-1 rounded-full border border-[#0070FF]/20">
            Answers
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-white mt-4 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Questions</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto">
            Got a question about the workflow, tools, or delivery? Find the answers to common inquiries below.
          </p>
        </motion.div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 relative z-10">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`glass-panel rounded-2xl transition-all duration-300 ${
                isOpen ? 'border-[#0070FF]/30 bg-[#0d0d0d]' : 'hover:border-white/10'
              }`}
            >
              {/* Accordion Header Trigger */}
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
              >
                <div className="flex items-center gap-4 pr-4">
                  <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                    isOpen ? 'text-[#0070FF]' : 'text-neutral-500 group-hover:text-neutral-300'
                  }`} />
                  <span className={`font-display font-semibold text-base md:text-lg transition-colors duration-300 ${
                    isOpen ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                
                {/* Chevron icon rotates when active */}
                <div className={`p-1.5 rounded-lg bg-white/[0.02] border border-white/5 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#0070FF] border-[#0070FF]/20 bg-[#0070FF]/10' : 'text-neutral-400'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Accordion Body with Slide Motion */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 border-t border-white/5 text-neutral-400 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
