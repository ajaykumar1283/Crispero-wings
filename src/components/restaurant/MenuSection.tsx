import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { menuCategories, type MenuCategory } from '@/data/menuData';

/* DEFAULT CATEGORY IMAGES */
import wingsImg from '@/assets/wings.jpg';
import burgerImg from '@/assets/burger.jpg';
import fishImg from '@/assets/new/fried-fish.jpeg';
import shrimpImg from '@/assets/new/jumbo-shrimp.jpeg';
import bowlImg from '@/assets/bowl.jpg';
import friesImg from '@/assets/fries.jpg';

/* BOWL IMAGES */
import walkingTacoImg from '@/assets/new/walking-taco.jpeg';
import originalChickenImg from '@/assets/new/chicken.jpeg';
import friedChickenImg from '@/assets/new/fried-chicken.jpeg';
import beefImg from '@/assets/new/beef.jpeg';

/* SIDE ORDERS */
import cheeseFries from '@/assets/new/for-cheese-fries.jpeg';
import baconCheeseFries from '@/assets/new/bacon-cheese-fries.jpeg';
import friedOkra from '@/assets/new/fried-okra.jpeg';
import onionRings from '@/assets/new/onion-rings.jpeg';
import mozzarellaSticks from '@/assets/new/mozzarella-sticks.jpg';
import jalapenoPoppers from '@/assets/new/jalapeno-poppers.jpg';
import cornNuggets from '@/assets/new/corn-nuggets.jpeg';

/* FRIED RICE */
import veggieFriedRice from '@/assets/new/veg-fried-rice.jpeg';
import eggFriedRice from '@/assets/new/egg-fried-rice.jpeg';
import chickenFriedRice from '@/assets/new/chiken-fried rice.jpeg';
import beefFriedRice from '@/assets/new/beef-fried-rice.jpeg';
import shrimpFriedRice from '@/assets/new/shrimp-fried-rice.jpeg';
import mixFriedRice from '@/assets/new/mix-meat-fried-rice.jpeg';

/* SANDWICH */
import grilledChickenSandwich from '@/assets/new/grilled-chiken-sanwich.jpeg';
import friedChickenSandwich from '@/assets/new/fried-chiken-sandwich.jpeg';

/* PHILLY */
import phillyOnly from '@/assets/new/chicken-philly.jpeg';
import phillyCombo from '@/assets/new/steak-pholly.jpeg';
import phillyWingsCombo from '@/assets/new/shrimp-philly.jpeg';

/* CHICKEN TENDERS */
import tenderImg from '@/assets/new/chiken-tenders.jpeg';

/* BUTTERFLY SHRIMP */
import butterflyShrimp from '@/assets/new/butterfly-shrimp.jpeg';
import butterflyShrimpCombo from '@/assets/new/butterfly-shrimp-combo.jpeg';

/* DRINKS */
import fruitPunch from '@/assets/new/fruit-punch.jpeg';
import peachDrink from '@/assets/new/peach-drink.jpeg';
import lemonade from '@/assets/new/lemonade.jpeg';

/* CAKE */
import cheesecake from '@/assets/new/cake.jpeg';

/* CATEGORY DEFAULT IMAGES */
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
  'butterfly-shrimp': butterflyShrimp,
  drink: friesImg,
  cake: wingsImg,
};

/* ITEM IMAGES */
const itemImages: Record<string, string> = {
  /* SIDE ORDERS */
  'French Fries SM | LM': friesImg,
  'Cheese Fries SM | LM': cheeseFries,
  'Bacon Cheese Fries SM | LM': baconCheeseFries,
  'Fried Okra SM | LM': friedOkra,
  'Onion Ring SM | LM': onionRings,
  'Corn Nugget (X10)': cornNuggets,
  'Corn Nuggets (x10)': cornNuggets,
  'Cheese Fries': cheeseFries,
  'Bacon Cheese Fries': baconCheeseFries,
  'Fried Okra': friedOkra,
  'Onion Ring': onionRings,
  'Mozzarella Sticks [X6]': mozzarellaSticks,
  'Jalapeno Poppers [X6]': jalapenoPoppers,

  /* FRIED RICE */
  'Veggie Fried Rice': veggieFriedRice,
  'Vegie Fried Rice': veggieFriedRice,
  'Egg Fried Rice': eggFriedRice,
  'Chicken Fried Rice': chickenFriedRice,
  'Beef Fried Rice': beefFriedRice,
  'Shrimp Fried Rice': shrimpFriedRice,

  'Veggie SM | LG': veggieFriedRice,
  'Vegie SM | LG': veggieFriedRice,
  'Egg SM | LG': eggFriedRice,
  'Chicken SM | LG': chickenFriedRice,
  'Beef SM | LG': beefFriedRice,
  'Shrimp SM | LG': shrimpFriedRice,
  'Crispero Special Mix Meat SM | LG': mixFriedRice,

  'Veggie': veggieFriedRice,
  'Vegie': veggieFriedRice,
  'Egg': eggFriedRice,
  'Chicken': chickenFriedRice,
  'Beef': beefFriedRice,
  'Shrimp': shrimpFriedRice,
  'Crispero Special Mix Meat': mixFriedRice,

  /* SANDWICH */
  'Grilled Chicken | Grilled Chicken + Combo': grilledChickenSandwich,
  'Fried Chicken | Fried Chicken + Combo': friedChickenSandwich,

  /* PHILLY */
  'Chicken Philly | Chicken Philly + Combo | Chicken Philly + 5 wings': phillyOnly,
  'Steak Philly | Steak Philly + Combo | Steak Philly + 5 wings': phillyCombo,
  'Shrimp Philly | Shrimp Philly + Combo | Shrimp Philly + 5 wings': phillyWingsCombo,

  /* BUTTERFLY SHRIMP */
  '6 pcs | 6 pcs + Combo': butterflyShrimp,
  '10 pcs | 10 pcs + Combo': butterflyShrimp,

  /* DRINKS */
  'Fruit Punch SM | LG': fruitPunch,
  'Peach SM | LG': peachDrink,
  'Lemonade SM | LG': lemonade,

  /* CAKE */
  'Homemade Cake': cheesecake,
  'New York Style Cheese Cake': cheesecake,
  'Lemon Cheese Cake': cheesecake,
};

/* BASE IMAGES */
const baseImages: Record<string, string> = {
  Rice: bowlImg,
  Salad: bowlImg,
  Fries: friesImg,
  'Walking Taco': walkingTacoImg,
};

/* PROTEIN IMAGES */
const proteinImages: Record<string, string> = {
  'Chicken': originalChickenImg,
  'Fried Chicken': friedChickenImg,
  'Beef': beefImg,
  'Shrimp': shrimpImg,
};

/* FLAVOR SECTION */
const FlavorSection = ({ category }: { category: MenuCategory }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
      <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-8">
        {category.name}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm"
          >
            {item.name}
            {item.price && <span className="text-primary ml-1">{item.price}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

/* BOWLS SECTION */
const BowlsSection = ({ category }: { category: MenuCategory }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
      <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-4">
        {category.name}
      </h3>

      <p className="text-center text-muted-foreground text-sm uppercase mb-12">
        Build Your Bowl
      </p>

      {/* STEP 1 BASE */}
      <h4 className="text-center font-bold mb-4">Step 1 — Choose Your Base</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
        {category.extras?.map((base) => (
          <div key={base} className="menu-card group">
            <div className="aspect-square overflow-hidden">
              <img
                src={baseImages[base] || bowlImg}
                alt={base}
                className="w-full h-full object-cover group-hover:scale-110 transition"
              />
            </div>
            <div className="p-2 text-center font-semibold text-sm">
              {base}
            </div>
          </div>
        ))}
      </div>

      {/* STEP 2 PROTEIN */}
      <h4 className="text-center font-bold mb-4">Step 2 — Choose Protein</h4>
      <p className="text-center text-sm mb-6 text-muted-foreground"> Extra Meat (+$3.49)</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
        {category.items.map((item) => (
          <div key={item.name} className="menu-card group">
            <div className="aspect-square overflow-hidden">
              <img
                src={proteinImages[item.name] || bowlImg}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition"
              />
            </div>
            <div className="p-3 text-center">
              <h4 className="font-heading font-bold text-sm">{item.name}</h4>
              <p className="text-primary font-bold text-sm">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* STEP 3 TOPPINGS */}
      <h4 className="text-center font-bold mb-4">Step 3 — Toppings</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">
        {[
          'Cucumber', 'Tomato', 'Onion', 'Carrot', 'Cheese', 'Lettuce', 'Cilantro', 'Smoky Corn',
        ].map((top) => (
          <div
            key={top}
            className="border border-primary/30 rounded-full px-4 py-3 text-center text-sm"
          >
            {top}
          </div>
        ))}
      </div>

      {/* STEP 4 SAUCE */}
      <h4 className="text-center font-bold mb-4">Step 4 — Sauce</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {[
          'Ranch', 'Honey Mustard', 'BBQ', 'Hot Sauce', 'Teriyaki', 'Spicy Mayo',
        ].map((sauce) => (
          <div
            key={sauce}
            className="border border-primary/30 rounded-full px-4 py-3 text-center text-sm"
          >
            {sauce}
          </div>
        ))}
      </div>
    </div>
  );
};

/* CATEGORY SECTION */
const CategorySection = ({ category }: { category: MenuCategory }) => {
  const { ref, isVisible } = useScrollAnimation();
  const image = categoryImages[category.id];

  if (category.type === 'flavors') return <FlavorSection category={category} />;
  if (category.type === 'bowls') return <BowlsSection category={category} />;

  return (
    <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
      <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
        {category.name}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.items.map((item) => (
          <div key={item.name} className="menu-card group">
            <div className="aspect-square overflow-hidden">
              <img
                src={
                  category.id === 'chicken-tender'
                    ? tenderImg
                    : category.id === 'butterfly-shrimp'
                      ? item.name.includes('Combo')
                        ? butterflyShrimpCombo
                        : butterflyShrimp
                      : itemImages[item.name] || image
                }
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-3 md:p-4">
              <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
                {item.name}
              </h4>
              <p className="text-primary font-bold text-xs md:text-sm">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* MENU SECTION */
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
