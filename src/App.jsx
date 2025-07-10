import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";
import AlunoPage from "./pages/alunoPage";
import DocentePage from "./pages/docentePage";
import HelpPage from "./pages/helpPage";
import DesempenhoPage from "./pages/desempenhoPage";
import HorariosonePage from "./pages/horariosonePage";





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
        



        {/* Nenhuma rota para /service */}
      </Routes>
    </Router>
  );
}

export default App;