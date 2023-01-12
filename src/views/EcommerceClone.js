import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function EcommerceClone() {
    return (
        <div className='about-me-section'>
            <div className='more-detail-wrapper'>
            <Link to='/'><span style={{color: 'white'}}><FontAwesomeIcon className='fa-lg' icon={faArrowLeft}/></span></Link>
            <div className='sheet'>
                <h5>Development Comments: </h5>
                <p>
                    Created with the purpose of practicing front-end design just utilizing basic Chrome devtools, as well as
                    experience managing the React context/reducer APIs. Original intention was to use the Walmart product API to fetch
                    product data directly on render; however, the front-end functionality was completed before my API key was
                    approved. I populated a static list of products for testing purposes while waiting for the API key, which is what is currently in use.
                </p>

                <h5>Future Implentations/Improvements: </h5>
                <ul>
                    <li>Location API to better recreate the actual source site by listing nearest store locations</li>
                    <li>Stripe.js validation to allow mock payment details</li>
                    <li>Fetch JSON data from Walmart API for product info, then paginate to keep moderate load times on images</li>
                </ul>
            </div>
            </div>
            <div className='section-divider waves'></div>
      </div>
    )
}

export default EcommerceClone;