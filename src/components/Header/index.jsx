import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"

import logo from "../../assets/argentBankLogo.png";
import logOut from "../../assets/logout.png";
import userPng from "../../assets/user.png";
import { logout } from "../../redux"
import * as Style from "./style"

export default function Header(props) {
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <Style.HeaderContainer>
            <Link to="/">
                <img src={ logo } alt='Argent Bank Logo'/>
            </Link>
            <Style.HeaderContainerUser>
                <Style.HeaderUserLink to="/login">
                    <img src={ userPng } alt="logo utilisateur" />
                    <p>{userData.isLogged ? userData.data.firstName : "Sign In"}</p>
                </Style.HeaderUserLink>
                {
                    userData.isLogged &&
                    <Style.HeaderUserLink to="/" onClick={() => dispatch(logout(userData))}>
                        <img src={ logOut } alt="logo déconnexion" />
                        <p>Sign Out</p>
                    </Style.HeaderUserLink>
                }
            </Style.HeaderContainerUser>
        </Style.HeaderContainer>
    );
}