import React from 'react';
import FacebookLoginButton from 'react-facebook-login/dist/facebook-login-render-props';
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {facebookAppId} from "../../constants";

import {facebookLogin} from "../../store/actions/usersAction";

const FacebookLogin = () => {

    const dispatch = useDispatch();

    const facebookResponse = response => {
        if (response.id) {
            dispatch(facebookLogin(response));
        }
    };


    return <FacebookLoginButton
    appId={facebookAppId}
    fields="name,email,picture"
    render={renderProps => (
    <Button onClick={renderProps.onClick}>Enter with Facebook</Button>
        )}
    callback={facebookResponse}
    />
};

export default FacebookLogin;