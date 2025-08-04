import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("tokenAdmin");
    if (token) {
      // Se já estiver logado, redireciona para dashboard
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://inovaclass-backend.onrender.com/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, senha }),
          credentials: "include", // Importante para cookies e autenticação via CORS
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Erro no login");
        return;
      }

      localStorage.setItem("tokenAdmin", data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Erro de conexão com o servidor");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-cyan-900 to-cyan-500 p-4 sm:p-6">
      <div className="bg-cyan-800 bg-opacity-90 p-6 sm:p-8 rounded-3xl w-full max-w-sm shadow-xl text-white text-center">
        <h1 className="text-3xl font-semibold mb-6">Login Administrador</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none text-sm sm:text-base"
            required
          />

          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="px-4 py-2 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none text-sm sm:text-base"
            required
          />

          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-300 text-white font-bold py-2 rounded-full transition-all text-sm sm:text-base"
          >
            Entrar
          </button>

          {error && <p className="text-red-500 text-xs sm:text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
