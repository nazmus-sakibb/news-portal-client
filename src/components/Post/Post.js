import React from 'react';
import './Post.css';
import postImage from '../../images/postImage.jpg'
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const PF = "http://localhost:5000/images/";
    return (
        <div className="post">
            {/* {post.photo && <img className="postImg" src={PF + post.photo} alt="" />} */}
            {
                post.photo &&
                <Link to={`/post/${post._id}`} className="link">
                    <img className="postImg" src={PF + post.photo} alt="" />
                </Link>
            }
            <div className="postInfo">
                <div className="postCategories">
                    {post.categories.map(category => (
                        <span className="postCategory">{category.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDescription">{post.description}</p>
        </div>
    );
};

export default Post;