import {addPostCreator, updatePostTextCreator} from "../../reducers/profile-reducer";
import Posts from "./posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPosts: () => {
            dispatch(addPostCreator());
        },
        onChangePostText: (text) => {
            dispatch(updatePostTextCreator(text));
        }
    }
};

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostContainer;