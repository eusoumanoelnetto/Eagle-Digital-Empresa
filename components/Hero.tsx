

import React, { useState, useEffect, useRef } from 'react';

const RotatingText: React.FC = () => {
  const texts = ['Criamos', 'Desenvolvemos', 'Transformamos'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIsVisible(false); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true); // Start fade-in
      }, 500); // Wait for fade-out to complete before changing text
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(textInterval);
  }, [texts.length]);

  return (
    <span
      className={`inline-block text-fanteOrange transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full'
      }`}
    >
      {texts[currentIndex]}
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] overflow-hidden flex items-center justify-center text-center">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?random=1"
          alt="Abstract background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-fanteDark bg-opacity-70"></div>
      </div>

      <div className="relative z-10 p-4 md:p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6" data-aos="fade-up">
          Nós <RotatingText /> <br />
          sua marca
        </h1>
        <p className="text-lg md:text-xl text-white text-opacity-90 mb-8" data-aos="fade-up" data-aos-delay="200">
          Sua marca merece ser vista, lembrada e desejada.
          Com estratégias digitais inteligentes, transformamos seu potencial em resultados reais.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-fanteOrange text-white text-lg font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
          data-aos="fade-up" data-aos-delay="400"
        >
          Fale com a gente
        </a>
      </div>
    </section>
  );
};

export default Hero;