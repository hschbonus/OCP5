import { Link } from 'react-router-dom'
import kasaLogoDesk from '../assets/kasa-logo-desktop.png'

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={kasaLogoDesk} alt="Logo Kasa"/>    
            </Link>
            <nav>
                <Link to="/pages/Accueil">Accueil</Link>
                <Link to="/pages/Apropos">A propos</Link>
            </nav>
        </header>
    )   

}

export default Header