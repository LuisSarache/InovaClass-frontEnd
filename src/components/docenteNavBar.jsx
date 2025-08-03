import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DocenteNavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
      {/* SIDEBAR DOCENTE */}
      <aside className="w-64 p-4 bg-cyan-950 flex flex-col gap-4">
        <a href="/" className="text-2xl font-bold mb-6 hover:text-cyan-300 transition-colors">
          Inova Class
        </a>
        <Link
          to="/desempenho"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
        >
          🔍 Buscar Turmas
        </Link>
        <Link
          to="/docentepage"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
        >
          🧑‍🏫 Área do Docente
        </Link>
        <Link
          to="/docentechat"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded hover:bg-cyan-500"
        >
          ❓ Dúvidas do Aluno
        </Link>
        <Link
          to="/horario2"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
        >
          🗓️ Horários
        </Link>

        {/* Botão de logout no final da sidebar */}
        <button
          onClick={handleLogout}
          className="mt-auto px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-white font-semibold"
        >
          Sair
        </button>
      </aside>
    </div>
  );
};

export default DocenteNavBar;
