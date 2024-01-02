import './Socials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Socials(props) {
    return (  
        <div className={`socials-wrapper ${props.show ? 'active' : 'inactive'}`}>
        <div className={`socials-content ${props.show ? 'active' : 'inactive'}`}>
            <a href='https://github.com/Sigurdomnes'><div className='socials-icons github-bg-color'>
                <FontAwesomeIcon icon="fa-brands fa-github" />
            </div></a>
            <a href='https://www.linkedin.com/in/sigurd-omnes-457957218/'><div className='socials-icons linkedin-bg-color'>
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
            </div></a>
            <a href='https://instagram.com'><div className='socials-icons insta-bg-color'>
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </div></a>
        </div>
    </div>
    );
}

export default Socials;