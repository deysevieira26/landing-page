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
                <a href="#hero" className="hover:text-violet-700">
                  Início
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-violet-700">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-violet-700">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-violet-700">
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