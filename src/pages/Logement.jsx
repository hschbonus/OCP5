import { useParams } from 'react-router-dom';


function Logement({logements}) {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  return (
    <div className='logement-wrapper'>
      <div className='logement-carousel'>

      </div>

      <div className='logement-info1'>
        <div className='logement-info1a'>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className='logement-tags'>
            {logement.tags.map((tag, index) => (
              <span key={index} className='logement-tag'>{tag}</span>
            ))}
          </div>
        </div>
        <div className='logement-info1b'>
          <div className='logement-host'>
            <p className='logement-host-name'>{logement.host.name}</p>
            <img className='logement-host-img' src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className='logement-rating'>
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={`star ${index < logement.rating ? 'filled' : ''}`}>★</span>
            ))}
          </div>
        </div>
      </div>
      <div className='logement-info2'>
        <div className='logement-description'>
          <p>Description</p>
        </div>
        <div className='logement-equipements'>
          <p>Equipements</p>
        </div>
      </div>
    </div>
  )
}

export default Logement
