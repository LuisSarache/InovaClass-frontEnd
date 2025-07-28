import React, { useState } from 'react';
import Navbar from "../components/navbar";

const DuvidasPage = () => {
  const duvidas = [
    {
      pergunta: "Dificuldades com Login?",
      resposta: "Coloque seu CPF ou numero de matricula para realizar o login, com mais duvidas vá ate a secretaria da escola.",
    },
    {
      pergunta: "Sobre o site",
      resposta: "Este site foi criado para facilitar a conexão dos alunos e professores.",
    },
    {
      pergunta: "Como recebo avisos e comunicados da escola?",
      resposta: "Os avisos e comunicados ficam disponíveis na área do aluno no site.",
    },
    {
      pergunta: "Quais as regras de vestimenta?",
      resposta: "É obrigatório o uso do uniforme completo durante o horário escolar. Consulte o manual do aluno para detalhes.",
    },
   
  ];

  const [duvidaSelecionada, setDuvidaSelecionada] = useState(null);
  const [perguntaInput, setPerguntaInput] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white p-6 flex flex-col items-center">
      <Navbar />

      <h1 className="text-4xl font-bold mb-8 mt-30">Dúvidas Frequentes</h1>

      <div className="bg-cyan-800 rounded-lg p-6 max-w-4xl w-full flex flex-wrap justify-center gap-4">
        {duvidas.map((item, index) => (
          <button
            key={index}
            className={`px-5 py-3 rounded-lg shadow-md transition-colors duration-300
              ${
                duvidaSelecionada === index
                  ? "bg-teal-500 hover:bg-teal-600"
                  : "bg-teal-600 hover:bg-teal-700"
              }`}
            onClick={() => setDuvidaSelecionada(index)}
          >
            {item.pergunta}
          </button>
        ))}
      </div>

      {duvidaSelecionada !== null && (
        <section className="bg-white text-black rounded-xl shadow-lg p-8 max-w-3xl mt-10 w-full">
          <h2 className="text-2xl font-semibold mb-4">{duvidas[duvidaSelecionada].pergunta}</h2>
          <p className="text-lg leading-relaxed">{duvidas[duvidaSelecionada].resposta}</p>
        </section>
      )}

      <div className="mt-14 bg-cyan-800 rounded-xl flex items-center px-4 py-4 max-w-md w-full gap-4 shadow-md">
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
        />
        <button
          disabled={!perguntaInput.trim()}
          className={`px-5 py-2 rounded-md font-semibold transition-colors duration-300
            ${
              perguntaInput.trim()
                ? "bg-teal-600 hover:bg-teal-700 text-white cursor-pointer"
                : "bg-teal-400 text-gray-300 cursor-not-allowed"
            }`}
          onClick={() => {
            alert("Sua pergunta foi enviada! Em breve responderemos.");
            setPerguntaInput("");
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default DuvidasPage;
