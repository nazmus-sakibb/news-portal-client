import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
            <label htmlFor="username">Username</label>
                <input className="registerInput" type="username" placeholder="Enter your username..." id="username"/>
                <label htmlFor="email">Email</label>
                <input className="registerInput" type="email" placeholder="Enter your email..." id="email"/>
                <label htmlFor="password">Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..." id="password"/>
                <button className="registerButton">Register</button>
            </form>
            <Link to="/login" className="link registerLoginButton">Login</Link>
        </div>
    );
};

export default Register;