import React from 'react';
import { CheckCircle, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Success({ orderDetails, onReset }) {
  if (!orderDetails) return null;

  return (
    <section style={{ backgroundColor: '#060709', minHeight: '100vh', padding: '7rem 0 5rem', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div className="bg-glow-spot glow-mesh" style={{ top: '25%', left: '50%', width: '600px', height: '600px', opacity: 0.3, transform: 'translateX(-50%)' }} />
      <div className="container" style={{ maxWidth: '600px', position: 'relative', zIndex: 5, textAlign: 'center' }}>
        
        {/* Animated Success Badge */}
        <div style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: '2rem' }} className="success-icon-bounce">
          <CheckCircle size={80} style={{ color: 'var(--accent)', filter: 'drop-shadow(0 0 15px rgba(0, 255, 127, 0.4))' }} />
        </div>

        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '0.5rem', color: '#fff' }}>
          Order Submitted!
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
          Your order has been compiled and a message was initialized for WhatsApp.
        </p>

        {/* Token Details Panel */}
        <div className="glass-premium" style={{ borderRadius: '24px', padding: '2.5rem', marginBottom: '2.5rem', textAlign: 'left', border: '1px solid rgba(0, 255, 127, 0.25)', boxShadow: '0 20px 40px rgba(0, 255, 127, 0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>Order Token</span>
              <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--accent)', fontFamily: 'var(--font-heading)', letterSpacing: '0.02em', textShadow: '0 0 10px rgba(0, 255, 127, 0.2)' }}>
                {orderDetails.token}
              </span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>Prep Status</span>
              <span style={{ color: '#f59e0b', fontWeight: 800, fontSize: '0.95rem' }}>Pending Confirmation</span>
            </div>
          </div>

          {/* Details list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Customer Name:</span>
              <strong style={{ color: '#fff' }}>{orderDetails.name}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Order Type:</span>
              <strong style={{ color: '#fff' }}>{orderDetails.orderType}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Total Amount:</span>
              <strong style={{ color: 'var(--accent)', fontSize: '1.05rem' }}>₹{orderDetails.grandTotal}</strong>
            </div>
          </div>

          {/* Item details */}
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem', fontWeight: 700 }}>Items List</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {orderDetails.items.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: '#fff' }}>
                    {item.name} <strong style={{ color: 'var(--accent)' }}>× {item.quantity}</strong>
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pickup Info Banner */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.25rem', textAlign: 'left', marginBottom: '3rem' }}>
          <Calendar size={20} style={{ color: 'var(--accent)', marginTop: '0.1rem', flexShrink: 0 }} />
          <div>
            <h4 style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 700, margin: 0 }}>Pickup Reminder</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0', lineHeight: 1.45 }}>
              Please show this token number screen at the counter when you arrive. Estimated pickup wait time is **15 to 20 minutes** from confirmation.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onReset}
          className="btn-primary"
          style={{ padding: '0.8rem 2rem', gap: '0.5rem', borderRadius: '12px', fontSize: '0.95rem', margin: '0 auto' }}
        >
          <span>Return to Homepage</span>
          <ArrowRight size={16} />
        </button>

      </div>
      <style>{`
        .success-icon-bounce {
          animation: floatBounce 2.5s infinite ease-in-out;
        }
        @keyframes floatBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
