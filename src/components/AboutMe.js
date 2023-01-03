function AboutMe( {aboutSectionIsVisible} ) {
    return (
        <div className={aboutSectionIsVisible ? 'about-me-card' : 'about-me-card hide'}>
            <h3>Hello, I'm Derek</h3>
        </div>
    )
}

export default AboutMe;