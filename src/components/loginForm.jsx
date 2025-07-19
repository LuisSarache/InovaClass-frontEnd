import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const tipoInicial = location.pathname.includes("professor") ? "professor" : "aluno";
  const [tipoUsuario, setTipoUsuario] = useState(tipoInicial);
  const [cpf, setCpf] = useState("");

  // Se já estiver logado, vai para o painel certo
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (usuario) {
      navigate(usuario.tipo === "aluno" ? "/alunopage" : "/docentepage");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("usuarioLogado", JSON.stringify({ tipo: tipoUsuario, cpf }));
    navigate(tipoUsuario === "aluno" ? "/alunopage" : "/docentepage");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-cyan-900 to-cyan-500">
      <div className="bg-cyan-800 bg-opacity-90 p-8 rounded-3xl w-full max-w-sm shadow-xl text-white text-center">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-semibold text-left leading-tight">
            Bem-vindo,<br />
            {tipoUsuario === "aluno" ? "Aluno!" : "Professor!"}
          </h1>
          <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
            🎓
          </div>
        </div>

        <p className="text-sm text-gray-200 mb-6">
          Digite seu CPF ou número de matrícula para acessar sua conta
        </p>

        {/* Alternar tipo de login */}
        <div className="flex mb-4 rounded-full bg-cyan-900 overflow-hidden">
          <button
            onClick={() => setTipoUsuario("aluno")}
            className={`flex-1 py-2 font-medium ${tipoUsuario === "aluno" ? "bg-cyan-400 text-white" : "text-white hover:bg-cyan-700"}`}
          >
            Aluno
          </button>
          <button
            onClick={() => setTipoUsuario("professor")}
            className={`flex-1 py-2 font-medium ${tipoUsuario === "professor" ? "bg-cyan-400 text-white" : "text-white hover:bg-cyan-700"}`}
          >
            Professor
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
      </div>
    </div>
  );
};

export default LoginForm;
