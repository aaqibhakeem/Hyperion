"use client";
import { Container } from "../ui/container";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function CTASection() {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const Router = useRouter();
  const handleButtonClick = () => {
    Router.push("/contact-us");
  }
  
  return (
    <section className="relative py-24 overflow-hidden mx-7">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#0f0f13]">
        {/* Glowing effects */}
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-[#cbfe00] blur-[150px] opacity-10" />
      </div>

      <Container className="relative z-10">
        <CardContainer 
          containerClassName="py-10"
          className="transition-all duration-300"
        >
          <CardBody className="h-auto w-full max-w-6xl">
            <Card className="relative bg-[#121418] border border-zinc-800 overflow-hidden rounded-lg p-0 w-full h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image side */}
                <div className="relative h-64 lg:h-auto bg-gradient-to-tr from-[#0f0f13] to-[#1a1a24]">
                  {/* Fixed image container */}
                  <div className="absolute inset-0">
                    <Image
                      src="/images/futuristic-city.png"
                      alt="Futuristic city night scene"
                      fill
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f13]/0 via-[#0f0f13]/40 to-[#0f0f13]/80" />
                  </div>
                  
                  {/* 3D effect layer that doesn't contain the image directly */}
                  <CardItem 
                    translateZ="50" 
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-[#cbfe00]/10 to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  </CardItem>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#0f0f13] to-transparent" />
                </div>

                {/* Content side */}
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  {/* Enhanced title with more pronounced 3D effect */}
                  <CardItem
                    translateZ="100"
                    translateY="-15"
                    className="mb-6"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-white relative">
                      <span className="block">Choose</span>
                      <span className="block text-[#cbfe00] tektur-font relative">
                        Nuvikronix
                        <span className="absolute inset-0 text-[#cbfe00]/30 blur-[1px] transform translate-x-1 translate-y-1"></span>
                      </span>
                      <span className="block">Technologies</span>
                      {/* Text shadow effect */}
                      <div className="absolute -inset-4 bg-[#cbfe00]/5 blur-lg rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </h2>
                  </CardItem>
                  
                  {/* Enhanced paragraph with more depth */}
                  <CardItem
                    translateZ="60"
                    translateY="-5"
                    className="text-zinc-400 mb-8"
                  >
                    <p className="relative">
                      Be one of the first to use{" "}
                      <span className="text-[#cbfe00] tektur-font relative">
                        Nuvikronix
                        <span className="absolute inset-0 text-[#cbfe00]/20 blur-[0.5px] transform translate-x-0.5 translate-y-0.5"></span>
                      </span>{" "}
                      <span className="text-[#ffffff]"> Technologies</span>, harness the power of quantum
                      computing to revolutionize financial technology with unparalleled speed, security,
                      and efficiency.
                    </p>
                  </CardItem>
                  
                  {/* Enhanced button with improved glow effect */}
                  <CardItem 
                    translateZ="120" 
                    translateY="15"
                    className="relative"
                  >
                    {/* Button glow background - more intense when button is hovered */}
                    <div 
                      className={`absolute inset-0 bg-[#cbfe00]/30 blur-xl rounded-md -z-10 transition-all duration-300 ${
                        isButtonHovered 
                          ? 'opacity-100 scale-110' 
                          : isCardHovered 
                            ? 'opacity-50 scale-105' 
                            : 'opacity-0 scale-100'
                      }`}
                    ></div>
                    
                    {/* Inner glow effect - only visible on button hover */}
                    <div 
                      className={`absolute inset-0 bg-[#cbfe00]/50 blur-md rounded-md -z-10 transition-all duration-300 ${
                        isButtonHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                      }`}
                    ></div>
                    
                    <Button 
                      className="bg-[#cbfe00] text-black hover:bg-[#d4ff20] px-6 py-5 rounded-md uppercase text-sm font-bold tracking-wider w-full md:w-auto relative overflow-hidden group shadow-lg transition-all duration-300"
                      onMouseEnter={() => setIsButtonHovered(true)}
                      onMouseLeave={() => setIsButtonHovered(false)}
                      onClick={handleButtonClick}
                    >
                      <span className="relative z-10 flex items-center">
                        Reach Out
                        <svg
                          className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {/* Improved hover animation */}
                      <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                    </Button>
                  </CardItem>
                </div>
              </div>
            </Card>
          </CardBody>
        </CardContainer>
      </Container>
    </section>
  );
}