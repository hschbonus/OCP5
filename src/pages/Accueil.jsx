import { useEffect } from "react"

function Accueil() {

  useEffect(() => {
    document.title = "Kasa - Accueil";
  }
  , []);

  return (
    <h1>Bienvenue sur la page d'Accueil</h1>
  )
}

export default Accueil
