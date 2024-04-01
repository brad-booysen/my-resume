import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import classes from './Contact.module.css'

function Contact() {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_h2jbq2n', 'contact_form', form.current, {
                    publicKey: 'OHtvf-JlKYMh2O_43',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <div className='container mt-5' id={classes.form}>
            <h2 className="mb-3">Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                    <label htmlFor="user_name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="user_name" name="user_name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="user_email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="user_email" name="user_email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" rows={3} />
                </div>
                <button type="submit" className="btn btn-success">Send</button>
            </form>
        </div>
    );
}

export default Contact