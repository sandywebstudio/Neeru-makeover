import { useState } from "react";
import { Instagram, Star, X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GalleryImage } from "../types";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: "g1",
      url: "/masterpiece1.jpg",
      category: "Bridal",
      alt: "Modern Bride in Glam Sunglasses",
    },
    {
      id: "g2",
      url: "/masterpiece2.jpg",
      category: "Bridal",
      alt: "Elegant Gold Jewelry & Bangles",
    },
    {
      id: "g3",
      url: "/masterpiece3.jpg",
      category: "Bridal",
      alt: "Traditional Royal Brides in Red",
    },
    {
      id: "g4",
      url: "/masterpiece4.jpg",
      category: "Salon",
      alt: "Luxury Salon Lighting and Stations",
    },
    {
      id: "g5",
      url: "/masterpiece5.jpg",
      category: "Bridal",
      alt: "Elegant Bride in Pink Lehenga",
    },
    {
      id: "g6",
      url: "/masterpiece6.jpg",
      category: "Bridal",
      alt: "Royal Bride in Bright Yellow outfit",
    },
    {
      id: "g7",
      url: "/masterpiece7.jpg",
      category: "Bridal",
      alt: "Stunning Bride in Green Designer Lehenga",
    },
    {
      id: "g8",
      url: "/masterpiece8.jpg",
      category: "Makeup",
      alt: "Signature Makeover Glamour Look",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Floating Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="font-sans text-xs font-bold tracking-[0.3em] text-[#bc933f] uppercase block">
              Portfolio
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Our Masterpieces
            </h2>
          </div>
          
          <a
            href="https://www.instagram.com/neerumakeoverofficial?igsh=bHgya20wbnk3ZGR4"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center space-x-2.5 border border-white/20 hover:border-[#bc933f] hover:text-[#bc933f] px-6 py-3.5 rounded-full font-sans text-xs font-bold tracking-widest transition-all duration-300 self-start md:self-auto bg-white/5 hover:bg-white/10"
          >
            <Instagram className="w-4 h-4" />
            <span>VIEW INSTAGRAM</span>
          </a>
        </div>

        {/* Gallery Masonry/Flex Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedImage(img)}
              className="relative rounded-xl overflow-hidden cursor-pointer group aspect-square"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              
              {/* Star Outline Center Hover Effect — EXACT MATCH for Screen Recording */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#bc933f] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 bg-black/40">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#bc933f] fill-transparent" />
                </div>
              </div>

              {/* Small Category Bottom Tag */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-sans text-[8px] sm:text-[10px] font-bold tracking-wider sm:tracking-widest text-[#bc933f] bg-black/75 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md uppercase border border-gold-400/20">
                  {img.category}
                </span>
                <span className="text-white text-xs hidden sm:inline">
                  <Eye className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-[#bc933f] transition-colors p-2 bg-white/5 rounded-full"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/75 p-4 text-center border-t border-white/5">
                <p className="font-serif text-lg font-bold text-white">{selectedImage.alt}</p>
                <p className="font-sans text-xs text-[#bc933f] uppercase tracking-widest mt-1">
                  {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
