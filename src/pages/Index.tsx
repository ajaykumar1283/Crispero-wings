import Navbar from '@/components/restaurant/Navbar';
import HeroSection from '@/components/restaurant/HeroSection';
import AboutSection from '@/components/restaurant/AboutSection';
import MenuSection from '@/components/restaurant/MenuSection';
import ContactSection from '@/components/restaurant/ContactSection';
import Footer from '@/components/restaurant/Footer';
import ScrollToTop from '@/components/restaurant/ScrollToTop';

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
