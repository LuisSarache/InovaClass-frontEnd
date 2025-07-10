import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


export default function HelpPage() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <Navbar />


    <div className="min-h-screen bg-gradient-to-b from-[#002b3f] to-[#3ed8c0] text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-center w-full">Precisa de ajuda?</h1>
        <div className="absolute top-6 right-6 flex space-x-4">
        
         
        </div>
      </div>

      {/* Help Box */}
      <div className="bg-[#0b4a60] bg-opacity-60 rounded-2xl p-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-6">
          {/* Esquerda */}
          <div className="space-y-6">
            <HelpItem icon="👤" text="Dificuldades com login?" />
            <HelpItem icon="🔔" text="Como recebo avisos e comunicados da escola?" />
            <HelpItem icon="👕" text="Quais as regras de vestimenta?" />
            <HelpItem icon="🎓" text="Dúvidas do professor" />
          </div>
          {/* Direita */}
          <div className="flex items-start">
            <div className="flex items-center space-x-3">
              
              <span className="font-semibold">Sobre o site</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pergunta Extra */}
      <div className="mt-10 flex justify-center">
        <div className="bg-[#8df5dc] bg-opacity-30 px-6 py-4 rounded-full flex items-center space-x-3">
          <span className="text-2xl">💬</span>
          <span className="font-semibold">Ainda possui dúvidas? Escreva sua pergunta!</span>
     
  
     
        </div>
      </div>
    </div>
       <div>
      <Footer/>
    </div>
    </div>
    
  
  )
}

function HelpItem({ icon, text }) {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-2xl">{icon}</span>
      <span className="font-semibold">{text}</span>
    </div>
   
    

  );
}