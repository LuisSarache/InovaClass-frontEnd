import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-700 to-blue-900 text-white px-6">
      <h1 className="text-5xl font-bold mb-4">Bem-vindo ao Inova Class!</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Uma plataforma para alunos e professores interagirem, acompanharem desempenho e compartilharem conhecimento.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <Link to="/alunopage" className="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-xl shadow-md text-lg font-medium transition-all duration-300">
          Área do Aluno
        </Link>
        <Link to="/docentepage" className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl shadow-md text-lg font-medium transition-all duration-300">
          Área do Professor
        </Link>
        <Link to="/help" className="bg-teal-600 hover:bg-teal-500 px-6 py-3 rounded-xl shadow-md text-lg font-medium transition-all duration-300">
          Fale Conosco
        </Link>
        <Link to="/login" className="bg-pink-600 hover:bg-pink-500 px-6 py-3 rounded-xl shadow-md text-lg font-medium transition-all duration-300">
          Entrar
        </Link>
      </div>
    </div>
  );
};

export default Hero;