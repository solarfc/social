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
    }

    render() {
        const {profilePage: {profile}} = this.props;

        return (
            <div>
                <Profile profile={profile}/>
            </div>
        )
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileAPI);

export default WithUrlDataContainerComponent;