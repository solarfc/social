import React from "react";
import User from "../user";

const Users = ({usersPage: {users}, setUsers, follow, unFollow}) => {

    if(users.length === 0) {
        setUsers([
            {id: 1, followed: true, fullName: 'Dmitry', status: 'I\'m a Boss', location: {city: "Odessa", country: 'Ukraine'}},
            {id: 2, followed: true, fullName: 'Sasha', status: 'I\'m a BackEnd Developer', location: {city: "Odessa", country: 'Ukraine'}},
            {id: 3, followed: false, fullName: 'Sveta', status: 'I\'m a Design Boss', location: {city: "Odessa", country: 'Ukraine'}},

        ]);
    }

    const userz = users.map((item) => {
        const {id, followed, fullName, status, location: {city, country}} = item;
        return (
            <User key={id} id={id} followed={followed} fullName={fullName} status={status} city={city} country={country} follow={follow} unFollow={unFollow}/>
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