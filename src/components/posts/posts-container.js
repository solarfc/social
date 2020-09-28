import React from "react";
import {addPostCreator, updatePostTextCreator} from "../../reducers/profile-reducer";
import Posts from "./posts";
import {StoreConsumer} from "../store-context/store-context";

const PostsContainer = () => {

    return (
        <StoreConsumer>
            {
                (store) => {
                    const state = store.getState();
                    const {dispatch} = store;
                    const {postData, postText} = state.profilePage;

                    const addPosts = () => {
                        dispatch(addPostCreator());
                    };

                    const onChangePostText = (text) => {
                        dispatch(updatePostTextCreator(text));
                    };

                    return (
                        <Posts postData={postData} postText={postText} addPosts={addPosts} onChangePostText={onChangePostText}/>
                    )
                }
            }
        </StoreConsumer>
    );
};

export default PostsContainer;