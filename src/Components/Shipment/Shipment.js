import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneNumber = event => {
        setPhoneNumber(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
    }


    return (
        <div className="form-box">
            <div className="form-container signup-height">
                <h2 className="login-title">Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <div >
                            <label htmlFor="name">Your Name</label>
                            <input onBlur={handleNameBlur} value={user?.name} type="text" name="name" required />
                        </div>
                    </div>
                    <div className="input-group">
                        <div >
                            <label htmlFor="email">Email</label>
                            <input value={user?.email} readOnly type="email" name="email" required />
                        </div>
                    </div>
                    <div className="input-group">
                        <div>
                            <label htmlFor="address">Address</label>
                            <input onBlur={handleAddressBlur} type="text" name="address" required />
                        </div>
                    </div>
                    <div className="input-group">
                        <div>
                            <label htmlFor="phone-number">Phone Number</label>
                            <input onBlur={handlePhoneNumber} type="text" name="phone-number" required />
                            <p style={{ color: 'red' }}>{error}</p>
                        </div>
                    </div>
                    <div className="input-group">
                        <div style={{ marginTop: "10px" }}>
                            <input className="form-submit" type="submit" value="Add Shipping" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Shipment;