import React from "react";
import User from "../user";
import * as axios from "axios";

const Users = ({usersPage: {users}, setUsers, follow, unFollow}) => {

    if(users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                setUsers(response.data.items);
            });
    }

    const userz = users.map((item) => {
        const {name, id, uniqueUrlName, photos: {small, large}, status, followed} = item;
        return (
            <User key={id} name={name} uniqueUrlName={uniqueUrlName} smallPhoto={small} largePhoto={large} status={status} followed={followed} follow={follow} unFollow={unFollow}/>
        )
    });

    return (
        <div>
            <h1>Users there</h1>
            <div className="all-users">
                {userz}
            </div>
            <button type="submit">Show more</button>
        </div>
    )
};

export default Users;