import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Portfolio() {
    return (
        <div className='about-me-section'>
            <div className='more-detail-wrapper'>
            <Link to='/'><span style={{color: 'white'}}><FontAwesomeIcon className='fa-lg' icon={faArrowLeft}/></span></Link>
            <div className='sheet'>
                <h5>Development Commentary: </h5>
                
        
            </div>
            </div>
            <div className='section-divider waves'></div>
      </div>
    )
}

export default Portfolio;