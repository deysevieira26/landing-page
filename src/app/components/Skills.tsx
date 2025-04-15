const Skills = () => {
  return (
    <section id="skills" className="bg-violet-100 text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Minhas Habilidades</h2>

        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Soft Skills - Cartão */}
          <div className="w-full md:w-1/2 bg-violet-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Soft Skills</h3>
            <ul className="space-y-4 pl-5">
              <li className="flex items-center">
                <img src="https://img.icons8.com/ios-filled/50/speech-bubble.png" alt="Comunicação" className="w-5 h-5 mr-3" />
                Comunicação efetiva
              </li>
              <li className="flex items-center">
                <img src="https://img.icons8.com/ios-filled/50/teamwork.png" alt="Trabalho em equipe" className="w-5 h-5 mr-3" />
                Trabalho em equipe
              </li>
              <li className="flex items-center">
                <img src="https://img.icons8.com/ios-filled/50/idea.png" alt="Resolução de problemas" className="w-5 h-5 mr-3" />
                Resolução de problemas
              </li>
              <li className="flex items-center">
                <img src="https://img.icons8.com/ios-filled/50/synchronize.png" alt="Adaptabilidade" className="w-5 h-5 mr-3" />
                Adaptabilidade
              </li>
              <li className="flex items-center">
                <img src="https://img.icons8.com/ios-filled/50/clock.png" alt="Gestão de tempo" className="w-5 h-5 mr-3" />
                Gestão de tempo
              </li>
            </ul>
          </div>

          {/* Hard Skills - Cartão */}
          <div className="w-full md:w-1/2 bg-violet-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Hard Skills</h3>
            <ul className="space-y-4 pl-5">
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-5 h-5 mr-3" />
                HTML5
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-5 h-5 mr-3" />
                CSS3 e frameworks como Tailwind CSS
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5 mr-3" />
                JavaScript (incluindo ES6+)
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-5 h-5 mr-3" />
                React.js e Next.js
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-5 h-5 mr-3" />
                Node.js
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-5 h-5 mr-3" />
                Banco de dados (SQL e MongoDB)
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-5 h-5 mr-3" />
                Versionamento de código com Git
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;