import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function JobTracker() {
    return (
        <div className='about-me-section'>
            <div className='more-detail-wrapper'>
            <Link to='/'><span style={{color: 'white'}}><FontAwesomeIcon className='fa-lg' icon={faArrowLeft}/></span></Link>
            <div className='sheet'>
                <h5>Development Commentary: </h5>
                <p>Created with the intention of assisting my own job hunting process. Front-end design heavily inspired
                    by neumorphism and a pastel-like colour-scheme. I was aiming to create visuals that conveyed an almost
                    plastic toy feel.
                </p>
                <p>
                    My primary motivation was to simply streamline something I would normally do with Notepad files; however, I added
                    a very simple user authentication system to allow others to use it as well. Originally it was going to utilize Google Auth and Passport,
                    but I felt that future employers seeking only to open the app for a few moments to click around would not appreciate
                    needing to link their Google account. This ease of use came at the cost of far more lenient authentication, which was the motivation behind having
                    accounts and documents auto-delete after a significant period of inactivity.
                </p>
                <p>
                    The tech stack utilized MongoDB, Node.js, and Express for the back-end, and React + vanilla CSS for the front-end.
                    The logic behind the back-end technologies is primarily due to the ability to program with Javascript when using Node.js,
                    allowing me to use Javascript for the entire application. MongoDB was chosen for the flexibility first and foremost, as I can easily
                    add or remove data fields based on future needs. For a program at this scale, the potential processing speed hit using MongoDB compared
                    to a SQL database was essentially irrelevant. Regarding the front-end, React was chosen due to its flexibility and overall light-weight/less opinionated
                    nature over other component-based framework/libraries. This factor was important to me because I valued the ability to easily customize the layout
                    for future implementations.
                </p>
        
            </div>
            </div>
            <div className='section-divider waves'></div>
      </div>
    )
}

export default JobTracker;