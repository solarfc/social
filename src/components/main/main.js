import React from "react";
import {Switch, Route} from "react-router-dom";
import "./main.css";
import MyProfile from "../my-profile";
import Dialogs from "../dialogs";
import Posts from "../posts/posts";


const Main = ({state, dispatch}) => {
    const {profilePage, dialogPage} = state;

    return (
        <main>
            <Switch>
                <Route path="/profile" render={() => {return <MyProfile name="Vlad"/>}}></Route>
                <Route path="/dialogs" render={() => {return <Dialogs dialogPage={dialogPage} dispatch={dispatch}/>}}></Route>
                <Route path="/posts" render={() => {return <Posts profilePage={profilePage} dispatch={dispatch}/>}}></Route>
            </Switch>
        </main>
    );
};

export default Main;