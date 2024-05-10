import { useState, useContext } from 'react';
import { Context } from '../store/AppContext';


const UserProfile = () => {
    const { store, actions } = useContext(Context);

    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    // const handlePasswordChange = () => {
    //     if (newPassword !== confirmNewPassword) {
    //         // Passwords do not match, display error message
    //         console.error("Passwords do not match.");
    //         return;
    //     }
    //     // Logic to change password, can be added here
    //     console.log("Password changed successfully!");
    //     // Clear password fields
    //     setNewPassword("");
    //     setConfirmNewPassword("");
    // };

    const sendPassword = (event) => {
        ;
        const { access_token } = store
        const url = 'http://127.0.0.1:5000/changepassword';
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + access_token
            },
            body: JSON.stringify({
                old_password: password,
                new_password: newPassword,
                confirm_password: confirmNewPassword

            })
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log('Password has changed', data);

            })
            .catch(error => console.error('Error:', error));


        
    };



    return (
        <>
            {store.access_token && (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h2 className="text-center my-4">User Profile</h2>
                            <div className="my-3">
                            <img src='https://i.ibb.co/BytFG0w/pipo-mark.png'  className="img-fluid rounded-start p-picture" alt="..." />
                            </div>
                            <div className="my-5">
                                <h4>User Name: {store?.current_user?.username}</h4>
                                <h4>User Email: {store?.current_user?.email}</h4>
                                <h4>Name: {store?.current_user?.email}</h4>
                            </div>
                            <hr />
                            <form className='my-4' >
                                <div className="my-3 ">
                                    <h4>Change Password</h4>
                                        <label htmlFor="password" className="form-label mt-3">Current Password</label>
                                        <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    
                                    <label htmlFor="newPassword" className="form-label mt-3">New Password:</label>
                                    <input type="password" className="form-control" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                               
                                
                                    <label htmlFor="confirmNewPassword" className="form-label mt-3">Confirm New Password:</label>
                                    <input type="password" className="form-control" id="confirmNewPassword" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                                </div>
                                <button type="button" className="btn btn-outline-info" onClick={sendPassword}>Change Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default UserProfile