

import { Instagram, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-primary/30 pt-16 pb-8">
      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">

          {/* Left Side */}
          <div>
            <div className="flex items-center gap-3 mb-4">

              {/* Circular Logo */}
              <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30">
                <img
                  src={logo}
                  alt="Crispero Wings & Things Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="font-heading font-bold text-foreground text-base md:text-lg tracking-[0.15em]">
                Crispero Wings & Things
              </span>
            </div>

            <p className="font-body text-muted-foreground text-sm tracking-wider">
              Bold. Flavorful. Unforgettable.
            </p>
          </div>

          {/* Right Side */}
          <div className="md:text-right">

            {/* Navigation */}
            <div className="flex flex-wrap gap-6 md:justify-end mb-6">
              {["Home", "Menu", "About", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                  className="text-xs uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mb-6 md:justify-end">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/crisperomillbrook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Crispero-Millbrook/61585033857065/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@crispero.wings.th"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>

            </div>

            {/* Contact */}
            <div className="text-muted-foreground font-body text-sm space-y-1 mb-4">
              <p>
                <a
                  href="tel:3349124151"
                  className="hover:text-primary transition-colors"
                >
                  (334) 912-4151
                </a>
              </p>

              <p>
                <a
                  href="mailto:Newbeginning2026llc@gmail.com"
                  className="hover:text-primary transition-colors text-xs break-all"
                >
                  Newbeginning2026llc@gmail.com
                </a>
              </p>
            </div>

            {/* Business Hours */}
            <div className="text-muted-foreground text-sm space-y-1">
              <p className="text-primary font-semibold uppercase text-xs tracking-wider">
                Business Hours
              </p>
              <p>Monday – Thursday: 10 AM – 10 PM</p>
              <p>Friday – Saturday: 10 AM – 10 PM</p>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/10 pt-6 text-center">
          <p className="text-muted-foreground font-body text-xs tracking-wider">
            © 2026 Crispero Wings & Things. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
