import { useEffect } from "react"
import imgfond2 from '../assets/imgfond2.png'
import ImgEntete from "../components/Img-entete";


function Apropos() {

  useEffect(() => {
    document.title = "Kasa - A propos";
  }
  , []);

  return (
    <section className="apropos">
      <ImgEntete
        src={imgfond2}
        alt="Paysage de montagnes et forêt"
      />
    </section>
  )
}

export default Apropos
