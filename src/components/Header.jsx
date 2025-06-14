import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import kasaLogoDesk from '../assets/kasa-logo-desktop.png'

function Header() {
    const location = useLocation();
    const isDefault = location.pathname === '/';
    const isAccueil = location.pathname === '/Accueil';
    const isApropos = location.pathname === '/Apropos';

    return (
        <header>
            <Link to="/">
                <img src={kasaLogoDesk} alt="Logo Kasa"/>    
            </Link>
            <nav>
                <Link className={isAccueil || isDefault ? 'souligné' : ''} 
                    to="/Accueil">Accueil</Link>
                <Link className={isApropos ? 'souligné' : ''} 
                    to="/Apropos">A Propos</Link>
            </nav>
        </header>
    )   

}

export default Header