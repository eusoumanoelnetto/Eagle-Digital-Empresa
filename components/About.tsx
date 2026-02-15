

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start" data-aos="fade-right">
            <img
              src="https://picsum.photos/600/400?random=2"
              alt="Team working"
              className="rounded-lg shadow-xl w-full max-w-md md:max-w-none object-cover"
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-fanteOrange text-base md:text-lg font-semibold uppercase mb-2">
              A Fante
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fanteDark mb-6 leading-tight">
              Uma Agência de Marketing Digital Completa
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Somos a Agência Fante, um time apaixonado por marketing digital, design e tecnologia.
              Acreditamos no poder da inovação para impulsionar negócios e criar experiências marcantes.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Nossa missão é transformar ideias em realidade, utilizando estratégias personalizadas
              e soluções criativas que geram resultados reais e duradouros para nossos clientes.
            </p>
            <a
              href="#services"
              className="inline-block px-6 py-3 bg-fanteDark text-white rounded-full hover:bg-gray-800 transition-colors duration-300 font-semibold"
            >
              Conheça nossos serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;