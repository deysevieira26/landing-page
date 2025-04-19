const Hero = () => {
  return (
    <section id="hero" className="bg-violet-300 text-gray-800 h-screen flex items-center justify-center">
      <div className="text-center px-5">
        <img
          src="/img/eu.jpg" // A imagem deve estar na pasta public
          alt="Minha foto"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-5xl font-bold mb-4">Olá, eu sou Deyse Vieira</h1>
        <p className="text-xl mb-6">
          Desenvolvedora Web apaixonada por criar interfaces incríveis e experiências digitais impactantes.
        </p>
        <a
          href="#projects"
          className="bg-pink-400 text-white px-6 py-3 rounded-full text-lg hover:bg-red-500 transition"
        >
          Veja meus projetos
        </a>
        <a
          href="/Curriculo.pdf"
          download
          className="bg-violet-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-500 transition ml-4"
        >
          Baixar Currículo
        </a>
      </div>
    </section>
  );
};

export default Hero;
