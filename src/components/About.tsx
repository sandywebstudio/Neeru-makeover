import { Star } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="pt-10 pb-16 sm:pt-16 sm:pb-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Salon Photo with Badge Overlay */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/saloon.jpg"
                alt="Neeru Makeover Salon Interior"
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Image Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Overlap Rating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-2 md:right-6 bg-white rounded-xl shadow-xl p-5 max-w-[280px] border border-gold-100"
            >
              <div className="flex items-center space-x-2">
                <div className="flex text-[#bc933f]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="font-sans font-bold text-gray-800 text-lg">5.0</span>
              </div>
              <p className="mt-2 font-sans text-xs text-gray-600 leading-relaxed">
                Neem Ka Thana's most trusted luxury salon.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Editorial Narrative & Statistics */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tagline */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs font-bold tracking-[0.3em] text-[#bc933f] uppercase"
            >
              Neeru Makeover
            </motion.span>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c1c1c] tracking-tight leading-tight"
            >
              Where Elegance <br />Meets Artistry
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 space-y-4 font-sans text-sm md:text-base text-gray-600 leading-relaxed font-light"
            >
              <p>
                Welcome to Neeru Makeover, the most trusted ladies beauty salon in Neem Ka Thana. We are a sanctuary where every woman walks in to be transformed and walks out feeling like royalty.
              </p>
              <p>
                Blending traditional Indian bridal artistry with modern luxury studio aesthetics, our unhurried, opulent environment ensures you receive the highest standard of personalized care. From premium beauty products to a meticulously hygienic environment, we craft looks that celebrate your unique beauty.
              </p>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-12"
            >
              <div>
                <span className="block font-serif text-4xl md:text-5xl font-bold text-[#bc933f]">
                  100+
                </span>
                <span className="block mt-1 font-sans text-[11px] font-bold tracking-widest text-gray-400 uppercase">
                  Happy Brides
                </span>
              </div>
              <div className="border-l border-gray-200 pl-12">
                <span className="block font-serif text-4xl md:text-5xl font-bold text-[#bc933f]">
                  5+
                </span>
                <span className="block mt-1 font-sans text-[11px] font-bold tracking-widest text-gray-400 uppercase">
                  Years Experience
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
