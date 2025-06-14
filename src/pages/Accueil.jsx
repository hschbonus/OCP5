import { useEffect } from "react"
import { Link } from 'react-router-dom'
import imgfond1 from '../assets/imgfond1.png'
import ImgEntete from "../components/Img-entete";
import Card from "../components/Card";
import listeLogements from '../liste-logements.json';

function Accueil() {

  useEffect(() => {
    document.title = "Kasa - Accueil";
  }
  , []);

  return (
    <section className="accueil">
      <ImgEntete
        imgEnteteSrc={imgfond1}
        imgEnteteAlt="Image de falaises par temps brumeux"
        overlayOpacity={0.6}
        textEntete={"Chez vous, partout et ailleurs"}
      />
      <div className="card-wrapper">
        {listeLogements.map((logement) => (
          <Link
            to={`/Logement/${logement.id}`}
            key={logement.id}
            >
            <Card
              // key={logement.id}
              cardTitle={logement.title}
              cardImg={logement.cover}
              id={logement.id}
            />
          </Link>
        ))}
        

      </div>

    </section>
  )
}

export default Accueil
