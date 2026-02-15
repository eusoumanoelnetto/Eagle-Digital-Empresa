

import React from 'react';

const Clients: React.FC = () => {
  const clientLogos = [
    'https://picsum.photos/150/70?random=9',
    'https://picsum.photos/150/70?random=10',
    'https://picsum.photos/150/70?random=11',
    'https://picsum.photos/150/70?random=12',
    'https://picsum.photos/150/70?random=13',
    'https://picsum.photos/150/70?random=14',
    'https://picsum.photos/150/70?random=15',
    'https://picsum.photos/150/70?random=16',
  ];

  return (
    <section id="clients" className="bg-fanteGray py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-fanteOrange text-base md:text-lg font-semibold uppercase mb-2" data-aos="fade-up">
          Clientes que confiam
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fanteDark mb-12 leading-tight" data-aos="fade-up" data-aos-delay="100">
          Parceiros de Sucesso
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 items-center justify-items-center">
          {clientLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="max-h-16 w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
              data-aos="zoom-in" data-aos-delay={index * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;