import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Wrapper) => {

    class RedirectComponent extends Component {
        render() {
            if(!this.props.isAuth) {
                return <Redirect to='/login' />
            }

            return <Wrapper {...this.props}/>
        }
    }

    const mapStateToPropsToRedirect = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    };

    const ConnectedRedirectComponent = connect(mapStateToPropsToRedirect)(RedirectComponent);

    return ConnectedRedirectComponent;
}