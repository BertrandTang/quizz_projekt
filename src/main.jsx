import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QuizzProvider } from './assets/contexts/QuizzContext'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizzProvider>
      <App />
    </QuizzProvider>
  </StrictMode>,
)