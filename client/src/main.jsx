import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SearchContextProvider } from './context/SearchContext'
import {  AuthContextProvider } from './context/authContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthContextProvider>
  <SearchContextProvider>
  <App />
  </SearchContextProvider>
  </AuthContextProvider>
 
  </StrictMode>,
)
