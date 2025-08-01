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
        "https://inovaclass-backend.onrender.com/api/register",
        { cpf, password, tipo: tipoUsuario },
        { withCredentials: true } // mantenha se usar cookies; senão pode remover
      );

      // Aqui você pode usar "data" se quiser exibir mensagem que vem do backend
      console.log("Resposta do backend:", data);

      localStorage.setItem("usuarioLogado", JSON.stringify({ tipo: tipoUsuario, cpf }));
      setSuccess("Cadastro realizado com sucesso!");

      setTimeout(() => {
        navigate(tipoUsuario === "aluno" ? "/alunopage" : "/docentepage");
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
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-cyan-900 to-cyan-500">
      <div className="bg-cyan-800 bg-opacity-90 p-8 rounded-3xl w-full max-w-sm shadow-xl text-white text-center">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-semibold text-left leading-tight">
            Cadastre-se como<br />
            {tipoUsuario === "aluno" ? "Aluno!" : "Professor!"}
          </h1>
          <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
            📝
          </div>
        </div>

        <div className="flex mb-4 rounded-full bg-cyan-900 overflow-hidden">
          <button
            type="button"
            onClick={() => setTipoUsuario("aluno")}
            className={`flex-1 py-2 font-medium ${tipoUsuario === "aluno" ? "bg-cyan-400 text-white" : "text-white hover:bg-cyan-700"}`}
          >
            Aluno
          </button>
          <button
            type="button"
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
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-300 text-white font-bold py-2 rounded-full transition-all"
          >
            Registrar
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-400 text-sm mt-2">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
