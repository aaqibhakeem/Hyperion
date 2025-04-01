import { Container } from "../ui/container";
import { Card } from "../ui/card";
import Image from "next/image";
import { GlareCard } from "../ui/glare-card";

export function WhatIsNkx() {
  return (
    <section id="next-section" className="h-screen flex justify-center items-center relative py-24 overflow-hidden scroll-smooth mx-7">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#0f0f13]">
        {/* Glowing effects */}
        <div className="absolute top-1/2 left-1/4 w-60 h-60 rounded-full bg-[#cbfe00] blur-[150px] opacity-10" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#cbfe00] ">
            What Is <br/><span className="tektur-font">Nuvikronix</span> 
            <br/><span className="text-[#ffffff]"> Technologies</span>
            <span className="text-[#cbfe00]"> ?</span>
          </h2>

            <p className="text-zinc-300 text-lg leading-relaxed">
            <span className="text-[#cbfe00] tektur-font">Nuvikronix</span> <span className="text-[#ffffff]"> Technologies</span> leverages Quantum Computing to revolutionize financial services
             by enabling ultra-secure, high-speed, and highly efficient solutions. 
             Our advanced algorithms optimize risk management, enhance trading strategies, 
             and ensure seamless, fraud-resistant transactions. Whether you are looking for 
             secure decentralized trading, real-time financial insights, or next-generation algorithmic solutions, 
             we provide cutting-edge fintech solutions designed for the future.
            </p>
          </div>
          <div className="relative w-full max-w-xl mx-auto">
      <GlareCard 
        className="bg-zinc-900"
        width="w-full" // Use full width
        // No aspect ratio specified will maintain natural height
      >
        <div className="border border-zinc-800 rounded-lg overflow-hidden shadow-lg p-6 h-full w-full">

          <div className="relative w-full max-w-xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="font-mono text-2xl font-bold text-zinc-100">
                    <span className="text-[#cbfe00] tektur-font">Nuvikronix</span>
                  </span>
                  <div className="text-xs text-[#ffffff] tracking-wider mt-1">Technologies</div>
                </div>
                <div className="h-10 w-10 flex items-center justify-center rounded-full">
                  <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="object-cover" />
                </div>
              </div>
              
              {/* Tagline */}
              <div className="mb-6">
                <p className="text-zinc-400 text-sm border-l-2 border-[#cbfe00] pl-3">
                  A Quantum Leap Forward For FinTech Innovation
                  <span className="block mt-1 text-xs text-zinc-500">EST. 2023 • DECENTRALIZED • SECURE • POWERFUL</span>
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-[20px] p-3">
                  <div className="text-xs text-zinc-500 mb-1">CONTACT</div>
                  <div className="text-sm text-zinc-300">kiran18oct1991@gmail.com</div>
                </div>
                <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-[20px] p-3">
                  <div className="text-xs text-zinc-500 mb-1">DIGITAL PRESENCE</div>
                  <div className="text-sm text-zinc-300">nuvikronix.io</div>
                </div>
              </div>
              
              {/* QR Code Placeholder */}
              <div className="flex justify-around items-center">
                <div className="text-xs text-zinc-400 flex justify-center items-center">
                  <span>UNIQUE VERIFICATION CODE</span>
                </div>
                <div className="w-16 h-16 bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                  <div className="w-12 h-12 grid grid-cols-10 grid-rows-10 gap-0.5">
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
