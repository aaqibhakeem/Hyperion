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
            <span className="block text-[#cbfe00]">Privacy Policy</span>
          </h1>
          
          <div className="w-full px-5 max-w-screen-md text-md text-zinc-400 mb-10 text-left space-y-6">
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our fintech applications, websites, and services (collectively, the "Services"). By accessing or using our Services, you agree to the terms of this Privacy Policy.
            </p>
            
            <section>
              <h2 className="text-lg font-bold text-white">Information We Collect</h2>
              <ul className="list-disc list-inside">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other account details.</li>
                <li><strong>Financial Information:</strong> Transaction details, payment information, and banking details (if applicable).</li>
                <li><strong>Usage Data:</strong> Device information, IP address, browser type, and activity logs.</li>
                <li><strong>Cookies & Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-lg font-bold text-white">How We Use Your Information</h2>
              <ul className="list-disc list-inside">
                <li>To provide and maintain our Services.</li>
                <li>To process transactions and payments securely.</li>
                <li>To improve user experience and customer support.</li>
                <li>To detect and prevent fraudulent activities.</li>
                <li>To comply with legal and regulatory requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">How We Share Your Information</h2>
              <ul className="list-disc list-inside">
                <li>With trusted third-party service providers (e.g., payment processors, cloud services).</li>
                <li>With regulatory authorities when required by law.</li>
                <li>With business partners in cases of mergers or acquisitions.</li>
                <li>With your consent or as otherwise disclosed at the time of collection.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-lg font-bold text-white">Data Security</h2>
              <p>
                We implement strict security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
            
            <section>
              <h2 className="text-lg font-bold text-white">Your Rights and Choices</h2>
              <ul className="list-disc list-inside">
                <li>You may update or delete your account information at any time.</li>
                <li>You can opt out of marketing communications by following the unsubscribe instructions.</li>
                <li>You may request access to or correction of your personal data.</li>
                <li>You can disable cookies through your browser settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">Third-Party Services</h2>
              <p>
                Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices of third parties and encourage you to review their policies before sharing any personal information.
              </p>
            </section>
            
            <section>
              <h2 className="text-lg font-bold text-white">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make significant changes, we will notify you through our website or other communication channels. Your continued use of the Services after updates constitutes your acceptance of the revised policy.
              </p>
            </section>
            <p>
              By using our Services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
            </p>
          </div>
        </Container>
      </section>      
      <Footer />
    </main>
  );
}
