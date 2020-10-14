import React from "react";
import {connect} from "react-redux";
import {setUserProfileThunkCreator} from "../../reducers/profile-reducer";
import WithUrlDataContainerComponent from "./profile-api";
import {withAuthRedirect} from "../../hoc/with-auth-redirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
};

const ProfileContainer = compose(connect(mapStateToProps, {setUserProfileThunkCreator}), withAuthRedirect)(WithUrlDataContainerComponent);

export default ProfileContainer;