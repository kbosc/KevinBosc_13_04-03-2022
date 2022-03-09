import React from 'react';

import userPng from "../../assets/user.png";
import * as Style from "./style"

export default function Main(props) {

    
    return (
        <Style.MainContent>
            <Style.MainContentSection>
                <img src={ userPng } alt="logo utilisateur" />
                <h1>Sign in</h1>
                <Style.MainContentForm>
                    <Style.InputWrapper>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </Style.InputWrapper>
                    <Style.InputWrapper>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </Style.InputWrapper>
                    <Style.InputRemember>
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </Style.InputRemember>
                    <Style.FormSignInLink to="/user/12">Sign in</Style.FormSignInLink>
                </Style.MainContentForm>
            </Style.MainContentSection>
        </Style.MainContent>
    );
}