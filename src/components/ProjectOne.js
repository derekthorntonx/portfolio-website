import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import JobApplicationTracker from '../assets/jobApp.png';

function ProjectOne() {
    const [projectIsVisible, setProjectIsVisible] = useState();
    const projectRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          setProjectIsVisible(entry.isIntersecting);
        }, {
          threshold: 0.8
        })
        observer.observe(projectRef.current);
      }, [])

    return (
        <div className={projectIsVisible ? 'card show' : 'card'} ref={projectRef}>
            <div>
              <img alt='ProjectOne' loading="lazy" src={JobApplicationTracker}></img>
            </div>
        <div className='project-description'>
          <p style={{marginBottom: '1%', fontSize: '0.8rem'}}>A full-stack web app created to help track and sort job applications.</p>
          <div style={{display: 'flex', gap: '2%', justifyContent: 'flex-end'}}>
            <a className='project-links' rel="noopener noreferrer" target='_blank' href="https://localhost:3000/jobtrackerdetails">Demo</a>
            <a className='project-links' rel="noopener noreferrer" target='_blank' href="https://github.com/derekthorntonx/job-application-manager">Code</a>
            <Link to='/project1' className='project-links'>Details</Link>
          </div>
          </div>
        </div>
    )
}

export default ProjectOne;