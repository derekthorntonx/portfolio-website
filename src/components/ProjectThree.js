import { useState, useEffect, useRef, Suspense } from 'react';
import { Link } from 'react-router-dom';
import picture from '../assets/lighthouseDesktop.png';


function ProjectThree() {
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
              <Suspense fallback={<div className='loading'>Loading...</div>}><img alt='ProjectThree' src={picture}></img></Suspense>
            </div>
        <div className='project-description'>
          <p style={{marginBottom: '1%', fontSize: '0.8rem'}}>My porfolio site: a responsive, React-based, Single Page Application self-hosted on a local Raspberry Pi.</p>
          <div style={{display: 'flex', gap: '2%', justifyContent: 'flex-end'}}>
            <a className='project-links' rel="noopener noreferrer" target='_blank' href="http://72.140.1.8">Demo</a>
            <a className='project-links' rel="noopener noreferrer" target='_blank' href="https://github.com/derekthorntonx/job-application-manager">Code</a>
            <Link to='/project3' className='project-links'>Details</Link>
          </div>
          </div>
        </div>
    )
}

export default ProjectThree;