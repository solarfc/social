import {getUserStatus, savePhoto, saveProfile, setUserProfileInfo, updateStatus} from "../services/services";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const GET_USER_STATUS = 'profile/GET_USER_STATUS';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DEL_POST = 'profile/DELETE_POST';
const SAVE_PHOTO = 'profile/SAVE_PHOTO';

const initialState = {
    postData: [
        {avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', post: 'Hi, a\'m Avatar', likesCount: 20},
        {avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', post: 'First Post', likesCount: 55}
    ],
    profile: null,
    status: null
};

export const addPostCreator = (post) => {
    return {
        type: ADD_POST,
        payload: post
    }
};

export const deletePostCreator = (id) => {
    return {
        type: DEL_POST,
        payload: id
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        payload: profile
    }
}

export const getStatus = (status) => {
    return {
        type: GET_USER_STATUS,
        payload: status
    }
}

export const setStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        payload: status
    }
}

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO,
        payload: photos
    }
}

export const setUserProfileThunkCreator = (id) => async (dispatch) => {
    let data = await setUserProfileInfo(id);
    dispatch(setUserProfile(data));
}

export const getUserStatusThunkCreator = (id) => async (dispatch) => {
    let data = await getUserStatus(id);
    dispatch(getStatus(data));
}

export const setUserStatusThunkCreator = (status) => async (dispatch) => {
    let data = await updateStatus(status)
    dispatch(setStatus(data))
}

export const savePhotoThunkCreator = (file) => async (dispatch) => {
    let data = await savePhoto(file);
    if(data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.photos));
    }
}

export const saveProfileThunkCreator = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.data.id;
    let data = await saveProfile(profile);
    // dispatch(setUserProfile(profile));
    dispatch(setUserProfileThunkCreator(userId));
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE :
            return {...state, profile: action.payload}
        case GET_USER_STATUS :
            return {...state, status: action.payload}
        case SET_USER_STATUS :
            return {...state, status: action.payload}
        case ADD_POST:
            let newPost = {
                avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg',
                post: action.payload,
                likesCount: 0
            };
            return  {...state, postData: [newPost, ...state.postData]};
        case DEL_POST:
            return {...state, postData: state.postData.filter(item => item.id !== action.payload)}
        case SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.payload}}
        default:
            return state;
    }
};

export default profileReducer;