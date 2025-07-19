import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from 'react-router-dom';

 
 
export default function HelpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
})
const handleChange = (e) =>{
    setFormData({
        ...formData,[e.target.name]: e.target.value
    });
}
const handleSubmit = (e) =>{
    e.preventDefault();
 
    console.log(`Mensagem enviada ${formData.name} , ${formData.email}`)
    console.log(`${formData.message}`)
 
    alert('Mensagem enviada com sucesso')
 
    setFormData({name:'', email:'', message:''}) /* limpa os campos nome email e mensagem */
 
}
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
        <div  className= "flex flex-wrap justify-center gap-6">
 
          <Link
                      to="/resposta"
          rel="stylesheet" href="/" className="bg-teal-600 hover:bg-cyan-300 px-6 py-3 rounded-xl shadow-md text-lg font-medium transition-all duration-300"> Dificuldades com Login?
 
          </Link>
 
          <p className="bg-teal-600 hover:bg-cyan-300 px-6 py-3 rounded-xl shadow-md text-lg font-medium transition-all duration-300 space-x-4">   "Como recebo avisos e comunicados da escola?" </p>
         
    <p className="bg-teal-600 hover:bg-cyan-300 px-6 py-3 rounded-xl shadow-md text-lg font-medium transition-all duration-300 space-x-4"> Quais as regras de vestimenta?
 
    </p>
 
    <p className= "bg-teal-600 hover:bg-cyan-300 px-6 py-3 rounded-xl shadow-md text-lg font-medium transition-all duration-300 space-x-4"> Dúvidas do Professor </p>
           
         
          </div>
          {/* Direita */}
          <div className="flex items-start">
            <div className="flex items-center space-x-3">
             
              <span className="bg-teal-600 hover:bg-cyan-300 px-6 py-3 rounded-md shadow-md text-lg font-medium transition-all duration-300 space-x-4">Sobre o site</span>
            </div>
          </div>
        </div>
      </div>
 
      {/* Pergunta Extra */}
      <div className="mt-10 flex justify-center">
        <div className="bg-[#0b4a60] bg-opacity-30 px-6 py-4 rounded-full flex items-center space-x-3">
        <label htmlFor="name" className="block text-white font-medium mb-1">Ainda tem dúvidas?</label>
                    <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                    placeholder="Digite sua pergunta"/>
 
     
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
 