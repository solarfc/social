import React from "react";
import "./post.css";
import Post from "../post";
import {Field, reduxForm} from "redux-form";

const PostForm = ({handleSubmit}) => {
    return (
        <form className="add-post" onSubmit={handleSubmit}>
            <div className="form-group">
                <Field name="post" type="text" component="textarea" placeholder='Add new post' />
            </div>
            <div className="form-group">
                <button type="submit" >Add Post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'post'})(PostForm);

const Posts = ({profilePage: {postData}, addPosts}) => {

    const addPost = ({post}) => {
        addPosts(post);
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
            <PostReduxForm onSubmit={addPost}/>
            <div className="all-posts">
                {posts}
            </div>
        </div>
    );
};

export default Posts;