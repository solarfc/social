import React from "react";
import PostContainer from "../posts";
import ProfileInfo from "./profile-info";

const Profile = ({profile}) => {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <PostContainer />
        </div>
    )
}

export default Profile;