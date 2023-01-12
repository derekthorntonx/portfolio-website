import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import picture from '../assets/lighthouseMobile.png';

function Portfolio() {
    return (
        <div className='about-me-section'>
            <div className='more-detail-wrapper'>
            <Link to='/'><span style={{color: 'white'}}><FontAwesomeIcon className='fa-lg' icon={faArrowLeft}/></span></Link>
            <div className='sheet'>
                <h5>Development Commentary: </h5>
                <p>
                    The initial design had far more use of 'expensive' effects; however, the performance cost on mobile
                    devices did not justify extra flare. The new and current iteration was designed with the mobile-user experience
                    in mind, and was thus able to keep the audit scores quite high.
                </p>
                <div style={{display: 'flex', width:'100%', justifyContent: 'center'}}><img src={picture} alt='Lighthouse audit on mobile' style={{maxHeight: '30vmax', maxWidth: '30vmax'}}/></div>
                <p>
                    My main purpose when designing the general layout was based on the premise that I would likely have
                    less than a minute to make an impression on an on-looker. I opted to keep the design simple and clean, and presenting
                    the projects almost immediately. Additional detail would be accessible upon further navigation for those interested.
                </p>
        
            </div>
            </div>
            <div className='section-divider waves'></div>
      </div>
    )
}

export default Portfolio;