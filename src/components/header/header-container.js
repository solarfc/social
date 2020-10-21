import {connect} from "react-redux";
import {logoutUserThunkCreator} from "../../reducers/auth-reducer";
import HeaderAPI from "./header-api";

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

const HeaderContainer = connect(mapStateToProps, {logoutUserThunkCreator})(HeaderAPI);

export default HeaderContainer;