import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>

)
