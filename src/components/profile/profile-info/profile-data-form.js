import React from "react";
import Status from "./status";
import {Input} from "../../forms-controls/form-controls";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators";

const ProfileDataForm = ({handleSubmit, error, status, setUserStatusThunkCreator, isOwner}) => {
    return (
        <form action="" onSubmit={handleSubmit}>
            {isOwner && <button onClick={() => {}}>save</button>}
            <h1>Имя: <Field name="fullName" type="text" component={Input} validate={[required]} placeholder="Ваше имя" /></h1>
            <Status status={status} setUserStatusThunkCreator={setUserStatusThunkCreator}/>
            <div><p>Обо мне: </p><Field name="aboutMe" type="text" component={Input} placeholder=""/></div>
            <div><p>Ищу работу: </p><Field name="lookingForAJob" type="checkbox" component={Input}/></div>
            <div><p>Кем хочу быть:</p><Field name="lookingForAJobDescription" type="text" component={Input}/></div>
            <p>Мои контакты:</p>
            <ul>
                <li>Facebook <Field name="contacts.facebook" type="text" component={Input}/></li>
            </ul>
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