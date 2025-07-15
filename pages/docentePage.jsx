import { Link } from 'react-router-dom';

const DocentePage = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
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
         className="flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded hover:bg-cyan-500">
          🧑‍🏫 Área do Docente
        </Link>
       <Link 
        to="/docentechat"
       className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700">
          ❓ Dúvidas do Aluno
        </Link>
        <Link
         to="/horario2"
        className="flex items-center gap-2 px-4 py-2 bg-cyan-800 rounded hover:bg-cyan-700">
          🗓️ Horários
      </Link>
      </aside>

      <main className="flex-1 p-8 grid grid-cols-2 gap-6 bg-gradient-to-br from-cyan-800 to-cyan-600">
        <div className="bg-cyan-950 p-6 rounded-2xl shadow text-white">
          <h2 className="text-xl font-bold mb-2">📝 Anexe suas Atividades</h2>
          <button className="mt-4 px-4 py-2 bg-cyan-400 text-cyan-900 font-bold rounded hover:bg-cyan-300">
            ➤➤➤
          </button>
        </div>

        <div className="bg-cyan-700 p-6 rounded-2xl shadow text-white">
          <h2 className="text-xl font-bold mb-2">💡 Dica do Dia</h2>
          <p className="text-sm">
            Ensinar não é transferir conhecimento, mas criar possibilidades para sua construção.
          </p>
        </div>

        <div className="bg-cyan-950 p-6 rounded-2xl shadow text-white col-span-2">
          <h2 className="text-xl font-bold">📊 Desempenho das Turmas</h2>
          <p className="text-lg text-gray-300 mb-2">Acompanhe a evolução dos alunos</p>
          <Link
            to="/desempenho"
            className="mt-2 px-4 py-2 bg-cyan-400 text-cyan-900 font-bold rounded hover:bg-cyan-300"
          >
            Buscar Turmas 🔍
          </Link>
        </div>

        <div className="bg-cyan-700 p-6 rounded-2xl shadow text-white col-span-2">
          <h2 className="text-xl font-bold mb-2">❓ Alguma Dúvida?</h2>
          <p>Pergunte para I.A</p>
        </div>
      </main>
    </div>
  );
};

export default DocentePage;
