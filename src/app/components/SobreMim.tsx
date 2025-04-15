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
          Sou estudante do curso Técnico em Informática para Internet no SENAC-MA e, no ano passado, concluí o curso de Programador de Sistemas também no SENAC-MA. Embora ainda não tenha experiência profissional, busco uma oportunidade de estágio ou trabalho que me permita aplicar meus conhecimentos em desenvolvimento web e continuar me aprimorando nessa área.
          </p>
          <p className="text-lg text-gray-700 mb-4 text-justify">
          Sou uma pessoa organizada, com facilidade para trabalhar em equipe e sempre motivada a aprender novas tecnologias. Tenho grande interesse em me manter atualizada sobre as últimas tendências e inovações no desenvolvimento de websites e aplicações, além de ser entusiasta das melhores práticas de programação e design.
          </p>
          <p className="text-lg text-gray-700 text-justify">
          Estou disposta a enfrentar novos desafios e contribuir com minha dedicação e entusiasmo para o crescimento de qualquer equipe ou projeto na área de desenvolvimento web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;