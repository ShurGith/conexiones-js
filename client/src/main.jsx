import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TaskContextProvider } from "./context/TaskProvider";
import App from './App.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskContextProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </TaskContextProvider>
  </StrictMode>,
)
