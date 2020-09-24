import * as serviceWorker from './serviceWorker';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/app";
import store from "./redux/redux-store"; // store из redux
// import store from "./store"; // наш store

const state = store.getState();
const {dispatch} = store;
console.log(state.profilePage.newPostText);

let rerenderEntireTree = () => {
    ReactDOM.render(
        <Router>
            <App state={state} dispatch={dispatch.bind(store)} />
        </Router>, document.getElementById('root')
    );
};

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
// window.state = state;
// subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();