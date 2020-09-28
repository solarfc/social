import {sendMessage, updateMessageText} from "../../reducers/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./dialogs";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text) => {
            dispatch(updateMessageText(text))
        },
        sendMessage: () => {
            dispatch(sendMessage());
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer;