import { Container } from "../ui/container";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden mx-7">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#0f0f13]">
        {/* Glowing effects */}
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-[#cbfe00] blur-[150px] opacity-10" />
      </div>

      <Container className="relative z-10">
        <Card className="relative bg-[#121418] border border-zinc-800 overflow-hidden rounded-lg p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image side */}
            <div className="relative h-64 lg:h-auto bg-gradient-to-tr from-[#0f0f13] to-[#1a1a24]">
              <div className="absolute inset-0">
                {/* Using the actual image */}
                <Image
                  src="/images/futuristic-city.png"
                  alt="Futuristic city night scene"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f13]/0 via-[#0f0f13]/40 to-[#0f0f13]/80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#0f0f13] to-transparent" />
            </div>

            {/* Content side */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Choose <span className="text-[#cbfe00] tektur-font">Nuvikronix</span><br/>Technologies
              </h2>
              <p className="text-zinc-400 mb-8">
                Be one of the first to use <span className="text-[#cbfe00] tektur-font">Nuvikronix</span> <span className="text-[#ffffff]"> Technologies</span>, harness the power of quantum computing to revolutionize financial technology with unparalleled speed, security, and efficiency.
              </p>
              <Button className="bg-[#cbfe00] text-black hover:bg-[#a9d700] px-6 py-5 rounded-md uppercase text-sm font-bold tracking-wider w-full md:w-auto">
                Reach Out
                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
