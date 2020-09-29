const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    users: [
        // {id: 1, followed: true, fullName: 'Dmitry', status: 'I\'m a Boss', location: {city: "Odessa", country: 'Ukraine'}},
        // {id: 2, followed: true, fullName: 'Sasha', status: 'I\'m a BackEnd Developer', location: {city: "Odessa", country: 'Ukraine'}},
        // {id: 3, followed: false, fullName: 'Sveta', status: 'I\'m a Design Boss', location: {city: "Odessa", country: 'Ukraine'}},
    ]
};

export const followAC = (id) => {
    return {
        type: FOLLOW,
        payload: id //userID
    }
};

export const unFollowAC = (id) => {
    return {
        type: UNFOLLOW,
        payload: id //userID
    }
};

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, ...action.payload]}
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