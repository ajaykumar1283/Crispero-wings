import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { menuCategories, type MenuCategory } from '@/data/menuData';

import wingsImg from '@/assets/wings.jpg';
import burgerImg from '@/assets/burger.jpg';
import fishImg from '@/assets/fish.jpg';
import shrimpImg from '@/assets/shrimp.jpg';
import bowlImg from '@/assets/bowl.jpg';
import friesImg from '@/assets/fries.jpg';

const categoryImages: Record<string, string> = {
  wings: wingsImg,
  'all-combo': friesImg,
  'fried-fish': fishImg,
  'fried-rice': bowlImg,
  burger: burgerImg,
  sandwich: burgerImg,
  philly: burgerImg,
  'chicken-tender': wingsImg,
  'side-orders': friesImg,
  'crispero-bowls': bowlImg,
  'jumbo-shrimp': shrimpImg,
  'butterfly-shrimp': shrimpImg,
  drink: friesImg,
  cake: wingsImg,
};

const baseImages: Record<string, string> = {
  Rice: bowlImg,
  Salad: bowlImg,
  Fries: friesImg,
  'Walking Taco': friesImg,
};

const proteinImages: Record<string, string> = {
  'Original Chicken': wingsImg,
  'Fried Chicken': wingsImg,
  Beef: burgerImg,
};

const FlavorSection = ({ category }: { category: MenuCategory }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
      <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl uppercase tracking-wider text-center mb-8">
        {category.name}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="border border-primary/30 rounded-full px-4 py-3 text-center text-foreground font-body text-xs md:text-sm 
                       hover:border-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] hover:-translate-y-0.5 
                       transition-all duration-300 cursor-default"
          >
            {item.name}
            {item.price && <span className="text-primary ml-1">{item.price}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

const BowlsSection = ({ category }: { category: MenuCategory }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
      <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl uppercase tracking-wider text-center mb-3">
        {category.name}
      </h3>
      <p className="text-center text-muted-foreground font-body text-sm uppercase tracking-widest mb-10">
        Build Your Bowl
      </p>

      {/* Step 1 – Base */}
      <div className="mb-12">
        <p className="font-heading font-bold text-primary text-sm uppercase tracking-wider mb-4 text-center">
          Step 1 — Choose Your Base
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {category.extras?.map((base) => (
            <div
              key={base}
              className="menu-card group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={baseImages[base] || bowlImg}
                  alt={base}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="font-heading font-bold text-foreground text-xs md:text-sm">{base}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step 2 – Protein */}
      <div className="mb-12">
        <p className="font-heading font-bold text-primary text-sm uppercase tracking-wider mb-1 text-center">
          Step 2 — Choose Protein
        </p>
        <p className="text-center text-muted-foreground font-body text-xs mb-4">(+$3.49)</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {category.items.map((item) => (
            <div key={item.name} className="menu-card group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={proteinImages[item.name] || bowlImg}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="font-heading font-bold text-foreground text-xs md:text-sm mb-1">{item.name}</h4>
                <p className="text-primary font-heading font-bold text-xs md:text-sm">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step 3 – Toppings */}
      <div className="mb-12">
        <p className="font-heading font-bold text-primary text-sm uppercase tracking-wider mb-4 text-center">
          Step 3 — Toppings
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {['Cucumber', 'Tomato', 'Onion', 'Carrot', 'Cheese', 'Lettuce', 'Cilantro'].map((topping) => (
            <div
              key={topping}
              className="border border-primary/30 rounded-full px-4 py-2.5 text-center text-foreground font-body text-xs md:text-sm
                         hover:border-primary hover:shadow-[0_0_12px_hsl(var(--primary)/0.25)] transition-all duration-300"
            >
              {topping}
            </div>
          ))}
        </div>
      </div>

      {/* Step 4 – Sauce */}
      <div>
        <p className="font-heading font-bold text-primary text-sm uppercase tracking-wider mb-4 text-center">
          Step 4 — Sauce
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
          {['White Cream', 'Spicy Cream'].map((sauce) => (
            <div
              key={sauce}
              className="border border-primary/30 bg-card rounded-lg p-4 text-center text-foreground font-heading font-bold text-sm
                         hover:border-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] hover:-translate-y-0.5 
                         transition-all duration-300 cursor-default"
            >
              {sauce}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({ category }: { category: MenuCategory }) => {
  const { ref, isVisible } = useScrollAnimation();
  const image = categoryImages[category.id];

  if (category.type === 'flavors') return <FlavorSection category={category} />;
  if (category.type === 'bowls') return <BowlsSection category={category} />;

  return (
    <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
      <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl uppercase tracking-wider text-center mb-3">
        {category.name}
      </h3>
      {category.note && (
        <p className="text-center text-muted-foreground font-body text-xs uppercase tracking-widest mb-6">
          {category.note}
        </p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.items.map((item) => (
          <div key={item.name} className="menu-card group">
            <div className="aspect-square overflow-hidden">
              <img
                src={image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-3 md:p-4">
              <h4 className="font-heading font-bold text-foreground text-xs md:text-sm leading-tight mb-1">
                {item.name}
              </h4>
              <p className="text-primary font-heading font-bold text-xs md:text-sm">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MenuSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''} mb-16`}>
          <h2 className="section-title mb-6">Our Menu</h2>
          <div className="yellow-divider" />
        </div>

        <div className="space-y-20">
          {menuCategories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
