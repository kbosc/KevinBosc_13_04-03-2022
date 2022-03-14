import { useNavigate } from "react-router";
import { useDispatch } from "react-redux"
import React from 'react';

import userPng from "../../assets/user.png";
import { userLogin } from "../../redux"
import * as Style from "./style"

function Login() {
    const inputUsername = React.createRef();
    const inputPassword = React.createRef();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onSubmitConnect = async () => {
        const {payload} = await dispatch(userLogin({
            email: inputUsername.current.value,
            password: inputPassword.current.value,
        }));
        console.log(payload);
        navigate(`/user/${payload.user.id}`, { replace: true });
      };

    return (
        <Style.MainContent>
            <Style.MainContentSection>
                <img src={ userPng } alt="logo utilisateur" />
                <h1>Sign in</h1>
                <Style.MainContentForm>
                    <Style.InputWrapper>
                        <label htmlFor="username">Username</label>
                        <input ref={inputUsername} type="text" id="username" />
                    </Style.InputWrapper>
                    <Style.InputWrapper>
                        <label htmlFor="password">Password</label>
                        <input ref={inputPassword} type="password" id="password" />
                    </Style.InputWrapper>
                    <Style.InputRemember>
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </Style.InputRemember>
                    <Style.FormSignInLink onClick={onSubmitConnect} >Sign in</Style.FormSignInLink>
                </Style.MainContentForm>
            </Style.MainContentSection>
        </Style.MainContent>
    );
}

export default Login;
