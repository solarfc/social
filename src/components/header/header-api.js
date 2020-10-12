import React, {Component} from "react";
import Header from "./header";

export default class HeaderAPI extends Component {

    componentDidMount() {
        this.props.setUserThunkCreator();
    }

    render() {
        const {auth: {data: {login}, isAuth}} = this.props;
        return (
            <Header login={login} isAuth={isAuth}/>
        )
    }
}