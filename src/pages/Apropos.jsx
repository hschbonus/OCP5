import { useEffect } from "react";
import imgfond2 from '../assets/imgfond2.png';
import ImgEntete from "../components/Img-entete";
import Collapse from "../components/Collapse";


function Apropos() {

  useEffect(() => {
    document.title = "Kasa - A propos";
  }
  , []);

  return (
    <section className="apropos">
      <ImgEntete
        imgEnteteSrc={imgfond2}
        imgEnteteAlt="Paysage de montagnes et forêt"
        overlayOpacity={0.3} />

      <Collapse 
        collapseTitle="Fiabilité" 
        collapseContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />

      <Collapse 
        collapseTitle="Respect" 
        collapseContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />

      <Collapse 
        collapseTitle="Service" 
        collapseContent="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." />

      <Collapse 
        collapseTitle="Sécurité" 
        collapseContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />

    </section>
  )
}

export default Apropos
