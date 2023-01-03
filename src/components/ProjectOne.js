import JobApplication from '../assets/jobapplication.png'

import { useState, useEffect, useRef } from 'react';

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
              <img alt='ProjectOne' src={JobApplication}></img>
            </div>

        <div>
          Job Application Tracker
          asdasdasdasdasdasd
        </div>
         
        </div>
    )
}

export default ProjectOne;