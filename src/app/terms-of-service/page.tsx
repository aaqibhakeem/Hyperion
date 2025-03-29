import { Header } from "@/components/nkx/header";
import { Footer } from "@/components/nkx/footer";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <main className="bg-[#0f0f13] text-white overflow-hidden mx-2 tech-font">
      <Header />
      
      <section className="relative pt-40 mx-2">
        <Container className="flex flex-col items-center justify-center mx-2">
          <h1 className="w-[80vw] text-4xl text-center font-bold mb-6 leading-none tracking-tighter">
            <span className="block text-[#cbfe00]">Terms Of Service</span>
          </h1>
          
          <div className="w-full px-5 max-w-screen-md text-md text-zinc-400 mb-10 text-left space-y-6">
            <p>
              These Terms of Service ("Terms") govern your access to and use of our fintech applications, websites, and services 
              (collectively, the "Services"). By accessing or using our Services, you agree to comply with and be bound by these Terms. 
              If you do not agree with these Terms, please do not use our Services.
            </p>
            
            <section>
              <h2 className="text-lg font-bold text-white">Eligibility</h2>
              <p>
                You must be at least 18 years old and capable of forming a binding contract to use our Services. By using the Services, 
                you represent and warrant that you meet these eligibility requirements.
              </p>
            </section>
            
            <section>
              <h2 className="text-lg font-bold text-white">Account Registration and Security</h2>
              <ul className="list-disc list-inside">
                <li>You may be required to create an account to access certain features of our Services.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You agree to notify us immediately of any unauthorized use of your account.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-lg font-bold text-white">Services and Financial Transactions</h2>
              <ul className="list-disc list-inside">
                <li>Our fintech applications facilitate financial transactions but do not provide financial, investment, or legal advice.</li>
                <li>We do not guarantee the accuracy, completeness, or reliability of any financial data provided through our Services.</li>
                <li>Any transactions conducted through our Services are subject to applicable laws and regulations.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-lg font-bold text-white">Fees and Payments</h2>
              <ul className="list-disc list-inside">
                <li>We may charge fees for certain Services. Any applicable fees will be disclosed before you use the respective Services.</li>
                <li>All payments are final and non-refundable unless otherwise stated.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-lg font-bold text-white">Prohibited Activities</h2>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside">
                <li>Use the Services for any unlawful or fraudulent purpose.</li>
                <li>Interfere with or disrupt the security, integrity, or performance of the Services.</li>
                <li>Attempt to access data or accounts not intended for you.</li>
                <li>Use automated systems to interact with our Services without our permission.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-lg font-bold text-white">Intellectual Property</h2>
              <p>
                All content, trademarks, and proprietary materials available on the Services are owned by or licensed to the Company. 
                You are granted a limited, non-exclusive, non-transferable license to access and use the Services for personal or business use.
              </p>
            </section>
            
            <section>
              <h2 className="text-lg font-bold text-white">Disclaimers and Limitation of Liability</h2>
              <ul className="list-disc list-inside">
                <li>The Services are provided "as is" without any warranties of any kind.</li>
                <li>We do not guarantee uninterrupted or error-free access to the Services.</li>
                <li>To the maximum extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-lg font-bold text-white">Privacy</h2>
              <p>Your use of the Services is also governed by our Privacy Policy, which describes how we collect, use, and protect your data.</p>
            </section>
            
            <section>
              <h2 className="text-lg font-bold text-white">Third-Party Links and Services</h2>
              <p>
                Our Services may contain links to third-party websites or integrate with third-party services. We are not responsible for 
                the content or practices of third parties and do not endorse them.
              </p>
            </section>
            
            <section>
              <h2 className="text-lg font-bold text-white">Modifications to Terms</h2>
              <p>
                We may update these Terms from time to time. If we make significant changes, we will notify you by posting an updated version 
                on our website or through other communication methods. Continued use of the Services after changes become effective constitutes 
                acceptance of the revised Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-lg font-bold text-white">Termination</h2>
              <p>
                We may suspend or terminate your access to the Services at our sole discretion, without prior notice, if we determine that you 
                have violated these Terms or engaged in prohibited activities.
              </p>
            </section>
            
            <p>
              By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </div>
        </Container>
      </section>
      
      <Footer />
    </main>
  );
}
