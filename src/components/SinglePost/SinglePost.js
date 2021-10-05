import React from 'react';
import './SinglePost.css';
import postImage from '../../images/postImage.jpg';

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={postImage} alt="" className="singlePostImage" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon editIcon far fa-edit"></i>
                        <i className="singlePostIcon deleteIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <strong>John Doe</strong></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam officiis ipsa ullam laudantium tempore. Dolor totam fugiat quo, quae quam vero deserunt molestiae non in exercitationem ad facilis tempore quaerat tempora repellat neque natus! Porro excepturi quisquam dolore numquam cum unde iure sit. Quia magnam, eum, veniam eius odio ea ullam, necessitatibus quaerat quos dolorem quibusdam deserunt in vero aut voluptates pariatur inventore recusandae esse iusto? Dolor, doloribus consequatur delectus odit quos sunt pariatur quod? Sunt, obcaecati ab laboriosam corporis natus voluptatibus provident? Quas perspiciatis asperiores ipsa vero dignissimos accusamus magnam excepturi vitae hic beatae natus recusandae, in saepe eveniet architecto qui culpa molestiae rerum illo ea, minus laboriosam reprehenderit? Rerum praesentium maxime reiciendis quos fugiat excepturi temporibus perspiciatis officiis, quisquam placeat at libero, laudantium ab error aspernatur totam eligendi debitis voluptas unde. Fugiat, voluptatibus ad id facere maxime nostrum tempore officia nihil ullam hic et beatae, libero non! Ab minima sit ex libero laboriosam. Nisi animi voluptatibus, praesentium cumque cum quia blanditiis officia odit in. Itaque laboriosam quos nesciunt, vitae molestias delectus. Unde maiores ex id adipisci ratione recusandae aut nulla vero tempore possimus natus excepturi dolore consequatur a aperiam sequi eos, veniam laboriosam sit alias molestias. Iure!</p>
            </div>
        </div>
    );
};

export default SinglePost;