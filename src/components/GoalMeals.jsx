import React, { useState } from 'react';
import { Target, Shield, Heart, Zap, Check } from 'lucide-react';
import { MENU_ITEMS, SPECIFIC_IMAGES } from './NutritionMenu';

const GOALS = [
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    tagline: 'Caloric Deficit, High Satiety',
    icon: <Heart size={24} style={{ color: '#ec4899' }} />,
    color: 'rgba(236, 72, 153, 0.1)',
    border: 'rgba(236, 72, 153, 0.2)',
    themeColor: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.15)',
    itemIds: [6, 29],
    caloriesLabel: 'Low-Calorie Meal',
    benefits: [
      'High Protein',
      'Lower Calories',
      'Better Satiety'
    ]
  },
  {
    id: 'muscle-gain',
    title: 'Muscle Gain',
    tagline: 'Caloric Surplus, Hypertrophy Fuel',
    icon: <Zap size={24} style={{ color: 'var(--accent)' }} />,
    color: 'rgba(0, 255, 127, 0.1)',
    border: 'rgba(0, 255, 127, 0.2)',
    themeColor: 'var(--accent)',
    glowColor: 'rgba(0, 255, 127, 0.15)',
    itemIds: [28, 29, 25],
    benefits: [
      'High Protein',
      'Muscle Recovery',
      'Lean Mass Support'
    ]
  },
  {
    id: 'maintain-fitness',
    title: 'Maintain Fitness',
    tagline: 'Balanced Nutrition & Daily Vitality',
    icon: <Shield size={24} style={{ color: '#eab308' }} />,
    color: 'rgba(234, 179, 8, 0.1)',
    border: 'rgba(234, 179, 8, 0.2)',
    themeColor: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.15)',
    itemIds: [27, 3],
    benefits: [
      'Balanced Nutrition',
      'Daily Energy',
      'Sustainable Eating'
    ]
  },
  {
    id: 'energy-boost',
    title: 'Energy Boost',
    tagline: 'Quick Charge & Pre-Workout',
    icon: <Target size={24} style={{ color: '#3b82f6' }} />,
    color: 'rgba(59, 130, 246, 0.1)',
    border: 'rgba(59, 130, 246, 0.2)',
    themeColor: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    itemIds: [4, 8],
    benefits: [
      'Quick Energy',
      'Pre-Workout Friendly',
      'Refreshing'
    ]
  }
];

export default function GoalMeals({ addMultipleToCart, setView, setSelectedGoal }) {
  const [selectedGoalId, setSelectedGoalId] = useState(null);
  const [addedGoalId, setAddedGoalId] = useState(null);

  const getMealDetails = (itemIds) => {
    const items = itemIds.map(id => {
      const item = MENU_ITEMS.find(m => m.id === id);
      if (!item) return null;
      return {
        ...item,
        image: SPECIFIC_IMAGES[id] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=100&q=80'
      };
    }).filter(Boolean);

    const totalKcal = items.reduce((sum, item) => sum + (item.kcal || 0), 0);
    const totalProtein = items.reduce((sum, item) => sum + (item.protein || 0), 0);
    const totalCarbs = items.reduce((sum, item) => sum + (item.carbs || 0), 0);
    const totalFat = items.reduce((sum, item) => sum + (item.fat || 0), 0);
    const totalPrice = items.reduce((sum, item) => sum + (item.price || 0), 0);

    return {
      items,
      totalKcal,
      totalProtein,
      totalCarbs,
      totalFat,
      totalPrice
    };
  };

  const handleAddToCart = (e, itemIds, goalId, goalTitle) => {
    e.stopPropagation(); // prevent card selection toggle on button click
    if (addMultipleToCart) {
      addMultipleToCart(itemIds);
    }
    if (setSelectedGoal) {
      setSelectedGoal(goalTitle);
    }
    if (setView) {
      setView('cart');
    }
  };

  return (
    <section id="goals" style={{ backgroundColor: '#07080a', borderBottom: '1px solid var(--border-color)', padding: '6rem 0' }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Tailored Meal Packages
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            Fitness Goal Meals
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Choose your physical objective. Get instant premium meal combinations backed by high-protein ingredients and accurate macro targets.
          </p>
        </div>

        {/* Goal Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {GOALS.map((goal) => {
            const isSelected = selectedGoalId === goal.id;
            const details = getMealDetails(goal.itemIds);

            return (
              <div
                key={goal.id}
                className={`glass-premium goal-card ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedGoalId(prev => prev === goal.id ? null : goal.id)}
                style={{
                  borderRadius: '24px',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  border: isSelected ? `1px solid ${goal.themeColor}` : '1px solid var(--border-color)',
                  boxShadow: isSelected ? `0 20px 40px ${goal.glowColor}` : 'none',
                  cursor: isSelected ? 'default' : 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div>
                  {/* Icon Header */}
                  <div style={{
                    background: goal.color,
                    border: `1px solid ${goal.border}`,
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: isSelected ? `0 0 15px ${goal.themeColor}33` : 'none',
                    transition: 'all 0.4s ease'
                  }}>
                    {goal.icon}
                  </div>

                  {/* Header texts */}
                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '0.4rem' }}>
                    {goal.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500 }}>
                    {goal.tagline}
                  </p>

                  {/* Benefits List */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                    {goal.benefits.map((benefit, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <Check size={14} style={{ color: goal.themeColor, marginTop: '0.15rem', flexShrink: 0 }} />
                        <span style={{ fontWeight: isSelected ? 500 : 400 }}>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Recommended Meal Expansion Area */}
                  <div style={{
                    maxHeight: isSelected ? '1000px' : '0px',
                    opacity: isSelected ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
                    marginTop: isSelected ? '1.5rem' : '0',
                    borderTop: isSelected ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                    paddingTop: isSelected ? '1.5rem' : '0'
                  }}>
                    {/* Calories low-calorie badge for Weight Loss */}
                    {goal.caloriesLabel && (
                      <div style={{
                        display: 'inline-flex',
                        background: 'rgba(236, 72, 153, 0.1)',
                        border: '1px solid rgba(236, 72, 153, 0.2)',
                        color: '#ec4899',
                        borderRadius: '8px',
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {goal.caloriesLabel}
                      </div>
                    )}

                    {/* Meal Items Highlight List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        Recommended Combination
                      </span>
                      {details.items.map((item) => (
                        <div 
                          key={item.id} 
                          style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.75rem', 
                            padding: '0.6rem 0.8rem', 
                            background: 'rgba(255, 255, 255, 0.02)', 
                            border: `1px solid rgba(255, 255, 255, 0.06)`, 
                            borderRadius: '12px',
                            transition: 'all 0.3s ease'
                          }}
                          className="rec-item-card"
                        >
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            style={{ 
                              width: '40px', 
                              height: '40px', 
                              borderRadius: '8px', 
                              objectFit: 'cover',
                              border: `1px solid ${goal.themeColor}33`
                            }} 
                          />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: '0.825rem', fontWeight: 600, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {item.name}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                              {item.kcal} kcal | P: {item.protein}g | ₹{item.price}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Meal Combo Summary Card */}
                    <div style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.01)',
                      border: '1px solid rgba(255, 255, 255, 0.04)',
                      borderRadius: '16px',
                      padding: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.8rem' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Goal:</span>
                        <span style={{ fontWeight: 600, color: '#fff', marginLeft: 'auto' }}>{goal.title}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.8rem' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Total Calories:</span>
                        <span style={{ fontWeight: 600, color: '#fff', marginLeft: 'auto' }}>{details.totalKcal} kcal</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.8rem' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Total Protein:</span>
                        <span style={{ fontWeight: 600, color: 'var(--accent)', marginLeft: 'auto' }}>{details.totalProtein}g</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', paddingBottom: '0.4rem' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Carbs / Fats:</span>
                        <span style={{ fontWeight: 500, color: 'var(--text-secondary)', marginLeft: 'auto' }}>{details.totalCarbs}g C / {details.totalFat}g F</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', paddingTop: '0.5rem', borderTop: '1px dashed rgba(255, 255, 255, 0.08)' }}>
                        <span style={{ fontWeight: 600, color: '#fff' }}>Total Combo Price:</span>
                        <span style={{ fontWeight: 800, color: 'var(--accent)', fontSize: '0.95rem', marginLeft: 'auto' }}>₹{details.totalPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Button Section */}
                <div style={{ marginTop: '1.5rem' }}>
                  {isSelected ? (
                    <button
                      onClick={(e) => handleAddToCart(e, goal.itemIds, goal.id, goal.title)}
                      className="btn-primary"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        borderRadius: '12px',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        padding: '0.75rem',
                        cursor: 'pointer',
                        boxShadow: addedGoalId === goal.id ? '0 0 15px rgba(0, 255, 127, 0.3)' : `0 0 15px ${goal.themeColor}22`,
                        border: `1px solid ${addedGoalId === goal.id ? 'var(--accent)' : goal.themeColor}`,
                        backgroundColor: addedGoalId === goal.id ? 'var(--accent)' : goal.themeColor,
                        color: (goal.themeColor === '#3b82f6' && addedGoalId !== goal.id) ? '#fff' : '#000',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {addedGoalId === goal.id ? 'Added to Cart! 🛒' : 'Add Recommended Meal to Cart'}
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedGoalId(goal.id);
                      }}
                      className="btn-secondary"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        borderRadius: '12px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        padding: '0.75rem',
                        cursor: 'pointer'
                      }}
                    >
                      View Recommendation
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .goal-card {
          position: relative;
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .goal-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.15) !important;
        }
        .goal-card.active:hover {
          border-color: inherit !important;
          transform: translateY(-2px);
        }
        .rec-item-card:hover {
          background: rgba(255, 255, 255, 0.04) !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>
    </section>
  );
}
