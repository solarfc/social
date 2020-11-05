export const auth = (state) => {
    return state.auth
};

export const userId = (state) => {
    return state.auth.data.id;
};

export const isAuth = (state) => {
    return state.auth.isAuth;
};