import React, { useState } from "react";

export default function AnexarAtividades() {
  const [sala, setSala] = useState("");
  const [materia, setMateria] = useState("");
  const [arquivo, setArquivo] = useState(null);
  const [atividades, setAtividades] = useState(() => {
    return JSON.parse(localStorage.getItem("atividades")) || [];
  });

  const handleUpload = (e) => {
    setArquivo(e.target.files[0]);
  };

  const enviarAtividade = (e) => {
    e.preventDefault();
    if (!sala || !materia || !arquivo) {
      alert("Por favor, selecione todos os campos e envie um arquivo.");
      return;
    }

    const novaAtividade = {
      id: Date.now(),
      sala,
      materia,
      nomeArquivo: arquivo.name,
      data: new Date().toLocaleString(),
    };

    const novasAtividades = [...atividades, novaAtividade];
    setAtividades(novasAtividades);
    localStorage.setItem("atividades", JSON.stringify(novasAtividades));

    alert("Atividade anexada com sucesso!");
    setSala("");
    setMateria("");
    setArquivo(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">📎 Anexar Atividades</h1>

      <form
        onSubmit={enviarAtividade}
        className="bg-cyan-800 p-4 rounded-lg flex flex-col gap-4 max-w-md"
      >
        {/* Seleção de Sala */}
        <label>
          Sala:
          <select
            value={sala}
            onChange={(e) => setSala(e.target.value)}
            className="w-full p-2 mt-1 text-black rounded"
          >
            <option value="">Selecione a sala</option>
            <option value="1A">1º Ano A</option>
            <option value="1B">1º Ano B</option>
            <option value="2A">2º Ano A</option>
            <option value="2B">2º Ano B</option>
          </select>
        </label>

        {/* Seleção de Matéria */}
        <label>
          Matéria:
          <select
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            className="w-full p-2 mt-1 text-black rounded"
          >
            <option value="">Selecione a matéria</option>
            <option value="Matemática">Matemática</option>
            <option value="Português">Português</option>
            <option value="História">História</option>
            <option value="Geografia">Geografia</option>
          </select>
        </label>

        {/* Upload de arquivo */}
        <label>
          Arquivo:
          <input
            type="file"
            onChange={handleUpload}
            className="w-full p-2 mt-1 text-black rounded"
          />
        </label>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded"
        >
          Enviar Atividade
        </button>
      </form>

      {/* Lista de Atividades */}
      {atividades.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">📂 Atividades Enviadas</h2>
          <ul className="bg-cyan-800 p-4 rounded-lg">
            {atividades.map((atv) => (
              <li key={atv.id} className="border-b border-cyan-600 py-2">
                <strong>{atv.sala}</strong> - {atv.materia} <br />
                Arquivo: {atv.nomeArquivo} <br />
                <span className="text-gray-300 text-sm">Enviado em {atv.data}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
