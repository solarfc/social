const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_LOADED = "TOGGLE_IS_LOADED";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    loading: true,
    followingInProgress: []
};

export const follow = (id) => {
    return {
        type: FOLLOW,
        payload: id //userID
    }
};

export const unFollow = (id) => {
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
}

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
        loading: loading,
        id: id
    }
}

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
            return {...state, followingInProgress: action.loading ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(id => id != action.id)}
        case FOLLOW:
            return {
                ...state,
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