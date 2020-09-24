import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";

const reducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
});

export default reducer;