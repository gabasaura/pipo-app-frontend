/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const UserProfile = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [toilets, setToilets] = useState([]);

    const handlePasswordChange = () => {
        if (newPassword !== confirmNewPassword) {
            // Passwords do not match, display error message
            console.error("Passwords do not match.");
            return;
        }
        // Logic to change password, can be added here
        console.log("Password changed successfully!");
        // Clear password fields
        setNewPassword("");
        setConfirmNewPassword("");
    };


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2 className="text-center mb-4">User Profile</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label">User Name:</label>
                            <input type="text" className="form-control" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <h3>Change Password</h3>
                            <label htmlFor="newPassword" className="form-label">New Password:</label>
                            <input type="password" className="form-control" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password:</label>
                            <input type="password" className="form-control" id="confirmNewPassword" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handlePasswordChange}>Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
