import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const highlights = [
  'Fresh Ingredients',
  'Signature Flavors',
  'Family Friendly',
  'Fast Service',
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 max-w-3xl text-center scroll-animate ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="section-title mb-6">About Us</h2>
        <div className="yellow-divider mb-10" />

        <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-12">
          At Crispero Wings & Things, we bring bold American flavors to Millbrook, Alabama.
          Every dish is crafted with premium ingredients and seasoned to perfection — from our
          signature crispy wings to our loaded bowls and fresh seafood. We're not just a restaurant,
          we're an experience.
        </p>

        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="text-primary text-lg">✔</span>
              <span className="font-body text-foreground text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
