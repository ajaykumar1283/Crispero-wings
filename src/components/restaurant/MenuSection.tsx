// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// const categoryImages: Record<string, string> = {
//   wings: wingsImg,
//   'all-combo': friesImg,
//   'fried-fish': fishImg,
//   'fried-rice': bowlImg,
//   burger: burgerImg,
//   sandwich: burgerImg,
//   philly: burgerImg,
//   'chicken-tender': wingsImg,
//   'side-orders': friesImg,
//   'crispero-bowls': bowlImg,
//   'jumbo-shrimp': shrimpImg,
//   'butterfly-shrimp': shrimpImg,
//   drink: friesImg,
//   cake: wingsImg,
// };

// const baseImages: Record<string, string> = {
//   Rice: bowlImg,
//   Salad: bowlImg,
//   Fries: friesImg,
//   'Walking Taco': friesImg,
// };

// const proteinImages: Record<string, string> = {
//   'Original Chicken': wingsImg,
//   'Fried Chicken': wingsImg,
//   Beef: burgerImg,
// };

// const FlavorSection = ({ category }: { category: MenuCategory }) => {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl uppercase tracking-wider text-center mb-8">
//         {category.name}
//       </h3>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
//         {category.items.map((item) => (
//           <div
//             key={item.name}
//             className="border border-primary/30 rounded-full px-4 py-3 text-center text-foreground font-body text-xs md:text-sm 
//                        hover:border-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] hover:-translate-y-0.5 
//                        transition-all duration-300 cursor-default"
//           >
//             {item.name}
//             {item.price && <span className="text-primary ml-1">{item.price}</span>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const BowlsSection = ({ category }: { category: MenuCategory }) => {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl uppercase tracking-wider text-center mb-3">
//         {category.name}
//       </h3>
//       <p className="text-center text-muted-foreground font-body text-sm uppercase tracking-widest mb-10">
//         Build Your Bowl
//       </p>

//       {/* Step 1 – Base */}
//       <div className="mb-12">
//         <p className="font-heading font-bold text-primary text-sm uppercase tracking-wider mb-4 text-center">
//           Step 1 — Choose Your Base
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
//           {category.extras?.map((base) => (
//             <div
//               key={base}
//               className="menu-card group"
//             >
//               <div className="aspect-square overflow-hidden">
//                 <img
//                   src={baseImages[base] || bowlImg}
//                   alt={base}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-3 text-center">
//                 <h4 className="font-heading font-bold text-foreground text-xs md:text-sm">{base}</h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Step 2 – Protein */}
//       <div className="mb-12">
//         <p className="font-heading font-bold text-primary text-sm uppercase tracking-wider mb-1 text-center">
//           Step 2 — Choose Protein
//         </p>
//         <p className="text-center text-muted-foreground font-body text-xs mb-4">(+$3.49)</p>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
//           {category.items.map((item) => (
//             <div key={item.name} className="menu-card group">
//               <div className="aspect-square overflow-hidden">
//                 <img
//                   src={proteinImages[item.name] || bowlImg}
//                   alt={item.name}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-3 text-center">
//                 <h4 className="font-heading font-bold text-foreground text-xs md:text-sm mb-1">{item.name}</h4>
//                 <p className="text-primary font-heading font-bold text-xs md:text-sm">{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Step 3 – Toppings */}
//       <div className="mb-12">
//         <p className="font-heading font-bold text-primary text-sm uppercase tracking-wider mb-4 text-center">
//           Step 3 — Toppings
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
//           {['Cucumber', 'Tomato', 'Onion', 'Carrot', 'Cheese', 'Lettuce', 'Cilantro'].map((topping) => (
//             <div
//               key={topping}
//               className="border border-primary/30 rounded-full px-4 py-2.5 text-center text-foreground font-body text-xs md:text-sm
//                          hover:border-primary hover:shadow-[0_0_12px_hsl(var(--primary)/0.25)] transition-all duration-300"
//             >
//               {topping}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Step 4 – Sauce */}
//       <div>
//         <p className="font-heading font-bold text-primary text-sm uppercase tracking-wider mb-4 text-center">
//           Step 4 — Sauce
//         </p>
//         <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
//           {['White Cream', 'Spicy Cream'].map((sauce) => (
//             <div
//               key={sauce}
//               className="border border-primary/30 bg-card rounded-lg p-4 text-center text-foreground font-heading font-bold text-sm
//                          hover:border-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] hover:-translate-y-0.5 
//                          transition-all duration-300 cursor-default"
//             >
//               {sauce}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const CategorySection = ({ category }: { category: MenuCategory }) => {
//   const { ref, isVisible } = useScrollAnimation();
//   const image = categoryImages[category.id];

//   if (category.type === 'flavors') return <FlavorSection category={category} />;
//   if (category.type === 'bowls') return <BowlsSection category={category} />;

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl uppercase tracking-wider text-center mb-3">
//         {category.name}
//       </h3>
//       {category.note && (
//         <p className="text-center text-muted-foreground font-body text-xs uppercase tracking-widest mb-6">
//           {category.note}
//         </p>
//       )}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {category.items.map((item) => (
//           <div key={item.name} className="menu-card group">
//             <div className="aspect-square overflow-hidden">
//               <img
//                 src={image}
//                 alt={item.name}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 loading="lazy"
//               />
//             </div>
//             <div className="p-3 md:p-4">
//               <h4 className="font-heading font-bold text-foreground text-xs md:text-sm leading-tight mb-1">
//                 {item.name}
//               </h4>
//               <p className="text-primary font-heading font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const MenuSection = () => {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section id="menu" className="py-24 md:py-32 bg-background">
//       <div className="container mx-auto px-6">
//         <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''} mb-16`}>
//           <h2 className="section-title mb-6">Our Menu</h2>
//           <div className="yellow-divider" />
//         </div>

//         <div className="space-y-20">
//           {menuCategories.map((category) => (
//             <CategorySection key={category.id} category={category} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MenuSection;



// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// /* NEW ITEM IMAGES */
// import cheeseFries from '@/assets/cheese-fries.jpg';
// import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
// import friedOkra from '@/assets/fried-okra.jpg';
// import onionRings from '@/assets/onion-rings.jpg';
// import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
// import beefFriedRice from '@/assets/beef-fried-rice.jpg';
// import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
// import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';


// /* CATEGORY DEFAULT IMAGES */

// const categoryImages: Record<string, string> = {
//   wings: wingsImg,
//   'all-combo': friesImg,
//   'fried-fish': fishImg,
//   'fried-rice': bowlImg,
//   burger: burgerImg,
//   sandwich: burgerImg,
//   philly: burgerImg,
//   'chicken-tender': wingsImg,
//   'side-orders': friesImg,
//   'crispero-bowls': bowlImg,
//   'jumbo-shrimp': shrimpImg,
//   'butterfly-shrimp': shrimpImg,
//   drink: friesImg,
//   cake: wingsImg,
// };


// /* ITEM SPECIFIC IMAGES */

// const itemImages: Record<string, string> = {
//   'Cheese Fries': cheeseFries,
//   'Bacon Cheese Fries': baconCheeseFries,
//   'Fried Okra': friedOkra,
//   'Onion Ring': onionRings,
//   'Shrimp Fried Rice': shrimpFriedRice,
//   'Beef Fried Rice': beefFriedRice,
//   'Chicken Fried Rice': chickenFriedRice,
//   'Veggie Fried Rice': veggieFriedRice,
// };


// const baseImages: Record<string, string> = {
//   Rice: bowlImg,
//   Salad: bowlImg,
//   Fries: friesImg,
//   'Walking Taco': friesImg,
// };

// const proteinImages: Record<string, string> = {
//   'Original Chicken': wingsImg,
//   'Fried Chicken': wingsImg,
//   Beef: burgerImg,
// };


// const FlavorSection = ({ category }: { category: MenuCategory }) => {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl uppercase tracking-wider text-center mb-8">
//         {category.name}
//       </h3>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
//         {category.items.map((item) => (
//           <div
//             key={item.name}
//             className="border border-primary/30 rounded-full px-4 py-3 text-center text-foreground font-body text-xs md:text-sm 
//             hover:border-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] hover:-translate-y-0.5 transition-all duration-300"
//           >
//             {item.name}
//             {item.price && <span className="text-primary ml-1">{item.price}</span>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// const BowlsSection = ({ category }: { category: MenuCategory }) => {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl uppercase tracking-wider text-center mb-3">
//         {category.name}
//       </h3>

//       <p className="text-center text-muted-foreground font-body text-sm uppercase tracking-widest mb-10">
//         Build Your Bowl
//       </p>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
//         {category.items.map((item) => (
//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">
//               <img
//                 src={proteinImages[item.name] || bowlImg}
//                 alt={item.name}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//             </div>

//             <div className="p-3 text-center">
//               <h4 className="font-heading font-bold text-foreground text-xs md:text-sm mb-1">
//                 {item.name}
//               </h4>

//               <p className="text-primary font-heading font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>
//             </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// const CategorySection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();
//   const image = categoryImages[category.id];

//   if (category.type === 'flavors') return <FlavorSection category={category} />;
//   if (category.type === 'bowls') return <BowlsSection category={category} />;

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl uppercase tracking-wider text-center mb-3">
//         {category.name}
//       </h3>

//       {category.note && (
//         <p className="text-center text-muted-foreground font-body text-xs uppercase tracking-widest mb-6">
//           {category.note}
//         </p>
//       )}

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

//         {category.items.map((item) => (

//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">
//               <img
//                 src={itemImages[item.name] || image}
//                 alt={item.name}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 loading="lazy"
//               />
//             </div>

//             <div className="p-3 md:p-4">

//               <h4 className="font-heading font-bold text-foreground text-xs md:text-sm leading-tight mb-1">
//                 {item.name}
//               </h4>

//               <p className="text-primary font-heading font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// const MenuSection = () => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section id="menu" className="py-24 md:py-32 bg-background">

//       <div className="container mx-auto px-6">

//         <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''} mb-16`}>
//           <h2 className="section-title mb-6">Our Menu</h2>
//           <div className="yellow-divider" />
//         </div>

//         <div className="space-y-20">
//           {menuCategories.map((category) => (
//             <CategorySection key={category.id} category={category} />
//           ))}
//         </div>

//       </div>

//     </section>
//   );
// };

// export default MenuSection;


// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// /* SIDE ORDER IMAGES */

// import cheeseFries from '@/assets/cheese-fries.jpg';
// import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
// import friedOkra from '@/assets/fried-okra.jpg';
// import onionRings from '@/assets/onion-rings.jpg';

// /* FRIED RICE IMAGES */

// import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';
// import eggFriedRice from '@/assets/egg-fried-rice.jpg';
// import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
// import beefFriedRice from '@/assets/beef-fried-rice.jpg';
// import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
// import mixFriedRice from '@/assets/crispero-mix-fried-rice.jpg';


// /* CATEGORY DEFAULT IMAGES */

// const categoryImages: Record<string, string> = {
//   wings: wingsImg,
//   'all-combo': friesImg,
//   'fried-fish': fishImg,
//   'fried-rice': bowlImg,
//   burger: burgerImg,
//   sandwich: burgerImg,
//   philly: burgerImg,
//   'chicken-tender': wingsImg,
//   'side-orders': friesImg,
//   'crispero-bowls': bowlImg,
//   'jumbo-shrimp': shrimpImg,
//   'butterfly-shrimp': shrimpImg,
//   drink: friesImg,
//   cake: wingsImg,
// };


// /* ITEM SPECIFIC IMAGES */

// const itemImages: Record<string, string> = {

//   /* SIDE ORDERS */

//   'Cheese Fries': cheeseFries,
//   'Bacon Cheese Fries': baconCheeseFries,
//   'Fried Okra': friedOkra,
//   'Onion Ring': onionRings,

//   /* FRIED RICE */

//   'Veggie': veggieFriedRice,
//   'Egg': eggFriedRice,
//   'Chicken': chickenFriedRice,
//   'Beef': beefFriedRice,
//   'Shrimp': shrimpFriedRice,
//   'Crispero Special Mix Meat': mixFriedRice,
// };


// const baseImages: Record<string, string> = {
//   Rice: bowlImg,
//   Salad: bowlImg,
//   Fries: friesImg,
//   'Walking Taco': friesImg,
// };

// const proteinImages: Record<string, string> = {
//   'Original Chicken': wingsImg,
//   'Fried Chicken': wingsImg,
//   Beef: burgerImg,
// };


// const FlavorSection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl uppercase tracking-wider text-center mb-8">
//         {category.name}
//       </h3>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">

//         {category.items.map((item) => (

//           <div
//             key={item.name}
//             className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm hover:border-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300"
//           >
//             {item.name}
//             {item.price && <span className="text-primary ml-1">{item.price}</span>}
//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// const BowlsSection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
//         {category.name}
//       </h3>

//       <p className="text-center text-muted-foreground text-sm uppercase mb-10">
//         Build Your Bowl
//       </p>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">

//         {category.items.map((item) => (

//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">

//               <img
//                 src={proteinImages[item.name] || bowlImg}
//                 alt={item.name}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//             </div>

//             <div className="p-3 text-center">

//               <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
//                 {item.name}
//               </h4>

//               <p className="text-primary font-heading font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// const CategorySection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();
//   const image = categoryImages[category.id];

//   if (category.type === 'flavors') return <FlavorSection category={category} />;
//   if (category.type === 'bowls') return <BowlsSection category={category} />;

//   return (

//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
//         {category.name}
//       </h3>

//       {category.note && (
//         <p className="text-center text-muted-foreground text-xs uppercase mb-6">
//           {category.note}
//         </p>
//       )}

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

//         {category.items.map((item) => (

//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">

//               <img
//                 src={itemImages[item.name] || image}
//                 alt={item.name}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 loading="lazy"
//               />

//             </div>

//             <div className="p-3 md:p-4">

//               <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
//                 {item.name}
//               </h4>

//               <p className="text-primary font-heading font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// const MenuSection = () => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section id="menu" className="py-24 md:py-32 bg-background">

//       <div className="container mx-auto px-6">

//         <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''} mb-16`}>
//           <h2 className="section-title mb-6">Our Menu</h2>
//           <div className="yellow-divider" />
//         </div>

//         <div className="space-y-20">

//           {menuCategories.map((category) => (
//             <CategorySection key={category.id} category={category} />
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default MenuSection;


// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// /* SIDE ORDER IMAGES */

// import cheeseFries from '@/assets/cheese-fries.jpg';
// import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
// import friedOkra from '@/assets/fried-okra.jpg';
// import onionRings from '@/assets/onion-rings.jpg';

// /* FRIED RICE IMAGES */

// import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';
// import eggFriedRice from '@/assets/egg-fried-rice.jpg';
// import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
// import beefFriedRice from '@/assets/beef-fried-rice.jpg';
// import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
// import mixFriedRice from '@/assets/crispero-mix-fried-rice.jpg';


// /* CATEGORY DEFAULT IMAGES */

// const categoryImages: Record<string, string> = {
//   wings: wingsImg,
//   'all-combo': friesImg,
//   'fried-fish': fishImg,
//   'fried-rice': bowlImg,
//   burger: burgerImg,
//   sandwich: burgerImg,
//   philly: burgerImg,
//   'chicken-tender': wingsImg,
//   'side-orders': friesImg,
//   'crispero-bowls': bowlImg,
//   'jumbo-shrimp': shrimpImg,
//   'butterfly-shrimp': shrimpImg,
//   drink: friesImg,
//   cake: wingsImg,
// };


// /* ITEM SPECIFIC IMAGES */

// const itemImages: Record<string, string> = {

//   /* SIDE ORDERS */

//   'Cheese Fries': cheeseFries,
//   'Bacon Cheese Fries': baconCheeseFries,
//   'Fried Okra': friedOkra,
//   'Onion Ring': onionRings,

//   /* ALL COMBO FRIED RICE */

//   'Veggie Fried Rice': veggieFriedRice,
//   'Chicken Fried Rice': chickenFriedRice,
//   'Beef Fried Rice': beefFriedRice,
//   'Shrimp Fried Rice': shrimpFriedRice,

//   /* FRIED RICE SECTION */

//   'Veggie': veggieFriedRice,
//   'Egg': eggFriedRice,
//   'Chicken': chickenFriedRice,
//   'Beef': beefFriedRice,
//   'Shrimp': shrimpFriedRice,
//   'Crispero Special Mix Meat': mixFriedRice,
// };


// const baseImages: Record<string, string> = {
//   Rice: bowlImg,
//   Salad: bowlImg,
//   Fries: friesImg,
//   'Walking Taco': friesImg,
// };

// const proteinImages: Record<string, string> = {
//   'Original Chicken': wingsImg,
//   'Fried Chicken': wingsImg,
//   Beef: burgerImg,
// };


// /* FLAVOR SECTION */

// const FlavorSection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-8">
//         {category.name}
//       </h3>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">

//         {category.items.map((item) => (

//           <div
//             key={item.name}
//             className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm hover:border-primary hover:shadow-md transition-all"
//           >
//             {item.name}
//             {item.price && <span className="text-primary ml-1">{item.price}</span>}
//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// /* BOWLS SECTION */

// const BowlsSection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
//         {category.name}
//       </h3>

//       <p className="text-center text-muted-foreground text-sm uppercase mb-10">
//         Build Your Bowl
//       </p>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">

//         {category.items.map((item) => (

//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">

//               <img
//                 src={proteinImages[item.name] || bowlImg}
//                 alt={item.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />

//             </div>

//             <div className="p-3 text-center">

//               <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
//                 {item.name}
//               </h4>

//               <p className="text-primary font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// /* CATEGORY SECTION */

// const CategorySection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();
//   const image = categoryImages[category.id];

//   if (category.type === 'flavors') return <FlavorSection category={category} />;
//   if (category.type === 'bowls') return <BowlsSection category={category} />;

//   return (

//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
//         {category.name}
//       </h3>

//       {category.note && (
//         <p className="text-center text-muted-foreground text-xs uppercase mb-6">
//           {category.note}
//         </p>
//       )}

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

//         {category.items.map((item) => (

//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">

//               <img
//                 src={itemImages[item.name] || image}
//                 alt={item.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />

//             </div>

//             <div className="p-3 md:p-4">

//               <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
//                 {item.name}
//               </h4>

//               <p className="text-primary font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// /* MENU SECTION */

// const MenuSection = () => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section id="menu" className="py-24 md:py-32 bg-background">

//       <div className="container mx-auto px-6">

//         <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''} mb-16`}>
//           <h2 className="section-title mb-6">Our Menu</h2>
//           <div className="yellow-divider" />
//         </div>

//         <div className="space-y-20">

//           {menuCategories.map((category) => (
//             <CategorySection key={category.id} category={category} />
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default MenuSection;



// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// /* SIDE ORDER IMAGES */

// import cheeseFries from '@/assets/cheese-fries.jpg';
// import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
// import friedOkra from '@/assets/fried-okra.jpg';
// import onionRings from '@/assets/onion-rings.jpg';

// /* FRIED RICE IMAGES */

// import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';
// import eggFriedRice from '@/assets/egg-fried-rice.jpg';
// import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
// import beefFriedRice from '@/assets/beef-fried-rice.jpg';
// import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
// import mixFriedRice from '@/assets/crispero-mix-fried-rice.jpg';

// /* SANDWICH IMAGES */

// import grilledChickenSandwich from '@/assets/grilled-chicken-sandwich.jpg';
// import friedChickenSandwich from '@/assets/fried-chicken-sandwich.jpg';


// /* CATEGORY DEFAULT IMAGES */

// const categoryImages: Record<string, string> = {
//   wings: wingsImg,
//   'all-combo': friesImg,
//   'fried-fish': fishImg,
//   'fried-rice': bowlImg,
//   burger: burgerImg,
//   sandwich: burgerImg,
//   philly: burgerImg,
//   'chicken-tender': wingsImg,
//   'side-orders': friesImg,
//   'crispero-bowls': bowlImg,
//   'jumbo-shrimp': shrimpImg,
//   'butterfly-shrimp': shrimpImg,
//   drink: friesImg,
//   cake: wingsImg,
// };


// /* ITEM SPECIFIC IMAGES */

// const itemImages: Record<string, string> = {

//   /* SIDE ORDERS */

//   'Cheese Fries': cheeseFries,
//   'Bacon Cheese Fries': baconCheeseFries,
//   'Fried Okra': friedOkra,
//   'Onion Ring': onionRings,

//   /* ALL COMBO FRIED RICE */

//   'Veggie Fried Rice': veggieFriedRice,
//   'Chicken Fried Rice': chickenFriedRice,
//   'Beef Fried Rice': beefFriedRice,
//   'Shrimp Fried Rice': shrimpFriedRice,

//   /* FRIED RICE SECTION */

//   'Veggie': veggieFriedRice,
//   'Egg': eggFriedRice,
//   'Chicken': chickenFriedRice,
//   'Beef': beefFriedRice,
//   'Shrimp': shrimpFriedRice,
//   'Crispero Special Mix Meat': mixFriedRice,

//   /* SANDWICH */

//   'Grilled Chicken': grilledChickenSandwich,
//   'Fried Chicken': friedChickenSandwich,
// };


// const baseImages: Record<string, string> = {
//   Rice: bowlImg,
//   Salad: bowlImg,
//   Fries: friesImg,
//   'Walking Taco': friesImg,
// };

// const proteinImages: Record<string, string> = {
//   'Original Chicken': wingsImg,
//   'Fried Chicken': wingsImg,
//   Beef: burgerImg,
// };


// /* FLAVOR SECTION */

// const FlavorSection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-8">
//         {category.name}
//       </h3>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">

//         {category.items.map((item) => (

//           <div
//             key={item.name}
//             className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm hover:border-primary hover:shadow-md transition-all"
//           >
//             {item.name}
//             {item.price && <span className="text-primary ml-1">{item.price}</span>}
//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// /* BOWLS SECTION */

// const BowlsSection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
//         {category.name}
//       </h3>

//       <p className="text-center text-muted-foreground text-sm uppercase mb-10">
//         Build Your Bowl
//       </p>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">

//         {category.items.map((item) => (

//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">

//               <img
//                 src={proteinImages[item.name] || bowlImg}
//                 alt={item.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />

//             </div>

//             <div className="p-3 text-center">

//               <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
//                 {item.name}
//               </h4>

//               <p className="text-primary font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// /* CATEGORY SECTION */

// const CategorySection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();
//   const image = categoryImages[category.id];

//   if (category.type === 'flavors') return <FlavorSection category={category} />;
//   if (category.type === 'bowls') return <BowlsSection category={category} />;

//   return (

//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
//         {category.name}
//       </h3>

//       {category.note && (
//         <p className="text-center text-muted-foreground text-xs uppercase mb-6">
//           {category.note}
//         </p>
//       )}

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

//         {category.items.map((item) => (

//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">

//               <img
//                 src={itemImages[item.name] || image}
//                 alt={item.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />

//             </div>

//             <div className="p-3 md:p-4">

//               <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
//                 {item.name}
//               </h4>

//               <p className="text-primary font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// /* MENU SECTION */

// const MenuSection = () => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section id="menu" className="py-24 md:py-32 bg-background">

//       <div className="container mx-auto px-6">

//         <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''} mb-16`}>
//           <h2 className="section-title mb-6">Our Menu</h2>
//           <div className="yellow-divider" />
//         </div>

//         <div className="space-y-20">

//           {menuCategories.map((category) => (
//             <CategorySection key={category.id} category={category} />
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default MenuSection;


// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// /* SIDE ORDER IMAGES */

// import cheeseFries from '@/assets/cheese-fries.jpg';
// import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
// import friedOkra from '@/assets/fried-okra.jpg';
// import onionRings from '@/assets/onion-rings.jpg';

// /* FRIED RICE IMAGES */

// import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';
// import eggFriedRice from '@/assets/egg-fried-rice.jpg';
// import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
// import beefFriedRice from '@/assets/beef-fried-rice.jpg';
// import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
// import mixFriedRice from '@/assets/crispero-mix-fried-rice.jpg';

// /* SANDWICH IMAGES */

// import grilledChickenSandwich from '@/assets/grilled-chicken-sandwich.jpg';
// import friedChickenSandwich from '@/assets/fried-chicken-sandwich.jpg';

// /* PHILLY IMAGES */

// import phillyOnly from '@/assets/philly-only.jpg';
// import phillyCombo from '@/assets/philly-combo.jpg';
// import phillyWingsCombo from '@/assets/philly-wings-combo.jpg';


// /* CATEGORY DEFAULT IMAGES */

// const categoryImages: Record<string, string> = {
//   wings: wingsImg,
//   'all-combo': friesImg,
//   'fried-fish': fishImg,
//   'fried-rice': bowlImg,
//   burger: burgerImg,
//   sandwich: burgerImg,
//   philly: burgerImg,
//   'chicken-tender': wingsImg,
//   'side-orders': friesImg,
//   'crispero-bowls': bowlImg,
//   'jumbo-shrimp': shrimpImg,
//   'butterfly-shrimp': shrimpImg,
//   drink: friesImg,
//   cake: wingsImg,
// };


// /* ITEM SPECIFIC IMAGES */

// const itemImages: Record<string, string> = {

//   /* SIDE ORDERS */

//   'Cheese Fries': cheeseFries,
//   'Bacon Cheese Fries': baconCheeseFries,
//   'Fried Okra': friedOkra,
//   'Onion Ring': onionRings,

//   /* ALL COMBO FRIED RICE */

//   'Veggie Fried Rice': veggieFriedRice,
//   'Chicken Fried Rice': chickenFriedRice,
//   'Beef Fried Rice': beefFriedRice,
//   'Shrimp Fried Rice': shrimpFriedRice,

//   /* FRIED RICE SECTION */

//   'Veggie': veggieFriedRice,
//   'Egg': eggFriedRice,
//   'Chicken': chickenFriedRice,
//   'Beef': beefFriedRice,
//   'Shrimp': shrimpFriedRice,
//   'Crispero Special Mix Meat': mixFriedRice,

//   /* SANDWICH */

//   'Grilled Chicken': grilledChickenSandwich,
//   'Fried Chicken': friedChickenSandwich,

//   /* PHILLY */

//   'Philly Only': phillyOnly,
//   'Philly Combo': phillyCombo,
//   'Philly Combo + 5 Wings': phillyWingsCombo,
// };


// const baseImages: Record<string, string> = {
//   Rice: bowlImg,
//   Salad: bowlImg,
//   Fries: friesImg,
//   'Walking Taco': friesImg,
// };

// const proteinImages: Record<string, string> = {
//   'Original Chicken': wingsImg,
//   'Fried Chicken': wingsImg,
//   Beef: burgerImg,
// };


// /* FLAVOR SECTION */

// const FlavorSection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-8">
//         {category.name}
//       </h3>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
//         {category.items.map((item) => (
//           <div
//             key={item.name}
//             className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm hover:border-primary hover:shadow-md transition-all"
//           >
//             {item.name}
//             {item.price && <span className="text-primary ml-1">{item.price}</span>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// /* BOWLS SECTION */

// const BowlsSection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
//         {category.name}
//       </h3>

//       <p className="text-center text-muted-foreground text-sm uppercase mb-10">
//         Build Your Bowl
//       </p>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">

//         {category.items.map((item) => (

//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">
//               <img
//                 src={proteinImages[item.name] || bowlImg}
//                 alt={item.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//             </div>

//             <div className="p-3 text-center">
//               <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
//                 {item.name}
//               </h4>
//               <p className="text-primary font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>
//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// /* CATEGORY SECTION */

// const CategorySection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();
//   const image = categoryImages[category.id];

//   if (category.type === 'flavors') return <FlavorSection category={category} />;
//   if (category.type === 'bowls') return <BowlsSection category={category} />;

//   return (

//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
//         {category.name}
//       </h3>

//       {category.note && (
//         <p className="text-center text-muted-foreground text-xs uppercase mb-6">
//           {category.note}
//         </p>
//       )}

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

//         {category.items.map((item) => (

//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">
//               <img
//                 src={itemImages[item.name] || image}
//                 alt={item.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//             </div>

//             <div className="p-3 md:p-4">
//               <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
//                 {item.name}
//               </h4>
//               <p className="text-primary font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>
//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// /* MENU SECTION */

// const MenuSection = () => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section id="menu" className="py-24 md:py-32 bg-background">

//       <div className="container mx-auto px-6">

//         <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''} mb-16`}>
//           <h2 className="section-title mb-6">Our Menu</h2>
//           <div className="yellow-divider" />
//         </div>

//         <div className="space-y-20">
//           {menuCategories.map((category) => (
//             <CategorySection key={category.id} category={category} />
//           ))}
//         </div>

//       </div>

//     </section>
//   );
// };

// export default MenuSection;

// flavours code
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// /* SIDE ORDER IMAGES */

// import cheeseFries from '@/assets/cheese-fries.jpg';
// import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
// import friedOkra from '@/assets/fried-okra.jpg';
// import onionRings from '@/assets/onion-rings.jpg';

// /* FRIED RICE IMAGES */

// import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';
// import eggFriedRice from '@/assets/egg-fried-rice.jpg';
// import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
// import beefFriedRice from '@/assets/beef-fried-rice.jpg';
// import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
// import mixFriedRice from '@/assets/crispero-mix-fried-rice.jpg';

// /* SANDWICH IMAGES */

// import grilledChickenSandwich from '@/assets/grilled-chicken-sandwich.jpg';
// import friedChickenSandwich from '@/assets/fried-chicken-sandwich.jpg';

// /* PHILLY IMAGES */

// import phillyOnly from '@/assets/philly-only.jpg';
// import phillyCombo from '@/assets/philly-combo.jpg';
// import phillyWingsCombo from '@/assets/philly-wings-combo.jpg';

// /* CHICKEN TENDER IMAGES */

// import tender2 from '@/assets/chicken-tender-2pcs.jpg';
// import tender4 from '@/assets/chicken-tender-4pcs.jpg';
// import tender6 from '@/assets/chicken-tender-6pcs.jpg';


// /* CATEGORY DEFAULT IMAGES */

// const categoryImages: Record<string, string> = {
//   wings: wingsImg,
//   'all-combo': friesImg,
//   'fried-fish': fishImg,
//   'fried-rice': bowlImg,
//   burger: burgerImg,
//   sandwich: burgerImg,
//   philly: burgerImg,
//   'chicken-tender': wingsImg,
//   'side-orders': friesImg,
//   'crispero-bowls': bowlImg,
//   'jumbo-shrimp': shrimpImg,
//   'butterfly-shrimp': shrimpImg,
//   drink: friesImg,
//   cake: wingsImg,
// };


// /* ITEM SPECIFIC IMAGES */

// const itemImages: Record<string, string> = {

//   /* SIDE ORDERS */

//   'Cheese Fries': cheeseFries,
//   'Bacon Cheese Fries': baconCheeseFries,
//   'Fried Okra': friedOkra,
//   'Onion Ring': onionRings,

//   /* ALL COMBO FRIED RICE */

//   'Veggie Fried Rice': veggieFriedRice,
//   'Chicken Fried Rice': chickenFriedRice,
//   'Beef Fried Rice': beefFriedRice,
//   'Shrimp Fried Rice': shrimpFriedRice,

//   /* FRIED RICE SECTION */

//   'Veggie': veggieFriedRice,
//   'Egg': eggFriedRice,
//   'Chicken': chickenFriedRice,
//   'Beef': beefFriedRice,
//   'Shrimp': shrimpFriedRice,
//   'Crispero Special Mix Meat': mixFriedRice,

//   /* SANDWICH */

//   'Grilled Chicken': grilledChickenSandwich,
//   'Fried Chicken': friedChickenSandwich,

//   /* PHILLY */

//   'Philly Only': phillyOnly,
//   'Philly Combo': phillyCombo,
//   'Philly Combo + 5 Wings': phillyWingsCombo,

//   /* CHICKEN TENDER */

//   '2 pcs': tender2,
//   '4 pcs': tender4,
//   '6 pcs': tender6,
// };


// const baseImages: Record<string, string> = {
//   Rice: bowlImg,
//   Salad: bowlImg,
//   Fries: friesImg,
//   'Walking Taco': friesImg,
// };

// const proteinImages: Record<string, string> = {
//   'Original Chicken': wingsImg,
//   'Fried Chicken': wingsImg,
//   Beef: burgerImg,
// };


// /* FLAVOR SECTION */

// const FlavorSection = ({ category }: { category: MenuCategory }) => {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-8">
//         {category.name}
//       </h3>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
//         {category.items.map((item) => (
//           <div
//             key={item.name}
//             className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm hover:border-primary hover:shadow-md transition-all"
//           >
//             {item.name}
//             {item.price && <span className="text-primary ml-1">{item.price}</span>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// /* CATEGORY SECTION */

// const CategorySection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();
//   const image = categoryImages[category.id];

//   return (

//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
//         {category.name}
//       </h3>

//       {category.note && (
//         <p className="text-center text-muted-foreground text-xs uppercase mb-6">
//           {category.note}
//         </p>
//       )}

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

//         {category.items.map((item) => (

//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">
//               <img
//                 src={itemImages[item.name] || image}
//                 alt={item.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//             </div>

//             <div className="p-3 md:p-4">
//               <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
//                 {item.name}
//               </h4>
//               <p className="text-primary font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>
//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// /* MENU SECTION */

// const MenuSection = () => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section id="menu" className="py-24 md:py-32 bg-background">

//       <div className="container mx-auto px-6">

//         <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''} mb-16`}>
//           <h2 className="section-title mb-6">Our Menu</h2>
//           <div className="yellow-divider" />
//         </div>

//         <div className="space-y-20">
//           {menuCategories.map((category) => (
//             <CategorySection key={category.id} category={category} />
//           ))}
//         </div>

//       </div>

//     </section>
//   );
// };

// export default MenuSection;



// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// /* SIDE ORDER IMAGES */

// import cheeseFries from '@/assets/cheese-fries.jpg';
// import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
// import friedOkra from '@/assets/fried-okra.jpg';
// import onionRings from '@/assets/onion-rings.jpg';

// /* FRIED RICE IMAGES */

// import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';
// import eggFriedRice from '@/assets/egg-fried-rice.jpg';
// import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
// import beefFriedRice from '@/assets/beef-fried-rice.jpg';
// import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
// import mixFriedRice from '@/assets/crispero-mix-fried-rice.jpg';

// /* SANDWICH IMAGES */

// import grilledChickenSandwich from '@/assets/grilled-chicken-sandwich.jpg';
// import friedChickenSandwich from '@/assets/fried-chicken-sandwich.jpg';

// /* PHILLY IMAGES */

// import phillyOnly from '@/assets/philly-only.jpg';
// import phillyCombo from '@/assets/philly-combo.jpg';
// import phillyWingsCombo from '@/assets/philly-wings-combo.jpg';

// /* CHICKEN TENDER IMAGES */

// import tender2 from '@/assets/chicken-tender-2pcs.jpg';
// import tender4 from '@/assets/chicken-tender-4pcs.jpg';
// import tender6 from '@/assets/chicken-tender-6pcs.jpg';


// /* CATEGORY DEFAULT IMAGES */

// const categoryImages: Record<string, string> = {
//   wings: wingsImg,
//   'all-combo': friesImg,
//   'fried-fish': fishImg,
//   'fried-rice': bowlImg,
//   burger: burgerImg,
//   sandwich: burgerImg,
//   philly: burgerImg,
//   'chicken-tender': wingsImg,
//   'side-orders': friesImg,
//   'crispero-bowls': bowlImg,
//   'jumbo-shrimp': shrimpImg,
//   'butterfly-shrimp': shrimpImg,
//   drink: friesImg,
//   cake: wingsImg,
// };


// /* ITEM SPECIFIC IMAGES */

// const itemImages: Record<string, string> = {

//   /* SIDE ORDERS */

//   'Cheese Fries': cheeseFries,
//   'Bacon Cheese Fries': baconCheeseFries,
//   'Fried Okra': friedOkra,
//   'Onion Ring': onionRings,

//   /* ALL COMBO FRIED RICE */

//   'Veggie Fried Rice': veggieFriedRice,
//   'Chicken Fried Rice': chickenFriedRice,
//   'Beef Fried Rice': beefFriedRice,
//   'Shrimp Fried Rice': shrimpFriedRice,

//   /* FRIED RICE SECTION */

//   'Veggie': veggieFriedRice,
//   'Egg': eggFriedRice,
//   'Chicken': chickenFriedRice,
//   'Beef': beefFriedRice,
//   'Shrimp': shrimpFriedRice,
//   'Crispero Special Mix Meat': mixFriedRice,

//   /* SANDWICH */

//   'Grilled Chicken': grilledChickenSandwich,
//   'Fried Chicken': friedChickenSandwich,

//   /* PHILLY */

//   'Philly Only': phillyOnly,
//   'Philly Combo': phillyCombo,
//   'Philly Combo + 5 Wings': phillyWingsCombo,

//   /* CHICKEN TENDER */

//   '2 pcs': tender2,
//   '4 pcs': tender4,
//   '6 pcs': tender6,
// };


// const baseImages: Record<string, string> = {
//   Rice: bowlImg,
//   Salad: bowlImg,
//   Fries: friesImg,
//   'Walking Taco': friesImg,
// };

// const proteinImages: Record<string, string> = {
//   'Original Chicken': wingsImg,
//   'Fried Chicken': wingsImg,
//   Beef: burgerImg,
// };


// /* FLAVOR SECTION */

// const FlavorSection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-8">
//         {category.name}
//       </h3>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
//         {category.items.map((item) => (
//           <div
//             key={item.name}
//             className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm hover:border-primary hover:shadow-md transition-all"
//           >
//             {item.name}
//             {item.price && <span className="text-primary ml-1">{item.price}</span>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// /* BOWLS SECTION */

// const BowlsSection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
//         {category.name}
//       </h3>

//       <p className="text-center text-muted-foreground text-sm uppercase mb-10">
//         Build Your Bowl
//       </p>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">

//         {category.items.map((item) => (

//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">
//               <img
//                 src={proteinImages[item.name] || bowlImg}
//                 alt={item.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//             </div>

//             <div className="p-3 text-center">
//               <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
//                 {item.name}
//               </h4>
//               <p className="text-primary font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>
//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// /* CATEGORY SECTION */

// const CategorySection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();
//   const image = categoryImages[category.id];

//   if (category.type === 'flavors') return <FlavorSection category={category} />;
//   if (category.type === 'bowls') return <BowlsSection category={category} />;

//   return (

//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
//         {category.name}
//       </h3>

//       {category.note && (
//         <p className="text-center text-muted-foreground text-xs uppercase mb-6">
//           {category.note}
//         </p>
//       )}

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

//         {category.items.map((item) => (

//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">
//               <img
//                 src={itemImages[item.name] || image}
//                 alt={item.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//             </div>

//             <div className="p-3 md:p-4">
//               <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
//                 {item.name}
//               </h4>
//               <p className="text-primary font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>
//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// /* MENU SECTION */

// const MenuSection = () => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section id="menu" className="py-24 md:py-32 bg-background">

//       <div className="container mx-auto px-6">

//         <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''} mb-16`}>
//           <h2 className="section-title mb-6">Our Menu</h2>
//           <div className="yellow-divider" />
//         </div>

//         <div className="space-y-20">
//           {menuCategories.map((category) => (
//             <CategorySection key={category.id} category={category} />
//           ))}
//         </div>

//       </div>

//     </section>
//   );
// };

// export default MenuSection;


// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// /* SIDE ORDER IMAGES */

// import cheeseFries from '@/assets/cheese-fries.jpg';
// import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
// import friedOkra from '@/assets/fried-okra.jpg';
// import onionRings from '@/assets/onion-rings.jpg';

// /* FRIED RICE IMAGES */

// import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';
// import eggFriedRice from '@/assets/egg-fried-rice.jpg';
// import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
// import beefFriedRice from '@/assets/beef-fried-rice.jpg';
// import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
// import mixFriedRice from '@/assets/crispero-mix-fried-rice.jpg';

// /* SANDWICH IMAGES */

// import grilledChickenSandwich from '@/assets/grilled-chicken-sandwich.jpg';
// import friedChickenSandwich from '@/assets/fried-chicken-sandwich.jpg';

// /* PHILLY IMAGES */

// import phillyOnly from '@/assets/philly-only.jpg';
// import phillyCombo from '@/assets/philly-combo.jpg';
// import phillyWingsCombo from '@/assets/philly-wings-combo.jpg';

// /* CHICKEN TENDER IMAGES */

// import tender2 from '@/assets/chicken-tender-2pcs.jpg';
// import tender4 from '@/assets/chicken-tender-4pcs.jpg';
// import tender6 from '@/assets/chicken-tender-6pcs.jpg';


// /* CATEGORY DEFAULT IMAGES */

// const categoryImages: Record<string, string> = {
//   wings: wingsImg,
//   'all-combo': friesImg,
//   'fried-fish': fishImg,
//   'fried-rice': bowlImg,
//   burger: burgerImg,
//   sandwich: burgerImg,
//   philly: burgerImg,
//   'chicken-tender': wingsImg,
//   'side-orders': friesImg,
//   'crispero-bowls': bowlImg,
//   'jumbo-shrimp': shrimpImg,
//   'butterfly-shrimp': shrimpImg,
//   drink: friesImg,
//   cake: wingsImg,
// };


// /* ITEM SPECIFIC IMAGES */

// const itemImages: Record<string, string> = {

//   /* SIDE ORDERS */

//   'Cheese Fries': cheeseFries,
//   'Bacon Cheese Fries': baconCheeseFries,
//   'Fried Okra': friedOkra,
//   'Onion Ring': onionRings,

//   /* ALL COMBO FRIED RICE */

//   'Veggie Fried Rice': veggieFriedRice,
//   'Chicken Fried Rice': chickenFriedRice,
//   'Beef Fried Rice': beefFriedRice,
//   'Shrimp Fried Rice': shrimpFriedRice,

//   /* FRIED RICE SECTION */

//   'Veggie': veggieFriedRice,
//   'Egg': eggFriedRice,
//   'Chicken': chickenFriedRice,
//   'Beef': beefFriedRice,
//   'Shrimp': shrimpFriedRice,
//   'Crispero Special Mix Meat': mixFriedRice,

//   /* SANDWICH */

//   'Grilled Chicken': grilledChickenSandwich,
//   'Fried Chicken': friedChickenSandwich,

//   /* PHILLY */

//   'Philly Only': phillyOnly,
//   'Philly Combo': phillyCombo,
//   'Philly Combo + 5 Wings': phillyWingsCombo,
// };


// const baseImages: Record<string, string> = {
//   Rice: bowlImg,
//   Salad: bowlImg,
//   Fries: friesImg,
//   'Walking Taco': friesImg,
// };

// const proteinImages: Record<string, string> = {
//   'Original Chicken': wingsImg,
//   'Fried Chicken': wingsImg,
//   Beef: burgerImg,
// };


// /* FLAVOR SECTION */

// const FlavorSection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-8">
//         {category.name}
//       </h3>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
//         {category.items.map((item) => (
//           <div
//             key={item.name}
//             className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm hover:border-primary hover:shadow-md transition-all"
//           >
//             {item.name}
//             {item.price && <span className="text-primary ml-1">{item.price}</span>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// /* BOWLS SECTION */

// const BowlsSection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
//         {category.name}
//       </h3>

//       <p className="text-center text-muted-foreground text-sm uppercase mb-10">
//         Build Your Bowl
//       </p>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">

//         {category.items.map((item) => (

//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">
//               <img
//                 src={proteinImages[item.name] || bowlImg}
//                 alt={item.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//             </div>

//             <div className="p-3 text-center">
//               <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
//                 {item.name}
//               </h4>
//               <p className="text-primary font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>
//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// /* CATEGORY SECTION */

// const CategorySection = ({ category }: { category: MenuCategory }) => {

//   const { ref, isVisible } = useScrollAnimation();
//   const image = categoryImages[category.id];

//   if (category.type === 'flavors') return <FlavorSection category={category} />;
//   if (category.type === 'bowls') return <BowlsSection category={category} />;

//   return (

//     <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>

//       <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
//         {category.name}
//       </h3>

//       {category.note && (
//         <p className="text-center text-muted-foreground text-xs uppercase mb-6">
//           {category.note}
//         </p>
//       )}

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

//         {category.items.map((item) => (

//           <div key={item.name} className="menu-card group">

//             <div className="aspect-square overflow-hidden">

//               <img
//                 src={
//                   category.id === 'chicken-tender'
//                     ? item.name === '2 pcs'
//                       ? tender2
//                       : item.name === '4 pcs'
//                       ? tender4
//                       : item.name === '6 pcs'
//                       ? tender6
//                       : image
//                     : itemImages[item.name] || image
//                 }
//                 alt={item.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />

//             </div>

//             <div className="p-3 md:p-4">
//               <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
//                 {item.name}
//               </h4>
//               <p className="text-primary font-bold text-xs md:text-sm">
//                 {item.price}
//               </p>
//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };


// /* MENU SECTION */

// const MenuSection = () => {

//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section id="menu" className="py-24 md:py-32 bg-background">

//       <div className="container mx-auto px-6">

//         <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''} mb-16`}>
//           <h2 className="section-title mb-6">Our Menu</h2>
//           <div className="yellow-divider" />
//         </div>

//         <div className="space-y-20">
//           {menuCategories.map((category) => (
//             <CategorySection key={category.id} category={category} />
//           ))}
//         </div>

//       </div>

//     </section>
//   );
// };

// export default MenuSection;


// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// /* SIDE ORDER IMAGES */

// import cheeseFries from '@/assets/cheese-fries.jpg';
// import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
// import friedOkra from '@/assets/fried-okra.jpg';
// import onionRings from '@/assets/onion-rings.jpg';

// /* FRIED RICE IMAGES */

// import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';
// import eggFriedRice from '@/assets/egg-fried-rice.jpg';
// import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
// import beefFriedRice from '@/assets/beef-fried-rice.jpg';
// import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
// import mixFriedRice from '@/assets/crispero-mix-fried-rice.jpg';

// /* SANDWICH IMAGES */

// import grilledChickenSandwich from '@/assets/grilled-chicken-sandwich.jpg';
// import friedChickenSandwich from '@/assets/fried-chicken-sandwich.jpg';

// /* PHILLY IMAGES */

// import phillyOnly from '@/assets/philly-only.jpg';
// import phillyCombo from '@/assets/philly-combo.jpg';
// import phillyWingsCombo from '@/assets/philly-wings-combo.jpg';

// /* CHICKEN TENDER IMAGES */

// import tender2 from '@/assets/chicken-tender-2pcs.jpg';
// import tender4 from '@/assets/chicken-tender-4pcs.jpg';
// import tender6 from '@/assets/chicken-tender-6pcs.jpg';


// /* CATEGORY DEFAULT IMAGES */

// const categoryImages: Record<string, string> = {
//   wings: wingsImg,
//   'all-combo': friesImg,
//   'fried-fish': fishImg,
//   'fried-rice': bowlImg,
//   burger: burgerImg,
//   sandwich: burgerImg,
//   philly: burgerImg,
//   'chicken-tender': wingsImg,
//   'side-orders': friesImg,
//   'crispero-bowls': bowlImg,
//   'jumbo-shrimp': shrimpImg,
//   'butterfly-shrimp': shrimpImg,
//   drink: friesImg,
//   cake: wingsImg,
// };


// /* ITEM IMAGES */

// const itemImages: Record<string, string> = {

//   'Cheese Fries': cheeseFries,
//   'Bacon Cheese Fries': baconCheeseFries,
//   'Fried Okra': friedOkra,
//   'Onion Ring': onionRings,

//   'Veggie Fried Rice': veggieFriedRice,
//   'Chicken Fried Rice': chickenFriedRice,
//   'Beef Fried Rice': beefFriedRice,
//   'Shrimp Fried Rice': shrimpFriedRice,

//   'Veggie': veggieFriedRice,
//   'Egg': eggFriedRice,
//   'Chicken': chickenFriedRice,
//   'Beef': beefFriedRice,
//   'Shrimp': shrimpFriedRice,
//   'Crispero Special Mix Meat': mixFriedRice,

//   'Grilled Chicken': grilledChickenSandwich,
//   'Fried Chicken': friedChickenSandwich,

//   'Philly Only': phillyOnly,
//   'Philly Combo': phillyCombo,
//   'Philly Combo + 5 Wings': phillyWingsCombo,
// };


// /* BOWL IMAGES */

// const baseImages: Record<string,string> = {
//   Rice: bowlImg,
//   Salad: bowlImg,
//   Fries: friesImg,
//   'Walking Taco': friesImg,
// };

// const proteinImages: Record<string,string> = {
//   'Original Chicken': wingsImg,
//   'Fried Chicken': wingsImg,
//   Beef: burgerImg,
// };


// /* FLAVOR SECTION */

// const FlavorSection = ({category}:{category:MenuCategory})=>{
// const {ref,isVisible}=useScrollAnimation()

// return(
// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>
// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-8">
// {category.name}
// </h3>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
// {category.items.map(item=>(
// <div key={item.name}
// className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm hover:border-primary hover:shadow-md transition-all">
// {item.name}
// {item.price && <span className="text-primary ml-1">{item.price}</span>}
// </div>
// ))}
// </div>
// </div>
// )
// }


// /* BOWLS SECTION */

// const BowlsSection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
// {category.name}
// </h3>

// <p className="text-center text-muted-foreground text-sm uppercase mb-10">
// Build Your Bowl
// </p>


// {/* STEP 1 BASE */}

// <div className="mb-12">
// <p className="font-heading font-bold text-primary text-sm uppercase mb-4 text-center">
// Step 1 — Choose Your Base
// </p>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">

// {category.extras?.map(base=>(
// <div key={base} className="menu-card group">

// <div className="aspect-square overflow-hidden">
// <img
// src={baseImages[base] || bowlImg}
// alt={base}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />
// </div>

// <div className="p-3 text-center">
// <h4 className="font-heading font-bold text-xs md:text-sm">{base}</h4>
// </div>

// </div>
// ))}

// </div>
// </div>


// {/* STEP 2 PROTEIN */}

// <div className="mb-12">

// <p className="font-heading font-bold text-primary text-sm uppercase mb-1 text-center">
// Step 2 — Choose Protein
// </p>

// <p className="text-center text-muted-foreground text-xs mb-4">
// (+$3.49)
// </p>

// <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">

// {category.items.map(item=>(
// <div key={item.name} className="menu-card group">

// <div className="aspect-square overflow-hidden">
// <img
// src={proteinImages[item.name] || bowlImg}
// alt={item.name}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />
// </div>

// <div className="p-3 text-center">
// <h4 className="font-heading font-bold text-xs md:text-sm">{item.name}</h4>
// <p className="text-primary font-bold text-xs md:text-sm">{item.price}</p>
// </div>

// </div>
// ))}

// </div>
// </div>


// {/* STEP 3 TOPPINGS */}

// <div className="mb-12">

// <p className="font-heading font-bold text-primary text-sm uppercase mb-4 text-center">
// Step 3 — Toppings
// </p>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">

// {['Cucumber','Tomato','Onion','Carrot','Cheese','Lettuce','Cilantro'].map(topping=>(
// <div key={topping}
// className="border border-primary/30 rounded-full px-4 py-2 text-center text-xs md:text-sm">
// {topping}
// </div>
// ))}

// </div>

// </div>


// {/* STEP 4 SAUCE */}

// <div>

// <p className="font-heading font-bold text-primary text-sm uppercase mb-4 text-center">
// Step 4 — Sauce
// </p>

// <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">

// {['White Cream','Spicy Cream'].map(sauce=>(
// <div key={sauce}
// className="border border-primary/30 rounded-lg p-4 text-center text-sm font-bold">
// {sauce}
// </div>
// ))}

// </div>

// </div>

// </div>

// )
// }


// /* CATEGORY SECTION */

// const CategorySection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()
// const image=categoryImages[category.id]

// if(category.type==='flavors')return <FlavorSection category={category}/>
// if(category.type==='bowls')return <BowlsSection category={category}/>

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
// {category.name}
// </h3>

// {category.note &&(
// <p className="text-center text-muted-foreground text-xs uppercase mb-6">
// {category.note}
// </p>
// )}

// <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

// {category.items.map(item=>(
// <div key={item.name} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={
// category.id==='chicken-tender'
// ? item.name==='2 pcs'
// ? tender2
// : item.name==='4 pcs'
// ? tender4
// : item.name==='6 pcs'
// ? tender6
// : image
// : itemImages[item.name] || image
// }
// alt={item.name}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 md:p-4">

// <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
// {item.name}
// </h4>

// <p className="text-primary font-bold text-xs md:text-sm">
// {item.price}
// </p>

// </div>

// </div>
// ))}

// </div>

// </div>

// )
// }


// /* MENU SECTION */

// const MenuSection=()=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <section id="menu" className="py-24 md:py-32 bg-background">

// <div className="container mx-auto px-6">

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''} mb-16`}>
// <h2 className="section-title mb-6">Our Menu</h2>
// <div className="yellow-divider"/>
// </div>

// <div className="space-y-20">
// {menuCategories.map(category=>(
// <CategorySection key={category.id} category={category}/>
// ))}
// </div>

// </div>

// </section>

// )
// }

// export default MenuSection


// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// /* NEW BOWL IMAGES */

// import walkingTacoImg from '@/assets/walking-taco.jpg';
// import originalChickenImg from '@/assets/original-chicken.jpg';
// import friedChickenImg from '@/assets/fried-chicken.jpg';
// import beefImg from '@/assets/beef.jpg';

// /* SIDE ORDER IMAGES */

// import cheeseFries from '@/assets/cheese-fries.jpg';
// import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
// import friedOkra from '@/assets/fried-okra.jpg';
// import onionRings from '@/assets/onion-rings.jpg';

// /* FRIED RICE IMAGES */

// import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';
// import eggFriedRice from '@/assets/egg-fried-rice.jpg';
// import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
// import beefFriedRice from '@/assets/beef-fried-rice.jpg';
// import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
// import mixFriedRice from '@/assets/crispero-mix-fried-rice.jpg';

// /* SANDWICH IMAGES */

// import grilledChickenSandwich from '@/assets/grilled-chicken-sandwich.jpg';
// import friedChickenSandwich from '@/assets/fried-chicken-sandwich.jpg';

// /* PHILLY IMAGES */

// import phillyOnly from '@/assets/philly-only.jpg';
// import phillyCombo from '@/assets/philly-combo.jpg';
// import phillyWingsCombo from '@/assets/philly-wings-combo.jpg';

// /* CHICKEN TENDER IMAGES */

// import tender2 from '@/assets/chicken-tender-2pcs.jpg';
// import tender4 from '@/assets/chicken-tender-4pcs.jpg';
// import tender6 from '@/assets/chicken-tender-6pcs.jpg';


// /* CATEGORY DEFAULT IMAGES */

// const categoryImages: Record<string,string> = {
//   wings:wingsImg,
//   'all-combo':friesImg,
//   'fried-fish':fishImg,
//   'fried-rice':bowlImg,
//   burger:burgerImg,
//   sandwich:burgerImg,
//   philly:burgerImg,
//   'chicken-tender':wingsImg,
//   'side-orders':friesImg,
//   'crispero-bowls':bowlImg,
//   'jumbo-shrimp':shrimpImg,
//   'butterfly-shrimp':shrimpImg,
//   drink:friesImg,
//   cake:wingsImg,
// };


// /* ITEM IMAGES */

// const itemImages:Record<string,string>={

// 'Cheese Fries':cheeseFries,
// 'Bacon Cheese Fries':baconCheeseFries,
// 'Fried Okra':friedOkra,
// 'Onion Ring':onionRings,

// 'Veggie Fried Rice':veggieFriedRice,
// 'Chicken Fried Rice':chickenFriedRice,
// 'Beef Fried Rice':beefFriedRice,
// 'Shrimp Fried Rice':shrimpFriedRice,

// 'Veggie':veggieFriedRice,
// 'Egg':eggFriedRice,
// 'Chicken':chickenFriedRice,
// 'Beef':beefFriedRice,
// 'Shrimp':shrimpFriedRice,
// 'Crispero Special Mix Meat':mixFriedRice,

// 'Grilled Chicken':grilledChickenSandwich,
// 'Fried Chicken':friedChickenSandwich,

// 'Philly Only':phillyOnly,
// 'Philly Combo':phillyCombo,
// 'Philly Combo + 5 Wings':phillyWingsCombo,
// };


// /* BASE IMAGES */

// const baseImages:Record<string,string>={
// Rice:bowlImg,
// Salad:bowlImg,
// Fries:friesImg,
// 'Walking Taco':walkingTacoImg,
// };


// /* PROTEIN IMAGES */

// const proteinImages:Record<string,string>={
// 'Original Chicken':originalChickenImg,
// 'Fried Chicken':friedChickenImg,
// Beef:beefImg,
// };


// /* FLAVOR SECTION */

// const FlavorSection=({category}:{category:MenuCategory})=>{

// const{ref,isVisible}=useScrollAnimation()

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-8">
// {category.name}
// </h3>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">

// {category.items.map(item=>(

// <div key={item.name}
// className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm">

// {item.name}
// {item.price && <span className="text-primary ml-1">{item.price}</span>}

// </div>

// ))}

// </div>

// </div>

// )

// }


// /* BOWLS SECTION */

// const BowlsSection=({category}:{category:MenuCategory})=>{

// const{ref,isVisible}=useScrollAnimation()

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
// {category.name}
// </h3>

// <p className="text-center text-muted-foreground text-sm uppercase mb-10">
// Build Your Bowl
// </p>


// {/* STEP 1 BASE */}

// <div className="mb-12">

// <p className="font-heading font-bold text-primary text-sm uppercase mb-4 text-center">
// Step 1 — Choose Your Base
// </p>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">

// {category.extras?.map(base=>(

// <div key={base} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={baseImages[base] || bowlImg}
// alt={base}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 text-center">
// <h4 className="font-heading font-bold text-xs md:text-sm">{base}</h4>
// </div>

// </div>

// ))}

// </div>

// </div>


// {/* STEP 2 PROTEIN */}

// <div className="mb-12">

// <p className="font-heading font-bold text-primary text-sm uppercase mb-1 text-center">
// Step 2 — Choose Protein
// </p>

// <p className="text-center text-muted-foreground text-xs mb-4">
// (+$3.49)
// </p>

// <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">

// {category.items.map(item=>(

// <div key={item.name} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={proteinImages[item.name] || bowlImg}
// alt={item.name}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 text-center">

// <h4 className="font-heading font-bold text-xs md:text-sm">{item.name}</h4>

// <p className="text-primary font-bold text-xs md:text-sm">{item.price}</p>

// </div>

// </div>

// ))}

// </div>

// </div>

// </div>

// )

// }


// /* CATEGORY SECTION */

// const CategorySection=({category}:{category:MenuCategory})=>{

// const{ref,isVisible}=useScrollAnimation()
// const image=categoryImages[category.id]

// if(category.type==='flavors')return <FlavorSection category={category}/>
// if(category.type==='bowls')return <BowlsSection category={category}/>

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
// {category.name}
// </h3>

// <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

// {category.items.map(item=>(

// <div key={item.name} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={
// category.id==='chicken-tender'
// ? item.name==='2 pcs'
// ? tender2
// : item.name==='4 pcs'
// ? tender4
// : item.name==='6 pcs'
// ? tender6
// : image
// : itemImages[item.name] || image
// }
// alt={item.name}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 md:p-4">

// <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
// {item.name}
// </h4>

// <p className="text-primary font-bold text-xs md:text-sm">
// {item.price}
// </p>

// </div>

// </div>

// ))}

// </div>

// </div>

// )

// }


// /* MENU SECTION */

// const MenuSection=()=>{

// const{ref,isVisible}=useScrollAnimation()

// return(

// <section id="menu" className="py-24 md:py-32 bg-background">

// <div className="container mx-auto px-6">

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''} mb-16`}>
// <h2 className="section-title mb-6">Our Menu</h2>
// <div className="yellow-divider"/>
// </div>

// <div className="space-y-20">

// {menuCategories.map(category=>(

// <CategorySection key={category.id} category={category}/>

// ))}

// </div>

// </div>

// </section>

// )

// }

// export default MenuSection


// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// /* BOWL IMAGES */

// import walkingTacoImg from '@/assets/walking-taco.jpg';
// import originalChickenImg from '@/assets/original-chicken.jpg';
// import friedChickenImg from '@/assets/fried-chicken.jpg';
// import beefImg from '@/assets/beef.jpg';

// /* SIDE ORDERS */

// import cheeseFries from '@/assets/cheese-fries.jpg';
// import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
// import friedOkra from '@/assets/fried-okra.jpg';
// import onionRings from '@/assets/onion-rings.jpg';

// /* FRIED RICE */

// import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';
// import eggFriedRice from '@/assets/egg-fried-rice.jpg';
// import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
// import beefFriedRice from '@/assets/beef-fried-rice.jpg';
// import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
// import mixFriedRice from '@/assets/crispero-mix-fried-rice.jpg';

// /* SANDWICH */

// import grilledChickenSandwich from '@/assets/grilled-chicken-sandwich.jpg';
// import friedChickenSandwich from '@/assets/fried-chicken-sandwich.jpg';

// /* PHILLY */

// import phillyOnly from '@/assets/philly-only.jpg';
// import phillyCombo from '@/assets/philly-combo.jpg';
// import phillyWingsCombo from '@/assets/philly-wings-combo.jpg';

// /* CHICKEN TENDERS */

// import tender2 from '@/assets/chicken-tender-2pcs.jpg';
// import tender4 from '@/assets/chicken-tender-4pcs.jpg';
// import tender6 from '@/assets/chicken-tender-6pcs.jpg';

// /* BUTTERFLY SHRIMP */

// import butterflyShrimp from '@/assets/butterfly-shrimp.jpg';

// /* DRINKS */

// import fruitPunch from '@/assets/fruit-punch.jpg';
// import peachDrink from '@/assets/peach-drink.jpg';
// import lemonade from '@/assets/lemonade.jpg';

// /* CAKE */

// import cheesecake from '@/assets/cheesecake.jpg';



// /* CATEGORY DEFAULT IMAGES */

// const categoryImages: Record<string,string> = {
//   wings:wingsImg,
//   'all-combo':friesImg,
//   'fried-fish':fishImg,
//   'fried-rice':bowlImg,
//   burger:burgerImg,
//   sandwich:burgerImg,
//   philly:burgerImg,
//   'chicken-tender':wingsImg,
//   'side-orders':friesImg,
//   'crispero-bowls':bowlImg,
//   'jumbo-shrimp':shrimpImg,
//   'butterfly-shrimp':shrimpImg,
//   drink:friesImg,
//   cake:wingsImg,
// };



// /* ITEM IMAGES */

// const itemImages:Record<string,string>={

// 'Cheese Fries':cheeseFries,
// 'Bacon Cheese Fries':baconCheeseFries,
// 'Fried Okra':friedOkra,
// 'Onion Ring':onionRings,

// 'Veggie Fried Rice':veggieFriedRice,
// 'Chicken Fried Rice':chickenFriedRice,
// 'Beef Fried Rice':beefFriedRice,
// 'Shrimp Fried Rice':shrimpFriedRice,

// 'Veggie':veggieFriedRice,
// 'Egg':eggFriedRice,
// 'Chicken':chickenFriedRice,
// 'Beef':beefFriedRice,
// 'Shrimp':shrimpFriedRice,
// 'Crispero Special Mix Meat':mixFriedRice,

// 'Grilled Chicken':grilledChickenSandwich,
// 'Fried Chicken':friedChickenSandwich,

// 'Philly Only':phillyOnly,
// 'Philly Combo':phillyCombo,
// 'Philly Combo + 5 Wings':phillyWingsCombo,

// /* BUTTERFLY SHRIMP */

// 'Butterfly Shrimp 6 pcs':butterflyShrimp,
// 'Butterfly Shrimp 10 pcs':butterflyShrimp,

// /* DRINKS */

// 'Fruit Punch':fruitPunch,
// 'Peach':peachDrink,
// 'Lemonade':lemonade,

// /* CAKE */

// 'Homemade Cake':cheesecake,

// };



// /* BASE IMAGES */

// const baseImages:Record<string,string>={
// Rice:bowlImg,
// Salad:bowlImg,
// Fries:friesImg,
// 'Walking Taco':walkingTacoImg,
// };



// /* PROTEIN IMAGES */

// const proteinImages:Record<string,string>={
// 'Original Chicken':originalChickenImg,
// 'Fried Chicken':friedChickenImg,
// Beef:beefImg,
// };



// /* FLAVOR SECTION */

// const FlavorSection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-8">
// {category.name}
// </h3>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">

// {category.items.map(item=>(

// <div key={item.name}
// className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm">

// {item.name}
// {item.price && <span className="text-primary ml-1">{item.price}</span>}

// </div>

// ))}

// </div>

// </div>

// )

// }



// /* BOWLS SECTION */

// const BowlsSection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
// {category.name}
// </h3>

// <p className="text-center text-muted-foreground text-sm uppercase mb-10">
// Build Your Bowl
// </p>


// {/* STEP 1 BASE */}

// <div className="mb-12">

// <p className="font-heading font-bold text-primary text-sm uppercase mb-4 text-center">
// Step 1 — Choose Your Base
// </p>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">

// {category.extras?.map(base=>(

// <div key={base} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={baseImages[base] || bowlImg}
// alt={base}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 text-center">
// <h4 className="font-heading font-bold text-xs md:text-sm">{base}</h4>
// </div>

// </div>

// ))}

// </div>

// </div>


// {/* STEP 2 PROTEIN */}

// <div className="mb-12">

// <p className="font-heading font-bold text-primary text-sm uppercase mb-1 text-center">
// Step 2 — Choose Protein
// </p>

// <p className="text-center text-muted-foreground text-xs mb-4">
// (+$3.49)
// </p>

// <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">

// {category.items.map(item=>(

// <div key={item.name} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={proteinImages[item.name] || bowlImg}
// alt={item.name}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 text-center">

// <h4 className="font-heading font-bold text-xs md:text-sm">{item.name}</h4>

// <p className="text-primary font-bold text-xs md:text-sm">{item.price}</p>

// </div>

// </div>

// ))}

// </div>

// </div>

// </div>

// )

// }



// /* CATEGORY SECTION */

// const CategorySection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()
// const image=categoryImages[category.id]

// if(category.type==='flavors')return <FlavorSection category={category}/>
// if(category.type==='bowls')return <BowlsSection category={category}/>

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
// {category.name}
// </h3>

// <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

// {category.items.map(item=>(

// <div key={item.name} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={
// category.id==='chicken-tender'
// ? item.name==='2 pcs'
// ? tender2
// : item.name==='4 pcs'
// ? tender4
// : item.name==='6 pcs'
// ? tender6
// : image
// : itemImages[item.name] || image
// }
// alt={item.name}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 md:p-4">

// <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
// {item.name}
// </h4>

// <p className="text-primary font-bold text-xs md:text-sm">
// {item.price}
// </p>

// </div>

// </div>

// ))}

// </div>

// </div>

// )

// }



// /* MENU SECTION */

// const MenuSection=()=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <section id="menu" className="py-24 md:py-32 bg-background">

// <div className="container mx-auto px-6">

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''} mb-16`}>
// <h2 className="section-title mb-6">Our Menu</h2>
// <div className="yellow-divider"/>
// </div>

// <div className="space-y-20">

// {menuCategories.map(category=>(

// <CategorySection key={category.id} category={category}/>

// ))}

// </div>

// </div>

// </section>

// )

// }

// export default MenuSection

// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// /* BOWL IMAGES */

// import walkingTacoImg from '@/assets/walking-taco.jpg';
// import originalChickenImg from '@/assets/original-chicken.jpg';
// import friedChickenImg from '@/assets/fried-chicken.jpg';
// import beefImg from '@/assets/beef.jpg';

// /* SIDE ORDERS */

// import cheeseFries from '@/assets/cheese-fries.jpg';
// import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
// import friedOkra from '@/assets/fried-okra.jpg';
// import onionRings from '@/assets/onion-rings.jpg';

// /* FRIED RICE */

// import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';
// import eggFriedRice from '@/assets/egg-fried-rice.jpg';
// import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
// import beefFriedRice from '@/assets/beef-fried-rice.jpg';
// import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
// import mixFriedRice from '@/assets/crispero-mix-fried-rice.jpg';

// /* SANDWICH */

// import grilledChickenSandwich from '@/assets/grilled-chicken-sandwich.jpg';
// import friedChickenSandwich from '@/assets/fried-chicken-sandwich.jpg';

// /* PHILLY */

// import phillyOnly from '@/assets/philly-only.jpg';
// import phillyCombo from '@/assets/philly-combo.jpg';
// import phillyWingsCombo from '@/assets/philly-wings-combo.jpg';

// /* CHICKEN TENDERS */

// import tender2 from '@/assets/chicken-tender-2pcs.jpg';
// import tender4 from '@/assets/chicken-tender-4pcs.jpg';
// import tender6 from '@/assets/chicken-tender-6pcs.jpg';

// /* DRINKS */

// import fruitPunch from '@/assets/fruit-punch.jpg';
// import peachDrink from '@/assets/peach-drink.jpg';
// import lemonade from '@/assets/lemonade.jpg';

// /* CAKE */

// import cheesecake from '@/assets/cheesecake.jpg';



// /* CATEGORY DEFAULT IMAGES */

// const categoryImages: Record<string,string> = {
//   wings:wingsImg,
//   'all-combo':friesImg,
//   'fried-fish':fishImg,
//   'fried-rice':bowlImg,
//   burger:burgerImg,
//   sandwich:burgerImg,
//   philly:burgerImg,
//   'chicken-tender':wingsImg,
//   'side-orders':friesImg,
//   'crispero-bowls':bowlImg,
//   'jumbo-shrimp':shrimpImg,
//   'butterfly-shrimp':shrimpImg,
//   drink:friesImg,
//   cake:wingsImg,
// };



// /* ITEM IMAGES */

// const itemImages:Record<string,string>={

// 'Cheese Fries':cheeseFries,
// 'Bacon Cheese Fries':baconCheeseFries,
// 'Fried Okra':friedOkra,
// 'Onion Ring':onionRings,

// 'Veggie Fried Rice':veggieFriedRice,
// 'Chicken Fried Rice':chickenFriedRice,
// 'Beef Fried Rice':beefFriedRice,
// 'Shrimp Fried Rice':shrimpFriedRice,

// 'Veggie':veggieFriedRice,
// 'Egg':eggFriedRice,
// 'Chicken':chickenFriedRice,
// 'Beef':beefFriedRice,
// 'Shrimp':shrimpFriedRice,
// 'Crispero Special Mix Meat':mixFriedRice,

// 'Grilled Chicken':grilledChickenSandwich,
// 'Fried Chicken':friedChickenSandwich,

// 'Philly Only':phillyOnly,
// 'Philly Combo':phillyCombo,
// 'Philly Combo + 5 Wings':phillyWingsCombo,

// /* DRINKS */

// 'Fruit Punch':fruitPunch,
// 'Peach':peachDrink,
// 'Lemonade':lemonade,

// /* CAKE */

// 'Homemade Cake':cheesecake,

// };



// /* BASE IMAGES */

// const baseImages:Record<string,string>={
// Rice:bowlImg,
// Salad:bowlImg,
// Fries:friesImg,
// 'Walking Taco':walkingTacoImg,
// };



// /* PROTEIN IMAGES */

// const proteinImages:Record<string,string>={
// 'Original Chicken':originalChickenImg,
// 'Fried Chicken':friedChickenImg,
// Beef:beefImg,
// };



// /* FLAVOR SECTION */

// const FlavorSection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-8">
// {category.name}
// </h3>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">

// {category.items.map(item=>(

// <div key={item.name}
// className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm">

// {item.name}
// {item.price && <span className="text-primary ml-1">{item.price}</span>}

// </div>

// ))}

// </div>

// </div>

// )

// }



// /* BOWLS SECTION */

// const BowlsSection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
// {category.name}
// </h3>

// <p className="text-center text-muted-foreground text-sm uppercase mb-10">
// Build Your Bowl
// </p>


// {/* STEP 1 BASE */}

// <div className="mb-12">

// <p className="font-heading font-bold text-primary text-sm uppercase mb-4 text-center">
// Step 1 — Choose Your Base
// </p>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">

// {category.extras?.map(base=>(

// <div key={base} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={baseImages[base] || bowlImg}
// alt={base}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 text-center">
// <h4 className="font-heading font-bold text-xs md:text-sm">{base}</h4>
// </div>

// </div>

// ))}

// </div>

// </div>


// {/* STEP 2 PROTEIN */}

// <div className="mb-12">

// <p className="font-heading font-bold text-primary text-sm uppercase mb-1 text-center">
// Step 2 — Choose Protein
// </p>

// <p className="text-center text-muted-foreground text-xs mb-4">
// (+$3.49)
// </p>

// <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">

// {category.items.map(item=>(

// <div key={item.name} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={proteinImages[item.name] || bowlImg}
// alt={item.name}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 text-center">

// <h4 className="font-heading font-bold text-xs md:text-sm">{item.name}</h4>

// <p className="text-primary font-bold text-xs md:text-sm">{item.price}</p>

// </div>

// </div>

// ))}

// </div>

// </div>

// </div>

// )

// }



// /* CATEGORY SECTION */

// const CategorySection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()
// const image=categoryImages[category.id]

// if(category.type==='flavors')return <FlavorSection category={category}/>
// if(category.type==='bowls')return <BowlsSection category={category}/>

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
// {category.name}
// </h3>

// <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

// {category.items.map(item=>(

// <div key={item.name} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={
// category.id==='chicken-tender'
// ? item.name==='2 pcs'
// ? tender2
// : item.name==='4 pcs'
// ? tender4
// : item.name==='6 pcs'
// ? tender6
// : image
// : itemImages[item.name] || image
// }
// alt={item.name}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 md:p-4">

// <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
// {item.name}
// </h4>

// <p className="text-primary font-bold text-xs md:text-sm">
// {item.price}
// </p>

// </div>

// </div>

// ))}

// </div>

// </div>

// )

// }



// /* MENU SECTION */

// const MenuSection=()=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <section id="menu" className="py-24 md:py-32 bg-background">

// <div className="container mx-auto px-6">

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''} mb-16`}>
// <h2 className="section-title mb-6">Our Menu</h2>
// <div className="yellow-divider"/>
// </div>

// <div className="space-y-20">

// {menuCategories.map(category=>(

// <CategorySection key={category.id} category={category}/>

// ))}

// </div>

// </div>

// </section>

// )

// }

// export default MenuSection


// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// /* BOWL IMAGES */

// import walkingTacoImg from '@/assets/walking-taco.jpg';
// import originalChickenImg from '@/assets/original-chicken.jpg';
// import friedChickenImg from '@/assets/fried-chicken.jpg';
// import beefImg from '@/assets/beef.jpg';

// /* SIDE ORDERS */

// import cheeseFries from '@/assets/cheese-fries.jpg';
// import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
// import friedOkra from '@/assets/fried-okra.jpg';
// import onionRings from '@/assets/onion-rings.jpg';

// /* FRIED RICE */

// import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';
// import eggFriedRice from '@/assets/egg-fried-rice.jpg';
// import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
// import beefFriedRice from '@/assets/beef-fried-rice.jpg';
// import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
// import mixFriedRice from '@/assets/crispero-mix-fried-rice.jpg';

// /* SANDWICH */

// import grilledChickenSandwich from '@/assets/grilled-chicken-sandwich.jpg';
// import friedChickenSandwich from '@/assets/fried-chicken-sandwich.jpg';

// /* PHILLY */

// import phillyOnly from '@/assets/philly-only.jpg';
// import phillyCombo from '@/assets/philly-combo.jpg';
// import phillyWingsCombo from '@/assets/philly-wings-combo.jpg';

// /* CHICKEN TENDERS */

// import tender2 from '@/assets/chicken-tender-2pcs.jpg';
// import tender4 from '@/assets/chicken-tender-4pcs.jpg';
// import tender6 from '@/assets/chicken-tender-6pcs.jpg';

// /* BUTTERFLY SHRIMP */

// import butterflyShrimp6 from '@/assets/butterfly-shrimp-6pcs.jpg';
// import butterflyShrimp10 from '@/assets/butterfly-shrimp-10pcs.jpg';

// /* DRINKS */

// import fruitPunch from '@/assets/fruit-punch.jpg';
// import peachDrink from '@/assets/peach-drink.jpg';
// import lemonade from '@/assets/lemonade.jpg';

// /* CAKE */

// import cheesecake from '@/assets/cheesecake.jpg';



// /* CATEGORY DEFAULT IMAGES */

// const categoryImages: Record<string,string> = {
//   wings:wingsImg,
//   'all-combo':friesImg,
//   'fried-fish':fishImg,
//   'fried-rice':bowlImg,
//   burger:burgerImg,
//   sandwich:burgerImg,
//   philly:burgerImg,
//   'chicken-tender':wingsImg,
//   'side-orders':friesImg,
//   'crispero-bowls':bowlImg,
//   'jumbo-shrimp':shrimpImg,
//   'butterfly-shrimp':shrimpImg,
//   drink:friesImg,
//   cake:wingsImg,
// };



// /* ITEM IMAGES */

// const itemImages:Record<string,string>={

// 'Cheese Fries':cheeseFries,
// 'Bacon Cheese Fries':baconCheeseFries,
// 'Fried Okra':friedOkra,
// 'Onion Ring':onionRings,

// 'Veggie Fried Rice':veggieFriedRice,
// 'Chicken Fried Rice':chickenFriedRice,
// 'Beef Fried Rice':beefFriedRice,
// 'Shrimp Fried Rice':shrimpFriedRice,

// 'Veggie':veggieFriedRice,
// 'Egg':eggFriedRice,
// 'Chicken':chickenFriedRice,
// 'Beef':beefFriedRice,
// 'Shrimp':shrimpFriedRice,
// 'Crispero Special Mix Meat':mixFriedRice,

// 'Grilled Chicken':grilledChickenSandwich,
// 'Fried Chicken':friedChickenSandwich,

// 'Philly Only':phillyOnly,
// 'Philly Combo':phillyCombo,
// 'Philly Combo + 5 Wings':phillyWingsCombo,

// /* BUTTERFLY SHRIMP */

// 'Butterfly Shrimp 6 pcs':butterflyShrimp6,
// 'Butterfly Shrimp 10 pcs':butterflyShrimp10,

// /* DRINKS */

// 'Fruit Punch':fruitPunch,
// 'Peach':peachDrink,
// 'Lemonade':lemonade,

// /* CAKE */

// 'Homemade Cake':cheesecake,

// };



// /* BASE IMAGES */

// const baseImages:Record<string,string>={
// Rice:bowlImg,
// Salad:bowlImg,
// Fries:friesImg,
// 'Walking Taco':walkingTacoImg,
// };



// /* PROTEIN IMAGES */

// const proteinImages:Record<string,string>={
// 'Original Chicken':originalChickenImg,
// 'Fried Chicken':friedChickenImg,
// Beef:beefImg,
// };



// /* FLAVOR SECTION */

// const FlavorSection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-8">
// {category.name}
// </h3>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">

// {category.items.map(item=>(

// <div key={item.name}
// className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm">

// {item.name}
// {item.price && <span className="text-primary ml-1">{item.price}</span>}

// </div>

// ))}

// </div>

// </div>

// )

// }



// /* BOWLS SECTION */

// const BowlsSection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
// {category.name}
// </h3>

// <p className="text-center text-muted-foreground text-sm uppercase mb-10">
// Build Your Bowl
// </p>


// {/* STEP 1 BASE */}

// <div className="mb-12">

// <p className="font-heading font-bold text-primary text-sm uppercase mb-4 text-center">
// Step 1 — Choose Your Base
// </p>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">

// {category.extras?.map(base=>(

// <div key={base} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={baseImages[base] || bowlImg}
// alt={base}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 text-center">
// <h4 className="font-heading font-bold text-xs md:text-sm">{base}</h4>
// </div>

// </div>

// ))}

// </div>

// </div>


// {/* STEP 2 PROTEIN */}

// <div className="mb-12">

// <p className="font-heading font-bold text-primary text-sm uppercase mb-1 text-center">
// Step 2 — Choose Protein
// </p>

// <p className="text-center text-muted-foreground text-xs mb-4">
// (+$3.49)
// </p>

// <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">

// {category.items.map(item=>(

// <div key={item.name} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={proteinImages[item.name] || bowlImg}
// alt={item.name}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 text-center">

// <h4 className="font-heading font-bold text-xs md:text-sm">{item.name}</h4>

// <p className="text-primary font-bold text-xs md:text-sm">{item.price}</p>

// </div>

// </div>

// ))}

// </div>

// </div>

// </div>

// )

// }



// /* CATEGORY SECTION */

// const CategorySection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()
// const image=categoryImages[category.id]

// if(category.type==='flavors')return <FlavorSection category={category}/>
// if(category.type==='bowls')return <BowlsSection category={category}/>

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
// {category.name}
// </h3>

// <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

// {category.items.map(item=>(

// <div key={item.name} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={
// category.id==='chicken-tender'
// ? item.name==='2 pcs'
// ? tender2
// : item.name==='4 pcs'
// ? tender4
// : item.name==='6 pcs'
// ? tender6
// : image
// : itemImages[item.name] || image
// }
// alt={item.name}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 md:p-4">

// <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
// {item.name}
// </h4>

// <p className="text-primary font-bold text-xs md:text-sm">
// {item.price}
// </p>

// </div>

// </div>

// ))}

// </div>

// </div>

// )

// }



// /* MENU SECTION */

// const MenuSection=()=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <section id="menu" className="py-24 md:py-32 bg-background">

// <div className="container mx-auto px-6">

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''} mb-16`}>
// <h2 className="section-title mb-6">Our Menu</h2>
// <div className="yellow-divider"/>
// </div>

// <div className="space-y-20">

// {menuCategories.map(category=>(

// <CategorySection key={category.id} category={category}/>

// ))}

// </div>

// </div>

// </section>

// )

// }

// export default MenuSection


// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { menuCategories, type MenuCategory } from '@/data/menuData';
// import cornNuggets from '@/assets/corn-nuggets.jpg';

// import wingsImg from '@/assets/wings.jpg';
// import burgerImg from '@/assets/burger.jpg';
// import fishImg from '@/assets/fish.jpg';
// import shrimpImg from '@/assets/shrimp.jpg';
// import bowlImg from '@/assets/bowl.jpg';
// import friesImg from '@/assets/fries.jpg';

// /* BOWL IMAGES */

// import walkingTacoImg from '@/assets/walking-taco.jpg';
// import originalChickenImg from '@/assets/original-chicken.jpg';
// import friedChickenImg from '@/assets/fried-chicken.jpg';
// import beefImg from '@/assets/beef.jpg';

// /* SIDE ORDERS */

// import cheeseFries from '@/assets/cheese-fries.jpg';
// import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
// import friedOkra from '@/assets/fried-okra.jpg';
// import onionRings from '@/assets/onion-rings.jpg';

// /* FRIED RICE */

// import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';
// import eggFriedRice from '@/assets/egg-fried-rice.jpg';
// import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
// import beefFriedRice from '@/assets/beef-fried-rice.jpg';
// import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
// import mixFriedRice from '@/assets/crispero-mix-fried-rice.jpg';

// /* SANDWICH */

// import grilledChickenSandwich from '@/assets/grilled-chicken-sandwich.jpg';
// import friedChickenSandwich from '@/assets/fried-chicken-sandwich.jpg';

// /* PHILLY */

// import phillyOnly from '@/assets/philly-only.jpg';
// import phillyCombo from '@/assets/philly-combo.jpg';
// import phillyWingsCombo from '@/assets/philly-wings-combo.jpg';

// /* CHICKEN TENDERS */

// import tender2 from '@/assets/chicken-tender-2pcs.jpg';
// import tender4 from '@/assets/chicken-tender-4pcs.jpg';
// import tender6 from '@/assets/chicken-tender-6pcs.jpg';

// /* BUTTERFLY SHRIMP */

// import butterflyShrimp6 from '@/assets/butterfly-shrimp-6pcs.jpg';
// import butterflyShrimp10 from '@/assets/butterfly-shrimp-10pcs.jpg';

// /* DRINKS */

// import fruitPunch from '@/assets/fruit-punch.jpg';
// import peachDrink from '@/assets/peach-drink.jpg';
// import lemonade from '@/assets/lemonade.jpg';

// /* CAKE */

// import cheesecake from '@/assets/cheesecake.jpg';



// /* CATEGORY DEFAULT IMAGES */

// const categoryImages: Record<string,string> = {
//   wings:wingsImg,
//   'all-combo':friesImg,
//   'fried-fish':fishImg,
//   'fried-rice':bowlImg,
//   burger:burgerImg,
//   sandwich:burgerImg,
//   philly:burgerImg,
//   'chicken-tender':wingsImg,
//   'side-orders':friesImg,
//   'crispero-bowls':bowlImg,
//   'jumbo-shrimp':shrimpImg,
//   'butterfly-shrimp':shrimpImg,
//   drink:friesImg,
//   cake:wingsImg,
// };



// // /* ITEM IMAGES */

// // const itemImages:Record<string,string>={

// // 'Cheese Fries':cheeseFries,
// // 'Bacon Cheese Fries':baconCheeseFries,
// // 'Fried Okra':friedOkra,
// // 'Onion Ring':onionRings,
// // 'Corn Nuggets (x10)': cornNuggets, 

// // 'Veggie Fried Rice':veggieFriedRice,
// // 'Egg Fried Rice': eggFriedRice, 
// // 'Chicken Fried Rice':chickenFriedRice,
// // 'Beef Fried Rice':beefFriedRice,
// // 'Shrimp Fried Rice':shrimpFriedRice,

// // 'Veggie':veggieFriedRice,
// // 'Egg':eggFriedRice,
// // 'Chicken':chickenFriedRice,
// // 'Beef':beefFriedRice,
// // 'Shrimp':shrimpFriedRice,
// // 'Crispero Special Mix Meat':mixFriedRice,

// // 'Grilled Chicken':grilledChickenSandwich,
// // 'Fried Chicken':friedChickenSandwich,

// // 'Philly Only':phillyOnly,
// // 'Philly Combo':phillyCombo,
// // 'Philly Combo + 5 Wings':phillyWingsCombo,

// // /* BUTTERFLY SHRIMP */

// // 'Butterfly Shrimp 6 pcs':butterflyShrimp6,
// // 'Butterfly Shrimp 10 pcs':butterflyShrimp10,

// // /* DRINKS */

// // 'Fruit Punch':fruitPunch,
// // 'Peach':peachDrink,
// // 'Lemonade':lemonade,

// // /* CAKE */

// // 'Homemade Cake':cheesecake,

// // };

// const itemImages: Record<string, string> = {

//   /* SIDE ORDERS */

//   'Cheese Fries': cheeseFries,
//   'Bacon Cheese Fries': baconCheeseFries,
//   'Fried Okra': friedOkra,
//   'Onion Ring': onionRings,

//   'Corn Nugget (x10) SM | LR': cornNuggets,
//   'Corn Nuggets (x10)': cornNuggets,


//   /* FRIED RICE (ALL COMBO) */

//   'Veggie Fried Rice': veggieFriedRice,
//   'Egg Fried Rice': eggFriedRice,
//   'Chicken Fried Rice': chickenFriedRice,
//   'Beef Fried Rice': beefFriedRice,
//   'Shrimp Fried Rice': shrimpFriedRice,


//   /* FRIED RICE MAIN MENU */

//   'Veggie SM | LR': veggieFriedRice,
//   'Egg SM | LR': eggFriedRice,
//   'Chicken  SM | LR ': chickenFriedRice,
//   'Beef  SM | LR': beefFriedRice,
//   'Shrimp  SM | LR': shrimpFriedRice,
//   'Crispero Special Mix Meat  SM | LR': mixFriedRice,


//   /* SHORT NAMES */

//   'Veggie': veggieFriedRice,
//   'Egg': eggFriedRice,
//   'Chicken': chickenFriedRice,
//   'Beef': beefFriedRice,
//   'Shrimp': shrimpFriedRice,
//   'Crispero Special Mix Meat': mixFriedRice,


//   /* SANDWICH */

//   'Grilled Chicken | Grilled Chicken + Combo': grilledChickenSandwich,
//   'Fried Chicken | Fried Chicken + Combo': friedChickenSandwich,


//   /* PHILLY */

//   'ChickenPhilly | ChickenPhilly + Combo | ChickenPhilly + 5 wings': phillyOnly,
//   'SteakPhilly | steakPhilly + Combo | steakPhilly + 5 wings': phillyCombo,
//   'ShrimpPhilly | shrimpPhilly + Combo | shrimpPhilly + 5 wings': phillyWingsCombo,


//   /* BUTTERFLY SHRIMP */

//   '6 pcs | 6 pcs + Combo': butterflyShrimp6,
//   '10 pcs | 10 pcs + Combo': butterflyShrimp10,


//   /* DRINKS */

//   'Fruit Punch  SM | LR': fruitPunch,
//   'Peach SM | LR': peachDrink,
//   'Lemonade SM | LR': lemonade,


//   /* CAKE */

//   'Homemade Cake': cheesecake,
// };

// /* BASE IMAGES */

// const baseImages:Record<string,string>={
// Rice:bowlImg,
// Salad:bowlImg,
// Fries:friesImg,
// 'Walking Taco':walkingTacoImg,
// };



// /* PROTEIN IMAGES */

// const proteinImages:Record<string,string>={
// 'Original Chicken':originalChickenImg,
// 'Fried Chicken':friedChickenImg,
// Beef:beefImg,
// };



// /* FLAVOR SECTION */

// const FlavorSection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-8">
// {category.name}
// </h3>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">

// {category.items.map(item=>(

// <div key={item.name}
// className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm">

// {item.name}
// {item.price && <span className="text-primary ml-1">{item.price}</span>}

// </div>

// ))}

// </div>

// </div>

// )

// }



// /* BOWLS SECTION */

// const BowlsSection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
// {category.name}
// </h3>

// <p className="text-center text-muted-foreground text-sm uppercase mb-10">
// Build Your Bowl
// </p>

// <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">

// {category.items.map(item=>(

// <div key={item.name} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={proteinImages[item.name] || bowlImg}
// alt={item.name}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 text-center">

// <h4 className="font-heading font-bold text-xs md:text-sm">{item.name}</h4>

// <p className="text-primary font-bold text-xs md:text-sm">{item.price}</p>

// </div>

// </div>

// ))}

// </div>

// </div>

// )

// }



// /* CATEGORY SECTION */

// const CategorySection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()
// const image=categoryImages[category.id]

// if(category.type==='flavors')return <FlavorSection category={category}/>
// if(category.type==='bowls')return <BowlsSection category={category}/>

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
// {category.name}
// </h3>

// <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

// {category.items.map(item=>(

// <div key={item.name} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={
// category.id === 'chicken-tender'
//   ? item.name === '2 pcs'
//     ? tender2
//     : item.name === '4 pcs'
//     ? tender4
//     : item.name === '6 pcs'
//     ? tender6
//     : image
//   : category.id === 'butterfly-shrimp'
//   ? item.name === '6 pcs'
//     ? butterflyShrimp6
//     : item.name === '10 pcs'
//     ? butterflyShrimp10
//     : image
//   : itemImages[item.name] || image
// }
// alt={item.name}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 md:p-4">

// <h4 className="font-heading font-bold text-xs md:text-sm mb-1">
// {item.name}
// </h4>

// <p className="text-primary font-bold text-xs md:text-sm">
// {item.price}
// </p>

// </div>

// </div>

// ))}

// </div>

// </div>

// )

// }



// /* MENU SECTION */

// const MenuSection=()=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <section id="menu" className="py-24 md:py-32 bg-background">

// <div className="container mx-auto px-6">

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''} mb-16`}>
// <h2 className="section-title mb-6">Our Menu</h2>
// <div className="yellow-divider"/>
// </div>

// <div className="space-y-20">

// {menuCategories.map(category=>(

// <CategorySection key={category.id} category={category}/>

// ))}

// </div>

// </div>

// </section>

// )

// }

// export default MenuSection


import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { menuCategories, type MenuCategory } from '@/data/menuData';
import cornNuggets from '@/assets/corn-nuggets.jpg';

import wingsImg from '@/assets/wings.jpg';
import burgerImg from '@/assets/burger.jpg';
import fishImg from '@/assets/fish.jpg';
import shrimpImg from '@/assets/shrimp.jpg';
import bowlImg from '@/assets/bowl.jpg';
import friesImg from '@/assets/fries.jpg';

/* BOWL IMAGES */

import walkingTacoImg from '@/assets/walking-taco.jpg';
import originalChickenImg from '@/assets/original-chicken.jpg';
import friedChickenImg from '@/assets/fried-chicken.jpg';
import beefImg from '@/assets/beef.jpg';

/* SIDE ORDERS */

import cheeseFries from '@/assets/cheese-fries.jpg';
import baconCheeseFries from '@/assets/bacon-cheese-fries.jpg';
import friedOkra from '@/assets/fried-okra.jpg';
import onionRings from '@/assets/onion-rings.jpg';

/* FRIED RICE */

import veggieFriedRice from '@/assets/veggie-fried-rice.jpg';
import eggFriedRice from '@/assets/egg-fried-rice.jpg';
import chickenFriedRice from '@/assets/chicken-fried-rice.jpg';
import beefFriedRice from '@/assets/beef-fried-rice.jpg';
import shrimpFriedRice from '@/assets/shrimp-fried-rice.jpg';
import mixFriedRice from '@/assets/crispero-mix-fried-rice.jpg';

/* SANDWICH */

import grilledChickenSandwich from '@/assets/grilled-chicken-sandwich.jpg';
import friedChickenSandwich from '@/assets/fried-chicken-sandwich.jpg';

/* PHILLY */

import phillyOnly from '@/assets/philly-only.jpg';
import phillyCombo from '@/assets/philly-combo.jpg';
import phillyWingsCombo from '@/assets/philly-wings-combo.jpg';

/* CHICKEN TENDERS */

import tender2 from '@/assets/chicken-tender-2pcs.jpg';
import tender4 from '@/assets/chicken-tender-4pcs.jpg';
import tender6 from '@/assets/chicken-tender-6pcs.jpg';

/* BUTTERFLY SHRIMP */

import butterflyShrimp6 from '@/assets/butterfly-shrimp-6pcs.jpg';
import butterflyShrimp10 from '@/assets/butterfly-shrimp-10pcs.jpg';

/* DRINKS */

import fruitPunch from '@/assets/fruit-punch.jpg';
import peachDrink from '@/assets/peach-drink.jpg';
import lemonade from '@/assets/lemonade.jpg';

/* CAKE */

import cheesecake from '@/assets/cheesecake.jpg';



/* CATEGORY DEFAULT IMAGES */

const categoryImages: Record<string,string> = {
  wings:wingsImg,
  'all-combo':friesImg,
  'fried-fish':fishImg,
  'fried-rice':bowlImg,
  burger:burgerImg,
  sandwich:burgerImg,
  philly:burgerImg,
  'chicken-tender':wingsImg,
  'side-orders':friesImg,
  'crispero-bowls':bowlImg,
  'jumbo-shrimp':shrimpImg,
  'butterfly-shrimp':shrimpImg,
  drink:friesImg,
  cake:wingsImg,
};



/* ITEM IMAGES */

const itemImages: Record<string, string> = {

  /* SIDE ORDERS */

  'French Fries SM | LR': friesImg,
  'Cheese Fries SM | LR': cheeseFries,
  'Bacon Cheese Fries SM | LR': baconCheeseFries,
  'Fried Okra SM | LR': friedOkra,
  'Onion Ring SM | LR': onionRings,
  // 'Corn Nugget (x10) SM | LR': cornNuggets,
  'Corn Nugget (x10) SM | LR': cornNuggets,
'Corn Nuggets (x10)': cornNuggets,
  'Cheese Fries': cheeseFries,
  'Bacon Cheese Fries': baconCheeseFries,
  'Fried Okra': friedOkra,
  'Onion Ring': onionRings,

  /* FRIED RICE */

  'Veggie Fried Rice': veggieFriedRice,
  'Egg Fried Rice': eggFriedRice,
  'Chicken Fried Rice': chickenFriedRice,
  'Beef Fried Rice': beefFriedRice,
  'Shrimp Fried Rice': shrimpFriedRice,

  'Veggie SM | LR': veggieFriedRice,
  'Egg SM | LR': eggFriedRice,
  'Chicken  SM | LR ': chickenFriedRice,
  'Beef  SM | LR': beefFriedRice,
  'Shrimp  SM | LR': shrimpFriedRice,
  'Crispero Special Mix Meat  SM | LR': mixFriedRice,

  'Veggie': veggieFriedRice,
  'Egg': eggFriedRice,
  'Chicken': chickenFriedRice,
  'Beef': beefFriedRice,
  'Shrimp': shrimpFriedRice,

  /* SANDWICH */

  'Grilled Chicken | Grilled Chicken + Combo': grilledChickenSandwich,
  'Fried Chicken | Fried Chicken + Combo': friedChickenSandwich,

  /* PHILLY */

  'ChickenPhilly | ChickenPhilly + Combo | ChickenPhilly + 5 wings': phillyOnly,
  'SteakPhilly | steakPhilly + Combo | steakPhilly + 5 wings': phillyCombo,
  'ShrimpPhilly | shrimpPhilly + Combo | shrimpPhilly + 5 wings': phillyWingsCombo,

  /* BUTTERFLY SHRIMP */

  '6 pcs | 6 pcs + Combo': butterflyShrimp6,
  '10 pcs | 10 pcs + Combo': butterflyShrimp10,

  /* DRINKS */

  'Fruit Punch  SM | LR': fruitPunch,
  'Peach SM | LR': peachDrink,
  'Lemonade SM | LR': lemonade,

  /* CAKE */

  'Homemade Cake': cheesecake,
};



/* BASE IMAGES */

const baseImages:Record<string,string>={
Rice:bowlImg,
Salad:bowlImg,
Fries:friesImg,
'Walking Taco':walkingTacoImg,
};



/* PROTEIN IMAGES */

const proteinImages:Record<string,string>={
'Chicken':originalChickenImg,
'Fried Chicken':friedChickenImg,
'Beef':beefImg,
'Shrimp':shrimpImg,
};



/* FLAVOR SECTION */

const FlavorSection=({category}:{category:MenuCategory})=>{

const {ref,isVisible}=useScrollAnimation()

return(

<div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

<h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-8">
{category.name}
</h3>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">

{category.items.map(item=>(

<div key={item.name}
className="border border-primary/30 rounded-full px-4 py-3 text-center text-xs md:text-sm">

{item.name}
{item.price && <span className="text-primary ml-1">{item.price}</span>}

</div>

))}

</div>

</div>

)

}



/* BOWLS SECTION */

// const BowlsSection=({category}:{category:MenuCategory})=>{

// const {ref,isVisible}=useScrollAnimation()

// return(

// <div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

// <h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
// {category.name}
// </h3>

// <p className="text-center text-muted-foreground text-sm uppercase mb-10">
// Build Your Bowl
// </p>

// <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">

// {category.items.map(item=>(

// <div key={item.name} className="menu-card group">

// <div className="aspect-square overflow-hidden">

// <img
// src={proteinImages[item.name] || bowlImg}
// alt={item.name}
// className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// />

// </div>

// <div className="p-3 text-center">

// <h4 className="font-heading font-bold text-xs md:text-sm">{item.name}</h4>

// <p className="text-primary font-bold text-xs md:text-sm">{item.price}</p>

// </div>

// </div>

// ))}

// </div>

// </div>

// )

// }

/* BOWLS SECTION */

const BowlsSection = ({ category }: { category: MenuCategory }) => {

const { ref, isVisible } = useScrollAnimation()

return(

<div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

<h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-4">
{category.name}
</h3>

<p className="text-center text-muted-foreground text-sm uppercase mb-12">
Build Your Bowl
</p>


{/* STEP 1 BASE */}

<h4 className="text-center font-bold mb-4">Step 1 — Choose Your Base</h4>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">

{category.extras?.map(base => (

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

<p className="text-center text-sm mb-6 text-muted-foreground"> Extra Meat
(+$3.49)
</p>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">

{category.items.map(item => (

<div key={item.name} className="menu-card group">

<div className="aspect-square overflow-hidden">

<img
src={proteinImages[item.name] || bowlImg}
alt={item.name}
className="w-full h-full object-cover group-hover:scale-110 transition"
/>

</div>

<div className="p-3 text-center">

<h4 className="font-heading font-bold text-sm">
{item.name}
</h4>

<p className="text-primary font-bold text-sm">
{item.price}
</p>

</div>

</div>

))}

</div>


{/* STEP 3 TOPPINGS */}

<h4 className="text-center font-bold mb-4">Step 3 — Toppings</h4>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">

{[
'Cucumber',
'Tomato',
'Onion',
'Carrot',
'Cheese',
'Lettuce',
'Cilantro',
'Smoky Corn',
].map(top => (

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
'Ranch',
'Honey Mustard',
'BBQ',
'Hot Sauce',
'Teriyaki',
'Spicy Mayo'
].map(sauce => (

<div
key={sauce}
className="border border-primary/30 rounded-full px-4 py-3 text-center text-sm"
>
{sauce}
</div>

))}

</div>

</div>

)

}

/* CATEGORY SECTION */

const CategorySection=({category}:{category:MenuCategory})=>{

const {ref,isVisible}=useScrollAnimation()
const image=categoryImages[category.id]

if(category.type==='flavors')return <FlavorSection category={category}/>
if(category.type==='bowls')return <BowlsSection category={category}/>

return(

<div ref={ref} className={`scroll-animate ${isVisible?'visible':''}`}>

<h3 className="text-primary font-heading font-extrabold text-xl md:text-2xl text-center mb-3">
{category.name}
</h3>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

{category.items.map(item=>(

<div key={item.name} className="menu-card group">

<div className="aspect-square overflow-hidden">

<img
src={
category.id==='chicken-tender'
? item.name.includes('2 pcs')
? tender2
: item.name.includes('4 pcs')
? tender4
: item.name.includes('6 pcs')
? tender6
: image

: category.id==='butterfly-shrimp'
? item.name.includes('6 pcs')
? butterflyShrimp6
: item.name.includes('10 pcs')
? butterflyShrimp10
: image

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

)

}



/* MENU SECTION */

const MenuSection=()=>{

const {ref,isVisible}=useScrollAnimation()

return(

<section id="menu" className="py-24 md:py-32 bg-background">

<div className="container mx-auto px-6">

<div ref={ref} className={`scroll-animate ${isVisible?'visible':''} mb-16`}>
<h2 className="section-title mb-6">Our Menu</h2>
<div className="yellow-divider"/>
</div>

<div className="space-y-20">

{menuCategories.map(category=>(

<CategorySection key={category.id} category={category}/>

))}

</div>

</div>

</section>

)

}

export default MenuSection