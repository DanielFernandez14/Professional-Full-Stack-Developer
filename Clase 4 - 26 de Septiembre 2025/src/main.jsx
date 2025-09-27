import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {sumar} from './math.js'


console.log(sumar(20,40))

createRoot(document.getElementById('root')).render(
  <App />
)