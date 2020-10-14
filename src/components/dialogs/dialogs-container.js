import {sendMessage, updateMessageText} from "../../reducers/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./dialogs";
import {withAuthRedirect} from "../../hoc/with-auth-redirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text) => {
            dispatch(updateMessageText(text));
        },
        sendMessage: () => {
            dispatch(sendMessage());
        }
    }
};

const DialogContainer = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);

export default DialogContainer;