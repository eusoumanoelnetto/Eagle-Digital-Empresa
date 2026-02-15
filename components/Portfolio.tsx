

import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  delay: number; // Add delay prop for staggered animation
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, delay }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay={delay}>
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-fanteDark bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <h4 className="text-white text-xl font-bold mb-2 text-center">{title}</h4>
        <p className="text-fanteOrange text-sm uppercase">{category}</p>
        <a
          href="#" // Placeholder link
          className="mt-4 px-4 py-2 border-2 border-white text-white rounded-full text-sm hover:bg-white hover:text-fanteDark transition-colors duration-300"
        >
          Ver Projeto
        </a>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const projectsData = [
    { image: 'https://picsum.photos/400/300?random=3', title: 'Projeto Alpha', category: 'Branding' },
    { image: 'https://picsum.photos/400/300?random=4', title: 'E-commerce Beta', category: 'Desenvolvimento Web' },
    { image: 'https://picsum.photos/400/300?random=5', title: 'Campanha Gamma', category: 'Performance' },
    { image: 'https://picsum.photos/400/300?random=6', title: 'Portal Delta', category: 'Marketing de Conteúdo' },
    { image: 'https://picsum.photos/400/300?random=7', title: 'Redes Zeta', category: 'Redes Sociais' },
    { image: 'https://picsum.photos/400/300?random=8', title: 'Rebranding Epsilon', category: 'Branding' },
  ];

  return (
    <section id="portfolio" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-fanteOrange text-base md:text-lg font-semibold uppercase mb-2" data-aos="fade-up">
          Cases
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fanteDark mb-12 leading-tight" data-aos="fade-up" data-aos-delay="100">
          Nossos Trabalhos Mais Recentes
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 100} />
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#" // Placeholder for "Ver mais projetos"
            className="inline-block px-8 py-4 bg-fanteOrange text-white text-lg font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
            data-aos="fade-up" data-aos-delay="400"
          >
            Ver mais projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;