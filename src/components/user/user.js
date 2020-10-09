import React from "react";
import userStyle from "./user.module.css"
import {NavLink} from "react-router-dom";
import {followUser, unFollowUser} from "../../services/services";

const User = ({name, id, uniqueUrlName, smallPhoto, largePhoto, status, followed, follow, unFollow, followingInProgress, toggleIsFollowingProgress}) => {

    const onFollowedThisUser = (id) => {
        toggleIsFollowingProgress(true, id)
        followUser(id)
            .then(data => {
                if(data.resultCode === 0) {
                    follow(id)
                    toggleIsFollowingProgress(false, id)
                }
            });
    }

    const onUnFollowThisUser = (id) => {
        toggleIsFollowingProgress(true, id)
        unFollowUser(id)
            .then(data => {
                if(data.resultCode === 0) {
                    unFollow(id)
                    toggleIsFollowingProgress(false, id)
                }
            })
    }

    const isFollowedText = followed ? 'Unfollow' : 'Follow';
    const isFollowedFunction = followed ? onUnFollowThisUser : onFollowedThisUser;

    return (
        <div className={`${userStyle.item}`}>
            <h4 className="fullname">{name}</h4>
            <p>{status}</p>
            <div className={`${userStyle.location}`}>
                {/*<span>{country}</span>*/}
                {/*<span>{city}</span>*/}
            </div>
            <div className={`${userStyle.follow}`}>
                <NavLink to={`/profile/${id}`}>
                    <img src={smallPhoto !== null ? smallPhoto : 'https://vokrug-tv.ru/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg'} alt=""/>
                </NavLink>
                <button type="submit" disabled={followingInProgress.some(item => item === id)} onClick={() => {isFollowedFunction(id)}}>{isFollowedText}</button>
            </div>
        </div>
    )
};

export default User;