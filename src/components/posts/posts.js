import React from "react";
import "./post.css";
import Post from "../post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../reducers/profile-reducer";

const Posts = ({profilePage, dispatch}) => {

    const {postData, newPostText} = profilePage;
    console.log(profilePage);

    const posts = postData.map((item) => {
        const {avatar, post, likesCount} = item;
        return (
            <Post key={likesCount} avatar={avatar} post={post} likesCount={likesCount} />
        );
    });

    const addPosts = (e) => {
        e.preventDefault();
        dispatch(addPostActionCreator());
    };

    const onChangePostText = (e) => {
        let text = e.target.value;
        dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div>
            <h3>My Posts</h3>
            <form className="add-post" onSubmit={addPosts}>
                <textarea name="" id="" value={newPostText} onChange={onChangePostText} placeholder='Add new post' />
                <button type="submit" >Add Post</button>
            </form>
            <div className="all-posts">
                {posts}
            </div>
        </div>
    );
};

export default Posts;