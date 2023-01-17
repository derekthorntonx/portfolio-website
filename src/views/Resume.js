import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'




function Resume() {
    return (
        <div style={{height: 'auto'}} className='about-me-section'>
            <div style={{gridTemplateRows: '2vh auto'}} className='more-detail-wrapper'>
            <Link to='/' style={{gridRow: '1', gridColumn: '1', justifySelf: 'start'}}><span style={{color: 'white', }}><FontAwesomeIcon className='fa-lg' icon={faArrowLeft}/></span></Link>
            <div style={{gridRow: '1', gridColumn: '1', justifySelf: 'end'}}>download</div>
            <div style={{height: 'auto', placeSelf: 'auto'}} className='sheet'>
                <h5 style={{marginBottom:'1.5%'}}>Experience:</h5>
                <div className='experience-grid'>
                    <h5 style={{gridColumn: '1', gridRow: '1'}}>2022-2023</h5>
                    <h5 style={{gridColumn: '2', gridRow: '1'}}>Peelle</h5>
                    <p style={{textIndent: '0', gridColumn: '2', gridRow:'2'}}>Mechanic's Assistant</p>
                    <ul style={{gridColumn: '2', gridRow: '3'}}>
                        <li>Read and fulfilled blueprint orders for VSD and PSD elevator doors and equipment</li>
                        <li>Maintained inventory of various specialty coatings for freight doors and special order pieces</li>
                        <li>Operated multiple steel/metal cooking ovens simultaneously</li>
                        <li>Processed orders in conjunction with other departments using a central tracking software</li>
                    </ul>
                </div>

                <div className='experience-grid'>
                    <h5 style={{gridColumn: '1', gridRow: '1'}}>2021-2022</h5>
                    <h5 style={{gridColumn: '2', gridRow: '1'}}>PMW Networking</h5>
                    <p style={{textIndent: '0', gridColumn: '2', gridRow:'2'}}>Security Camera and Security Clearance Installation Contracting</p>
                    <ul style={{gridColumn: '2', gridRow: '3'}}>
                        <li>Worked alongside another contractor for various projects within residential and hospital settings</li>
                        <li>Installed conduit and pulled wires for the eventual installation of card-operated door locks, security cameras, and CCTV surveillance set-ups</li>
                        <li>General circuitry work for repair service-calls (testing voltages, troubleshooting video playback and recording software)</li>
                    </ul>
                </div>

                <div className='experience-grid'>
                    <h5 style={{gridColumn: '1', gridRow: '1'}}>2021</h5>
                    <h5 style={{gridColumn: '2', gridRow: '1'}}>Paragon Security</h5>
                    <p style={{textIndent: '0', gridColumn: '2', gridRow:'2'}}>Concierge, Condominium Patrol</p>
                    <ul style={{gridColumn: '2', gridRow: '3'}}>
                        <li>Customer service experience during peak Covid-19 lock-downs</li>
                        <li>Extensive deescalation, especially regarding various newly introduced Covid-19 mandates (stay-home orders, mask restrictions, gathering limits)</li>
                        <li>Meticulous documentation and communication for Management and Tenant's Board </li>
                    </ul>
                </div>

                <div className='experience-grid'>
                    <h5 style={{gridColumn: '1', gridRow: '1'}}>2021</h5>
                    <h5 style={{gridColumn: '2', gridRow: '1'}}>Shelter Movers</h5>
                    <p style={{textIndent: '0', gridColumn: '2', gridRow:'2'}}>Volunteer Mover</p>
                    <ul style={{gridColumn: '2', gridRow: '3'}}>
                        <li>Coordinating alongside small groups of volunteers to help relocate victims of abusive relationships</li>
                        <li>Experience conducting fast-paced move-ins and outs; depending on the severity of the danger, needed to be ready to leave abruptly</li>
                    </ul>
                </div>

                <div className='experience-grid'>
                    <h5 style={{gridColumn: '1', gridRow: '1'}}>2017-2020</h5>
                    <h5 style={{gridColumn: '2', gridRow: '1'}}>Becker's Sundry Store</h5>
                    <p style={{textIndent: '0', gridColumn: '2', gridRow:'2'}}>Keyholder, Clerk</p>
                    <ul style={{gridColumn: '2', gridRow: '3'}}>
                        <li>Upheld newly introduced Covid-19 mandates regarding masks and social distancing while working alone</li>
                        <li>Tracked inventory, placed orders, and received deliveries</li>
                        <li>Micro-managing/handling large and hectic surges of tasks, such as working alone during the panic-buying of Toilet Paper, Sanitizer, and Masks during Covid-19</li>
                    </ul>
                </div>

                <div className='experience-grid'>
                    <h5 style={{gridColumn: '1', gridRow: '1'}}>2015-2017</h5>
                    <h5 style={{gridColumn: '2', gridRow: '1'}}>Camp Wahanowin</h5>
                    <p style={{textIndent: '0', gridColumn: '2', gridRow:'2'}}>Head of Woodshop</p>
                    <ul style={{gridColumn: '2', gridRow: '3'}}>
                        <li>Created, managed, and led woodshop classes to a variety of age groups involving the safe and proper use of various wood-working tools</li>
                        <li>Worked alongside the Maintenance team to repair various installations such as cabin lights, blown fuses, and damaged furniture</li>
                        <li>Experience working with various power tools including table saws, circular saws, power drills, masonry tools, and more</li>
                        <li>Assisted contractors with various tasks including the excavation and installation of septic tanks, rooftop work and installation of HVAC units, and sound/light installations for theater performances</li>
                        <li>Communicated with Company Owner and Director regarding projects they wanted constructed—helped plan, coordinate, and then execute said constructions</li>
                    </ul>
                </div>

                <div className='experience-grid'>
                    <h5 style={{gridColumn: '1', gridRow: '1'}}>2013-2014</h5>
                    <h5 style={{gridColumn: '2', gridRow: '1'}}>Cardinal Couriers</h5>
                    <p style={{textIndent: '0', gridColumn: '2', gridRow:'2'}}>Offloader</p>
                    <ul style={{gridColumn: '2', gridRow: '3'}}>
                        <li>Worked in a fast-paced environment requiring coordination from co-workers for an efficient work-flow and adequate safety</li>
                        <li>Experience working on diverse teams to meet rapidly changing requirements</li>
                    </ul>
                </div>

                <h5 style={{marginBottom:'1.5%', marginTop: '2.5%'}}>Education:</h5>
                <div style={{marginBottom: '5%'}} className='experience-grid'>
                    <h5 style={{gridColumn: '1', gridRow: '1'}}>2015-2020</h5>
                    <h5 style={{gridColumn: '2', gridRow: '1'}}>BA in Criminal Justice and Public Policy, University of Guelph</h5>
                    <ul style={{gridColumn: '2', gridRow: '2'}}>
                        <li>Dean's List 2018-2020</li>   
                    </ul>
                </div>

            </div>
            </div>
            <div className='section-divider waves'></div>
      </div>
    )
}

export default Resume;