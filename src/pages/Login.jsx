import { useState, useContext, useEffect } from "react";
import { Context } from "../store/AppContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        if (store.access_token !== null) navigate("/")
    }, [store.access_token])

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        actions.login({ email, password });
    };

    return (
        <div className="py-md-5 align-items-center justify-content-center">
            <h1 className="mb-3 text-center">Log In</h1>
            <form className="rounded-3" onSubmit={handleLogin}>
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
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between px-5">
                        <small>
                        <Link className={"nav-link " + (location.pathname === "/" ? "active" : "")} to="/recoverpassword">Forgot your password?</Link></small>
                            <button type="submit" className="btn btn-primary">Log In</button>        
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
