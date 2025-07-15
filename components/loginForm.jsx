import React, { useState } from 'react';
import { Link } from "react-router-dom";


const LoginForm = () => {
  const [userType, setUserType] = useState('aluno');
  const [cpf, setCpf] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Tipo: ${userType}, CPF/Matrícula: ${cpf}`);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-cyan-900 to-cyan-500">
      <div className="bg-cyan-800 bg-opacity-90 p-8 rounded-3xl w-full max-w-sm shadow-xl text-white text-center">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-semibold text-left leading-tight">
            Bem-vindo,<br />
            {userType === 'aluno' ? 'Aluno!' : 'Docente!'}
          </h1>
          <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
            🎓
          </div>
        </div>

        <p className="text-sm text-gray-200 mb-6">
          Digite seu CPF ou número de matrícula para acessar ou criar sua conta
        </p>

        <div className="flex mb-4 rounded-full bg-cyan-900 overflow-hidden">
          <button
            onClick={() => setUserType('aluno')}
            className={`flex-1 py-2 font-medium ${userType === 'aluno' ? 'bg-cyan-400 text-white' : 'text-white hover:bg-cyan-700'}`}
          >
            Aluno
          </button>
          <button
            onClick={() => setUserType('docente')}
            className={`flex-1 py-2 font-medium ${userType === 'docente' ? 'bg-cyan-400 text-white' : 'text-white hover:bg-cyan-700'}`}
          >
            Docente
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Digite seu CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="px-4 py-2 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-300 text-white font-bold py-2 rounded-full transition-all"
          >
            Continuar
          </button>
        </form>

      <Link 
      to="/resposta"
      className="text-sm mt-4 underline cursor-pointer hover:text-cyan-200">Alguma dúvida </Link>
      </div>
    </div>
  );
};

export default LoginForm;