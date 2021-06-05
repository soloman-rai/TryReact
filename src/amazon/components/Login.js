import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../assets/Login.css';
import { auth } from '../firebase';


function SignIn() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in and redirect to homepage
                history.push('/');
            }).catch(e => alert(e.message));
    } 

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // created the user and redirect to homepage
                history.push('/');
            }).catch(e => alert(e.message));
    } 

    return (
        <div className="login">
            <Link to="/">
                <img
                    className = "login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1600px-Amazon_logo.svg.png"
                    alt="Amazon Logo" />
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={login} type="submit" className="login_signinButton">Sign In</button>
                </form>

                <p>
                    By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.    
                </p>

                <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default SignIn
