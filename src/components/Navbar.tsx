import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "GALLERY", href: "#gallery" },
    { name: "REVIEWS", href: "#reviews" },
    { name: "CONTACT", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#faf6eb]/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#ebdcb9]/40"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand with conditional Badge styling */}
            <a href="#home" className="flex items-center select-none group transition-all duration-300">
              <div className={`flex flex-col transition-all duration-300 ${
                isScrolled 
                  ? "p-0 bg-transparent border-transparent shadow-none" 
                  : "bg-[#faf6eb]/95 px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl shadow-lg border border-[#ebdcb9]/60"
              }`}>
                <div className="flex items-baseline">
                  <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${
                    isScrolled ? "text-[#a1782f]" : "text-[#1c1c1c]"
                  }`}>
                    Neeru
                  </span>
                  <span className={`font-sans text-xl md:text-2xl font-light ml-1.5 transition-colors duration-300 ${
                    isScrolled ? "text-gray-800 group-hover:text-[#bc933f]" : "text-[#bc933f]"
                  }`}>
                    Makeover
                  </span>
                </div>
                <span className={`font-sans text-[9px] tracking-[0.25em] font-semibold mt-0.5 uppercase transition-colors duration-300 ${
                  isScrolled ? "text-[#bc933f]" : "text-[#bc933f]"
                }`}>
                  Neemkathana
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-sans text-xs font-semibold tracking-widest transition-colors duration-300 ${
                    isScrolled ? "text-gray-800 hover:text-[#bc933f]" : "text-white hover:text-gold-200"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors ${
                  isScrolled ? "text-gray-800 hover:text-[#bc933f]" : "text-white hover:text-gold-200"
                }`}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-40 bg-[#121212]/98 backdrop-blur-lg md:hidden flex flex-col justify-start px-6 py-10 space-y-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-sans text-lg font-medium tracking-widest text-white/95 hover:text-[#bc933f] border-b border-white/5 pb-3 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-8 flex flex-col space-y-4">
              <a
                href="tel:07877316773"
                className="flex items-center justify-center space-x-3 w-full bg-[#bc933f] hover:bg-[#a1782f] text-white py-3 rounded-full font-semibold transition-all duration-300 text-sm tracking-wider"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW</span>
              </a>
              <a
                href="https://wa.me/917877316773"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-3 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-full font-semibold transition-all duration-300 text-sm tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
