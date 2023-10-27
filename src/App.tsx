import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import CadastroVeiculos from "./pages/CadastroVeiculo/CadastroVeiculo"
import AcionarSinistro from './pages/AcionarSinistro/AcionarSinistro'
import {routes} from './routes'
import './App.css'
import VeiculoSinistro from "./pages/AcionarSinistro/VeiculoSinistro"
import EnderecoSinistro from "./pages/AcionarSinistro/EnderecoSinistro"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.cadastroVeiculos} element={<CadastroVeiculos />} />
        <Route path={routes.acionarSinistro} element={<AcionarSinistro />} />
        <Route path={routes.veiculoSinistro} element={<VeiculoSinistro />} />
        <Route path={routes.enderecoSinistro} element={<EnderecoSinistro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App