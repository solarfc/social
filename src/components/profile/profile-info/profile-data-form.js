import React from "react";
import Status from "./status";
import {Input} from "../../forms-controls/form-controls";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators";

const ProfileDataForm = ({handleSubmit, error, status, setUserStatusThunkCreator, isOwner}) => {
    return (
        <form action="" onSubmit={handleSubmit}>
            {isOwner && <button onClick={() => {}}>save</button>}
            <Field name="name" type="text" component={Input} validate={[required]} placeholder="Ваше имя" />
            <Field name="job" type="checkbox" component={Input}/>
            <Status status={status} setUserStatusThunkCreator={setUserStatusThunkCreator}/>
            {/*<p>Обо мне: {aboutMe}</p>*/}
            {/*<p>Ищу работу: {lookingForAJob ? 'да' : 'нет'}</p>*/}
            {/*{lookingForAJob && <p>Кем хочу быть: {lookingForAJobDescription}</p>}*/}
            {/*<p>Мои контакты:</p>*/}
            {/*<ul>*/}
            {/*    <li>Facebook: <a href={`${facebook}`} target='_blank'>{facebook}</a></li>*/}
            {/*    <li>Github: <a href={`${github}`} target='_blank'>{github}</a></li>*/}
            {/*    <li>Instagram: <a href={`${instagram}`} target='_blank'>{instagram === null ? "нет" : instagram}</a></li>*/}
            {/*    <li>Website: <a href={website === null ? '#!' : `${website}`} target='_blank'>{website === null ? "нет" : website}</a></li>*/}
            {/*</ul>*/}
        </form>

    )
}



export default reduxForm({form: 'profile'})(ProfileDataForm);