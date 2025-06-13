import { useEffect } from "react"
import imgfond1 from '../assets/imgfond1.png'
import ImgEntete from "../components/Img-entete";
import Card from "../components/Card";

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
        overlayOpacity={0.5}
        textEntete={"Chez vous, partout et ailleurs"}
      />
      <div className="card-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />

      </div>

    </section>
  )
}

export default Accueil
