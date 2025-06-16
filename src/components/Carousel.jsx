import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Carousel({ logements }) {

    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);
    const pictures = logement.pictures;
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className='logement-carousel'>
        <img
            src={pictures[currentIndex]}
            alt={`Image ${currentIndex + 1} de ${logement.title}`}
        />
        <div className='carousel-controls'>
            <div className='carousel-buttons'>
            <FontAwesomeIcon
                icon={faChevronLeft}
                size="xl"
                onClick={() =>
                setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length)
                }
            />
            </div>
            <span className='carousel-counter'>{currentIndex + 1}/{pictures.length}</span>
            <div className='carousel-buttons'>
            <FontAwesomeIcon
                icon={faChevronRight}
                size="xl"
                onClick={() => setCurrentIndex((currentIndex + 1) % pictures.length)}
            />
            </div>
        </div>
        </div>
    );
}

export default Carousel;
