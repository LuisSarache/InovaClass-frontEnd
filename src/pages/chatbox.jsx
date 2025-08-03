import { useState, useEffect, useRef } from "react";
import AlunoNavBar from "../components/alunoNavBar";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Ex.: https://inovaclass-backend.onrender.com

export default function ChatBox() {
  const [mensagem, setMensagem] = useState("");
  const [conversa, setConversa] = useState([
    { autor: "IA", texto: "Olá! Como posso ajudar você hoje?" }
  ]);
  const [carregando, setCarregando] = useState(false);
  const chatRef = useRef(null);

  // Scroll automático para última mensagem
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [conversa]);

  const enviarMensagem = async () => {
    if (mensagem.trim() === "") return;

    const novaMensagem = { autor: "aluno", texto: mensagem.trim() };
    setConversa((prev) => [...prev, novaMensagem]);
    setMensagem("");
    setCarregando(true);

    try {
      // Faz a requisição para o backend que chama a IA
      const res = await axios.post(`${API_URL}/api/ia`, {
        mensagem: mensagem.trim()
      });

      const respostaIA = res.data || "Não obtive uma resposta.";

      // Atualiza conversa com resposta da IA
      setConversa((prev) => [...prev, { autor: "IA", texto: respostaIA }]);
    } catch (error) {
      console.error("Erro ao conectar com backend:", error);
      setConversa((prev) => [
        ...prev,
        { autor: "erro", texto: "Erro ao conectar com a IA." }
      ]);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
      <AlunoNavBar />

      <main className="flex-1 p-8 flex flex-col">
        <div className="flex flex-col bg-cyan-900 text-white rounded-2xl shadow-lg p-4 gap-4 flex-grow">
          <h2 className="text-xl font-bold">🤖 Chat com a IA</h2>

          <div
            ref={chatRef}
            className="flex-grow overflow-y-auto flex flex-col gap-2 bg-cyan-800 p-3 rounded-lg scrollable-chat"
            style={{ minHeight: 300, maxHeight: 500 }}
          >
            {conversa.map((msg, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-2xl transition-all duration-200 text-sm sm:text-base whitespace-pre-wrap break-words max-w-[100%]
                  ${
                    msg.autor === "aluno"
                      ? "bg-cyan-600 self-end text-right"
                      : msg.autor === "IA"
                      ? "bg-cyan-700 self-start text-left"
                      : "bg-red-500 self-start text-left"
                  }`}
              >
                {msg.texto}
              </div>
            ))}
            {carregando && (
              <div className="text-gray-300 italic self-start">
                IA está digitando...
              </div>
            )}
          </div>

          <div className="flex gap-2 mt-2">
            <input
              className="flex-1 rounded-lg p-3 text-black text-sm sm:text-base"
              placeholder="Digite sua pergunta para a IA..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
              disabled={carregando}
            />
            <button
              onClick={enviarMensagem}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg disabled:opacity-50"
              disabled={carregando || mensagem.trim() === ""}
              aria-label="Enviar mensagem"
            >
              Enviar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
