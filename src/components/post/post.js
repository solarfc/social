import React from "react";
import postStyle from  "./post.module.css";

const Post = ({ avatar, post, likesCount }) => {

    return (
        <div className={`post ${postStyle.item}`}>
            <img src={avatar} alt="" className="avatar"/>
            <p className="message">{post}</p>
            <span className="like">like <strong>{likesCount}</strong></span>
        </div>
    )
};

export default Post;