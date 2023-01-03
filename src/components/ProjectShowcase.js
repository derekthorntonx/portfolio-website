import { useState, useEffect, useRef } from 'react';

function ProjectShowcase() {
    const [projectIsVisible, setProjectIsVisible] = useState();
    const projectRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          setProjectIsVisible(entry.isIntersecting)
        }, {
          threshold: 0.50
        })
        observer.observe(projectRef.current);
      }, [])

    return (
        <div className={projectIsVisible ? 'card show' : 'card'} ref={projectRef}>
            <div className='placeholder'>

            </div>

            <div className='placeholder'>

            </div>
        </div>
    )
}

export default ProjectShowcase;