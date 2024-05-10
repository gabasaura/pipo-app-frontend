import { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Context } from '../store/AppContext';
import { useNavigate } from 'react-router-dom';

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
                            },
                            (error) => {
                                console.log('FAILED...', error.text)
                            }
                        )
                }

            })
    };

    return (
        <>
            <p></p>
            <form ref={form} onSubmit={sendEmail}>
                <label>Email</label>
                <input type="email" name="user_email" />
                <input type="hidden" name="code" />
                <input type="submit" value="send" />
            </form>
        </>
    );
};
