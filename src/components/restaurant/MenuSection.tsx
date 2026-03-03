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

const CategorySection = ({ category }: { category: MenuCategory }) => {
  const { ref, isVisible } = useScrollAnimation();
  const image = categoryImages[category.id];

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

      {category.type === 'flavors' ? (
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {category.items.map((item) => (
            <span
              key={item.name}
              className="border border-primary/30 text-foreground font-body text-xs md:text-sm px-4 py-2 rounded-full hover:border-primary/60 transition-colors"
            >
              {item.name}
              {item.price && <span className="text-primary ml-1">{item.price}</span>}
            </span>
          ))}
        </div>
      ) : category.type === 'bowls' ? (
        <div className="max-w-2xl mx-auto">
          <div className="menu-card p-6">
            <div className="aspect-video overflow-hidden rounded-md mb-6">
              <img src={image} alt={category.name} className="w-full h-full object-cover" />
            </div>
            <div className="mb-4">
              <p className="text-muted-foreground font-body text-sm mb-2">Choose your base:</p>
              <div className="flex flex-wrap gap-2">
                {category.extras?.map((base) => (
                  <span key={base} className="border border-primary/30 text-foreground font-body text-xs px-3 py-1 rounded-full">
                    {base}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-muted-foreground font-body text-sm mb-2">Choose protein (+$3.49):</p>
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center border-b border-primary/10 pb-2">
                    <span className="text-foreground font-body text-sm">{item.name}</span>
                    <span className="text-primary font-heading font-bold text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <p className="text-muted-foreground font-body text-sm mb-1">Toppings:</p>
              <p className="text-foreground font-body text-xs">
                Cucumber · Tomato · Onion · Carrot · Cheese · Lettuce · Cilantro
              </p>
            </div>
            <div>
              <p className="text-muted-foreground font-body text-sm mb-1">Sauce:</p>
              <p className="text-foreground font-body text-xs">White Cream · Spicy Cream</p>
            </div>
          </div>
        </div>
      ) : (
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
      )}
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
