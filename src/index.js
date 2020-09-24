// import * as serviceWorker from './serviceWorker';
// import React from "react";
// import ReactDOM from "react-dom";
// import {BrowserRouter as Router} from "react-router-dom";
// import App from "./components/app";
// import store from "./redux/redux-store"; // store из redux
// // import store from "./store"; // наш store
//
// const state = store.getState();
// const {dispatch} = store;
//
// let rerenderEntireTree = (state) => {
//     console.log(state);
//
//     ReactDOM.render(
//         <Router>
//             <App state={state} dispatch={dispatch.bind(store)} />
//         </Router>, document.getElementById('root')
//     );
// };
//
// rerenderEntireTree(state);
// store.subscribe(() => {
//     rerenderEntireTree(state);
// });
// // window.state = state;
// // subscribe(rerenderEntireTree);
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import store from "./redux/redux-store";
import {addPostActionCreator} from "./reducers/profile-reducer";
store.dispatch(addPostActionCreator());
window.state = store.getState();

console.log(store.getState());

