import React, {Component} from "react";
import "./app.css";
import Aside from "../aside";
import Main from "../main";
import HeaderContainer from "../header/header-container";
import {connect} from "react-redux";
import {initialize} from "../../reducers/app-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Spinner from "../spinner";

class App extends Component {

    componentDidMount() {
        this.props.initialize();
    }

    render() {
        const {initialized} = this.props;
        if(initialized) {
            return (
                <div>
                    <HeaderContainer />
                    <section className="main-content">
                        <Aside />
                        <Main />
                    </section>
                </div>
            );
        } else {
            return (
                <Spinner />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(withRouter, connect(mapStateToProps, {initialize}))(App);