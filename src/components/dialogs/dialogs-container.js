import {sendMessage} from "../../reducers/dialogs-reducer";
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
        sendMessage: (newMessageText) => {
            dispatch(sendMessage(newMessageText));
        }
    }
};

const DialogContainer = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);

export default DialogContainer;