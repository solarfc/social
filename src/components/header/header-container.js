import {connect} from "react-redux";
import {setAuthUserData} from "../../reducers/auth-reducer";
import HeaderAPI from "./header-api";

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderAPI);

export default HeaderContainer;