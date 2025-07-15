import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";
import AlunoPage from "./pages/alunoPage";
import DocentePage from "./pages/docentePage";
import HelpPage from "./pages/helpPage";
import DesempenhoPage from "./pages/desempenhoPage";
import HorariosonePage from "./pages/horariosonePage";
import RespostaduvidaPage from "./pages/respostaduvidaPage";
import AlunochatPage from "./pages/alunochatPage";
import DocentechatPage from "./pages/docentechatPage";
import HorariostwoPage from "./pages/horariostwoPage";
import BuscarPage from "./pages/buscarPage";





function App() {
  return (
    <Router>
      <Routes>
        {/*rota raiz do projeto e estrutura padrão de escrita*/}
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/alunopage" element={<AlunoPage />} />
        <Route path="/docentepage" element={<DocentePage />} /> 
        <Route path="/help" element={<HelpPage />} />
        <Route path="/desempenho" element={<DesempenhoPage />} />
        <Route path="/horario1" element={<HorariosonePage />} />
        <Route path="/resposta" element={<RespostaduvidaPage />} />
        <Route path="/docentechat" element={<DocentechatPage />} />
        <Route path="/alunochat" element={<AlunochatPage />} />
        <Route path="/horario2" element={<HorariostwoPage />} />
        <Route path="/buscar" element={<BuscarPage />} />




      </Routes>
    </Router>
  );
}

export default App;