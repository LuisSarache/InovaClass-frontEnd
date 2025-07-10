import React, { useState, useEffect } from 'react';
 
 
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
 
    useEffect(() => {
        // Verifica se há um token (ou usuário) no localStorage
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
    }, []);
 
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
 
    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        window.location.href = '/'; // redireciona para Home
    };
 
    const menuLinks = (
        <>
            <a href="/" className="text-white hover:text-teal-500 transition-colors duration-300 text-lg font-medium">Home</a>
            <a href="/alunopage" className="text-white hover:text-teal-500 transition-colors duration-300 text-lg font-medium">Área do Aluno</a>
            <a href="/docentepage" className="text-white hover:text-teal-500 transition-colors duration-300 text-lg font-medium">Área do Professor</a>
            <a href="/help" className="text-white hover:text-teal-500 transition-colors duration-300 text-lg font-medium">Ajuda</a>
            {isAuthenticated ? (
                <>
                    <a href="/profile" className="text-white hover:text-teal-500 transition-colors duration-300 text-lg font-medium">Perfil</a>
                    <button onClick={handleLogout} className="text-white hover:text-teal-800 transition-colors duration-300 text-lg font-medium">Sair</button>
                </>
            ) : (
                <a href="/login" className="text-white hover:text-teal-500 transition-colors duration-300 text-lg font-medium">Login</a>
            )}
        </>
    );
   
 
    return (
        <nav className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-gray-800 py-4 px-2 shadow-lg fixed top-0 left-0 z-30">
            <div className="max-w-8xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                   
                    <a href="/" className="ml-[7.5px] text-2xl font-semibold text-white hover:text-blue-900 hover:scale-3d transform-border transition-colors duration-300">
                        Inova Class
                    </a>
                </div>
 
                {/* Desktop Links */}
                <div className="hidden lg:flex space-x-8">
                    {menuLinks}
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
                {menuLinks}
            </div>
        </nav>
    );
};
 
export default Navbar;