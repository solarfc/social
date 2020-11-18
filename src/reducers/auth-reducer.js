import {login, logout, setUser, getCaptcha} from "../services/services";
import {stopSubmit} from "redux-form";
import {getUsersThunkCreator} from "./users-reducer";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';

let initialState = {
    data: {
        userId: null,
        email: null,
        login: null,
    },
    loading: true,
    isAuth: false,
    captchaUrl: null
};

export const setAuthUserData = (data) => {
    return {
        type: SET_USER_DATA,
        payload: data,
    }
};

export const getCaptchaUrl = (url) => {
    return {
        type: GET_CAPTCHA_URL,
        payload: url
    }
};

export const setUserThunkCreator = () => async (dispatch) => {
    let data = await setUser();
    dispatch(setAuthUserData(data.data));
};

export const loginUserThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await login(email, password, rememberMe, captcha);
    if(data.data.resultCode === 0) {
        dispatch(setUserThunkCreator());
    } else {
        if(data.data.resultCode === 10) {
            dispatch(gatCaptchaUrlThunkCreator())
        }
        dispatch(stopSubmit('login', {_error: data.data.messages}));
    }
};

export const logoutUserThunkCreator = () => async (dispatch) => {
    let data = await logout();
    if(data.data.resultCode === 0) {
        dispatch(setUserThunkCreator());
    }
};

export const gatCaptchaUrlThunkCreator = () => async (dispatch) => {
    let data = await getCaptcha();
    const captchaUrl = data.data.url;
    dispatch(getCaptchaUrl(captchaUrl));
};

const authReducer = (state = initialState, action) => {
    const a = state.isAuth;
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, data: action.payload, isAuth: !a, loading: false}
        case GET_CAPTCHA_URL:
            return {...state, captchaUrl: action.payload}
        default:
            return state;
    }
};

export default authReducer;