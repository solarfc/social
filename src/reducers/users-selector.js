import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.users;
}

// export const getUsersSelector = (state) => { // пример создания сложного селектора
//     return getUsers(state).filter(item => true);
// }

export const getUsers = createSelector(getUsersSelector,(users) => { // селектор с помощью reselect
    return users.filter(item => true);
});

export const getPageSize = (state) => {
    return state.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.currentPage;
};

export const getLoading = (state) => {
    return state.loading;
};

export const getFollowingInProgress = (state) => {
    return state.followingInProgress;
};