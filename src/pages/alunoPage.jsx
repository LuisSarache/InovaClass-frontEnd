// src/pages/AlunoPage.jsx
import React, { useState } from 'react';
import AlunoNavBar from '../components/AlunoNavBar';

const AlunoPage = () => {
  const [mensagem, setMensagem] = useState('');
  const [respostaIA, setRespostaIA] = useState('');
  const [carregando, setCarregando] = useState(false);

  /*
  const enviarMensagem = async () => {
    if (!mensagem.trim()) return;

    setCarregando(true);
    try {
      const response = await axios.post(
        'https://inovaclass-backend.onrender.com/api/chat/chat',
        { message: mensagem },
        { withCredentials: true }
      );
      setRespostaIA(response.data.reply || 'Sem resposta.');
    } catch (error) {
      console.error('Erro ao enviar mensagem para a IA:', error);
      setRespostaIA('Erro ao obter resposta da IA.');
    } finally {
      setCarregando(false);
    }
  };
  */

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
      <AlunoNavBar />

      <main className="flex-1 p-8 grid grid-cols-2 gap-6 bg-gradient-to-br from-cyan-800 to-cyan-600">
        <div className="bg-cyan-950 p-6 rounded-2xl shadow text-white">
          <h2 className="text-xl font-bold mb-2">📢 Recados do prof J.J</h2>
          <p>Parabéns Matheus! Ótimo desempenho, continue assim!!</p>
        </div>

        <div className="bg-cyan-700 p-6 rounded-2xl shadow text-white relative">
          <h2 className="text-xl font-bold mb-2">💡 Dicas do dia</h2>
          <p className="text-sm">
            Nunca subestime o poder de um pequeno passo positivo. Cada um leva você mais perto do seu sonho.
          </p>
        </div>

        <div className="bg-cyan-950 p-6 rounded-2xl shadow text-white col-span-2">
          <h2 className="text-xl font-bold">📊 Seu Desempenho</h2>
          <p className="text-lg text-gray-300 mb-2">Excelente!</p>
          <div className="text-5xl font-bold text-cyan-400 mb-2">86%</div>
          <div className="h-24 bg-cyan-800 rounded-xl flex items-end">
            <div className="w-full h-2 bg-cyan-400 rounded"></div>
          </div>
        </div>

        <div className="bg-cyan-700 p-6 rounded-2xl shadow text-white col-span-2">
          <h2 className="text-xl font-bold mb-2">❓ Alguma Dúvida?</h2>
          <p className="mb-4">Pergunte para I.A</p>
        </div>
      </main>
    </div>
  );
};

export default AlunoPage;
