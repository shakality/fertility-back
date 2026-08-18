import React, { useState } from 'react';
import { X, Check, ShoppingBag, ShieldCheck, Download, CreditCard, Sparkles, Heart } from 'lucide-react';
import { EDITIONS, BOOK_DETAILS } from '../data/bookData';
import { BookEdition } from '../types';
import { OSLogo } from './OSLogo';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: string;
  setCurrency: (c: string) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  currency,
  setCurrency
}) => {
  const [selectedEditionId, setSelectedEditionId] = useState<string>("complete-bundle");
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const selectedEdition = EDITIONS.find(e => e.id === selectedEditionId) || EDITIONS[1];

  const formatPrice = (edition: BookEdition) => {
    if (currency === 'NGN') {
      return `₦${edition.priceNGN.toLocaleString()}`;
    }
    return `$${edition.priceUSD.toFixed(2)}`;
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#2a0845] via-[#1c0733] to-[#130324] text-white p-5 px-6 flex items-center justify-between border-b border-purple-400/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/20">
              <OSLogo className="w-7 h-7" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">
                Olumind Synergy Venture Direct Checkout
              </div>
              <div className="text-base font-extrabold text-white">
                Order "Fertility Back"
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Quick 1-Click Selar Purchase Option */}
          <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 p-4 rounded-xl text-[#200736] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md border border-amber-300">
            <div className="text-center sm:text-left">
              <div className="text-xs font-black uppercase tracking-wider text-purple-950">Official Instant Checkout</div>
              <div className="text-sm font-extrabold">Instant Delivery via Selar Store</div>
            </div>
            <a
              href={BOOK_DETAILS.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#200844] hover:bg-[#340d6e] text-white px-5 py-2.5 rounded-lg font-extrabold text-xs sm:text-sm shadow transition-all shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Pay on Selar</span>
              <span>→</span>
            </a>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleCheckout} className="space-y-6">
              
              {/* Currency Selector */}
              <div className="flex items-center justify-between bg-purple-50/50 p-3 rounded-xl border border-purple-100">
                <span className="text-xs font-semibold text-slate-700">Display Currency</span>
                <div className="flex items-center bg-white rounded-lg p-0.5 text-xs font-bold border border-slate-300">
                  <button
                    type="button"
                    onClick={() => setCurrency('USD')}
                    className={`px-3 py-1 rounded transition-all ${currency === 'USD' ? 'bg-[#2a0845] text-white' : 'text-slate-600'}`}
                  >
                    $ USD
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency('NGN')}
                    className={`px-3 py-1 rounded transition-all ${currency === 'NGN' ? 'bg-[#2a0845] text-white' : 'text-slate-600'}`}
                  >
                    ₦ NGN (Nigeria)
                  </button>
                </div>
              </div>

              {/* Choose Edition */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Select Your Edition
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {EDITIONS.map((edition) => {
                    const isSelected = selectedEditionId === edition.id;
                    return (
                      <div
                        key={edition.id}
                        onClick={() => setSelectedEditionId(edition.id)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start justify-between relative ${
                          isSelected
                            ? 'border-purple-600 bg-purple-50/50 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        {edition.badge && (
                          <span className="absolute -top-2.5 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow">
                            {edition.badge}
                          </span>
                        )}

                        <div className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 ${
                            isSelected ? 'border-purple-600 bg-purple-600 text-white' : 'border-slate-300'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>

                          <div className="space-y-1">
                            <div className="font-bold text-slate-900 text-sm sm:text-base">
                              {edition.name}
                            </div>
                            <div className="text-xs text-slate-500">
                              {edition.format}
                            </div>
                            <div className="pt-1 flex flex-wrap gap-1 text-[11px] text-slate-600">
                              {edition.features.slice(0, 3).map((f, fIdx) => (
                                <span key={fIdx} className="bg-slate-100 px-1.5 py-0.5 rounded">
                                  ✓ {f}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="text-right pl-3 shrink-0">
                          <div className="text-lg font-black text-purple-900">
                            {formatPrice(edition)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Customer Information Inputs */}
              <div className="space-y-4 pt-2 border-t border-slate-200">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Delivery Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Email Address (for instant download) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100 flex items-center gap-3 text-xs text-emerald-800 font-medium">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Instant digital download link + 256-bit encrypted checkout. 14-day guarantee.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <span>Processing Your Order...</span>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span>Complete Order • {formatPrice(selectedEdition)}</span>
                  </>
                )}
              </button>

            </form>
          ) : (
            /* Order Success View */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl">
                ✓
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900 font-['Outfit',sans-serif]">
                  Thank You, {fullName}!
                </h3>
                <p className="text-sm text-slate-600">
                  Your order for <strong>Fertility Back ({selectedEdition.name})</strong> has been processed successfully.
                </p>
                <p className="text-xs text-slate-500">
                  Confirmation receipt and files sent to <strong>{email}</strong>.
                </p>
              </div>

              {/* Download Box */}
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200 text-left space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm text-purple-950 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    Instant Access Files Ready
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>

                <div className="space-y-2">
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Starting direct download of Fertility Back 70-Page Guide (PDF + Toolkit)!");
                    }}
                    className="w-full py-3 rounded-lg bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow"
                  >
                    <Download className="w-4 h-4" />
                    Download Fertility Back (70-Page PDF)
                  </a>

                  <a
                    href="#download-toolkit"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Downloading Complete Bonus Toolkit (Worksheets, 30-Day Calendar & Trackers)!");
                    }}
                    className="w-full py-2.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-purple-600" />
                    Download Printable Worksheets & Trackers (.ZIP)
                  </a>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 underline"
              >
                Close Window
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
