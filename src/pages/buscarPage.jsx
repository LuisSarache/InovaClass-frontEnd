import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AlunoNavBar from '../components/alunoNavBar';


export default function BuscarAlunoPage() {
  const [search, setSearch] = useState('');

  const noticias = [
    { titulo: 'Festa Junina Confirmada!', conteudo: 'Acontecerá dia 20/07 no pátio.', link: '#' },
    { titulo: 'Entrega de Boletins', conteudo: 'Dia 25/07 na secretaria.', link: '#' },
  ];

  const eventos = [
    { evento: 'Feira Cultural', data: '15/07' },
    { evento: 'Prova Final', data: '25/07' },
  ];

  const noticiasFiltradas = noticias.filter(n =>
    n.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
      <AlunoNavBar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block mb-6">🔍 Buscar</h1>

        <input
          type="text"
          placeholder="Buscar notícias..."
          className="w-full bg-cyan-900 p-3 rounded mb-6 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-6">
          {/* NOTICIAS */}
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

          {/* EVENTOS */}
          <div className="bg-cyan-800 p-6 rounded-2xl shadow">
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
