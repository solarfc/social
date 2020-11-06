import React from "react";
import PostContainer from "../posts";
import ProfileInfo from "./profile-info";

const Profile = ({profile, status, setUserStatusThunkCreator}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} setUserStatusThunkCreator={setUserStatusThunkCreator}/>
            <PostContainer />
        </div>
    )
}

export default Profile;