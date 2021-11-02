//import React from 'react';
import React, { useState } from 'react';
import './Login.css';
import "firebase/auth";
// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './Login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app();
}

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        phone: '',
        error: '',
        success: false
    })
    const handleBlur = (e) => {
        let isFieldValid = true;;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);


        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = passwordHasNumber && isPasswordValid;

        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    updateUserName(user.name);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });


        }
        if (!newUser && user.email && user.password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log('Sign in user info', res.user);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }
    const updateUserName = (name) => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            console.log('user name update successfully')
        }).catch((error) => {
            console.log(error);
        });
    }
    const handleSignIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user, token);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage, credential, errorCode, email);
            });

    }
    return (
        <div className="form-group shadow-lg p-3 mb-5">
            <form onSubmit={handleSubmit}>
                {/* <h1>Our Own Authentication</h1> */}

                <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} id="" />
                <label htmlFor="newUser">New User Sign Up</label>
                <br />
                {newUser && <input type="text" className="form-btn" name="name" onBlur={handleBlur} placeholder="Enter Your Name" />}
                <br />
                <input type="email" className="form-btn" name="email" onBlur={handleBlur} required placeholder="Enter Your Email" />
                <br />
                <input type="password" className="form-btn" name="password" onBlur={handleBlur} required placeholder="Enter Your Password" />
                <br />
                <input type="submit" className="form-submit" value={newUser ? 'Sign Up' : 'Sign In'} />
                <p style={{ color: 'red' }}>{user.error}</p>
                {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>}


            </form>
            <button className="form-googleBtn" onClick={handleSignIn}>  Google Sign In</button>
        </div>
    );
};

export default Login;