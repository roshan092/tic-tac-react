import {connect} from "react-redux";
import Login from "./Login";
import {updateText} from './actions';

const mapStateToProps = (store) => {
    return {
        text: store.text,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => dispatch(updateText(text)),
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;