import React, {Component} from "react";
import Users from "../users";
import Spinner from "../spinner";

export default class UsersAPIComponent extends Component {

    onChangeCurrentPage = (id) => {
        const {pageSize} = this.props;
        this.props.getUsersThunkCreator(id, pageSize);
    }

    componentDidMount() {
        const {users, pageSize, currentPage} = this.props;
        if(users.length === 0) {
            this.props.getUsersThunkCreator(currentPage, pageSize);
        }
    }

    render() {
        const {users, currentPage, totalUsersCount, pageSize, loading, followingInProgress, follow, unFollow} = this.props;
        const isLoading = loading ? <Spinner /> : <Users users={users} currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} follow={follow} unFollow={unFollow} followingInProgress={followingInProgress} onChangeCurrentPage={this.onChangeCurrentPage}/>

        return isLoading;
    }
};