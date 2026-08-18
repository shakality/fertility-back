import React, { useState } from 'react';
import { Sparkles, Eye, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import { BOOK_DETAILS } from '../data/bookData';
import { OSLogo } from './OSLogo';

interface BookMockupProps {
  onPreviewClick: () => void;
  className?: string;
}

export const BookMockup: React.FC<BookMockupProps> = ({ onPreviewClick, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={`relative group select-none flex flex-col items-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient Glow behind book */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-[#d91b7a]/30 via-purple-600/30 to-amber-400/25 rounded-3xl blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* 3D Container with Perspective & Hover Lift */}
      <div 
        className="relative cursor-pointer transition-transform duration-500 ease-out transform-gpu"
        style={{
          transform: isHovered 
            ? 'translateY(-8px) scale(1.02)' 
            : 'translateY(0px) scale(1)'
        }}
        onClick={onPreviewClick}
      >
        {/* Book Image Frame */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(32,8,68,0.5),0_15px_30px_-10px_rgba(217,27,122,0.25)] border border-purple-200/60 bg-gradient-to-b from-white to-purple-50 max-w-[320px] sm:max-w-[360px] md:max-w-[400px]">
          
          <img
            src={BOOK_DETAILS.coverImage}
            alt="Fertility Back: A Complete Guide to Preparing Your Body for Pregnancy Naturally and Safely by Olumind Synergy Venture"
            className={`w-full h-auto object-contain transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            onLoad={() => setImageLoaded(true)}
            referrerPolicy="no-referrer"
          />

          {/* Fallback skeleton while loading */}
          {!imageLoaded && (
            <div className="w-[320px] h-[450px] bg-gradient-to-br from-purple-100 via-pink-50 to-amber-50 animate-pulse flex flex-col items-center justify-center p-6 text-center">
              <OSLogo className="w-12 h-12 mb-3 animate-bounce" />
              <div className="text-sm font-extrabold text-[#200844]">Loading 3D Book Preview...</div>
            </div>
          )}

          {/* Interactive Hover Overlay for Preview */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#200844]/80 via-[#200844]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-white backdrop-blur-[2px]">
            <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center mb-3 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Eye className="w-7 h-7" />
            </div>
            <span className="font-extrabold text-base tracking-wide text-white drop-shadow-md">
              Click to Open Free Sample Reader
            </span>
            <span className="text-xs text-amber-300 font-semibold mt-1">
              Read First 3 Chapters Free • 70 Pages Total
            </span>
          </div>

          {/* High Gloss Sheen Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>

        {/* Quick Flip Badge */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#200844] via-[#481260] to-[#200844] text-amber-300 px-4 py-1 rounded-full text-[11px] font-extrabold border border-amber-300/40 shadow-lg flex items-center gap-1.5 whitespace-nowrap z-20 group-hover:scale-105 transition-transform">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>70 Pages • Official 3D Hardcover Edition</span>
        </div>
      </div>

      {/* Floating Read Demo CTA Under Book */}
      <div className="mt-7 flex items-center gap-3">
        <button
          onClick={onPreviewClick}
          id="book-preview-btn"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#200844] hover:text-[#d91b7a] bg-white hover:bg-pink-50/80 px-5 py-2 rounded-xl border border-purple-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-[#d91b7a]" />
          <span>Click to Preview Inside</span>
        </button>

        <a
          href={BOOK_DETAILS.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 px-5 py-2 rounded-xl shadow-sm hover:shadow-md transition-all text-decoration-none"
        >
          <span>Buy on Selar</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-900" />
        </a>
      </div>
    </div>
  );
};
