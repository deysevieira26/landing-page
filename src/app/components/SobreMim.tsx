import React from 'react';

const SobreMim: React.FC = () => {
  return (
    <section id="sobre-mim" className="flex items-center justify-center py-10 bg-pink-100">
      <div className="container flex items-center justify-between px-4">
        {/* Imagem à esquerda */}
        <div className="w-1/4">
          <img
            src="/img/eu.jpg" 
            alt="Foto sobre mim"
            className="rounded-full w-full object-cover"
          />
        </div>

        {/* Texto à direita */}
        <div className="w-2/3 pl-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Sobre Mim</h2>
          <p className="text-lg text-gray-700 mb-4 text-justify">
            Sou estudante de Técnico em Informática para Internet e concluí o curso de Programador de Sistemas no SENAC - MA no ano passado. Embora ainda não tenha experiência profissional, estou em busca de um estágio ou uma oportunidade de trabalho que me permita colocar em prática o que aprendi e continuar me desenvolvendo na área de tecnologia.
          </p>
          <p className="text-lg text-gray-700 mb-4 text-justify">
            Sou uma pessoa organizada, que valoriza o trabalho em equipe e sempre busca aprender mais. Tenho grande interesse em estar por dentro das novidades do setor, o que me motiva a acompanhar as últimas tendências e inovações no campo da informática e programação.
          </p>
          <p className="text-lg text-gray-700 text-justify">
            Estou disposta a enfrentar novos desafios e contribuir com minha dedicação e entusiasmo para o crescimento de qualquer equipe ou projeto que eu faça parte.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;