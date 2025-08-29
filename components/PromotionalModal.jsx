"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Gift, Clock, Star } from 'lucide-react';
import Image from 'next/image';

const PromotionalModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if we've already shown the modal in this session
    const hasShownModal = sessionStorage.getItem('promotionalModalShown');

    if (!hasShownModal) {
      // Delay the modal opening by 2 seconds for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        // Mark as shown in session storage
        sessionStorage.setItem('promotionalModalShown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClaimOffer = () => {
    // You can add your promotional logic here
    // For example, redirect to booking page or apply discount code
    window.location.href = '/book-a-repair';
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} className='!'>
      <DialogContent className="sm:max-w-md max-w-[90vw] p-0 overflow-hidden border-2 border-green-200 !gap-y-0">
        {/* Close button */}


        {/* Header with logo */}
        <div className="relative  text-white text-center">
          <div className="absolute inset-0"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-3">
              <Image
                src="/images/logo_merdeka.webp"
                alt="Fix It Jerry Logo"
                width={175}
                height={175}
                className="rounded-lg mt-2"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6">
          <div className="text-center mb-6">
                  <span className='text-[#e73b21] text-4xl font-bold'>RM68</span>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
        for all smartphone  <br/>battery replacement!
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              {`Get your smartphone battery replaced`} <br/>{`at an unbeatable price`}

            </p>
          </div>

          {/* Promotion details */}
            <p className="text-sm text-gray-600 mb-0 text-center">{`Promotion Period:`}</p>
            <div className="font-bold text-[#070f4e] text-sm text-center mb-3">{`31st August - 5th September`}</div>

          {/* CTA Button */}
          <div className="text-center">
            <a href="/book-a-repair">
            <Button
              onClick={handleClaimOffer}
              className="w-full bg-gradient-to-r border-2 border-[#070f4e] bg-[#e73b21] text-[#f8c72a] hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Now!
            </Button>
            </a>
          </div>


          {/* Terms */}
          <p className="text-xs text-gray-500 text-center mt-4">
            {`*Offer valid from 31st August to 5th September 2025. Not applicable for iPhone 13-15 models. Cannot be combined with other promotions.`}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromotionalModal;
