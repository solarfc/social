import {addPostCreator} from "../../reducers/profile-reducer";
import Posts from "./posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPosts: (post) => {
            dispatch(addPostCreator(post));
        },
    }
};

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostContainer;