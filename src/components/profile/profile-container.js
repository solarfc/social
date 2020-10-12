import {connect} from "react-redux";
import {setUserProfileThunkCreator} from "../../reducers/profile-reducer";
import WithUrlDataContainerComponent from "./profile-api";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

const ProfileContainer = connect(mapStateToProps, {setUserProfileThunkCreator})(WithUrlDataContainerComponent);

export default ProfileContainer;