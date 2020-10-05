import React from "react";
import User from "../user";
import style from "./users.module.css"

const Users = ({users, currentPage, totalUsersCount, pageSize, follow, unFollow, onChangeCurrentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const userz = users.map((item) => {
        const {name, id, uniqueUrlName, photos: {small, large}, status, followed} = item;
        return (
            <User key={id} id={id} name={name} uniqueUrlName={uniqueUrlName} smallPhoto={small} largePhoto={large}
                  status={status} followed={followed} follow={follow} unFollow={unFollow}/>
        )
    });

    return (
        <div>
            <h1>Users here</h1>
            <div className="pagination">
                <ul className={`${style.pag}`}>
                    {pages.map((item) => {
                        return (
                            <li key={item} id={item} className={currentPage === item ? `${style.selectedPage}` : ''}
                                onClick={() => onChangeCurrentPage(item)}>{item}</li>
                        )
                    }).slice(0, 20)}
                </ul>
            </div>
            <div className="all-users">
                {userz}
            </div>
        </div>
    )
};

export default Users;