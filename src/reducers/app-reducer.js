import {setUserThunkCreator} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized: false
};

const setInitialized = () => {
    return {
        type: SET_INITIALIZED
    }
}

export const initialize = () => (dispatch) => {
    let promise = dispatch(setUserThunkCreator());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized());
        });
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state
    }
}

export default appReducer;