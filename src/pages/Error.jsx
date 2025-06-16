import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Error() {

  useEffect(() => {
    document.title = "Kasa - Erreur";
  }
  , []);
  

  return (
    <div className='error-wrapper'>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className={'souligné'} 
          to="/Accueil">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error
