import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Calendar, Sparkles } from 'lucide-react';

export default function Header({ view, setView }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Menu', href: '#menu' },
    { name: 'Goals', href: '#goals' },
    { name: 'Calculator', href: '#calculator' }
  ];

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (targetId === '#menu') {
      setView('menu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setView('home');
      setTimeout(() => {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50); // wait a moment for elements to mount
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-[#060709]/80 backdrop-blur-md border-b border-white/5'
            : 'py-6 bg-transparent'
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div className="container flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, '#root')}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span style={{ color: '#fff' }}>FIT</span>
            <span style={{ color: 'var(--accent)', textShadow: '0 0 10px rgba(0,255,127,0.3)' }}>BITE</span>
            <Sparkles size={16} className="text-glow" style={{ color: 'var(--accent)' }} />
          </a>

          {/* Desktop Nav */}
          <nav
            style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center',
            }}
            className="desktop-only"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  transition: 'color 0.3s',
                }}
                className="nav-item-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button & Menu Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-toggle"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                display: 'none',
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: isMobileMenuOpen ? 0 : '-100%',
          width: '80%',
          maxWidth: '320px',
          height: '100vh',
          backgroundColor: 'rgba(6, 7, 9, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderLeft: '1px solid rgba(255,255,255,0.05)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          padding: '6rem 2rem 2rem',
          transition: 'right 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#fff',
              }}
            >
              {link.name}
            </a>
          ))}

        </div>
      </div>

      {/* CSS overlay for responsive styling */}
      <style>{`
        @media (max-width: 991px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        .nav-item-link:hover {
          color: var(--accent) !important;
        }
        .nav-item-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-item-link:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
