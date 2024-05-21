import { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Context } from '../store/AppContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import { toast } from "react-toastify";

export const RecoverPassword = () => {
    const navigate = useNavigate()
    const { store, actions } = useContext(Context)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            body: JSON.stringify({
                email: form.current.user_email.value
            }),
            headers: {
                'content-type': 'application/json'
            }
        };
        fetch(`${store.url}/recover_password`, options)
            .then((response) => response.json())
            .then((data) => {
                if (data.msg) {
                    // Handle message if needed
                } else {
                    form.current.code.value = data.code
                    emailjs
                        .sendForm('service_skf16t8', 'template_ywa4n6b', form.current, {
                            publicKey: 'xy1w6sUa4TwUqWdWi',
                        })
                        .then(
                            () => {
                                console.log('SUCCESS!')
                                navigate("/resetpassword")
                                toast.success("Magic code sent.")
                            },
                            (error) => {
                                console.log('FAILED...', error.text)
                                toast.error("Email is missing.")
                            }
                        )
                }

            })
    };

    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <div className="flex-column flex-grow-1 w-75 mx-auto p-5 align-items-center justify-content-center">
                    <h1 className="text-center">Oops! Don't worry!</h1>
                    <h3 className="text-center my-4">Looks like you forgot your password, but we've got you covered.</h3>
                    
                    <form className="flex-fill" ref={form} onSubmit={sendEmail}>
                    <div className="mt-5 card p-4 border border-2 border-black">
                    <label htmlFor="email" className="form-label">Please enter your email and we will send you a magic code so you can log in again.</label>
                        <input type="email" className="form-control" id="email" name="user_email" placeholder='Your@Email.com'/>
                        <input type="hidden" name="code" />
                        <input type="submit" className="btn btn-outline-info my-4" value="Send" />
                    </div>
                    </form>
                </div>
                < Footer />
            </div>
        </>
    );
};
