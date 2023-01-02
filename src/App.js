import './App.css';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <section className='about-me-section' id='aboutMe'>
        <AboutMe />
        <div className='section-divider waves'>
        </div>
      </section>
      
      <section className='tech-stack-section' id='techStack'>
        
      </section>
    </div>
  );
}

export default App;
