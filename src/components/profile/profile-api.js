import React, {Component} from "react";
import Profile from "./profile";
import {withRouter} from "react-router-dom";

class ProfileAPI extends Component {

    componentDidMount() {
        const {match: {params: {userId}}} = this.props;
        let myId = userId;
        if(!myId) {
            myId = 11921;
        }
        this.props.setUserProfileThunkCreator(myId);
        this.props.getUserStatusThunkCreator(myId);
    }

    render() {
        const {profilePage: {profile, status}, setUserStatusThunkCreator} = this.props;

        return (
            <div>
                <Profile profile={profile} status={status} setUserStatusThunkCreator={setUserStatusThunkCreator} />
            </div>
        )
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileAPI);

export default WithUrlDataContainerComponent;