// eslint-disable-next-line no-unused-vars
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/AppContext";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

const Register = () => {

    const navigate = useNavigate()
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("")
    const { store, actions } = useContext(Context);


    useEffect(() => {
        if (store.access_token !== null) navigate("/")
    }, [store.access_token])


    function cancelForm() {
        setUserName("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        setErrorMessage("");
        setName("")
    }


    function handleFormSubmit(event) {
        event.preventDefault();

        if (!validateForm()) {
            console.log("Form submitted successfully!");

            const url = 'http://127.0.0.1:5000/signup';
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    username: userName,
                    email: email,
                    password: password,
                })
            };

            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    console.log('Usuario Registrado Con Éxito', data);
                    // Puedes hacer algo con la respuesta del servidor aquí, como mostrar un mensaje de éxito al usuario
                })
                .catch(error => console.error('Error al registrar:', error));

            cancelForm(); // Clear form fields
        }
    }

    function handleInputChange(event) {
        const { id, value } = event.target;
        switch (id) {
            case "userName":
                setUserName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "repeatPassword":
                setRepeatPassword(value);
                break;
            case "name":
                setName(value);
                break;
            default:
                break;
        }
    }

    function validateForm() {
        if (!userName.trim() || !email.trim() || !password.trim() || !repeatPassword.trim()) {
            setErrorMessage("All fields are required.");
            return true; // Form is invalid
        }
        if (!isValidEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return true; // Form is invalid
        }
        if (password !== repeatPassword) {
            setErrorMessage("Passwords do not match.");
            return true; // Form is invalid
        }
        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters.");
            return true; // Form is invalid
        }
        return false; // Form is valid
    }

    function isValidEmail(email) {
        // Basic email validation regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="flex-column flex-grow-1 w-75 mx-auto py-5 align-items-center justify-content-center">
                <h1 className="mb-3 text-center">Welcome to our community!</h1>
                <h3 className="text-center"> Why Join Pipo? (o˘◡˘o) </h3>
                <p className="text-center mt-4">We're thrilled to have you join us on our mission to elevate outdoor adventures. Together, let's transform the way we explore the city, making it even more enjoyable and accessible for all.</p>

                <form className="flex-fill" onSubmit={actions.handleRegister}>
                    <div className="card mt-5 p-0 border border-2 border-black">

                        <div className="card-body">
                            {errorMessage && <div className="alert alert-danger m-3" role="alert">{errorMessage}</div>}
                            <div className="row m-2">
                                <div className="col-12 col-sm-6">
                                    <label htmlFor="userName" className="form-label">User Name</label>
                                    <input type="text" className="form-control" id="username" name="username" value={store.username} onChange={actions.handleFormChange} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={store.email} onChange={actions.handleFormChange} />
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-12">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={store.name} onChange={actions.handleFormChange} />
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-12 col-sm-6">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={store.password} onChange={actions.handleFormChange} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <label htmlFor="repeatPassword" className="form-label">Repeat Password</label>
                                    <input type="password" className="form-control" id="repeatPassword" name="repeatPassword" value={store.repeatPassword} onChange={actions.handleFormChange} />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer border-top border-2 border-black d-flex justify-content-between">
                            <div className="ms-auto mx-3">
                                <button type="submit" className="btn btn-outline-info ms-2">Sign Up</button>
                                <button type="button" className="btn btn-outline-dark ms-2" onClick={actions.cancelForm}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            < Footer />
        </div>

    )
}

export default Register