import React, { useState } from 'react';
import Navbar from "../components/navbar";
import axios from 'axios';

const DuvidasPage = () => {
  // ... seu estado e dúvidas já definidos

  const [perguntaInput, setPerguntaInput] = useState("");

  const enviarPergunta = async () => {
    if (!perguntaInput.trim()) return;

    try {
      await axios.post('https://inovaclass-backend.onrender.com/api/questions', { texto: perguntaInput.trim() });
      alert("Sua pergunta foi enviada! Em breve responderemos.");
      setPerguntaInput("");
    } catch (error) {
      alert("Erro ao enviar a pergunta. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white p-6 flex flex-col items-center">
      <Navbar />

      {/* seu código... */}

      <div className="mt-14 bg-cyan-800 rounded-xl flex items-center px-4 py-4 max-w-md w-full gap-4 shadow-md">
        <label htmlFor="perguntaInput" className="sr-only">Digite sua pergunta</label>
        <input
          id="perguntaInput"
          type="text"
          placeholder="Ainda tem dúvidas? Digite sua pergunta aqui..."
          value={perguntaInput}
          onChange={(e) => setPerguntaInput(e.target.value)}
          className="flex-1 rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
          onKeyDown={(e) => e.key === 'Enter' && enviarPergunta()}
        />
        <button
          disabled={!perguntaInput.trim()}
          className={`px-5 py-2 rounded-md font-semibold transition-colors duration-300 ${
            perguntaInput.trim()
              ? "bg-teal-600 hover:bg-teal-700 text-white cursor-pointer"
              : "bg-teal-400 text-gray-300 cursor-not-allowed"
          }`}
          onClick={enviarPergunta}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default DuvidasPage;
