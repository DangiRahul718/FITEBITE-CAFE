import React, { useState, useEffect } from 'react';
import { Target, Activity, Flame, ChevronRight } from 'lucide-react';

const SUGGESTED_MEALS = {
  'weight-loss': [
    { name: 'Protein White Bread Pizza', kcal: 280, p: 8, link: '#menu' },
    { name: 'Grilled Veg Sandwich', kcal: 220, p: 6, link: '#menu' }
  ],
  'maintenance': [
    { name: 'Protein Paneer Sandwich', kcal: 320, p: 12, link: '#menu' },
    { name: 'Combo 1 (Veg Sandwich + Coffee + Fries)', kcal: 670, p: 13.5, link: '#menu' }
  ],
  'muscle-gain': [
    { name: 'Double Cheese Burger', kcal: 480, p: 18, link: '#menu' },
    { name: 'Combo 5 (Paneer Burger + Fries + Coffee)', kcal: 930, p: 24.2, link: '#menu' }
  ]
};

export default function BmiCalculator() {
  const [weight, setWeight] = useState(72); // kg
  const [height, setHeight] = useState(175); // cm
  const [activity, setActivity] = useState(1.55); // moderate activity factor
  const [goal, setGoal] = useState('maintenance'); // weight-loss, maintenance, muscle-gain

  const [bmi, setBmi] = useState(23.5);
  const [bmiStatus, setBmiStatus] = useState('Normal');
  const [targetCalories, setTargetCalories] = useState(2400);

  // Recalculate BMI and daily calorie needs
  useEffect(() => {
    // BMI = weight(kg) / height(m)^2
    const heightInMeters = height / 100;
    const computedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(parseFloat(computedBmi));

    // Determine status
    if (computedBmi < 18.5) setBmiStatus('Underweight');
    else if (computedBmi >= 18.5 && computedBmi < 25) setBmiStatus('Normal');
    else if (computedBmi >= 25 && computedBmi < 30) setBmiStatus('Overweight');
    else setBmiStatus('Obese');

    // BMR approximation: Mifflin-St Jeor (assuming average age 28, male/female blend factor)
    const bmr = (10 * weight) + (6.25 * height) - (5 * 28) + 5;
    const tdee = Math.round(bmr * activity);

    // Calculate calorie targets based on goals
    let target = tdee;
    if (goal === 'weight-loss') target = tdee - 450;
    if (goal === 'muscle-gain') target = tdee + 350;

    setTargetCalories(target);
  }, [weight, height, activity, goal]);

  const handleScrollToMenu = (e) => {
    e.preventDefault();
    const target = document.querySelector('#menu');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" style={{ backgroundColor: '#090a0f', borderBottom: '1px solid var(--border-color)', position: 'relative' }}>
      <div className="bg-glow-spot glow-mesh" style={{ bottom: '10%', left: '5%', width: '500px', height: '500px', opacity: 0.6 }} />
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Biometric Calibration
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            BMI & Calorie Calculator
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Calculate your body mass index and pinpoint your target daily caloric intake instantly. Receive automated meal pairings matching your objective.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start'
        }}>
          {/* Inputs Panel (Left) */}
          <div className="glass-premium" style={{ borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Weight Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#fff', fontWeight: 600 }}>Weight</span>
                <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.1rem' }}>{weight} kg</span>
              </div>
              <input
                type="range"
                min="40"
                max="150"
                value={weight}
                onChange={(e) => setWeight(parseInt(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--accent)',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                <span>40 kg</span>
                <span>150 kg</span>
              </div>
            </div>

            {/* Height Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#fff', fontWeight: 600 }}>Height</span>
                <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.1rem' }}>{height} cm</span>
              </div>
              <input
                type="range"
                min="120"
                max="220"
                value={height}
                onChange={(e) => setHeight(parseInt(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--accent)',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                <span>120 cm</span>
                <span>220 cm</span>
              </div>
            </div>

            {/* Activity Level Selector */}
            <div>
              <span style={{ color: '#fff', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>Activity Level</span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <button
                  onClick={() => setActivity(1.2)}
                  className={`calc-select-btn ${activity === 1.2 ? 'active' : ''}`}
                >
                  Sedentary
                </button>
                <button
                  onClick={() => setActivity(1.375)}
                  className={`calc-select-btn ${activity === 1.375 ? 'active' : ''}`}
                >
                  Light Activity
                </button>
                <button
                  onClick={() => setActivity(1.55)}
                  className={`calc-select-btn ${activity === 1.55 ? 'active' : ''}`}
                >
                  Moderate
                </button>
                <button
                  onClick={() => setActivity(1.725)}
                  className={`calc-select-btn ${activity === 1.725 ? 'active' : ''}`}
                >
                  Active Athlete
                </button>
              </div>
            </div>

            {/* Target Goal Selector */}
            <div>
              <span style={{ color: '#fff', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>Fitness Goal</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button
                  onClick={() => setGoal('weight-loss')}
                  className={`calc-select-btn-wide ${goal === 'weight-loss' ? 'active' : ''}`}
                >
                  Caloric Deficit (Weight Loss)
                </button>
                <button
                  onClick={() => setGoal('maintenance')}
                  className={`calc-select-btn-wide ${goal === 'maintenance' ? 'active' : ''}`}
                >
                  Maintain Equilibrium
                </button>
                <button
                  onClick={() => setGoal('muscle-gain')}
                  className={`calc-select-btn-wide ${goal === 'muscle-gain' ? 'active' : ''}`}
                >
                  Caloric Surplus (Muscle Gain)
                </button>
              </div>
            </div>

          </div>

          {/* Results Panel (Right) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* BMI & Calorie Display Card */}
            <div className="glass-premium" style={{ borderRadius: '24px', padding: '2.5rem', border: '1px solid rgba(0,255,127,0.15)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                {/* BMI Circle */}
                <div style={{ textAlign: 'center', borderRight: '1px solid var(--border-color)', paddingRight: '1.5rem' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                    {bmi}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.4rem', fontWeight: 600 }}>
                    BMI Score
                  </div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '10px',
                    marginTop: '0.5rem',
                    display: 'inline-block'
                  }}>
                    {bmiStatus}
                  </span>
                </div>

                {/* Calorie Goal */}
                <div style={{ textAlign: 'center', paddingLeft: '0.5rem' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#f59e0b', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                    {targetCalories}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.6rem', fontWeight: 600 }}>
                    Target Cal/Day
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.3rem' }}>
                    kcal to reach objective
                  </span>
                </div>
              </div>

              {/* BMI Gauge bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                  <span>18.5</span>
                  <span>25.0</span>
                  <span>30.0</span>
                </div>
                <div style={{ height: '8px', background: 'linear-gradient(to right, #60a5fa 0%, #34d399 30%, #fbbf24 65%, #f87171 100%)', borderRadius: '4px', position: 'relative' }}>
                  {/* Gauge needle indicator based on BMI */}
                  <div style={{
                    position: 'absolute',
                    top: '-4px',
                    left: `${Math.min(Math.max(((bmi - 15) / 20) * 100, 5), 95)}%`,
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#fff',
                    border: '3px solid var(--bg-dark)',
                    borderRadius: '50%',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 0 10px rgba(255,255,255,0.5)',
                    transition: 'left 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                  <span>Underweight</span>
                  <span>Healthy</span>
                  <span>Overweight</span>
                  <span>Obese</span>
                </div>
              </div>
            </div>

            {/* Custom Suggested Meals */}
            <div className="glass-premium" style={{ borderRadius: '24px', padding: '2.2rem' }}>
              <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1.2rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Activity size={16} style={{ color: 'var(--accent)' }} />
                <span>Recommended Meal Pairings</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {SUGGESTED_MEALS[goal].map((meal, index) => (
                  <a
                    key={index}
                    href={meal.link}
                    onClick={handleScrollToMenu}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      padding: '1rem 1.2rem',
                      transition: 'all 0.3s'
                    }}
                    className="rec-meal-row"
                  >
                    <div>
                      <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>{meal.name}</span>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                        High Micronutrient Formula
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{meal.kcal} kcal</span>
                      <ChevronRight size={14} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .calc-select-btn {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-secondary);
          padding: 0.6rem 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .calc-select-btn:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.15);
        }
        .calc-select-btn.active {
          background: rgba(0, 255, 127, 0.08);
          border-color: var(--accent);
          color: var(--accent);
        }
        .calc-select-btn-wide {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-secondary);
          padding: 0.75rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          text-align: left;
          transition: all 0.3s;
        }
        .calc-select-btn-wide:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.15);
        }
        .calc-select-btn-wide.active {
          background: rgba(0, 255, 127, 0.08);
          border-color: var(--accent);
          color: var(--accent);
        }
        .rec-meal-row:hover {
          border-color: var(--accent) !important;
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
