import React, { useEffect } from 'react';
import { useNavigate } from "react-router";

import { useSelector } from "react-redux"

import UserAccount from '../../components/UserAccount/index';
import UserHeader from "../../components/UserHeader/index"
import * as Style from "./style"

export default function Main(props) {
    const navigate = useNavigate();
    const userData = useSelector(state => state.user)
    console.log(userData);
    useEffect(() => {
        console.log(userData)
        if (!userData.isLogged) {
            return navigate("/login", { replace: true });
        }
    })
    return (
        <Style.MainContent>
            <UserHeader />
            <UserAccount />            
        </Style.MainContent>
    );
}