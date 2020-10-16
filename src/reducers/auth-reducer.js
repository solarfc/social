import {login, setUser} from "../services/services";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN_USER = 'LOGIN_USER';

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
        payload: data
    }
};

export const setUserThunkCreator = () => (dispatch) => {
    setUser()
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setAuthUserData(data.data));
            }
        })
};


export const loginUser = (data) => {
    return {
        type: LOGIN_USER,
        payload: data
    }
};

export const loginUserThunkCreator = (data) => (dispatch) => {
    login(data)
        .then(data => {
            dispatch(loginUser(data.config.data))
        })
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, data: action.payload, isAuth: true, loading: false}
        case SET_USER_DATA:
            return {...state, data: action.payload, isAuth: true, loading: false}
        default:
            return state;
    }
};

export default authReducer;

