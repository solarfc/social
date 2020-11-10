import React from "react";
import style from "./users.module.css";

const Pagination = ({currentPage, totalUsersCount, pageSize,  onChangeCurrentPage}) => {
    console.log(currentPage);

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
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
    )

};

export default Pagination;