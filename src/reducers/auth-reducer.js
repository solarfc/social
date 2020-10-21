import {login, logout, setUser} from "../services/services";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    data: {
        userId: null,
        email: null,
        login: null,
    },
    loading: true,
    isAuth: false
};

export const setAuthUserData = (data) => {
    return {
        type: SET_USER_DATA,
        payload: data,
    }
};

export const setUserThunkCreator = () => (dispatch) => {
    return setUser()
        .then(data => {
            dispatch(setAuthUserData(data.data));
        });
};

export const loginUserThunkCreator = (email, password, rememberMe) => (dispatch) => {
    login(email, password, rememberMe)
        .then(data => {
            if(data.data.resultCode === 0) {
                dispatch(setUserThunkCreator())
            } else {
                dispatch(stopSubmit('login', {_error: data.data.messages}));
            }
        })
};

export const logoutUserThunkCreator = () => (dispatch) => {
    logout()
        .then(data => {
            if(data.data.resultCode === 0) {
                dispatch(setUserThunkCreator())
            }
        })
};

const authReducer = (state = initialState, action) => {
    const a = state.isAuth;
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, data: action.payload, isAuth: !a, loading: false}
        default:
            return state;
    }
};

export default authReducer;

