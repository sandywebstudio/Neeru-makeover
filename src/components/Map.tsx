import { MapPin, Navigation, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { motion } from "motion/react";

export default function Map() {
  const mapQueryUrl = "https://maps.google.com/maps?q=Neeru%20Makeover%20Shreeji%20Plaza%20Ramlila%20Maidan%20Road%20Neem%20Ka%20Thana%20Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="location-map" className="relative h-[400px] md:h-[500px] w-full bg-gray-100 overflow-hidden border-y border-gold-200">
      {/* Real Interactive Google Maps Embed with Custom Stylings */}
      <iframe
        title="Neeru Makeover Location Map"
        src={mapQueryUrl}
        width="100%"
        height="100%"
        className="border-0 filter brightness-95 contrast-105"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Elegant Map Controls & Overlays - EXACT MATCH to Video features */}
      <div className="absolute top-4 left-4 z-10">
        <a
          href="https://maps.google.com/?q=Neeru+Makeover+Shreeji+Plaza+Neem+Ka+Thana+Rajasthan"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2.5 rounded-lg shadow-md hover:bg-white text-xs font-bold tracking-widest border border-gold-100 transition-all duration-200"
        >
          <span>Open in Maps</span>
          <Navigation className="w-3.5 h-3.5 text-[#bc933f]" />
        </a>
      </div>

      {/* Helpful Interactive Instructions Overlay - Matches video text */}
      <div className="absolute inset-x-0 bottom-6 pointer-events-none flex justify-center z-10">
        <span className="bg-black/75 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-xs font-sans tracking-wider shadow-lg border border-white/5">
          Use ctrl + scroll to zoom the map
        </span>
      </div>

      {/* Small floating marker badge for extreme professional design */}
      <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-[220px] text-left border border-gold-100 hidden sm:block">
        <div className="flex items-center space-x-2 text-[#bc933f]">
          <MapPin className="w-4 h-4 fill-[#bc933f]/10" />
          <span className="font-sans text-xs font-bold uppercase tracking-wider">Neeru Makeover</span>
        </div>
        <p className="mt-1.5 font-sans text-[11px] text-gray-500 leading-relaxed font-light">
          Shreeji Plaza, Opposite LIC Office, Neem Ka Thana, Rajasthan.
        </p>
      </div>
    </section>
  );
}
