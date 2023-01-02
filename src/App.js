import './App.css';
import AboutMe from './components/AboutMe';
import ProjectShowcase from './components/ProjectShowcase';

function App() {
  

  return (
    <div className="App">
      <header className='navbar'>
        <ul>
          <li><a href='#aboutMe'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contactMe'>Contact Me</a></li>
        </ul>
        <div className='navbar-resume'>
            RESUME
        </div>
      </header>

      <section className='about-me-section' id='aboutMe'>
        <AboutMe />
        
        <div className='section-divider waves'></div>
      </section>
      
      <section className='projects-section' id='projects'>
        <ProjectShowcase />
      </section>
    </div>
  );
}

export default App;
