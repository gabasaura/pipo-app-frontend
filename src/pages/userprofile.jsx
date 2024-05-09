import { useState, useContext } from 'react';
import { Context } from '../store/AppContext';


const UserProfile = () => {
    const { store, actions } = useContext(Context);

    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

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
        <>
            {store.access_token && (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h2 className="text-center mb-4">User Profile</h2>
                            <div className="mb-3">
                                <div>avatar</div>
                            </div>
                            <div className="mb-3">
                                <h4>User Name</h4>{store?.current_user?.username}
                                <h4>User Email</h4>{store?.current_user?.email}
                                <h4>Name</h4>
                            </div>
                            <form>
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
            )}
        </>
    )
}

export default UserProfile