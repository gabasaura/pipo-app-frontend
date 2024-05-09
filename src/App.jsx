// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import PiposList from "./pages/Piposlist";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PipoForm from "./pages/PipoForm";
import UserProfile from "./pages/UserProfile";
import injectContext from "./store/AppContext";



const App = () => {

    return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/userprofile" element={<UserProfile />} />
                    <Route path="/pipoform" element={<PipoForm />} />
                    <Route path="/piposlist" element={<PiposList />} />
                    <Route path="/piposlist/:pipo" element={<PiposList />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
    )
}

export default injectContext(App)