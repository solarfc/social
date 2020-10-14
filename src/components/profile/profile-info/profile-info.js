import React from "react";
import Spinner from "../../spinner";
import Status from "./status";

const ProfileInfo = ({profile}) => {
    if(!profile) {
        return <Spinner />
    }

    const {fullName, aboutMe, photos: {small, large}, lookingForAJob, lookingForAJobDescription, contacts: {facebook, github, instagram, mainLink, twitter, vk, website, youtube}} = profile;
    return (
        <div>
            <a href={large}><img src={small} alt=""/></a>
            <h1>{fullName}</h1>
            <Status />
            <p>Обо мне: {aboutMe}</p>
            <p>Ищу работу: {lookingForAJob ? 'да' : 'нет'}</p>
            <p>Кем хочу быть: {lookingForAJobDescription}</p>
            <p>Мои контакты:</p>
            <ul>
                <li>Facebook: <a href={`${facebook}`} target='_blank'>{facebook}</a></li>
                <li>Github: <a href={`${github}`} target='_blank'>{github}</a></li>
                <li>Instagram: <a href={`${instagram}`} target='_blank'>{instagram === null ? "нет" : instagram}</a></li>
                <li>Website: <a href={website === null ? '#!' : `${website}`} target='_blank'>{website === null ? "нет" : website}</a></li>
            </ul>
        </div>
    )
};

export default ProfileInfo;