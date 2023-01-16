import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function FutureProjects() {
    return(
        <section className='about-me-section'>
            <div className='more-detail-wrapper'>
            <Link to='/'><span style={{color: 'white'}}><FontAwesomeIcon className='fa-lg' icon={faArrowLeft}/></span></Link>
            <ul>
                <li style={{textIndent: '0'}}>Web app that interacts with Spotfiy API to create a collaborative queue of songs. Multiple users can choose songs to add to queue, others can vote to skip.</li>
                <li style={{textIndent: '0'}}>PWA workout tracker to collect daily logs and eventually chart progression.</li>
                
            </ul>
            </div>
            <div className='section-divider waves'></div>
      </section>
    )
}

export default FutureProjects;