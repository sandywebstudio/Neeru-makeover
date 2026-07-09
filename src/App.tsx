/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";
import Faq from "./components/Faq";
import Map from "./components/Map";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-beige text-brand-dark flex flex-col font-sans selection:bg-gold-200 selection:text-gold-950">
      {/* Sticky Top Navigation Bar */}
      <Navbar />

      {/* Main Sections Content */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* Brand Narrative & Stats Block */}
        <About />

        {/* Services Showcase Catalog */}
        <Services />

        {/* Custom Icon Badges / Reasons Grid */}
        <WhyChooseUs />

        {/* Masterpieces Photo Portfolio and Lightbox */}
        <Gallery />

        {/* Slider Client Reviews and Ratings */}
        <Reviews />

        {/* Interactive Booking Scheduler and Contact list */}
        <Booking />

        {/* Smooth Accordion FAQ Block */}
        <Faq />

        {/* Interactive Google Map Embed block */}
        <Map />
      </main>

      {/* Complete Business Footer */}
      <Footer />

      {/* Quick Action Contact Floaters (Call, WhatsApp) */}
      <FloatingActions />
    </div>
  );
}
