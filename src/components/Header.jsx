import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import kasaLogoDesk from '../assets/kasa-logo-desktop.png'

function Header() {
    const location = useLocation();
    const isDefault = location.pathname === '/';
    const isAccueil = location.pathname === '/pages/Accueil';
    const isApropos = location.pathname === '/pages/Apropos';

    return (
        <header>
            <Link to="/">
                <img src={kasaLogoDesk} alt="Logo Kasa"/>    
            </Link>
            <nav>
                <Link className={isAccueil || isDefault ? 'souligné' : ''} 
                    to="/pages/Accueil">Accueil</Link>
                <Link className={isApropos ? 'souligné' : ''} 
                    to="/pages/Apropos">A Propos</Link>
            </nav>
        </header>
    )   

}

export default Header