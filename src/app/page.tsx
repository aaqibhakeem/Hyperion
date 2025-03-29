import { Header } from "@/components/nkx/header";
import { HeroSection } from "@/components/nkx/hero-section";
import { WhatIsNkx } from "@/components/nkx/what-is-nkx";
import { WhyUseNkx } from "@/components/nkx/why-use-nkx";
import { CTASection } from "@/components/nkx/cta-section";
import { Footer } from "@/components/nkx/footer";

export default function Home() {
  return (
    <main className=" bg-[#0f0f13] text-white overflow-auto tech-font">
      <Header />
      <HeroSection />
      <WhatIsNkx />
      <WhyUseNkx />
      <CTASection />
      <Footer />
    </main>
  );
}
