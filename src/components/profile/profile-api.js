import React, {Component} from "react";
import Profile from "./profile";
import {withRouter} from "react-router-dom";

class ProfileAPI extends Component {

    updateProfile() {
        const {match: {params: {userId}}} = this.props;
        let myId = userId;
        if(!myId) {
            myId = this.props.userId;
        }
        this.props.setUserProfileThunkCreator(myId);
        this.props.getUserStatusThunkCreator(myId);
    }

    componentDidMount() {
        this.updateProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile();
        }
    }

    render() {
        const {profilePage: {profile, status}, setUserStatusThunkCreator, savePhotoThunkCreator, saveProfileThunkCreator} = this.props;
        return (
            <div>
                <Profile isOwner={!this.props.match.params.userId} profile={profile} status={status} setUserStatusThunkCreator={setUserStatusThunkCreator} savePhotoThunkCreator={savePhotoThunkCreator} saveProfileThunkCreator={saveProfileThunkCreator}/>
            </div>
        )
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileAPI);

export default WithUrlDataContainerComponent;