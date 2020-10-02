import React, {Component} from "react";
import User from "../user";
import * as axios from "axios";

// const Users = ({usersPage: {users}, setUsers, follow, unFollow}) => {
//
//     const getUsers = () => {
//         if(users.length === 0) {
//             axios.get("https://social-network.samuraijs.com/api/1.0/users")
//                 .then(response => {
//                     setUsers(response.data.items);
//                 });
//         }
//     }
//
//     const userz = users.map((item) => {
//         const {name, id, uniqueUrlName, photos: {small, large}, status, followed} = item;
//         return (
//             <User key={id} name={name} uniqueUrlName={uniqueUrlName} smallPhoto={small} largePhoto={large} status={status} followed={followed} follow={follow} unFollow={unFollow}/>
//         )
//     });
//
//     return (
//         <div>
//             <button type="submit" onClick={getUsers}>Get Users</button>
//             <h1>Users there</h1>
//             <div className="all-users">
//                 {userz}
//             </div>
//             <button type="submit">Show more</button>
//         </div>
//     )
// };
//
// export default Users;
export default class Users extends Component {

    getUsers() {
        const {usersPage: {users}, setUsers} = this.props;
        if(users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    setUsers(response.data.items);
                });
        }
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        const {usersPage: {users}, follow, unFollow} = this.props;

        const userz = users.map((item) => {
            const {name, id, uniqueUrlName, photos: {small, large}, status, followed} = item;
            return (
                <User key={id} id={id} name={name} uniqueUrlName={uniqueUrlName} smallPhoto={small} largePhoto={large} status={status} followed={followed} follow={follow} unFollow={unFollow}/>
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
    }
};