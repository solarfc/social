import React, {Component} from "react";
import Profile from "./profile";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileAPI extends Component {

    componentDidMount() {
        const {setUserProfile, match: {params: {userId}}} = this.props;
        let myId = userId;
        if(!myId) {
            myId = 11921;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${myId}`)
            .then(response => {
                setUserProfile(response.data);
            });
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