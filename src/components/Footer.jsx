import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';

export default function Footer({ view, setView }) {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    if (targetId === '#menu') {
      setView('menu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setView('home');
      setTimeout(() => {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <footer style={{
      backgroundColor: 'var(--bg-darker)',
      borderTop: '1px solid var(--border-color)',
      padding: '3rem 0 1.5rem',
      position: 'relative',
      zIndex: 2
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem'
        }}>
          {/* COLUMN 1 — Fit Bite */}
          <div>
            <a
              href="#"
              onClick={(e) => handleScrollTo(e, '#root')}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginBottom: '0.75rem'
              }}
            >
              <span style={{ color: '#fff' }}>FIT</span>
              <span style={{ color: 'var(--accent)', textShadow: '0 0 8px rgba(0,255,127,0.3)' }}>BITE</span>
              <Sparkles size={14} style={{ color: 'var(--accent)' }} />
            </a>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.8rem', lineHeight: '1.45' }}>
              Healthy Food. High Protein. Better Lifestyle.
            </p>
            
            {/* Service Availability Indicators */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }}></span>
                <span>Dine-In Available</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }}></span>
                <span>Pickup Available</span>
              </div>
            </div>

            {/* Official Contact Info */}
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.2rem', marginTop: '0.8rem' }}>
              <div>Phone: <a href="https://wa.me/919687486729" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }} className="footer-link-direct">9687486729</a></div>
              <div>Instagram: <a href="https://www.instagram.com/fitbite.cafe" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }} className="footer-link-direct">@fitbite.cafe</a></div>
            </div>

            {/* Social Section */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.2rem' }}>
              <a 
                href="https://www.instagram.com/fitbite.cafe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon" 
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://wa.me/919687486729" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon" 
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ display: 'block' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2 — Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <a href="#" onClick={(e) => handleScrollTo(e, '#root')} className="footer-link">Home</a>
              <a href="#menu" onClick={(e) => handleScrollTo(e, '#menu')} className="footer-link">Menu</a>
              <a href="#calculator" onClick={(e) => handleScrollTo(e, '#calculator')} className="footer-link">BMI Calculator</a>
            </div>
          </div>

          {/* COLUMN 3 — Cafe Hours */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Cafe Hours</h4>
            <div className="hours-card" style={{
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '12px',
              padding: '1rem',
              maxWidth: '220px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.15rem' }}>Monday – Saturday</span>
                <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>5:00 PM – 11:30 PM</span>
              </div>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)', paddingTop: '0.75rem' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.15rem' }}>Sunday</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>5:00 AM – 11:30 AM</span>
                  <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>6:00 PM – 11:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 4 — Location */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Location</h4>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <MapPin size={16} style={{ color: 'var(--accent)', marginTop: '0.15rem', flexShrink: 0 }} />
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.45', margin: 0 }}>
                15, Viaan Business Hub,<br />
                Under HR Fitness,<br />
                Vatva, Ahmedabad,<br />
                Gujarat 382445
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '1.25rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '0.75rem',
          color: 'var(--text-muted)'
        }}>
          <p>© 2026 Fit Bite Cafe. All Rights Reserved.</p>
        </div>
      </div>

      <style>{`
        .social-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.01);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .social-icon:hover {
          color: var(--bg-darker);
          background-color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 0 10px rgba(0, 255, 127, 0.45);
        }
        .footer-link {
          color: var(--text-secondary);
          transition: color 0.2s ease, padding-left 0.2s ease;
          display: inline-block;
          width: fit-content;
        }
        .footer-link:hover {
          color: var(--accent);
          padding-left: 2px;
        }
      `}</style>
    </footer>
  );
}
