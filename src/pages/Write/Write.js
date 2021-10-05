import React from 'react';
import './Write.css';
import postImage from '../../images/postImage.jpg';

const Write = () => {
    return (
        <div className="write">
            <img src={postImage} alt="" className="writeImage" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="fas fa-plus addIcon"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="submitButton">Publish</button>
            </form>
        </div>
    );
};

export default Write;