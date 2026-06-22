import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Flame, Trophy, ShieldAlert } from 'lucide-react';
import heroBowl from '../assets/hero_bowl.png';

export default function Hero({ setView }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    // GSAP Entry Animation
    const ctx = gsap.context(() => {
      // Fade in background glow
      gsap.fromTo('.bg-glow-spot', 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 2, ease: 'power3.out' }
      );

      // Animate titles and descriptions
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.fromTo(titleRef.current.children, 
        { y: 60, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, delay: 0.2 }
      );

      tl.fromTo(descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.8'
      );

      tl.fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.6'
      );

      // Animate center plate image
      gsap.fromTo(imageRef.current,
        { scale: 0.8, opacity: 0, rotate: -20 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1.8, ease: 'elastic.out(1, 0.75)' }
      );

      // Animate floating stats indicators
      statsRef.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(el,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, delay: 1 + index * 0.2, ease: 'back.out(1.7)' }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
        }
      }, 50);
    }
  };

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'radial-gradient(circle at 10% 20%, #0c0e14 0%, #060709 100%)',
        padding: '8rem 0 4rem',
        overflow: 'hidden'
      }}
      id="hero"
    >
      {/* Background Mesh Glows */}
      <div className="bg-glow-spot glow-mesh" style={{ top: '10%', left: '5%', width: '600px', height: '600px', opacity: 0.8 }} />
      <div className="bg-glow-spot glow-mesh" style={{ bottom: '-10%', right: '-10%', width: '800px', height: '800px', opacity: 0.6, background: 'radial-gradient(circle, rgba(0, 255, 127, 0.05) 0%, transparent 70%)' }} />

      {/* Cyberpunk Grid Overlay */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.15 }} />

      <div className="container" style={{ position: 'relative', zIndex: 5, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
          gap: '4rem'
        }}>
          {/* Hero Content */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(0, 255, 127, 0.08)',
              border: '1px solid rgba(0, 255, 127, 0.2)',
              borderRadius: '20px',
              padding: '0.4rem 1rem',
              marginBottom: '1.5rem'
            }}>
              <Trophy size={14} style={{ color: 'var(--accent)' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Fresh & Healthy Fitness Dining
              </span>
            </div>

            <div ref={titleRef}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 1.05,
                fontWeight: 800,
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                Fit Bite <span className="grad-text-green">Cafe.</span>
              </h1>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 1.05,
                fontWeight: 800,
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-heading)'
              }}>
                High Protein <span style={{ color: '#fff' }}>Kitchen.</span>
              </h1>
            </div>

            <p ref={descRef} style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              maxWidth: '480px',
              lineHeight: 1.5
            }}>
              Welcome to Fit Bite Cafe — your premium fitness kitchen and luxury lounge. We serve freshly prepared, chef-crafted high-protein meals, sandwiches, pizzas, and shakes. Available daily for healthy dine-in and quick pickup.
            </p>

            {/* Price Badge Highlight */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(0, 255, 127, 0.08)',
              border: '1px solid rgba(0, 255, 127, 0.2)',
              borderRadius: '8px',
              padding: '0.4rem 0.8rem',
              marginBottom: '1.5rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--accent)'
            }}>
              Healthy Meals Starting From ₹60
            </div>

            <div ref={ctaRef} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <a href="#menu" onClick={(e) => handleScrollTo(e, '#menu')} className="btn-primary">
                <span>Explore Smart Menu</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Real Menu Highlights */}
            <div style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              borderLeft: '2.5px solid var(--accent)',
              paddingLeft: '0.75rem',
              lineHeight: 1.4
            }}>
              <strong>Bestsellers:</strong> Whey Protein Shake • Protein Paneer Sandwich • Protein Brown Bread Pizza • High Protein Specials
            </div>

            {/* Service Pillars Checkmarks Row */}
            <div style={{ 
              display: 'flex', 
              gap: '1.2rem 1.5rem', 
              flexWrap: 'wrap', 
              marginTop: '1.5rem', 
              borderTop: '1px solid rgba(255,255,255,0.05)', 
              paddingTop: '1.5rem' 
            }}>
              {[
                'High Protein Meals',
                'Healthy Food Options',
                'Freshly Prepared Daily',
                'Dine-In & Pickup Available'
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 800 }}>✓</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual Showcase */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Immersive Rotating Frame */}
            <div style={{
              position: 'relative',
              width: '85%',
              maxWidth: '450px',
              aspectRatio: '1',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 255, 127, 0.04) 0%, rgba(255, 255, 255, 0.01) 80%)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                ref={imageRef}
                src={heroBowl}
                alt="Gourmet Salmon Bowl"
                style={{
                  width: '90%',
                  height: '90%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.8))'
                }}
              />

              {/* Floating Macro Indicators */}
              <div
                ref={(el) => (statsRef.current[0] = el)}
                className="floating glass"
                style={{
                  position: 'absolute',
                  top: '10%',
                  right: '-5%',
                  padding: '0.6rem 1rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: 'var(--shadow-premium)'
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Protein</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>42g</div>
                </div>
              </div>

              <div
                ref={(el) => (statsRef.current[1] = el)}
                className="floating-delayed glass"
                style={{
                  position: 'absolute',
                  bottom: '15%',
                  left: '-10%',
                  padding: '0.6rem 1rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: 'var(--shadow-premium)'
                }}
              >
                <Flame size={16} style={{ color: '#f59e0b' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Energy</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>520 kcal</div>
                </div>
              </div>

              <div
                ref={(el) => (statsRef.current[2] = el)}
                className="floating glass"
                style={{
                  position: 'absolute',
                  bottom: '5%',
                  right: '15%',
                  padding: '0.5rem 0.8rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <span>Carbs: <strong>38g</strong></span>
                <span style={{ opacity: 0.3 }}>|</span>
                <span>Fats: <strong>16g</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
