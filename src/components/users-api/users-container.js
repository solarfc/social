import {connect} from "react-redux";
import {follow, setUsers, unFollow, setCurrentPage, setTotalUsersCount, toggleIsLoaded, toggleIsFollowingProgress} from "../../reducers/users-reducer";
import UsersAPIComponent from "./users-api";

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
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
    setUsers,
    follow,
    unFollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsLoaded,
    toggleIsFollowingProgress
}

const UsersContainer = connect(mapStateToProps, newObj)(UsersAPIComponent);

export default UsersContainer;