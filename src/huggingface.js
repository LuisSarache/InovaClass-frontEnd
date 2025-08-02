import { InferenceClient } from "@huggingface/inference";
 
const client = new InferenceClient(import.meta.env.VITE_HF_TOKEN);
 
export async function enviarParaIA(mensagemUsuario) {
    try {
        const promptFinal = `
Você é um assistente gentil e direto. Responda com clareza, sem mostrar seu raciocínio interno e sem usar tags como <think>. Dê apenas a resposta final para o usuário, de forma simples e amigável.
 
Usuário: "${mensagemUsuario}"
`;
 
        const resposta = await client.chatCompletion({
            provider: "novita",
            model: "zai-org/GLM-4.5",
            messages: [
                {
                    role: "user",
                    content: promptFinal,
                },
            ],
        });
 
        let conteudo = resposta.choices?.[0]?.message?.content ?? "";
 
        // Remove blocos entre <think> e </think>, se existirem
        conteudo = conteudo.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
 
        return conteudo || "A IA não retornou uma resposta útil.";
    } catch (erro) {
        console.error("Erro ao conectar com Hugging Face:", erro);
        return "Erro ao conectar com a IA 😢";
    }
}
