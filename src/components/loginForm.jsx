import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tipoInicial = location.pathname.includes("professor") ? "professor" : "aluno";
  const [tipoUsuario, setTipoUsuario] = useState(tipoInicial);
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (usuario) {
      navigate(usuario.tipo === "aluno" ? "/alunopage" : "/docentepage");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://inovaclass-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ cpf }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Erro no login");
        return;
      }

      localStorage.setItem("usuarioLogado", JSON.stringify({ tipo: tipoUsuario, cpf }));

      navigate(tipoUsuario === "aluno" ? "/alunopage" : "/docentepage");
    } catch (err) {
      setError("Erro de conexão com o servidor");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-cyan-900 to-cyan-500 p-4 sm:p-6">
      <div className="bg-cyan-800 bg-opacity-90 p-6 sm:p-8 rounded-3xl w-full max-w-sm shadow-xl text-white text-center">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-semibold text-left leading-tight flex-1">
            Bem-vindo,<br />
            {tipoUsuario === "aluno" ? "Aluno!" : "Professor!"}
          </h1>
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl">
            🎓
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-200 mb-6">
          Digite seu CPF ou número de matrícula para acessar sua conta
        </p>

        <div className="flex mb-4 rounded-full bg-cyan-900 overflow-hidden text-sm sm:text-base">
          <button
            type="button"
            onClick={() => setTipoUsuario("aluno")}
            className={`flex-1 py-2 font-medium transition-colors duration-300 ${
              tipoUsuario === "aluno"
                ? "bg-cyan-400 text-white"
                : "text-white hover:bg-cyan-700"
            }`}
          >
            Aluno
          </button>
          <button
            type="button"
            onClick={() => setTipoUsuario("professor")}
            className={`flex-1 py-2 font-medium transition-colors duration-300 ${
              tipoUsuario === "professor"
                ? "bg-cyan-400 text-white"
                : "text-white hover:bg-cyan-700"
            }`}
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
            className="px-4 py-2 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none text-sm sm:text-base"
            required
          />
          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-300 text-white font-bold py-2 rounded-full transition-all text-sm sm:text-base"
          >
            Continuar
          </button>
          {error && <p className="text-red-500 text-xs sm:text-sm mt-2">{error}</p>}

          <p className="text-sm sm:text-base text-gray-200 mt-4">
            Ainda não tem uma conta?{" "}
            <a
              href="/register"
              className="text-cyan-300 underline hover:text-cyan-100"
            >
              Registre-se aqui
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
