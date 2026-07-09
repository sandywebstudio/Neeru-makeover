import { useState, ChangeEvent, FormEvent } from "react";
import { MapPin, Phone, Clock, ArrowUpRight, CheckCircle2, MessageSquare, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    "Bridal Makeup & Styling",
    "Signature Airbrush Bridal Makeup",
    "Glass Skin Cocktail Glam",
    "HD Waterproof Reception Makeup",
    "Engagement / Reception Styling",
    "Haldi / Mehndi / Sangeet Makeup",
    "Hair Styling & Cut",
    "Hair Spa & Smoothening",
    "Facial & Skincare Treatment",
    "Party / Guest Makeup",
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.date) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 bg-[#faf6eb]/40 border border-gold-200/50 p-6 sm:p-8 md:p-10 rounded-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-left">
              Book an Appointment
            </h2>
            <p className="mt-2 font-sans text-sm text-gray-500 font-light text-left mb-8">
              Reserve your session at Neem Ka Thana's finest salon.
            </p>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="booking-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 text-left"
                >
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full bg-white border border-gold-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bc933f] focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      className="w-full bg-white border border-gold-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bc933f] focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  {/* Service Required */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-gold-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#bc933f] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-white border border-gold-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#bc933f] focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific requirements?"
                      className="w-full bg-white border border-gold-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bc933f] focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#bc933f] hover:bg-[#a1782f] text-white py-4 rounded-lg font-sans text-xs font-bold tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg hover:shadow-gold-500/10 active:scale-[0.98]"
                  >
                    {isSubmitting ? "PROCESSING REQUEST..." : "SUBMIT REQUEST"}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-green-200 rounded-xl p-8 text-center flex flex-col items-center justify-center my-10 py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 border border-green-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-bold text-gray-900">
                    Booking Request Received!
                  </h3>
                  <p className="mt-3 font-sans text-sm text-gray-500 max-w-sm leading-relaxed font-light">
                    Thank you for choosing Neeru Makeover. We have received your booking details and will call you shortly to confirm your slot.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 border border-gold-400 hover:border-[#bc933f] text-[#bc933f] hover:bg-gold-50 px-6 py-2.5 rounded-full font-sans text-xs font-bold tracking-widest transition-all duration-200"
                  >
                    BOOK ANOTHER SESSION
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-8 h-full">
            <div className="text-left">
              <span className="font-sans text-xs font-bold tracking-[0.3em] text-[#bc933f] uppercase block">
                Visit Neeru Makeover
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Visit Us Today
              </h2>
            </div>

            {/* Address Info block */}
            <div className="space-y-6 text-left">
              {/* Address detail */}
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gold-50/50 border border-transparent hover:border-gold-100 transition-all duration-200">
                <div className="w-11 h-11 shrink-0 rounded-full bg-gold-50 border border-gold-200 text-[#bc933f] flex items-center justify-center">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400">
                    Address
                  </h4>
                  <p className="mt-1.5 font-sans text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                    Shreeji Plaza, Ramlila Maidan Road, Opposite LIC Office, New Colony, Neem Ka Thana, Rajasthan 332713
                  </p>
                </div>
              </div>

              {/* Phone detail */}
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gold-50/50 border border-transparent hover:border-gold-100 transition-all duration-200">
                <div className="w-11 h-11 shrink-0 rounded-full bg-gold-50 border border-gold-200 text-[#bc933f] flex items-center justify-center">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400">
                    Phone
                  </h4>
                  <div className="mt-1.5 flex flex-col space-y-1">
                    <a
                      href="tel:07877316773"
                      className="font-sans text-sm md:text-base text-gray-700 hover:text-[#bc933f] transition-colors leading-relaxed font-semibold flex items-center"
                    >
                      <span>07877316773</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-gray-400" />
                    </a>
                    <a
                      href="tel:6376357370"
                      className="font-sans text-sm md:text-base text-gray-700 hover:text-[#bc933f] transition-colors leading-relaxed font-semibold flex items-center"
                    >
                      <span>6376357370</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-gray-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours detail */}
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gold-50/50 border border-transparent hover:border-gold-100 transition-all duration-200">
                <div className="w-11 h-11 shrink-0 rounded-full bg-gold-50 border border-gold-200 text-[#bc933f] flex items-center justify-center">
                  <Clock className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400">
                    Hours
                  </h4>
                  <div className="mt-1.5 font-sans text-sm md:text-base text-gray-700 space-y-1 font-medium">
                    <p className="flex justify-between gap-4">
                      <span>Mon - Sat:</span>
                      <span className="font-semibold">9:00 AM - 8:00 PM</span>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span>Sunday:</span>
                      <span className="font-semibold text-[#bc933f]">10:00 AM - 6:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Button Row — matches 00:26 in video exactly */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <a
                href="tel:07877316773"
                className="flex items-center justify-center space-x-2 bg-[#bc933f] hover:bg-[#a1782f] text-white py-3.5 rounded-xl font-sans text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-gold-500/10 active:scale-95"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/917877316773"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 rounded-xl font-sans text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-green-500/10 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://maps.google.com/?q=Neeru+Makeover+Shreeji+Plaza+Neem+Ka+Thana+Rajasthan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#4285f4] hover:bg-[#2a75e3] text-white py-3.5 rounded-xl font-sans text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/10 active:scale-95"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>Directions</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
