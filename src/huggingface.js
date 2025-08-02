export async function enviarParaIA(mensagemUsuario) {
    try {
        const response = await fetch("https://inovaclass-backend.onrender.com/api/ia", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ mensagem: mensagemUsuario }),
        });

        if (!response.ok) {
            throw new Error("Erro na requisição ao backend");
        }

        const data = await response.json();
        return data.resposta || "A IA não retornou uma resposta útil.";
    } catch (erro) {
        console.error("Erro ao conectar com backend:", erro);
        return "Erro ao conectar com a IA 😢";
    }
}
