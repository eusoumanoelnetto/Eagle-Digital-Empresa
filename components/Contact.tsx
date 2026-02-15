
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada! (Funcionalidade de envio real não implementada)');
    // In a real application, you would send this data to a backend.
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-fanteOrange text-base md:text-lg font-semibold uppercase mb-2" data-aos="fade-up">
            Fale com a gente
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fanteDark leading-tight" data-aos="fade-up" data-aos-delay="100">
            Vamos Criar Algo Incrível Juntos!
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-fanteGray p-8 rounded-lg shadow-md" data-aos="fade-right">
            <h4 className="text-2xl font-bold text-fanteDark mb-6">Envie sua mensagem</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-3 focus:ring-fanteOrange focus:border-fanteOrange transition-all duration-200"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-3 focus:ring-fanteOrange focus:border-fanteOrange transition-all duration-200"
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-3 focus:ring-fanteOrange focus:border-fanteOrange transition-all duration-200 resize-y"
                  placeholder="Descreva o seu projeto ou sua dúvida..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-fanteOrange text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-md"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info and Map */}
          <div data-aos="fade-left">
            <div className="bg-fanteDark p-8 rounded-lg shadow-md text-white mb-8">
              <h4 className="text-2xl font-bold mb-4">Detalhes de Contato</h4>
              <ul className="space-y-3 text-lg">
                <li>
                  <strong className="block text-fanteOrange">Endereço:</strong>
                  Rua Exemplo, 123 - Centro, Cidade - Estado, CEP: 00000-000
                </li>
                <li>
                  <strong className="block text-fanteOrange">Telefone:</strong>
                  <a href="tel:+5511987654321" className="hover:underline">(11) 98765-4321</a>
                </li>
                <li>
                  <strong className="block text-fanteOrange">Email:</strong>
                  <a href="mailto:contato@agenciafante.com.br" className="hover:underline">contato@agenciafante.com.br</a>
                </li>
              </ul>
            </div>

            {/* Google Maps Placeholder */}
            <div className="w-full h-80 bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.086326123497!2d-46.63581178446219!3d-23.56149186714589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a9e3e7f47b%3A0x6d9e0f6c2e7b7e8!2sRua%20Liberdade%2C%20123%20-%20Liberdade%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001501-000!5e0!3m2!1spt-BR!2sbr!4v1678901234567!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
