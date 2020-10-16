import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = ({handleSubmit}) => {

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
                <Field name="name" type="text" component="input" placeholder="Login"/>
            </div>
            <div className="form-group">
                <Field name="password" type="password" component="input" placeholder="password"/>
            </div>
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