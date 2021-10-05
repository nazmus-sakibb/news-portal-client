import React from 'react';
import './Settings.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import porfilePicture from '../../images/porfilePicture.jpeg';

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsProfilePicture">
                        <img src={porfilePicture} alt="" />
                        <label htmlFor="fileInput"><i className="settingsPPIcon fas fa-user-circle"></i></label>
                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="John Doe" />
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmitButton">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
};

export default Settings;