import React, {Component} from "react";
import Users from "../users";
import * as axios from "axios";
import Spinner from "../spinner";

export default class UsersAPIComponent extends Component {

    getUsers() {
        const {usersPage: {users, pageSize, currentPage, loading}, setUsers, setTotalUsersCount, toggleIsLoaded} = this.props;
        if(users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    setUsers(response.data.items);
                    setTotalUsersCount(response.data.totalCount);
                    toggleIsLoaded(false);
                });
        }
    }

    onChangeCurrentPage = (id) => {
        const {setCurrentPage, usersPage: {pageSize, loading}, setUsers, toggleIsLoaded} = this.props;
        toggleIsLoaded(true);
        setCurrentPage(id);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${id}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items);
                setTimeout(function () {
                    toggleIsLoaded(false);
                }, 500);
            });
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        const {usersPage: {users, currentPage, totalUsersCount, pageSize, loading}, follow, unFollow} = this.props;
        const isLoading = loading ? <Spinner /> : <Users users={users} currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} follow={follow} unFollow={unFollow} onChangeCurrentPage={this.onChangeCurrentPage}/>

        return isLoading;
    }
};