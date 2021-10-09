import React, { useState } from 'react';
import './Sidebar.css';
import about from '../../images/about.jpg';
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const res = await axios.get('/categories');
            setCategories(res.data);
        };
        getCategories();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src={about} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quidem, aut laboriosam ab error deleniti, autem ipsam quis nulla earum natus dolorum dolores accusantium amet omnis possimus totam cupiditate harum.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {categories.map(category => (
                        <Link to={`/?categories=${category.name}`} className="link">
                            <li className="sidebarListItem">{category.name}</li>
                        </Link>
                    ))}

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;