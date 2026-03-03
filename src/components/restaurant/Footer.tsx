const Footer = () => {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-primary/30 pt-16 pb-8">
      <div className="container mx-auto px-6 text-center">
        {/* Logo placeholder */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
            <span className="font-heading font-extrabold text-primary-foreground text-xl">C</span>
          </div>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10">
          {['Home', 'About', 'Menu', 'Contact'].map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
              className="nav-link text-xs"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Contact info */}
        <div className="text-muted-foreground font-body text-sm space-y-1 mb-8">
          <p>(334) 912-4151</p>
          <p>650 Deatsville Hwy, Millbrook, AL 36054</p>
        </div>

        {/* TikTok */}
        <div className="mb-10">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .55.04.81.11v-3.5a6.37 6.37 0 00-.81-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.77a8.28 8.28 0 004.76 1.5V6.82a4.84 4.84 0 01-1-.13z" />
            </svg>
            Follow us on TikTok
          </a>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground font-body text-xs tracking-wider">
          © 2026 Crispero Wings & Things. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
