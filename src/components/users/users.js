import React from "react";
import User from "../user";
import Pagination from "./pagination";

const Users = ({users, currentPage, totalUsersCount, pageSize, follow, unFollow, onChangeCurrentPage, followingInProgress}) => {

    const userz = users.map((item) => {
        const {name, id, uniqueUrlName, photos: {small, large}, status, followed} = item;
        return (
            <User key={id} id={id} name={name} uniqueUrlName={uniqueUrlName} smallPhoto={small} largePhoto={large}
                  status={status} followed={followed} follow={follow} unFollow={unFollow} followingInProgress={followingInProgress}/>
        )
    });

    return (
        <div>
            <h1>Users here</h1>
            <Pagination currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onChangeCurrentPage={onChangeCurrentPage}/>
            <div className="all-users">
                {userz}
            </div>
        </div>
    )
};

export default Users;