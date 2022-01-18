import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import '../assets/styles/contact.css';


const Result = () => {
    return (
        <p className="successMessage">Your message has been successfully sent. <br /> I will get back to you as soon as possible.</p>
    )
}

function ContactForm() {

    const form = useRef();
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u78ud1t', 'template_sp75jcp', form.current, 'user_BFm5zyEucX5ENoFMvz65B')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        showResult(true);
    };

    return (
        <div className="main-contact" id="contact">
            <div className="section-title">
                <h1>Contact me</h1>
            </div>
            <div className="section-description">
                <p>If you want to ask me anything just fill the fields in the form and drop me your message.
                </p>
            </div>
            <div className="row resultMessage">
                {result ? <Result /> : null}
            </div>
            <div className="container">
                <div className="content-box">
                    <div className='contact-left'>

                    </div>
                    <div className='contact-right'>
                        <form ref={form} onSubmit={sendEmail}>
                            <input className="field" required={true} type="text" placeholder='Your name' name="from_name" />
                            <input className="field" required={true} type="email" placeholder='Your Email' name="reply_to" />
                            <textarea className="field area" placeholder='Enter your message..' name="message" maxLength={200} />
                            <button type="submit" className="submit-button">Send <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                            </svg></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ContactForm;