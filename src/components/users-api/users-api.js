import React, {Component} from "react";
import Users from "../users";
import Spinner from "../spinner";
import {getUsers} from "../../services/services";

export default class UsersAPIComponent extends Component {

    getUsers() {
        const {usersPage: {users, pageSize, currentPage, loading}, setUsers, setTotalUsersCount, toggleIsLoaded} = this.props;
        if(users.length === 0) {
            getUsers(currentPage, pageSize)
                .then(data => {
                    setUsers(data.items);
                    setTotalUsersCount(data.totalCount);
                    toggleIsLoaded(false);
                });
        }
    }

    onChangeCurrentPage = (id) => {
        const {setCurrentPage, usersPage: {pageSize, loading}, setUsers, toggleIsLoaded} = this.props;
        toggleIsLoaded(true);
        setCurrentPage(id);
        getUsers(id, pageSize)
            .then(data => {
                setUsers(data.items);
                setTimeout(function () {
                    toggleIsLoaded(false);
                }, 500);
            });
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        const {usersPage: {users, currentPage, totalUsersCount, pageSize, loading, followingInProgress}, follow, unFollow, toggleIsFollowingProgress} = this.props;
        const isLoading = loading ? <Spinner /> : <Users users={users} currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} follow={follow} unFollow={unFollow} followingInProgress={followingInProgress} toggleIsFollowingProgress={toggleIsFollowingProgress} onChangeCurrentPage={this.onChangeCurrentPage}/>

        return isLoading;
    }
};