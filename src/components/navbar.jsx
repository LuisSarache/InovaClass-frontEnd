import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userJSON = localStorage.getItem('usuarioLogado');
    if (userJSON) {
      setUsuario(JSON.parse(userJSON));
    } else {
      setUsuario(null);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    setUsuario(null);
    navigate('/');
  };

  return (
    <nav className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-gray-800 py-4 px-2 shadow-lg fixed top-0 left-0 z-30">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="ml-[7.5px] text-2xl font-semibold text-white hover:text-blue-900 hover:scale-3d transform-border transition-colors duration-300">
            Inova Class
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8">
          <Link to="/" className="text-white hover:text-teal-500 transition-colors duration-300 text-lg font-medium">
            Home
          </Link>

          {/* Se não logado, mostra login e ajuda */}
          {!usuario && (
            <>
              <Link to="/help" className="text-white hover:text-teal-500 transition-colors duration-300 text-lg font-medium">
                Ajuda
              </Link>
              <Link to="/login" className="text-white hover:text-teal-500 transition-colors duration-300 text-lg font-medium">
                Login
              </Link>
            </>
          )}

          {/* Se logado, mostra área específica */}
          {usuario && usuario.tipo === 'aluno' && (
            <>
              <Link to="/alunopage" className="text-white hover:text-teal-500 transition-colors duration-300 text-lg font-medium">
                Área do Aluno
              </Link>
              <Link to="/help" className="text-white hover:text-teal-500 transition-colors duration-300 text-lg font-medium">
                Ajuda
              </Link>
              <button
                onClick={handleLogout}
                className="text-white hover:text-teal-800 transition-colors duration-300 text-lg font-medium"
              >
                Sair
              </button>
            </>
          )}

          {usuario && usuario.tipo === 'professor' && (
            <>
              <Link to="/docentepage" className="text-white hover:text-teal-500 transition-colors duration-300 text-lg font-medium">
                Área do Professor
              </Link>
              <Link to="/help" className="text-white hover:text-teal-500 transition-colors duration-300 text-lg font-medium">
                Ajuda
              </Link>
              <button
                onClick={handleLogout}
                className="text-white hover:text-teal-800 transition-colors duration-300 text-lg font-medium"
              >
                Sair
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-gradient-to-r from-purple-200 to-teal-600 p-4 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="block mb-2 text-white hover:text-teal-500 text-lg font-medium">Home</Link>

        {!usuario && (
          <>
            <Link to="/help" className="block mb-2 text-white hover:text-teal-500 text-lg font-medium">Ajuda</Link>
            <Link to="/login" className="block mb-2 text-white hover:text-teal-500 text-lg font-medium">Login</Link>
          </>
        )}

        {usuario && usuario.tipo === 'aluno' && (
          <>
            <Link to="/alunopage" className="block mb-2 text-white hover:text-teal-500 text-lg font-medium">Área do Aluno</Link>
            <Link to="/help" className="block mb-2 text-white hover:text-teal-500 text-lg font-medium">Ajuda</Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left text-white hover:text-teal-800 text-lg font-medium"
            >
              Sair
            </button>
          </>
        )}

        {usuario && usuario.tipo === 'professor' && (
          <>
            <Link to="/docentepage" className="block mb-2 text-white hover:text-teal-500 text-lg font-medium">Área do Professor</Link>
            <Link to="/help" className="block mb-2 text-white hover:text-teal-500 text-lg font-medium">Ajuda</Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left text-white hover:text-teal-800 text-lg font-medium"
            >
              Sair
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
