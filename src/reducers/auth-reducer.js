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
        payload: data
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, data: action.payload, isAuth: true, loading: false}
        default:
            return state;
    }
};

export default authReducer;