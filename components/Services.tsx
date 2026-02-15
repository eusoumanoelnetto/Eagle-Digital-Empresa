
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number; // Add delay prop for staggered animation
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group" data-aos="zoom-in" data-aos-delay={delay}>
      <div className="text-fanteOrange mb-4 transform group-hover:scale-110 transition-transform duration-300 group-hover:animate-icon-glow-pulse">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-fanteDark mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const servicesData = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 17h10a2 2 0 002-2V9a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Branding e Identidade Visual',
      description: 'Criamos marcas fortes e memoráveis que se destacam no mercado.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-1.25-3M15 11a3 3 0 11-6 0 3 3 0 016 0zm0 0V9.75a3 3 0 00-3-3V4.5M20 7L4 7m16 4L4 11m16 4L4 15"></path>
        </svg>
      ),
      title: 'Desenvolvimento Web',
      description: 'Sites e e-commerces modernos, responsivos e otimizados para conversão.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      ),
      title: 'Performance e Tráfego Pago',
      description: 'Estratégias de anúncios para Google, redes sociais e muito mais.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h10M7 16h10M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Marketing de Conteúdo',
      description: 'Criação de conteúdo relevante que atrai, engaja e converte seu público.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H6.68a2 2 0 01-1.789-2.894l3.5-7A2 2 0 019.012 10H14zm0 0V5a2 2 0 114 0v5m-4 0h4"></path>
        </svg>
      ),
      title: 'Gestão de Redes Sociais',
      description: 'Gerenciamos suas redes sociais para construir sua comunidade e autoridade.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      title: 'Consultoria Estratégica',
      description: 'Análise aprofundada e planos de ação para otimizar seus resultados.',
    },
  ];

  return (
    <section id="services" className="bg-fanteGray py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-fanteOrange text-base md:text-lg font-semibold uppercase mb-2" data-aos="fade-up">
          O que fazemos
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fanteDark mb-12 leading-tight" data-aos="fade-up" data-aos-delay="100">
          Soluções Completas para o Sucesso Digital
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;