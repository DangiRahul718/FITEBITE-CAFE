import React, { useState, useEffect, useRef } from 'react';
import { Award, Zap, Heart, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    // Left: Customer Transformation
    transformation: {
      name: 'Alexander V.',
      role: 'Staff Software Engineer',
      timeframe: '12-Week Transformation',
      quote: '"FiteBite eliminated the cognitive load of tracking macros. Syncing meal logs directly to my Whoop dashboard helped me break my energy crashes and drop body fat while gaining muscle."',
      routine: 'Zen Salmon Bowl + Custom Carb-Deficit Bowls',
      metrics: [
        { label: 'Afternoon Energy Level', before: 30, after: 95, color: 'var(--accent)' },
        { label: 'Deep Sleep Quality Score', before: 52, after: 88, color: '#3b82f6' },
        { label: 'Total Body Fat Ratio', before: 24, after: 14, color: '#ec4899' },
        { label: 'Lean Skeletal Muscle', before: 34, after: 38, color: '#eab308' }
      ]
    },
    // Right: Community Voice
    testimonial: {
      quote: "FiteBite is the first dining establishment that truly aligns with metabolic science. Their commitment to clean, non-inflammatory cooking oils and highly bioavailable ingredients is mathematically and culinarily remarkable.",
      name: "Dr. Marcus H.",
      role: "Biochemist & Metabolic Researcher",
      rating: 5,
      initials: "MH"
    }
  },
  {
    // Left: Customer Transformation
    transformation: {
      name: 'Sophia K.',
      role: 'Competitive Crossfit Athlete',
      timeframe: '8-Week Power Calibration',
      quote: '"My recovery was lagging until I synced my training volumes with FiteBite\'s hyperprotein menu plans. My nitrogen levels stabilized, and muscle soreness dropped by 50%."',
      routine: 'Hyperdrive Protein Plate + Keto Steak Frites',
      metrics: [
        { label: 'Physical Recovery Speed', before: 45, after: 90, color: 'var(--accent)' },
        { label: 'Lean Body Mass (kg)', before: 58, after: 62, color: '#3b82f6' },
        { label: 'Systemic Inflammation', before: 75, after: 25, color: '#ec4899' },
        { label: 'Weekly Power Output (W)', before: 280, after: 340, color: '#eab308' }
      ]
    },
    // Right: Community Voice
    testimonial: {
      quote: "Our training camp relies on FiteBite to deliver custom nutrient ratios daily. The integration with our wearable device outputs is a game-changer for our athletes' recovery speeds and cellular repair.",
      name: "Elena R.",
      role: "Founder, Apex Athletics",
      rating: 5,
      initials: "ER"
    }
  },
  {
    // Left: Customer Transformation
    transformation: {
      name: 'Marcus G.',
      role: 'Ventures Managing Director',
      timeframe: '6-Week Executive Reset',
      quote: '"FiteBite eliminated my afternoon brain fog. Having clean, non-inflammatory macro meals delivered straight to my desk kept my cellular energy peak and glucose response perfectly stable."',
      routine: 'Zen Salmon Bowl + Custom High-Protein Salads',
      metrics: [
        { label: 'Afternoon Cognitive Focus', before: 40, after: 92, color: 'var(--accent)' },
        { label: 'Daily Productivity Hours', before: 5, after: 9, color: '#3b82f6' },
        { label: 'Visceral Fat Index', before: 15, after: 9, color: '#ec4899' },
        { label: 'Systemic Recovery Score', before: 48, after: 85, color: '#eab308' }
      ]
    },
    // Right: Community Voice
    testimonial: {
      quote: "FiteBite is where I conduct all my executive meetings. Premium glassmorphic lounge design, culinary sophistication, and zero inflammatory fillers. No afternoon brain fog or energy dips.",
      name: "Ryan D.",
      role: "Managing Partner, Apex Ventures",
      rating: 5,
      initials: "RD"
    }
  }
];

export default function RealResults() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const autoplayRef = useRef(null);

  // Touch handlers for swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      handleNext();
    }, 8000); // 8 seconds per slide for premium feel
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    // Trigger bar animations on mount
    setAnimateProgress(true);
    return () => stopAutoplay();
  }, []);

  const changeSlide = (index) => {
    if (isTransitioning) return;
    stopAutoplay();
    setIsTransitioning(true);
    setAnimateProgress(false);
    setActiveSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
      setAnimateProgress(true);
    }, 600); // match transition duration
    
    startAutoplay();
  };

  const handlePrev = () => {
    const nextIdx = (activeSlide - 1 + SLIDES.length) % SLIDES.length;
    changeSlide(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeSlide + 1) % SLIDES.length;
    changeSlide(nextIdx);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX.current;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section 
      id="results" 
      style={{ 
        backgroundColor: '#07080a', 
        borderBottom: '1px solid var(--border-color)', 
        position: 'relative',
        overflow: 'hidden',
        padding: '8rem 0'
      }}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="bg-glow-spot glow-mesh" style={{ top: '20%', left: '50%', width: '600px', height: '600px', opacity: 0.35, transform: 'translateX(-50%)' }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* Unified Title */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Empirical Validation
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            Real Results. Real Voices.
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
            Biometric shifts from high performers paired directly with community insights on metabolic health.
          </p>
        </div>

        {/* Carousel Frame */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            borderRadius: '24px'
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Row */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              transform: `translateX(-${activeSlide * 100}%)`,
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {SLIDES.map((slide, idx) => {
              const trans = slide.transformation;
              const test = slide.testimonial;

              return (
                <div
                  key={idx}
                  style={{
                    width: '100%',
                    flexShrink: 0,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    padding: '0.5rem'
                  }}
                  className="results-slide-grid"
                >
                  {/* Left Side: Transformation card */}
                  <div
                    className="glass-premium"
                    style={{
                      borderRadius: '24px',
                      padding: '2.5rem',
                      boxShadow: 'var(--shadow-premium)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      border: '1px solid rgba(255,255,255,0.03)',
                      transition: 'transform 0.3s ease'
                    }}
                    className="results-card"
                  >
                    <div>
                      {/* Name & Timeframe */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div>
                          <h4 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                            {trans.name}
                          </h4>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                            {trans.role}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)' }}>
                          <Award size={18} />
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {trans.timeframe}
                          </span>
                        </div>
                      </div>

                      {/* Quote */}
                      <p style={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        fontStyle: 'italic',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '2rem',
                        position: 'relative',
                        paddingLeft: '1rem',
                        borderLeft: '3px solid var(--accent)'
                      }}>
                        {trans.quote}
                      </p>

                      {/* Routine */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginBottom: '2rem' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Routine Diet</span>
                        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>{trans.routine}</span>
                      </div>
                    </div>

                    {/* Sync badges */}
                    <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '1.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        <Zap size={14} style={{ color: 'var(--accent)' }} />
                        <span>Syncs with Whoop</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        <Heart size={14} style={{ color: '#ec4899' }} />
                        <span>Bio-analyzed Plan</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Biometrics + Testimonial unified card */}
                  <div
                    className="glass-premium"
                    style={{
                      borderRadius: '24px',
                      padding: '2.5rem',
                      boxShadow: 'var(--shadow-premium)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      border: '1px solid rgba(255,255,255,0.03)'
                    }}
                    className="results-card"
                  >
                    {/* Top: Biometric Shift Indicators */}
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Biometric Shift
                      </h4>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {trans.metrics.map((metric, mIdx) => {
                          const isScore = metric.label.includes('Score') || metric.label.includes('Level') || metric.label.includes('Speed') || metric.label.includes('Focus') || metric.label.includes('Recovery') || metric.label.includes('Muscle');
                          const suffix = isScore ? '%' : metric.label.includes('Ratio') ? '%' : metric.label.includes('Fat') ? '%' : metric.label.includes('Mass') ? 'kg' : metric.label.includes('Hours') ? 'h' : 'W';
                          
                          const targetVal = metric.after;
                          const beforeVal = metric.before;
                          
                          // Animate progress bar to full target only if the slide is active
                          const displayBeforePct = activeSlide === idx && animateProgress ? `${metric.label.includes('Output') ? (beforeVal/400)*100 : beforeVal}%` : '0%';
                          const displayAfterPct = activeSlide === idx && animateProgress ? `${metric.label.includes('Output') ? (targetVal/400)*100 : targetVal}%` : '0%';

                          return (
                            <div key={mIdx}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                                <span style={{ color: '#fff', fontWeight: 600 }}>{metric.label}</span>
                                <span>
                                  Before: <strong style={{ color: '#ef4444' }}>{beforeVal}{suffix}</strong> → After: <strong style={{ color: 'var(--accent)' }}>{targetVal}{suffix}</strong>
                                </span>
                              </div>

                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                {/* Before progress line */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <span style={{ width: '40px', fontSize: '0.65rem', color: 'var(--text-muted)' }}>Before</span>
                                  <div style={{ height: '3px', background: 'rgba(255,255,255,0.03)', borderRadius: '1.5px', flexGrow: 1, overflow: 'hidden' }}>
                                    <div 
                                      style={{
                                        height: '100%',
                                        width: displayBeforePct,
                                        backgroundColor: '#ef4444',
                                        transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                                      }}
                                    />
                                  </div>
                                </div>
                                {/* After progress line */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <span style={{ width: '40px', fontSize: '0.65rem', color: 'var(--text-muted)' }}>After</span>
                                  <div style={{ height: '5px', background: 'rgba(255,255,255,0.03)', borderRadius: '2.5px', flexGrow: 1, overflow: 'hidden' }}>
                                    <div 
                                      style={{
                                        height: '100%',
                                        width: displayAfterPct,
                                        backgroundColor: metric.color,
                                        boxShadow: `0 0 8px ${metric.color}25`,
                                        transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom: Testimonial Bubble */}
                    <div 
                      style={{ 
                        borderTop: '1px solid rgba(255,255,255,0.04)', 
                        paddingTop: '1.5rem',
                        position: 'relative'
                      }}
                    >
                      <Quote size={40} style={{
                        position: 'absolute',
                        top: '15px',
                        left: '5px',
                        color: 'rgba(255,255,255,0.015)',
                        pointerEvents: 'none'
                      }} />
                      
                      {/* Stars */}
                      <div style={{ display: 'flex', gap: '0.15rem', marginBottom: '0.75rem' }}>
                        {Array.from({ length: test.rating }).map((_, sIdx) => (
                          <Star key={sIdx} size={13} fill="var(--accent)" stroke="var(--accent)" />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#fff',
                        lineHeight: 1.5,
                        fontWeight: 500,
                        fontStyle: 'italic',
                        marginBottom: '1.25rem'
                      }}>
                        "{test.quote}"
                      </p>

                      {/* Bio Details */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, rgba(0, 255, 127, 0.15) 0%, rgba(5, 149, 105, 0.15) 100%)',
                          border: '1px solid var(--accent)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          color: 'var(--accent)',
                          fontSize: '0.85rem'
                        }}>
                          {test.initials}
                        </div>
                        <div>
                          <h5 style={{ fontSize: '0.875rem', color: '#fff', margin: 0, fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                            {test.name}
                          </h5>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                            {test.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Navigation Buttons & Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
          marginTop: '3.5rem'
        }}>
          <button
            onClick={handlePrev}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            className="ctrl-btn"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Dot Indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => changeSlide(i)}
                style={{
                  width: activeSlide === i ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: activeSlide === i ? 'var(--accent)' : 'rgba(255,255,255,0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            className="ctrl-btn"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>

      <style>{`
        .ctrl-btn:hover {
          border-color: var(--accent) !important;
          background: rgba(0, 255, 127, 0.05) !important;
          color: var(--accent) !important;
          transform: scale(1.05);
        }
        .results-card:hover {
          border-color: rgba(0, 255, 127, 0.15) !important;
          box-shadow: 0 20px 40px rgba(0, 255, 127, 0.02) !important;
        }
        @media (max-width: 991px) {
          .results-slide-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
