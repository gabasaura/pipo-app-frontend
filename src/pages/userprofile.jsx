import { useState, useContext } from 'react';
import { Context } from '../store/AppContext';
import { toast } from "react-toastify";
import Footer from '../components/footer';
import pipoAvatar from '../assets/pipo-avatar.svg'


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
                if (data.msg) toast.error(data.msg)
                    else toast.success(data["success"])
                console.log('Password has changed', data);
                

            })
            .catch(error => console.error('Error:', error));


        
    };



    return (
        <>
            {store.access_token && (
                <div className="d-flex flex-column min-vh-100">
                <div className="flex-column flex-grow-1 w-75 mx-auto p-5 align-items-center justify-content-center">
                    <h1 className="">User Profile</h1>
                            
                            <div className="my-3">
                            <img src={pipoAvatar} alt="Logo" className='img-avatar' />
                            </div>
                            <div className="mt-1 mb-5">
                            <h2 className="text-info">Welcome {store?.current_user?.username}</h2>
                            <p>Here is your account information:</p>
                                <h6>Username: {store?.current_user?.username}</h6>
                                <h6>Email: {store?.current_user?.email}</h6>
                            </div>
                            <hr className='border-0 border-top border-black border-1 opacity-100' />
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
                        <Footer/>
                    </div>
                
            )}
        </>
    )
}

export default UserProfile