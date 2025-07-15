import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-700 to-blue-900 text-white px-6 text-center max-w-3x2   mx-auto">
      <h1 className="text-5xl font-bold mb-6">Bem-vindo ao Inova Class!</h1>
      <p className="text-lg mb-6">
        Inova Class é uma plataforma pensada para facilitar a interação entre alunos e professores,
        permitindo o acompanhamento do desempenho escolar e a troca de conhecimento.
      </p>

      <p className="text-lg mb-4">
        Nosso objetivo é oferecer um ambiente simples, moderno e seguro para que toda a comunidade escolar
        esteja conectada e atualizada.
      </p>

      <p className="text-lg">
        Aqui você pode acessar sua área exclusiva, acompanhar seus horários, atividades e tirar dúvidas de forma prática.
      </p>
    </div>
  );
};

export default Hero;
