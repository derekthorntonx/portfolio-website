import Github from '../assets/github-mark.svg';
import LinkedIn from '../assets/linkedin.svg';

function AboutMe( {aboutSectionIsVisible} ) {
    return (
        <div className={aboutSectionIsVisible ? 'about-me-card' : 'about-me-card hide'}>
            <div className="about-me-blurb">
                <h1>Hi, I'm Derek</h1>
                <h5>Asipiring Full-stack Web Developer</h5>
                <p style={{width: '85%', textIndent: '5vh'}}>I enjoy nature, fitness, and automating things that
                    probably don't need to be automated. What started
                    as the desire to create my own personal Workout and Travel-log
                    apps ended up igniting an eagerness to continuously learn
                    and build.
                </p>
                <div style={{width: '35%', display: 'flex', justifyContent: 'space-evenly'}}>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/derekthorntonx">
                        <img alt='Github' src={Github}/>
                    </a>

                    <a rel="noopener noreferrer" target="_blank" href="http://google.com">
                        <img alt='LinkedIn' src={LinkedIn}/>
                    </a>
                </div>
                <div className='about-me-resume'>RESUME</div>
            </div>

        </div>
    )
}

export default AboutMe;