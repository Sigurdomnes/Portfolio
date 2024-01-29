import { useSelector } from 'react-redux';
import './Socials.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Socials() {
    const cubeIndex = useSelector((state) => state.cubeIndex.index);
    return (
        <div className={`socials-wrapper ${cubeIndex === 0 ? 'active' : 'inactive'}`}>
            <div className={`socials-content ${cubeIndex === 0 ? 'active' : 'inactive'}`}>
                <a href='https://github.com/Sigurdomnes'><div className='socials-icons github-bg-color'>
                    <FontAwesomeIcon className='socials-icon' icon="fa-brands fa-github" />
                </div></a>
                <a href='https://www.linkedin.com/in/sigurd-omnes-457957218/'><div className='socials-icons linkedin-bg-color'>
                    <FontAwesomeIcon className='socials-icon' icon="fa-brands fa-linkedin-in" />
                </div></a>
                <a href='https://instagram.com'><div className='socials-icons insta-bg-color'>
                    <FontAwesomeIcon className='socials-icon' icon="fa-brands fa-instagram" />
                </div></a>
            </div>
        </div>
    );
}

export default Socials;