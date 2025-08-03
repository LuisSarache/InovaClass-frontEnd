import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-4 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm font-medium">
          &copy; {new Date().getFullYear()} Inova Class. Todos os direitos reservados.
        </p>
        {/* Se quiser adicionar mais itens, eles ficarão aqui */}
      </div>
    </footer>
  );
};

export default Footer;
