import React, { useEffect, useRef, useState, Suspense } from 'react';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';

const ProjectOne = React.lazy(() => import('../components/ProjectOne'));
const ProjectTwo = React.lazy(() => import('../components/ProjectTwo'));

function Main() {
  const aboutMeRef = useRef();
  const [aboutSectionIsVisible, setAboutSectionIsVisible] = useState();

  

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setAboutSectionIsVisible(entry.isIntersecting)
    }, {
      threshold: 0.8
    })
    observer.observe(aboutMeRef.current);
  }, [])
  

  return (
    <div className="App">
      <header className='navbar'>
        <ul>
          <li><a href='#aboutMe'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className='navbar-resume'>
            RESUME
        </div>
      </header>


      <section className='about-me-section' id='aboutMe' ref={aboutMeRef}>
        <AboutMe aboutSectionIsVisible={aboutSectionIsVisible}/>
        
        <div className='section-divider waves'></div>
      </section>
      
      <section className='projects-section' id='projects'>
          <Suspense fallback={<div>Loading...</div>}><ProjectOne /></Suspense>
          <Suspense fallback={<div>Loading...</div>}><ProjectTwo /></Suspense>

          <div>Things I'm working on...</div>
      </section>

      <section className='contact-section' id='contact'>
          <Contact />
      </section>
    </div>
  );
}

export default Main;
