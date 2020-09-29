import React from "react";
import userStyle from "./user.module.css"

const User = ({id, followed, fullName, status, city, country, follow, unFollow}) => {

    const onFollowedThisUser = (id) => {
        follow(id);
    }

    const onUnfollowThisUser = (id) => {
        unFollow(id);
    }

    const isFollowedText = followed ? 'Unfollow' : 'Follow';
    const isFollowedFunction = followed ? onUnfollowThisUser : onFollowedThisUser;

    return (
        <div className={`${userStyle.item}`}>
            <h4 className="fullname">{fullName}</h4>
            <p>{status}</p>
            <div className={`${userStyle.location}`}>
                <span>{country}</span>
                <span>{city}</span>
            </div>
            <button type="submit" className={`${userStyle.follow}`} onClick={() => {isFollowedFunction(id)}}>{isFollowedText}</button>
        </div>
    )
};

export default User;