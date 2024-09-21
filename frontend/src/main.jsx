import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from '../routing/Routing.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing />
  </StrictMode>,
)
