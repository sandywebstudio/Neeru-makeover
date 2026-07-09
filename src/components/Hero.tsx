import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[60vh] xs:min-h-[65vh] sm:min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden pt-24 pb-8 sm:pt-36 sm:pb-16 md:pt-44 md:pb-24"
    >
      {/* Background Image with Dark Overlay - adjusted positioning for desktop/mobile views */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Luxury Traditional Bridal Makeup"
          className="w-full h-full object-cover object-[center_52%] sm:object-[center_42%] md:object-[center_35%] lg:object-[center_28%] scale-105 filter brightness-[0.55] transition-all duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[#121212]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 pb-4">
        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-2"
        >
          <span className="font-sans text-[7.5px] xs:text-[8.5px] sm:text-[10px] md:text-xs tracking-[0.08em] xs:tracking-[0.12em] sm:tracking-[0.18em] md:tracking-[0.22em] font-semibold text-[#bc933f] uppercase bg-black/65 px-2 py-0.5 xs:px-3 xs:py-1 rounded-full border border-[#bc933f]/30 inline-block text-center max-w-full">
            Professional Makeup Artist & Hair Stylist
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 sm:mt-8 font-serif text-[32px] xs:text-[38px] sm:text-[46px] md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.2] xs:leading-[1.15] whitespace-nowrap"
        >
          Unlock Your Beauty Potential
          <span className="block mt-2 xs:mt-3 italic font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 text-[25px] xs:text-[30px] sm:text-[38px] md:text-4xl lg:text-5xl xl:text-[56px] whitespace-nowrap">
            Embrace Your Inner Glam
          </span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 sm:mt-6 max-w-2xl mx-auto font-sans text-[9px] xs:text-[11px] sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed font-light px-2 whitespace-nowrap"
        >
          Luxury Bridal Makeup, Hair Styling, Skin Care and Beauty Services
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#contact"
            className="flex items-center justify-center space-x-2 bg-[#bc933f] hover:bg-[#a1782f] text-white px-8 py-4 rounded-full font-sans text-xs sm:text-sm font-bold tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 active:scale-95 group w-full sm:w-auto shadow-md"
          >
            <span>BOOK APPOINTMENT</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="tel:07877316773"
            className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-sans text-xs sm:text-sm font-bold tracking-widest transition-all duration-300 hover:shadow-lg active:scale-95 w-full sm:w-auto shadow-md"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>CALL NOW</span>
          </a>

          <a
            href="https://wa.me/917877316773"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-full font-sans text-xs sm:text-sm font-bold tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 active:scale-95 w-full sm:w-auto shadow-md group"
          >
            <svg
              className="w-4.5 h-4.5 fill-current transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                fill="currentColor"
              />
            </svg>
            <span>WHATSAPP</span>
          </a>
        </motion.div>
      </div>

      {/* Decorative Wave/Gradient Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />
    </section>
  );
}
