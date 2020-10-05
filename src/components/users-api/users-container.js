import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsLoadedAC} from "../../reducers/users-reducer";
import UsersAPIComponent from "./users-api";

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        follow: (id) => {
            dispatch(followAC(id));
        },
        unFollow: (id) => {
            dispatch(unFollowAC(id));
        },
        setCurrentPage: (id) => {
            dispatch(setCurrentPageAC(id));
        },
        setTotalUsersCount : (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toggleIsLoaded: (loading) => {
            dispatch(toggleIsLoadedAC(loading));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;