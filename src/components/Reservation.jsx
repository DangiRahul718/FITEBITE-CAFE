import React, { useState } from 'react';
import { Calendar, User, Clock, ShieldCheck, Armchair } from 'lucide-react';

const SEATING_INFO = {
  v1: { name: 'VIP Booth V1', category: 'vip', desc: 'Adaptogenic oxygen supply, blue-light therapy, and HEPA filter active.' },
  v2: { name: 'VIP Booth V2', category: 'vip', desc: 'Adaptogenic oxygen supply, blue-light therapy, and HEPA filter active.' },
  v3: { name: 'VIP Booth V3', category: 'vip', desc: 'Adaptogenic oxygen supply, blue-light therapy, and HEPA filter active.' },
  w1: { name: 'Window Lounge W1', category: 'lounge', desc: 'Ergonomic chairs with direct view of the biophilic plant garden.' },
  w2: { name: 'Window Lounge W2', category: 'lounge', desc: 'Ergonomic chairs with direct view of the biophilic plant garden.' },
  w3: { name: 'Window Lounge W3', category: 'lounge', desc: 'Ergonomic chairs with direct view of the biophilic plant garden.' },
  b1: { name: 'Bio-Bar Seat B1', category: 'bar', desc: 'Front-row seat at the chef bar with a live macro-ingredient display screen.' },
  b2: { name: 'Bio-Bar Seat B2', category: 'bar', desc: 'Front-row seat at the chef bar with a live macro-ingredient display screen.' },
  b3: { name: 'Bio-Bar Seat B3', category: 'bar', desc: 'Front-row seat at the chef bar with a live macro-ingredient display screen.' }
};

const TIME_SLOTS = ['8:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '6:00 PM', '7:30 PM', '9:00 PM'];

export default function Reservation() {
  const [selectedTableId, setSelectedTableId] = useState('v1');
  const [selectedDate, setSelectedDate] = useState(0); // day offset
  const [selectedTime, setSelectedTime] = useState('6:00 PM');
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [diet, setDiet] = useState('none');

  const selectedSeatDetails = SEATING_INFO[selectedTableId];

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      dateNum: d.getDate(),
      offset: i
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation Confirmed!\nGuest: ${name}\nSeating Sanctuary: ${selectedSeatDetails.name}\nTime: ${days[selectedDate].dayName} at ${selectedTime}\nDiet Plan: ${diet}`);
    setName('');
    setEmail('');
  };

  return (
    <section id="reservation" style={{ backgroundColor: '#07080a', borderBottom: '1px solid var(--border-color)', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Exclusive Lounge Bookings
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            Reserve A Table
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Guarantee your placement in our premium wellness spaces. Experience nutrition-focused table services with biometric integrations.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Seating Floor Plan (Left) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, display: 'block', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                01. Interactive Seating Layout
              </span>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Click on a highlighted glowing table layout node to claim it. Selected: <strong style={{ color: 'var(--accent)' }}>{selectedSeatDetails.name}</strong>
              </p>

              {/* Interactive Floor Plan Map */}
              <div className="glass-premium" style={{ borderRadius: '20px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'center' }}>
                <svg viewBox="0 0 400 240" width="100%" style={{ height: 'auto', maxHeight: '240px' }}>
                  {/* Floor Grid Outline */}
                  <rect x="10" y="10" width="380" height="220" rx="10" fill="rgba(255,255,255,0.005)" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  
                  {/* Category Headers */}
                  <text x="70" y="35" fill="var(--text-muted)" fontSize="9" textAnchor="middle" letterSpacing="0.05em" fontWeight="700">VIP BOOTHS</text>
                  <text x="200" y="35" fill="var(--text-muted)" fontSize="9" textAnchor="middle" letterSpacing="0.05em" fontWeight="700">WINDOW LOUNGE</text>
                  <text x="330" y="35" fill="var(--text-muted)" fontSize="9" textAnchor="middle" letterSpacing="0.05em" fontWeight="700">BIO-BAR</text>

                  {/* VIP Wellness Booths V1, V2, V3 */}
                  {/* V1 */}
                  <g className={`map-table-node ${selectedTableId === 'v1' ? 'selected' : ''}`} onClick={() => setSelectedTableId('v1')} style={{ cursor: 'pointer' }}>
                    <rect x="35" y="60" width="70" height="35" rx="6" className="rect-glow" />
                    <text x="70" y="81" className="table-txt">V1</text>
                  </g>
                  {/* V2 */}
                  <g className={`map-table-node ${selectedTableId === 'v2' ? 'selected' : ''}`} onClick={() => setSelectedTableId('v2')} style={{ cursor: 'pointer' }}>
                    <rect x="35" y="110" width="70" height="35" rx="6" className="rect-glow" />
                    <text x="70" y="131" className="table-txt">V2</text>
                  </g>
                  {/* V3 */}
                  <g className={`map-table-node ${selectedTableId === 'v3' ? 'selected' : ''}`} onClick={() => setSelectedTableId('v3')} style={{ cursor: 'pointer' }}>
                    <rect x="35" y="160" width="70" height="35" rx="6" className="rect-glow" />
                    <text x="70" y="181" className="table-txt">V3</text>
                  </g>

                  {/* Window Lounge Tables W1, W2, W3 (Circles) */}
                  {/* W1 */}
                  <g className={`map-table-node ${selectedTableId === 'w1' ? 'selected' : ''}`} onClick={() => setSelectedTableId('w1')} style={{ cursor: 'pointer' }}>
                    <circle cx="200" cy="77" r="20" className="rect-glow" />
                    <text x="200" y="80" className="table-txt">W1</text>
                  </g>
                  {/* W2 */}
                  <g className={`map-table-node ${selectedTableId === 'w2' ? 'selected' : ''}`} onClick={() => setSelectedTableId('w2')} style={{ cursor: 'pointer' }}>
                    <circle cx="200" cy="127" r="20" className="rect-glow" />
                    <text x="200" y="130" className="table-txt">W2</text>
                  </g>
                  {/* W3 */}
                  <g className={`map-table-node ${selectedTableId === 'w3' ? 'selected' : ''}`} onClick={() => setSelectedTableId('w3')} style={{ cursor: 'pointer' }}>
                    <circle cx="200" cy="177" r="20" className="rect-glow" />
                    <text x="200" y="180" className="table-txt">W3</text>
                  </g>

                  {/* Bio-Bar Seats B1, B2, B3 (Bar counter line + small stools) */}
                  {/* Bar Counter Line */}
                  <line x1="330" y1="50" x2="330" y2="190" stroke="rgba(255,255,255,0.08)" strokeWidth="6" strokeLinecap="round" />
                  {/* B1 */}
                  <g className={`map-table-node ${selectedTableId === 'b1' ? 'selected' : ''}`} onClick={() => setSelectedTableId('b1')} style={{ cursor: 'pointer' }}>
                    <circle cx="350" cy="70" r="12" className="rect-glow" />
                    <text x="350" y="73" className="table-txt" fontSize="8">B1</text>
                  </g>
                  {/* B2 */}
                  <g className={`map-table-node ${selectedTableId === 'b2' ? 'selected' : ''}`} onClick={() => setSelectedTableId('b2')} style={{ cursor: 'pointer' }}>
                    <circle cx="350" cy="120" r="12" className="rect-glow" />
                    <text x="350" y="123" className="table-txt" fontSize="8">B2</text>
                  </g>
                  {/* B3 */}
                  <g className={`map-table-node ${selectedTableId === 'b3' ? 'selected' : ''}`} onClick={() => setSelectedTableId('b3')} style={{ cursor: 'pointer' }}>
                    <circle cx="350" cy="170" r="12" className="rect-glow" />
                    <text x="350" y="173" className="table-txt" fontSize="8">B3</text>
                  </g>
                </svg>
              </div>

              {/* Selected Seating description card */}
              <div className="glass" style={{ borderRadius: '12px', padding: '1rem', border: '1px solid rgba(255,255,255,0.04)', marginTop: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Armchair size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>{selectedSeatDetails.name}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{selectedSeatDetails.desc}</p>
                </div>
              </div>

            </div>

            {/* Step 2: Date Grid */}
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, display: 'block', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                02. Select Date
              </span>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '0.5rem'
              }}>
                {days.map(day => (
                  <button
                    key={day.offset}
                    onClick={() => setSelectedDate(day.offset)}
                    className={`date-btn-box ${selectedDate === day.offset ? 'active' : ''}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: selectedDate === day.offset ? 'rgba(0,255,127,0.08)' : 'rgba(255,255,255,0.01)',
                      border: '1px solid',
                      borderColor: selectedDate === day.offset ? 'var(--accent)' : 'rgba(255,255,255,0.05)',
                      borderRadius: '12px',
                      padding: '0.75rem 0.25rem',
                      cursor: 'pointer',
                      color: selectedDate === day.offset ? 'var(--accent)' : '#fff',
                      transition: 'all 0.3s'
                    }}
                  >
                    <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.2rem' }}>{day.dayName}</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>{day.dateNum}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Time Picker & Form Panel (Right) */}
          <div className="glass-premium" style={{ borderRadius: '24px', padding: '2.5rem', boxShadow: 'var(--shadow-premium)' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Step 3: Time Slot */}
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, display: 'block', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                  03. Time Schedule
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {TIME_SLOTS.map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      style={{
                        background: selectedTime === time ? 'var(--accent)' : 'rgba(255,255,255,0.02)',
                        border: '1px solid',
                        borderColor: selectedTime === time ? 'var(--accent)' : 'rgba(255,255,255,0.05)',
                        borderRadius: '8px',
                        color: selectedTime === time ? 'var(--bg-darker)' : 'var(--text-secondary)',
                        padding: '0.4rem 0.8rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                      className="time-slot-btn"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Details Form */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  04. Guest Authentication
                </span>

                {/* Name Input */}
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                    <User size={16} />
                  </span>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255,255,255,0.01)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    className="form-text-input"
                  />
                </div>

                {/* Email Input */}
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                    <Calendar size={16} />
                  </span>
                  <input
                    type="email"
                    placeholder="Security Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255,255,255,0.01)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    className="form-text-input"
                  />
                </div>

                {/* Dietary Restriction selector */}
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                    Dietary Focus Preference
                  </label>
                  <select
                    value={diet}
                    onChange={(e) => setDiet(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(20,24,33,1)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      padding: '0.75rem 1rem',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    <option value="none">No Restrictions (Curated Menu Choice)</option>
                    <option value="high-protein">Hypertrophy (High Protein Focus)</option>
                    <option value="ketogenic">Ketogenic (Strict Low Carb)</option>
                    <option value="plant-based">Plant-Based (Cruelty-Free Vegan)</option>
                    <option value="gluten-free">Celiac Friendly (Gluten Free)</option>
                  </select>
                </div>

              </div>

              {/* Submit */}
              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.9rem', justifyContent: 'center', borderRadius: '12px', marginTop: '0.5rem' }}>
                <ShieldCheck size={16} />
                <span>Confirm VIP Table Booking</span>
              </button>

            </form>
          </div>
        </div>

      </div>

      <style>{`
        .map-table-node {
          transition: all 0.3s;
        }
        .map-table-node .rect-glow {
          fill: rgba(255, 255, 255, 0.01);
          stroke: rgba(255, 255, 255, 0.08);
          stroke-width: 1.5;
          transition: all 0.3s;
        }
        .map-table-node .table-txt {
          fill: var(--text-secondary);
          font-size: 10px;
          font-weight: 700;
          font-family: var(--font-heading);
          text-anchor: middle;
          transition: all 0.3s;
          pointer-events: none;
        }
        .map-table-node:hover .rect-glow {
          stroke: var(--accent);
          fill: rgba(0, 255, 127, 0.03);
          filter: drop-shadow(0 0 4px rgba(0, 255, 127, 0.2));
        }
        .map-table-node:hover .table-txt {
          fill: #fff;
        }
        .map-table-node.selected .rect-glow {
          stroke: var(--accent);
          fill: rgba(0, 255, 127, 0.12);
          stroke-width: 2;
          filter: drop-shadow(0 0 8px rgba(0, 255, 127, 0.4));
        }
        .map-table-node.selected .table-txt {
          fill: var(--accent);
          font-size: 11px;
        }
        .date-btn-box:hover {
          border-color: var(--accent) !important;
          color: var(--accent) !important;
        }
        .time-slot-btn:hover {
          border-color: var(--accent) !important;
          color: #fff !important;
        }
        .form-text-input:focus {
          border-color: var(--accent) !important;
          box-shadow: 0 0 10px rgba(0,255,127,0.15);
        }
      `}</style>
    </section>
  );
}
