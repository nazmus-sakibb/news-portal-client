import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label htmlFor="email">Email</label>
                <input className="loginInput" type="email" placeholder="Enter your email..." id="email"/>
                <label htmlFor="password">Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password..." id="password"/>
                <button className="loginButton">Login</button>
            </form>
            <Link to="/register" className="link loginRegisterButton">Register</Link>
        </div>
    );
};

export default Login;