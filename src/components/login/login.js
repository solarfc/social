import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../forms-controls/form-controls";
import {required} from "../../utils/validators";

const LoginForm = ({handleSubmit}) => {

    return (
        <form action="" onSubmit={handleSubmit}>
            <Field name="name" type="text" component={Input} validate={[required]} placeholder="Login"/>
            <Field name="password" type="password" component={Input} validate={[required]} placeholder="password"/>
            <div className="form-group">
                <Field name="rememberMe" type="checkbox" component="input"/> remember me
            </div>
            <div className="form-group">
                <button type={"submit"}>Log In</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {

    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default Login;