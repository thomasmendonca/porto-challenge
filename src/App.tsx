import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { GlobalStyles } from './styles/GlobalStyles'
import Home from "./pages/home/Home"

import {routes} from './routes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App