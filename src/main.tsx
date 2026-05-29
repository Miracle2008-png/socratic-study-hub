import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GamificationProvider } from './context/GamificationContext.tsx'
import { StudyProgressProvider } from './context/StudyProgressContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GamificationProvider>
      <StudyProgressProvider>
        <App />
      </StudyProgressProvider>
    </GamificationProvider>
  </StrictMode>,
)
