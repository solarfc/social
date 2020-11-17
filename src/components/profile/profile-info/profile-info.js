import React, {useState} from "react";
import Spinner from "../../spinner";
import Status from "./status";
import ProfileDataForm from "./profile-data-form";
import ProfileDataFormReduxForm from "./profile-data-form";

const ProfileInfo = ({isOwner, profile, status, setUserStatusThunkCreator, savePhotoThunkCreator, saveProfileThunkCreator}) => {

    const [editMode, setEditMode] = useState(false);

    if(!profile) {
        return <Spinner />
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhotoThunkCreator(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfileThunkCreator(formData)
    }

    const {photos: {small, large}} = profile;

    return (
        <div>
            <img src={small || `https://psihologion.ru/upload/032/u3205/000/82c7100b.jpg`} alt=""/>
            {isOwner && <div><input type="file" onChange={onMainPhotoSelected}/></div>}
            {editMode ? <ProfileDataForm status={status} setUserStatusThunkCreator={setUserStatusThunkCreator} isOwner={isOwner} onSubmit={onSubmit}/> : <ProfileData profile={profile} status={status} setUserStatusThunkCreator={setUserStatusThunkCreator} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
        </div>
    )
};

export default ProfileInfo;

const ProfileData = ({profile, status, setUserStatusThunkCreator, isOwner, goToEditMode}) => {
    const {fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts: {facebook, github, instagram, website}} = profile;
    return (
        <>
            {isOwner && <button onClick={goToEditMode}>edit</button>}
            <h1>{fullName}</h1>
            <Status status={status} setUserStatusThunkCreator={setUserStatusThunkCreator}/>
            <p>Обо мне: {aboutMe}</p>
            <p>Ищу работу: {lookingForAJob ? 'да' : 'нет'}</p>
            {lookingForAJob && <p>Кем хочу быть: {lookingForAJobDescription}</p>}
            <p>Мои контакты:</p>
            <ul>
                <li>Facebook: <a href={`${facebook}`} target='_blank'>{facebook}</a></li>
                <li>Github: <a href={`${github}`} target='_blank'>{github}</a></li>
                <li>Instagram: <a href={`${instagram}`} target='_blank'>{instagram === null ? "нет" : instagram}</a></li>
                <li>Website: <a href={website === null ? '#!' : `${website}`} target='_blank'>{website === null ? "нет" : website}</a></li>
            </ul>
        </>
    )
}