import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function JobTracker() {
    return (
        <div className='about-me-section'>
            <div className='more-detail-wrapper'>
            <Link to='/'><span style={{color: 'white'}}><FontAwesomeIcon className='fa-lg' icon={faArrowLeft}/></span></Link>
            <div>
                <p>My first full-stack application. The original intention was to increase the efficiency of a
                    process that I was previously managing through Notepad files. Built using as close to the vanilla
                    MERN tech-stack as possible for the sake of learning.

                    Users can create, filter for key terms, favourite/pin, and delete job applications. Postings are automatically
                    deleted after 4 months from their creation; although the time-to-deletion can be customized within
                    the options menu. User accounts are automatically deleted after 3 months of inactivity. These
                    auto-deletion features were added knowing the intention to make the web app public as a means to
                    future-proof the database capacity by removing unused or outdated content.
                </p>
        
            </div>
            </div>
            <div className='section-divider waves'></div>
      </div>
    )
}

export default JobTracker;