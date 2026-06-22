import React from 'react';
import { ArrowLeft, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
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

const SPECIFIC_IMAGES = {
  1: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80',
  2: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
  3: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80',
  4: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80',
  5: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80',
  6: grilledVegSandwich,
  7: threeLayerGrillVegSandwich,
  8: grilledCheeseSandwich,
  9: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80',
  10: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
  11: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80',
  12: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=400&q=80',
  13: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80',
  14: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=400&q=80',
  15: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=400&q=80',
  16: periPeriFrenchFries120gm,
  17: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80',
  18: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=400&q=80',
  19: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=400&q=80',
  20: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=400&q=80',
  21: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
  22: onionTomatoCapsicumPizza8Inch,
  23: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80',
  24: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=400&q=80',
  25: proteinWhiteBreadPizza,
  26: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80',
  27: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=400&q=80',
  28: proteinPaneerSandwich3Layer,
  29: wheyProteinShake,
  30: classicMaggie,
  31: vegetableMaggie,
  32: cheeseMaggieWithVegetables,
  33: combo1,
  34: combo2,
  35: combo3,
  36: combo4,
  37: combo5
};

const MENU_ITEMS_MAP = {
  1: { name: 'Classic Chai', price: 10, category: 'Beverages' },
  2: { name: 'Hot Coffee', price: 20, category: 'Beverages' },
  3: { name: 'Cold Coffee (200ml)', price: 49, category: 'Beverages' },
  4: { name: 'Cold Coffee (250ml)', price: 59, category: 'Beverages' },
  5: { name: 'Cold Drink (200ml)', price: 20, category: 'Beverages' },
  6: { name: 'Grilled Veg Sandwich', price: 50, category: 'Sandwich' },
  7: { name: '3 Layer Grill Veg Sandwich', price: 65, category: 'Sandwich' },
  8: { name: 'Grilled Cheese Sandwich', price: 65, category: 'Sandwich' },
  9: { name: 'Veg Burger', price: 50, category: 'Burger' },
  10: { name: 'Single Cheese Burger', price: 60, category: 'Burger' },
  11: { name: 'Double Cheese Burger', price: 70, category: 'Burger' },
  12: { name: 'Paneer Burger', price: 70, category: 'Burger' },
  13: { name: 'Salted French Fries (100gm)', price: 60, category: 'French Fries' },
  14: { name: 'Salted French Fries (120gm)', price: 70, category: 'French Fries' },
  15: { name: 'Peri Peri French Fries (100gm)', price: 70, category: 'French Fries' },
  16: { name: 'Peri Peri French Fries (120gm)', price: 80, category: 'French Fries' },
  17: { name: 'Margherita Pizza (6 Inch)', price: 99, category: 'Pizza' },
  18: { name: 'Margherita Pizza (8 Inch)', price: 120, category: 'Pizza' },
  19: { name: 'Sweet Corn Pizza (6 Inch)', price: 110, category: 'Pizza' },
  20: { name: 'Sweet Corn Pizza (8 Inch)', price: 130, category: 'Pizza' },
  21: { name: 'Onion Tomato Capsicum Pizza (6 Inch)', price: 130, category: 'Pizza' },
  22: { name: 'Onion Tomato Capsicum Pizza (8 Inch)', price: 150, category: 'Pizza' },
  23: { name: 'Paneer Pizza (6 Inch)', price: 150, category: 'Pizza' },
  24: { name: 'Paneer Pizza (8 Inch)', price: 170, category: 'Pizza' },
  25: { name: 'Protein White Bread Pizza', price: 60, category: 'High Protein Special' },
  26: { name: 'Protein Brown Bread Pizza (2 Pcs)', price: 90, category: 'High Protein Special' },
  27: { name: 'Protein Paneer Sandwich', price: 70, category: 'High Protein Special' },
  28: { name: '3 Layer Protein Paneer Sandwich', price: 90, category: 'High Protein Special' },
  29: { name: 'Whey Protein Shake', price: 70, category: 'High Protein Special' },
  30: { name: 'Classic Maggie', price: 40, category: 'Maggie' },
  31: { name: 'Vegetable Maggie', price: 60, category: 'Maggie' },
  32: { name: 'Cheese Maggie with Vegetables', price: 70, category: 'Maggie' },
  33: { name: 'Combo 1 (Veg Sandwich + Coffee + Fries)', price: 158, category: 'Combos' },
  34: { name: 'Combo 2 (Veg Burger + Drink + Fries)', price: 171, category: 'Combos' },
  35: { name: 'Combo 3 (Cheese Sandwich + Coffee + Fries)', price: 179, category: 'Combos' },
  36: { name: 'Combo 4 (Margherita Pizza + Cold Drink)', price: 260, category: 'Combos' },
  37: { name: 'Combo 5 (Paneer Burger + Fries + Coffee)', price: 251, category: 'Combos' }
};

export default function Cart({ cart, setView, addToCart, removeFromCart, clearCartItem }) {
  const cartEntries = Object.entries(cart).map(([id, qty]) => {
    const itemInfo = MENU_ITEMS_MAP[parseInt(id)];
    return {
      id: parseInt(id),
      quantity: qty,
      name: itemInfo?.name || 'Unknown Item',
      price: itemInfo?.price || 0,
      category: itemInfo?.category || 'Combos'
    };
  });

  const totalItems = cartEntries.reduce((acc, item) => acc + item.quantity, 0);
  const grandTotal = cartEntries.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section style={{ backgroundColor: '#060709', minHeight: '100vh', padding: '7rem 0 5rem', position: 'relative' }}>
      <div className="bg-glow-spot glow-mesh" style={{ top: '10%', left: '5%', width: '500px', height: '500px', opacity: 0.2 }} />
      <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 5 }}>
        
        {/* Back navigation */}
        <button
          onClick={() => setView('menu')}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
            transition: 'color 0.2s'
          }}
          className="back-btn"
        >
          <ArrowLeft size={16} />
          <span>Back to Menu</span>
        </button>

        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '2.5rem' }}>
          Your Basket
        </h2>

        {cartEntries.length === 0 ? (
          <div className="glass-premium" style={{ borderRadius: '24px', padding: '4rem 2rem', textAlign: 'center' }}>
            <ShoppingBag size={48} style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', margin: '0 auto 1.5rem' }} />
            <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem' }}>Your basket is empty</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Add freshly prepared protein meals and delicious combos to get started.
            </p>
            <button onClick={() => setView('menu')} className="btn-primary" style={{ margin: '0 auto' }}>
              Browse Menu
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Cart Items List */}
            <div className="glass-premium" style={{ borderRadius: '24px', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {cartEntries.map((item) => {
                const img = SPECIFIC_IMAGES[item.id] || CATEGORY_IMAGES[item.category] || CATEGORY_IMAGES['Combos'];
                return (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.2rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                      paddingBottom: '1.2rem'
                    }}
                    className="cart-item-row"
                  >
                    {/* Item Image */}
                    <div style={{ width: '64px', height: '64px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(255,255,255,0.05)' }}>
                      <img src={img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Name & Price */}
                    <div style={{ flexGrow: 1 }}>
                      <h4 style={{ fontSize: '1rem', color: '#fff', fontWeight: 700, marginBottom: '0.2rem' }}>{item.name}</h4>
                      <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600 }}>₹{item.price}</span>
                    </div>

                    {/* Quantity controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.3rem 0.5rem' }}>
                      <button onClick={() => removeFromCart(item.id)} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, minWidth: '12px', textAlign: 'center' }}>{item.quantity}</span>
                      <button onClick={() => addToCart(item.id)} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Total Item Price */}
                    <div style={{ minWidth: '70px', textAlign: 'right', fontWeight: 800, fontSize: '1rem', color: '#fff' }}>
                      ₹{item.price * item.quantity}
                    </div>

                    {/* Delete Item */}
                    <button
                      onClick={() => clearCartItem(item.id)}
                      style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.2rem' }}
                      className="trash-btn"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Bill Summary */}
            <div className="glass-premium" style={{ borderRadius: '24px', padding: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
                Order Summary
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span>Total Items</span>
                  <span>{totalItems}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span>Subtotal</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '2rem' }}>
                <span>Grand Total</span>
                <span style={{ color: 'var(--accent)' }}>₹{grandTotal}</span>
              </div>

              <button
                onClick={() => setView('checkout')}
                className="btn-primary"
                style={{ width: '100%', padding: '0.9rem', justifyContent: 'center', borderRadius: '12px', fontSize: '0.95rem' }}
              >
                <span>Proceed to Order</span>
              </button>
            </div>

          </div>
        )}

      </div>
      <style>{`
        .back-btn:hover {
          color: var(--accent) !important;
        }
        .trash-btn:hover {
          color: #f87171 !important;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
