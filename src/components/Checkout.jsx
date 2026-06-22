import React, { useState, useEffect } from 'react';
import { ArrowLeft, MessageSquare, User, Phone, ClipboardList } from 'lucide-react';

const MENU_ITEMS_MAP = {
  1: { name: 'Classic Chai', price: 10 },
  2: { name: 'Hot Coffee', price: 20 },
  3: { name: 'Cold Coffee (200ml)', price: 49 },
  4: { name: 'Cold Coffee (250ml)', price: 59 },
  5: { name: 'Cold Drink (200ml)', price: 20 },
  6: { name: 'Grilled Veg Sandwich', price: 50 },
  7: { name: '3 Layer Grill Veg Sandwich', price: 65 },
  8: { name: 'Grilled Cheese Sandwich', price: 65 },
  9: { name: 'Veg Burger', price: 50 },
  10: { name: 'Single Cheese Burger', price: 60 },
  11: { name: 'Double Cheese Burger', price: 70 },
  12: { name: 'Paneer Burger', price: 70 },
  13: { name: 'Salted French Fries (100gm)', price: 60 },
  14: { name: 'Salted French Fries (120gm)', price: 70 },
  15: { name: 'Peri Peri French Fries (100gm)', price: 70 },
  16: { name: 'Peri Peri French Fries (120gm)', price: 80 },
  17: { name: 'Margherita Pizza (6 Inch)', price: 99 },
  18: { name: 'Margherita Pizza (8 Inch)', price: 120 },
  19: { name: 'Sweet Corn Pizza (6 Inch)', price: 110 },
  20: { name: 'Sweet Corn Pizza (8 Inch)', price: 130 },
  21: { name: 'Onion Tomato Capsicum Pizza (6 Inch)', price: 130 },
  22: { name: 'Onion Tomato Capsicum Pizza (8 Inch)', price: 150 },
  23: { name: 'Paneer Pizza (6 Inch)', price: 150 },
  24: { name: 'Paneer Pizza (8 Inch)', price: 170 },
  25: { name: 'Protein White Bread Pizza', price: 60 },
  26: { name: 'Protein Brown Bread Pizza (2 Pcs)', price: 90 },
  27: { name: 'Protein Paneer Sandwich', price: 70 },
  28: { name: '3 Layer Protein Paneer Sandwich', price: 90 },
  29: { name: 'Whey Protein Shake', price: 70 },
  30: { name: 'Classic Maggie', price: 40 },
  31: { name: 'Vegetable Maggie', price: 60 },
  32: { name: 'Cheese Maggie with Vegetables', price: 70 },
  33: { name: 'Combo 1 (Veg Sandwich + Coffee + Fries)', price: 158 },
  34: { name: 'Combo 2 (Veg Burger + Drink + Fries)', price: 171 },
  35: { name: 'Combo 3 (Cheese Sandwich + Coffee + Fries)', price: 179 },
  36: { name: 'Combo 4 (Margherita Pizza + Cold Drink)', price: 260 },
  37: { name: 'Combo 5 (Paneer Burger + Fries + Coffee)', price: 251 }
};

export default function Checkout({ cart, setView, onCheckoutComplete, selectedGoal }) {
  const [name, setName] = useState('');
  const [orderType, setOrderType] = useState('Pickup');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const cartEntries = Object.entries(cart).map(([id, qty]) => {
    const itemInfo = MENU_ITEMS_MAP[parseInt(id)];
    return {
      id: parseInt(id),
      quantity: qty,
      name: itemInfo?.name || 'Unknown Item',
      price: itemInfo?.price || 0
    };
  });

  const grandTotal = cartEntries.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Generate unique sequential token FT1001, FT1002, FT1003 on mount
  useEffect(() => {
    const lastTokenNum = parseInt(localStorage.getItem('fitbite_last_token') || '1000');
    const nextTokenNum = lastTokenNum + 1;
    setToken(`FT${nextTokenNum}`);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Save token sequence number to localStorage so the next checkout increments
    const lastTokenNum = parseInt(localStorage.getItem('fitbite_last_token') || '1000');
    localStorage.setItem('fitbite_last_token', (lastTokenNum + 1).toString());

    // Generate WhatsApp Pre-filled message
    const itemsFormatted = cartEntries
      .map(item => `* ${item.name}${item.quantity > 1 ? ` (x${item.quantity})` : ''}`)
      .join('\n');

    let message = `Fit Bite Cafe Order\n\n`;
    message += `Token: ${token}\n\n`;
    message += `Customer Name: ${name.trim() || 'Guest'}\n\n`;
    message += `Order Type: ${orderType}\n\n`;
    message += `Items:\n\n${itemsFormatted}\n\n`;
    message += `Total: ₹${grandTotal}\n\n`;
    message += `Special Instructions:\n${specialInstructions.trim() || 'None'}\n\n`;
    message += `Thank You`;

    const whatsappUrl = `https://wa.me/919687486729?text=${encodeURIComponent(message)}`;

    // Pass final order details back to App
    onCheckoutComplete({
      token,
      name,
      items: cartEntries,
      grandTotal,
      orderType,
      specialInstructions
    });

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Transition view
    setView('success');
  };

  return (
    <section style={{ backgroundColor: '#060709', minHeight: '100vh', padding: '7rem 0 5rem', position: 'relative' }}>
      <div className="bg-glow-spot glow-mesh" style={{ top: '10%', right: '5%', width: '500px', height: '500px', opacity: 0.2 }} />
      <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 5 }}>
        
        {/* Back navigation */}
        <button
          onClick={() => setView('cart')}
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
          <span>Back to Basket</span>
        </button>

        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '2.5rem' }}>
          Order Checkout
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          
          {/* Checkout Form (Left Column) */}
          <div className="glass-premium" style={{ borderRadius: '24px', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ClipboardList size={18} style={{ color: 'var(--accent)' }} />
              <span>Customer Information</span>
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Name Input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Customer Name (optional)</label>
                <div style={{ position: 'relative' }}>
                  <User size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="text"
                    placeholder="Rahul Sharma (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255,255,255,0.01)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      padding: '0.75rem 1rem 0.75rem 2.8rem',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    className="checkout-input"
                  />
                </div>
              </div>



              {/* Order Type */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Order Type</label>
                <div style={{ display: 'flex', gap: '2rem', marginTop: '0.25rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', color: '#fff' }}>
                    <input
                      type="radio"
                      name="orderType"
                      value="Dine-In"
                      checked={orderType === 'Dine-In'}
                      onChange={() => setOrderType('Dine-In')}
                      style={{ accentColor: 'var(--accent)', cursor: 'pointer' }}
                    />
                    <span>Dine-In</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', color: '#fff' }}>
                    <input
                      type="radio"
                      name="orderType"
                      value="Pickup"
                      checked={orderType === 'Pickup'}
                      onChange={() => setOrderType('Pickup')}
                      style={{ accentColor: 'var(--accent)', cursor: 'pointer' }}
                    />
                    <span>Pickup</span>
                  </label>
                </div>
              </div>

              {/* Special Instructions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Special Instructions (optional)</label>
                <textarea
                  placeholder="E.g. no onions, extra spicy, warm coffee, etc."
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  rows={3}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255,255,255,0.01)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    padding: '0.75rem 1rem',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s'
                  }}
                  className="checkout-textarea"
                />
              </div>

              {error && (
                <div style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 600, display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <span>⚠️ {error}</span>
                </div>
              )}

              {/* Token Info Displays */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                marginTop: '0.5rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Generated Token:</span>
                  <strong style={{ color: 'var(--accent)' }}>{token}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Order Status:</span>
                  <span style={{ color: '#f59e0b', fontWeight: 700 }}>Pending Confirmation</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Estimated Prep Time:</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>15–20 Minutes</span>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '0.9rem', justifyContent: 'center', borderRadius: '12px', gap: '0.5rem', marginTop: '1rem' }}
              >
                <MessageSquare size={16} />
                <span>Proceed to Order</span>
              </button>
            </form>
          </div>

          {/* Cart Summary Panel (Right Column) */}
          <div className="glass-premium" style={{ borderRadius: '24px', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
              Your Order
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem', maxHeight: '260px', overflowY: 'auto', paddingRight: '0.5rem' }}>
              {cartEntries.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', alignItems: 'center' }}>
                  <span style={{ color: '#fff' }}>
                    {item.name} <strong style={{ color: 'var(--accent)', marginLeft: '0.2rem' }}>× {item.quantity}</strong>
                  </span>
                  <span style={{ color: 'var(--text-secondary)' }}>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: 800, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem', color: '#fff' }}>
              <span>Total Amount</span>
              <span style={{ color: 'var(--accent)' }}>₹{grandTotal}</span>
            </div>
          </div>

        </div>

      </div>
      <style>{`
        .back-btn:hover {
          color: var(--accent) !important;
        }
        .checkout-input:focus {
          border-color: var(--accent) !important;
          background-color: rgba(255,255,255,0.03) !important;
          box-shadow: 0 0 10px rgba(0, 255, 127, 0.1);
        }
      `}</style>
    </section>
  );
}
