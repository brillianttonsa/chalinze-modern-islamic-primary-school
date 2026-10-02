import { useState } from 'react';

export default function FindUsSection() {
  const [copied, setCopied] = useState(false);

  const locationText = "Chalinze Mzee, Tanzania. Past the former weighbridge (mizani ya zamani).";

  const handleCopy = () => {
    navigator.clipboard.writeText(locationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="bg-[#fbf9f5] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Text & Info Cards (5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-medium">
              <span className="w-6 h-[1px] bg-[#d4af37]"></span>
              <span>Find Us</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0b291e] font-normal leading-tight">
              Come find your way to Chalinze.
            </h2>
          </div>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
            The school is in the Chalinze Mzee area, past the former weighbridge (mizani ya zamani). Please confirm the exact entrance and visiting arrangements with administration before travelling.
          </p>

          {/* Location Box */}
          <div className="border border-gray-300/80 bg-white/60 p-5 flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#f4ebd0] flex items-center justify-center shrink-0 mt-0.5 text-[#0b291e]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-serif text-base text-[#0b291e] font-medium">Chalinze Mzee, Tanzania</h4>
              <p className="text-xs text-gray-600 mt-1 leading-normal">
                Past the former weighbridge<br />(mizani ya zamani)
              </p>
            </div>
          </div>

          {/* Copy Location Description Button */}
          <div>
            <button 
              onClick={handleCopy}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#0b291e] font-medium hover:text-[#d4af37] transition-colors group"
            >
              <span>{copied ? 'Location description copied!' : 'Copy location description'}</span>
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>

          {/* Contact Details Pending Verification Notice */}
          <div className="bg-[#f0ece1] border-l-2 border-[#d4af37] p-4 text-xs text-gray-700 space-y-1">
            <p className="font-semibold text-[#0b291e]">Contact details pending verification</p>
            <p className="text-gray-600 leading-relaxed font-light">
              An official phone number, email and WhatsApp link have not yet been provided. We will add direct contact options once confirmed.
            </p>
          </div>

        </div>

        {/* Right Column: Simulated Map (7 columns) */}
        <div className="lg:col-span-7 bg-[#dceee2] border border-gray-300 relative overflow-hidden shadow-sm">
          
          {/* Map Image / Background Placeholder */}
          <div className="relative w-full h-[440px] bg-[#d5ecd8] flex items-center justify-center overflow-hidden">
            {/* Roads pattern representation */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#b8d8be_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {/* Highway Line A14 */}
            <div className="absolute top-0 right-1/3 w-3 h-full bg-[#488257] transform rotate-12 opacity-80"></div>
            <span className="absolute top-12 right-1/3 text-[10px] bg-[#31643e] text-white px-1 font-mono rounded">A14</span>

            {/* Map Overlay Card (Top Left) */}
            <div className="absolute top-4 left-4 bg-white shadow-md p-3 flex items-center justify-between gap-4 w-72 border border-gray-200">
              <div>
                <h5 className="font-serif text-sm font-bold text-[#0b291e]">Chalinze Mzee</h5>
                <p className="text-[11px] text-gray-500">Chalinze Mzee, Tanzania</p>
              </div>
              <div className="flex items-center gap-1.5">
                <button aria-label="Share location" className="p-1.5 hover:bg-gray-100 rounded text-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                </button>
                <button aria-label="Get directions" className="p-1.5 hover:bg-gray-100 rounded text-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                </button>
              </div>
            </div>

            {/* Red Map Marker Pin */}
            <div className="absolute top-1/3 right-[42%] flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
              <div className="bg-white px-2 py-0.5 shadow text-[11px] font-semibold text-[#0b291e] mb-0.5 whitespace-nowrap border border-gray-200">
                Chalinze Mzee
              </div>
              <svg className="w-8 h-8 text-red-600 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>

            {/* Landmarks on map */}
            <div className="absolute top-[52%] left-[62%] text-[10px] text-gray-700 font-medium">Masjid Bedour</div>
            <div className="absolute top-[58%] left-[45%] text-[10px] text-red-700 font-medium bg-white/80 px-1 rounded">healthcentre H</div>

            {/* Map Controls (Bottom Right) */}
            <div className="absolute bottom-16 right-4 bg-white shadow rounded p-1 flex flex-col gap-1 border border-gray-200">
              <button aria-label="Zoom in" className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 text-gray-700 text-sm font-bold">+</button>
              <div className="h-[1px] bg-gray-200"></div>
              <button aria-label="Zoom out" className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 text-gray-700 text-sm font-bold">-</button>
            </div>

            {/* Google Logo & Terms footer inside map */}
            <div className="absolute bottom-2 left-3 flex items-center gap-2 text-[10px] text-gray-600">
              <span className="font-bold text-blue-600">Google</span>
              <span>Kudiembe</span>
              <span className="ml-2">Keyboard shortcuts</span>
              <span>Map data ©2026</span>
              <span>Terms</span>
            </div>
          </div>

          {/* Dark Green Sub-bar under map */}
          <div className="bg-[#0b291e] px-4 py-2.5 flex justify-between items-center text-xs text-white/90">
            <p className="font-light">Approximate area map — not a confirmed school pin</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline flex items-center gap-1 text-white font-medium"
            >
              <span>Open in Google Maps</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
