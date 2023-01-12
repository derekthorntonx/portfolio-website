import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    const contactRef = useRef();
    const [contactSectionIsVisible, setContactSectionIsVisible] = useState();
    
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setContactSectionIsVisible(entry.isIntersecting)
      }, {
        threshold: 0.8
      })
      observer.observe(contactRef.current);
    }, [])

    return (
        <div ref={contactRef} className={contactSectionIsVisible ? 'content-card show' : 'content-card'}>
          <div className='contacts'>
            <div className='contact-wrapper'><FontAwesomeIcon className='fa-2xl' icon={faEnvelope}/><div style={{display: 'flex', placeItems: 'center'}}>derek-thornton@hotmail.ca</div></div>
            <div className='contact-wrapper'><FontAwesomeIcon className='fa-2xl' icon={faLinkedin}/><div style={{display: 'flex', placeItems: 'center'}}>derek-thornton@hotmail.ca</div></div>
            <div className='contact-wrapper'>
              <FontAwesomeIcon className='fa-2xl' icon={faGithub}/>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/derekthorntonx" style={{display: 'flex', placeItems: 'center'}}>github.com/derekthorntonx</a>
              </div>
        
            </div>
        </div>
    )
}

export default Contact;