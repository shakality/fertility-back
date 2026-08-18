import React from 'react';
import { BookOpen, Star, FileText, Globe, CheckCircle, Heart, Sparkles } from 'lucide-react';
import { BOOK_DETAILS } from '../data/bookData';
import { BookMockup } from './BookMockup';
import { OSLogo } from './OSLogo';

interface HeroSectionProps {
  onOpenOrder: () => void;
  onOpenReader: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOrder, onOpenReader }) => {
  return (
    <section 
      id="hero" 
      className="relative text-slate-900 overflow-hidden"
    >
      {/* Soft Ambient Rose & Lavender Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-3xl" />

        {/* Decorative Wave Curves */}
        <svg className="w-full h-full object-cover opacity-15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600">
          <path d="M -50,160 Q 250,30 500,200 T 1050,100" fill="none" stroke="#d91b7a" strokeWidth="2" strokeDasharray="6 8" />
          <path d="M 0,360 Q 300,200 600,380 T 1100,280" fill="none" stroke="#6b21a8" strokeWidth="1.5" />
          <path d="M 80,500 Q 450,320 750,520 T 1150,400" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeDasharray="4 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text, Ribbons & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Publisher Brand Eyebrow with the Official OS Logo */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xs p-2 sm:px-3 sm:py-2 rounded-2xl border border-purple-100/80 shadow-xs inline-flex">
              <OSLogo className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 drop-shadow-xs" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#0047ba] uppercase leading-tight font-['Outfit',sans-serif]">
                  Olumind Synergy Venture
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                  Health • Wellness • A Better Tomorrow
                </span>
              </div>
            </div>

            {/* Main Title matching Book Cover Typography & Dual Colors */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-['Outfit',sans-serif] leading-[1.08]">
                <span className="text-[#200844]">FERTILITY </span>
                <span className="text-[#d91b7a] drop-shadow-xs">BACK</span>
              </h1>
              
              {/* Signature Purple Ribbon from Book Cover */}
              <div className="bg-gradient-to-r from-[#2a0845] via-[#431475] to-[#2a0845] text-white px-5 py-3 rounded-xl shadow-lg shadow-purple-900/20 border border-purple-400/30 inline-block">
                <p className="text-sm sm:text-base md:text-lg font-medium font-['Playfair_Display',serif] italic text-pink-100">
                  A Complete Guide to Preparing Your Body for Pregnancy Naturally and Safely
                </p>
              </div>
            </div>

            {/* Sub-headline & Description */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#3b1464]">
                Your Healthy Body Today, Your Happy Pregnancy Tomorrow
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                {BOOK_DETAILS.heroDescription}
              </p>
            </div>

            {/* Yellow Highlight Pill from Book Cover */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-4 bg-[#fef08a] border border-amber-300 text-[#200736] px-4 py-2 rounded-lg text-xs sm:text-sm font-bold shadow-xs">
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-emerald-700" /> Worksheets</span>
              <span className="text-amber-500">•</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-emerald-700" /> Checklists</span>
              <span className="text-amber-500">•</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-emerald-700" /> 30-Day Challenge</span>
              <span className="text-amber-500">•</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-emerald-700" /> 90-Day Plan</span>
            </div>

            {/* Action Buttons: Gold Order Now (Selar link) + Magenta/White Demo Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href={BOOK_DETAILS.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-order-now-btn"
                className="bg-gradient-to-r from-[#f5b82e] via-[#fbbf24] to-[#f59e0b] hover:from-[#eab308] hover:to-[#d97706] text-[#200736] font-extrabold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-400/40 hover:shadow-amber-500/50 transition-all text-sm sm:text-base transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-amber-300 inline-flex items-center justify-center gap-2 text-decoration-none"
              >
                <span>Order Now</span>
              </a>

              <button
                onClick={onOpenReader}
                id="hero-read-demo-btn"
                className="bg-white hover:bg-pink-50 text-[#2a0845] font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl border-2 border-[#d91b7a] hover:border-[#be185d] shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#d91b7a]" />
                Read Free Demo
              </button>
            </div>

            {/* Three Stat Badges (Pages, Language, Ratings) */}
            <div className="pt-6 border-t border-purple-200/70 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl">
              
              {/* Stat 1: Pages (Golden Yellow) */}
              <div className="flex items-start gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0 shadow-xs">
                  <FileText className="w-4.5 h-4.5 text-amber-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Pages</div>
                  <div className="text-sm sm:text-base font-extrabold text-[#200844]">70 pages</div>
                </div>
              </div>

              {/* Stat 2: Language (Royal Purple) */}
              <div className="flex items-start gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-100 border border-purple-300 flex items-center justify-center text-purple-700 shrink-0 shadow-xs">
                  <Globe className="w-4.5 h-4.5 text-purple-700" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Language</div>
                  <div className="text-sm sm:text-base font-extrabold text-[#200844]">English</div>
                </div>
              </div>

              {/* Stat 3: Ratings (Hot Pink / Gold) */}
              <div className="flex items-start gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-pink-100 border border-pink-300 flex items-center justify-center text-pink-700 shrink-0 shadow-xs">
                  <Star className="w-4.5 h-4.5 text-[#d91b7a] fill-[#d91b7a]" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Ratings</div>
                  <div className="text-sm sm:text-base font-extrabold text-[#200844]">4.9/5 <span className="text-xs text-slate-500 font-normal hidden sm:inline">(380 ratings)</span></div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: 3D Book Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <BookMockup onPreviewClick={onOpenReader} />
          </div>

        </div>

        {/* Publisher Footer Bar from Book Cover */}
        <div className="mt-12 pt-6 border-t border-purple-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-3">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 font-medium">
            <OSLogo className="w-5 h-5 shrink-0" />
            <span className="font-bold text-[#200844]">Author: Olumind Synergy Venture</span>
            <span className="text-[#d91b7a] font-bold">•</span>
            <span className="text-[#d91b7a] font-semibold">📍 Lagos, Nigeria</span>
            <span className="text-[#d91b7a] font-bold">•</span>
            <span>Health • Wellness • A Better Tomorrow</span>
          </div>
          <div className="text-[11px] text-slate-500 text-center sm:text-right">
            Copyright © {new Date().getFullYear()} Olumind Synergy Venture. All Rights Reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

