 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";
import AlunoPage from "./pages/alunoPage";
import DocentePage from "./pages/docentePage";
import DesempenhoPage from "./pages/desempenhoPage";
import HorariosonePage from "./pages/horariosonePage";
import RespostaduvidaPage from "./pages/respostaduvidaPage";
import AlunochatPage from "./pages/alunochatPage";
import DocentechatPage from "./pages/docentechatPage";
import HorariostwoPage from "./pages/horariostwoPage";
import BuscarPage from "./pages/buscarPage";
import RotaProtegida from "./components/RotaProtegida";
import AnexarAtividades from "./pages/anexaratividades";
import RegisterPage from "./pages/registerPage";
import ChatBox from "./pages/chatbox";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-aluno" element={<LoginPage />} />
        <Route path="/login-professor" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/alunopage"
          element={
            <RotaProtegida tipoPermitido="aluno">
              <AlunoPage />
            </RotaProtegida>
          }
        />
        <Route
          path="/alunochat"
          element={
            <RotaProtegida tipoPermitido="aluno">
              <AlunochatPage />
            </RotaProtegida>
          }
        />
        <Route
          path="/desempenho"
          element={
            <RotaProtegida tipoPermitido="professor">
              <DesempenhoPage />
            </RotaProtegida>
          }
        />
        <Route
          path="/horario1"
          element={
            <RotaProtegida tipoPermitido="aluno">
              <HorariosonePage />
            </RotaProtegida>
          }
        />
        <Route
          path="/docentepage"
          element={
            <RotaProtegida tipoPermitido="professor">
              <DocentePage />
            </RotaProtegida>
          }
        />
        <Route
          path="/docentechat"
          element={
            <RotaProtegida tipoPermitido="professor">
              <DocentechatPage />
            </RotaProtegida>
          }
        />
        <Route
          path="/horario2"
          element={
            <RotaProtegida tipoPermitido="professor">
              <HorariostwoPage />
            </RotaProtegida>
          }
        />
        <Route
          path="/anexaratv"
          element={
            <RotaProtegida tipoPermitido="professor">
              <AnexarAtividades />
            </RotaProtegida>
          }
        />
        <Route
          path="/chatbox1"
          element={
            <RotaProtegida tipoPermitido="professor">
              <ChatBox />
            </RotaProtegida>
          }
        />
        <Route
          path="/chatbox2"
          element={
            <RotaProtegida tipoPermitido="aluno">
              <ChatBox />
            </RotaProtegida>
          }
        />
        <Route path="/resposta" element={<RespostaduvidaPage />} />
        <Route path="/buscar" element={<BuscarPage />} />
      </Routes>
    </Router>
  );
}

export default App;