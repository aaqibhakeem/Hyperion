import { Container } from "../ui/container";
import { Card } from "../ui/card";
import { ShieldCheck, Zap, LineChart, Fingerprint } from "lucide-react";
import { GlowingEffect } from "../ui/glowing-effect"; // Ensure correct import path

export function WhyUseNkx() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#cbfe00]" />,
      title: "Optimal Trading Strategies",
      description: "Quantum computing enables complex simulations to find the best trading routes, reducing losses and maximizing profitability.",
    },
    {
      icon: <Zap className="h-6 w-6 text-[#cbfe00]" />,
      title: "Lightning Fast Computation",
      description: "Harness the power of quantum algorithms to optimize risk analysis, portfolio management, and fraud detection in real time.",
    },
    {
      icon: <LineChart className="h-6 w-6 text-[#cbfe00]" />,
      title: "Advanced Predictive Analytics",
      description: "Utilize quantum-powered machine learning to identify market patterns, reduce uncertainty, and make data-driven financial decisions.",
    },
    {
      icon: <Fingerprint className="h-6 w-6 text-[#cbfe00]" />,
      title: "Unmatched Security",
      description: "Leverage quantum encryption to safeguard financial transactions against cyber threats, ensuring data integrity and confidentiality.",
    },
  ];

  return (
    <section id="features" className="relative py-12 md:py-24 overflow-hidden scroll-smooth mx-2 md:mx-7">

      <Container className="relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#cbfe00]">
            Why use <span className="tektur-font text-[#cbfe00]">Nuvikronix</span> <span className="text-[#ffffff] tech-font"> Technologies</span> ?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <GlowingEffect
                className="absolute inset-0 rounded-lg"
                glow
                proximity={150}
                spread={80}
                movementDuration={2}
                variant="default"
                disabled={false}
              />
              <Card className="relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 p-4 md:p-6 rounded-lg hover:border-[#cbfe00]/30 transition-colors h-full">
                <div className="bg-zinc-800/40 p-2 md:p-3 inline-block rounded-lg mb-3 md:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-xs md:text-sm">{feature.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}