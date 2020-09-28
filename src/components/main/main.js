import React from "react";
import {Switch, Route} from "react-router-dom";
import "./main.css";
import MyProfile from "../my-profile";
import Dialogs from "../dialogs";
import PostsContainer from "../posts";


const Main = () => {

    return (
        <main>
            <Switch>
                <Route path="/profile" render={() => {return <MyProfile name="Vlad"/>}}></Route>
                <Route path="/dialogs" render={() => {return <Dialogs />}}></Route>
                <Route path="/posts" render={() => {return <PostsContainer />}}></Route>
            </Switch>
        </main>
    );
};

export default Main;