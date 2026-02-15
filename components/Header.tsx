
import React from 'react';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-fanteDark">
          <img src="https://www.agenciafante.com.br/assets/logos/logo-fante-preto.svg" alt="Agencia Fante Logo" className="h-8 md:h-10" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 lg:space-x-12 items-center">
          <a href="#hero" className="text-fanteDark hover:text-fanteOrange transition-colors duration-300 font-medium">Home</a>
          <a href="#about" className="text-fanteDark hover:text-fanteOrange transition-colors duration-300 font-medium">A Fante</a>
          <a href="#services" className="text-fanteDark hover:text-fanteOrange transition-colors duration-300 font-medium">Serviços</a>
          <a href="#portfolio" className="text-fanteDark hover:text-fanteOrange transition-colors duration-300 font-medium">Cases</a>
          <a href="#contact" className="text-fanteDark hover:text-fanteOrange transition-colors duration-300 font-medium">Contato</a>
          <a
            href="#portfolio"
            className="ml-6 px-6 py-2 bg-fanteOrange text-white rounded-full hover:bg-orange-600 transition-colors duration-300 text-sm font-semibold"
          >
            Veja nossos trabalhos
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 rounded-md text-fanteDark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-fanteOrange" onClick={onMenuToggle}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
    