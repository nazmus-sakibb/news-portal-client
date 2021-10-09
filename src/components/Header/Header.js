import React from 'react';
import './Header.css';
import headerBanner from '../../images/headerBanner.jpeg'

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="titleSmall">React & Node</span>
                <span className="titleLarge">News Portal</span>
            </div>
            <img className="headerImage" src={headerBanner} alt="" />
        </div>
    );
};

export default Header;