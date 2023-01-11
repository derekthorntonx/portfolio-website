import Github from '../assets/github-mark.svg';
import LinkedIn from '../assets/linkedin.svg';
import { Link } from 'react-router-dom';

function AboutMe( {aboutSectionIsVisible} ) {
    return (
        <div className={aboutSectionIsVisible ? 'about-me-card' : 'about-me-card hide'}>
            <div className="about-me-blurb">
                <h1>Hi, I'm Derek</h1>
                <h5>Aspiring Full-stack Web Developer</h5>
                <p style={{width: '85%', textIndent: '5vh'}}> I throughly enjoy the process of planning and creating just about anything, especially when it intersects with my hobbies. Finding new tools and technologies to further my ability to build is what keeps me dedicated to continuously learn.
                </p>
                <div style={{width: '35%', display: 'flex', justifyContent: 'space-evenly'}}>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/derekthorntonx">
                        <img alt='Github' src={Github}/>
                    </a>

                    <a rel="noopener noreferrer" target="_blank" href="http://google.com">
                        <img alt='LinkedIn' src={LinkedIn}/>
                    </a>
                </div>
                <Link to='/resume' target='_blank' className='about-me-resume project-links'>Resume</Link>
            </div>

        </div>
    )
}

export default AboutMe;