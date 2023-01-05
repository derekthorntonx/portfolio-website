import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function ProjectOne() {
    const [projectIsVisible, setProjectIsVisible] = useState();
    const projectRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          setProjectIsVisible(entry.isIntersecting)
        }, {
          threshold: 1
        })
        observer.observe(projectRef.current);
      }, [])

    return (
        <div className={projectIsVisible ? 'card show' : 'card'} ref={projectRef}>
            <div>
              <img alt='ProjectOne'></img>
            </div>

        <div>
          Job Application Tracker
          
        </div>
          <p>A full-stack web app created to help track and sort job applications.</p>
          <a rel="noopener noreferrer" target='_blank' href="https://localhost:3000/jobtrackerdetails">Live Demo</a>
          <Link to='/project1'>More details</Link>
          <a rel="noopener noreferrer" target='_blank' href="https://github.com/derekthorntonx/job-application-manager">View Code</a>
        </div>
    )
}

export default ProjectOne;