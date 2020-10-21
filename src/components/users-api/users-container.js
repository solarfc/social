import {connect} from "react-redux";
import {getUsersThunkCreator, follow, unFollow} from "../../reducers/users-reducer";
import UsersAPIComponent from "./users-api";
import {
    getCurrentPage,
    getFollowingInProgress,
    getLoading,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../reducers/users-selector";

const mapStateToProps = (state) => {
    return {
        users: getUsers(state.usersPage),
        pageSize: getPageSize(state.usersPage),
        totalUsersCount: getTotalUsersCount(state.usersPage),
        currentPage: getCurrentPage(state.usersPage),
        loading: getLoading(state.usersPage),
        followingInProgress: getFollowingInProgress(state.usersPage)
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         follow: (id) => {
//             dispatch(followAC(id));
//         },
//         unFollow: (id) => {
//             dispatch(unFollowAC(id));
//         },
//         setCurrentPage: (id) => {
//             dispatch(setCurrentPageAC(id));
//         },
//         setTotalUsersCount : (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsLoaded: (loading) => {
//             dispatch(toggleIsLoadedAC(loading));
//         }
//     }
// };

let newObj = { // тоже самое, что и выше
    getUsersThunkCreator,
    follow,
    unFollow
}

const UsersContainer = connect(mapStateToProps, newObj)(UsersAPIComponent);

export default UsersContainer;