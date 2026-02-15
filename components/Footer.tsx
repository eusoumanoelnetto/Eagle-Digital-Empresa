

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-fanteDark text-white py-12 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and Copyright */}
        <div data-aos="fade-up">
          <img src="https://www.agenciafante.com.br/assets/logos/logo-fante-branco.svg" alt="Agencia Fante Logo" className="h-10 mx-auto md:mx-0 mb-4" />
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Agencia Fante. Todos os direitos reservados.</p>
        </div>

        {/* Navigation Links */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h5 className="font-bold text-lg mb-4 text-fanteOrange">Navegação</h5>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#hero" className="hover:text-fanteOrange transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-fanteOrange transition-colors duration-300">A Fante</a></li>
            <li><a href="#services" className="hover:text-fanteOrange transition-colors duration-300">Serviços</a></li>
            <li><a href="#portfolio" className="hover:text-fanteOrange transition-colors duration-300">Cases</a></li>
            <li><a href="#contact" className="hover:text-fanteOrange transition-colors duration-300">Contato</a></li>
          </ul>
        </div>

        {/* Contact Info and Social Media */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h5 className="font-bold text-lg mb-4 text-fanteOrange">Contato</h5>
          <p className="text-gray-300 mb-4">
            Rua Exemplo, 123 <br />
            Centro, Cidade - Estado, CEP: 00000-000 <br />
            Telefone: (11) 98765-4321 <br />
            Email: contato@agenciafante.com.br
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fanteOrange transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C17.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fanteOrange transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.715.01 3.657.043 1.026.045 1.761.232 2.228.423.401.178.73.407 1.003.682.274.275.503.604.682 1.003.19.467.378 1.2.423 2.228.033.942.043 1.227.043 3.657 0 2.43-.01 2.715-.043 3.657-.045 1.026-.232 1.761-.423 2.228-.178.401-.407.73-.682 1.003-.275.274-.604.503-.682.682-.19.467-.378 1.2-.423 2.228-.033-.942-.043-1.227-.043-3.657 0-2.43.01-2.715.043-3.657.045-1.026.232-1.761.423-2.228.178-.401.407-.73.682-1.003.275-.274.604-.503.682-.682.19-.467.378-1.2.423-2.228.033-.942.043-1.227.043-3.657Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M8.396 2.518c-.41-.054-.82-.091-1.23-.122-.882-.067-1.426-.08-2.292-.08-.866 0-1.41.013-2.292.08-.41.031-.82.068-1.23.122C.926 2.711.2 3.447.2 4.208c0 1.6.009 2.012.086 4.39.068.882.08 1.426.08 2.292 0 .866-.013 1.41-.08 2.292-.067.882-.079 1.426-.08 2.292 0 .866.013 1.41.08 2.292.031.41.068.82.122 1.23.19.467.378 1.2.423 2.228.033.942.043 1.227.043 3.657 0 2.43-.01 2.715-.043 3.657-.045 1.026-.232 1.761-.423 2.228-.178.401-.407.73-.682 1.003-.275.274-.604.503-.682.682-.19.467-.378 1.2-.423 2.228-.033-.942-.043-1.227-.043-3.657 0 2.43.01 2.715-.043 3.657Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fanteOrange transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.381 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zM0 8h4v16H0V8zM9.44 8H5.44V24H9.44c.06-.06.12-.12.18-.18.42-.42.94-.78 1.44-1.06.66-.36 1.32-.62 2.06-.72 1.22-.2 2.54-.08 3.62.46.7.34 1.3.82 1.82 1.4.52.58.9 1.26 1.12 2.02.2.76.28 1.6.28 2.48V24h4V14c0-2.4-.64-4.52-1.92-6.36-1.28-1.84-3.16-2.92-5.36-2.92-1.2 0-2.32.28-3.32.84-1 .56-1.88 1.36-2.6 2.32H9.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;