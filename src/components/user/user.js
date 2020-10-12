import React from "react";
import userStyle from "./user.module.css"
import {NavLink} from "react-router-dom";

const User = ({name, id, uniqueUrlName, smallPhoto, largePhoto, status, followed, follow, unFollow, followingInProgress}) => {

    const onFollowedThisUser = (id) => {
        follow(id);
    }

    const onUnFollowThisUser = (id) => {
        unFollow(id);
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