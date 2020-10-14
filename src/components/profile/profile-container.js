import {connect} from "react-redux";
import {setUserProfileThunkCreator} from "../../reducers/profile-reducer";
import WithUrlDataContainerComponent from "./profile-api";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
};
const ProfileContainer = compose(connect(mapStateToProps, {setUserProfileThunkCreator}))(WithUrlDataContainerComponent);

export default ProfileContainer;