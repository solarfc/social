import {connect} from "react-redux";
import {setUserThunkCreator} from "../../reducers/auth-reducer";
import HeaderAPI from "./header-api";

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

const HeaderContainer = connect(mapStateToProps, {setUserThunkCreator})(HeaderAPI);

export default HeaderContainer;