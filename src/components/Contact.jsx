import React from 'react';
import { Mail, Phone, MapPin, Send, Compass } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully. Our wellness coordinators will respond within 12 hours.');
    e.target.reset();
  };

  return (
    <section id="contact" style={{ backgroundColor: '#090a0f', borderBottom: '1px solid var(--border-color)', position: 'relative' }}>
      <div className="bg-glow-spot glow-mesh" style={{ bottom: '10%', left: '50%', width: '500px', height: '500px', opacity: 0.4, transform: 'translateX(-50%)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Cafe Coordination
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            Contact & Location
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Details & Messaging Form (Left) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 255, 127, 0.05)',
                  border: '1px solid rgba(0, 255, 127, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>Cafe Location</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.1rem', lineHeight: '1.45' }}>
                    15, Viaan Business Hub,<br />
                    Under HR Fitness,<br />
                    Vatva, Ahmedabad,<br />
                    Gujarat 382445
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 255, 127, 0.05)',
                  border: '1px solid rgba(0, 255, 127, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>Reservations Hotline</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>
                    <a href="https://wa.me/919687486729" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 700 }}>
                      9687486729
                    </a>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 255, 127, 0.05)',
                  border: '1px solid rgba(0, 255, 127, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>Digital Relations</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>
                    lounge@fitbitecafe.com
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Contact Form */}
            <div className="glass-premium" style={{ borderRadius: '20px', padding: '2rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '1.2rem', fontFamily: 'var(--font-heading)' }}>
                Signal The Kitchen
              </h4>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255,255,255,0.01)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    padding: '0.7rem 1rem',
                    color: '#fff',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                  className="contact-text-input"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255,255,255,0.01)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    padding: '0.7rem 1rem',
                    color: '#fff',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                  className="contact-text-input"
                />
                <textarea
                  placeholder="Message..."
                  required
                  rows="4"
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255,255,255,0.01)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    padding: '0.7rem 1rem',
                    color: '#fff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    resize: 'none'
                  }}
                  className="contact-text-input"
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.7rem', justifyContent: 'center', borderRadius: '10px' }}>
                  <Send size={14} />
                  <span>Transmit Message</span>
                </button>
              </form>
            </div>

          </div>

          {/* Premium Futuristic SVG Map Simulation (Right) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="glass-premium"
              style={{
                width: '100%',
                maxWidth: '450px',
                aspectRatio: '1',
                borderRadius: '24px',
                padding: '1rem',
                border: '1px solid rgba(255,255,255,0.06)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'var(--shadow-premium)'
              }}
            >
              {/* Pulsing Concentric Glow Overlay over the map center node */}
              <div style={{
                position: 'absolute',
                top: '40%',
                left: '60%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 255, 127, 0.2)',
                  animation: 'pulseGlow 2s infinite'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '11px',
                  left: '11px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent)',
                  boxShadow: '0 0 10px var(--accent)'
                }} />
              </div>

              {/* Grid map vector */}
              <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ fill: 'none', stroke: '#1e293b', strokeWidth: '1.5' }}>
                {/* Diagonal grid lines representing roads */}
                <line x1="20" y1="50" x2="380" y2="50" />
                <line x1="20" y1="120" x2="380" y2="120" />
                <line x1="20" y1="230" x2="380" y2="230" />
                <line x1="20" y1="340" x2="380" y2="340" />

                <line x1="60" y1="20" x2="60" y2="380" />
                <line x1="160" y1="20" x2="160" y2="380" />
                <line x1="240" y1="20" x2="240" y2="380" />
                <line x1="320" y1="20" x2="320" y2="380" />

                {/* Angled avenues */}
                <line x1="20" y1="20" x2="380" y2="380" stroke="rgba(255,255,255,0.03)" strokeWidth="3" />
                <line x1="380" y1="20" x2="20" y2="380" stroke="rgba(255,255,255,0.03)" strokeWidth="3" />

                {/* Building Blocks layout */}
                <rect x="80" y="70" width="60" height="30" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
                <rect x="180" y="70" width="40" height="30" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
                <rect x="80" y="140" width="60" height="70" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
                <rect x="180" y="140" width="40" height="70" rx="4" fill="rgba(0, 255, 127, 0.02)" stroke="rgba(0, 255, 127, 0.08)" />
                <rect x="260" y="140" width="40" height="30" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
                <rect x="260" y="180" width="40" height="30" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />

                {/* Styled highlight routes */}
                <path d="M 60 120 L 240 120 L 240 230" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
                <path d="M 160 230 L 160 340 L 320 340" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" opacity="0.2" />

                {/* Location indicator flag */}
                <g transform="translate(230, 140)">
                  <rect x="-10" y="-35" width="80" height="24" rx="6" fill="#07080a" stroke="var(--accent)" strokeWidth="1" />
                  <text x="30" y="-19" fill="#fff" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="var(--font-heading)">FIT BITE HQ</text>
                </g>
              </svg>

              {/* Compass Detail */}
              <div style={{
                position: 'absolute',
                bottom: '15px',
                right: '15px',
                background: 'rgba(7,8,10,0.85)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '0.4rem 0.6rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.7rem',
                color: 'var(--text-secondary)'
              }}>
                <Compass size={12} style={{ color: 'var(--accent)' }} />
                <span>22.9575° N, 72.6393° E</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .contact-text-input:focus {
          border-color: var(--accent) !important;
          box-shadow: 0 0 10px rgba(0,255,127,0.15);
        }
        @keyframes pulseGlow {
          0% {
            transform: scale(0.6);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
