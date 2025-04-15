import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-violet-300 text-black py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
<<<<<<< HEAD

        {/* Formulário de Contato */}
        <form className="max-w-xl mx-auto mb-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded-lg border border-gray-400 bg-white focus:ring focus:ring-blue-500"
              placeholder="Seu nome"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded-lg border border-gray-400 bg-white focus:ring focus:ring-blue-500"
              placeholder="Seu email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              className="w-full p-2 rounded-lg border border-gray-400 bg-white focus:ring focus:ring-blue-500"
              rows={4}
              placeholder="Sua mensagem"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-pink-400 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition"
          >
            Enviar
          </button>
        </form>
=======
        
        {/* Formulário de Contato */}
        <form className="max-w-xl mx-auto mb-8">
  <div className="mb-4">
    <label htmlFor="name" className="block text-sm font-medium mb-1">
      Nome
    </label>
    <input
      type="text"
      id="name"
      className="w-full p-2 rounded-lg border border-gray-600 focus:ring focus:ring-blue-500"
      placeholder="Seu nome"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-sm font-medium mb-1">
      Email
    </label>
    <input
      type="email"
      id="email"
      className="w-full p-2 rounded-lg border border-gray-600 focus:ring focus:ring-blue-500"
      placeholder="Seu email"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="message" className="block text-sm font-medium mb-1">
      Mensagem
    </label>
    <textarea
      id="message"
      className="w-full p-2 rounded-lg border border-gray-600 focus:ring focus:ring-blue-500"
      rows={4}
      placeholder="Sua mensagem"
    ></textarea>
  </div>
  <button
    type="submit"
    className="bg-pink-400 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition"
  >
    Enviar
  </button>
</form>
>>>>>>> 6a8b5a35deb6e330a9bbb02f9eaa1a18c454448d

        {/* Links de Redes Sociais */}
        <div className="text-center">
          <p className="text-lg mb-4">Siga-me nas redes sociais:</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/deysevieira26"
              target="_blank"
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="text-black hover:text-pink-600 transition"
=======
              className="text-black hover:text-violet-700 transition"
>>>>>>> 6a8b5a35deb6e330a9bbb02f9eaa1a18c454448d
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/deyse-vieira-santos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-600 transition"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;