import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const schedule = {
  'Segunda-feira': ['Ed.Física', 'Química', 'História','Português','Inglês'],
  'Terça-feira': ['Física', 'Português', 'Matemática', 'Ed. Física','Redação'],
  'Quarta-feira': ['Artes', 'Sociologia', 'Filosofia', 'Biologia','Física'],
  'Quinta-feira': ['Ética', 'PCC', 'Tec.inovação','Filosofia','Redação'],
  'Sexta-feira': ['T.I', 'Literatura', 'Biologia','Português','Química'],
};

export default function HorariosPage2() {
  const [selectedDay, setSelectedDay] = useState('Segunda-feira');

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cyan-950 to-cyan-800 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-cyan-900 flex flex-col p-4">
        <div className="text-2xl font-bold mb-8">Inova Class</div>
        <nav className="flex flex-col gap-4">
          <a className="flex items-center gap-3 hover:text-cyan-300 cursor-pointer">
            <i className="bi bi-search"></i>
            Buscar
          </a>
             <Link
          to="/docentepage"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700"
        >
          Área do Docente
        </Link>
          <a className="flex items-center gap-3 hover:text-cyan-300 cursor-pointer">
            <i className="bi bi-chat"></i>
            Duvidas do aluno
          </a>
          <a className="flex items-center gap-3 bg-cyan-700 rounded p-2">
            <i className="bi bi-calendar-event"></i>
            Horários
          </a>
        </nav>
      </aside>

      {/* Conteúdo */}
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
              <h2 className="text-xl font-semibold mb-4">Turmas do dia</h2>
              <div className="grid grid-cols-3 gap-4">
                {schedule[selectedDay].map((subject) => (
                  <div
                    key={subject}
                    className="bg-cyan-700 hover:bg-cyan-600 p-4 rounded text-center cursor-pointer"
                  >
                    {subject}
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
