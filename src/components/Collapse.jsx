import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


function Collapse ({collapseTitle, collapseContent}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='collapse'>
            <div className='collapse-title'>
                <div className="collapse-title-text">{collapseTitle}</div>
                <div className='collapse-toggle' onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        size="xl"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s'}}
                    />
                </div>
            </div>
            {isOpen && <div className='collapse-content'>{collapseContent}</div>}
        </div>
    );
}

export default Collapse;