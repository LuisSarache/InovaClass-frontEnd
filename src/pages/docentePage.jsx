import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import DocenteNavBar from '../components/docenteNavBar';

const DocentePage = () => {
  const [mostrarAnexo, setMostrarAnexo] = useState(false);
  const [sala, setSala] = useState('');
  const [materia, setMateria] = useState('');
  const [arquivo, setArquivo] = useState(null);

  const [historico, setHistorico] = useState(() => {
    const saved = localStorage.getItem('historicoAtividades');
    return saved ? JSON.parse(saved) : [];
  });

  const handleAnexarAtividade = (e) => {
    e.preventDefault();
    if (!sala || !materia || !arquivo) {
      alert('Preencha todos os campos e selecione um arquivo.');
      return;
    }

    const novaAtividade = {
      id: Date.now(),
      sala,
      materia,
      nomeArquivo: arquivo.name,
      data: new Date().toLocaleString(),
    };

    const novoHistorico = [novaAtividade, ...historico];
    setHistorico(novoHistorico);
    localStorage.setItem('historicoAtividades', JSON.stringify(novoHistorico));

    alert(`Atividade de ${materia} para a sala ${sala} anexada com sucesso!`);

    setSala('');
    setMateria('');
    setArquivo(null);
    setMostrarAnexo(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
      <div className="w-full md:w-64">
        <DocenteNavBar />
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-gradient-to-br from-cyan-800 to-cyan-600">
        
        {/* CARD ANEXAR ATIVIDADES */}
        <div className="bg-cyan-950 p-4 md:p-6 rounded-2xl shadow text-white flex flex-col">
          <h2 className="text-lg md:text-xl font-bold mb-2">📝 Anexe suas Atividades</h2>
          <button
            onClick={() => setMostrarAnexo(true)}
            className="mt-4 px-4 py-2 bg-cyan-400 text-cyan-900 font-bold rounded hover:bg-cyan-300"
          >
            ➤➤➤
          </button>

          {/* Histórico das atividades */}
          <div className="mt-6 overflow-auto max-h-56 md:max-h-64 text-sm md:text-base">
            <h3 className="font-semibold mb-2">Histórico de Atividades Anexadas</h3>
            {historico.length === 0 ? (
              <p className="text-gray-300">Nenhuma atividade anexada ainda.</p>
            ) : (
              <ul className="space-y-2">
                {historico.map((atividade) => (
                  <li key={atividade.id} className="bg-cyan-800 rounded p-2 break-words">
                    <p><strong>Sala:</strong> {atividade.sala}</p>
                    <p><strong>Matéria:</strong> {atividade.materia}</p>
                    <p><strong>Arquivo:</strong> {atividade.nomeArquivo}</p>
                    <p className="text-xs text-gray-400">{atividade.data}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* OUTROS CARDS */}
        <div className="bg-cyan-700 p-4 md:p-6 rounded-2xl shadow text-white">
          <h2 className="text-lg md:text-xl font-bold mb-2">💡 Dica do Dia</h2>
          <p className="text-sm">
            Ensinar não é transferir conhecimento, mas criar possibilidades para sua construção.
          </p>
        </div>

        <div className="bg-cyan-950 p-4 md:p-6 rounded-2xl shadow text-white col-span-1 md:col-span-2">
          <h2 className="text-lg md:text-xl font-bold">📊 Desempenho das Turmas</h2>
          <p className="text-base md:text-lg text-gray-300 mb-2">Acompanhe a evolução dos alunos</p>
          <Link
            to="/desempenho"
            className="mt-2 px-4 py-2 bg-cyan-400 text-cyan-900 font-bold rounded hover:bg-cyan-300 inline-block"
          >
            Buscar Turmas 🔍
          </Link>
        </div>

        <div className="bg-cyan-700 p-4 md:p-6 rounded-2xl shadow text-white col-span-1 md:col-span-2">
          <h2 className="text-lg md:text-xl font-bold mb-2">❓ Alguma Dúvida?</h2>
          <p className="mb-3">Pergunte para I.A</p>
          <Link
            to="/chatbox1"
            className="mt-2 px-4 py-2 bg-cyan-400 text-cyan-900 font-bold rounded hover:bg-cyan-300 inline-block"
          >
            Pergunte já!
          </Link>
        </div>
      </main>

      {/* MODAL DE ANEXAR ATIVIDADES */}
      {mostrarAnexo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div className="bg-white text-black p-4 md:p-6 rounded-2xl shadow-lg w-full max-w-lg">
            <h2 className="text-lg md:text-xl font-bold mb-4">📎 Anexar Atividade</h2>

            <form onSubmit={handleAnexarAtividade} className="flex flex-col gap-4 text-sm md:text-base">
              <label className="flex flex-col">
                Sala:
                <select
                  value={sala}
                  onChange={(e) => setSala(e.target.value)}
                  className="border p-2 rounded"
                >
                  <option value="">Selecione a sala</option>
                  <option value="1A">1º Ano - A</option>
                  <option value="1B">1º Ano - B</option>
                  <option value="2A">2º Ano - A</option>
                  <option value="2B">2º Ano - B</option>
                </select>
              </label>

              <label className="flex flex-col">
                Matéria:
                <select
                  value={materia}
                  onChange={(e) => setMateria(e.target.value)}
                  className="border p-2 rounded"
                >
                  <option value="">Selecione a matéria</option>
                  <option value="Matemática">Matemática</option>
                  <option value="Português">Português</option>
                  <option value="História">História</option>
                  <option value="Ciências">Ciências</option>
                </select>
              </label>

              <label className="flex flex-col">
                Arquivo:
                <input
                  type="file"
                  onChange={(e) => setArquivo(e.target.files[0])}
                  className="border p-2 rounded"
                />
              </label>

              <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setMostrarAnexo(false)}
                  className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500"
                >
                  Anexar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocentePage;
