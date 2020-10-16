import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {reducer as formReducer} from "redux-form";

const reducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer
});

export default reducer;