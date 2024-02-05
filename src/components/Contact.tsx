import { useState } from "react"
import classes from './Contact.module.css'

function Contact() {

    const [formStatus, setFormStatus] = useState('Send')

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const target = e.target as typeof e.target & {
            name: { value: string };
            email: { value: string };
            message: { value: string };
        };
        const name = target.name.value
        const email = target.email.value
        const message = target.message.value
        const comFom = {
            name: name,
            email: email,
            message: message
        }
        console.log(comFom)
    }

    return (
        <div className="container mt-5" id={classes.form}>
            <h2 className="mb-3">Contact Me</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input className="form-control" type="text" id="name" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input className="form-control" type="email" id="email" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                        Message
                    </label>
                    <textarea className="form-control" id="message" required />
                </div>
                <button className="btn btn-success" type="submit">
                    {formStatus}
                </button>
            </form>
        </div>
    )
}

export default Contact