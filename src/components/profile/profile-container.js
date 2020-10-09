import {connect} from "react-redux";
import {setUserProfile} from "../../reducers/profile-reducer";
import WithUrlDataContainerComponent from "./profile-api";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);

export default ProfileContainer;