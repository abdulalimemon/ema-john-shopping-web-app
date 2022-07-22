import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    const from = location?.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className="form-box">
            <div className="form-container login-height">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className="input-group">
                        <div >
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" />
                        </div>
                    </div>
                    <div className="input-group">
                        <div>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" />
                        </div>
                    </div>
                    <p style={{ color: "red" }}>{error?.message}</p>
                    {
                        loading && <p>Loading</p>
                    }
                    <div className="input-group">
                        <div style={{ marginTop: "10px" }}>
                            <input className="form-submit" type="submit" value="Login" />
                        </div>
                    </div>
                </form>
                <p>New to Ema-john? <Link className="form-link" to="/signup">Create an account</Link></p>
                <div className="divider">
                    <div className="divider-border"></div>
                    <div><p>or</p></div>
                    <div className="divider-border"></div>
                </div>
                <div className="google-btn">
                    <button className="google-login"><FontAwesomeIcon icon="fa-brands fa-google" />Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;