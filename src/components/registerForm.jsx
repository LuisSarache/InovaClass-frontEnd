import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [tipoUsuario, setTipoUsuario] = useState("aluno");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const { data } = await axios.post(
        "https://inovaclass-backend.onrender.com/api/auth/register",
        { cpf, password, tipo: tipoUsuario },
        { withCredentials: true }
      );

      console.log("Resposta do backend:", data);

      localStorage.setItem("usuarioLogado", JSON.stringify({ tipo: tipoUsuario, cpf }));
      setSuccess("Cadastro realizado com sucesso!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Erro de conexão com o servidor");
      }
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-cyan-900 to-cyan-500 p-4 sm:p-6">
      <div className="bg-cyan-800 bg-opacity-90 p-6 sm:p-8 rounded-3xl w-full max-w-sm shadow-xl text-white text-center">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-semibold text-left leading-tight flex-1">
            Cadastre-se como
            <br />
            {tipoUsuario === "aluno" ? "Aluno!" : "Professor!"}
          </h1>
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl">
            📝
          </div>
        </div>

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
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none text-sm sm:text-base"
            required
          />
          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-300 text-white font-bold py-2 rounded-full transition-all text-sm sm:text-base"
          >
            Registrar
          </button>
          {error && <p className="text-red-500 text-xs sm:text-sm mt-2">{error}</p>}
          {success && <p className="text-green-400 text-xs sm:text-sm mt-2">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
