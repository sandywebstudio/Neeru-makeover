import { Instagram, Facebook, Youtube, ChevronUp, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] text-white pt-20 pb-8 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand & Socials (cols 4) */}
          <div className="lg:col-span-4 flex flex-col justify-start text-left">
            <a href="#home" className="flex flex-col select-none group self-start">
              <div className="flex items-baseline">
                <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#bc933f]">
                  Neeru
                </span>
                <span className="font-sans text-xl md:text-2xl font-light ml-1.5 text-gray-300">
                  Makeover
                </span>
              </div>
              <span className="font-sans text-[9px] tracking-[0.25em] font-medium text-gold-400 mt-0.5 uppercase">
                Neemkathana
              </span>
            </a>
            
            <p className="mt-5 font-sans text-xs md:text-sm text-gray-400 leading-relaxed font-light">
              Neem Ka Thana's premier luxury bridal makeup studio and beauty salon. Where elegance meets artistry.
            </p>

            {/* Social Icons in circular badges */}
            <div className="flex items-center space-x-3.5 mt-6">
              <a
                href="https://www.instagram.com/neerumakeoverofficial?igsh=bHgya20wbnk3ZGR4"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#bc933f] hover:text-[#bc933f] flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors duration-300"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#bc933f] hover:text-[#bc933f] flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors duration-300"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#bc933f] hover:text-[#bc933f] flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors duration-300"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (cols 2) */}
          <div className="lg:col-span-2 text-left">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-gold-400 mb-6 pb-2 border-b border-white/5">
              Quick Links
            </h3>
            <ul className="space-y-3.5 font-sans text-xs sm:text-sm font-medium text-gray-400">
              <li>
                <a href="#home" className="hover:text-[#bc933f] transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#bc933f] transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#bc933f] transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#bc933f] transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#bc933f] transition-colors duration-300">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#bc933f] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Business Hours (cols 3) */}
          <div className="lg:col-span-3 text-left">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-gold-400 mb-6 pb-2 border-b border-white/5">
              Business Hours
            </h3>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-gray-400 font-medium">
              <li className="flex justify-between pb-2 border-b border-white/5">
                <span>Monday - Saturday:</span>
                <span className="text-white font-semibold">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday:</span>
                <span className="text-[#bc933f] font-semibold">10:00 AM - 6:00 PM</span>
              </li>
            </ul>
            <p className="mt-4 font-sans text-xs font-bold text-[#bc933f] uppercase tracking-widest">
              Open all 7 days a week
            </p>
          </div>

          {/* Column 4: Contact Us (cols 3) */}
          <div className="lg:col-span-3 text-left">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-gold-400 mb-6 pb-2 border-b border-white/5">
              Contact Us
            </h3>
            <ul className="space-y-4 font-sans text-xs sm:text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#bc933f] shrink-0 mt-0.5" />
                <span className="font-light">
                  Shreeji Plaza, Ramlila Maidan Road, Opposite LIC Office, New Colony, Neem Ka Thana, Rajasthan 332713
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#bc933f] shrink-0" />
                <div className="flex flex-col font-medium">
                  <a href="tel:07877316773" className="hover:text-[#bc933f] transition-colors">
                    07877316773
                  </a>
                  <a href="tel:6376357370" className="hover:text-[#bc933f] transition-colors">
                    6376357370
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-gray-500">
          <div>
            <p>© {currentYear} Neeru Makeover. All rights reserved.</p>
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={handleScrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-[#bc933f] font-bold tracking-widest transition-colors duration-200 group cursor-pointer"
            >
              <span>Back to Top</span>
              <span className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-[#bc933f] transition-colors">
                <ChevronUp className="w-4 h-4" />
              </span>
            </button>
          </div>

          <div className="flex items-center space-x-1 tracking-wider text-gray-500 uppercase font-semibold text-[10px]">
            <span>DESIGNED BY sandywebstudio</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
