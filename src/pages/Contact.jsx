import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [submitMessage, setSubmitMessage] = useState("");
    const form = useRef();

    function handleFormSubmit(event) {
        event.preventDefault()
        if (validateForm()) {
            emailjs
                .sendForm('service_skf16t8', 'template_28gw5tq', form.current, {
                    publicKey: 'xy1w6sUa4TwUqWdWi',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        toast.success('Message sent successfully.')
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setSubmitMessage('Message sending failed. Please try again later.')
                    },
                );

            console.log("Form submitted successfully!");
            clearForm(); // Clear form fields
        }
    }


    function handleInputChange(event) {
        const { id, value } = event.target;
        switch (id) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "message":
                setMessage(value);
                break;
            default:
                break;
        }
    }

    function validateForm() {
        const errors = [];

        if (!name.trim()) {
            errors.push("Name is required.");
            toast.error('buuuu')
        }
        if (!email.trim()) {
            errors.push("Email is required.");
        } else if (!isValidEmail(email)) {
            errors.push("Please enter a valid email address.");
        }
        if (!message) {
            errors.push("Message is required.");
        } else if (message.length > 250) {
            errors.push("Message must be at most 250 characters.");
        }

        if (errors.length > 0) {
            setErrorMessage(errors.join(" "));
            return false; // Form is invalid
        }

        return true; // Form is valid
    }

    function isValidEmail(email) {
        // Basic email validation regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }


    function clearForm() {
        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage("")
    }

    return (
        <div className="py-md-5 align-items-center justify-content-center">
            <h1 className=" text-center">Contact Us</h1>
            <form ref={form} className="rounded-3" onSubmit={handleFormSubmit}>
                <div className="mt-5 w-75 card mx-auto p-0">
                    <div className="card-body">
                        {errorMessage && <div className="alert alert-danger m-3" role="alert">{errorMessage}</div>}
                        {submitMessage && <div className={`alert ${submitMessage.includes('failed') ? 'alert-danger' : 'alert-success'} m-3`} role="alert">{submitMessage}</div>}
                        <div className="row mx-2">
                            <div className="col-12 mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input name="user_name" type="text" className="form-control" id="name" value={name} onChange={handleInputChange} />
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input name="user_email" type="email" className="form-control" id="email" value={email} onChange={handleInputChange} />
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea name="message" className="form-control" id="message" rows="5" maxLength="250" value={message} onChange={handleInputChange} />
                                <small className="text-secondary">{250 - message.length} characters remaining</small>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-end">
                        <div className="ms-auto mx-3">
                            <button type="submit" className="btn btn-outline-info ms-2">Send</button>
                            <button type="button" className="btn btn-outline-dark ms-2" onClick={clearForm}>Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact
