import React from 'react';

const SobreMim: React.FC = () => {
  return (
    <section
      id="sobre-mim"
      className="bg-pink-100 text-gray-800 py-10 flex items-center justify-center"
    >
      <div className="w-full flex flex-col md:flex-row items-center md:items-center justify-center gap-20 px-16 max-w-full">
        {/* Imagem à esquerda */}
        <div className="w-40 md:w-52 flex-shrink-0">
          <img
            src="/img/eu.jpg"
            alt="Foto sobre mim"
            className="rounded-full w-full object-cover"
          />
        </div>

        {/* Texto à direita */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Sobre Mim
          </h2>
          <p className="text-lg text-gray-700 mb-4 text-justify">
            Olá! Sou estudante de tecnologia com foco em desenvolvimento web. No ano passado concluí o curso de Programador de Sistemas pelo SENAC-MA, e atualmente estou cursando o Técnico em Informática para Internet, também pelo SENAC-MA. Tenho me dedicado ao constante aprendizado em áreas como front-end, back-end e boas práticas de programação.
          </p>
          <p className="text-lg text-gray-700 mb-4 text-justify">
            Sou uma pessoa organizada, que valoriza o trabalho em equipe e sempre busca aprender mais. Tenho grande interesse em estar por dentro das novidades do setor, o que me motiva a acompanhar as últimas tendências e inovações no campo da informática e programação.
          </p>
          <p className="text-lg text-gray-700 text-justify">
            Embora ainda não tenha experiência profissional, estou aberta a desafios, colaborações e oportunidades que me ajudem a crescer na área da tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;