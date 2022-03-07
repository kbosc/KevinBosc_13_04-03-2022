import React from 'react';
import { useParams, Link } from 'react-router-dom';


import logo from "../../assets/argentBankLogo.png";
import logOut from "../../assets/logout.png";
import userPng from "../../assets/user.png";
import * as Style from "./style"

export default function Header(props) {
    const userId = useParams()
    console.log(userId);
    return (
        <Style.HeaderContainer>
            <Link to="/">
                <img src={ logo } alt='Argent Bank Logo'/>
            </Link>
            <Style.HeaderContainerUser>
                <Style.HeaderUserLink to="/signin">
                    <img src={ userPng } alt="logo utilisateur" />
                    <p>Sign In</p>
                </Style.HeaderUserLink>
                {/* condition si userId affiche logout */}
                <Style.HeaderUserLink to="/">
                    <img src={ logOut } alt="logo déconnexion" />
                    <p>Sign Out</p>
                </Style.HeaderUserLink>
            </Style.HeaderContainerUser>
        </Style.HeaderContainer>
    );
}