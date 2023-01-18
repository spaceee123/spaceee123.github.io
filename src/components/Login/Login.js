import React, {useState} from 'react';
import "../Registration/registration.scss"
import {Link, NavLink, useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth, db, storage} from "../../firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {doc, setDoc} from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        } catch (err) {
            setErr(true);
            setLoading(false);
        }
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
            <div className="card">
                <h3>Log In </h3>
                <div className="inputBox">
                    <input type="email" required="required"/>
                    <span>Email</span>
                </div>

                <div className="inputBox">
                    <input type="password" required="required"/>
                    <span>Password</span>
                </div>
                <span>don't have an account? <NavLink to={"/signin"}>Sign In</NavLink></span>
                <button >Enter</button>
                {err && <span>Something went wrong...</span>}
            </div>
            </form>
        </div>
    );
};

export default Login;
