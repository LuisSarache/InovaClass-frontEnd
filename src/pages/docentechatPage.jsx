import React, { useState } from "react";
import DocenteNavBar from "../components/docenteNavBar";

export default function ProfessorChat() {
  const [resposta, setResposta] = useState("");
  const [mensagens, setMensagens] = useState(() => {
    const saved = localStorage.getItem("chatAluno");
    return saved ? JSON.parse(saved) : [];
  });

  const enviarResposta = () => {
    if (resposta.trim() === "") return;
    const novasMensagens = [...mensagens, { autor: "professor", texto: resposta }];
    setMensagens(novasMensagens);
    localStorage.setItem("chatAluno", JSON.stringify(novasMensagens));
    setResposta("");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
      <div className="w-full md:w-64">
        <DocenteNavBar />
      </div>

      {/* CHAT */}
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-full md:max-w-3xl mx-auto bg-cyan-900 text-white rounded-2xl shadow-lg p-4 flex flex-col gap-4">
          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-center md:text-left">
            📥 Perguntas dos Alunos
          </h2>

          {/* Lista de mensagens */}
          <div className="flex flex-col gap-2 max-h-[50vh] md:max-h-96 overflow-y-auto bg-cyan-800 p-3 rounded-lg text-sm md:text-base">
            {mensagens.length === 0 ? (
              <p className="text-center text-cyan-300 text-sm md:text-base">
                Nenhuma pergunta ainda.
              </p>
            ) : (
              mensagens.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 md:p-3 rounded-lg max-w-[80%] md:max-w-xs break-words ${
                    msg.autor === "aluno"
                      ? "bg-cyan-600 self-start"
                      : "bg-green-700 self-end"
                  }`}
                >
                  <p>{msg.texto}</p>
                </div>
              ))
            )}
          </div>

          {/* Input e botão responsivos */}
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <input
              className="flex-1 rounded-lg p-2 md:p-3 text-black text-sm md:text-base"
              placeholder="Responder..."
              value={resposta}
              onChange={(e) => setResposta(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && enviarResposta()}
            />
            <button
              onClick={enviarResposta}
              className="px-4 md:px-6 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm md:text-base"
            >
              Enviar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
