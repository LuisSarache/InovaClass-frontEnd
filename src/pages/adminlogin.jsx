// src/pages/AdminLogin.jsx
import { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro("");
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}https://inovaclass-backend.onrender.com/api/admin/login`,
        { email, senha }
      );

     const usuario = { tipo: "admin", token: res.data.token };
localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
window.location.href = "/admin/dashboard";

    } catch (error) {
      setErro(error.response?.data?.error || "Credenciais inválidas. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-cyan-900 to-teal-800 p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-cyan-900">
          Login do Administrador
        </h2>

        {erro && <p className="text-red-500 text-sm mb-4">{erro}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full border border-gray-300 p-2 rounded mb-4 focus:ring-2 focus:ring-teal-500 outline-none"
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="block w-full border border-gray-300 p-2 rounded mb-6 focus:ring-2 focus:ring-teal-500 outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white font-semibold transition-colors duration-300 ${
            loading
              ? "bg-teal-400 cursor-not-allowed"
              : "bg-teal-600 hover:bg-teal-700"
          }`}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
