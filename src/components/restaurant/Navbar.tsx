// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import logo from '../assets/logo.png'; // adjust path if needed

// const navLinks = [
//   { name: 'Home', href: '#home' },
//   { name: 'Menu', href: '#menu' },
//   { name: 'About', href: '#about' },
//   { name: 'Contact', href: '#contact' },
// ];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleNavClick = (href: string) => {
//     setIsMobileOpen(false);
//     const el = document.querySelector(href);
//     el?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-primary/10' : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between px-6 py-4">
//         <div className="flex items-center gap-3">
//           <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
//             <span className="font-heading font-extrabold text-primary-foreground text-lg">C</span>
//           </div>
//           <span className="font-heading font-bold text-foreground text-base md:text-lg tracking-[0.15em]">
//             Crispero Wings & Things
//           </span>
//         </div>

//         <div className="hidden md:flex items-center gap-10">
//           {navLinks.map((link) => (
//             <button
//               key={link.name}
//               onClick={() => handleNavClick(link.href)}
//               className="nav-link hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
//             >
//               {link.name}
//             </button>
//           ))}
//         </div>

//         <button
//           className="md:hidden text-foreground p-2"
//           onClick={() => setIsMobileOpen(!isMobileOpen)}
//           aria-label="Toggle menu"
//         >
//           {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {isMobileOpen && (
//         <div className="md:hidden bg-background border-t border-primary/10 animate-fade-in-up">
//           <div className="flex flex-col items-center gap-6 py-8">
//             {navLinks.map((link) => (
//               <button
//                 key={link.name}
//                 onClick={() => handleNavClick(link.href)}
//                 className="text-foreground font-body text-lg uppercase tracking-[0.2em] hover:text-primary transition-colors"
//               >
//                 {link.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo1.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-primary/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="Crispero Wings & Things Logo"
            className="h-10 w-10 object-contain rounded-full"
          />
          <span className="font-heading font-bold text-foreground text-base md:text-lg tracking-[0.15em]">
            Crispero Wings & Things
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-foreground font-medium hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-background border-t border-primary/10 animate-fade-in-up">
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground font-body text-lg uppercase tracking-[0.2em] hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
