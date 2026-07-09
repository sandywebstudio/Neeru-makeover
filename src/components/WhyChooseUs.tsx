import { ComponentType } from "react";
import {
  Award,
  Gem,
  Sparkles,
  Tag,
  Users,
  ShieldCheck,
  ThumbsUp,
  Heart,
} from "lucide-react";
import { motion } from "motion/react";

interface ReasonItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
}

export default function WhyChooseUs() {
  const reasons: ReasonItem[] = [
    {
      icon: Award,
      title: "Experienced Makeup Artist",
    },
    {
      icon: Gem,
      title: "Premium Products",
    },
    {
      icon: Sparkles,
      title: "Luxury Salon",
    },
    {
      icon: Tag,
      title: "Affordable Packages",
    },
    {
      icon: Users,
      title: "Professional Staff",
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Environment",
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
    },
    {
      icon: Heart,
      title: "Bridal Specialists",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs font-bold tracking-[0.3em] text-[#bc933f] uppercase"
          >
            The Neeru Standard
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c1c1c] tracking-tight"
          >
            Why Choose Us
          </motion.h2>

          <div className="w-16 h-[2px] bg-[#bc933f] mx-auto mt-6" />
        </div>

        {/* Badges Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-16 items-center justify-center max-w-5xl mx-auto"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center group"
              >
                {/* Circle Container with Thin Gold Border & Custom Icon */}
                <div className="w-20 h-20 rounded-full border border-gold-200 flex items-center justify-center bg-gold-50/50 text-[#bc933f] group-hover:bg-[#bc933f] group-hover:text-white group-hover:border-[#bc933f] group-hover:shadow-lg group-hover:shadow-gold-500/10 transition-all duration-300 transform group-hover:-translate-y-1.5">
                  <Icon className="w-8 h-8 stroke-[1.25]" />
                </div>
                
                {/* Title */}
                <h3 className="mt-4 font-sans text-xs sm:text-sm font-semibold tracking-wide text-gray-800 text-center max-w-[160px] leading-relaxed transition-colors duration-300 group-hover:text-[#bc933f]">
                  {reason.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
