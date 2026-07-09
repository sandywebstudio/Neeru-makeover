import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ServiceCategory } from "../types";

export default function Services() {
  const categories: ServiceCategory[] = [
    {
      id: "bridal",
      title: "Bridal Artistry",
      subtitle: "EXQUISITE WEDDING LOOKS",
      image: "/bridalartistry.jpg",
      items: [
        "Bridal Makeup",
        "Signature Airbrush Bridal Makeup",
        "Glass Skin Cocktail Glam",
        "HD Waterproof Reception Makeup",
        "Engagement Makeup",
        "Haldi Makeup",
        "Mehndi Makeup",
        "Sangeet Makeup",
        "Traditional Makeup",
        "Creative Makeup",
        "Nude Dewy Makeup",
        "Pre Bridal Makeup",
      ],
    },
    {
      id: "hair",
      title: "Hair Styling",
      subtitle: "PROFESSIONAL COIFFURE",
      image: "/hairstyling.jpg",
      items: [
        "Hair Styling",
        "Hair Cut",
        "Hair Spa",
        "Hair Treatment",
        "Hair Coloring",
        "Hair Smoothening",
      ],
    },
    {
      id: "skin",
      title: "Skin & Beauty",
      subtitle: "RADIANT SPA & CARE",
      image: "/skin_beauty.jpg",
      items: [
        "Facial",
        "Cleanup",
        "Skin Care",
        "Party Makeup",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#faf6eb]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs font-bold tracking-[0.3em] text-[#bc933f] uppercase block"
          >
            Our Expertise
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c1c1c] tracking-tight"
          >
            Signature Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 font-sans text-sm md:text-base text-gray-500 leading-relaxed font-light max-w-2xl mx-auto"
          >
            Experience world-class beauty treatments designed to enhance your natural radiance.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gold-100 transition-all duration-300 flex flex-col h-full"
            >
              {/* Category Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-sans text-[10px] tracking-widest font-bold text-gold-300 uppercase block mb-1">
                    {category.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Category Service Items List */}
              <div className="p-6 md:p-8 flex-grow">
                <ul className="space-y-3.5">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start text-left text-gray-700 font-sans text-sm font-medium">
                      <Sparkles className="w-4 h-4 text-[#bc933f] shrink-0 mt-0.5 mr-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Decorative Gold Line */}
              <div className="h-1 w-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
