import React, {useEffect, useState} from "react";

/* functional component with hook */

const Status = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    status = status === null ? 'My Status' : status;

    useEffect(() => {
        setStatus(status);
    }, [props.status]);

    const onToggleStatus = () => {
        const edit = editMode;
        setEditMode(!edit);
        if(edit) {
            props.setUserStatusThunkCreator(status);
        }
    }

    const onChangeTextStatus = (e) => {
        setStatus(status = e.target.value);
    }

    const statuz = editMode ? <input type="text" value={status} onChange={onChangeTextStatus} onBlur={onToggleStatus} autoFocus={true}/> :
        <h3 onDoubleClick={onToggleStatus}>{status}</h3>

    return (
        <div>
            {statuz}
        </div>
    );
};

export default Status;

/* class component */
// export default class Status extends Component {
//     state = {
//         editMode: false,
//         status: (this.props.status === null) ? 'My Status' : this.props.status
//     };
//
//     // onChangeStatus = () => {
//     //     const edit = this.state.editMode;
//     //     this.setState({editMode: !edit, status : ''});
//     // };
//     //
//     // onPostStatus = () => {
//     //     this.setState({editMode: false})
//     // };
//
//
//     onToggleStatus = () => {
//         const edit = this.state.editMode;
//         this.setState({editMode: !edit});
//         if(edit) {
//             this.props.setUserStatusThunkCreator(this.state.status);
//         }
//     }
//
//     onChangeTextStatus = (e) => {
//         let text = e.target.value;
//         this.setState({status: text});
//     };
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if(prevState.status !== this.state.status) {
//             console.log(1)
//         }
//     }
//
//     render() {
//
//         const {editMode} = this.state;
//
//         const status = editMode ?
//             <input type="text" value={this.state.status} onChange={this.onChangeTextStatus} onBlur={this.onToggleStatus} autoFocus={true}/> :
//             <h3 onDoubleClick={this.onToggleStatus}>{this.state.status}</h3>
//         return (
//             <div>
//                 {status}
//             </div>
//         )
//     }
// }

