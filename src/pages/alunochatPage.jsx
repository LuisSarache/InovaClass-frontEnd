import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlunoNavBar from '../components/alunoNavBar';

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
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
      {/* NAVBAR */}
      <div className="w-full md:w-64">
        <AlunoNavBar />
      </div>

      {/* CHAT */}
      <main className="flex-1 p-4 md:p-8 flex flex-col">
        <div className="flex flex-col bg-cyan-900 text-white rounded-2xl shadow-lg p-4 gap-4 flex-grow">
          <h2 className="text-lg md:text-xl font-bold">💬 Fale com o Professor</h2>

          {/* Área das mensagens */}
          <div className="flex-grow overflow-y-auto flex flex-col gap-2 bg-cyan-800 p-3 rounded-lg">
            {conversa.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.autor === "aluno"
                    ? "bg-cyan-600 self-end text-right"
                    : "bg-cyan-700 self-start text-left"
                }`}
              >
                <p className="text-sm md:text-base">{msg.texto}</p>
              </div>
            ))}
          </div>

          {/* Campo de input + botão */}
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <input
              className="flex-1 rounded-lg p-2 text-white text-sm md:text-base"
              placeholder="Digite sua dúvida..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
            />
            <button
              onClick={enviarMensagem}
              className="w-full sm:w-auto px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm md:text-base"
            >
              Enviar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
