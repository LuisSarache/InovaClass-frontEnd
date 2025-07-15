import React, {useState} from "react";

const RegisterForm = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const novoUsuario = {nome, email}
        localStorage.setItem('user', JSON.stringify(novoUsuario))
        window.location.href='/'
        
    }
    return (
        <>
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6 text-black">Cadastrar</h2>
                <form onSubmit={handleSubmit}>
                <div>
                        <label>Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none 
                            focus:ring-2 focus:ring-green-500 text-sm sm:text-base text-black"
                            placeholder="Digite seu nome" />
                    </div>
                    <div>
                        <label>E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none 
                            focus:ring-2 focus:ring-green-500 text-sm sm:text-base text-black"
                            placeholder="Digite seu email" />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none 
                            focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                            placeholder="Digite sua senha" />
                    </div>
                    <button type="submit" className="bg-green-500 hover:bg-green-600 px-6 py-2 
                    rounded-lg transition duration-300 w-full sm:w-full mt-2 text-black">
                        Cadastrar</button>
                </form>
                
                
            </div>
        </>
    )
}

export default RegisterForm