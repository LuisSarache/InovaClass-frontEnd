import { useState, useEffect, useRef } from "react";
import { enviarParaIA } from "../huggingface";
import AlunoNavBar from "../components/alunoNavBar";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Definido no Vercel

export default function ChatBox() {
  const [mensagem, setMensagem] = useState("");
  const [conversa, setConversa] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const chatRef = useRef(null);

  // Busca mensagens do backend ao montar
  useEffect(() => {
    const fetchMensagens = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/ia`);
        setConversa(res.data);
      } catch (error) {
        console.error("Erro ao carregar mensagens:", error);
        setConversa([{ autor: "IA", texto: "Não foi possível carregar as mensagens." }]);
      }
    };
    fetchMensagens();
  }, []);

  // Scroll automático
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [conversa]);

  const enviarMensagem = async () => {
    if (mensagem.trim() === "") return;

    setCarregando(true);
    try {
      // Envia mensagem para IA (Hugging Face)
      const resposta = await enviarParaIA(mensagem.trim());

      // Salva mensagem do aluno no backend
      const resAluno = await axios.post(`${API_URL}/api/ia`, {
        autor: "aluno",
        texto: mensagem.trim(),
      });

      // Salva resposta da IA no backend
      const resIA = await axios.post(`${API_URL}/api/ia`, {
        autor: "IA",
        texto: resposta,
      });

      // Atualiza conversa local
      setConversa((prev) => [...prev, resAluno.data, resIA.data]);
      setMensagem("");
    } catch (error) {
      console.error("Erro ao conectar com backend:", error);
      setConversa((prev) => [
        ...prev,
        { autor: "erro", texto: "Erro ao conectar com a IA ou salvar mensagens." },
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
            {conversa.map((msg) => (
              <div
                key={msg.id || msg.createdAt}
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
              <div className="text-gray-300 italic self-start">IA está digitando...</div>
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
