/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!validateForm()) {
            // Form submit logic here
            console.log("Form submitted successfully!");
            
            const url = 'http://127.0.0.1:5000/login';
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            };
            
            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    console.log('Usuario logueado Con Éxito', data);
                })
                .catch(error => console.error('Log in Error:', error));
            
            cancelForm(); // Clear form fields
        }
    }

    function handleInputChange(event) {
        const { id, value } = event.target;
        if (id === "email") {
            setEmail(value);
        } else if (id === "password") {
            setPassword(value);
        }
    }

    function validateForm() {
        if (!email.trim() || !isValidEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return true; // Form is invalid
        }
        if (!password.trim() || password.length < 6) {
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

    function cancelForm() {
        setEmail("");
        setPassword("");
        setErrorMessage("");
    }

    return (
        <div className="py-md-5 align-items-center justify-content-center">
            <h1 className="mb-3 text-center">Log In</h1>
            <form className="rounded-3" onSubmit={handleFormSubmit}>
                <div className="mt-5 w-75 card mx-auto p-0">
                    <div className="card-body">
                        {errorMessage && <div className="alert alert-danger m-3" role="alert">{errorMessage}</div>}
                        <div className="row mx-2">
                            <div className="col-12 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" value={email} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row mx-2">
                            <div className="col-12 mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-end">
                        <div className="ms-auto mx-3">
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;