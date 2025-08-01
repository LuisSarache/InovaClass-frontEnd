import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlunoNavBar from '../components/AlunoNavBar';
export default function AlunoChat() {
  const [mensagem, setMensagem] = useState("");
  const [conversa, setConversa] = useState(() => {
    const saved = localStorage.getItem("chatAluno");
    return saved
      ? JSON.parse(saved)
      : [{ autor: "professor", texto: "Olá! Como posso ajudar?" }];
  });

  const enviarMensagem = () => {
    if (mensagem.trim() === "") return;
    const novaConversa = [...conversa, { autor: "aluno", texto: mensagem }];
    setConversa(novaConversa);
    localStorage.setItem("chatAluno", JSON.stringify(novaConversa));
    setMensagem("");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
      <AlunoNavBar />

      {/* CHAT */}
      <main className="flex-1 p-8 flex flex-col">
        <div className="flex flex-col bg-cyan-900 text-white rounded-2xl shadow-lg p-4 gap-4 flex-grow">
          <h2 className="text-xl font-bold">💬 Fale com o Professor</h2>

          <div className="flex-grow overflow-y-auto flex flex-col gap-2 bg-cyan-800 p-3 rounded-lg">
            {conversa.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-xs ${
                  msg.autor === "aluno"
                    ? "bg-cyan-600 self-end text-right"
                    : "bg-cyan-700 self-start text-left"
                }`}
              >
                <p>{msg.texto}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-2">
            <input
              className="flex-1 rounded-lg p-2 text-black"
              placeholder="Digite sua dúvida..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
            />
            <button
              onClick={enviarMensagem}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg"
            >
              Enviar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
