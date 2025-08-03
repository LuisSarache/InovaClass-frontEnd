import React, { useState } from 'react';
import DocenteNavBar from '../components/docenteNavBar';

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
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-cyan-950 to-cyan-800 text-white">
      <div className="w-full md:w-64">
        <DocenteNavBar />
      </div>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-4">
          <h1 className="text-2xl md:text-4xl font-bold border-b-4 border-cyan-500 inline-block">
            Horários
          </h1>
          <input
            type="text"
            placeholder="Pesquisar"
            className="w-full md:w-auto bg-cyan-900 px-4 py-2 rounded focus:outline-none text-sm md:text-base"
          />
        </div>

        <div className="bg-cyan-900 rounded-lg p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Dias */}
            <div className="col-span-1">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Dias</h2>
              <div className="grid grid-cols-2 md:flex md:flex-col gap-3">
                {Object.keys(schedule).map((day) => (
                  <button
                    key={day}
                    className={`px-4 py-2 rounded text-sm md:text-base ${
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

            {/* Salas do dia */}
            <div className="col-span-1 md:col-span-3">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Salas do Dia</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {schedule[selectedDay].map((sala, index) => (
                  <div
                    key={index}
                    className="bg-cyan-700 hover:bg-cyan-600 p-3 md:p-4 rounded text-center cursor-pointer text-sm md:text-base"
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
