import React, { useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";

const DuvidasPage = () => {
  const duvidas = [
    {
      pergunta: "Dificuldades com Login?",
      resposta:
        "Para criar uma conta, clique em registrar, se ainda tiver dificuldades, entre em contato com o suporte.",
    },
    {
      pergunta: "Sobre o site",
      resposta:
        "Este site foi criado para facilitar o acesso dos alunos, professores e responsáveis a  mais formas de interações, informações escolares e comunicados importantes.",
    },
    {
      pergunta: "Como recebo avisos e comunicados da escola?",
      resposta:
        "Os avisos e comunicados ficam disponíveis na área do aluno no site.",
    },
    {
      pergunta: "Quais as regras de vestimenta?",
      resposta:
        "É obrigatório o uso do uniforme completo durante o horário escolar. Consulte o manual do aluno para detalhes.",
    },
  ];

  const [duvidaSelecionada, setDuvidaSelecionada] = useState(null);
  const [perguntaInput, setPerguntaInput] = useState("");

  const enviarPergunta = async () => {
    if (!perguntaInput.trim()) return;

    try {
      await axios.post("https://inovaclass-backend.onrender.com/api/questions", {
        texto: perguntaInput.trim(),
      });
      alert("Sua pergunta foi enviada! Em breve responderemos.");
      setPerguntaInput("");
    } catch (error) {
      alert("Erro ao enviar a pergunta. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white p-6 flex flex-col">
      <Navbar />

      {/* Conteúdo centralizado verticalmente */}
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        {/* Botões das dúvidas fixas */}
        <div className="bg-cyan-800 p-8 rounded-lg flex flex-wrap gap-4 justify-center max-w-4xl w-full mb-10">
          {duvidas.map((item, index) => (
            <button
              key={index}
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-md min-w-[180px] text-center"
              onClick={() => setDuvidaSelecionada(index)}
              type="button"
            >
              {item.pergunta}
            </button>
          ))}
        </div>

        {/* Resposta da dúvida selecionada */}
        {duvidaSelecionada !== null && (
          <div className="bg-white text-black p-6 rounded-xl shadow-lg max-w-2xl text-center mb-10">
            <h2 className="text-xl font-bold mb-4">
              {duvidas[duvidaSelecionada].pergunta}
            </h2>
            <p className="text-base">{duvidas[duvidaSelecionada].resposta}</p>
          </div>
        )}
      </div>

      {/* Campo para enviar nova dúvida */}
      <div className="mt-6 bg-cyan-800 rounded-xl flex items-center px-4 py-4 max-w-md w-full gap-4 shadow-md mx-auto">
        <label htmlFor="perguntaInput" className="sr-only">
          Digite sua pergunta
        </label>
        <input
          id="perguntaInput"
          type="text"
          placeholder="Ainda tem dúvidas? Digite sua pergunta aqui..."
          value={perguntaInput}
          onChange={(e) => setPerguntaInput(e.target.value)}
          className="flex-1 rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
          onKeyDown={(e) => e.key === "Enter" && enviarPergunta()}
        />
        <button
          disabled={!perguntaInput.trim()}
          className={`px-5 py-2 rounded-md font-semibold transition-colors duration-300 ${
            perguntaInput.trim()
              ? "bg-teal-600 hover:bg-teal-700 text-white cursor-pointer"
              : "bg-teal-400 text-gray-300 cursor-not-allowed"
          }`}
          onClick={enviarPergunta}
          type="button"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default DuvidasPage;
