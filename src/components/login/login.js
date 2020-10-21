import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../forms-controls/form-controls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {loginUserThunkCreator} from "../../reducers/auth-reducer";
import {Redirect} from "react-router-dom";
import "./login.css"
import {auth} from "../../reducers/auth-selecros";

const LoginForm = ({handleSubmit, error}) => {

    const formError = error ? <div className="some-error">{error}</div> : null;

    return (
        <form action="" onSubmit={handleSubmit}>
            <Field name="email" type="text" component={Input} validate={[required]} placeholder="Login"/>
            <Field name="password" type="password" component={Input} validate={[required]} placeholder="password"/>
            <div className="form-group">
                <Field name="rememberMe" type="checkbox" component="input"/> remember me
            </div>
            <div className="form-group">
                <button type={"submit"}>Log In</button>
            </div>
            {formError}
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({auth: {isAuth}, loginUserThunkCreator}) => {

    const onSubmit = (formData) => {
        const {email, password, rememberMe} = formData;
        loginUserThunkCreator(email, password, rememberMe);
    };

    if(isAuth) {
        return <Redirect to="/profile" />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        auth: auth(state)
    }
};

export default connect(mapStateToProps, {loginUserThunkCreator})(Login);