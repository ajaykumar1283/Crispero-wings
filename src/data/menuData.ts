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
      { name: '6 pcs (1 flavor)', price: '$6.49 | $9.49' },
      { name: '10 pcs (1 flavor)', price: '$10.49 | $12.99' },
      { name: '15 pcs (2 flavors)', price: '$15.99 | $17.99' },
      { name: '20 pcs (2 flavors)', price: '$19.99 | $21.99' },
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
      { name: 'Mix Flavors', price: '+$2.22' },
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
  {
    id: 'all-combo',
    name: 'All Combo',
    type: 'cards',
    items: [
      { name: 'Cheese Fries', price: '+$1.99' },
      { name: 'Bacon Cheese Fries', price: '+$3.99' },
      { name: 'Fried Okra', price: '+$1.99' },
      { name: 'Onion Ring', price: '+$1.99' },
      { name: 'Veggie Fried Rice', price: '+$1.99' },
      { name: 'Chicken Fried Rice', price: '+$3.99' },
      { name: 'Beef Fried Rice', price: '+$3.99' },
      { name: 'Shrimp Fried Rice', price: '+$3.39' },
    ],
  },
  {
    id: 'fried-fish',
    name: 'Fried Fish',
    type: 'cards',
    items: [
      { name: '1 pc', price: '$3.99 | $6.99 | $10.99' },
      { name: '2 pcs', price: '$6.99 | $9.99 | $13.99' },
      { name: '3 pcs', price: '$9.99 | $12.99 | $15.99' },
    ],
  },
  {
    id: 'fried-rice',
    name: 'Fried Rice',
    type: 'cards',
    items: [
      { name: 'Veggie', price: '$3.99 | $5.99' },
      { name: 'Egg', price: '$4.99 | $6.99' },
      { name: 'Chicken', price: '$5.99 | $7.99' },
      { name: 'Beef', price: '$5.99 | $8.99' },
      { name: 'Shrimp', price: '$6.99 | $9.99' },
      { name: 'Crispero Special Mix Meat', price: '$7.99 | $10.99' },
    ],
  },
  {
    id: 'burger',
    name: 'Burger',
    type: 'cards',
    items: [
      { name: 'Cheese Burger Only', price: '$6.99' },
      { name: 'Cheese Burger Combo', price: '$9.49' },
      { name: 'Cheese Burger + 5 Wings', price: '$13.99' },
      { name: 'Bacon Burger Only', price: '$8.49' },
      { name: 'Bacon Burger Combo', price: '$10.99' },
      { name: 'Bacon Burger + 5 Wings', price: '$14.99' },
    ],
  },
  {
    id: 'sandwich',
    name: 'Sandwich',
    type: 'cards',
    note: 'Only | Combo',
    items: [
      { name: 'Grilled Chicken', price: '$6.99 | $9.49' },
      { name: 'Fried Chicken', price: '$6.99 | $9.49' },
    ],
  },
  {
    id: 'philly',
    name: 'Philly',
    type: 'cards',
    items: [
      { name: 'Philly Only', price: '$5.99' },
      { name: 'Philly Combo', price: '$9.49' },
      { name: 'Philly Combo + 5 Wings', price: '$13.99' },
    ],
  },
  {
    id: 'chicken-tender',
    name: 'Chicken Tender',
    type: 'cards',
    note: 'Only | Combo',
    items: [
      { name: '2 pcs', price: '$3.99 | $6.99' },
      { name: '4 pcs', price: '$6.99 | $8.99' },
      { name: '6 pcs', price: '$8.99 | $10.99' },
    ],
  },
  {
    id: 'side-orders',
    name: 'Side Orders',
    type: 'cards',
    note: 'Small | Large',
    items: [
      { name: 'French Fries', price: '$2.49 | $4.49' },
      { name: 'Cheese Fries', price: '$3.49 | $5.49' },
      { name: 'Bacon Cheese Fries', price: '$4.49 | $6.99' },
      { name: 'Fried Okra', price: '$3.49 | $5.49' },
      { name: 'Onion Ring', price: '$3.49 | $5.49' },
      { name: 'Corn Nugget (x10)', price: '$3.29' },
    ],
  },
  {
    id: 'crispero-bowls',
    name: 'Crispero Bowls',
    type: 'bowls',
    items: [
      { name: 'Original Chicken', price: '$9.99' },
      { name: 'Fried Chicken', price: '$9.99' },
      { name: 'Beef', price: '$11.99' },
    ],
    extras: [
      'Rice', 'Salad', 'Fries', 'Walking Taco',
    ],
  },
  {
    id: 'jumbo-shrimp',
    name: 'Jumbo Shrimp',
    type: 'cards',
    note: 'Only | Combo',
    items: [
      { name: '5 pcs', price: '$4.49 | $7.99' },
      { name: '10 pcs', price: '$8.49 | $11.49' },
      { name: '15 pcs', price: '$10.49 | $13.99' },
    ],
  },
  {
    id: 'butterfly-shrimp',
    name: 'Butterfly Shrimp',
    type: 'cards',
    note: 'Only | Combo',
    items: [
      { name: '6 pcs', price: '$6.49 | $8.99' },
      { name: '10 pcs', price: '$9.49 | $11.49' },
    ],
  },
  {
    id: 'drink',
    name: 'Drink',
    type: 'cards',
    note: 'Small $1.49 | Large $2.29',
    items: [
      { name: 'Fruit Punch', price: '$1.49 | $2.29' },
      { name: 'Peach', price: '$1.49 | $2.29' },
      { name: 'Lemonade', price: '$1.49 | $2.29' },
    ],
  },
  {
    id: 'cake',
    name: 'Cake',
    type: 'cards',
    items: [
      { name: 'Homemade Cake', price: '$3.99' },
    ],
  },
];
