import { useState } from "react";
import { enviarParaIA } from "../huggingface";
import "../index.css";
 
function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
 
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
 
    const userMessage = { sender: "Você", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
 
    try {
      const respostaIA = await enviarParaIA(input);
      setMessages((prev) => [...prev, { sender: "IA", text: respostaIA }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "Erro", text: "Erro ao conectar com a IA." },
      ]);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col">
      <header className="bg-blue-500 text-white p-4 text-center text-2xl font-bold shadow">
        💬 Chat com DeepSeek
      </header>
 
      <main className="flex-1 flex flex-col overflow-hidden px-4 py-2">
        <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow p-4 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.sender === "Você"
                  ? "text-blue-700"
                  : msg.sender === "IA"
                  ? "text-green-700"
                  : "text-red-600"
              }`}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
          {loading && <div className="text-gray-500 italic">IA está digitando...</div>}
        </div>
 
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            className="flex-1 border border-blue-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Digite sua mensagem..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
            disabled={loading}
          >
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
}
 
export default ChatBox;