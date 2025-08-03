import { Link } from 'react-router-dom';
import React from 'react';
import AlunoNavBar from '../components/alunoNavBar';

const AlunoPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
      {/* Navbar responsiva */}
      <div className="w-full md:w-64">
        <AlunoNavBar />
      </div>

      <main className="flex-1 p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-gradient-to-br from-cyan-800 to-cyan-600">
        {/* Card de Recados */}
        <div className="bg-cyan-950 p-4 md:p-6 rounded-2xl shadow text-white">
          <h2 className="text-lg md:text-xl font-bold mb-2">📢 Recados do prof J.J</h2>
          <p className="text-sm md:text-base">Parabéns Aluno! Ótimo desempenho, continue assim!!</p>
        </div>

        {/* Card de Dicas */}
        <div className="bg-cyan-700 p-4 md:p-6 rounded-2xl shadow text-white relative">
          <h2 className="text-lg md:text-xl font-bold mb-2">💡 Dicas do dia</h2>
          <p className="text-sm md:text-base">
            Nunca subestime o poder de um pequeno passo positivo. Cada um leva você mais perto do seu sonho.
          </p>
        </div>

        {/* Card de Desempenho */}
        <div className="bg-cyan-950 p-4 md:p-6 rounded-2xl shadow text-white col-span-1 md:col-span-2">
          <h2 className="text-lg md:text-xl font-bold">📊 Seu Desempenho</h2>
          <p className="text-base md:text-lg text-gray-300 mb-2">Estamos fazendo a contagem de notas!</p>
          <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">00%</div>
          <div className="h-16 md:h-24 bg-cyan-800 rounded-xl flex items-end">
            <div className="w-full h-2 bg-cyan-400 rounded"></div>
          </div>
        </div>

        {/* Card de Dúvidas */}
        <div className="bg-cyan-700 p-4 md:p-6 rounded-2xl shadow text-white col-span-1 md:col-span-2">
          <h2 className="text-lg md:text-xl font-bold mb-2">❓ Alguma Dúvida?</h2>
          <p className="mb-4 text-sm md:text-base">Pergunte para I.A</p>
          
          <Link
            to="/chatbox2"
            className="block w-full sm:w-auto text-center mt-2 px-4 py-2 bg-cyan-400 text-cyan-900 font-bold rounded hover:bg-cyan-300"
          >
            Pergunte já!
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AlunoPage;
