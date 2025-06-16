import { useParams, useNavigate } from 'react-router-dom';
import starActive from '../assets/star-active.png';
import starInactive from '../assets/star-inactive.png';
import { useEffect } from 'react';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';


function Logement({logements}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find(logement => logement.id === id);
  const description = logement ? logement.description : '';
  const equipements = logement ? logement.equipments : [];
  
  useEffect(() => {
    if (!logement) {
      navigate(`/Error`);
    }
  }, [logement, navigate]);

  if (!logement) return null;

  useEffect(() => {
    document.title = "Kasa - Logement";
  }
  , []);

  const [firstName, lastName] = logement.host.name.split(' ');

  return (
    <div className='logement-wrapper'>
      <Carousel logements={logements} />
      <div className='logement-info1'>
        <div className='logement-info1a'>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className='logement-tags'>
            {logement.tags.map((tag, index) => (
              <div key={index} className='logement-tag'>{tag}</div>
            ))}
          </div>
        </div>
        <div className='logement-info1b'>
          <div className='logement-host'>
            <div className='logement-host-name'>
              <p>{firstName}</p>
              <p>{lastName}</p>
            </div>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className='logement-rating'>
            {Array.from({ length: 5 }, (_, index) => (
              index < logement.rating ? 
              <img key={index} src = {starActive}/>
              : 
              <img key={index} src={starInactive}/>
            ))}
          </div>
        </div>
      </div>
      <div className='logement-info2'>
        <Collapse 
          collapseTitle="Description" 
          collapseContent={description} />
        <Collapse 
          collapseTitle="Équipements" 
          collapseContent={
            <ul className='logement-equipments'>
              {equipements.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
          />
        </div>
      </div>
    
  )
}

export default Logement
