import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BuscarAlunoPage() {
  const [search, setSearch] = useState('');

  const atividades = [
    { titulo: 'Redação sobre Meio Ambiente', professor: 'Prof. João', data: '15/07', link: '#' },
    { titulo: 'Exercício de Matemática', professor: 'Profª. Ana', data: '18/07', link: '#' },
  ];

  const noticias = [
    { titulo: 'Festa Junina Confirmada!', conteudo: 'Acontecerá dia 20/07 no pátio.', link: '#' },
    { titulo: 'Entrega de Boletins', conteudo: 'Dia 25/07 na secretaria.', link: '#' },
  ];

  const eventos = [
    { evento: 'Feira Cultural', data: '15/07' },
    { evento: 'Prova Final', data: '25/07' },
  ];

  const atividadesFiltradas = atividades.filter(a => a.titulo.toLowerCase().includes(search.toLowerCase()));
  const noticiasFiltradas = noticias.filter(n => n.titulo.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
       <aside className="w-64 p-4 bg-cyan-950 flex flex-col gap-4">
               
                       <a href="/" className="text-2xl font-bold mb-6 hover:text-cyan-300 transition-colors">
                         Inova Class
                       </a>
               
                       <Link
                        to="/buscar"
                       className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700">
                         📄 Buscar
                      </Link>
               
                        <Link 
                       to="/alunopage"
                        className="flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded hover:bg-cyan-500">
                         🏠 Área do Aluno
                       </Link>
               
                       <Link 
                       to="/alunochat"
                       className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700">
                         👨‍🏫 Pergunte ao Professor
                       </Link>
               
                       <Link
                         to="/horario1"
                         className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
                       >
                         🗓️ Horários
                       </Link>
                     </aside>
     

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block mb-6">🔍 Buscar</h1>

        <input
          type="text"
          placeholder="Buscar atividades ou notícias..."
          className="w-full bg-cyan-900 p-3 rounded mb-6 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-cyan-800 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-4">📝 Atividades Recentes</h2>
            {atividadesFiltradas.map((a, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{a.titulo}</h3>
                <p className="text-sm text-cyan-300">{a.professor} - Entrega: {a.data}</p>
                <a href={a.link} className="text-cyan-400 hover:text-cyan-200 text-sm">Ver Atividade</a>
              </div>
            ))}
            {atividadesFiltradas.length === 0 && <p className="text-cyan-300">Nenhuma atividade encontrada.</p>}
          </div>

          <div className="bg-cyan-800 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-4">📰 Notícias da Escola</h2>
            {noticiasFiltradas.map((n, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{n.titulo}</h3>
                <p className="text-sm text-cyan-300">{n.conteudo}</p>
                <a href={n.link} className="text-cyan-400 hover:text-cyan-200 text-sm">Ler mais</a>
              </div>
            ))}
            {noticiasFiltradas.length === 0 && <p className="text-cyan-300">Nenhuma notícia encontrada.</p>}
          </div>

          <div className="bg-cyan-800 p-6 rounded-2xl shadow col-span-2">
            <h2 className="text-xl font-bold mb-4">📅 Próximos Eventos</h2>
            <ul>
              {eventos.map((e, index) => (
                <li key={index} className="mb-2">
                  <span className="font-semibold">{e.evento}</span> - <span className="text-cyan-300">{e.data}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
