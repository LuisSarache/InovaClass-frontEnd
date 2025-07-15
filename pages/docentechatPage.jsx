import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProfessorChat() {
  const [resposta, setResposta] = useState("");
  const [mensagens, setMensagens] = useState(() => {
    const saved = localStorage.getItem("chatAluno");
    return saved ? JSON.parse(saved) : [];
  });

  const enviarResposta = (index) => {
    if (resposta.trim() === "") return;
    const novasMensagens = mensagens.map((msg, i) =>
      i === index ? { ...msg, resposta } : msg
    );
    setMensagens(novasMensagens);
    localStorage.setItem("chatAluno", JSON.stringify(novasMensagens));
    setResposta("");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
      
     <aside className="w-64 p-4 bg-cyan-950 flex flex-col gap-4">
         <a href="/" className="text-2xl font-bold mb-6 hover:text-cyan-300 transition-colors">
          Inova Class
        </a>
        <Link
          to="/desempenho"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
        >
          🔍 Buscar Turmas
        </Link>
         <Link 
          to="/docentepage"
         className="flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded hover:bg-cyan-500">
          🧑‍🏫 Área do Docente
        </Link>
       <Link 
        to="/docentechat"
       className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700">
          ❓ Dúvidas do Aluno
        </Link>
        <Link
         to="/horario2"
        className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700">
          🗓️ Horários
      </Link>
      </aside>

      
      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto bg-cyan-900 text-white rounded-2xl shadow-lg p-4 flex flex-col gap-4">
          <h2 className="text-xl font-bold mb-4">📥 Perguntas dos Alunos</h2>

          <div className="flex flex-col gap-4 max-h-96 overflow-y-auto">
            {mensagens.length === 0 ? (
              <p className="text-center text-cyan-300">Nenhuma pergunta ainda.</p>
            ) : (
              mensagens.map((msg, index) => (
                <div key={index} className="bg-cyan-800 p-4 rounded-lg">
                  <p className="font-semibold">{msg.autor === "aluno" ? "Aluno" : "Professor"}:</p>
                  <p className="mb-2">{msg.texto}</p>
                  {msg.resposta ? (
                    <p className="text-green-300">Resposta: {msg.resposta}</p>
                  ) : (
                    <div className="flex gap-2 mt-2">
                      <input
                        className="flex-1 rounded-lg p-2 text-black"
                        placeholder="Responder..."
                        value={resposta}
                        onChange={(e) => setResposta(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && enviarResposta(index)}
                      />
                      <button
                        onClick={() => enviarResposta(index)}
                        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg"
                      >
                        Responder
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
