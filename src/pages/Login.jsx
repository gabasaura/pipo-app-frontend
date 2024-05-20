import { useState, useContext, useEffect } from "react";
import { Context } from "../store/AppContext";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/footer";

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
        <div className="d-flex flex-column min-vh-100">
        <div className="flex-column flex-grow-1 w-75 mx-auto py-5 align-items-center justify-content-center">
        <h1 class="mb-3 text-center">Welcome Back! We've Missed You</h1>
            <form onSubmit={handleLogin} className="flex-fill">
                <div className="mt-5 card p-0 border border-2 border-black">
                    <div className="card-body">
                        {store.error && <div className="alert alert-danger m-3" role="alert">{store.error}</div>}
                        <div className="row">
                            <div className="col-12 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer border-top border-2 border-black d-flex justify-content-between">
                        
                        <Link className={"p-top nav-link " + (location.pathname === "/" ? "active" : "")} to="/recoverpassword">Forgot your password?</Link>
                            <button type="submit" className="btn btn-outline-info">Log In</button>        
                    </div>
                </div>
            </form>
        </div>
        < Footer />
        </div>
    )
}

export default Login
