import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ReviewItem } from "../types";

export default function Reviews() {
  const reviews: ReviewItem[] = [
    {
      id: "r2",
      author: "Monli Jan",
      avatarLetter: "M",
      rating: 5,
      time: "9 months ago",
      text: "I highly recommend to all people to go there once and check services. Great products, great service, and staff behaviour also very good...!",
    },
    {
      id: "r3",
      author: "Shalu Garg",
      avatarLetter: "S",
      rating: 5,
      time: "6 months ago",
      text: "It was really good. I liked my new hair cut. Thank so much Neeru Makeup artist and staff also.",
    },
    {
      id: "r1",
      author: "Sandeep Kumar",
      avatarLetter: "S",
      rating: 5,
      time: "9 months ago",
      text: "best make-up artist neeru ma'am ka behaviour bhut acha lga staff bhut coperative h ynha ki service bhut achi lgi thank you neeru makeover salon",
    },
    {
      id: "r4",
      author: "Kamal Jangid",
      avatarLetter: "K",
      rating: 5,
      time: "10 months ago",
      text: "new open salon neeru makeover is best saloon in neem ka thana... staff behave in politely way...",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length - itemsPerPage + 1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= reviews.length - itemsPerPage ? prev : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#faf6eb]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white border border-gold-200 rounded-full px-4 py-1.5 shadow-sm"
          >
            <span className="font-sans font-bold text-gray-800 text-xs">5.0</span>
            <div className="flex text-[#bc933f]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-gray-300 font-sans text-xs">|</span>
            <span className="font-sans text-xs text-gray-500 font-medium">27+ Google Reviews</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c1c1c] tracking-tight"
          >
            Client Love
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto px-2 md:px-6">
          <div className="overflow-hidden py-4">
            <motion.div
              animate={{ x: activeIndex === 0 ? "0%" : `calc(-${activeIndex * (100 / itemsPerPage)}% - ${activeIndex * (24 / itemsPerPage)}px)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex gap-6"
              style={{ width: "100%" }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl border border-gold-100 p-6 md:p-8 shadow-sm flex flex-col justify-between relative hover:shadow-md transition-shadow duration-300 shrink-0"
                  style={{ 
                    width: itemsPerPage === 1 
                      ? "100%" 
                      : itemsPerPage === 2 
                        ? "calc(50% - 12px)" 
                        : "calc(33.333% - 16px)" 
                  }}
                >
                  <div>
                    {/* Stars */}
                    <div className="flex text-[#bc933f] mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed italic font-light">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Author Meta Details */}
                  <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {/* Avatar initial letter circle */}
                      <div className="w-10 h-10 rounded-full bg-gold-100 border border-gold-200 text-[#bc933f] font-sans font-bold flex items-center justify-center">
                        {review.avatarLetter}
                      </div>
                      
                      {/* Text */}
                      <div className="text-left">
                        <h4 className="font-sans text-xs md:text-sm font-semibold text-gray-800">
                          {review.author}
                        </h4>
                        <span className="font-sans text-[11px] text-gray-400">
                          {review.time}
                        </span>
                      </div>
                    </div>

                    {/* Google G Logo Badge */}
                    <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-gray-50 rounded-full border border-gray-100">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons and Pagination Indicators */}
          <div className="mt-10 flex items-center justify-center space-x-6">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`p-2.5 rounded-full border transition-all ${
                activeIndex === 0
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gold-300 text-[#bc933f] hover:bg-[#bc933f] hover:text-white"
              }`}
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination dots indicator */}
            <div className="flex space-x-2">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "w-6 bg-[#bc933f]" : "w-2 bg-gold-200"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={activeIndex >= reviews.length - itemsPerPage}
              className={`p-2.5 rounded-full border transition-all ${
                activeIndex >= reviews.length - itemsPerPage
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gold-300 text-[#bc933f] hover:bg-[#bc933f] hover:text-white"
              }`}
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
