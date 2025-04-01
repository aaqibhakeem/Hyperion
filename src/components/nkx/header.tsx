"use client";
import { Container } from "../ui/container";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";


export function Header() {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/contact-us"); 
  }
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 border-b border-zinc-800 mx-2">
      <Container className="flex items-center justify-between ">
        <div className="flex items-center text-sm">
          <Link href="/" className="text-lg lg:text-2xl font-bold text-white">
            <span className="text-[#cbfe00] tektur-font">Nuvikronix</span><span className="font-thin">Technologies</span>
          </Link>
        </div>
        <div className="hidden lg:block items-center space-x-4 ">
          <Button className="bg-[#cbfe00] text-black hover:bg-[#a9d700] rounded-md uppercase text-xs font-bold tracking-wider px-2" onClick={handleButtonClick}>
            Reach Out
          </Button>
        </div>
      </Container>
    </header>
  );
}
