

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DocenteNavBar from '../components/docenteNavBar';


const DesempenhoPage = () => {
  const [alunos, setAlunos] = useState([]);
  const [salaBusca, setSalaBusca] = useState('');
  const [novoNome, setNovoNome] = useState('');
  const [novaSala, setNovaSala] = useState('');
  const [salvo, setSalvo] = useState(false);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('painel_alunos');
    if (dadosSalvos) {
      setAlunos(JSON.parse(dadosSalvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('painel_alunos', JSON.stringify(alunos));
    setSalvo(true);
    const timer = setTimeout(() => setSalvo(false), 1200);
    return () => clearTimeout(timer);
  }, [alunos]);

  const atualizarAluno = (id, campo, valor) => {
    if (campo.startsWith('nota')) {
      valor = Math.max(0, Math.min(10, parseFloat(valor) || 0));
    }
    const novosAlunos = alunos.map(aluno =>
      aluno.id === id ? { ...aluno, [campo]: valor } : aluno
    );
    setAlunos(novosAlunos);
  };

  const adicionarAluno = () => {
    if (!novoNome.trim() || !novaSala.trim()) return;
    const novoAluno = {
      id: Date.now(),
      nome: novoNome.trim(),
      sala: novaSala.trim(),
      nota1: '',
      nota2: '',
      nota3: '',
      avaliacao: ''
    };
    setAlunos([...alunos, novoAluno]);
    setNovoNome('');
    setNovaSala('');
  };

  const removerAluno = (id) => {
    const novosAlunos = alunos.filter(aluno => aluno.id !== id);
    setAlunos(novosAlunos);
  };

  const alunosFiltrados = salaBusca
    ? alunos.filter(aluno => aluno.sala.toLowerCase().includes(salaBusca.toLowerCase()))
    : alunos;

  const exportarCSV = () => {
    const linhas = [['Nome', 'Sala', 'Nota 1', 'Nota 2', 'Nota 3', 'Média', 'Avaliação', 'Status']];
    alunosFiltrados.forEach(aluno => {
      const n1 = parseFloat(aluno.nota1) || 0;
      const n2 = parseFloat(aluno.nota2) || 0;
      const n3 = parseFloat(aluno.nota3) || 0;
      const media = ((n1 + n2 + n3) / 3).toFixed(2);
      const status = media >= 6 ? 'Aprovado' : 'Reprovado';
      linhas.push([aluno.nome, aluno.sala, n1, n2, n3, media, aluno.avaliacao, status]);
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + linhas.map(e => e.join(';')).join('\n');
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', 'alunos.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
      
     <DocenteNavBar />


      {/* Main painel alunos */}
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">Painel de Alunos</h1>

        <div className="flex flex-wrap gap-4 mb-6 justify-center">
          <input
            type="text"
            placeholder="Buscar por Sala (ex: 3A)"
            value={salaBusca}
            onChange={(e) => setSalaBusca(e.target.value)}
            className="w-60 px-4 py-2 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />

          <input
            type="text"
            placeholder="Nome do Aluno"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
            className="w-60 px-4 py-2 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />

          <input
            type="text"
            placeholder="Sala"
            value={novaSala}
            onChange={(e) => setNovaSala(e.target.value)}
            className="w-32 px-4 py-2 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />

          <button
            onClick={adicionarAluno}
            className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full text-black transition duration-300"
          >
            Adicionar Aluno
          </button>

          <button
            onClick={exportarCSV}
            className="bg-cyan-400 hover:bg-cyan-300 px-6 py-2 rounded-full text-black transition duration-300"
          >
            Exportar CSV
          </button>
        </div>

        {salvo && (
          <p className="text-green-300 text-center mb-4 font-medium select-none">Alterações salvas</p>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full rounded-2xl shadow-lg border border-cyan-600 text-white">
            <thead className="bg-cyan-600 rounded-t-2xl">
              <tr>
                <th className="p-3 text-left">Nome</th>
                <th className="p-3 text-left">Sala</th>
                <th className="p-3 text-left">Nota 1</th>
                <th className="p-3 text-left">Nota 2</th>
                <th className="p-3 text-left">Nota 3</th>
                <th className="p-3 text-left">Média</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Avaliação</th>
                <th className="p-3 text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {alunosFiltrados
                .sort((a, b) => a.nome.localeCompare(b.nome))
                .map(aluno => {
                  const n1 = parseFloat(aluno.nota1) || 0;
                  const n2 = parseFloat(aluno.nota2) || 0;
                  const n3 = parseFloat(aluno.nota3) || 0;
                  const media = ((n1 + n2 + n3) / 3).toFixed(2);
                  const status = media >= 6 ? 'Aprovado' : 'Reprovado';

                  return (
                    <tr key={aluno.id} className="border-b border-cyan-700">
                      <td className="p-3 whitespace-nowrap">{aluno.nome}</td>
                      <td className="p-3 whitespace-nowrap">{aluno.sala}</td>
                      <td className="p-3">
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={aluno.nota1}
                          onChange={(e) => atualizarAluno(aluno.id, 'nota1', e.target.value)}
                          className="w-16 px-3 py-1 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />
                      </td>
                      <td className="p-3">
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={aluno.nota2}
                          onChange={(e) => atualizarAluno(aluno.id, 'nota2', e.target.value)}
                          className="w-16 px-3 py-1 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />
                      </td>
                      <td className="p-3">
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={aluno.nota3}
                          onChange={(e) => atualizarAluno(aluno.id, 'nota3', e.target.value)}
                          className="w-16 px-3 py-1 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />
                      </td>
                      <td className="p-3 font-semibold">{media}</td>
                      <td
                        className={`p-3 font-semibold ${
                          status === 'Aprovado' ? 'text-green-300' : 'text-red-400'
                        }`}
                      >
                        {status}
                      </td>
                      <td className="p-3">
                        <input
                          type="text"
                          value={aluno.avaliacao}
                          onChange={(e) => atualizarAluno(aluno.id, 'avaliacao', e.target.value)}
                          className="w-40 px-3 py-1 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => removerAluno(aluno.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-full transition"
                          title="Remover aluno"
                        >
                          Remover
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <footer className="mt-10 text-center text-cyan-300 text-sm select-none">
          © 2025 InovaClass - Todos os direitos reservados
        </footer>
      </main>
    </div>
  );
};

export default DesempenhoPage;
