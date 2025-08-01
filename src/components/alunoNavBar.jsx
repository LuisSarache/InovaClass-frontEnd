// src/components/AlunoNavBar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AlunoNavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    navigate('/');
  };

  return (
    <aside className="w-64 p-4 bg-cyan-950 flex flex-col gap-4 text-white">
      <a href="/" className="text-2xl font-bold mb-6 hover:text-cyan-300 transition-colors">
        Inova Class
      </a>

      <Link to="/buscar" className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700">
        📄 Buscar
      </Link>

      <Link to="/alunopage" className="flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded hover:bg-cyan-500">
        🏠 Área do Aluno
      </Link>

      <Link to="/alunochat" className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700">
        👨‍🏫 Pergunte ao Professor
      </Link>

      <Link to="/horario1" className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700">
        🗓️ Horários
      </Link>

      <Link to="/chatbox2" className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700">
        Estude com a IA
      </Link>

      <button
        onClick={handleLogout}
        className="mt-auto px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-white font-semibold"
      >
        Sair
      </button>
    </aside>
  );
};

export default AlunoNavBar;
