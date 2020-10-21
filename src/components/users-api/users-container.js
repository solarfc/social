import {connect} from "react-redux";
import {getUsersThunkCreator, follow, unFollow} from "../../reducers/users-reducer";
import UsersAPIComponent from "./users-api";
import {getUsers} from "../../reducers/users-selector";

const mapStateToProps = (state) => {
    return {
        usersPage: getUsers(state),
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