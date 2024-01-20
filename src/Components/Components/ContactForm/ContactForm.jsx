import './ContactForm.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function ContactForm({ contactForm, setContactForm }) {
    const form = useRef();
    const [submittedForm, setSubmittedForm] = useState(false);
    const [formResult, setFormResult] = useState(null);
    const [count, setCount] = useState(0);

    const sendEmail = (e) => {
        e.preventDefault();
        setSubmittedForm(true);
        setFormResult(null);

        if (count > 2)
            setFormResult('The service seems to be down. Email address shown below.')
        else if (!submittedForm) {
            emailjs.sendForm('service_ikjlqkf', 'template_zn9b8a9', form.current, 'N5CXGOnYP5lCrPu6m')
                .then((result) => {
                    console.log(result.text);
                    form.current.reset();
                    setFormResult("Success! Thanks for your message!");
                }, (error) => {
                    console.log(error.text);
                    setSubmittedForm(false);
                    setFormResult('Something went wrong. Try again.')
                    setCount(count + 1);
                });
        };
    };    return (
        <div className={`contact-form-wrapper ${contactForm ? "active" : "inactive"}`}>
            <div className='contact-form-blocker' onClick={() => { setContactForm(false) }}></div>
            <div className='contact-form-container'>
                <button className='contact-form-btn-close' onClick={() => { setContactForm(false) }}>
                    <FontAwesomeIcon icon="fas fa-times" />
                </button>
                <h1 className='contact-form-header'>Contact me</h1>
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <div className='contact-form-section'>
                        <input type="text" name="user_firstname" className='contact-form-input' placeholder="First name" required></input>
                        <input type="text" name="user_lastname" className='contact-form-input' placeholder="Last name" required></input>
                    </div>
                    <div className='contact-form-section'>
                        <input type="email" name="user_email" className='contact-form-input' placeholder="Email" required></input>
                        <input type="tel" name="user_phone" className='contact-form-input' placeholder="Phone (optional)"></input>
                    </div>
                    <input type="text" name="subject" className='contact-form-input subject' placeholder='Subject' required></input>
                    <textarea name="message" className='contact-form-message' placeholder="Your message.." required></textarea>
                    {!submittedForm && <input type="submit" className='contact-form-submit-btn' value="Send"></input>}
                    {submittedForm && formResult === null && <span class="loader"></span> }
                    {formResult !== null && <p className="form-result">{formResult}</p>}
                </form>
                <span className='contact-form-text'>
                    <p>0178, Oslo</p>
                    <p>Norway</p>
                    <a className='contact-form-link' href="mailto: sigurdomnes@gmail.com">contact@sigurdomnes.com</a>
                    <p className='contact-form-signature'>Sigurd Omnes &#169; 2023</p>
                </span>
            </div>
        </div>
    )
}

export default ContactForm