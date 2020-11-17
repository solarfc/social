import {connect} from "react-redux";
import {
    setUserProfileThunkCreator,
    getUserStatusThunkCreator,
    setUserStatusThunkCreator,
    savePhotoThunkCreator,
    saveProfileThunkCreator
} from "../../reducers/profile-reducer";
import WithUrlDataContainerComponent from "./profile-api";
import {compose} from "redux";
import {getProfile} from "../../reducers/profile-selector";
import {isAuth, userId} from "../../reducers/auth-selecros";

const mapStateToProps = (state) => {
    return {
        profilePage: getProfile(state),
        userId: userId(state),
        isAuth: isAuth(state)
    }
};

const ProfileContainer = compose(connect(mapStateToProps, {setUserProfileThunkCreator, getUserStatusThunkCreator, setUserStatusThunkCreator, savePhotoThunkCreator, saveProfileThunkCreator}))(WithUrlDataContainerComponent);

export default ProfileContainer;