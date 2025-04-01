import { Header } from "@/components/nkx/header";
import { Footer } from "@/components/nkx/footer";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <main className="bg-[#0f0f13] text-white overflow-hidden tech-font">
      <Header />
      
      <section className="relative pt-40 mx-2 pb-40">
        <Container className="flex flex-col items-center justify-center mx-2">
          <h1 className="w-[80vw] text-4xl text-center font-bold mb-1 leading-none tracking-tighter pb-5">
            <span className="block text-[#cbfe00]">Careers</span>
          </h1>
          
          <p className="text-2xl text-center ">There are no careers available at the moment.<br/> Please check back later.</p>
        </Container>
      </section>    
      <Footer />
    </main>
  );
}