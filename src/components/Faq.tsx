import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQItem } from "../types";

export default function Faq() {
  const faqs: FAQItem[] = [
    {
      id: "f1",
      question: "Do you provide bridal makeup?",
      answer: "Yes, we specialize in high-end, luxury Bridal Makeup including Signature Airbrush, HD Waterproof Makeup, Glass Skin Cocktail Glam, and traditional styles tailored specifically for Indian brides. Each package includes lashes and hair styling.",
    },
    {
      id: "f2",
      question: "Do you offer pre bridal packages?",
      answer: "Absolutely! We offer customized multi-session Pre-Bridal packages ranging from 3 days to 1 month before your wedding. These packages include premium gold/hydra facials, deep hair spa treatments, body polishing, threading, and waxing to ensure you glow on your big day.",
    },
    {
      id: "f3",
      question: "How can I book an appointment?",
      answer: "You can book your slot easily by filling out our online appointment form above, or instantly by calling us at 07877316773 or sending a WhatsApp message. We recommend booking bridal dates 2-3 months in advance.",
    },
    {
      id: "f4",
      question: "Where is the salon located?",
      answer: "Neeru Makeover is located at Shreeji Plaza, Ramlila Maidan Road, Opposite LIC Office, New Colony, Neem Ka Thana, Rajasthan 332713. It is right in the heart of Neem Ka Thana and is easily accessible with parking facilities.",
    },
  ];

  const [openId, setOpenId] = useState<string | null>("f1"); // First one open by default as shown in video

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-[#faf6eb]/20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-[#bc933f] uppercase block">
            Common Inquiries
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[1.5px] bg-[#bc933f] mx-auto mt-5" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-xl transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-[#bc933f] shadow-md shadow-gold-500/5"
                    : "bg-white/70 border-gray-100 hover:border-gold-300 hover:bg-white"
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3.5">
                    <Sparkles className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? "text-[#bc933f]" : "text-gray-400"}`} />
                    <span className="font-sans text-sm md:text-base font-semibold text-gray-800 tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-[#bc933f]" : ""
                    }`}
                  />
                </button>

                {/* Smooth Animated Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-gray-50 text-left">
                        <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
