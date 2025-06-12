import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import AppRouter from './components/Router.jsx'

import './style/main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  </StrictMode>,
)
