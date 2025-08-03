import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DocenteNavBar = () => {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white flex flex-col md:flex-row">
      
      {/* Mobile: barra superior com botão de menu */}
      <header className="md:hidden flex items-center justify-between bg-cyan-950 px-4 py-3">
        <a href="/" className="text-2xl font-bold hover:text-cyan-300 transition-colors">
          Inova Class
        </a>
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </header>

      {/* Menu lateral desktop + menu dropdown mobile */}
      <aside
        className={`
          bg-cyan-950 p-4 flex flex-col gap-4
          md:w-64 md:flex
          ${menuAberto ? 'flex' : 'hidden'} 
          md:flex
          absolute md:static top-14 left-0 w-full md:w-64 z-50
        `}
      >
        <Link
          to="/desempenho"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
          onClick={() => setMenuAberto(false)}
        >
          🔍 Buscar Turmas
        </Link>
        <Link
          to="/docentepage"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
          onClick={() => setMenuAberto(false)}
        >
          🧑‍🏫 Área do Docente
        </Link>
        <Link
          to="/docentechat"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
          onClick={() => setMenuAberto(false)}
        >
          ❓ Dúvidas do Aluno
        </Link>
        <Link
          to="/horario2"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
          onClick={() => setMenuAberto(false)}
        >
          🗓️ Horários
        </Link>
        <Link
          to="/chatbox1"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
          onClick={() => setMenuAberto(false)}
        >
          🤖 Estude com a IA
        </Link>

        {/* Botão de logout */}
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
