const Footer = () => {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-primary/30 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
          {/* Left – Branding */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-extrabold text-primary-foreground text-xl">C</span>
              </div>
              <span className="font-heading font-bold text-foreground text-base md:text-lg tracking-[0.15em]">
                Crispero Wings & Things
              </span>
            </div>
            <p className="font-body text-muted-foreground text-sm tracking-wider">
              Bold. Flavorful. Unforgettable.
            </p>
          </div>

          {/* Right – Links & Contact */}
          <div className="md:text-right">
            <div className="flex flex-wrap gap-6 md:justify-end mb-6">
              {['Home', 'Menu', 'About', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                  className="nav-link text-xs"
                >
                  {link}
                </button>
              ))}
            </div>
            <div className="text-muted-foreground font-body text-sm space-y-1">
              <p>
                <a href="tel:3349124151" className="hover:text-primary transition-colors">(334) 912-4151</a>
              </p>
              <p>
                <a href="mailto:Newbeginning2026llc@gmail.com" className="hover:text-primary transition-colors text-xs break-all">
                  Newbeginning2026llc@gmail.com
                </a>
              </p>
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
