"use client"

import { Container } from "../ui/container";
import { Card } from "../ui/card";
import Image from "next/image";
import { GlareCard } from "../ui/glare-card";

export function WhatIsNkx() {
  return (
    <section id="next-section" className="min-h-screen flex justify-center items-center relative py-6 md:py-12 overflow-y-auto scroll-smooth mx-4 md:mx-7">

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center py-8">
          <div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-[#cbfe00] ">
            What Is <span className="tektur-font">Nuvikronix</span> 
            <span className="text-[#ffffff]"> Technologies</span>
            <span className="text-[#cbfe00]"> ?</span>
          </h2>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            <span className="text-[#cbfe00] tektur-font">Nuvikronix</span> <span className="text-[#ffffff]"> Technologies</span> leverages Quantum Computing to revolutionize financial services
             by enabling ultra-secure, high-speed, and highly efficient solutions. 
             Our advanced algorithms optimize risk management, enhance trading strategies, 
             and ensure seamless, fraud-resistant transactions. Whether you are looking for 
             secure decentralized trading, real-time financial insights, or next-generation algorithmic solutions, 
             we provide cutting-edge fintech solutions designed for the future.
            </p>
          </div>
          <div className="relative w-full max-w-xl mx-auto mt-6 md:mt-0">
      <GlareCard 
        className="bg-zinc-900"
        width="w-full"
      >
        <div className="border border-zinc-800 rounded-lg overflow-hidden shadow-lg p-4 sm:p-6 h-full w-full">

          <div className="relative w-full mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-lg p-3 sm:p-6">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-zinc-100">
                    <span className="text-[#cbfe00] tektur-font">Nuvikronix</span>
                  </span>
                  <div className="text-xs text-[#ffffff] tracking-wider mt-1">Technologies</div>
                </div>
                <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full">
                  <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="object-cover" />
                </div>
              </div>
              
              <div className="mb-4 md:mb-6">
                <p className="text-zinc-400 text-xs sm:text-sm border-l-2 border-[#cbfe00] pl-3">
                  A Quantum Leap Forward For FinTech Innovation
                  <span className="block mt-1 text-xs text-zinc-500">EST. 2023 • DECENTRALIZED • SECURE • POWERFUL</span>
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4">
                <button className="bg-zinc-800/40 border border-zinc-700/50 rounded-[20px] p-2 sm:p-3 text-left">
                  <div className="text-xs text-zinc-500 mb-1">CONTACT</div>
                  <div className="text-xs sm:text-sm text-zinc-300">Click on this card</div>
                </button>
                <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-[20px] p-2 sm:p-3">
                  <div className="text-xs text-zinc-500 mb-1">DIGITAL PRESENCE</div>
                  <div className="text-xs sm:text-sm text-zinc-300">nuvikronix.io</div>
                </div>
              </div>
              
              {/* QR Code Placeholder */}
              <div className="flex justify-around items-center">
                <div className="text-xs text-zinc-400 flex justify-center items-center">
                  <span>UNIQUE VERIFICATION CODE</span>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 grid grid-cols-10 grid-rows-10 gap-0.5">
                    {Array.from({ length: 100 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`bg-${Math.random() > 0.5 ? '[#cbfe00]' : 'transparent'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
      </GlareCard>
          </div>
        </div>
      </Container>
    </section>
  );
}