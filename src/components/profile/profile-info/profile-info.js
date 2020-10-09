import React from "react";
import Spinner from "../../spinner";

const ProfileInfo = ({profile}) => {
    if(!profile) {
        return <Spinner />
    }

    const {fullName, aboutMe, photos: {small, large}, lookingForAJob, lookingForAJobDescription, contacts: {facebook, github, instagram, mainLink, twitter, vk, website, youtube}} = profile;
    return (
        <div>
            <a href={large}><img src={small} alt=""/></a>
            <h1>{fullName}</h1>
            <p>Обо мне: {aboutMe}</p>
            <p>Ищу работу: {lookingForAJob ? 'да' : 'нет'}</p>
            <p>Кем хочу быть: {lookingForAJobDescription}</p>
            <p>Мои контакты:</p>
            <ul>
                <li>Facebook: <a href={`https://www.${facebook}`} target='_blank'>{facebook}</a></li>
                <li>Github: <a href={`https://www.${github}`} target='_blank'>{github}</a></li>
                <li>Instagram: <a href={`https://${instagram}`} target='_blank'>{instagram === null ? "нема" : instagram}</a></li>
                <li>Website: <a href={website === null ? '#!' : `https://${website}`} target='_blank'>{website === null ? "нема" : website}</a></li>
            </ul>
        </div>
    )
};

export default ProfileInfo;