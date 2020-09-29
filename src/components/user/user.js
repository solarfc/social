import React from "react";
import userStyle from "./user.module.css"

const User = ({name, id, uniqueUrlName, smallPhoto, largePhoto, status, followed, follow, unFollow}) => {

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
            <h4 className="fullname">{name}</h4>
            <p>{status}</p>
            <div className={`${userStyle.location}`}>
                {/*<span>{country}</span>*/}
                {/*<span>{city}</span>*/}
            </div>
            <div className={`${userStyle.follow}`}>
                <img src={smallPhoto !== null ? smallPhoto : 'https://vokrug-tv.ru/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg'} alt=""/>
                <button type="submit" onClick={() => {isFollowedFunction(id)}}>{isFollowedText}</button>
            </div>
        </div>
    )
};

export default User;