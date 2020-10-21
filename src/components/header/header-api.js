import React, {Component} from "react";
import Header from "./header";

export default class HeaderAPI extends Component {

    render() {
        const {auth: {data: {login}, isAuth}, logoutUserThunkCreator} = this.props;
        return (
            <Header login={login} isAuth={isAuth} logoutUserThunkCreator={logoutUserThunkCreator}/>
        )
    }
}