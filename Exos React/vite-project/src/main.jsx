import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import header from './header.jsx'
import './header.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header />
  </StrictMode>,
)
