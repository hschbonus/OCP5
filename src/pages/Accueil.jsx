import { useEffect } from "react"
import imgfond1 from '../assets/imgfond1.png'
import ImgEntete from "../components/Img-entete";

function Accueil() {

  useEffect(() => {
    document.title = "Kasa - Accueil";
  }
  , []);

  return (
    <section className="accueil">
      <ImgEntete
        src={imgfond1}
        alt="Image de falaises par temps brumeux"
      />
    </section>
  )
}

export default Accueil
