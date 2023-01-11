import { useState, useEffect, useRef } from 'react';
import walmartClone from '../assets/walmartClone.png';
import { Link } from 'react-router-dom';

function ProjectTwo() {
    const [projectIsVisible, setProjectIsVisible] = useState();
    const projectRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          setProjectIsVisible(entry.isIntersecting)
        }, {
          threshold: 0.8
        })
        observer.observe(projectRef.current);
      }, [])

    return (
        <div className={projectIsVisible ? 'card show' : 'card'} ref={projectRef}>
            <div>
              <img alt='ProjectTwo' loading="lazy" src={walmartClone}></img>
            </div>
        <div className='project-description'>
          <p style={{marginBottom: '1%', fontSize: '0.8rem'}}>A full-stack web app created to help track and sort job applications.</p>
          <div style={{display: 'flex', gap: '2%', justifyContent: 'flex-end'}}>
            <a className='project-links' rel="noopener noreferrer" target='_blank' href="https://localhost:3000/walmartClonedetails">Demo</a>
            <a className='project-links' rel="noopener noreferrer" target='_blank' href="https://github.com/derekthorntonx/Walmart-clone">Code</a>
            <Link to='/project2' className='project-links'>Details</Link>
          </div>
          </div>
        </div>
    )
}

export default ProjectTwo;