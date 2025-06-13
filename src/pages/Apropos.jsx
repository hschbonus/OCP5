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
        imgEnteteSrc={imgfond2}
        imgEnteteAlt="Paysage de montagnes et forêt"
        overlayOpacity={0.3}
      />
    </section>
  )
}

export default Apropos
