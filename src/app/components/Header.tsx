const Header = () => {

  return (
    <header className="bg-pink-200 text-pink-500">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo ou Nome */}
        <h1 className="text-3xl font-bold">Meu Portfólio</h1>

        {/* Botão de alternância para menu responsivo */}
        <button
          className="block md:hidden text-white focus:outline-none"
          aria-label="Abrir menu"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Navegação */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#hero"
                className="px-4 py-2 rounded-full hover:bg-violet-200 hover:text-violet-700 hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="px-4 py-2 rounded-full hover:bg-violet-200 hover:text-violet-700 hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="px-4 py-2 rounded-full hover:bg-violet-200 hover:text-violet-700 hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-4 py-2 rounded-full hover:bg-violet-200 hover:text-violet-700 hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

    