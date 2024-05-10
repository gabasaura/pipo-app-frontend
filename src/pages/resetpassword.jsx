import { useState, useContext, useEffect } from "react";
import { Context } from "../store/AppContext";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    useEffect(() => {
        if (store.access_token !== null) navigate("/");
    }, [store.access_token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "code") setCode(value);
        if (name === "newPassword") setNewPassword(value);
        if (name === "confirmNewPassword") setConfirmNewPassword(value);
    };

    const handleReset = (e) => {
        e.preventDefault();
        actions.reset({ email, code, password:newPassword });
        setEmail("")
        setCode("")
        setNewPassword("")
    };

    const handlePasswordChange = () => {
        if (newPassword !== confirmNewPassword) {
            // Passwords do not match, display error message
            console.error("Passwords do not match.");
            return;
        }
        // Logic to change password, can be added here
        console.log("Password changed successfully!");
        navigate("/login")
        // Clear password fields
        setNewPassword("");
        setConfirmNewPassword("");
    };

    return (
        <div className="py-md-5 align-items-center justify-content-center">
            <h1 className="mb-3 text-center">Reset Password</h1>
            <form className="rounded-3" onSubmit={handleReset}>
                <div className="mt-5 w-75 card mx-auto p-0">
                    <div className="card-body">
                        {store.error && <div className="alert alert-danger m-3" role="alert">{store.error}</div>}
                        <div className="row mx-2">
                            <div className="col-12 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mx-2">
                            <div className="col-12 mb-3">
                                <label htmlFor="code" className="form-label">Magic Code</label>
                                <input type="textarea" className="form-control" id="code" name="code" value={code} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mx-2">
                            <div className="col-12 mb-3">
                                <label htmlFor="newPassword" className="form-label">New Password</label>
                                <input type="password" className="form-control" id="newPassword" name="newPassword" value={newPassword} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mx-2">
                            <div className="col-12 mb-3">
                                <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</label>
                                <input type="password" className="form-control" id="confirmNewPassword" name="confirmNewPassword" value={confirmNewPassword} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between px-5">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;
