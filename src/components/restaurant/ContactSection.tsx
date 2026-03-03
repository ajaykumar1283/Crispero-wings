import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''} mb-16`}>
          <h2 className="section-title mb-6">Contact Us</h2>
          <div className="yellow-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider mb-1">Phone</h4>
                <a href="tel:3349124151" className="font-body text-muted-foreground hover:text-primary transition-colors">
                  (334) 912-4151
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider mb-1">Email</h4>
                <a href="mailto:Newbeginning2026llc@gmail.com" className="font-body text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                  Newbeginning2026llc@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider mb-1">Address</h4>
                <p className="font-body text-muted-foreground text-sm">
                  650 Deatsville Hwy<br />
                  Millbrook, AL 36054<br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider mb-1">Business Hours</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Mon–Fri: 10AM – 10PM<br />
                  Sat–Sun: 10AM – 12AM
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="tel:3349124151" className="btn-primary-solid text-center">
                Call Now
              </a>
              <a href="mailto:Newbeginning2026llc@gmail.com" className="btn-primary-outline text-center">
                Email Us
              </a>
            </div>
          </div>

          <div className="w-full h-80 lg:h-full min-h-[320px] rounded-lg overflow-hidden border border-primary/20">
            <iframe
              src="https://maps.google.com/maps?q=650+Deatsville+Hwy,+Millbrook,+AL+36054&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Crispero Wings & Things Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
