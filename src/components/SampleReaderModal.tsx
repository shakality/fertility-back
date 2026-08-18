import React, { useState } from 'react';
import { X, BookOpen, ChevronLeft, ChevronRight, CheckCircle2, ShoppingCart, Sparkles } from 'lucide-react';
import { SAMPLE_CHAPTERS, BOOK_DETAILS } from '../data/bookData';
import { OSLogo } from './OSLogo';

interface SampleReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrder: () => void;
}

export const SampleReaderModal: React.FC<SampleReaderModalProps> = ({
  isOpen,
  onClose,
  onOpenOrder
}) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');

  if (!isOpen) return null;

  const currentChapter = SAMPLE_CHAPTERS[currentChapterIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Modal Top Bar */}
        <div className="bg-gradient-to-r from-[#2a0845] via-[#1c0733] to-[#130324] text-white p-4 sm:px-6 flex items-center justify-between border-b border-purple-400/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/20">
              <OSLogo className="w-7 h-7" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">
                Olumind Synergy Venture Free Sample
              </div>
              <div className="text-sm sm:text-base font-extrabold text-white">
                Fertility Back — Official Demo Reader
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Font size toggle */}
            <div className="hidden sm:flex items-center bg-white/10 rounded-lg p-0.5 text-xs">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-1 rounded ${fontSize === 'sm' ? 'bg-white/20 text-white' : 'text-slate-300'}`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-1 rounded ${fontSize === 'base' ? 'bg-white/20 text-white' : 'text-slate-300'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 rounded ${fontSize === 'lg' ? 'bg-white/20 text-white' : 'text-slate-300'}`}
              >
                A+
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 flex items-center justify-center transition-colors"
              aria-label="Close reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chapter Tabs Navigation */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 sm:px-6 py-2 flex items-center gap-2 overflow-x-auto">
          {SAMPLE_CHAPTERS.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => setCurrentChapterIndex(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                currentChapterIndex === idx
                  ? 'bg-purple-800 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>Chapter {ch.id}</span>
              <span className="text-[10px] opacity-75 hidden sm:inline">({ch.readTime})</span>
            </button>
          ))}
        </div>

        {/* Reading Canvas */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6 text-slate-800 bg-[#fdfdfd]">
          
          {/* Chapter Heading */}
          <div className="border-b border-slate-200 pb-4 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-700">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>{currentChapter.pages}</span>
              <span>•</span>
              <span>{currentChapter.readTime}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-['Outfit',sans-serif]">
              {currentChapter.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium italic">
              {currentChapter.summary}
            </p>
          </div>

          {/* Paragraphs */}
          <div className={`space-y-4 leading-relaxed font-serif text-slate-800 ${
            fontSize === 'sm' ? 'text-sm' : fontSize === 'lg' ? 'text-lg leading-loose' : 'text-base'
          }`}>
            {currentChapter.content.map((paragraph, pIdx) => (
              <p key={pIdx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-purple-900 first-letter:mr-1 first-letter:float-left">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Locked Content Upsell Notice */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200/80 text-center space-y-3 mt-8">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 mx-auto flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">
              You are reading a free sample excerpt
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Unlock all 70 pages, 6 comprehensive modules, printable cycle trackers, 30-day challenge, and the complete 90-Day Conception Prep Program.
            </p>
            <div className="pt-2">
              <a
                href={BOOK_DETAILS.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Order Full 70-Page Book Now on Selar
              </a>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer Controls */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 px-6 flex items-center justify-between text-xs font-semibold">
          <button
            onClick={() => setCurrentChapterIndex(Math.max(0, currentChapterIndex - 1))}
            disabled={currentChapterIndex === 0}
            className="px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Chapter
          </button>

          <span className="text-slate-500 hidden sm:inline">
            Chapter {currentChapterIndex + 1} of {SAMPLE_CHAPTERS.length}
          </span>

          <button
            onClick={() => setCurrentChapterIndex(Math.min(SAMPLE_CHAPTERS.length - 1, currentChapterIndex + 1))}
            disabled={currentChapterIndex === SAMPLE_CHAPTERS.length - 1}
            className="px-3 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            Next Chapter
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
