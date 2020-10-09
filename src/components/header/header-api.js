import React, {Component} from "react";
import Header from "./header";
import * as axios from "axios";

export default class HeaderAPI extends Component {

    componentDidMount() {
        const {setAuthUserData} = this.props;
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if(response.data.resultCode === 0) {
                    setAuthUserData(response.data.data);
                } else {
                    alert(response.data.messages);
                }
            })
    }

    render() {
        const {auth: {data: {login}, isAuth}} = this.props;
        return (
            <Header login={login} isAuth={isAuth}/>
        )
    }
}