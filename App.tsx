

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS
    // @ts-ignore
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      duration: 800, // Values from 0 to 3000, with step 50ms
    });

    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.hash && anchor.pathname === window.location.pathname) {
        const targetId = anchor.hash;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          event.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });

          // Close mobile menu if open
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;