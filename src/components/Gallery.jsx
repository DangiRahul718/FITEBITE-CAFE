import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

import galleryInterior from '../assets/gallery_interior.jpg';
import galleryDecor from '../assets/gallery_decor.png';
import galleryEntrance from '../assets/gallery_entrance.jpg';
import galleryBrand from '../assets/gallery_brand.jpg';
import gallerySeating from '../assets/gallery_seating.jpg';

const IMAGES = [
  { id: 1, src: galleryInterior, title: 'Cafe Interior', tag: 'FIT BITE GALLERY', className: 'gallery-card-1' },
  { id: 2, src: galleryDecor, title: 'Wall Decor & Ambience', tag: 'FIT BITE GALLERY', className: 'gallery-card-2' },
  { id: 3, src: galleryEntrance, title: 'Fit Bite Entrance', tag: 'FIT BITE GALLERY', className: 'gallery-card-3' },
  { id: 4, src: galleryBrand, title: 'Brand Identity', tag: 'FIT BITE GALLERY', className: 'gallery-card-4' },
  { id: 5, src: gallerySeating, title: 'Cafe Walkthrough', tag: 'FIT BITE GALLERY', className: 'gallery-card-5' },
  { id: 6, src: galleryInterior, title: 'Seating Area', tag: 'FIT BITE GALLERY', className: 'gallery-card-6' }
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="gallery" style={{ backgroundColor: '#090a0f', borderBottom: '1px solid var(--border-color)', position: 'relative', padding: '6rem 0' }}>
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            FIT BITE GALLERY
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            Inside Fit Bite Cafe
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Take a look inside our cafe and experience the atmosphere, seating, food culture, and fitness-focused dining environment.
          </p>
        </div>

        {/* CSS Grid */}
        <div className="gallery-grid">
          {IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className={`gallery-item-card glass-premium ${img.className}`}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              {/* Image element */}
              <img
                src={img.src}
                alt={img.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="gallery-img"
              />

              {/* Hover Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(6,7,9,0.85) 0%, rgba(6,7,9,0.2) 100%)',
                  opacity: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'end',
                  padding: '1.5rem',
                  transition: 'all 0.4s ease',
                  backdropFilter: 'blur(0px)',
                  WebkitBackdropFilter: 'blur(0px)'
                }}
                className="gallery-overlay"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.65rem', color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
                      {img.tag}
                    </span>
                    <h4 style={{ fontSize: '1rem', color: '#fff', fontWeight: 600, marginTop: '0.2rem' }}>
                      {img.title}
                    </h4>
                  </div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    color: 'var(--bg-darker)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 10px rgba(0, 255, 127, 0.4)'
                  }}>
                    <ZoomIn size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Pop-up */}
      {activeImage && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.95)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '2rem'
        }}>
          <div style={{ position: 'relative', maxWidth: '800px', width: '100%' }}>
            
            {/* Close */}
            <button
              onClick={() => setActiveImage(null)}
              style={{
                position: 'absolute',
                top: '-45px',
                right: '0',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              className="lightbox-close"
            >
              <X size={18} />
            </button>

            {/* Display Image */}
            <div className="glass-premium" style={{ borderRadius: '20px', overflow: 'hidden', padding: '0.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
              <img
                src={activeImage.src}
                alt={activeImage.title}
                style={{ width: '100%', height: 'auto', maxHeight: '75vh', display: 'block', borderRadius: '16px', objectFit: 'contain' }}
              />
              <div style={{ padding: '1.5rem 1rem 1rem' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {activeImage.tag}
                </span>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', fontFamily: 'var(--font-heading)', marginTop: '0.2rem' }}>
                  {activeImage.title}
                </h3>
              </div>
            </div>

          </div>
        </div>
      )}

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          width: 100%;
        }
        
        /* Card Sizes on Desktop */
        .gallery-card-1 {
          grid-column: span 2;
          grid-row: span 2;
          height: 480px;
        }
        .gallery-card-2 {
          grid-column: span 1;
          grid-row: span 1;
          height: 228px;
        }
        .gallery-card-3 {
          grid-column: span 1;
          grid-row: span 1;
          height: 228px;
        }
        .gallery-card-4 {
          grid-column: span 3;
          grid-row: span 1;
          height: 280px;
        }
        .gallery-card-5 {
          grid-column: span 1;
          grid-row: span 1;
          height: 240px;
        }
        .gallery-card-6 {
          grid-column: span 2;
          grid-row: span 1;
          height: 240px;
        }

        .gallery-item-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .gallery-card-1 { animation-delay: 0.1s; }
        .gallery-card-2 { animation-delay: 0.2s; }
        .gallery-card-3 { animation-delay: 0.3s; }
        .gallery-card-4 { animation-delay: 0.4s; }
        .gallery-card-5 { animation-delay: 0.5s; }
        .gallery-card-6 { animation-delay: 0.6s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hover Zoom and Glassmorphism */
        .gallery-item-card:hover .gallery-img {
          transform: scale(1.05);
        }
        .gallery-item-card:hover .gallery-overlay {
          opacity: 1 !important;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        .gallery-item-card:hover {
          border-color: rgba(0, 255, 127, 0.3) !important;
          box-shadow: 0 20px 40px rgba(0, 255, 127, 0.08) !important;
          transform: translateY(-4px);
        }
        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          color: var(--accent) !important;
          transform: scale(1.1);
        }

        /* Media Queries */
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .gallery-card-1 {
            grid-column: span 2;
            grid-row: span 2;
            height: 400px;
          }
          .gallery-card-2 {
            grid-column: span 1;
            grid-row: span 1;
            height: 190px;
          }
          .gallery-card-3 {
            grid-column: span 1;
            grid-row: span 1;
            height: 190px;
          }
          .gallery-card-4 {
            grid-column: span 2;
            grid-row: span 1;
            height: 200px;
          }
          .gallery-card-5 {
            grid-column: span 1;
            grid-row: span 1;
            height: 200px;
          }
          .gallery-card-6 {
            grid-column: span 1;
            grid-row: span 1;
            height: 200px;
          }
        }
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .gallery-card-1, .gallery-card-2, .gallery-card-3, .gallery-card-4, .gallery-card-5, .gallery-card-6 {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            height: 240px !important;
          }
        }
      `}</style>
    </section>
  );
}
