import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './components/Watchlist.css'
import React from 'react'
import App from './App.jsx'
import GlobalProvider from './context/GlobalContext'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider >
    <App />
    </GlobalProvider>
 </StrictMode>,
)