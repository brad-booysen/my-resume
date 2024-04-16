import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import classes from './Contact.module.css';

function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        if (form.current) {
            try {
                const response = await emailjs.sendForm(
                    'service_h2jbq2n',
                    'contact_form',
                    form.current,
                    { publicKey: 'OHtvf-JlKYMh2O_43' }
                );
                console.log('SUCCESS!', response);
                setIsSubmitted(true);
            } catch (error) {
                console.error('FAILED...', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className={`container mt-5 ${classes.formContainer}`}>
            <h2 className="mb-3">Contact Me</h2>
            {isSubmitted ? (
                <div className="alert alert-success" role="alert">
                    Thank you for contacting me! I'll be in touch soon.
                </div>
            ) : (
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                        <label htmlFor="user_name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="user_name" name="user_name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="user_email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="user_email" name="user_email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" name="message" rows={3} required />
                    </div>
                    <button type="submit" className="btn btn-success" disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            )}
        </div>
    );
}

export default Contact;
