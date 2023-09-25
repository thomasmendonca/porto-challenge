import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlobalStyles } from './styles/GlobalStyles.ts'
import { CustomScrollBar } from './components/CustomScrollBar/CustomScrollBar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CustomScrollBar>
    <React.StrictMode>
    <GlobalStyles/>
    <App />
    </React.StrictMode>
  </CustomScrollBar>
 
)
