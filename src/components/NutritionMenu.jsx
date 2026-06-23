import React, { useState, useEffect, useRef } from 'react';
import { Search, Flame, ShieldCheck, Heart, Info, X, Zap, ShoppingBag, Plus, Minus, Check } from 'lucide-react';
import proteinWhiteBreadPizza from '../assets/protein_white_bread_pizza.png';
import proteinPaneerSandwich3Layer from '../assets/protein_paneer_sandwich_3layer.png';
import wheyProteinShake from '../assets/whey_protein_shake.png';
import combo1 from '../assets/combo_1.png';
import combo2 from '../assets/combo_2.png';
import combo3 from '../assets/combo_3.png';
import combo4 from '../assets/combo_4.png';
import combo5 from '../assets/combo_5.png';
import grilledVegSandwich from '../assets/grilled_veg_sandwich.png';
import grilledCheeseSandwich from '../assets/grilled_cheese_sandwich.jpg';
import onionTomatoCapsicumPizza8Inch from '../assets/onion_tomato_capsicum_pizza_8inch.png';
import periPeriFrenchFries120gm from '../assets/peri_peri_french_fries_120gm.png';
import classicMaggie from '../assets/classic_maggie.png';
import vegetableMaggie from '../assets/vegetable_maggie.jpg';
import cheeseMaggieWithVegetables from '../assets/cheese_maggie_with_vegetables.png';
import threeLayerGrillVegSandwich from '../assets/three_layer_grill_veg_sandwich.png';

const CATEGORY_IMAGES = {
  'High Protein Special': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
  'Combos': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  'Sandwich': 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80',
  'Burger': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
  'Pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
  'Beverages': 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80',
  'French Fries': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80',
  'Maggie': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80'
};

export const SPECIFIC_IMAGES = {
  // Beverages
  1: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80', // Classic Chai
  2: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80', // Hot Coffee
  3: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80', // Cold Coffee 200ml
  4: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80', // Cold Coffee 250ml
  5: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80', // Cold Drink 200ml

  // Sandwiches
  6: grilledVegSandwich, // Grilled Veg Sandwich
  7: threeLayerGrillVegSandwich, // 3 Layer Veg Sandwich
  8: grilledCheeseSandwich, // Grilled Cheese Sandwich

  // Burgers
  9: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80', // Veg Burger
  10: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80', // Single Cheese Burger
  11: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80', // Double Cheese Burger
  12: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=400&q=80', // Paneer Burger

  // French Fries
  13: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80', // Salted Fries 100g
  14: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=400&q=80', // Salted Fries 120g
  15: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=400&q=80', // Peri Peri Fries 100g
  16: periPeriFrenchFries120gm, // Peri Peri French Fries 120g

  // Pizza
  17: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80', // Margherita 6 Inch
  18: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=400&q=80', // Margherita 8 Inch
  19: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=400&q=80', // Sweet Corn 6 Inch
  20: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=400&q=80', // Sweet Corn 8 Inch
  21: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80', // Veggie Pizza 6 Inch
  22: onionTomatoCapsicumPizza8Inch, // Onion Tomato Capsicum Pizza 8 Inch
  23: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80', // Paneer Pizza 6 Inch
  24: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=400&q=80', // Paneer Pizza 8 Inch

  // High Protein Specials
  25: proteinWhiteBreadPizza, // Protein White Bread Pizza
  26: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80', // Protein Brown Bread Pizza
  27: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=400&q=80', // Protein Paneer Sandwich
  28: proteinPaneerSandwich3Layer, // 3 Layer Protein Paneer Sandwich
  29: wheyProteinShake, // Whey Protein Shake

  // Maggie
  30: classicMaggie, // Classic Maggie
  31: vegetableMaggie, // Veggie Maggie
  32: cheeseMaggieWithVegetables, // Cheese Maggie with Vegetables

  // Combos
  33: combo1, // Combo 1
  34: combo2, // Combo 2
  35: combo3, // Combo 3
  36: combo4, // Combo 4
  37: combo5, // Combo 5
};

export const MENU_ITEMS = [
  // BEVERAGES
  {
    id: 1,
    name: 'Classic Chai',
    category: 'Beverages',
    kcal: 80,
    protein: 1.5,
    carbs: 12,
    fat: 2,
    price: 10,
    desc: 'Classic warm and comforting Indian tea brewed with milk and aromatic herbs.',
    ingredients: 'Milk, Tea Leaves, Water, Sugar, Spices',
    isVeg: true
  },
  {
    id: 2,
    name: 'Hot Coffee',
    category: 'Beverages',
    kcal: 90,
    protein: 2,
    carbs: 14,
    fat: 2.5,
    price: 20,
    desc: 'Rich aromatic brewed hot coffee, perfect for pre-workout energy or mid-day focus.',
    ingredients: 'Coffee Beans, Milk, Sugar, Water',
    isVeg: true
  },
  {
    id: 3,
    name: 'Cold Coffee (200ml)',
    category: 'Beverages',
    kcal: 160,
    protein: 4,
    carbs: 22,
    fat: 6,
    price: 49,
    desc: 'Creamy chilled blended cold coffee, providing a refreshing caffeine boost.',
    ingredients: 'Milk, Coffee Blend, Ice, Sweetener',
    isVeg: true
  },
  {
    id: 4,
    name: 'Cold Coffee (250ml)',
    category: 'Beverages',
    kcal: 200,
    protein: 5,
    carbs: 28,
    fat: 7.5,
    price: 59,
    desc: 'Large size creamy chilled blended cold coffee for double energy refreshment.',
    ingredients: 'Milk, Espresso Coffee Blend, Ice, Sweetener',
    isVeg: true
  },
  {
    id: 5,
    name: 'Cold Drink (200ml)',
    category: 'Beverages',
    kcal: 80,
    protein: 0.1,
    carbs: 20,
    fat: 0.1,
    price: 20,
    desc: 'Chilled carbonated beverage options to complement your meal.',
    ingredients: 'Carbonated Water, Sweeteners, Flavoring Agents',
    isVeg: true
  },

  // SANDWICH
  {
    id: 6,
    name: 'Grilled Veg Sandwich',
    category: 'Sandwich',
    kcal: 220,
    protein: 6,
    carbs: 35,
    fat: 6,
    price: 50,
    desc: 'Toasted sandwich stuffed with seasoned organic cucumber slices, tomatoes, onions, and healthy mint dressing.',
    ingredients: 'Whole Wheat Bread, Cucumber, Tomato, Onion, Mint Chutney, Spices',
    isVeg: true
  },
  {
    id: 7,
    name: '3 Layer Grill Veg Sandwich',
    category: 'Sandwich',
    kcal: 320,
    protein: 8,
    carbs: 48,
    fat: 9,
    price: 65,
    desc: 'Triple-decker stacked sandwich filled with layers of garden vegetables, light spices, and grilled to crispy perfection.',
    ingredients: 'Multi-grain Bread, Bell Peppers, Tomatoes, Onions, Low-fat Spread, Herbs',
    isVeg: true
  },
  {
    id: 8,
    name: 'Grilled Cheese Sandwich',
    category: 'Sandwich',
    kcal: 290,
    protein: 11,
    carbs: 32,
    fat: 12,
    price: 65,
    desc: 'Perfectly grilled sandwich oozing with melted mozzarella cheese and seasoned with aromatic oregano and chili flakes.',
    ingredients: 'Whole Wheat Bread, Mozzarella Cheese, Oregano, Red Chili Flakes',
    isVeg: true
  },

  // BURGER
  {
    id: 9,
    name: 'Veg Burger',
    category: 'Burger',
    kcal: 310,
    protein: 7,
    carbs: 45,
    fat: 10,
    price: 50,
    desc: 'Healthy house-crafted vegetable patty served in soft whole-wheat buns with lettuce, tomato, and light dressing.',
    ingredients: 'Whole Wheat Buns, Mixed Veg Patty, Lettuce, Tomato, Eggless Mayo, Spices',
    isVeg: true
  },
  {
    id: 10,
    name: 'Single Cheese Burger',
    category: 'Burger',
    kcal: 360,
    protein: 12,
    carbs: 42,
    fat: 15,
    price: 60,
    desc: 'Savory vegetable patty combined with a slice of rich cheddar cheese, fresh lettuce, and tomatoes.',
    ingredients: 'Whole Wheat Buns, Veg Patty, Cheddar Cheese Slice, Tomato, Green Salad',
    isVeg: true
  },
  {
    id: 11,
    name: 'Double Cheese Burger',
    category: 'Burger',
    kcal: 480,
    protein: 18,
    carbs: 45,
    fat: 22,
    price: 70,
    desc: 'Indulgent burger stacked with double melted cheese slices, loaded vegetable fillings, and light house seasoning.',
    ingredients: 'Whole Wheat Buns, Veg Patty, Double Cheese, Lettuce, Tomatoes, Gherkins',
    isVeg: true
  },
  {
    id: 12,
    name: 'Paneer Burger',
    category: 'Burger',
    kcal: 410,
    protein: 15,
    carbs: 40,
    fat: 19,
    price: 70,
    desc: 'Grilled fresh paneer block slab inside clean buns, paired with dynamic house herbs and crispy salad greens.',
    ingredients: 'Whole Wheat Buns, Fresh Paneer Slab, Mint Sauce, Lettuce, Red Onions',
    isVeg: true
  },

  // FRENCH FRIES
  {
    id: 13,
    name: 'Salted French Fries (100gm)',
    category: 'French Fries',
    kcal: 290,
    protein: 3.5,
    carbs: 38,
    fat: 14,
    price: 60,
    desc: 'Golden crispy potato fries sprinkled with a light pinch of organic sea salt.',
    ingredients: 'Potato Wedges, Vegetable Oil, Sea Salt',
    isVeg: true
  },
  {
    id: 14,
    name: 'Salted French Fries (120gm)',
    category: 'French Fries',
    kcal: 350,
    protein: 4.2,
    carbs: 46,
    fat: 17,
    price: 70,
    desc: 'Large portion of golden crispy potato fries, perfect for sharing.',
    ingredients: 'Potato Wedges, Air-Fried / Flash-Fried Oil, Sea Salt',
    isVeg: true
  },
  {
    id: 15,
    name: 'Peri Peri French Fries (100gm)',
    category: 'French Fries',
    kcal: 300,
    protein: 3.5,
    carbs: 39,
    fat: 14,
    price: 70,
    desc: 'Crispy golden potato fries tossed in a spicy, fiery peri peri rub.',
    ingredients: 'Potatoes, Chili Powder, Garlic Powder, Peri Peri Seasoning',
    isVeg: true
  },
  {
    id: 16,
    name: 'Peri Peri French Fries (120gm)',
    category: 'French Fries',
    kcal: 360,
    protein: 4.2,
    carbs: 47,
    fat: 17,
    price: 80,
    desc: 'Large size fries tossed in zesty, hot peri peri seasoning.',
    ingredients: 'Potatoes, Peri Peri Spices, Herbs, Salt',
    isVeg: true
  },

  // PIZZA
  {
    id: 17,
    name: 'Margherita Pizza (6 Inch)',
    category: 'Pizza',
    kcal: 450,
    protein: 16,
    carbs: 54,
    fat: 18,
    price: 99,
    desc: 'Classic thin crust pizza topped with rich tomato sauce, melted mozzarella, and fresh basil leaves.',
    ingredients: 'Pizza Dough, Tomato Marinara, Mozzarella Cheese, Fresh Basil',
    isVeg: true
  },
  {
    id: 18,
    name: 'Margherita Pizza (8 Inch)',
    category: 'Pizza',
    kcal: 600,
    protein: 22,
    carbs: 72,
    fat: 24,
    price: 120,
    desc: 'Eight-inch classic thin crust pizza loaded with rich tomato marinara and mozzarella.',
    ingredients: 'Pizza Dough, Marinara Sauce, Double Mozzarella, Basil',
    isVeg: true
  },
  {
    id: 19,
    name: 'Sweet Corn Pizza (6 Inch)',
    category: 'Pizza',
    kcal: 480,
    protein: 15,
    carbs: 60,
    fat: 18,
    price: 110,
    desc: 'Cheesy pizza topped with sweet golden corn kernels and light Italian herbs.',
    ingredients: 'Wheat Crust, Sweet Corn, Mozzarella, Oregano Sauce',
    isVeg: true
  },
  {
    id: 20,
    name: 'Sweet Corn Pizza (8 Inch)',
    category: 'Pizza',
    kcal: 640,
    protein: 20,
    carbs: 80,
    fat: 24,
    price: 130,
    desc: 'Large thin-crust cheese pizza loaded with sweet golden corn kernels.',
    ingredients: 'Wheat Crust, Golden Corn, Extra Mozzarella, Herb Oil',
    isVeg: true
  },
  {
    id: 21,
    name: 'Onion Tomato Capsicum Pizza (6 Inch)',
    category: 'Pizza',
    kcal: 490,
    protein: 16,
    carbs: 62,
    fat: 19,
    price: 130,
    desc: 'Healthy vegetable pizza loaded with crunchy red onions, fresh tomatoes, and green capsicums.',
    ingredients: 'Pizza Base, Bell Peppers, Tomatoes, Onions, Tomato Sauce, Mozzarella',
    isVeg: true
  },
  {
    id: 22,
    name: 'Onion Tomato Capsicum Pizza (8 Inch)',
    category: 'Pizza',
    kcal: 650,
    protein: 22,
    carbs: 82,
    fat: 25,
    price: 150,
    desc: 'Eight-inch gourmet vegetable pizza loaded with onions, tomatoes, and bell peppers.',
    ingredients: 'Pizza Crust, Red Onions, Juicy Tomatoes, Capsicum, Extra Cheese',
    isVeg: true
  },
  {
    id: 23,
    name: 'Paneer Pizza (6 Inch)',
    category: 'Pizza',
    kcal: 540,
    protein: 22,
    carbs: 58,
    fat: 24,
    price: 150,
    desc: 'Protein-packed pizza topped with marinated paneer cubes, capsicums, and onions.',
    ingredients: 'Pizza Base, Soft Paneer Cubes, Capsicum, Chili Flakes, Mozzarella',
    isVeg: true
  },
  {
    id: 24,
    name: 'Paneer Pizza (8 Inch)',
    category: 'Pizza',
    kcal: 720,
    protein: 30,
    carbs: 78,
    fat: 32,
    price: 170,
    desc: 'Large thin-crust cheese pizza loaded with rich marinated paneer blocks and vegetables.',
    ingredients: 'Pizza Base, Paneer Blocks, Mixed Bell Peppers, Red Onion, Mozzarella',
    isVeg: true
  },

  // HIGH PROTEIN SPECIAL
  {
    id: 25,
    name: 'Protein White Bread Pizza',
    category: 'High Protein Special',
    kcal: 280,
    protein: 8,
    carbs: 40,
    fat: 8,
    price: 60,
    desc: 'Signature healthy pizza crafted using premium high-protein bread, topped with marinara and cheese.',
    ingredients: 'Protein White Bread, Low-fat Mozzarella, Tomato Paste, Basil',
    isVeg: true
  },
  {
    id: 26,
    name: 'Protein Brown Bread Pizza (2 Pcs)',
    category: 'High Protein Special',
    kcal: 290,
    protein: 10,
    carbs: 38,
    fat: 9,
    price: 90,
    desc: 'Two pieces of nutritious brown bread pizzas, loaded with dietary fiber and low-fat cheese.',
    ingredients: 'Protein Brown Bread, Mozzarella, Corn, Tomato Sauce, Mixed Herbs',
    isVeg: true
  },
  {
    id: 27,
    name: 'Protein Paneer Sandwich',
    category: 'High Protein Special',
    kcal: 320,
    protein: 12,
    carbs: 34,
    fat: 13,
    price: 70,
    desc: 'Dietary sandwich stuffed with grilled fresh low-fat paneer slices and raw spinach.',
    ingredients: 'Protein Bread, Grilled Paneer, Spinach, Green Chilies, Herbs',
    isVeg: true
  },
  {
    id: 28,
    name: '3 Layer Protein Paneer Sandwich',
    category: 'High Protein Special',
    kcal: 450,
    protein: 16,
    carbs: 46,
    fat: 18,
    price: 90,
    desc: 'Triple layer high-protein sandwich stacked with double layers of spiced paneer blocks.',
    ingredients: 'High Protein Loaf, Paneer Block Layers, Bell Peppers, Mint Pesto',
    isVeg: true
  },
  {
    id: 29,
    name: 'Whey Protein Shake',
    category: 'High Protein Special',
    kcal: 210,
    protein: 20,
    carbs: 18,
    fat: 4,
    price: 70,
    desc: 'Premium post-workout shake formulated with clean whey isolate protein and banana blend.',
    ingredients: 'Whey Protein Isolate, Skimmed Milk, Banana, Honey, Traces of Cocoa',
    isVeg: true
  },

  // MAGGIE
  {
    id: 30,
    name: 'Classic Maggie',
    category: 'Maggie',
    kcal: 260,
    protein: 5,
    carbs: 44,
    fat: 8,
    price: 40,
    desc: 'The timeless comfort food noodles prepared with a classic spice blend mix.',
    ingredients: 'Maggie Noodles, Classic Masala Tastemaker, Vegetable Oil',
    isVeg: true
  },
  {
    id: 31,
    name: 'Vegetable Maggie',
    category: 'Maggie',
    kcal: 290,
    protein: 6,
    carbs: 48,
    fat: 9,
    price: 60,
    desc: 'Maggie noodles loaded with nutrient-rich fresh carrots, green peas, and sweet corn.',
    ingredients: 'Maggie Noodles, Masala, Carrots, Peas, Beans, Golden Corn',
    isVeg: true
  },
  {
    id: 32,
    name: 'Cheese Maggie with Vegetables',
    category: 'Maggie',
    kcal: 360,
    protein: 10,
    carbs: 50,
    fat: 14,
    price: 70,
    desc: 'Rich, creamy Maggie noodles cooked with fresh vegetables and finished with a slice of melted cheddar.',
    ingredients: 'Maggie Noodles, Mixed Veggies, Cheddar Cheese, Butter Touch',
    isVeg: true
  },

  // COMBOS
  {
    id: 33,
    name: 'Combo 1 (Veg Sandwich + Coffee + Fries)',
    category: 'Combos',
    kcal: 670,
    protein: 13.5,
    carbs: 95,
    fat: 26,
    price: 158,
    desc: 'Value combo: Grilled Veg Sandwich, Cold Coffee (200ml), and Salted French Fries (100gm). Saved 10%!',
    ingredients: 'Sandwich, Cold Coffee, Salted French Fries',
    isVeg: true
  },
  {
    id: 34,
    name: 'Combo 2 (Veg Burger + Drink + Fries)',
    category: 'Combos',
    kcal: 680,
    protein: 10.6,
    carbs: 103,
    fat: 24,
    price: 171,
    desc: 'Value combo: Veg Burger, Cold Drink (200ml), and Salted French Fries (100gm). Saved 10%!',
    ingredients: 'Veg Burger, Cold Drink, French Fries',
    isVeg: true
  },
  {
    id: 35,
    name: 'Combo 3 (Cheese Sandwich + Coffee + Fries)',
    category: 'Combos',
    kcal: 800,
    protein: 19.2,
    carbs: 100,
    fat: 35,
    price: 179,
    desc: 'Value combo: Grilled Cheese Sandwich, Cold Coffee (200ml), and Salted French Fries (120gm). Saved 10%!',
    ingredients: 'Grilled Cheese Sandwich, Cold Coffee, French Fries',
    isVeg: true
  },
  {
    id: 36,
    name: 'Combo 4 (Margherita Pizza + Cold Drink)',
    category: 'Combos',
    kcal: 530,
    protein: 16.1,
    carbs: 74,
    fat: 18.1,
    price: 260,
    desc: 'Value combo: Margherita Pizza (6 Inch) and Cold Drink (200ml). Saved 10%!',
    ingredients: 'Margherita Pizza, Cold Drink',
    isVeg: true
  },
  {
    id: 37,
    name: 'Combo 5 (Paneer Burger + Fries + Coffee)',
    category: 'Combos',
    kcal: 930,
    protein: 24.2,
    carbs: 115,
    fat: 42.5,
    price: 251,
    desc: 'Value combo: Paneer Burger, Peri Peri Fries (120gm), and Cold Coffee (200ml). Saved 10%!',
    ingredients: 'Paneer Burger, Peri Peri Fries, Cold Coffee',
    isVeg: true
  }
];

const SECTIONS = [
  'High Protein Special',
  'Combos',
  'Sandwich',
  'Burger',
  'Pizza',
  'Beverages',
  'French Fries',
  'Maggie'
];

const QUICK_ACCESS_ITEMS = [
  { label: 'Beverages', targetType: 'category', targetId: 'Beverages', sectionMatch: 'Beverages' },
  { label: 'Sandwich', targetType: 'category', targetId: 'Sandwich', sectionMatch: 'Sandwich' },
  { label: 'Burgers', targetType: 'category', targetId: 'Burger', sectionMatch: 'Burger' },
  { label: 'Snacks', targetType: 'category', targetId: 'French Fries', sectionMatch: 'French Fries' },
  { label: 'Pizza', targetType: 'category', targetId: 'Pizza', sectionMatch: 'Pizza' },
  { label: 'High Protein', targetType: 'category', targetId: 'High Protein Special', sectionMatch: 'High Protein Special' },
  { label: 'Maggi', targetType: 'category', targetId: 'Maggie', sectionMatch: 'Maggie' },
  { label: 'Protein Shake', targetType: 'item', targetId: 'menu-item-29', sectionMatch: 'High Protein Special', itemId: 29 },
  { label: 'Combos', targetType: 'category', targetId: 'Combos', sectionMatch: 'Combos' }
];

export default function NutritionMenu({ cart, setCart, setView }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [activeCategory, setActiveCategory] = useState(SECTIONS[0]);
  const [showHighProteinOnly, setShowHighProteinOnly] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -75% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const matchedSection = SECTIONS.find(s => `category-sec-${s.replace(/\s+/g, '-')}` === sectionId);
          if (matchedSection) {
            setActiveCategory(matchedSection);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach(section => {
      const el = document.getElementById(`category-sec-${section.replace(/\s+/g, '-')}`);
      if (el) observer.observe(el);
    });

    return () => {
      SECTIONS.forEach(section => {
        const el = document.getElementById(`category-sec-${section.replace(/\s+/g, '-')}`);
        if (el) observer.unobserve(el);
      });
    };
  }, [searchQuery, showHighProteinOnly]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const targetElement = document.getElementById(`category-sec-${category.replace(/\s+/g, '-')}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleQuickAccessClick = (item) => {
    if (item.targetType === 'category') {
      const targetElement = document.getElementById(`category-sec-${item.targetId.replace(/\s+/g, '-')}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveCategory(item.sectionMatch);
      }
    } else if (item.targetType === 'item') {
      const targetElement = document.getElementById(item.targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setActiveCategory(item.sectionMatch);
        const originalBorder = targetElement.style.borderColor;
        const originalShadow = targetElement.style.boxShadow;
        targetElement.style.borderColor = 'var(--accent)';
        targetElement.style.boxShadow = '0 0 25px rgba(0, 255, 127, 0.3)';
        setTimeout(() => {
          targetElement.style.borderColor = originalBorder;
          targetElement.style.boxShadow = originalShadow;
        }, 1500);
      }
    }
  };

  const addToCart = (id) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const removeFromCart = (id) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  // Calculate cart counts and total price
  const cartItemCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotalPrice = Object.entries(cart).reduce((total, [id, qty]) => {
    const item = MENU_ITEMS.find(m => m.id === parseInt(id));
    return total + (item ? item.price * qty : 0);
  }, 0);

  // Filter items based on search and filters
  const filteredMeals = MENU_ITEMS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesHighProtein = !showHighProteinOnly || item.category === 'High Protein Special' || item.protein >= 12;

    return matchesSearch && matchesHighProtein;
  });

  return (
    <section 
      ref={containerRef}
      id="menu" 
      style={{ 
        backgroundColor: '#060709', 
        minHeight: '100vh',
        padding: '7rem 0 8rem', 
        position: 'relative' 
      }}
    >
      <div className="bg-glow-spot glow-mesh" style={{ top: '10%', right: '10%', width: '400px', height: '400px', opacity: 0.15 }} />
      <div className="container">
        
        {/* Search Header Container */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Premium Healthy Dining
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Browse Our Menu
          </h2>
          
          {/* Swiggy Style Search & Filter Row */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            width: '100%',
            maxWidth: '640px'
          }}>
            <div style={{
              position: 'relative',
              width: '100%'
            }}>
              <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search for high-protein items, pizzas, combos, burgers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  padding: '0.9rem 1rem 0.9rem 2.8rem',
                  color: '#fff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'all 0.3s'
                }}
                className="menu-search-input"
              />
            </div>

            {/* Quick Toggle Filter */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <button
                onClick={() => setShowHighProteinOnly(!showHighProteinOnly)}
                style={{
                  background: showHighProteinOnly ? 'rgba(0, 255, 127, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid',
                  borderColor: showHighProteinOnly ? 'var(--accent)' : 'var(--border-color)',
                  color: showHighProteinOnly ? 'var(--accent)' : 'var(--text-secondary)',
                  padding: '0.5rem 1.2rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Zap size={13} />
                <span>High Protein Only</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Access Menu Navigation */}
        <div className="quick-access-nav-wrapper">
          <div className="quick-access-nav">
            {QUICK_ACCESS_ITEMS.map((item) => {
              const isActive = activeCategory === item.sectionMatch;
              return (
                <button
                  key={item.label}
                  onClick={() => handleQuickAccessClick(item)}
                  className={`quick-access-pill ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Layout Grid (Left Sidebar, Right List) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '240px 1fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="menu-layout-grid">
          
          {/* Left Category Sidebar (Sticky) */}
          <div style={{
            position: 'sticky',
            top: '100px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            borderRight: '1px solid rgba(255,255,255,0.05)',
            paddingRight: '1.5rem'
          }} className="menu-sidebar">
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', paddingLeft: '0.5rem' }}>
              Categories
            </span>
            {SECTIONS.map((section) => {
              const isCategoryActive = activeCategory === section;
              const count = filteredMeals.filter(m => m.category === section).length;

              return (
                <button
                  key={section}
                  onClick={() => handleCategoryClick(section)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    padding: '0.75rem 0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: isCategoryActive ? 700 : 500,
                    color: isCategoryActive ? 'var(--accent)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderLeft: isCategoryActive ? '3px solid var(--accent)' : '3px solid transparent',
                    paddingLeft: isCategoryActive ? '0.75rem' : '0.5rem'
                  }}
                  className="sidebar-category-btn"
                >
                  <span>{section}</span>
                  {count > 0 && (
                    <span style={{ fontSize: '0.7rem', opacity: 0.6, background: 'rgba(255,255,255,0.04)', padding: '0.1rem 0.4rem', borderRadius: '8px' }}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Menu List Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }} className="menu-list-container">
            {SECTIONS.map((section) => {
              const sectionMeals = filteredMeals.filter(meal => meal.category === section);
              if (sectionMeals.length === 0) return null;

              const isHeroSection = section === 'High Protein Special';

              return (
                <div 
                  key={section} 
                  id={`category-sec-${section.replace(/\s+/g, '-')}`}
                  style={{ scrollMarginTop: '160px' }}
                >
                  {/* Section Title */}
                  <h3 style={{
                    fontSize: '1.4rem',
                    color: '#fff',
                    fontFamily: 'var(--font-heading)',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    paddingBottom: '0.75rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span>{section}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{sectionMeals.length} items</span>
                  </h3>

                  {/* Grouped Items List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {sectionMeals.map((meal) => {
                      const isHighProtein = meal.category === 'High Protein Special' || meal.protein >= 12;
                      const isBestseller = meal.category === 'Combos' || meal.name.includes('Double') || meal.name.includes('Cheese');
                      
                      // Highlight the 5 specific hero items inside the High Protein Special category
                      const isHeroHighlight = isHeroSection && [25, 26, 27, 28, 29].includes(meal.id);
                      
                      const quantity = cart[meal.id] || 0;

                      return (
                        <div
                          key={meal.id}
                          id={`menu-item-${meal.id}`}
                          onClick={() => setSelectedMeal(meal)}
                          className="glass-premium menu-item-row"
                          style={{
                            borderRadius: '16px',
                            padding: '1rem 1.25rem',
                            cursor: 'pointer',
                            display: 'flex',
                            gap: '1.5rem',
                            alignItems: 'center',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            border: isHeroHighlight 
                              ? '1.5px solid rgba(0, 255, 127, 0.4)' 
                              : '1px solid rgba(255,255,255,0.04)',
                            boxShadow: isHeroHighlight 
                              ? '0 0 25px rgba(0, 255, 127, 0.08)' 
                              : 'var(--shadow-premium)',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                        >
                          {/* Left Column: Food Image */}
                          <div style={{ 
                            position: 'relative', 
                            width: '110px', 
                            height: '110px', 
                            flexShrink: 0,
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                          }} className="image-container">
                            <img
                              src={SPECIFIC_IMAGES[meal.id] || CATEGORY_IMAGES[meal.category] || CATEGORY_IMAGES['Combos']}
                              alt={meal.name}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.4s ease'
                              }}
                              className="menu-food-img"
                            />
                            
                            {/* Special Highlight Overlay */}
                            {isHeroHighlight && (
                              <div style={{
                                position: 'absolute',
                                top: '6px',
                                left: '6px',
                                background: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
                                color: '#07080a',
                                fontSize: '0.55rem',
                                fontWeight: 900,
                                padding: '0.15rem 0.4rem',
                                borderRadius: '4px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                              }}>
                                Hero Item
                              </div>
                            )}
                          </div>

                          {/* Right Column: Item Information */}
                          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            
                            {/* Badges and Title */}
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                              {isHighProtein && (
                                <span style={{
                                  fontSize: '0.55rem',
                                  fontWeight: 800,
                                  color: 'var(--accent)',
                                  background: 'rgba(0, 255, 127, 0.06)',
                                  border: '1px solid rgba(0, 255, 127, 0.15)',
                                  padding: '0.1rem 0.35rem',
                                  borderRadius: '4px',
                                  textTransform: 'uppercase'
                                }}>
                                  High Protein
                                </span>
                              )}
                              {isBestseller && (
                                <span style={{
                                  fontSize: '0.55rem',
                                  fontWeight: 800,
                                  color: '#eab308',
                                  background: 'rgba(234, 179, 8, 0.06)',
                                  border: '1px solid rgba(234, 179, 8, 0.15)',
                                  padding: '0.1rem 0.35rem',
                                  borderRadius: '4px',
                                  textTransform: 'uppercase'
                                }}>
                                  Bestseller
                                </span>
                              )}
                              
                              <h4 style={{ 
                                fontSize: '1.1rem', 
                                color: '#fff', 
                                fontWeight: 700, 
                                fontFamily: 'var(--font-heading)',
                                margin: 0
                              }}>
                                {meal.name}
                              </h4>
                            </div>

                            {/* Price */}
                            <div style={{ 
                              fontSize: '1.15rem', 
                              color: 'var(--accent)', 
                              fontWeight: 800, 
                              fontFamily: 'var(--font-heading)' 
                            }}>
                              ₹{meal.price}
                            </div>

                            {/* Macro Badges Row */}
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                              {meal.protein && (
                                <div style={{ 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  gap: '0.2rem', 
                                  fontSize: '0.75rem', 
                                  color: 'var(--accent)', 
                                  backgroundColor: 'rgba(0, 255, 127, 0.04)',
                                  padding: '0.15rem 0.4rem',
                                  borderRadius: '6px',
                                  fontWeight: 600
                                }}>
                                  <span>Protein: {meal.protein}g</span>
                                </div>
                              )}
                              {meal.kcal && (
                                <div style={{ 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  gap: '0.2rem', 
                                  fontSize: '0.75rem', 
                                  color: '#f59e0b',
                                  backgroundColor: 'rgba(245, 158, 11, 0.04)',
                                  padding: '0.15rem 0.4rem',
                                  borderRadius: '6px',
                                  fontWeight: 600
                                }}>
                                  <Flame size={10} />
                                  <span>{meal.kcal} kcal</span>
                                </div>
                              )}
                            </div>

                            {/* Short Description */}
                            <p style={{
                              fontSize: '0.8rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.35,
                              margin: 0,
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}>
                              {meal.desc}
                            </p>
                          </div>

                          {/* Far Right: Interactive Cart Action Button */}
                          <div 
                            style={{ flexShrink: 0 }}
                            onClick={(e) => e.stopPropagation()} // prevent opening detail modal
                          >
                            {quantity === 0 ? (
                              <button
                                onClick={() => addToCart(meal.id)}
                                className="btn-primary"
                                style={{
                                  padding: '0.45rem 1.1rem',
                                  fontSize: '0.75rem',
                                  borderRadius: '8px',
                                  textTransform: 'uppercase',
                                  boxShadow: 'none',
                                  fontWeight: 700
                                }}
                              >
                                + Add
                              </button>
                            ) : (
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                backgroundColor: 'rgba(0, 255, 127, 0.1)',
                                border: '1px solid var(--accent)',
                                borderRadius: '8px',
                                padding: '0.35rem 0.6rem',
                                color: '#fff'
                              }}>
                                <button
                                  onClick={() => removeFromCart(meal.id)}
                                  style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--accent)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0.1rem'
                                  }}
                                >
                                  <Minus size={13} />
                                </button>
                                <span style={{ fontSize: '0.8rem', fontWeight: 700, minWidth: '12px', textAlign: 'center' }}>
                                  {quantity}
                                </span>
                                <button
                                  onClick={() => addToCart(meal.id)}
                                  style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--accent)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0.1rem'
                                  }}
                                >
                                  <Plus size={13} />
                                </button>
                              </div>
                            )}
                          </div>

                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Premium Food Detail Modal (No dashboards!) */}
      {selectedMeal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1.5rem'
        }}>
          <div
            className="glass-premium"
            style={{
              width: '100%',
              maxWidth: '480px',
              borderRadius: '24px',
              padding: '2rem',
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0,0,0,0.7)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMeal(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={16} />
            </button>

            {/* Premium Photo Banner */}
            <div style={{
              width: '100%',
              height: '180px',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              position: 'relative',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <img
                src={SPECIFIC_IMAGES[selectedMeal.id] || CATEGORY_IMAGES[selectedMeal.category] || CATEGORY_IMAGES['Combos']}
                alt={selectedMeal.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: [6, 7, 8, 16, 22, 25, 29, 30, 31, 32].includes(selectedMeal.id) ? 'contain' : 'cover',
                  backgroundColor: [6, 7, 8, 16, 22, 25, 29, 30, 31, 32].includes(selectedMeal.id) ? '#121418' : 'transparent'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(4px)',
                padding: '0.25rem 0.6rem',
                borderRadius: '6px',
                color: 'var(--accent)',
                fontSize: '0.75rem',
                fontWeight: 700
              }}>
                {selectedMeal.category}
              </div>
            </div>

            {/* Food Title & Pricing */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: '#fff', margin: 0, fontWeight: 800 }}>
                {selectedMeal.name}
              </h3>
              <span style={{ fontSize: '1.4rem', fontWeight: 850, color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>
                ₹{selectedMeal.price}
              </span>
            </div>

            {/* Macro Summary Pill */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {selectedMeal.protein && (
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  background: 'rgba(0, 255, 127, 0.08)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '6px'
                }}>
                  💪 {selectedMeal.protein}g Protein
                </span>
              )}
              {selectedMeal.kcal && (
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#f59e0b',
                  background: 'rgba(245, 158, 11, 0.08)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '6px'
                }}>
                  🔥 {selectedMeal.kcal} kcal
                </span>
              )}
            </div>

            {/* Description */}
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: 1.5, margin: 0 }}>
              {selectedMeal.desc}
            </p>

            {/* Basic Culinary Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem' }}>
              {selectedMeal.ingredients && (
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Ingredients</span>
                  <p style={{ fontSize: '0.85rem', color: '#fff', margin: '0.1rem 0 0' }}>{selectedMeal.ingredients}</p>
                </div>
              )}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  🟢 100% Vegetarian
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  🚫 No Added Sugar
                </span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                className="btn-primary"
                onClick={() => {
                  addToCart(selectedMeal.id);
                  setSelectedMeal(null);
                }}
                style={{ flexGrow: 1, padding: '0.75rem', justifyContent: 'center', borderRadius: '12px' }}
              >
                <span>Add to Basket</span>
              </button>
              <button
                className="btn-secondary"
                onClick={() => setSelectedMeal(null)}
                style={{ padding: '0.75rem 1.2rem', borderRadius: '12px' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Swiggy/Zomato Sticky Bottom Cart Bar */}
      {cartItemCount > 0 && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '580px',
          background: 'linear-gradient(135deg, rgba(0, 255, 127, 0.95) 0%, rgba(5, 149, 105, 0.95) 100%)',
          backdropFilter: 'blur(8px)',
          borderRadius: '16px',
          padding: '1rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(0, 255, 127, 0.3)',
          zIndex: 999,
          animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }} className="cart-sticky-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#07080a' }}>
            <div style={{
              backgroundColor: '#07080a',
              color: 'var(--accent)',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '0.85rem'
            }}>
              {cartItemCount}
            </div>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, display: 'block', opacity: 0.8 }}>Item added</span>
              <span style={{ fontSize: '1.05rem', fontWeight: 800 }}>₹{cartTotalPrice}</span>
            </div>
          </div>

          <button
            onClick={() => setView('cart')}
            style={{
              background: '#07080a',
              color: 'var(--accent)',
              border: 'none',
              borderRadius: '10px',
              padding: '0.65rem 1.25rem',
              fontSize: '0.85rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.3s'
            }}
            className="cart-proceed-btn"
          >
            <span>Proceed to Order</span>
            <ShoppingBag size={14} />
          </button>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { transform: translate(-50%, 100px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
        .quick-access-nav-wrapper {
          position: sticky;
          top: 72px;
          z-index: 40;
          background: #060709;
          padding: 0.75rem 0.25rem;
          margin-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        .quick-access-nav {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 0.25rem 0.5rem;
          -webkit-overflow-scrolling: touch;
        }
        .quick-access-nav::-webkit-scrollbar {
          display: none;
        }
        .quick-access-pill {
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          padding: 0.6rem 1.25rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-sans);
        }
        .quick-access-pill:hover {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }
        .quick-access-pill.active {
          background: rgba(0, 255, 127, 0.1) !important;
          border-color: var(--accent) !important;
          color: var(--accent) !important;
          box-shadow: 0 0 12px rgba(0, 255, 127, 0.2);
        }
        @media (max-width: 991px) {
          .quick-access-nav-wrapper {
            top: 68px;
          }
        }
        .menu-search-input:focus {
          border-color: var(--accent) !important;
          box-shadow: 0 0 15px rgba(0, 255, 127, 0.15);
          background-color: rgba(255,255,255,0.04) !important;
        }
        .sidebar-category-btn:hover {
          color: #fff !important;
          background-color: rgba(255,255,255,0.01);
        }
        .menu-item-row:hover {
          transform: translateY(-2px);
          border-color: rgba(0, 255, 127, 0.3) !important;
          box-shadow: 0 12px 30px rgba(0, 255, 127, 0.05) !important;
        }
        .menu-item-row:hover .menu-food-img {
          transform: scale(1.05);
        }
        .cart-proceed-btn:hover {
          background-color: #111 !important;
          transform: scale(1.02);
        }
        @media (max-width: 991px) {
          .menu-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .menu-sidebar {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .menu-item-row {
            padding: 0.75rem !important;
            gap: 1rem !important;
          }
          .menu-item-row .image-container {
            width: 80px !important;
            height: 80px !important;
          }
          .menu-item-row h4 {
            font-size: 0.95rem !important;
          }
          .menu-item-row p {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
