export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  type: 'cards' | 'flavors' | 'bowls';
  note?: string;
  items: MenuItem[];
  extras?: string[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'wings',
    name: 'Wings (Regular or Boneless)',
    type: 'cards',
    note: 'Regular | Boneless',
    items: [
      { name: '6 pcs (1 flavor) | Combo', price: '$6.99 | $9.99' },
      { name: '10 pcs (1 flavor) | Combo', price: '$10.99 | $13.49' },
      { name: '15 pcs (2 flavors) | Combo', price: '$15.99 | $17.99' },
      { name: '20 pcs (2 flavors) | Combo', price: '$19.99 | $21.99' },
      { name: '30 pcs', price: '$29.99' },
      { name: '50 pcs', price: '$49.99' },
      { name: '75 pcs', price: '$70.99' },
      { name: '100 pcs', price: '$94.99' },
    ],
  },
  {
    id: 'flavors',
    name: 'Flavors',
    type: 'flavors',
    items: [
      { name: 'Plain', price: '' },
      { name: 'Hot', price: '' },
      { name: 'Medium', price: '' },
      { name: 'Mild', price: '' },
      { name: 'Lemon Pepper Wet', price: '' },
      { name: 'Lemon Pepper Dry', price: '' },
      { name: 'Ranch Seasoning Dry', price: '' },
      { name: 'Garlic Pepper Dry', price: '' },
      { name: 'Cajun Seasoning Dry', price: '' },
      { name: 'Mix Flavors', price: '+$0.99' },
      { name: 'Spicy Honey Gold', price: '' },
      { name: 'Spicy BBQ', price: '' },
      { name: 'Honey', price: '' },
      { name: 'Honey BBQ', price: '' },
      { name: 'Honey Mustard', price: '' },
      { name: 'Honey Gold', price: '' },
      { name: 'Teriyaki', price: '' },
      { name: 'Sweet Chilli', price: '' },
    ],
  },
  // {
  //   id: 'all-combo',
  //   name: 'All Combo',
  //   type: 'cards',
  //   items: [
  //     { name: 'Cheese Fries', price: '+$1.99' },
  //     { name: 'Bacon Cheese Fries', price: '+$3.99' },
  //     { name: 'Fried Okra', price: '+$1.99' },
  //     { name: 'Onion Ring', price: '+$1.99' },
  //     { name: 'Veggie Fried Rice', price: '+$1.99' },
  //     { name: 'Chicken Fried Rice', price: '+$3.99' },
  //     { name: 'Beef Fried Rice', price: '+$3.99' },
  //     { name: 'Shrimp Fried Rice', price: '+$3.39' },
  //   ],
  // },

  {
    id: 'all-combo',
    name: 'All Combo',
    type: 'cards',
    items: [
      { name: 'Cheese Fries', price: '+$1.99' },
      { name: 'Cajun Ranch Fries', price: '+$2.99' },
      { name: 'Bacon Cheese Fries', price: '+$3.99' },
      { name: 'Fried Okra', price: '+$1.99' },
      { name: 'Onion Ring', price: '+$1.99' },
      { name: 'Veggie Fried Rice', price: '+$2.45' },
      { name: 'Egg Fried Rice', price: '+$2.99' },
      { name: 'Chicken Fried Rice', price: '+$3.99' },
      { name: 'Beef Fried Rice', price: '+$4.99' },
      { name: 'Shrimp Fried Rice', price: '+$4.99' },
      { name: 'Corn Nugget (X10)', price: '+$2.99' }
    ],
  },
  {
    id: 'fried-fish',
    name: 'Fried Fish',
    type: 'cards',
    items: [
      { name: '1 pc | 1 pc Combo | 1 pc + 5 wings', price: '$3.99 | $6.99 | $10.99' },
      { name: '2 pcs | 2 pc Combo | 2 pc + 5 wings', price: '$6.99 | $9.99 | $13.99' },
      { name: '3 pcs | 3 pc Combo | 3 pc + 5 wings', price: '$9.99 | $12.99 | $16.99' },
    ],
  },
  {
    id: 'fried-rice',
    name: 'Fried Rice',
    type: 'cards',
    items: [
      { name: 'Veggie SM | LG', price: '$3.99 | $6.99' },
      { name: 'Egg SM | LG', price: '$4.99 | $7.99' },
      { name: 'Chicken SM | LG', price: '$5.99 | $8.99' },
      { name: 'Beef SM | LG', price: '$5.99 | $8.99' },
      { name: 'Shrimp SM | LG', price: '$6.99 | $9.99' },
      { name: 'Crispero Special Mix Meat SM | LG', price: '$9.99 | $12.99' },
    ],
  },
  {
    id: 'burger',
    name: 'Burger',
    type: 'cards',
    items: [
      { name: 'Cheese Burger Only', price: '$7.99' },
      { name: 'Cheese Burger Combo', price: '$10.49' },
      { name: 'Cheese Burger + 5 Wings', price: '$15.99' },
      { name: 'Bacon Burger Only', price: '$8.99' },
      { name: 'Bacon Burger Combo', price: '$11.49' },
      { name: 'Bacon Burger + 5 Wings', price: '$16.99' },
    ],
  },
  {
    id: 'sandwich',
    name: 'Sandwich',
    type: 'cards',
    note: 'Only | Combo',
    items: [
      { name: 'Grilled Chicken | Grilled Chicken + Combo', price: '$7.99 | $10.49' },
      { name: 'Fried Chicken | Fried Chicken + Combo', price: '$7.99 | $10.49' },
    ],
  },
  {
    id: 'philly',
    name: 'Philly',
    type: 'cards',
    items: [
      { name: 'Chicken Philly | Chicken Philly + Combo | Chicken Philly + 5 wings', price: '$7.99 | $10.49 | $15.99' },
      { name: 'Steak Philly | Steak Philly + Combo | Steak Philly + 5 wings', price: '$7.99 | $10.49 | $15.99' },
      { name: 'Shrimp Philly | Shrimp Philly + Combo | Shrimp Philly + 5 wings', price: '$7.99 | $10.49 | $15.99' },

    ],
  },
  {
    id: 'chicken-tender',
    name: 'Chicken Tender',
    type: 'cards',
    note: 'Only | Combo',
    items: [
      { name: '2 pcs | 2 pcs + Combo', price: '$4.99 | $7.99' },
      { name: '4 pcs | 4 pcs + Combo', price: '$7.99 | $10.49' },
      { name: '6 pcs | 6 pcs + Combo', price: '$9.99 | $11.99' },
    ],
  },
  {
    id: 'side-orders',
    name: 'Side Orders',
    type: 'cards',
    note: 'Small | Large',
    items: [
      { name: 'French Fries SM | LM', price: '$2.49 | $4.49' },
      { name: 'Cheese Fries SM | LM', price: '$3.49 | $5.49' },
      { name: 'Cajun Ranch Fries SM | LM', price: '$3.99 | $5.99' },
      { name: 'Bacon Cheese Fries SM | LM', price: '$4.49 | $6.99' },
      { name: 'Fried Okra SM | LM', price: '$3.49 | $5.49' },
      { name: 'Onion Ring SM | LM', price: '$3.49 | $5.49' },
      { name: 'Corn Nugget (X10)', price: '$3.99' },
      { name: 'Mozzarella Sticks [X6]', price: '$4.99' },
      { name: 'Jalapeno Poppers [X6]', price: '$4.49' },
    ],
  },
  {
    id: 'crispero-bowls',
    name: 'Crispero Bowls',
    type: 'bowls',
    note: 'Extra Meat +$3.49',
    items: [
      { name: 'Chicken', price: '$10.99' },
      { name: 'Fried Chicken', price: '$10.99' },
      { name: 'Beef', price: '$12.99' },
      { name: 'Shrimp', price: '$12.99' },
    ],
    extras: [
      'Rice', 'Salad', 'Fries', 'Walking Taco',
      'Cucumber', 'Tomato', 'Onion', 'Carrot',
      'Cheese', 'Lettuce', 'Cilantro', 'Roasted Corn',
      'White Cream', 'Spicy Cream'
    ],
  },
  {
    id: 'jumbo-shrimp',
    name: 'Jumbo Shrimp',
    type: 'cards',
    note: 'Only | Combo',
    items: [
      { name: '5 pcs | 5 Pcs + Combo', price: '$4.99 | $7.99' },
      { name: '10 pcs | 10 pcs + Combo', price: '$8.99 | $11.99' },
      { name: '15 pcs | 15 pcs + Combo', price: '$12.99 | $14.99' },
    ],
  },
  {
    id: 'butterfly-shrimp',
    name: 'Butterfly Shrimp',
    type: 'cards',
    note: 'Only | Combo',
    items: [
      { name: '6 pcs | 6 pcs + Combo', price: '$6.49 | $8.99' },
      { name: '10 pcs | 10 pcs + Combo', price: '$9.49 | $11.99' },
    ],
  },
  {
    id: 'drink',
    name: 'Drink',
    type: 'cards',
    note: 'Small $1.49 | Large $2.49',
    items: [
      { name: 'Fruit Punch SM | LG', price: '$1.49 | $2.49' },
      { name: 'Peach SM | LG', price: '$1.49 | $2.49' },
      { name: 'Lemonade SM | LG', price: '$1.49 | $2.49' },
    ],
  },
  {
    id: 'cake',
    name: 'Cake',
    type: 'cards',
    items: [
      { name: 'New York Style Cheese Cake', price: '$3.99' },
      { name: 'Lemon Cheese Cake', price: '$3.99' },
    ],
  },
];
