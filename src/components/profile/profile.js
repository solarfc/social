import React from "react";
import PostContainer from "../posts";
import ProfileInfo from "./profile-info";

const Profile = ({isOwner, profile, status, setUserStatusThunkCreator, savePhotoThunkCreator, saveProfileThunkCreator}) => {
    return (
        <div>
            <ProfileInfo isOwner={isOwner} profile={profile} status={status} setUserStatusThunkCreator={setUserStatusThunkCreator} savePhotoThunkCreator={savePhotoThunkCreator} saveProfileThunkCreator={saveProfileThunkCreator}/>
            <PostContainer />
        </div>
    )
}

export default Profile;