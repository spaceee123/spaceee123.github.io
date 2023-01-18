import React, {useState} from 'react';
import "./registration.scss"
import {NavLink, useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { storage } from "../../firebase";
import { db } from "../../firebase";
import uploadAvatar from "../../img/uploadAvatar.svg"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Registration = () => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);

            //Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        //Update profile
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        //create user on firestore
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });

                        //create empty user chats on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                        setLoading(false);
                    }
                });
            });
        } catch (err) {
            setErr(true);
            setLoading(false);
        }
    };
    return (

    <div className="container">
        <form onSubmit={handleSubmit}>
        <div className="card">
            <h3>Sign In</h3>
            <div className="inputBox">
                <input type="text" required="required"/>
                <span>Username</span>
            </div>
            <div className="inputBox">
                <input type="email" required="required"/>
                <span>Email</span>
            </div>

            <div className="inputBox">
                <input type="password" required="required"/>
                <span>Password</span>
            </div>
            <input style={{display: "none"}} type="file" id="file"/>
            <label htmlFor="file"><img src={uploadAvatar} alt="" className={"register_ava"}/>

            </label>
            <span> already have an account? <NavLink to={"/login"}>Log in</NavLink> </span>
            <button >Enter</button>
            {err && <span>Something went wrong...</span>}
        </div>
        </form>
    </div>
    );
};

export default Registration;