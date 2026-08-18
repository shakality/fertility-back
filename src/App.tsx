import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { SampleReaderModal } from './components/SampleReaderModal';
import { OrderModal } from './components/OrderModal';

export default function App() {
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff1f5] via-[#ffffff] to-[#f5eefb] text-[#1c0838] flex flex-col justify-between font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#d91b7a] selection:text-white">
      {/* Main Book Showcase Layout matching Reference Image exact color theme */}
      <main className="flex-1 flex flex-col justify-center py-6 sm:py-10">
        <HeroSection
          onOpenOrder={() => setIsOrderOpen(true)}
          onOpenReader={() => setIsReaderOpen(true)}
        />
      </main>

      {/* Interactive Free Demo Reader Modal */}
      <SampleReaderModal
        isOpen={isReaderOpen}
        onClose={() => setIsReaderOpen(false)}
        onOpenOrder={() => {
          setIsReaderOpen(false);
          setIsOrderOpen(true);
        }}
      />

      {/* Publisher Order / Instant Checkout Modal */}
      <OrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        currency={currency}
        setCurrency={setCurrency}
      />
    </div>
  );
}
