import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import { WeavileTeamBuilderApp } from './WeavileTeamBuilderApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <WeavileTeamBuilderApp/>
    </BrowserRouter>
  </StrictMode>,
)
