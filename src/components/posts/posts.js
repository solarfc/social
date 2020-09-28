import React from "react";
import "./post.css";
import Post from "../post";

const Posts = ({profilePage: {postData, postText}, addPosts, onChangePostText}) => {

    const addPost = (e) => {
        e.preventDefault();
        addPosts();
    };

    const onPostChange = (e) => {
        let text = e.target.value;
        onChangePostText(text);
    };

    const posts = postData.map((item) => {
        const {avatar, post, likesCount} = item;
        return (
            <Post key={likesCount} avatar={avatar} post={post} likesCount={likesCount} />
        );
    });

    return (
        <div>
            <h3>My Posts</h3>
            <form className="add-post" onSubmit={addPost}>
                <textarea name="" id="" value={postText} onChange={onPostChange} placeholder='Add new post' />
                <button type="submit" >Add Post</button>
            </form>
            <div className="all-posts">
                {posts}
            </div>
        </div>
    );
};

export default Posts;