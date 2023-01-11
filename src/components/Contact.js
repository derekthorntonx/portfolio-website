import { useEffect, useState, useRef } from 'react';

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
            <div style={{fontSize: '0.9rem'}}>Email: derek-thornton@hotmail.ca</div>
            <div style={{fontSize: '0.9rem'}}>Phone: 647 895 9336</div>

        </div>
    )
}

export default Contact;