import { Link } from 'react-router-dom';

function Error() {
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
