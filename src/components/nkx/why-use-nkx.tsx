import { Container } from "../ui/container";
import { Card } from "../ui/card";
import { ShieldCheck, Zap, LineChart, Fingerprint } from "lucide-react";

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
    <section id="features" className="relative py-24 overflow-hidden scroll-smooth mx-7">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#0f0f13]">
        {/* Glowing effects */}
        <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-[#cbfe00] blur-[150px] opacity-10" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#cbfe00]">
            Why use <span className="tektur-font text-[#cbfe00]">Nuvikronix</span> <span className="text-[#ffffff] tech-font"> Technologies</span> ?
          </h2>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 p-6 rounded-lg hover:border-[#cbfe00]/30 transition-colors">
              <div className="bg-zinc-800/40 p-3 inline-block rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
