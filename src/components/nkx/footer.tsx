import { Container } from "../ui/container";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "SOCIALS": [
      { name: "LinkedIn", href: "https://www.linkedin.com/", target: "_blank" },
      { name: "Email", href: "mailto:kiran18oct1991@gmail.com", target: "_blank" },
    ],
    "OTHER": [
      { name: "Privacy Policy", href: "privacy-policy" },
      { name: "Terms of Service", href: "terms-of-service" },
      { name: "Careers", href: "careers" },
    ],
  };

  return (
    <footer className="relative py-16 border-t border-zinc-800 overflow-hidden">
      <div className="absolute inset-0 bg-[#0f0f13]" />

      <Container className="relative z-10">
        <div className="gap-12 flex flex-col lg:flex-row justify-between lg:justify-around text-center lg:text-left align-top">
          <div className="w-full lg:w-40">
            <Link href="/" className="inline-block text-2xl font-bold text-white mb-4">
              <span className="text-[#cbfe00] tektur-font">Nuvikronix</span> Technologies
            </Link>
            <p className="text-zinc-400 text-sm">
              Enhance your application using Quantum Technologies today.
            </p>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (

            <div key={category} className="col-span-1">
              <h3 className="text-white font-semibold mb-4 ">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 hover:text-[#cbfe00] text-sm transition-colors ">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-center items-center">
          <p className="text-zinc-500 text-sm text-center lg:text-right">
            © {currentYear} Nuvikronix Technologies Inc. All rights reserved.
          </p>
          
        </div>
      </Container>
    </footer>
  );
}

// Simple button component for the footer
function Button({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <button className={className}>
      {children}
    </button>
  );
}
