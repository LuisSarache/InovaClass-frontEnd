import React from 'react';
import { Link } from 'react-router-dom';

const AlunoPage = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
      <aside className="w-64 p-4 bg-cyan-950 flex flex-col gap-4">

        <a href="/" className="text-2xl font-bold mb-6 hover:text-cyan-300 transition-colors">
          Inova Class
        </a>

        <button className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700">
          📄 Buscar
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded hover:bg-cyan-500">
          🏠 Área do Aluno
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700">
          👨‍🏫 Pergunte ao Professor
        </button>

        <Link
          to="/horario1"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
        >
          🗓️ Horários
        </Link>
      </aside>

      <main className="flex-1 p-8 grid grid-cols-2 gap-6 bg-gradient-to-br from-cyan-800 to-cyan-600">
        <div className="bg-cyan-950 p-6 rounded-2xl shadow text-white">
          <h2 className="text-xl font-bold mb-2">📢 Recados do prof J.J</h2>
          <p>Parabéns Matheus! Ótimo desempenho, continue assim!!</p>
        </div>

        <div className="bg-cyan-700 p-6 rounded-2xl shadow text-white relative">
          <h2 className="text-xl font-bold mb-2">💡 Dicas do dia</h2>
          <p className="text-sm">
            Nunca subestime o poder de um pequeno passo positivo. Cada um leva você mais perto do seu sonho.
          </p>
        </div>

        <div className="bg-cyan-950 p-6 rounded-2xl shadow text-white col-span-2">
          <h2 className="text-xl font-bold">📊 Seu Desempenho</h2>
          <p className="text-lg text-gray-300 mb-2">Excelente!</p>
          <div className="text-5xl font-bold text-cyan-400 mb-2">86%</div>
          <div className="h-24 bg-cyan-800 rounded-xl flex items-end">
            <div className="w-full h-2 bg-cyan-400 rounded"></div>
          </div>
        </div>

        <div className="bg-cyan-700 p-6 rounded-2xl shadow text-white col-span-2">
          <h2 className="text-xl font-bold mb-2">❓ Alguma Dúvida?</h2>
          <p>Pergunte para I.A</p>
        </div>
      </main>
    </div>
  );
};

export default AlunoPage;
