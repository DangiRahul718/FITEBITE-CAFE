import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import NutritionMenu from './components/NutritionMenu';
import GoalMeals from './components/GoalMeals';
import BmiCalculator from './components/BmiCalculator';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Success from './components/Success';
import './App.css';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [view, setView] = useState('home'); // 'home' or 'menu'
  const [cart, setCart] = useState({});
  const [orderDetails, setOrderDetails] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const addToCart = (id) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const addMultipleToCart = (ids) => {
    setCart(prev => {
      const updated = { ...prev };
      ids.forEach(id => {
        updated[id] = (updated[id] || 0) + 1;
      });
      return updated;
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const clearCartItem = (id) => {
    setCart(prev => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const onCheckoutComplete = (details) => {
    setOrderDetails(details);
  };

  const onReset = () => {
    setCart({});
    setOrderDetails(null);
    setSelectedGoal(null);
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isVisible]);

  // Track global scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Control scrolling during loading state
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  return (
    <>
      <div className="app-wrapper" style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.4s ease-in-out' }}>
        {/* Top Scroll Progress Indicator */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `${scrollProgress}%`,
            height: '3px',
            background: 'var(--accent)',
            zIndex: 100,
            boxShadow: '0 0 8px rgba(0, 255, 127, 0.5)',
            transition: 'width 0.1s ease-out'
          }}
        />

        {/* Mouse Follower Glow Spot */}
        <div
          className="mouse-glow"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            opacity: isVisible && !isLoading ? 1 : 0
          }}
        />

        {/* Navigation */}
        <Header view={view} setView={setView} />

        {/* Main Sections */}
        <main>
          {view === 'home' && (
            <>
              <Hero setView={setView} />
              <Experience />
              <GoalMeals addMultipleToCart={addMultipleToCart} setView={setView} setSelectedGoal={setSelectedGoal} />
              <BmiCalculator />
              <Gallery />
            </>
          )}
          {view === 'menu' && (
            <NutritionMenu cart={cart} setCart={setCart} setView={setView} />
          )}
          {view === 'cart' && (
            <Cart 
              cart={cart} 
              setView={setView} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart} 
              clearCartItem={clearCartItem} 
            />
          )}
          {view === 'checkout' && (
            <Checkout 
              cart={cart} 
              setView={setView} 
              onCheckoutComplete={onCheckoutComplete} 
              selectedGoal={selectedGoal}
            />
          )}
          {view === 'success' && (
            <Success 
              orderDetails={orderDetails} 
              onReset={onReset} 
            />
          )}
        </main>

        {/* Footer */}
        <Footer view={view} setView={setView} />
      </div>
    </>
  );
}

