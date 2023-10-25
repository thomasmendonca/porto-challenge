import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import CadastroVeiculos from "./pages/CadastroVeiculo/CadastroVeiculo"
import AcionarSinistro from './pages/AcionarSinistro/AcionarSinistro'
import {routes} from './routes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.cadastroVeiculos} element={<CadastroVeiculos />} />
        <Route path={routes.acionarSinistro} element={<AcionarSinistro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App