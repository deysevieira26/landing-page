interface Project {
  title: string;
  description: string;
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Projeto 1",
      description: "Um aplicativo web desenvolvido com React e Node.js para gestão de tarefas.",
      link: "https://github.com/seu-usuario/projeto-1",
    },
    {
      title: "Projeto 2",
      description: "Landing page responsiva criada com HTML, CSS e Tailwind CSS.",
      link: "https://github.com/seu-usuario/projeto-2",
    },
    {
      title: "Projeto 3",
      description: "API RESTful para um sistema de inventário usando Express.js e MongoDB.",
      link: "https://github.com/seu-usuario/projeto-3",
    },
  ];

  return (
    <section id="projects" className="bg-pink-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meus Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-pink-200 p-5 rounded-lg shadow transition transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-violet-700 font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-violet-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Ver projeto
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/projects"
            className="bg-violet-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Ver todos os projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;