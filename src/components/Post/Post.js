import React from 'react';
import './Post.css';
import postImage from '../../images/postImage.jpg'

const Post = () => {
    return (
        <div className="post">
            <img className="postImage" src={postImage} alt="" />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Music</span>
                    <span className="postCategory">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">2 hours ago</span>
            </div>
            <p className="postDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nisi vero eveniet autem cumque ipsum facilis qui voluptatibus dignissimos cupiditate, iste, rerum molestiae alias eos consequatur. Vitae doloribus magnam tempore cupiditate vel harum unde, veritatis ducimus sunt velit soluta! Sunt ipsum molestiae explicabo voluptatem optio cupiditate magni voluptate necessitatibus. Possimus assumenda quos, eveniet, id facere quisquam aliquid et consequatur quaerat fuga labore. Eaque est sapiente, quae reiciendis consequatur nam modi, iure dolore autem consectetur tenetur? Repellendus modi nostrum tenetur voluptate.</p>
        </div>
    );
};

export default Post;