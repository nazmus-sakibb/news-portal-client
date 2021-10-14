import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Topbar.css';

const Topbar = () => {
    const {user} = useContext(Context);
    
    return (
        <div className="topbar">
            <div className="topLeft">
                <i className="socialIcon fab fa-facebook-square"></i>
                <i className="socialIcon fab fa-twitter-square"></i>
                <i className="socialIcon fab fa-pinterest-square"></i>
                <i className="socialIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" className="link">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img className="topImage" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link to="/login" className="link">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/register" className="link">REGISTER</Link>
                        </li>
                    </ul>
                )}
                <i className="searchIcon fas fa-search"></i>
            </div>
        </div>
    );
};

export default Topbar;