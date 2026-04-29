import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { TranslationProvider } from './lib/i18n/TranslationContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TranslationProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </TranslationProvider>
  </StrictMode>,
)
