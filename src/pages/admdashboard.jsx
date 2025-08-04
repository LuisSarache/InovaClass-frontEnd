// src/pages/AdminDashboard.jsx
import { useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [aba, setAba] = useState("professor");
  const [form, setForm] = useState({});
  const [mensagem, setMensagem] = useState("");

  const token = localStorage.getItem("tokenAdmin");
  const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    headers: { Authorization: `Bearer ${token}` }
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (endpoint) => {
    try {
      await api.post(endpoint, form);
      setMensagem("Cadastro realizado com sucesso!");
      setForm({});
    } catch (error) {
      setMensagem(error.response?.data?.error || "Erro ao cadastrar.");
    }
  };

  const logout = () => {
    localStorage.removeItem("tokenAdmin");
    window.location.href = "/admin/login";
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Menu lateral */}
      <aside className="w-64 bg-cyan-900 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6">Painel Admin</h2>
          <nav className="flex flex-col gap-4">
            <button onClick={() => setAba("professor")} className="text-left hover:underline">Cadastrar Professor</button>
            <button onClick={() => setAba("aluno")} className="text-left hover:underline">Cadastrar Aluno</button>
            <button onClick={() => setAba("turma")} className="text-left hover:underline">Criar Turma</button>
            <button onClick={() => setAba("horario")} className="text-left hover:underline">Definir Horário</button>
          </nav>
        </div>
        <button onClick={logout} className="bg-red-600 hover:bg-red-700 py-2 rounded">Sair</button>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6 capitalize">{aba}</h1>
        {mensagem && <p className="mb-4 text-green-600">{mensagem}</p>}

        {/* Formulários dinâmicos */}
        {aba === "professor" && (
          <div className="bg-white p-6 rounded shadow max-w-lg">
            <input type="text" name="nome" placeholder="Nome" value={form.nome || ""} onChange={handleChange}
              className="block w-full border p-2 mb-3 rounded" />
            <input type="email" name="email" placeholder="Email" value={form.email || ""} onChange={handleChange}
              className="block w-full border p-2 mb-3 rounded" />
            <input type="password" name="senha" placeholder="Senha" value={form.senha || ""} onChange={handleChange}
              className="block w-full border p-2 mb-3 rounded" />
            <button onClick={() => handleSubmit("/admin/professor")}
              className="bg-teal-600 text-white px-4 py-2 rounded">Salvar</button>
          </div>
        )}

        {aba === "aluno" && (
          <div className="bg-white p-6 rounded shadow max-w-lg">
            <input type="text" name="nome" placeholder="Nome" value={form.nome || ""} onChange={handleChange}
              className="block w-full border p-2 mb-3 rounded" />
            <input type="email" name="email" placeholder="Email" value={form.email || ""} onChange={handleChange}
              className="block w-full border p-2 mb-3 rounded" />
            <input type="password" name="senha" placeholder="Senha" value={form.senha || ""} onChange={handleChange}
              className="block w-full border p-2 mb-3 rounded" />
            <button onClick={() => handleSubmit("/admin/aluno")}
              className="bg-teal-600 text-white px-4 py-2 rounded">Salvar</button>
          </div>
        )}

        {aba === "turma" && (
          <div className="bg-white p-6 rounded shadow max-w-lg">
            <input type="text" name="nome" placeholder="Nome da Turma" value={form.nome || ""} onChange={handleChange}
              className="block w-full border p-2 mb-3 rounded" />
            <input type="text" name="descricao" placeholder="Descrição" value={form.descricao || ""} onChange={handleChange}
              className="block w-full border p-2 mb-3 rounded" />
            <button onClick={() => handleSubmit("/admin/turma")}
              className="bg-teal-600 text-white px-4 py-2 rounded">Criar Turma</button>
          </div>
        )}

        {aba === "horario" && (
          <div className="bg-white p-6 rounded shadow max-w-lg">
            <input type="text" name="diaSemana" placeholder="Dia da semana" value={form.diaSemana || ""} onChange={handleChange}
              className="block w-full border p-2 mb-3 rounded" />
            <input type="text" name="horaInicio" placeholder="Hora início (ex: 08:00)" value={form.horaInicio || ""} onChange={handleChange}
              className="block w-full border p-2 mb-3 rounded" />
            <input type="text" name="horaFim" placeholder="Hora fim (ex: 09:00)" value={form.horaFim || ""} onChange={handleChange}
              className="block w-full border p-2 mb-3 rounded" />
            <input type="text" name="turmaId" placeholder="ID da Turma" value={form.turmaId || ""} onChange={handleChange}
              className="block w-full border p-2 mb-3 rounded" />
            <input type="text" name="professorId" placeholder="ID do Professor" value={form.professorId || ""} onChange={handleChange}
              className="block w-full border p-2 mb-3 rounded" />
            <button onClick={() => handleSubmit("/admin/horario")}
              className="bg-teal-600 text-white px-4 py-2 rounded">Definir Horário</button>
          </div>
        )}
      </main>
    </div>
  );
}
