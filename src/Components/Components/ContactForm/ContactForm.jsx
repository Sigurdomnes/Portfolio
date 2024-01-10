import './ContactForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactForm({ contactForm, setContactForm }) {
    return (
        <div className={`contact-form-wrapper ${contactForm ? "active" : "inactive"}`}>
            <div className='contact-form-blocker' onClick={() => { setContactForm(false) }}></div>
            <div className='contact-form-container'>
                <button className='contact-form-btn-close' onClick={() => { setContactForm(false) }}>
                <FontAwesomeIcon icon="fas fa-times" />
                </button>
                <h1 className='contact-form-header'>Contact me</h1>
                <form className='contact-form'>
                    <div className='contact-form-section'>
                        <input type="text" id="firstname" className='contact-form-input' placeholder="First name"></input>
                        <input type="text" id="lastname" className='contact-form-input' placeholder="Last name"></input>
                    </div>
                    <div className='contact-form-section'>
                        <input type="text" id="email" className='contact-form-input' placeholder="Email"></input>
                        <input type="text" id="phone" className='contact-form-input' placeholder="Phone (optional)"></input>
                    </div>
                    <textarea id="message" className='contact-form-message' name="subject" placeholder="Your message.."></textarea>
                    <input type="submit" className='contact-form-submit-btn' value="Send"></input>
                </form>
                <span className='contact-form-text'>
                    <p>0178, Oslo</p>
                    <p>Norway</p>
                    <a className='contact-form-link' href="mailto: sigurdomnes@gmail.com">sigurdomnes@gmail.com</a>
                    <p className='contact-form-signature'>Sigurd Omnes &#169; 2023</p>
                </span>
            </div>
        </div>
    )
}

export default ContactForm