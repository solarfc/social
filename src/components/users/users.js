import React, {Component} from "react";
import User from "../user";
import * as axios from "axios";
import style from "./users.module.css"

export default class Users extends Component {

    getUsers() {
        console.log(this.props);
        const {usersPage: {users, pageSize, currentPage}, setUsers, setTotalUsersCount} = this.props;
        if(users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    setUsers(response.data.items);
                    setTotalUsersCount(response.data.totalCount);
                });
        }
    }

    onChangeCurrentPage = (id) => {
        const {setCurrentPage, usersPage: {pageSize}, setUsers} = this.props;
        setCurrentPage(id);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${id}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items);
            });
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        const {usersPage: {users, pageSize, totalUsersCount, currentPage}, follow, unFollow} = this.props;

        let pagesCount = Math.ceil(totalUsersCount / pageSize);

        let pages = [];

        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        const userz = users.map((item) => {
            const {name, id, uniqueUrlName, photos: {small, large}, status, followed} = item;
            return (
                <User key={id} id={id} name={name} uniqueUrlName={uniqueUrlName} smallPhoto={small} largePhoto={large} status={status} followed={followed} follow={follow} unFollow={unFollow}/>
            )
        });

        return (
            <div>
                <h1>Users there</h1>
                <div className="pagination">
                    <ul className={`${style.pag}`}>
                        {pages.map((item) => {
                            return (
                                <li key={item} id={item} className={currentPage === item ? `${style.selectedPage}` : ''} onClick={() => this.onChangeCurrentPage(item)}>{item}</li>
                            )
                        }).slice(0, 20)}
                    </ul>
                </div>
                <div className="all-users">
                    {userz}
                </div>
                <button type="submit">Show more</button>
            </div>
        )
    }
};