import React, { useEffect, useState } from 'react';
import './SinglePost.css';
import postImage from '../../images/postImage.jpg';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('/posts/' + path);
            console.log(res);
            setPost(res.data);
        };
        getPost();
    }, [path])
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img src={post.photo} alt="" className="singlePostImage" />
                )}

                <h1 className="singlePostTitle">{post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon editIcon far fa-edit"></i>
                        <i className="singlePostIcon deleteIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <strong>{post.username}</strong>
                        </Link>
                    </span>

                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDescription">{post.description}</p>
            </div>
        </div>
    );
};

export default SinglePost;