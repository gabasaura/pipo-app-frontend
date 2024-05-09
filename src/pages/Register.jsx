// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Register = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("")
    
    function cancelForm() {
        // Reset form fields
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
        // Form submit logic here
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
        <div className="py-md-5 align-items-center justify-content-center">
            <h1 className="mb-3 text-center">Register</h1>
            <form className="rounded-3" onSubmit={(e) => handleFormSubmit(e, {userName, email, password})}>
                <div className="mt-5 w-50 card mx-auto p-0">
                    <div className="card-body">
                        {errorMessage && <div className="alert alert-danger m-3" role="alert">{errorMessage}</div>}
                        <div className="row mx-2">
                            <div className="col-6 mb-3">
                                <label htmlFor="userName" className="form-label">User Name</label>
                                <input type="text" className="form-control" id="userName" value={userName} onChange={handleInputChange} />
                            </div>

                            <div className="col-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" value={email} onChange={handleInputChange} />
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" value={name} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row mx-2">
                            <div className="col-6 mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={handleInputChange} />
                            </div>
                            

                            <div className="col-6 mb-3">
                                <label htmlFor="repeatPassword" className="form-label">Repeat Password</label>
                                <input type="password" className="form-control" id="repeatPassword" value={repeatPassword} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-end">
                        <div className="ms-auto mx-3">
                            <button type="button" className="btn btn-secondary ms-auto" onClick={cancelForm}>Cancel</button>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;