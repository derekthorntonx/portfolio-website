import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function FutureProjects() {
    return(
        <section className='about-me-section'>
            <div className='more-detail-wrapper'>
            <Link to='/'><span style={{color: 'white'}}><FontAwesomeIcon className='fa-lg' icon={faArrowLeft}/></span></Link>
            <ul>
                <li>Work in progress...</li>
                
            </ul>
            </div>
            <div className='section-divider waves'></div>
      </section>
    )
}

export default FutureProjects;