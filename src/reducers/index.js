import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const reducer = (state, action) => {
    return {
        profilePage: profileReducer(state, action),
        messagePage: dialogsReducer(state, action),
        sidebar: sidebarReducer(state, action)
    }
};

export default reducer;