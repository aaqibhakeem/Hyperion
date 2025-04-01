"use client"
import { Container } from "../ui/container";
import Image from "next/image";
import React from "react";
import { Cover } from "@/components/ui/cover";

export function HeroSection() {
  return (
    
    <section id="scroll" className="relative min-h-screen pt-24 pb-16 overflow-hidden scroll-smooth">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f13] to-[#121418]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Cyberpunk cityscape"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#3f0]
                      blur-[100px] opacity-20" />

        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[#cbfe00]
                      blur-[100px] opacity-20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-[#0f0f13]/70 to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center text-center pt-20">
        <div className="max-w-4xl mx-auto justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            <span className="block text-[#ffffff]">A <Cover>Quantum Leap</Cover> Forward</span>
            <span className="block text-[#cbfe00]">For FinTech Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] mb-10 max-w-3xl mx-auto">
          Revolutionizing the financial industry with quantum-powered predictive analytics
          </p>
          <div className="flex justify-center items-center w-full h-full pt-10">
            <div className="w-4 h-9 rounded-lg flex justify-center items-end p-1 ">
              <div className="relative animate-bounce min-h-10 min-w-5">
                <Image fill className="object-cover" src="/images/arrow-down.svg" alt="Arrow Down" />
              </div>
            </div> 
          </div>
        </div>
      </Container>
    </section>
  );
}
