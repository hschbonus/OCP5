import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Accueil from '../pages/Accueil.jsx'
import Apropos from '../pages/Apropos.jsx'
import Logement from '../pages/Logement.jsx'
import Error from '../pages/Error.jsx'

import dataLogements from '../liste-logements.json';


function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Logement/:id" element={<Logement logements={dataLogements}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
  )
}

export default AppRouter