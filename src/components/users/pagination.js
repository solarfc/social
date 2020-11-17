import React, {Component, useState} from "react";
import style from "./users.css";
import Pagination from "react-js-pagination";

export default class Paginations extends Component {

    state = {
        activePage: this.props.currentPage
    };

    handlePageChange(pageNumber) {
        console.log(pageNumber);
        this.setState({activePage: pageNumber});
        this.props.onChangeCurrentPage(pageNumber);
    }

    render() {
        const {totalUsersCount, pageSize} = this.props;
        return (
            <Pagination style={style.pagination} prevPageText='prev' nextPageText='next' firstPageText='first' lastPageText='last' activePage={this.state.activePage} totalItemsCount={Math.ceil(totalUsersCount / pageSize)} pageRangeDisplayed={pageSize} onChange={this.handlePageChange.bind(this)} />
        )
    }
}

// const Pagination = ({currentPage, totalUsersCount, pageSize,  onChangeCurrentPage, portionSize = 10}) => {
//     let pagesCount = Math.ceil(totalUsersCount / pageSize);
//
//     let pages = [];
//
//     for(let i = 1; i <= pagesCount; i++) {
//         pages.push(i);
//     }
//
//     // let portionsCount = Math.ceil(pagesCount / portionSize);
//     // let [portionNumber, setPortionNumber] = useState(1);
//     // let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
//     // let rightPortionPageNumber = portionNumber * portionSize;
//
//     return (
//         <div className="pagination">
//             {/*{portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>}*/}
//             <ul className={`${style.pag}`}>
//                 {/*{pages.filter(items => items >= leftPortionPageNumber && items <= rightPortionPageNumber)*/}
//                 {/*    .map(items => {*/}
//                 {/*        return (*/}
//                 {/*            <li key={items} id={items} className={currentPage === items ? `${style.selectedPage}` : ''} onClick={() => onChangeCurrentPage(items)}>{items}</li>*/}
//                 {/*        )*/}
//                 {/*    })}*/}
//                 {pages.map((item) => {
//                     return (
//                         <li key={item} id={item} className={currentPage === item ? `${style.selectedPage}` : ''}
//                             onClick={() => onChangeCurrentPage(item)}>{item}</li>
//                     )
//                 }).slice(0, 20)}
//             </ul>
//             {/*{portionsCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>}*/}
//         </div>
//     )
// };
//
// export default Pagination;