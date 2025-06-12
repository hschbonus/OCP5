import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Accueil from './pages/Accueil.jsx'
import Apropos from './pages/Apropos.jsx'
import Logement from './pages/Logement.jsx'
import Error from './pages/Error.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import './style/main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/pages/Accueil" element={<Accueil />} />
        <Route path="/pages/Apropos" element={<Apropos />} />
        <Route path="/pages/Logement" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
