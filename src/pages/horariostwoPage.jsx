import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const schedule = {
  'Segunda-feira': ['1º Reg 1', '1º Reg 2', '1º Reg 3', '2º Reg 1', '2º Reg 2'],
  'Terça-feira':   ['2º Reg 3', '3º Reg 1', '3º Reg 2', '3º Reg 3', '1º Reg 1'],
  'Quarta-feira':  ['1º Reg 2', '1º Reg 3', '2º Reg 1', '2º Reg 2', '2º Reg 3'],
  'Quinta-feira':  ['3º Reg 1', '3º Reg 2', '3º Reg 3', '1º Reg 1', '1º Reg 2'],
  'Sexta-feira':   ['1º Reg 3', '2º Reg 1', '2º Reg 2', '2º Reg 3', '3º Reg 1'],
};

const horarios = [
  'Primeiro Horário',
  'Segundo Horário',
  'Terceiro Horário',
  'Quarto Horário',
  'Quinto Horário',
];

export default function HorariosPage2() {
  const [selectedDay, setSelectedDay] = useState('Segunda-feira');

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cyan-950 to-cyan-800 text-white">
      
      {/* Sidebar Navbar Completa */}
      <aside className="w-64 p-4 bg-cyan-950 flex flex-col gap-4">
        <a href="/" className="text-2xl font-bold mb-6 hover:text-cyan-300 transition-colors">
          Inova Class
        </a>

        <Link
          to="/desempenho"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
        >
          🔍 Buscar Turmas
        </Link>

        <Link 
          to="/docentepage"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded hover:bg-cyan-500"
        >
          🧑‍🏫 Área do Docente
        </Link>

        <Link 
          to="/docentechat"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
        >
          ❓ Dúvidas do Aluno
        </Link>

        <Link
          to="/horario2"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
        >
          🗓️ Horários
        </Link>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block">
            Horários
          </h1>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Pesquisar"
              className="bg-cyan-900 px-4 py-2 rounded focus:outline-none"
            />
          </div>
        </div>

        <div className="bg-cyan-900 rounded-lg p-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-1">
              <h2 className="text-xl font-semibold mb-4">Dias</h2>
              <div className="flex flex-col gap-3">
                {Object.keys(schedule).map((day) => (
                  <button
                    key={day}
                    className={`px-4 py-2 rounded ${
                      selectedDay === day
                        ? 'bg-cyan-500 text-white'
                        : 'bg-cyan-700 hover:bg-cyan-600'
                    }`}
                    onClick={() => setSelectedDay(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-span-3">
              <h2 className="text-xl font-semibold mb-4">Salas do Dia</h2>
              <div className="grid grid-cols-2 gap-4">
                {schedule[selectedDay].map((sala, index) => (
                  <div
                    key={index}
                    className="bg-cyan-700 hover:bg-cyan-600 p-4 rounded text-center cursor-pointer"
                  >
                    <div className="font-bold mb-2">{horarios[index]}</div>
                    <div>{sala}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
