const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    postData: [
        {avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', post: 'Hi, a\'m Avatar', likesCount: 20},
        {avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', post: 'First Post', likesCount: 55}
    ],
    postText: '',
    profile: null
};

export const updatePostTextCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        payload: text
    }
};

export const addPostCreator = () => {
    return {
        type: ADD_POST
    }
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        payload: profile
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE :
            return {...state, profile: action.payload}
        case UPDATE_POST_TEXT:
            return  {...state, postText: action.payload};
        case ADD_POST:
            let newPost = {
                avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg',
                post: state.postText,
                likesCount: 0
            };
            return  {...state, postText: '', postData: [newPost, ...state.postData]};
        default:
            return state;
    }
};

export default profileReducer;