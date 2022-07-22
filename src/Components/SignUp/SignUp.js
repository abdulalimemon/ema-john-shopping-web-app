import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two password did not match');
            console.log(setError);
            return;
        }
        if (password.length > 6) {
            setError('Password must be 6 characters or longer.')
        }
        createUserWithEmailAndPassword(email, password)
    }
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/');
    }

    return (
        <div className="form-box">
            <div className="form-container signup-height">
                <h2 className="login-title">Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <div >
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" required />
                        </div>
                    </div>
                    <div className="input-group">
                        <div>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" required />
                        </div>
                    </div>
                    <div className="input-group">
                        <div>
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input onBlur={handleConfirmPassword} type="password" name="confirm-password" required />
                            <p style={{ color: 'red' }}>{error}</p>
                        </div>
                    </div>
                    <div className="input-group">
                        <div style={{ marginTop: "10px" }}>
                            <input className="form-submit" type="submit" value="Sign Up" />
                        </div>
                    </div>
                </form>
                <p>Already have an account? <Link className="form-link" to="/login"> Login</Link></p>
                <div className="divider">
                    <div className="divider-border"></div>
                    <div><p>or</p></div>
                    <div className="divider-border"></div>
                </div>
                <div className="google-btn">
                    <button className="google-login">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;