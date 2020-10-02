import {connect} from "react-redux";
import Users from "./users";
import {followAC, setUsersAC, unFollowAC} from "../../reducers/users-reducer";

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

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
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;