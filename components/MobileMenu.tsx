
import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-fanteDark bg-opacity-75 z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Side Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-fanteDark p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-fanteOrange"
            onClick={onClose}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 pt-8">
          <a href="#hero" className="text-fanteDark text-lg font-medium hover:text-fanteOrange" onClick={onClose}>Home</a>
          <a href="#about" className="text-fanteDark text-lg font-medium hover:text-fanteOrange" onClick={onClose}>A Fante</a>
          <a href="#services" className="text-fanteDark text-lg font-medium hover:text-fanteOrange" onClick={onClose}>Serviços</a>
          <a href="#portfolio" className="text-fanteDark text-lg font-medium hover:text-fanteOrange" onClick={onClose}>Cases</a>
          <a href="#contact" className="text-fanteDark text-lg font-medium hover:text-fanteOrange" onClick={onClose}>Contato</a>
          <a
            href="#portfolio"
            className="mt-8 px-6 py-3 bg-fanteOrange text-white rounded-full hover:bg-orange-600 transition-colors duration-300 text-base font-semibold"
            onClick={onClose}
          >
            Veja nossos trabalhos
          </a>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
    