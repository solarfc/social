import {combineReducers, createStore} from "redux";
import profileReducer from "../reducers/profile-reducer";
import dialogsReducer from "../reducers/dialogs-reducer";
// // import reducer from "../reducers";
//
let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer
});

const store = createStore(reducers);

export default store;