import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FeastProvider } from './providers/FeastProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FeastProvider>
      <App />
    </FeastProvider>
  </React.StrictMode>,
)
