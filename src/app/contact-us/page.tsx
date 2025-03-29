import { Header } from "@/components/nkx/header";
import { Footer } from "@/components/nkx/footer";
import { Container } from "@/components/ui/container";
import SignupFormDemo from "@/components/nkx/signup-form-demo";

export default function Home() {
  return (
    <main className="bg-[#0f0f13] text-white overflow-hidden mx-2 tech-font">
      <Header />
      
      <section className="relative pt-40 mx-2">
        <Container className="flex flex-col items-center justify-center mx-2">
          <h1 className="w-[80vw] text-4xl text-center font-bold mb-3 leading-none tracking-tighter">
            <span className="block text-[#cbfe00]">Contact Us</span>
          </h1>
          
            <SignupFormDemo />
          
        </Container>
      </section>      
      <Footer />
    </main>
  );
}
