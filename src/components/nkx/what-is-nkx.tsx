import { Container } from "../ui/container";
import { Card } from "../ui/card";
import Image from "next/image";

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

          <div className="relative">
            {/* Trading illustration */}
            <Card className="relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 overflow-hidden p-8 rounded-lg">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-zinc-500 uppercase text-xs mb-1">PERSON</div>
                    <div className="text-4xl font-bold text-white">01</div>
                  </div>
                  <div className="text-2xl text-zinc-600">↔</div>
                  <div>
                    <div className="text-zinc-500 uppercase text-xs mb-1">PERSON</div>
                    <div className="text-4xl font-bold text-white">02</div>
                  </div>
                </div>

                <div className="relative mt-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-md p-3">
                      <div className="text-xs text-zinc-500 mb-1">OFFER: 10,000 USDC</div>
                      <div className="text-xs text-zinc-500">RECEIVE: 5.23 ETH</div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="text-xs text-zinc-500">RATIO: 1,912:1</div>
                        <button className="bg-[#cbfe00] text-black text-xs font-bold px-3 py-1 rounded">
                          ACCEPT TRADE
                        </button>
                      </div>
                    </div>
                    <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-md p-3 flex items-center justify-center">
                      <div className="text-sm text-zinc-400">
                        <Image
                          src="/images/hover-vehicle.png"
                          alt="Trade visualization"
                          width={120}
                          height={60}
                          className="object-contain opacity-90"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 text-sm mt-5">
                Securely trade with others without the need for intermediaries. 
                <span className="tektur-font text-[#cbfe00]" > Nuvikronix</span> <span className="text-[#ffffff] "> Technologies</span> ensures that your trades are secure and private.
              </p>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#cbfe00]/30" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#cbfe00]/30" />
          </div>
        </div>
      </Container>
    </section>
  );
}
