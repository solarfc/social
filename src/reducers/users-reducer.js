import {followUser, getUsers, unFollowUser} from "../services/services";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_LOADED = "users/TOGGLE_IS_LOADED";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    loading: true,
    followingInProgress: []
};

export const confirmFollow = (id) => {
    return {
        type: FOLLOW,
        payload: id //userID
    }
};

export const confirmUnFollow = (id) => {
    return {
        type: UNFOLLOW,
        payload: id //userID
    }
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }
};

export const setCurrentPage = (id) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: id //current page
    }
};

export const setTotalUsersCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: totalCount
    }
};

export const toggleIsLoaded = (loading) => {
    return {
        type: TOGGLE_IS_LOADED,
        payload: loading
    }
};

export const toggleIsFollowingProgress = (loading, id) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {
            loading: loading,
            id: id
        }
    }
};

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => { //redux thunk
    dispatch(toggleIsLoaded(true));
    dispatch(setCurrentPage(currentPage));
    let data = await getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsLoaded(false));
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, id));
    let data = await apiMethod;
    if(data.resultCode === 0) {
        dispatch(actionCreator);
        dispatch(toggleIsFollowingProgress(false, id));
    }
};

export const follow = (id) => (dispatch) => {
    followUnfollowFlow(dispatch, id, followUser(id), confirmFollow(id));

};

export const unFollow = (id) => (dispatch) => {
    followUnfollowFlow(dispatch, id, unFollowUser(id), confirmUnFollow(id));
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.payload, }
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.payload}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case TOGGLE_IS_LOADED:
            return {...state, loading : action.payload}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state, followingInProgress: action.payload.loading ? [...state.followingInProgress, action.payload.id] : state.followingInProgress.filter(id => id !== action.payload.id)}
        case FOLLOW:
            return {...state,
                // users: updateObjectInArray(state.users, action.payload, 'id', {followed: true})
                users: [...state.users.map(user => {
                    if(user.id === action.payload) {
                        return {...user, followed: true}
                    }
                    return user;
                })]
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map(user => {
                    if(user.id === action.payload) {
                        return {...user, followed: false}
                    }
                    return user;
                })]
            }
        default:
            return state;
    }
};

export default userReducer;