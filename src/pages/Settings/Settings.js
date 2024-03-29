import React, { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { axiosInstance } from '../../config';
import { Context } from '../../context/Context';
import './Settings.css';

const Settings = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "https://news-portal-server-nazmus-sakibb.vercel.app/images/";

    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_STARTER" });
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axiosInstance.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axiosInstance.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    }
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsProfilePicture">
                        <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" />
                        <label htmlFor="fileInput"><i className="settingsPPIcon fas fa-user-circle"></i></label>
                        <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="settingsSubmitButton" type="submit">Update</button>
                    {success && <span style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}>Profile has been updated...</span>}
                </form>
            </div>
            <Sidebar />
        </div>
    );
};

export default Settings;