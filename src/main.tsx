import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GamificationProvider } from './context/GamificationContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GamificationProvider>
      <App />
    </GamificationProvider>
  </StrictMode>,
)
