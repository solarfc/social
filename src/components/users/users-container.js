import {connect} from "react-redux";
import Users from "./users";
import {followAC, setUsersAC, unFollowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../reducers/users-reducer";

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
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;