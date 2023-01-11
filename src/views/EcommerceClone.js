import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function EcommerceClone() {
    return (
        <div className='about-me-section'>
            <div className='more-detail-wrapper'>
            <Link to='/'><span style={{color: 'white'}}><FontAwesomeIcon className='fa-lg' icon={faArrowLeft}/></span></Link>
            <div>
                <p>text goes here
                </p>
        
            </div>
            </div>
            <div className='section-divider waves'></div>
      </div>
    )
}

export default EcommerceClone;