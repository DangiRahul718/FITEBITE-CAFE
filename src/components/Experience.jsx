import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Leaf, Flame, Compass } from 'lucide-react';
import cafeInterior from '../assets/cafe_interior.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in left visual container
      gsap.fromTo(leftColRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Fade in right details container
      gsap.fromTo(rightColRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Leaf size={20} style={{ color: 'var(--accent)' }} />,
      title: 'Freshly Prepared Daily',
      desc: 'Every meal is prepared fresh using quality ingredients.'
    },
    {
      icon: <Flame size={20} style={{ color: 'var(--accent)' }} />,
      title: 'High Protein Options',
      desc: 'Protein-rich meals, sandwiches, pizzas, and shakes designed for fitness-focused customers.'
    },
    {
      icon: <Compass size={20} style={{ color: 'var(--accent)' }} />,
      title: 'Dine-In & Pickup Available',
      desc: 'Enjoy your meal at the cafe or place an order for pickup.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      style={{
        backgroundColor: '#090a0f',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
          gap: '5rem'
        }}>
          {/* Visual Showcase (Left) */}
          <div
            ref={leftColRef}
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-premium)'
            }}
            className="glass-premium"
          >
            <img
              src={cafeInterior}
              alt="FiteBite Cozy Cafe Interior"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transform: 'scale(1.02)',
                transition: 'transform 0.8s'
              }}
              className="experience-img"
            />
            {/* Visual overlay tag */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              background: 'rgba(6,7,9,0.85)',
              backdropFilter: 'blur(8px)',
              padding: '0.8rem 1.2rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <ShieldCheck size={18} style={{ color: 'var(--accent)' }} />
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff' }}>Cozy Cafe Lounge</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Welcoming & Comfortable</div>
              </div>
            </div>
          </div>

          {/* Story Details (Right) */}
          <div ref={rightColRef} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              THE FITEBITE CONCEPT
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              lineHeight: 1.1
            }}>
              Healthy Food. Great Taste. Comfortable Space.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1rem' }}>
              FiteBite Cafe is a place where you can enjoy fresh food, high-protein meals, and a comfortable environment. Whether you're coming after a workout, meeting friends, or grabbing a quick meal, we focus on quality ingredients and great taste.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {features.map((feat, index) => (
                <div key={index} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{
                    background: 'rgba(0, 255, 127, 0.05)',
                    border: '1px solid rgba(0, 255, 127, 0.15)',
                    padding: '0.75rem',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {feat.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                      {feat.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .experience-img:hover {
          transform: scale(1.05) !important;
        }
      `}</style>
    </section>
  );
}
